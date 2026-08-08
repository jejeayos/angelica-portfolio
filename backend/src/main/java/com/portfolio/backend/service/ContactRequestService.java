package com.portfolio.backend.service;

import com.portfolio.backend.model.ContactRequestModel;
import com.resend.Resend;
import com.resend.services.emails.model.CreateEmailOptions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class ContactRequestService {

    @Value("${RESEND_API_KEY}")
    private String resendApiKey;

    @Value("${resend.to-email}")
    private String toEmail;


    public void sendContactEmail(ContactRequestModel request) throws Exception {
        Resend resend = new Resend(resendApiKey);

         CreateEmailOptions sendEmailRequest = CreateEmailOptions.builder()
            .from("onboarding@resend.dev")
            .to(toEmail)
            .subject("Portfolio Contact: " + request.getSubject())
            .text("From: " + request.getName() + "\n\n" + request.getMessage())
            .build();

        resend.emails().send(sendEmailRequest);

    }
}
