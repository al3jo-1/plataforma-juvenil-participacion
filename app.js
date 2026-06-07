// Datos de las situaciones
const situaciones = [
  {
    titulo: "Duda sobre información pública",
    comoComunicar: "Se requiere consultar fuente oficial.",
    rutaPosible: "Ley 1712 / entidad pública",
    cuidadoDerechos: "No divulgar datos sensibles"
  },
  {
    titulo: "Imagen borrada de E14",
    comoComunicar: "Se observa una posible inconsistencia por verificar.",
    rutaPosible: "CNE / MOE / URIEL según caso",
    cuidadoDerechos: "No afirmar fraude sin evidencia"
  },
  {
    titulo: "Posible afectación local de derechos",
    comoComunicar: "Se solicita orientación institucional.",
    rutaPosible: "Personería",
    cuidadoDerechos: "Proteger identidad de afectados"
  },
  {
    titulo: "Posible conducta delictiva",
    comoComunicar: "Se reporta ante autoridad competente.",
    rutaPosible: "Fiscalía / URIEL",
    cuidadoDerechos: "No exponer víctimas o testigos"
  }
];

// Evento para botón de mensaje de la clase
const botonMensaje = document.getElementById("btnMensaje");
const mensajeClase = document.getElementById("mensajeClase");

botonMensaje.addEventListener("click", function () {
  mensajeClase.textContent =
    "Clase 27: avanzamos en la estructura del proyecto conectando HTML, CSS y JavaScript.";
});

// Evento para botones de situaciones
const botonesSituacion = document.querySelectorAll(".btn-situacion");
const resultadoDiv = document.getElementById("resultadoSituacion");
const situacionTitulo = document.getElementById("situacionTitulo");
const comoComunicar = document.getElementById("comoComunicar");
const rutaPosible = document.getElementById("rutaPosible");
const cuidadoDerechos = document.getElementById("cuidadoDerechos");
const btnNuevaSituacion = document.getElementById("btnNuevaSituacion");

botonesSituacion.forEach(boton => {
  boton.addEventListener("click", function () {
    const index = this.getAttribute("data-index");
    const situacion = situaciones[index];
    
    // Llenar los datos
    situacionTitulo.textContent = situacion.titulo;
    comoComunicar.textContent = situacion.comoComunicar;
    rutaPosible.textContent = situacion.rutaPosible;
    cuidadoDerechos.textContent = situacion.cuidadoDerechos;
    
    // Mostrar resultado
    resultadoDiv.style.display = "block";
    
    // Desactivar otros botones
    botonesSituacion.forEach(b => b.style.opacity = "0.5");
    this.style.opacity = "1";
  });
});

// Botón para volver a seleccionar
btnNuevaSituacion.addEventListener("click", function () {
  resultadoDiv.style.display = "none";
  botonesSituacion.forEach(b => b.style.opacity = "1");
});
