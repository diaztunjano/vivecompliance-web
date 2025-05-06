import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export function PopUp({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-out" />
        <DialogPrimitive.Content
          className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white dark:bg-background p-4 md:p-8 shadow-2xl focus:outline-none transition-all duration-500 ease-out opacity-100"
        >
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-6 top-6 rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Cerrar"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-1">¡Evento especial: 14 de mayo!</h2>

            <img
              src="/eventos/lanzamiento_libro.jpeg"
              alt="Lanzamiento Libro: Compliance Sin Fronteras"
              className="w-full h-auto rounded-xl shadow-lg object-cover border border-border"
              style={{ maxHeight: '60vh' }}
            />
            <a
              href="https://www.youtube.com/@ViveCompliance?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors w-full justify-center text-lg shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12.244 4c.534.003 1.87.016 3.29.073l.504.021c1.429.067 2.857.183 3.566.38.945.266 1.687 1.04 1.938 2.022.4 1.56.458 4.662.458 5.504v.001c0 .845-.058 3.946-.459 5.504-.25.981-.992 1.756-1.937 2.022-.709.197-2.137.313-3.566.38l-.504.022c-1.42.056-2.756.07-3.29.072h-.49c-.534-.003-1.87-.016-3.29-.073l-.504-.021c-1.429-.067-2.857-.183-3.566-.38-.945-.266-1.687-1.04-1.938-2.022-.4-1.56-.458-4.662-.458-5.504v-.001c0-.845.058-3.946.459-5.504.25-.981.992-1.756 1.937-2.022.709-.197 2.137-.313 3.566-.38l.504-.022c1.42-.056 2.756-.07 3.29-.072h.49zM9.999 8.5v7l6-3.5-6-3.5z" />
              </svg>
              Ver en YouTube
            </a>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}