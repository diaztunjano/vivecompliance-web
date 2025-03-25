import { SubstackFeed } from "./SubstackFeed";

export const ViveComplianceMagazine = () => {
  return (
    <section id="magazine" className="bg-muted/50 py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      {/* Header Section */}
      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Vive Compliance{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Magazine
            </span>
          </h2>
          <p className="text-lg text-zinc-600 max-w-xl mx-auto mt-6">
            Descubre los análisis más recientes sobre compliance y ética empresarial en Latinoamérica.
            Mantente al día con las últimas tendencias y mejores prácticas del sector.
          </p>
        </div>

        {/* Content Grid - Ajustado para altura equivalente */}
        <div className="grid lg:grid-cols-[1.5fr,1fr] gap-8 md:gap-12 items-stretch max-w-6xl mx-auto">
          {/* Posts Section */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-zinc-100 h-full">
            <h3 className="text-xl font-semibold text-zinc-800 mb-6 md:mb-8">
              Últimos Artículos
            </h3>
            <div className="relative h-full">
              {/* Efecto de fondo más sutil */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl"></div>
              <div className="h-full">
                <SubstackFeed substackUrl="yudytunjano.substack.com" />
              </div>
            </div>
          </div>

          {/* Subscription Section - Ajustada altura */}
          <div className="h-full flex flex-col">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-zinc-100 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">
                Suscríbete
              </h3>
              <p className="text-sm text-zinc-600 mb-6">
                Recibe nuestro newsletter y mantente informado sobre las últimas novedades en compliance.
              </p>
              <div className="flex-1 w-full min-h-[650px] overflow-hidden rounded-xl">
                <iframe
                  src="https://yudytunjano.substack.com/embed"
                  width="100%"
                  height="100%"
                  style={{
                    border: '1px solid #f4f4f4',
                    background: 'white',
                    height: '650px'
                  }}
                  title="Suscripción al newsletter"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
