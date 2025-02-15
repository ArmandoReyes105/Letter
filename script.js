document.addEventListener("DOMContentLoaded", function () {
    const correctPassword = "301017"; // Cambia esta contraseña por la que desees

    const passwordContainer = document.getElementById("password-container");
    const cardContainer = document.getElementById("card-container");
    const fullText = `
Mi querido/a [Nombre],

En este día especial, quiero recordarte que nuestro amor es más mágico que cualquier hechizo en Hogwarts...

Contigo, cada día es una aventura, cada momento es especial, y nuestro amor es eterno como el Expecto Patronum que ilumina mi vida.

Con todo mi amor,
[Tu Nombre]`;

    const toggleButton = document.getElementById('toggle-button');
    const card = document.getElementById('magic-card');
    const cardText = document.getElementById('card-text');
    const sparklesContainer = document.querySelector('.sparkles-container');
    const passwordInput = document.getElementById('password');
    const passwordButton = document.querySelector('.password-button');

    let isOpen = false;
    let textIndex = 0;

    // Función para verificar la contraseña
    function checkPassword() {
        const inputPassword = passwordInput.value;
        if (inputPassword === correctPassword) {
            passwordContainer.style.display = "none"; // Ocultar contenedor de la contraseña
            cardContainer.style.visibility = "visible"; // Mostrar la carta
        } else {
            alert("Contraseña incorrecta. Intenta de nuevo.");
        }
    }

    passwordButton.addEventListener('click', checkPassword); // Evento para verificar la contraseña

    toggleButton.addEventListener('click', function () {
        isOpen = !isOpen;
        card.classList.toggle('open', isOpen);

        // Cambiar texto del botón
        if (isOpen) {
            toggleButton.textContent = 'Cerrar'; // Cambiar a "Cerrar"
            // Iniciar el efecto de escritura
            textIndex = 0;
            const typingInterval = setInterval(() => {
                cardText.textContent = fullText.slice(0, textIndex);
                textIndex++;

                if (textIndex > fullText.length) {
                    clearInterval(typingInterval);
                }
            }, 40);
        } else {
            toggleButton.textContent = 'Abrir'; // Cambiar a "Abrir"
            cardText.textContent = ''; // Limpiar el texto al cerrar
        }
    });

    // Crear las estrellas
    for (let i = 0; i < 100; i++) {
        const sparkle = document.createElement('span');
        sparkle.classList.add('sparkle');
        sparkle.textContent = '✨';
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 10}s`;
        sparkle.style.animationDuration = `${Math.random() * 5 + 5}s`;
        sparklesContainer.appendChild(sparkle);
    }
});


