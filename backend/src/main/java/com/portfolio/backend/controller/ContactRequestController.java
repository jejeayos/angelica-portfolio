package com.portfolio.backend.controller;

import com.portfolio.backend.model.ContactRequestModel;
import com.portfolio.backend.service.ContactRequestService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactRequestController {
    private final ContactRequestService contactRequestService;

    @PostMapping(consumes = "multipart/form-data")
    public ResponseEntity<String> sendContactEmail(@ModelAttribute ContactRequestModel request) throws Exception {
        contactRequestService.sendContactEmail(request);
        return ResponseEntity.ok("Message sent successfully");  
    }
}
