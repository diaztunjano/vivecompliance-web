import { MedalIcon, MapIcon, LightBulbIcon } from "./Icons";
import { motion } from "framer-motion";

export const About = () => {
  // Definición de los bloques de información
  const infoBlocks = [
    {
      icon: <MedalIcon />,
      title: "Autorización Oficial",
      content: "Empresa de cumplimiento autorizada por la Superintendencia de Sujetos No Financieros de Panamá (Resolución S-EC-024-2023) que, desde su fundación, ha transformado organizaciones públicas y privadas.",
      stat: "+20",
      statLabel: "Años de Experiencia"
    },
    {
      icon: <LightBulbIcon />,
      title: "Enfoque",
      content: "Soluciones integrales basadas en ética, sostenibilidad y tecnología. Impulsamos altos estándares de gestión de riesgos y fortalecemos la cultura de cumplimiento, transparencia, resiliencia y confianza.",
      stat: "+200",
      statLabel: "Expertos internacionales"
    },
    {
      icon: <MapIcon />,
      title: "Capacidades",
      content: "Equipo multidisciplinario respaldado por certificaciones ISO 31000, 37001 y 37301. Diseñamos y optimizamos sistemas de cumplimiento adaptados a cada industria.",
      stat: "5",
      statLabel: "Certificaciones ISO"
    }
  ];

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.6
      }
    }
  };

  const highlightVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 1.2
      }
    }
  };

  return (
    <section
      id="about"
      className="container py-12 sm:py-24"
    >
      <motion.div
        className="bg-muted/50 border rounded-lg py-8 px-4 sm:py-12 sm:px-6 md:px-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Encabezado */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-foreground">Sobre</span>{" "}
            <span className="bg-gradient-to-r from-primary/80 to-primary text-transparent bg-clip-text">
              nosotros
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mt-4 sm:mt-6">
            Somos una empresa especializada en cumplimiento que transforma organizaciones mediante soluciones integrales y tecnología avanzada.
          </p>
        </motion.div>

        {/* Bloques de información con iconos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
          {infoBlocks.map((block, index) => (
            <motion.div
              key={index}
              className="flex flex-col h-full"
              variants={itemVariants}
            >
              {/* Estructura con altura fija para cada sección */}
              <div className="flex flex-col items-center">
                {/* Icono - Altura fija */}
                <motion.div
                  className="h-16 sm:h-24 flex items-center justify-center mb-4 sm:mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center">
                    {block.icon}
                  </div>
                </motion.div>

                {/* Título - Altura fija */}
                <div className="h-12 sm:h-14 flex items-center justify-center mb-3 sm:mb-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
                    {block.title}
                  </h3>
                </div>
              </div>

              {/* Contenido - Altura fija con scroll si es necesario */}
              <div className="flex-grow mb-6 sm:mb-10">
                <p className="text-base sm:text-lg md:text-muted-foreground text-center leading-relaxed h-full">
                  {block.content}
                </p>
              </div>

              {/* Estadística - Posición fija en la parte inferior con mejor espaciado */}
              <motion.div
                className="mt-auto border-t w-full"
                variants={statVariants}
              >
                <div className="flex flex-col items-center py-4 sm:py-6">
                  <motion.span
                    className="text-3xl sm:text-4xl md:font-bold bg-gradient-to-r from-primary/80 to-primary text-transparent bg-clip-text"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {block.stat}
                  </motion.span>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-medium mt-2">
                    {block.statLabel}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Estadística destacada con mejor integración */}
        <motion.div
          className="border-t pt-8 sm:pt-10"
          variants={highlightVariants}
        >
          <div className="flex flex-col items-center">
            <motion.div
              className="mb-3 sm:mb-4 text-primary/60"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </motion.div>
            <motion.span
              className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary/80 to-primary text-transparent bg-clip-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              +5000
            </motion.span>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium mt-2 sm:mt-3">
              Profesionales Capacitados
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
