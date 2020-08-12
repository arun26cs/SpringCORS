package com.canalogies.cors.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class CorsController {

	@RequestMapping("/index")
	public String hello() {
		return "index";
	}
	
}
