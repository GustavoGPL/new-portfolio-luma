import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import projetoLuma from "@/public/images/ProjetoLuma.png";

export const links = [
  {
    name: "Início",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiência",
    hash: "#experience",
  },
  {
    name: "Endereço",
    hash: "#address",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "MBA em Gestão de Pessoas",
    location: "Fortaleza, CE",
    description:
      "Pós-graduada em MBA em Gestão de Pessoas",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Formação Psicologia",
    location: "Fortaleza, CE",
     description: "Graduação completa em Psicologia, com foco no desenvolvimento humano, saúde mental e técnicas de intervenção psicológica",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Escuta e Afeto",
    description:
      "Projeto de atendimento psicológico para universitários a preços acessíveis",
    tags: ["praticidade", "flexibilidade", "Acessibilidade"],
    imageUrl: projetoLuma,
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfNDqgs2p-XllxeJ7lnK_9c-quj__p0Uqpy00CAE2oDdUe8QQ/viewform'
  },
] as const;

export const skillsData = [
  "Psicóloga Clínica",
  "Pós-graduada em Gestão de Pessoas",
  "Terapia Cognitivo Comportamental",
  "Capacitações para técnicas em TCC",
  "Atuação na área clínica, com experiência em acompanhamento psicológico",
  "Atendimento infantojuvenil, ajudando crianças e adolescentes",
  "Atendimentos de Adultos e Idosos"
] as const;
