"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend('re_H2L2mSir_MBv5VCbDhTj5p4FAnTUDVUva');

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Site Portfólio <onboarding@resend.dev>",
      to: "lumabeatrizpsi@gmail.com",
      subject: "Nova solicitação de atendimento psicológico",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: `
          Olá, Luma Beatriz,
    
          Você recebeu uma nova mensagem de um potencial paciente interessando em seus serviços de atendimento psicológico.
          Aqui estão os detalhes da mensagem:
    
          **Mensagem enviada**:
          "${message}"
    
          **Email para contato**: ${senderEmail}
    
          Por favor, entre em contato com o remetente para continuar a conversa ou esclarecer dúvidas.  
          Caso precise de assistência técnica com o site, estamos à disposição.
    
          Atenciosamente,  
          Equipe do Site Portfólio
        `,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
