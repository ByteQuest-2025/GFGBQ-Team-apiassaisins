package com.Aura.Config;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.web.filter.CorsFilter;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class WebConfigTest {

    @Autowired
    private ApplicationContext context;

    @Test
    public void corsFilterBeanExists() {
        CorsFilter corsFilter = context.getBean(CorsFilter.class);
        assertNotNull(corsFilter, "CorsFilter bean should be present in the application context");
    }
}
