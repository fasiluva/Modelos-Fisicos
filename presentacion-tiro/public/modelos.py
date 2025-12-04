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

    print(f"\n ==== El punto mas alto es alcanzado a los {t_max} segundos ====\n")

    # Gráfico en 3D
    fig = plt.figure(figsize=(8, 6))
    ax = fig.add_subplot(111, projection='3d')

    ax.plot(xs, ys, zs, label="Trayectoria")

    # Marcar el punto maximo
    ax.scatter(pos_max[0], pos_max[1], pos_max[2], s=60, color='red', label="Punto más alto")
    ax.text(pos_max[0], pos_max[1], pos_max[2],
            f"  Máximo\n  z={pos_max[2]:.2f} m", color='red')

    # Datos del gráfico
    ax.set_title("Trayectoria del tiro parabólico en 3D")
    ax.set_xlabel("x(t) [m]")
    ax.set_ylabel("y(t) [m]")
    ax.set_zlabel("z(t) [m]")
    ax.legend()

    # Línea del suelo
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
