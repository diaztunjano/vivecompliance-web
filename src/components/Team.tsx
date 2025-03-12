import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Linkedin } from "lucide-react";

// Types
interface TeamMember {
  imageUrl: string;
  name: string;
  position: string;
  highlights: string[];
  keyHighlight: string;
  socialNetworks: {
    name: SocialNetworkType;
    url: string;
  }[];
}

type SocialNetworkType = "Linkedin";

// Constants
const CARD_STYLES = {
  wrapper: "group rounded-xl bg-neutral-50 dark:bg-neutral-900/90 p-5 sm:p-6 shadow-md hover:shadow-[0_0_15px_-5px_rgba(255,149,77,0.2)] transition-all duration-300 border border-neutral-200/50 dark:border-neutral-800 relative flex flex-col justify-between",
  avatar: {
    container: "mb-4 flex justify-center",
    image: "w-32 h-32 rounded-full overflow-hidden border-[3px] border-primary/10 shadow-lg group-hover:scale-105 transition-transform duration-500 bg-white dark:bg-neutral-900"
  },
  content: {
    title: "text-2xl font-bold bg-gradient-to-r from-primary/90 to-primary text-transparent bg-clip-text",
    position: "text-base text-primary/70 font-medium",
    divider: "w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent mt-4",
    highlight: "text-neutral-600 dark:text-neutral-400 text-[15px] leading-relaxed",
    highlightKey: "font-semibold text-primary/90"
  },
  social: {
    button: "text-primary/70 hover:text-primary transition-colors hover:bg-primary/5 rounded-full p-1.5"
  }
} as const;

// Data
const teamList: TeamMember[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=35",
    name: "Yudy Tunjano",
    position: "Presidente",
    keyHighlight: "Máster Compliance Officer",
    highlights: [
      "Abogada colombiana y chilena con Magister en Derecho de la Empresa (PUC Chile)",
      "Máster Compliance Officer (UCM Madrid) y Diplomada en SARLAFT",
      "Certificada como Auditora en ISO 9001, 31000, 37001 y 37301",
      "Miembro del Comité Espejo ISO/TC en Panamá",
      "20+ años de experiencia en compliance y sistemas de gestión"
    ],
    socialNetworks: [{ name: "Linkedin", url: "https://www.linkedin.com/in/leopoldo-miranda/" }]
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=60",
    name: "Carlos Boschell",
    position: "Director de Riesgos",
    keyHighlight: "Oficial de la Reserva Activa",
    highlights: [
      "Oficial de la Reserva Activa de la Policía Nacional Colombiana",
      "Especialista en Investigación Criminal y Alta Dirección",
      "Auditor Internacional Certificado BASC y Risk Manager ISO 31000",
      "Certificado en ISO 17024, 37001, 22301, 37301, 18788",
      "35+ años en Proyectos de Seguridad e Investigaciones"
    ],
    socialNetworks: [{ name: "Linkedin", url: "https://www.linkedin.com/in/leopoldo-miranda/" }]
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=36",
    name: "Anna Admadé",
    position: "Directora de Cumplimiento",
    keyHighlight: "Magister en Leyes",
    highlights: [
      "Magister en Leyes LLM (PUC Chile) y Abogado",
      "Especialista en Compliance y Gestión de Riesgos (GWU)",
      "Business & Life Coach Certificado (ICMF)",
      "Consultor en Cumplimiento Corporativo",
      "Impulsor de iniciativas de ley en cultura de cumplimiento"
    ],
    socialNetworks: [{ name: "Linkedin", url: "https://www.linkedin.com/in/leopoldo-miranda/" }]
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=26",
    name: "Omaira Bejarano",
    position: "Directora de Programas Anticorrupción",
    keyHighlight: "Magister en Leyes",
    highlights: [
      "Magister en Leyes LLM (PUC Chile) y Abogado",
      "Especialista en Compliance y Gestión de Riesgos (GWU)",
      "Business & Life Coach Certificado (ICMF)",
      "Consultor en Cumplimiento Corporativo",
      "Impulsor de iniciativas de ley en cultura de cumplimiento"
    ],
    socialNetworks: [{ name: "Linkedin", url: "https://www.linkedin.com/in/leopoldo-miranda/" }]
  }
];

// Components
const TeamMemberAvatar = ({ imageUrl, name, position }: Pick<TeamMember, 'imageUrl' | 'name' | 'position'>) => (
  <div className={CARD_STYLES.avatar.container}>
    <div className={CARD_STYLES.avatar.image}>
      <img
        src={imageUrl}
        alt={`${name} ${position}`}
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  const { imageUrl, name, position, highlights, keyHighlight, socialNetworks } = member;

  return (
    <Card className={CARD_STYLES.wrapper}>
      <div>
        <TeamMemberAvatar imageUrl={imageUrl} name={name} position={position} />
        <div className="text-center space-y-1">
          <CardTitle className={CARD_STYLES.content.title}>
            {name}
          </CardTitle>
          <CardDescription className={CARD_STYLES.content.position}>
            {position}
          </CardDescription>
        </div>
        <div className={CARD_STYLES.content.divider} />

        <div className="mt-4 space-y-2.5">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-2.5">
              <span className="text-primary/60 text-sm mt-1">●</span>
              <span className={`${CARD_STYLES.content.highlight} ${
                highlight.includes(keyHighlight) ? CARD_STYLES.content.highlightKey : ''
              }`}>
                {highlight}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center border-t border-neutral-200/30 dark:border-neutral-700/30 mt-4 pt-4">
        {socialNetworks.map(({ name, url }) => (
          <div key={name}>
            <a
              rel="noreferrer noopener"
              href={url}
              target="_blank"
              className={CARD_STYLES.social.button}
            >
              <span className="sr-only">{name} icon</span>
              {name === "Linkedin" && <Linkedin size="22" />}
            </a>
          </div>
        ))}
      </div>
    </Card>
  );
};

export const Team = () => {
  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Nuestro Equipo{" "}
        </span>
        Experto
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Profesionales altamente calificados con amplia experiencia en compliance y gestión de riesgos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {teamList.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
};
