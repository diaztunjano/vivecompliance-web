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
    imageUrl: "/team/yudy_tunjano.jpg",
    name: "Yudy Tunjano",
    position: "Presidente",
    keyHighlight: "Máster Compliance Officer",
    highlights: [
      "Abogada colombiana y chilena, Magíster en Derecho de la Empresa (PUC Chile)",
      "Máster Compliance Officer (UCM) y Máster en Gestión de Riesgos (UC Murcia)",
      "+20 años de experiencia en legal y compliance de multinacionales. Conferencista internacional",
      "Diplomada en SARLAFT y Compliance",
      "Certificada en ISO 17024, ISO37001, ISO 37301 e ISO 31000"
    ],
    socialNetworks: [{ name: "Linkedin", url: "https://www.linkedin.com/in/yudy-tunjano/" }]
  },
  {
    imageUrl: "/team/carlos_boschell.jpeg",
    name: "Carlos Boshell",
    position: "Director de Riesgos",
    keyHighlight: "Oficial Reserva Activa",
    highlights: [
      "Oficial Reserva Activa de la Policía Nacional (Colombia)",
      "Profesional en Administración y Criminalística, especialista en Investigación Criminal",
      "Auditor Líder e implementador ISO 37001, 37301, 22301 y Risk Manager ISO 31000",
      "Diseñador del SARLAFT en la Superintendencia de Vigilancia y Seguridad Privada"
    ],
    socialNetworks: [{ name: "Linkedin", url: "https://www.linkedin.com/in/carlos-alfonso-boshell-norman-a9363738/" }]
  },
  {
    imageUrl: "/team/anna_admade.jpeg",
    name: "Anna Admadé",
    position: "Directora de Cumplimiento",
    keyHighlight: "Experta en prevención de blanqueo de capitales",
    highlights: [
      "Experta en prevención de blanqueo de capitales y financiamiento del terrorismo",
      "Licenciada en Derecho y Ciencias Políticas (Summa Cum Laude)",
      "Máster en Tributación y Gestión Fiscal, exdirectora de compliance en Panamá",
      "Conferencista internacional y docente universitaria"
    ],
    socialNetworks: [{ name: "Linkedin", url: "https://www.linkedin.com/in/anna-marissa-admad%C3%A9-c%C3%A9spedes-16331143/" }]
  },
  {
    imageUrl: "/team/erik_maldonado.jpeg",
    name: "Erik Maldonado",
    position: "Director de Programas Anticorrupción",
    keyHighlight: "Especialista en Compliance y Anticorrupción",
    highlights: [
      "Abogado y Notario guatemalteco, Magíster en Leyes (PUC Chile)",
      "Especialista en Compliance y Gestión de Riesgos (The George Washington University)",
      "Excoordinador del Centro de Asistencia Legal Anticorrupción (Transparencia Internacional Guatemala)",
      "Cofundador de Proactiva Empresarial Compliance Guatemala, certificado en ISO 37301"
    ],
    socialNetworks: [{ name: "Linkedin", url: "https://www.linkedin.com/in/emaldo/" }]
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
