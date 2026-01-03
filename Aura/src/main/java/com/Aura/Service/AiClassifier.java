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

    public ClassificationResult classifyComplaint(String description) {
        try {
            // Build request safely
            String prompt = "Extract category, location, severity from: " + description +
                            ". Return JSON with fields category, location, severity.";

            String body = "{ \"contents\": [ { \"parts\": [ { \"text\": \"" +
                          prompt.replace("\"", "\\\"") + "\" } ] } ] }";

            // Call Gemini
            String response = webclient.post()
                    .uri("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + apikey)
                    .header("Content-Type", "application/json")
                    .bodyValue(body)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();

            // Debug log raw response
            System.out.println("Gemini raw response: " + response);

            // Parse response safely
            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(response);

            JsonNode candidates = root.path("candidates");
            if (candidates.isMissingNode() || !candidates.isArray() || candidates.isEmpty()) {
                return defaultResult(description);
            }

            JsonNode textNode = candidates.get(0)
                                          .path("content")
                                          .path("parts")
                                          .get(0)
                                          .path("text");

            if (textNode.isMissingNode()) {
                return defaultResult(description);
            }

            String text = textNode.asText();

            // Map Gemini JSON string into ClassificationResult
            return mapper.readValue(text, ClassificationResult.class);

        } catch (Exception e) {
            e.printStackTrace();
            return defaultResult(description);
        }
    }

    // Fallback result if Gemini fails
    private ClassificationResult defaultResult(String description) {
        ClassificationResult result = new ClassificationResult();
        result.setCategory("Unclassified");
        result.setLocation("Unknown");
        result.setSeverity("Medium"); // safe default
        return result;
    }
}
