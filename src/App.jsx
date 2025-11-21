import { useState } from "react";
import fondoUrl from "./fotos/Fondo4.jpeg";

export default function App() {
  const [showGift, setShowGift] = useState(false);
  const [imageError, setImageError] = useState(false);

  const acciones = [
    {
      texto: "Confirmar asistencia",
      link: "https://docs.google.com/forms/d/1489ZOtR1wGfGPBzPt28I_bzfljS7yry7S78OgDc4ooc/edit?ts=690e83ca&pli=1",
      estilo:
        "bg-[#BFD6D1] hover:bg-[#AAC8C0] text-[#1C3D4F]",
    },
    {
      texto: "Canciones favoritas",
      link: "https://open.spotify.com/playlist/74wi1HK5UcJLxYJr01vTOJ?si=PxUv4AHPQrC9bgLVTuvqYQ&pt=e342a57f7d664383cef35f92536b3d00&pi=0MoARvxiQlKCF",
      estilo:
        "bg-white border-2 border-[#BFD6D1] hover:bg-[#E7F0EE] text-[#1C3D4F]",
    },
    {
      texto: "Ver ubicación",
      link: "https://www.google.com/maps?q=DUVAR+Club+de+Eventos,+Avenida+Hipólito+Yrigoyen+3524,+San+Rafael",
      externo: true,
      estilo:
        "bg-white border-2 border-[#BFD6D1] hover:bg-[#E7F0EE] text-[#1C3D4F]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f3f7f6] flex items-center justify-center p-4 font-serif">
      <div className="max-w-2xl w-full shadow-2xl rounded-lg overflow-hidden relative">
        {!imageError && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${fondoUrl})` }}
            onError={() => setImageError(true)}
          />
        )}
        
        {imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#d7e5e2] via-[#f0f5f4] to-[#bfd6d1]" />
        )}
          
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white/40"></div>
        
        <div className="relative z-10">
          <div className="pt-20 pb-18 px-8 text-center">
             {/* 🔹 FRASES */}
            <div className="text-center space-y-6 px-4 py-6">
              <p
                className="text-2xl md:text-3xl text-[#2D5E68] italic"
                style={{ fontFamily: "'Brush Script MT', cursive" }}
              >
                "Amor magister est optimus"
              </p>
              <p className="text-sm text-[#579CA8] font-light tracking-wide">
                El amor es el mejor maestro
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 py-4">
              <div className="h-px bg-[#BFD6D1] w-32"></div>
            </div>
            <p className="text-[#2D5E68] text-sm tracking-widest mb-6 uppercase font-light">
              Estás invitado
            </p>
            <h1 className="text-4xl md:text-5xl font-light text-[#1C3D4F] mb-2 tracking-wide uppercase">
              A LA BODA DE
            </h1>
            <h2
              className="text-5xl md:text-6xl text-[#2D5E68] mb-8 font-bold"
              style={{ fontFamily: "'Brush Script MT', cursive" }}
            >
              Martín y Gimena
            </h2>
          </div>
          <div className="flex items-center justify-center gap-3 py-4">
              <div className="h-px bg-[#BFD6D1] w-32"></div>
            </div>

            {/* 🔹 FRASES */}
            <div className="text-center space-y-6 px-4 py-6">
              <div className="pt-4">
                <p className="text-base text-[#1C3D4F] font-light leading-relaxed">
                  "Por encima de todo, vístanse de amor,
                  <br />
                  que es el vínculo perfecto."
                </p>
                <p className="text-sm text-[#579CA8] mt-2 italic">
                  Colosenses 3:14
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 py-4">
              <div className="h-px bg-[#BFD6D1] w-32"></div>
            </div>

            {/* 🔹 BOTONES */}
          <div className="px-8 py-8 pb-16 space-y-10">
            {/* 🔹 CEREMONIA RELIGIOSA */}
            <div className="text-center space-y-3">
              <p className="text-[#2D5E68] uppercase tracking-widest text-sm">
                Ceremonia Religiosa
              </p>
              <div className="flex justify-center items-end gap-8 mt-2">
                <div className="space-y-1">
                  <p className="text-6xl font-light text-[#1C3D4F]">17</p>
                  <p className="text-lg font-light text-[#2D5E68] uppercase tracking-widest">
                    Enero
                  </p>
                </div>
                <div className="h-20 w-px bg-[#BFD6D1] mb-2"></div>
                <div className="space-y-1">
                  <p className="text-6xl font-light text-[#1C3D4F]">18:30</p>
                  <p className="text-lg font-light text-[#2D5E68] uppercase tracking-widest">
                    Horas
                  </p>
                </div>
              </div>

              <p className="text-[#1C3D4F] text-xl font-light mt-4">
                Parroquia San Pedro Apóstol
              </p>
              <a
                href="https://www.google.com/maps/place/Parroquia+San+Pedro+Ap%C3%B3stol+(Di%C3%B3cesis+de+San+Rafael)/@-34.6255479,-68.3106131,17z/data=!3m1!4b1!4m6!3m5!1s0x9679a96226922027:0x9f33dba5d36d1d86!8m2!3d-34.6255479!4d-68.3106131!16s%2Fg%2F11pf96k5s0?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#579CA8] hover:text-[#2D5E68] text-sm underline"
              >
                Ver ubicación
              </a>
            </div>

            <div className="flex items-center justify-center gap-3 py-4">
              <div className="h-px bg-[#BFD6D1] w-32"></div>
            </div>

            {/* 🔹 FIESTA */}
            <div className="text-center space-y-3">
              <p className="text-[#2D5E68] uppercase tracking-widest text-sm">
                Celebración
              </p>
              <div className="flex justify-center items-end gap-8 mt-2">
                <div className="space-y-1">
                  <p className="text-6xl font-light text-[#1C3D4F]">21:00</p>
                  <p className="text-lg font-light text-[#2D5E68] uppercase tracking-widest">
                    Horas
                  </p>
                </div>
              </div>

              <p className="text-[#1C3D4F] text-xl font-light mt-4">
                DUVAR Club de Eventos
              </p>
              <p className="text-[#2D5E68] text-base">
                Avenida Hipólito Yrigoyen 3524,
                <br />
                San Rafael
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 py-4">
              <div className="h-px bg-[#BFD6D1] w-32"></div>
            </div>

            {/* 🔹 BOTONES */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={acciones[0].link}
                  className={`flex-1 ${acciones[0].estilo} font-light py-4 px-6 rounded text-center transition-all duration-300 shadow-sm hover:shadow-md uppercase tracking-wider text-sm`}
                >
                  {acciones[0].texto}
                </a>

                <button
                  onClick={() => setShowGift(true)}
                  className="flex-1 bg-white border-2 border-[#BFD6D1] hover:bg-[#E7F0EE] text-[#1C3D4F] font-light py-4 px-6 rounded text-center transition-all duration-300 text-sm uppercase tracking-wide shadow-sm hover:shadow-md"
                >
                  💝 Nuestro regalo
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {acciones.slice(1).map((accion, i) => (
                  <a
                    key={i}
                    href={accion.link}
                    target={accion.externo ? "_blank" : "_self"}
                    rel={accion.externo ? "noopener noreferrer" : undefined}
                    className={`flex-1 ${accion.estilo} font-light py-4 px-6 rounded text-center transition-all duration-300 shadow-sm hover:shadow-md uppercase tracking-wider text-sm`}
                  >
                    {accion.texto}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showGift && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-2xl">
            <div className="text-center space-y-6">
              <div className="text-[#579CA8] text-5xl">💝</div>
              <h2 className="text-3xl font-light text-[#1C3D4F] uppercase tracking-wide">
                Nuestro Regalo
              </h2>

              <div className="space-y-4 text-[#2D5E68]">
                <p className="text-base">
                  Solo pedimos que los adultos colaboren con una tarjeta, los niños no pagan.
                </p>
                <p className="text-4xl font-light text-[#1C3D4F]">$34.500</p>
                <div className="bg-[#E7F0EE] p-4 rounded border border-[#BFD6D1]">
                  <p className="text-sm text-[#579CA8] mb-2 uppercase tracking-wide">
                    Alias:
                  </p>
                  <p className="text-xl font-light text-[#1C3D4F]">
                    Alias: pablo.zulian.mp
                    <br />
                    CVU: 0000003100075083796364
                    <br />
                    Nombre: Pablo Martin Zulian
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowGift(false)}
                className="w-full bg-[#BFD6D1] hover:bg-[#AAC8C0] text-[#1C3D4F] font-light py-3 px-6 rounded transition-all duration-300 uppercase tracking-wider text-sm"
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
