// Funcția care mută cercul la o locație aleatorie pe pagină
function moveCircle() {
    // Obține elementul cercului
    const circle = document.querySelector('.circle');
    
    // Lățimea și înălțimea vizibile ale ferestrei
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Calculăm o poziție aleatorie pe axele X și Y
    const randomX = Math.random() * (windowWidth - 150);  // 150 este lățimea cercului
    const randomY = Math.random() * (windowHeight - 150); // 150 este înălțimea cercului

    // Aplicăm poziția aleatorie la cerc
    circle.style.position = 'absolute';
    circle.style.left = `${randomX}px`;
    circle.style.top = `${randomY}px`;
}
    