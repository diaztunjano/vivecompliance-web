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
  wrapper: "group rounded-2xl bg-white dark:bg-neutral-900/90 p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100 dark:border-neutral-800 relative flex flex-col justify-between h-full",
  avatar: {
    container: "mb-3 flex justify-center",
    image: "w-24 h-24 rounded-full overflow-hidden border-[2px] border-neutral-100 shadow-sm group-hover:scale-102 transition-transform duration-500 bg-white dark:bg-neutral-900"
  },
  content: {
    title: "text-lg font-semibold text-neutral-900 dark:text-white",
    position: "text-sm text-primary dark:text-primary/90 font-medium tracking-wide",
    divider: "w-16 h-[2px] bg-[#00306b]/30 mx-auto my-3",
    highlight: "text-neutral-700 dark:text-neutral-300 text-[13px] font-medium leading-snug",
    highlightKey: "font-semibold text-[#00306b] dark:text-[#4d8eff]"
  },
  social: {
    button: "w-8 h-8 flex items-center justify-center text-[#0077b5] hover:text-[#0077b5] hover:bg-[#0077b5]/10 transition-all duration-300 rounded-full"
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
        <div className="text-center">
          <CardTitle className={CARD_STYLES.content.title}>
            {name}
          </CardTitle>
          <CardDescription className={CARD_STYLES.content.position}>
            {position}
          </CardDescription>
          <div className={CARD_STYLES.content.divider} />
        </div>

        <div className="mt-3 space-y-2">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-[#00306b] text-xs mt-1 opacity-70">•</span>
              <span className={`${CARD_STYLES.content.highlight} ${
                highlight.includes(keyHighlight) ? CARD_STYLES.content.highlightKey : ''
              }`}>
                {highlight}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800">
        {socialNetworks.map(({ name, url }) => (
          <div key={name}>
            <a
              rel="noreferrer noopener"
              href={url}
              target="_blank"
              className={CARD_STYLES.social.button}
              aria-label={`${name} profile`}
            >
              {name === "Linkedin" && <Linkedin size="18" />}
            </a>
          </div>
        ))}
      </div>
    </Card>
  );
};

export const Team = () => {
  return (
    <section id="nosotros" className="container py-20 sm:py-28">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-primary">
            Nuestro Equipo{" "}
          </span>
          Experto
        </h2>

        <p className="text-lg text-neutral-600 dark:text-neutral-300">
          Profesionales altamente calificados con amplia experiencia en compliance y gestión de riesgos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {teamList.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
};
