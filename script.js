// Modo oscuro
const toggleMode = document.createElement("button");
toggleMode.innerText = "Modo Oscuro 🌙";
toggleMode.style.position = "fixed";
toggleMode.style.bottom = "20px";
toggleMode.style.right = "20px";
toggleMode.style.padding = "10px 15px";
toggleMode.style.border = "none";
toggleMode.style.cursor = "pointer";
toggleMode.style.background = "#ff5733";
toggleMode.style.color = "white";
toggleMode.style.borderRadius = "5px";

document.body.appendChild(toggleMode);

toggleMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Animaciones en el scroll
const images = document.querySelectorAll(".galeria img");

window.addEventListener("scroll", () => {
    images.forEach(img => {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            img.style.opacity = 1;
            img.style.transform = "translateY(0)";
        }
    });
});

// Mostrar/Ocultar sección de artículos
document.getElementById("mostrarArticulos").addEventListener("click", function() {
    let seccion = document.getElementById("articulos");
    if (seccion.classList.contains("oculto")) {
        seccion.classList.remove("oculto");
        this.innerText = "Ocultar artículos";
    } else {
        seccion.classList.add("oculto");
        this.innerText = "Ver artículos";
    }
});

// Mostrar contenido de cada artículo individualmente
function toggleArticulo(numero) {
    let articulo = document.getElementById('articulo${numero}');
    if (articulo.style.display === "none" || articulo.style.display === "") {
        articulo.style.display = "block";
    } else {
        articulo.style.display = "none";
    }
}