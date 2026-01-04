package com.Aura.Config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class OpenAiConfig {
    @Value("${spring.ai.openai.api-key}")
    private String apiKey;

    @Bean
    public WebClient openAiWebClient(WebClient.Builder builder) {
        if (apiKey == null || apiKey.equals("your_openai_key_here")) {
            System.err.println("WARNING: OpenAI API key is missing. Speech-to-Text may not work.");
        }
        return builder
                .baseUrl("https://api.openai.com/v1")
                .defaultHeader(HttpHeaders.AUTHORIZATION, "Bearer " + apiKey)
                .build();
    }
}
