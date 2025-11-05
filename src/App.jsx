import { useState } from "react";

export default function App() {
  const [showGift, setShowGift] = useState(false);

  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4 font-serif">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-lg overflow-hidden relative">
        
        {/* Imagen de fondo superior */}
        <div className="h-64 bg-fondo bg-cover bg-center relative">
          <div className="absolute inset-0 bg-white bg-opacity-40"></div>
        </div>

        {/* Header con nombres */}
        <div className="pt-8 pb-12 px-8 text-center relative bg-white">
          <p className="text-stone-600 text-sm tracking-widest mb-6 uppercase font-light">
            Estás invitado
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-stone-700 mb-2 tracking-wide uppercase">
            A LA BODA DE
          </h1>
          <h2
            className="text-5xl md:text-6xl text-stone-800 mb-8"
            style={{ fontFamily: "'Brush Script MT', cursive" }}
          >
            Martín y Gimena
          </h2>
        </div>

        {/* Información del evento */}
        <div className="px-8 py-8 space-y-10 bg-white">
          <div className="text-center space-y-2">
            <div className="flex justify-center items-end gap-8">
              <div className="space-y-1">
                <p className="text-6xl font-light text-stone-700">17</p>
                <p className="text-lg font-light text-stone-600 uppercase tracking-widest">Enero</p>
              </div>
              <div className="h-20 w-px bg-stone-300 mb-2"></div>
              <div className="space-y-1">
                <p className="text-6xl font-light text-stone-700">21:30</p>
                <p className="text-lg font-light text-stone-600 uppercase tracking-widest">Horas</p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-3">
            <p className="text-stone-700 text-xl font-light">DUVAR Club de Eventos</p>
            <p className="text-stone-600 text-base">
              Avenida Hipólito Yrigoyen 3524,<br />
              San Rafael
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 py-4">
            <div className="h-px bg-stone-300 w-32"></div>
          </div>

          <div className="space-y-4 pt-2">
            <a
              href="/confirmacion"
              className="block w-full bg-stone-600 hover:bg-stone-700 text-white font-light py-4 px-6 rounded text-center transition-all duration-300 shadow-md hover:shadow-lg uppercase tracking-wider text-sm"
            >
              Confirmar asistencia
            </a>
            
            <div className="grid grid-cols-2 gap-4">
              <a
                href="/canciones"
                className="block bg-white border-2 border-stone-300 hover:bg-stone-50 text-stone-700 font-light py-3 px-4 rounded text-center transition-all duration-300 text-xs uppercase tracking-wide"
              >
                Canciones favoritas
              </a>
              
              <a
                href="https://www.google.com/maps?q=DUVAR+Club+de+Eventos,+Avenida+Hipólito+Yrigoyen+3524,+San+Rafael"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border-2 border-stone-300 hover:bg-stone-50 text-stone-700 font-light py-3 px-4 rounded text-center transition-all duration-300 text-xs uppercase tracking-wide"
              >
                Ver ubicación
              </a>
            </div>

            <button
              onClick={() => setShowGift(true)}
              className="block w-full bg-white border-2 border-stone-300 hover:bg-stone-50 text-stone-700 font-light py-3 px-6 rounded text-center transition-all duration-300 text-sm uppercase tracking-wide"
            >
              💝 Nuestro regalo
            </button>
          </div>
        </div>

        {/* Imagen de fondo inferior */}
        <div className="h-64 bg-fondo bg-cover bg-center relative">
          <div className="absolute inset-0 bg-white bg-opacity-40"></div>
        </div>
      </div>

      {/* Modal de regalo */}
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
                  <p className="text-sm text-stone-500 mb-2 uppercase tracking-wide">Alias:</p>
                  <p className="text-xl font-light text-stone-700">pablo.zulian.1983</p>
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
