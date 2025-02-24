import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "¿Qué es el Compliance y por qué es importante para mi empresa?",
    answer: "El Compliance es el conjunto de procedimientos y buenas prácticas que adoptan las organizaciones para identificar y clasificar los riesgos operativos y legales a los que se enfrentan y establecer mecanismos internos de prevención, gestión, control y reacción. Es fundamental para proteger la reputación de su empresa, evitar sanciones, y crear una cultura organizacional basada en la ética y la transparencia.",
    value: "item-1",
  },
  {
    question: "¿Qué servicios ofrece Vive Compliance para la prevención de Blanqueo de Capitales?",
    answer: "Ofrecemos un servicio integral que incluye: diseño e implementación de sistemas de gestión de riesgos adaptados a normativas vigentes, programas de debida diligencia, formularios inteligentes para 'Conoce a Tu Cliente', capacitación especializada en tipologías BC/FT, y asesoría continua en el cumplimiento de requisitos regulatorios.",
    value: "item-2",
  },
  {
    question: "¿Qué certificaciones ISO pueden implementar en mi organización?",
    answer: "Somos expertos en la implementación y auditoría de las principales normas internacionales ISO: ISO 37001:2016 (Gestión Antisoborno), ISO 9001:2015 (Gestión de Calidad), ISO 37301:2021 (Gestión de Cumplimiento), ISO 31000:2018 (Gestión de Riesgos), e ISO 22301:2019 (Continuidad de Negocio). Nuestro equipo le guiará en todo el proceso de certificación.",
    value: "item-3",
  },
  {
    question: "¿Cómo funciona el Canal de Denuncias y qué beneficios ofrece?",
    answer: "Nuestro Canal de Denuncias es una plataforma segura y anónima que permite a empleados y stakeholders reportar comportamientos no éticos o irregularidades. El sistema garantiza confidencialidad, facilita la detección temprana de riesgos, y demuestra el compromiso de su organización con la transparencia y la integridad corporativa.",
    value: "item-4",
  },
  {
    question: "¿Qué metodología utilizan para la capacitación en compliance?",
    answer: "Nuestra metodología de capacitación combina teoría y práctica, incluyendo: cursos especializados en legislación vigente, talleres prácticos sobre tipologías BC/FT, formación en gestión de riesgos y controles internos, y certificaciones profesionales. Los programas son personalizados según las necesidades específicas de cada organización y sector.",
    value: "item-5",
  },
  {
    question: "¿Cómo ayudan a las empresas a cumplir con las regulaciones internacionales?",
    answer: "Proporcionamos asesoría integral en el cumplimiento de normativas internacionales, realizamos diagnósticos personalizados de riesgos, implementamos sistemas de gestión adaptados a estándares globales, y ofrecemos soporte continuo para mantener actualizados los procesos según las últimas exigencias regulatorias.",
    value: "item-6",
  }
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Preguntas{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Frecuentes
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        ¿Tienes más preguntas?{" "}
        <a
          rel="noreferrer noopener"
          href="#contact"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contáctanos
        </a>
      </h3>
    </section>
  );
};
