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
                <strong>Calcula la trayectoria</strong> de una particula en 3 dimensiones
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
                <strong>Visualiza en 3D</strong> el movimiento de la particula
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
            <p className="text-lg text-center">Actúa solo en dirección <strong>z</strong> (hacia abajo)</p>
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
            Si vᵤ₀ &le; 0 , el punto más alto sera la posición inicial (tiro parabólico en descenso)
          </p>
        </div>
      )
    },

    // Slide 6: main

    {
      title: "Código: Función Principal",
      content: (
        <div className="space-y-6 text-gray-700">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">__main__()</h2>
          <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm">
            <pre>{`if __name__ == "__main__":

    print("=== Tiro parabólico en 3D con punto máximo ===")

    x0 = float(input("x0 = "))
    y0 = float(input("y0 = "))
    z0 = float(input("z0 = "))

    vx0 = float(input("vx0 = "))
    vy0 = float(input("vy0 = "))
    vz0 = float(input("vz0 = "))

    t = float(input("Tiempo final t: "))

    r0 = np.array([x0, y0, z0])
    v0 = np.array([vx0, vy0, vz0])

    # Posición final
    pos = posicion_tiro_parabolico(r0, v0, t)
    print("\\nPosición en t =", t, "segundos:")
    print("x(t) =", pos[0])
    print("y(t) =", pos[1])
    print("z(t) =", pos[2])

    # Graficar
    graficar_trayectoria(r0, v0, t)`}</pre>
          </div>
          <div className="space-y-3 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-bold">⚙️ Función:</p>
              <ol className="list-decimal mb-10">
                <li className="m-2">Tomamos del input el vector posicion inicial (x0, y0, z0), el vector velocidad inicial (vx0, vy0, vz0) y el tiempo final (t).</li>
                <li className="m-2">Guarda el vector posición y velocidad en 2 arrays diferentes.</li>
                <li className="m-2">Calcula la posición en el tiempo final t.</li>
                <li className="m-2">Grafica el punto final, el punto más alto y la trayectoria.</li>
              </ol>
            </div>
          </div>
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
              <p className="font-bold">📥 Entrada:</p>
              <p>r0 (posición inicial), v0 (velocidad inicial), t (tiempo)</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-bold">📤 Salida:</p>
              <p>Posición [x, y, z] en el tiempo t</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-bold">⚙️ Función:</p>
              <p>Calcula la posición del punto en la trayectoria en el tiempo t y lo devuelve como un vector posición.</p>
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
        return 0, r0

    t_max = vz0 / g
    pos_max = posicion_tiro_parabolico(r0, v0, t_max, g)
    return t_max, pos_max`}</pre>
          </div>
          <div className="space-y-3 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-bold">📥 Entrada:</p>
              <p>r0 (vector posición inical), v0 (vector velocidad inicial)</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-bold">📤 Salida:</p>
              <p>Posición [x, y, z] en el tiempo t</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-bold">⚙️ Función:</p>
              <p>Calcula el punto más alto de la trayectoria. Si la velocidad en el eje z es menor o igual a 0, el punto más alto es al comenzar el tiro.</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 8: Visualización
    {
      title: "Código: Punto Máximo",
      content: (
        <div className="space-y-6 text-gray-700">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">graficar_trayectoria()</h2>
          <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm">
            <pre>{`def graficar_trayectoria(r0, v0, t_final, g=9.81):
    tiempos = np.linspace(0, t_final, 500)

    xs, ys, zs = [], [], []
    for t in tiempos:
        pos = posicion_tiro_parabolico(r0, v0, t, g)
        xs.append(pos[0]); ys.append(pos[1]); zs.append(pos[2])

    # Calcular punto más alto
    t_max, pos_max = punto_mas_alto(r0, v0, g)

    print(f"\\n ==== El punto mas alto es alcanzado a los {t_max} segundos ====\\n")

    # Gráfico en 3D
    fig = plt.figure(figsize=(8, 6))
    ax = fig.add_subplot(111, projection='3d')

    ax.plot(xs, ys, zs, label="Trayectoria")

    # Marcar el punto maximo
    ax.scatter(pos_max[0], pos_max[1], pos_max[2], s=60, color='red', label="Punto más alto")
    ax.text(pos_max[0], pos_max[1], pos_max[2],
            f"  Máximo\\n  z={pos_max[2]:.2f} m", color='red')

    # Datos del gráfico
    ax.set_title("Trayectoria del tiro parabólico en 3D")
    ax.set_xlabel("x(t) [m]")
    ax.set_ylabel("y(t) [m]")
    ax.set_zlabel("z(t) [m]")
    ax.legend()

    ax.plot(xs, ys, np.zeros_like(xs), linestyle='--', alpha=0.3)

    plt.show()`}</pre>
          </div>
          <div className="space-y-3 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-bold">📥 Entrada:</p>
              <p>r0 (vector posición inical), v0 (vector velocidad inicial)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-bold">⚙️ Función:</p>
              <ol className="list-decimal mb-10">
                <li className="m-2">Creamos un vector con 500 puntos equidistantes entre 0 y el tiempo final. (se usará como eje)</li>
                <li className="m-2">Por cada tiempo en el vector, calculamos la posición en la trayectoria.</li>
                <li className="m-2">Calcula la posición del punto más alto.</li>
                <li className="m-2">Crea el gráfico, sus labels, colores, etc.</li>
                <li className="m-2">Inserta los datos en el gráfico y lo imprime.</li>
              </ol>
            </div>
          </div>
        </div>
      )
    },

    // Slide 11: Ejemplo práctico 1
    {
      title: "Ejemplo de Uso",
      content: (
        <div className="space-y-6 text-gray-700">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Caso Práctico 1</h2>
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
                <p className="font-mono">t_max ≈ 2.0387 s</p>
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

    // Slide 12: Ejemplo práctico 2
    {
      title: "Ejemplo de Uso",
      content: (
        <div className="space-y-6 text-gray-700">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Caso Práctico 2</h2>
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
                <p className="font-mono">vₓ₀ = 0 m/s</p>
                <p className="font-mono">vᵧ₀ = 0 m/s</p>
                <p className="font-mono">vᵤ₀ = 20 m/s</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-400">
                <p className="font-bold text-lg mb-2">🎯 Resultados:</p>
                <p className="font-mono">t_max ≈ 2.0387 s</p>
                <p className="font-mono">z_max ≈ 20.39 m</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-lg">El proyectil alcanza su altura máxima a los ~2 segundos</p>
                <br />
                <Image
                    src="/TiroVertical.png"
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

    // Slide 13: Ejemplo práctico 2
    {
      title: "Ejemplo de Uso",
      content: (
        <div className="space-y-6 text-gray-700">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Caso Práctico 3</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-bold text-lg mb-2">📍 Posición inicial:</p>
                <p className="font-mono">x₀ = 0 m</p>
                <p className="font-mono">y₀ = 0 m</p>
                <p className="font-mono">z₀ = 5 m</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-lg mb-2">⚡ Velocidad inicial:</p>
                <p className="font-mono">vₓ₀ = 0 m/s</p>
                <p className="font-mono">vᵧ₀ = 0 m/s</p>
                <p className="font-mono">vᵤ₀ = 0 m/s</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-400">
                <p className="font-bold text-lg mb-2">🎯 Resultados:</p>
                <p className="font-mono">t_max ≈ 0 s</p>
                <p className="font-mono">z_max ≈ 5 m</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-lg">El proyectil está en su punto más alto al instante de comenzar la caída</p>
                <br />
                <Image
                    src="/CaidaLibre.png"
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


    {
  title: "Conclusiones",
  content: (
    <div className="space-y-6 text-gray-700">
      <h2 className="text-3xl font-bold text-blue-600 mb-8">Conclusiones</h2>
      <div className="space-y-4">

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <p className="text-lg">
            ✅ El programa permite modelar correctamente la cinemática de una partícula sometida únicamente al campo gravitatorio.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <p className="text-lg">
            ✅ Se verifica la independencia de los movimientos en los tres ejes:  
            las componentes <strong>x</strong> e <strong>y</strong> siguen un MRU, mientras que la componente <strong>z</strong> corresponde a un MRUV debido a la gravedad.
          </p>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <p className="text-lg">
            ✅ La visualización gráfica permite corroborar que la trayectoria resultante posee forma parabólica, como en un tiro parabólico ideal sin resistencia del aire y con gravedad constante.
          </p>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <p className="text-lg">
            ✅ El programa constituye una herramienta educativa útil para analizar y comprender el comportamiento físico del movimiento parabólico.
          </p>
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
          <p className="text-2xl text-gray-600">¿Preguntas? (por favor no)</p>
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