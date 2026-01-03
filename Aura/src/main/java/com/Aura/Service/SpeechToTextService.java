package com.Aura.Service;

import java.io.IOException;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.client.WebClient;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class SpeechToTextService {

     private final WebClient webClient;
    private final ObjectMapper mapper = new ObjectMapper();

    public SpeechToTextService(WebClient openAiWebClient) {
        this.webClient = openAiWebClient;
    }

    public String transcribe(MultipartFile audioFile) {
        try {
            LinkedMultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
            body.add("file", new MultipartInputResource(audioFile));
            body.add("model", "whisper-1");

            String response = webClient.post()
                    .uri("/audio/transcriptions")
                    .contentType(MediaType.MULTIPART_FORM_DATA)
                    .bodyValue(body)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();

            JsonNode root = mapper.readTree(response);
            return root.path("text").asText();
        } catch (Exception e) {
            return "Transcription failed";
        }
    }
}

class MultipartInputResource extends ByteArrayResource {
    private final String filename;

    MultipartInputResource(MultipartFile file) throws IOException {
        super(file.getBytes());
        this.filename = file.getOriginalFilename();
    }

    @Override
    public String getFilename() {
        return filename;
    }

    
}
