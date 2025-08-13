const noticias = [
    {
        titulo: "Nuevo avance en tecnología de baterías",
        descripcion: "Científicos desarrollan una batería que dura 3 veces más que las actuales.",
        imagen: "imagenes/bateria.jpg",
        fecha: "13 de Agosto, 2025"
    },
    {
        titulo: "Histórico triunfo en fútbol",
        descripcion: "El equipo nacional gana la final en un partido lleno de emoción.",
        imagen: "imagenes/futbol.jpg",
        fecha: "13 de Agosto, 2025"
    }
];

function mostrarNoticias() {
    const contenedor = document.getElementById("contenedor-noticias");
    noticias.forEach(noticia => {
        const elemento = document.createElement("div");
        elemento.classList.add("noticia");
        elemento.innerHTML = `
            <img src="${noticia.imagen}" alt="${noticia.titulo}">
            <h2>${noticia.titulo}</h2>
            <p><em>${noticia.fecha}</em></p>
            <p>${noticia.descripcion}</p>
        `;
        contenedor.appendChild(elemento);
    });
}

mostrarNoticias();
