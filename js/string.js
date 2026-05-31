
// --- 1. FUNCIÓN INDEPENDIENTE (La lógica) ---
// Esta función no sabe de botones ni de HTML. 
// Recibe un parámetro (que he llamado 'cadena') y devuelve su longitud.
const contarCaracteres = (cadena) => {
    return cadena.length;
};

   

// --- 2. LÓGICA DE INTERFAZ (El puente) ---
// Aquí conectamos los elementos del HTML con la lógica.
const botonCalcular = document.getElementById("calcular");
const cajaResultado = document.getElementById("resultado");
const inputTexto = document.getElementById("texto");

const manejarClick = () => {
    // Obtenemos el texto que el usuario escribió
    const textoDelUsuario = inputTexto.value;
    
    // Llamamos a nuestra función independiente y le pasamos el dato
    const total = contarCaracteres(textoDelUsuario);

    console.log("El total es:", total); // <--- ESTO es lo que quieres ver
      
    // Mostramos el resultado en el HTML
    cajaResultado.textContent = `La cadena tiene ${total} caracteres.`;
};

     

// Escuchador de eventos
botonCalcular.addEventListener("click", manejarClick);


