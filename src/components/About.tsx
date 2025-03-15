import { motion } from "framer-motion";
import {
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

export const About = () => {
  // Animation variants
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

  const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8,
        ease: "easeOut"
      }
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
        delay: 0.8
      }
    }
  };

  const separatorVariants = {
    hidden: { width: "0%", opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4
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
        {/* Header */}
        <motion.div
          className="text-center"
          variants={titleVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            <span className="text-navy-900 dark:text-navy-100">Sobre</span>{" "}
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-transparent bg-clip-text">
              nosotros
            </span>
          </h2>
          <div className="bg-muted/80 rounded-full px-4 py-2 max-w-3xl mx-auto mt-4">
            <p className="text-base sm:text-lg text-muted-foreground">
              Somos una empresa especializada en cumplimiento autorizada por la Superintendencia de Sujetos No Financieros de Panamá (Resolución S-EC-024-2023) que impacta organizaciones públicas y privadas.
            </p>
          </div>
        </motion.div>

        {/* Separator */}
        <div className="relative flex items-center justify-center my-12">
          <motion.div
            className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            variants={separatorVariants}
          />
          <motion.div
            className="z-10 bg-background rounded-full p-2 border-2 border-primary/20"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
          >
            <ShieldCheckIcon className="w-8 h-8 text-primary/80" />
          </motion.div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Years of Experience */}
          <motion.div
            className="flex flex-col items-center relative group"
            variants={statVariants}
          >
            <motion.div
              className="mb-2 text-primary/60"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ClockIcon className="w-8 h-8" />
            </motion.div>
            <motion.span
              className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-primary/90 to-primary text-transparent bg-clip-text relative z-10"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              +20
            </motion.span>
            <p className="text-sm sm:text-base text-muted-foreground font-medium mt-2 text-center">
              Años de Experiencia
            </p>
          </motion.div>

          {/* International Experts */}
          <motion.div
            className="flex flex-col items-center relative group"
            variants={statVariants}
          >
            <motion.div
              className="mb-2 text-primary/60"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <UserGroupIcon className="w-8 h-8" />
            </motion.div>
            <motion.span
              className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-primary/90 to-primary text-transparent bg-clip-text relative z-10"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              +200
            </motion.span>
            <p className="text-sm sm:text-base text-muted-foreground font-medium mt-2 text-center">
              Expertos internacionales
            </p>
          </motion.div>

          {/* ISO Certifications */}
          <motion.div
            className="flex flex-col items-center relative group"
            variants={statVariants}
          >
            <motion.div
              className="mb-2 text-primary/60"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <CheckBadgeIcon className="w-8 h-8" />
            </motion.div>
            <motion.span
              className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-primary/90 to-primary text-transparent bg-clip-text relative z-10"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              5
            </motion.span>
            <p className="text-sm sm:text-base text-muted-foreground font-medium mt-2 text-center">
              Certificaciones ISO
            </p>
          </motion.div>

          {/* Trained Professionals */}
          <motion.div
            className="flex flex-col items-center relative group"
            variants={statVariants}
          >
            <motion.div
              className="mb-2 text-primary/60"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ChartBarIcon className="w-8 h-8" />
            </motion.div>
            <motion.span
              className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-primary/90 to-primary text-transparent bg-clip-text relative z-10"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              +5000
            </motion.span>
            <p className="text-sm sm:text-base text-muted-foreground font-medium mt-2 text-center">
              Profesionales Capacitados
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
