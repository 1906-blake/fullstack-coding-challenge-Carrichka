package com.grocerylist.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {
	
	@Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // all endpoints in the api
                .allowedOrigins("http://localhost:9001", "http://localhost:3000") // allow this origin
                .allowedMethods("PUT", "DELETE", "GET", "OPTIONS", "POST", "PATCH")
                .allowedHeaders("content-type", "header2", "Authorization")
//            .exposedHeaders("header1", "header2")
                .allowCredentials(true);
    }

}
