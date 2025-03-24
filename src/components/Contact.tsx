import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  // // Please update the Access Key in the .env
  const apiKey = "a4a2ec6f-932b-4062-bb41-2da50ca4dade";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Vive Compliance",
      subject: "Nuevo mensaje de contacto desde la web",
    },
    onSuccess: (msg: string) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg: string) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <section id="contact" className="container mx-auto py-24 sm:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Contáctanos
          </span>
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Estamos aquí para ayudarte. Envíanos un mensaje y nos pondremos en contacto contigo lo antes posible.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
          <input
            type="checkbox"
            id=""
            className="hidden"
            style={{ display: "none" }}
            {...register("botcheck")}
          />

          <div>
            <input
              type="text"
              placeholder="Nombre completo"
              autoComplete="false"
              className={`w-full px-4 py-3 bg-muted/50 dark:bg-muted/80 border placeholder:text-muted-foreground/60 rounded-md outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:border-red-500 ring-red-100"
                  : "border-input focus:border-primary ring-primary/20"
              }`}
              {...register("name", {
                required: "El nombre es requerido",
                maxLength: 80,
              })}
            />
            {errors.name && (
              <div className="mt-1 text-red-500 text-sm">
                <small>{errors.name.message?.toString()}</small>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="email_address" className="sr-only">
              Correo electrónico
            </label>
            <input
              id="email_address"
              type="email"
              placeholder="Correo electrónico"
              autoComplete="false"
              className={`w-full px-4 py-3 bg-muted/50 dark:bg-muted/80 border placeholder:text-muted-foreground/60 rounded-md outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:border-red-500 ring-red-100"
                  : "border-input focus:border-primary ring-primary/20"
              }`}
              {...register("email", {
                required: "El correo es requerido",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Por favor ingresa un correo válido",
                },
              })}
            />
            {errors.email && (
              <div className="mt-1 text-red-500 text-sm">
                <small>{errors.email.message?.toString()}</small>
              </div>
            )}
          </div>

          <div>
            <textarea
              placeholder="Tu mensaje"
              className={`w-full px-4 py-3 bg-muted/50 dark:bg-muted/80 border placeholder:text-muted-foreground/60 rounded-md outline-none h-36 focus:ring-2 ${
                errors.message
                  ? "border-red-500 focus:border-red-500 ring-red-100"
                  : "border-input focus:border-primary ring-primary/20"
              }`}
              {...register("message", {
                required: "El mensaje es requerido",
              })}
            />
            {errors.message && (
              <div className="mt-1 text-red-500 text-sm">
                <small>{errors.message.message?.toString()}</small>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-4 font-semibold text-white transition-colors bg-gradient-to-r from-[#00306b] to-[#0055bb] hover:from-[#0055bb] hover:to-[#0066dd] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
          >
            {isSubmitting ? (
              <svg
                className="w-5 h-5 mx-auto text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Enviar mensaje"
            )}
          </button>
        </form>

        {isSubmitSuccessful && isSuccess && (
          <div className="mt-6 text-center text-green-500 text-sm">
            {message || "¡Mensaje enviado exitosamente!"}
          </div>
        )}
        {isSubmitSuccessful && !isSuccess && (
          <div className="mt-6 text-center text-red-500 text-sm">
            {message || "Algo salió mal. Por favor intenta más tarde."}
          </div>
        )}
      </div>
    </section>
  );
}