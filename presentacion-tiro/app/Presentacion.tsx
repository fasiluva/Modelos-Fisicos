'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from "next/image";

const Presentacion = () => {
  const [slide, setSlide] = useState(0);

  const slides = [
    // Slide 0: Portada
    {
      title: "Tiro Parabólico en 3D",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="text-6xl">🚀</div>
          <h1 className="text-5xl font-bold text-blue-600">Tiro Parabólico en 3D</h1>
          <p className="text-2xl text-gray-600">Simulación con Python</p>
          <div className="mt-8 text-lg text-gray-500">
            Modelado físico y visualización
          </div>
        </div>
      )
    },
    
    // Slide 1: Objetivos
    {
      title: "Objetivos del Proyecto",
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">¿Qué hace nuestro código?</h2>
          <div className="space-y-4 text-xl text-gray-700">
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg ">
              <span className="text-3xl">📐</span>
              <div>
                <strong>Calcula la trayectoria</strong> de un proyectil en 3 dimensiones
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
              <span className="text-3xl">📊</span>
              <div>
                <strong>Determina el punto más alto</strong> de la trayectoria
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
              <span className="text-3xl">📈</span>
              <div>
                <strong>Visualiza en 3D</strong> el movimiento del proyectil
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 2: Fundamentos teóricos - Vectores
    {
      title: "Base Teórica: Vectores en 3D",
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Vectores en Tres Dimensiones</h2>
          <div className="bg-gray-50 p-6 rounded-lg text-gray-700">
            <p className="text-xl mb-4">Todo vector se representa como:</p>
            <div className="text-center text-2xl font-mono bg-white p-4 rounded">
              <strong>v⃗</strong> = (x, y, z)
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6 text-gray-700">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-bold text-lg mb-2">🎯 Posición inicial (r₀):</p>
              <p className="font-mono">(x₀, y₀, z₀)</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-bold text-lg mb-2">⚡ Velocidad inicial (v₀):</p>
              <p className="font-mono">(vₓ₀, vᵧ₀, vᵤ₀)</p>
            </div>
          </div>
          <p className="text-lg text-gray-600 mt-4">
            Cada componente (x, y, z) evoluciona de forma independiente
          </p>
        </div>
      )
    },

    // Slide 3: Ecuaciones del movimiento
    {
      title: "Ecuaciones del Movimiento",
      content: (
        <div className="space-y-6 text-gray-700">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Cinemática del MRUV</h2>
          <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
            <p className="text-xl font-bold mb-4 text-center">Ecuación General:</p>
            <div className="text-center text-xl font-mono bg-white p-4 rounded">
              r⃗(t) = r⃗₀ + v⃗₀·t + ½·a⃗·t²
            </div>
          </div>
          <div className="space-y-3 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-mono text-lg"><strong>x(t)</strong> = x₀ + vₓ₀·t</p>
              <p className="text-sm text-gray-600">Movimiento uniforme (sin aceleración)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-mono text-lg"><strong>y(t)</strong> = y₀ + vᵧ₀·t</p>
              <p className="text-sm text-gray-600">Movimiento uniforme (sin aceleración)</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
              <p className="font-mono text-lg"><strong>z(t)</strong> = z₀ + vᵤ₀·t - ½·g·t²</p>
              <p className="text-sm text-gray-600">Movimiento con gravedad (g = 9.81 m/s²)</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4: La gravedad
    {
      title: "Efecto de la Gravedad",
      content: (
        <div className="space-y-6 text-gray-700">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Aceleración Gravitatoria</h2>
          <div className="flex justify-center mb-6">
            <div className="text-8xl">⬇️</div>
          </div>
          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
            <p className="text-2xl font-bold text-center mb-4">g = 9.81 m/s²</p>
            <p className="text-lg text-center">Actúa solo en dirección <strong>-z</strong> (hacia abajo)</p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <p className="font-bold">Eje X</p>
              <p className="text-2xl">aₓ = 0</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <p className="font-bold">Eje Y</p>
              <p className="text-2xl">aᵧ = 0</p>
            </div>
            <div className="bg-red-100 p-4 rounded-lg text-center border-2 border-red-300">
              <p className="font-bold">Eje Z</p>
              <p className="text-2xl">aᵤ = -g</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5: Punto más alto
    {
      title: "Punto Más Alto",
      content: (
        <div className="space-y-6 text-gray-700">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Cálculo del Máximo</h2>
          <div className="flex justify-center mb-6">
            <div className="text-6xl">⛰️</div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
            <p className="text-xl mb-4">El punto más alto ocurre cuando la <strong>velocidad vertical es cero</strong>:</p>
            <div className="text-center text-xl font-mono bg-white p-4 rounded my-4">
              vᵤ(t) = vᵤ₀ - g·t = 0
            </div>
            <div className="text-center text-2xl font-mono bg-yellow-100 p-4 rounded border-2 border-yellow-400">
              <strong>t_max = vᵤ₀ / g</strong>
            </div>
          </div>
          <p className="text-lg text-gray-600 text-center mt-4">
            Solo existe si vᵤ₀ &gt; 0 (lanzamiento hacia arriba)
          </p>
        </div>
      )
    },

    // Slide 6: Estructura del código - Función 1
    {
      title: "Código: Función Principal",
      content: (
        <div className="space-y-6 text-gray-700">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">posicion_tiro_parabolico()</h2>
          <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm">
            <pre>{`def posicion_tiro_parabolico(r0, v0, t, g=9.81):
    x = r0[0] + v0[0] * t
    y = r0[1] + v0[1] * t
    z = r0[2] + v0[2] * t - 0.5 * g * t**2
    return np.array([x, y, z])`}</pre>
          </div>
          <div className="space-y-3 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-bold">📥 Entradas:</p>
              <p>r0 (posición inicial), v0 (velocidad inicial), t (tiempo)</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-bold">📤 Salida:</p>
              <p>Posición [x, y, z] en el tiempo t</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 7: Estructura del código - Función 2
    {
      title: "Código: Punto Máximo",
      content: (
        <div className="space-y-6 text-gray-700">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">punto_mas_alto()</h2>
          <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm">
            <pre>{`def punto_mas_alto(r0, v0, g=9.81):
    vz0 = v0[2]
    
    if vz0 <= 0:
        return None, None
    
    t_max = vz0 / g
    pos_max = posicion_tiro_parabolico(r0, v0, t_max, g)
    return t_max, pos_max`}</pre>
          </div>
          <div className="space-y-3 mt-6">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-bold">⚠️ Verificación:</p>
              <p>Solo calcula si vᵤ₀ &gt; 0</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-bold">✅ Retorna:</p>
              <p>Tiempo y posición del punto máximo</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 8: Visualización
    {
      title: "Visualización en 3D",
      content: (
        <div className="space-y-6 text-gray-700">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">graficar_trayectoria()</h2>
          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
            <p className="text-xl mb-4 font-bold">¿Qué hace?</p>
            <ul className="space-y-3 text-lg">
              <li>✅ Calcula 500 puntos de la trayectoria</li>
              <li>✅ Crea un gráfico 3D con matplotlib</li>
              <li>✅ Marca el punto más alto en rojo</li>
              <li>✅ Muestra proyección en el suelo</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center mt-6">
            <p className="text-lg">📊 <strong>Resultado:</strong> Visualización interactiva de la trayectoria</p>
          </div>
        </div>
      )
    },

    // Slide 9: Flujo del programa
    {
      title: "Flujo del Programa",
      content: (
        <div className="space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Ejecución del Código</h2>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">1</div>
              <div className="flex-1 bg-blue-50 p-4 rounded-lg">
                <strong>Entrada de datos:</strong> Usuario ingresa posición y velocidad inicial
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">2</div>
              <div className="flex-1 bg-green-50 p-4 rounded-lg">
                <strong>Cálculo de posición:</strong> Evalúa posición en tiempo t
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">3</div>
              <div className="flex-1 bg-yellow-50 p-4 rounded-lg">
                <strong>Punto máximo:</strong> Determina altura máxima y momento
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">4</div>
              <div className="flex-1 bg-purple-50 p-4 rounded-lg">
                <strong>Visualización:</strong> Genera gráfico 3D de la trayectoria
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 10: Ejemplo práctico
    {
      title: "Ejemplo de Uso",
      content: (
        <div className="space-y-6 text-gray-700">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Caso Práctico</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-bold text-lg mb-2">📍 Posición inicial:</p>
                <p className="font-mono">x₀ = 0 m</p>
                <p className="font-mono">y₀ = 0 m</p>
                <p className="font-mono">z₀ = 0 m</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-lg mb-2">⚡ Velocidad inicial:</p>
                <p className="font-mono">vₓ₀ = 10 m/s</p>
                <p className="font-mono">vᵧ₀ = 5 m/s</p>
                <p className="font-mono">vᵤ₀ = 20 m/s</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-400">
                <p className="font-bold text-lg mb-2">🎯 Resultados:</p>
                <p className="font-mono">t_max ≈ 2.04 s</p>
                <p className="font-mono">z_max ≈ 20.39 m</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-lg">El proyectil alcanza su altura máxima a los ~2 segundos</p>
                <br />
                <Image
                    src="/Figure_1.png"
                    alt="Tiro parabolico graficado"
                    width={500}
                    height={300}
                    className="rounded-lg"
                />
              </div> 
            </div>
          </div>
        </div>
      )
    },

    // Slide 11: Conceptos físicos clave
    {
      title: "Conceptos Físicos Clave",
      content: (
        <div className="space-y-6 text-gray-700">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Resumen Teórico</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-bold text-lg mb-2">🔵 MRUV</p>
              <p className="text-sm">Movimiento con aceleración constante (eje z)</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-bold text-lg mb-2">🔵 MRU</p>
              <p className="text-sm">Movimiento uniforme (ejes x, y)</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="font-bold text-lg mb-2">🔴 Gravedad</p>
              <p className="text-sm">Única fuerza actuando (9.81 m/s²)</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-bold text-lg mb-2">🟡 Independencia</p>
              <p className="text-sm">Cada eje evoluciona independientemente</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-bold text-lg mb-2">🟣 Trayectoria</p>
              <p className="text-sm">Curva parabólica en el espacio 3D</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <p className="font-bold text-lg mb-2">🔴 Punto máximo</p>
              <p className="text-sm">Cuando velocidad vertical = 0</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 12: Conclusiones
    {
      title: "Conclusiones",
      content: (
        <div className="space-y-6 text-gray-700">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">Conclusiones</h2>
          <div className="space-y-4">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <p className="text-xl">✅ El código modela correctamente el tiro parabólico en 3D</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-xl">✅ Aplica las ecuaciones de cinemática del MRUV</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <p className="text-xl">✅ Permite visualizar y analizar el movimiento</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <p className="text-xl">✅ Es una herramienta educativa útil para entender la física</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 13: Gracias
    {
      title: "Fin",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="text-6xl">🎓</div>
          <h1 className="text-5xl font-bold text-blue-600">¡Gracias!</h1>
          <p className="text-2xl text-gray-600">¿Preguntas?</p>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (slide < slides.length - 1) setSlide(slide + 1);
  };

  const prevSlide = () => {
    if (slide > 0) setSlide(slide - 1);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      {/* Slide content */}
      <div className="flex-1 p-12 overflow-auto">
        <div className="max-w-6xl mx-auto h-full">
          {slides[slide].content}
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={slide === 0}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 transition"
          >
            <ChevronLeft size={20} />
            <span>Anterior</span>
          </button>

          <div className="text-gray-600 font-medium">
            {slide + 1} / {slides.length}
          </div>

          <button
            onClick={nextSlide}
            disabled={slide === slides.length - 1}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 transition"
          >
            <span>Siguiente</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="bg-white border-t border-gray-200 p-2">
        <div className="max-w-6xl mx-auto flex justify-center space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={`w-2 h-2 rounded-full transition ${
                idx === slide ? 'bg-blue-500 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Presentacion;