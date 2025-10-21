// script.js

// 1. DATA: Objeto con los detalles de las clases extraídos del PDF (Clases.pdf)
const classDetails = {
    // Mensaje por defecto
    "inicio": "<p>Selecciona una clase de la lista para ver un resumen detallado de sus habilidades y subclases.</p>",
    
    // Contenido extraído del PDF
    "Barbaro": "Déjate llevar por la furia y entabla combates cuerpo a cuerpo. Después, sigue la senda del... <ul><li>Árbol del Mundo para acceder a la vitalidad cósmica;</li><li>berserker para desatar la violencia pura y dura;</li><li>corazón salvaje para expresar tu afinidad con los animales;</li><li>fanático para expresar tu furia unido a una divinidad.</li></ul>",
    "Bardo": "Lanza conjuros que inspiren y curen a tus aliados o engatusen a tus enemigos. Después, únete al colegio... <ul><li>de la danza para aprovechar tu agilidad en la batalla;</li><li>del conocimiento para hacer acopio de sabiduría y secretos mágicos;</li><li>del glamour para urdir la magia cautivadora de los Parajes Feéricos;</li><li>del valor para empuñar armas con conjuros.</li></ul>",
    "Brujo": "Lanza conjuros procedentes del ocultismo. Después, haz un pacto con el... <ul><li>patrón celestial para curar con magia celestial;</li><li>patrón feérico para teletransportarte y emplear la magia feérica;</li><li>patrón infernal para recurrir a poderes siniestros;</li><li>patrón primigenio para profundizar en los conocimientos prohibidos.</li></ul>",
    "Clerigo": "Invoca la magia divina para sanar, levantar la moral y castigar. Después, emplea el... <ul><li>dominio de la guerra para inspirar valor y escarmentar a los enemigos;</li><li>dominio de la luz para usar la luz protectora y abrasadora;</li><li>dominio de la vida para sobresalir en el terreno de la curación;</li><li>dominio del engaño para importunar a los enemigos con embustes.</li></ul>",
    "Druida": "Canaliza la magia de la naturaleza para sanar, cambiar de forma y controlar los elementos. Después, únete al círculo... <ul><li>de la luna para adoptar formas de animales poderosos;</li><li>de la tierra para recurrir a la magia del medio ambiente;</li><li>de las estrellas para obtener poderes en forma estelar;</li><li>del mar para canalizar las mareas y tormentas.</li></ul>",
    "Explorador": "Combina la destreza marcial, la magia de la naturaleza y las habilidades de supervivencia. Después, encarna al... <ul><li>acechador en la penumbra para perseguir a los enemigos que moran en la oscuridad;</li><li>cazador para proteger la naturaleza con tu versatilidad marcial;</li><li>errante feérico para manifestar el júbilo y la furia feéricos;</li><li>señor de las bestias para estrechar lazos con una bestia primigenia.</li></ul>",
    "Guerrero": "Domina todas las armas y armaduras. Después, encarna al... <ul><li>caballero arcano para aprender conjuros útiles en combate;</li><li>campeón para lograr la máxima destreza en combate;</li><li>guerrero psiónico para reforzar tus ataques con poder psiónico;</li><li>maestro del combate para utilizar maniobras especiales de combate.</li></ul>",
    "Hechicero": "Usa la magia innata de tu ser para moldear el poder a tu antojo. Después, canaliza la... <ul><li>hechicería aberrante para emplear la extraña magia psiónica;</li><li>hechicería de magia salvaje para desatar la magia del caos;</li><li>hechicería dracónica para exhalar la magia de los dragones;</li><li>hechicería mecánica para utilizar las fuerzas cósmicas del orden.</li></ul>",
    "Mago": "Estudia la magia arcana y domina conjuros para lograr cualquier fin. Después, encarna al... <ul><li>abjurador para proteger a los aliados y desterrar a los enemigos;</li><li>adivino para aprender los secretos del multiverso;</li><li>evocador para crear efectos explosivos;</li><li>ilusionista para urdir conjuros de engaño.</li></ul>",
    "Monje": "Entra y sal del cuerpo a cuerpo mientras atacas con rapidez y contundencia. Después, conviértete en guerrero... <ul><li>de la mano abierta para dominar el combate sin armas;</li><li>de la misericordia para curar o dañar con un simple contacto;</li><li>de la sombra para emplear las sombras como herramientas de subterfugio;</li><li>de los elementos para hacer uso de la energía elemental.</li></ul>",
    "Paladin": "Castiga a los enemigos y protege a los aliados con tu poderío divino y marcial. Después, haz el juramento... <ul><li>de entrega para emular a los ángeles de la justicia;</li><li>de gloria para alcanzar la cumbre del heroísmo;</li><li>de los antiguos para preservar la vida, la alegría y la naturaleza;</li><li>de venganza para perseguir a los malhechores.</li></ul>",
    "Picaro": "Lanza ataques furtivos letales mientras usas el sigilo para evitar que te hieran. Después, encarna al... <ul><li>asesino para tender emboscadas y administrar veneno;</li><li>embaucador arcano para ser más sigiloso mediante conjuros;</li><li>ladrón para dominar el arte de la infiltración y la búsqueda de tesoros;</li><li>rebanaalmas para golpear a tus enemigos con cuchillas psiónicas.</li></ul>",
};

document.addEventListener('DOMContentLoaded', () => {
    // 2. OBTENER REFERENCIAS: El selector y el área de visualización por su ID
    const selectorClase = document.getElementById('clase');
    const displayDiv = document.getElementById('class-details-display');

    // 3. FUNCIÓN DE ACTUALIZACIÓN (Similar a lo visto en el PDF)
    const actualizarContenido = () => {
        const valorSeleccionado = selectorClase.value; 
        
        // Usa el valor del select para buscar el contenido en el objeto classDetails
        const contenidoHTML = classDetails[valorSeleccionado] || classDetails["inicio"];
        
        // Inyecta el contenido en el div
        displayDiv.innerHTML = contenidoHTML;
    };
    
    // 4. AGREGAR LISTENER: Reacciona al evento 'change' (cuando se selecciona una opción)
    selectorClase.addEventListener('change', actualizarContenido);
    
    // Llamada inicial para mostrar el estado por defecto al cargar la página
    actualizarContenido();
});