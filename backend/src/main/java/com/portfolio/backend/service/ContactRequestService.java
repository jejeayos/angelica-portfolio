package com.portfolio.backend.service;

import com.portfolio.backend.model.ContactRequestModel;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContactRequestService {

    private final JavaMailSender mailSender;

    public void sendContactEmail(ContactRequestModel request) throws Exception {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setTo("jejeayos@gmail.com");
        helper.setCc(request.getEmail());
        helper.setSubject("Portfolio Contact: " + request.getSubject());
        helper.setText("From: " + request.getName() + " <" + request.getEmail() + ">\n\n" + request.getMessage());

        if (request.getAttachment() != null && !request.getAttachment().isEmpty()) {
            helper.addAttachment(
                request.getAttachment().getOriginalFilename(),
                request.getAttachment()
            );
        }

        mailSender.send(message);
    }
}
