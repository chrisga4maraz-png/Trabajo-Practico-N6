// MENÚ DE NAVEGACIÓN

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("activo");

        if (menu.classList.contains("activo")) {
            menuBtn.textContent = "Ocultar menú";
            menuBtn.setAttribute("aria-expanded", "true");
        } else {
            menuBtn.textContent = "Mostrar menú";
            menuBtn.setAttribute("aria-expanded", "false");
        }
    });
}

// CONFIRMACIÓN DEL FORMULARIO DE CONTACTO

const formularioContacto = document.getElementById("formularioContacto");

if (formularioContacto) {
    formularioContacto.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const confirmacion = document.createElement("div");

        confirmacion.className = "confirmacion-pantalla";

        confirmacion.innerHTML = `
            <div class="confirmacion-contenido">
                <div class="confirmacion-icono">✓</div>
                <h2>¡Formulario completado!</h2>
                <p>Los datos se validaron correctamente.</p>
                <span>Esta es una demostración. La consulta todavía no se envía a la institución.</span>
                <div class="confirmacion-carga"></div>
                <small>Regresando al inicio...</small>
            </div>
        `;

        document.body.appendChild(confirmacion);

        formularioContacto.reset();

        const botonEnviar = formularioContacto.querySelector(
            'button[type="submit"]'
        );

        if (botonEnviar) {
            botonEnviar.disabled = true;
        }

        setTimeout(function () {
            window.location.href = "index.html";
        }, 3500);
    });
}
