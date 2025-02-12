export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "20+",
      description: "Años de Experiencia",
    },
    {
      quantity: "100+",
      description: "Clientes Atendidos",
    },
    {
      quantity: "50+",
      description: "Capacitaciones",
    },
    {
      quantity: "5",
      description: "Certificaciones ISO",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div
            key={description}
            className="space-y-2 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary/80 to-primary text-transparent bg-clip-text">
              {quantity}
            </h2>
            <p className="text-lg text-muted-foreground font-medium">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
