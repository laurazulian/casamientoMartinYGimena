import { useState } from "react";
import fondoUrl from "./fotos/fondo.jpg";

export default function App() {
  const [showGift, setShowGift] = useState(false);
  const [imageError, setImageError] = useState(false);

  const acciones = [
    {
      texto: "Confirmar asistencia",
      link: "/confirmacion",
      estilo: "bg-stone-600 hover:bg-stone-700 text-white",
    },
    {
      texto: "Canciones favoritas",
      link: "/canciones",
      estilo:
        "bg-white border-2 border-stone-300 hover:bg-stone-50 text-stone-700",
    },
    {
      texto: "Ver ubicación",
      link: "https://www.google.com/maps?q=DUVAR+Club+de+Eventos,+Avenida+Hipólito+Yrigoyen+3524,+San+Rafael",
      externo: true,
      estilo:
        "bg-white border-2 border-stone-300 hover:bg-stone-50 text-stone-700",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4 font-serif">
      <div className="max-w-2xl w-full shadow-2xl rounded-lg overflow-hidden relative">
        {!imageError && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${fondoUrl})` }}
            onError={() => setImageError(true)}
          />
        )}

        {imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-stone-50 to-stone-100" />
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/75 to-white/85"></div>

        <div className="relative z-10">
          <div className="pt-8 pb-12 px-8 text-center">
            <p className="text-stone-700 text-sm tracking-widest mb-6 uppercase font-light">
              Estás invitado
            </p>
            <h1 className="text-4xl md:text-5xl font-light text-stone-800 mb-2 tracking-wide uppercase">
              A LA BODA DE
            </h1>
            <h2
              className="text-5xl md:text-6xl text-stone-900 mb-8 font-bold"
              style={{ fontFamily: "'Brush Script MT', cursive" }}
            >
              Martín y Gimena
            </h2>
          </div>

          <div className="px-8 py-8 space-y-10">
            <div className="text-center space-y-2">
              <div className="flex justify-center items-end gap-8">
                <div className="space-y-1">
                  <p className="text-6xl font-light text-stone-800">17</p>
                  <p className="text-lg font-light text-stone-700 uppercase tracking-widest">
                    Enero
                  </p>
                </div>
                <div className="h-20 w-px bg-stone-400 mb-2"></div>
                <div className="space-y-1">
                  <p className="text-6xl font-light text-stone-800">21:30</p>
                  <p className="text-lg font-light text-stone-700 uppercase tracking-widest">
                    Horas
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center space-y-3">
              <p className="text-stone-800 text-xl font-light">
                DUVAR Club de Eventos
              </p>
              <p className="text-stone-700 text-base">
                Avenida Hipólito Yrigoyen 3524,
                <br />
                San Rafael
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 py-4">
              <div className="h-px bg-stone-400 w-32"></div>
            </div>

            <div className="space-y-4 pt-2">
              {acciones.map((accion, i) => (
                <a
                  key={i}
                  href={accion.link}
                  target={accion.externo ? "_blank" : "_self"}
                  rel={accion.externo ? "noopener noreferrer" : undefined}
                  className={`block w-full ${accion.estilo} font-light py-4 px-6 rounded text-center transition-all duration-300 shadow-sm hover:shadow-md uppercase tracking-wider text-sm`}
                >
                  {accion.texto}
                </a>
              ))}

              <button
                onClick={() => setShowGift(true)}
                className="block w-full bg-white border-2 border-stone-300 hover:bg-stone-50 text-stone-700 font-light py-3 px-6 rounded text-center transition-all duration-300 text-sm uppercase tracking-wide"
              >
                💝 Nuestro regalo
              </button>
            </div>
          </div>
        </div>
      </div>

      {showGift && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-2xl">
            <div className="text-center space-y-6">
              <div className="text-stone-600 text-5xl">💝</div>
              <h2 className="text-3xl font-light text-stone-700 uppercase tracking-wide">
                Nuestro Regalo
              </h2>

              <div className="space-y-4 text-stone-600">
                <p className="text-base">
                  Solo pedimos que los adultos colaboren con una tarjeta de:
                </p>
                <p className="text-4xl font-light text-stone-700">$34.500</p>
                <div className="bg-stone-50 p-4 rounded border border-stone-200">
                  <p className="text-sm text-stone-500 mb-2 uppercase tracking-wide">
                    Alias:
                  </p>
                  <p className="text-xl font-light text-stone-700">
                    pablo.zulian.1983
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowGift(false)}
                className="w-full bg-stone-600 hover:bg-stone-700 text-white font-light py-3 px-6 rounded transition-all duration-300 uppercase tracking-wider text-sm"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
