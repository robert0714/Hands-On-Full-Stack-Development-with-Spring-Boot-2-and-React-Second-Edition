//package com.packt.cardatabase;
//
//import java.util.Arrays;
// 
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//
///***
// * reference <br/>
// * https://docs.spring.io/spring-security/site/docs/4.2.x/reference/html/cors.html
// * <br/>
// * Access to fetch at 'http://localhost:8080/api/cars' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
// * */
//@Configuration
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//	
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		http
//			// by default uses a Bean by the name of corsConfigurationSource
//			.cors();
//	}
//	
//	@Bean
//	protected  CorsConfigurationSource corsConfigurationSource() {
//	      UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//	      CorsConfiguration config = new CorsConfiguration();
//			config.setAllowedOrigins(Arrays.asList("*"));
//			config.setAllowedMethods(Arrays.asList("*"));
//			config.setAllowedHeaders(Arrays.asList("*"));
//			config.setAllowCredentials(true);
//	      config.applyPermitDefaultValues();
//	      
//	      source.registerCorsConfiguration("/**", config);
//	      return source;
//	}	
//}