import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-20 my-24 sm:my-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      <div className="container lg:grid lg:grid-cols-2 place-items-center gap-12 relative">
        <div className="lg:col-start-1 max-w-[600px]">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Te gustaría{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              escribir con nosotros?
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-6 mb-8 lg:mb-0 leading-relaxed">
            ¿Eres un experto en compliance? Únete a nuestra red de colaboradores y comparte tus insights con más de 5000 profesionales. Tu experiencia puede transformar la cultura ética empresarial en Latinoamérica.
          </p>
        </div>

        <div className="space-y-4 lg:space-y-0 lg:flex lg:gap-4 lg:col-start-2">
          <Button size="lg" className="w-full md:w-auto text-base font-medium">
            Publicar Artículo
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full md:w-auto text-base font-medium"
          >
            Explorar Ediciones
          </Button>
        </div>
      </div>
    </section>
  );
};
