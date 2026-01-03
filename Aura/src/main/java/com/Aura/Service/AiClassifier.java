package com.Aura.Service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.JsonNode;


import com.Aura.Dto.ClassificationResult;





@Service
public class AiClassifier {
    private final WebClient webclient;
    
    @Value("${gemini.api.key}")
    private String apikey;
    public AiClassifier(WebClient.Builder builder) {
        this.webclient = builder.build();
    }

    public ClassificationResult classifycomplaint(String description) {
        try{
            //Build Request
            String body =  "{ \"contents\": [ { \"parts\": [ { \"text\": \"" +
                          "Extract category, location, severity from: " + description +
                          ". Return JSON with fields category, location, severity." +
                          "\" } ] } ] }";
            //call gemini
            String response =webclient.post()
                    .uri("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + apikey)
                    .header("Content-Type", "application/json")
                    .bodyValue(body)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();

            
             // Parse response
            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(response);
            String text = root.path("candidates")
                              .get(0)
                              .path("content")
                              .path("parts")
                              .get(0)
                              .path("text")
                              .asText();

            return mapper.readValue(text, ClassificationResult.class);

              

        }catch(Exception e) {
            e.printStackTrace();
            return null;

        }
    }

    
 
    

    
}
