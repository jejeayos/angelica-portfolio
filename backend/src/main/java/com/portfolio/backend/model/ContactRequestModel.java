package com.portfolio.backend.model;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class ContactRequestModel {
    private String name;
    private String subject;
    private String message;
    private MultipartFile attachment;
}