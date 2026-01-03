package com.Aura.Config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.web.reactive.function.client.WebClient;

import com.google.api.client.util.Value;

@Configuration
public class OpenAiConfig {
     @Value("${spring.ai.openai.api-key}")
    private String apiKey;

    @Bean
    public WebClient openAiWebClient(WebClient.Builder builder) {
        return builder
                .baseUrl("https://api.openai.com/v1")
                .defaultHeader(HttpHeaders.AUTHORIZATION, "Bearer " + apiKey)//red line under AUTHORISZATION 
                .build();
    }

    
}
