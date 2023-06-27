package com.offlinedb.copilotdemo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/demo")
public class CopilotDemoController {
    @GetMapping("/fetch")
    public String sendText(){
        return "This is a test application";
    }
}
