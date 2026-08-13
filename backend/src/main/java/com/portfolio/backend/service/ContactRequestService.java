package com.portfolio.backend.service;

import com.portfolio.backend.model.ContactRequestModel;
import com.resend.Resend;
import com.resend.services.emails.model.Attachment;
import com.resend.services.emails.model.CreateEmailOptions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactRequestService {

    @Value("${RESEND_API_KEY}")
    private String resendApiKey;

    @Value("${resend.to-email}")
    private String toEmail;

    public void sendContactEmail(ContactRequestModel request) throws Exception {
        Resend resend = new Resend(resendApiKey);

        CreateEmailOptions.Builder emailBuilder = CreateEmailOptions.builder()
            .from("onboarding@resend.dev")
            .to(toEmail)
            .subject("Portfolio Contact: " + request.getSubject())
            .text("From: " + request.getName() + "\n\n" + request.getMessage());

        if (request.getAttachment() != null && !request.getAttachment().isEmpty()) {
            Attachment attachment = Attachment.builder()
                .fileName(request.getAttachment().getOriginalFilename())
                .content(java.util.Base64.getEncoder().encodeToString(request.getAttachment().getBytes()))
                .build();
            emailBuilder.attachments(List.of(attachment));
        }

        resend.emails().send(emailBuilder.build());
    }
}
