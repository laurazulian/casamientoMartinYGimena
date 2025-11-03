import { useState } from "react";

export default function App() {
  const [showGift, setShowGift] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-amber-50 to-blue-100 flex items-center justify-center p-4 font-serif">
      {/* Contenedor principal */}
      <div className="max-w-2xl w-full bg-gradient-to-b from-amber-50 to-white shadow-2xl rounded-lg overflow-hidden">
        
        {/* Header con nombres */}
        <div className="bg-gradient-to-b from-sky-100 to-amber-50 py-16 px-8 text-center relative">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-sky-300 text-6xl">
            ✦
          </div>
          <h1 className="text-6xl md:text-7xl font-light text-sky-900 mb-4 tracking-wide">
            Martín <span className="text-sky-400">&</span> Gimena
          </h1>
          <p className="text-sky-700 text-xl font-light tracking-widest">
            ¡NOS CASAMOS!
          </p>
          <div className="mt-6 flex justify-center gap-4 text-sky-300 text-2xl">
            <span>❀</span>
            <span>❀</span>
            <span>❀</span>
          </div>
        </div>

        {/* Información del evento */}
        <div className="px-8 py-12 space-y-8">
          
          {/* Fecha y hora */}
          <div className="text-center space-y-3">
            <div className="text-sky-400 text-4xl mb-2">✦</div>
            <h2 className="text-2xl text-sky-900 font-light">Celebremos juntos</h2>
            <div className="text-gray-700 space-y-1">
              <p className="text-xl font-light">Viernes</p>
              <p className="text-5xl font-light text-sky-800">17</p>
              <p className="text-xl font-light">Enero • 2025</p>
            </div>
          </div>

          {/* Separador */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px bg-sky-200 w-20"></div>
            <span className="text-sky-300">❀</span>
            <div className="h-px bg-sky-200 w-20"></div>
          </div>

          {/* Lugar */}
          <div className="text-center space-y-3">
            <div className="text-sky-400 text-4xl mb-2">✦</div>
            <h2 className="text-2xl text-sky-900 font-light">Lugar</h2>
            <p className="text-gray-700 text-lg">DUVAR Club de Eventos</p>
            <p className="text-gray-600 text-sm">
              Avenida Hipólito Yrigoyen 3524<br />
              San Rafael
            </p>
          </div>

          {/* Hora */}
          <div className="text-center space-y-3">
            <div className="text-sky-400 text-4xl mb-2">✦</div>
            <h2 className="text-2xl text-sky-900 font-light">Hora</h2>
            <p className="text-gray-700 text-lg">Recepción: 21:30 hs</p>
          </div>

          {/* Separador */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px bg-sky-200 w-20"></div>
            <span className="text-sky-300">❀</span>
            <div className="h-px bg-sky-200 w-20"></div>
          </div>

          {/* Botones de acción */}
          <div className="space-y-4 pt-4">
            <a
              href="/confirmacion"
              className="block w-full bg-sky-400 hover:bg-sky-500 text-white font-light py-4 px-6 rounded-full text-center transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Confirmar asistencia
            </a>
            
            <div className="grid grid-cols-2 gap-4">
              <a
                href="/canciones"
                className="block bg-white border-2 border-sky-300 hover:bg-sky-50 text-sky-700 font-light py-3 px-4 rounded-full text-center transition-all duration-300 text-sm"
              >
                Canciones favoritas
              </a>
              
              <a
                href="https://www.google.com/maps?q=DUVAR+Club+de+Eventos,+Avenida+Hipólito+Yrigoyen+3524,+San+Rafael"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border-2 border-sky-300 hover:bg-sky-50 text-sky-700 font-light py-3 px-4 rounded-full text-center transition-all duration-300 text-sm"
              >
                Ver ubicación
              </a>
            </div>

            <button
              onClick={() => setShowGift(true)}
              className="block w-full bg-white border-2 border-sky-300 hover:bg-sky-50 text-sky-700 font-light py-3 px-6 rounded-full text-center transition-all duration-300"
            >
              💝 Nuestro regalo
            </button>
          </div>
        </div>

        {/* Footer decorativo */}
        <div className="bg-gradient-to-t from-sky-100 to-amber-50 py-8 text-center">
          <div className="text-sky-300 text-2xl space-x-3">
            <span>❀</span>
            <span>✦</span>
            <span>❀</span>
          </div>
          <p className="text-sky-700 text-sm mt-4 font-light tracking-wide">
            ¡Esperamos contar con tu presencia!
          </p>
        </div>
      </div>

      {/* Modal de regalo */}
      {showGift && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
          <div className="bg-gradient-to-b from-amber-50 to-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in zoom-in duration-300">
            <div className="text-center space-y-6">
              <div className="text-sky-400 text-5xl">💝</div>
              <h2 className="text-3xl font-light text-sky-900">Nuestro Regalo</h2>
              
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Solo pedimos que los adultos colaboren con una tarjeta de:
                </p>
                <p className="text-4xl font-light text-sky-800">
                  $34.500
                </p>
                <div className="bg-sky-50 p-4 rounded-lg border border-sky-200">
                  <p className="text-sm text-gray-600 mb-2">Alias:</p>
                  <p className="text-xl font-light text-sky-900">
                    pablo.zulian.1983
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowGift(false)}
                className="w-full bg-sky-400 hover:bg-sky-500 text-white font-light py-3 px-6 rounded-full transition-all duration-300"
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