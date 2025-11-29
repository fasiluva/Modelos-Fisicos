import numpy as np
import matplotlib.pyplot as plt

# -------------------------------------------------------------
#  FUNCIONES DEL MODELO FÍSICO
# -------------------------------------------------------------

def posicion_tiro_parabolico(r0, v0, t, g=9.81):
    """Devuelve la posición (x,y,z) en tiempo t bajo gravedad."""
    x = r0[0] + v0[0] * t
    y = r0[1] + v0[1] * t
    z = r0[2] + v0[2] * t - 0.5 * g * t**2
    return np.array([x, y, z])

def punto_mas_alto(r0, v0, g=9.81):
    """
    Calcula el tiempo y posición del punto más alto.
    """
    vz0 = v0[2]

    if vz0 <= 0:
        return 0, r0

    t_max = vz0 / g
    pos_max = posicion_tiro_parabolico(r0, v0, t_max, g)
    return t_max, pos_max


# -------------------------------------------------------------
#  GRAFICAR TRAYECTORIA CON PUNTO MÁXIMO
# -------------------------------------------------------------

def graficar_trayectoria(r0, v0, t_final, g=9.81):
    tiempos = np.linspace(0, t_final, 500)

    xs, ys, zs = [], [], []
    for t in tiempos:
        pos = posicion_tiro_parabolico(r0, v0, t, g)
        xs.append(pos[0]); ys.append(pos[1]); zs.append(pos[2])

    # Calcular punto más alto
    t_max, pos_max = punto_mas_alto(r0, v0, g)

    # Gráfico en 3D
    fig = plt.figure(figsize=(8, 6))
    ax = fig.add_subplot(111, projection='3d')

    ax.plot(xs, ys, zs, label="Trayectoria")

    # Si existe punto máximo, marcarlo
    ax.scatter(pos_max[0], pos_max[1], pos_max[2], s=60, color='red', label="Punto más alto")
    ax.text(pos_max[0], pos_max[1], pos_max[2],
            f"  Máximo\n  z={pos_max[2]:.2f} m", color='red')

    # Datos del gráfico
    ax.set_title("Trayectoria del tiro parabólico en 3D")
    ax.set_xlabel("x(t) [m]")
    ax.set_ylabel("y(t) [m]")
    ax.set_zlabel("z(t) [m]")
    ax.legend()

    # Opcional: línea del suelo
    ax.plot(xs, ys, np.zeros_like(xs), linestyle='--', alpha=0.3)

    plt.show()


# -------------------------------------------------------------
#  PROGRAMA PRINCIPAL
# -------------------------------------------------------------

if __name__ == "__main__":

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
    print("\nPosición en t =", t, "segundos:")
    print("x(t) =", pos[0])
    print("y(t) =", pos[1])
    print("z(t) =", pos[2])

    # Graficar
    graficar_trayectoria(r0, v0, t)

# Aquí tenés un **listado claro, simple y completo** de los **temas mínimos de Física** necesarios para **entender, explicar y resolver** el ejercicio del tiro parabólico en 3D.
# 
# ---
# 
# # ✅ **TEMAS MÍNIMOS DE FÍSICA PARA ESTE TRABAJO**
# 
# ## 1️⃣ **Vectores en tres dimensiones**
# 
# Debés manejar:
# 
# * Representación de un vector como ((x, y, z))
# * Suma de vectores
# * Producto por un escalar
# * Interpretación de un vector posición y un vector velocidad
# 
# > Es fundamental porque el movimiento se describe en 3D, y la posición, velocidad y aceleración son vectores.
# 
# ---
# 
# ## 2️⃣ **Cinemática del movimiento rectilíneo uniformemente variado (MRUV)**
# 
# Es el movimiento con **aceleración constante**.
# 
# Las ecuaciones que necesitás saber son:
# 
# [
# r(t)=r_0 + v_0,t + \frac{1}{2} a t^2
# ]
# 
# Separadas por coordenadas:
# 
# * (x(t) = x_0 + v_{x0}, t)
# * (y(t) = y_0 + v_{y0}, t)
# * (z(t) = z_0 + v_{z0}, t - \frac{1}{2} g t^2)
# 
# > Esto se usa para deducir cómo evoluciona cada componente del movimiento.
# 
# ---
# 
# ## 3️⃣ **Movimiento en 3D con aceleración constante**
# 
# Saber que:
# 
# * Si la aceleración actúa solo en una dirección, solo esa componente cambia.
# * Gravedad → actúa en **-z**, entonces (a_x = 0), (a_y = 0), (a_z = -g).
# 
# > Por eso x e y son movimientos rectilíneos uniformes, y z es un MRUV.
# 
# ---
# 
# ## 4️⃣ **Gravedad cerca de la superficie terrestre**
# 
# Conocer:
# 
# * La aceleración de la gravedad vale aproximadamente
#   [
#   g = 9.81\ \text{m/s}^2
#   ]
# * Apunta hacia abajo → en el eje z es negativa.
# 
# > Este es el único efecto físico considerado en el modelo.
# 
# ---
# 
# ## 5️⃣ **Condiciones iniciales**
# 
# Saber qué significan:
# 
# * (r_0 = (x_0, y_0, z_0))
# * (v_0 = (v_{x0}, v_{y0}, v_{z0}))
# 
# > Las ecuaciones del movimiento siempre dependen del estado inicial.
# 
# ---
# 
# ## 6️⃣ **Punto más alto de la trayectoria**
# 
# Ocurre cuando la **velocidad vertical es cero**:
# 
# [
# v_z(t) = v_{z0} - g t = 0
# \Rightarrow
# t_{\max} = \frac{v_{z0}}{g}
# ]
# 
# > Este concepto es esencial para identificar el vértice de la parábola en la componente vertical.
# 
# ---
# 
# ## 7️⃣ **Concepto de trayectoria**
# 
# Entender que la trayectoria es la curva que describe la partícula en el espacio 3D.
# 
# > La gráfica representa físicamente el camino que recorre la partícula.
# 
# ---
# 
# # 🟢 OPCIONAL (pero útil para explicarlo mejor)
# 
# ## 8️⃣ **Independencia de movimientos**
# 
# La idea de que:
# 
# * El movimiento horizontal (x, y) es independiente del vertical (z).
# * Solo el eje z está acelerado.
# 
# ## 9️⃣ **Diagramas de fuerzas**
# 
# Solo hay una fuerza:
# 
# * Peso: (\vec{P} = m \vec{g})
# 
# Explicar que esto implica aceleración constante.
# 
# ## 🔟 **Proyección de vectores**
# 
# Cómo separar la velocidad inicial en componentes x, y, z si está dada en ángulos.
# 
# ---
# 
# # 🎯 **Con esto, podés:**
# 
# ✔ resolver las ecuaciones
# ✔ explicar por qué el movimiento tiene esa forma
# ✔ justificar el punto máximo
# ✔ interpretar la gráfica en 3D
# ✔ presentar el trabajo con claridad
# 
# --- 
# 
# Si querés, también te puedo preparar:
# 
# 📌 Un resumen aún más corto para exponer
# 📌 Un mapa conceptual visual
# 📌 Explicaciones con dibujos o esquemas
# 
# Solo decime 😊

