import { Linkedin, Music2, BookOpen } from "lucide-react";
import { SiFacebook, SiYoutube } from '@icons-pack/react-simple-icons';
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-slate-50/50 mt-20">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <section className="container py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Logo and Description - Left Column */}
            <div className="max-w-xl space-y-6">
              <a
                rel="noreferrer noopener"
                href="/"
                className="font-bold text-xl flex items-center hover:opacity-80 transition-opacity"
              >
                <img
                  src="/vivecompliance_logo.png"
                  alt="Vive Compliance Logo"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                Vive Compliance
              </a>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Somos una empresa especializada en cumplimiento autorizada por la Superintendencia de Sujetos No Financieros de Panamá (Resolución S-EC-024-2023) que impacta organizaciones públicas y privadas.
              </p>
            </div>

            {/* Right Column - Social Media and Actions */}
            <div className="w-full flex flex-col space-y-10">
              {/* Social Media Section */}
              <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6">
                <div className="text-center sm:text-left">
                  <h3 className="font-bold text-lg mb-4">Síguenos</h3>
                  <div className="flex items-center gap-6">
                    <a
                      href="https://www.linkedin.com/company/vivecompliance/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                    >
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                      href="https://www.youtube.com/@ViveCompliance"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                    >
                      <SiYoutube size={24} />
                      <span className="sr-only">YouTube</span>
                    </a>
                    <a
                      href="https://www.facebook.com/Vivecompliancemagazine"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                    >
                      <SiFacebook size={24} />
                      <span className="sr-only">Facebook</span>
                    </a>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 w-full sm:w-auto sm:min-w-[200px]">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto hover:bg-primary hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a
                      href="https://yudytunjano.substack.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center justify-center gap-2"
                    >
                      <BookOpen className="h-4 w-4" />
                      Leer publicaciones
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full sm:w-auto hover:bg-primary hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a
                      href="https://open.spotify.com/show/4B5yey9Oa3k3HD1qCZObBF?si=3ae79380a7d3427f"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center justify-center gap-2"
                    >
                      <Music2 className="h-4 w-4" />
                      Escuchar Podcast
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <section className="container py-6 text-center text-sm text-muted-foreground">
        <h3>
          &copy; 2025 Vive Compliance
        </h3>
      </section>
    </footer>
  );
};
