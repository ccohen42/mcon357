document.addEventListener('DOMContentLoaded', () => {
    const greetButton = document.getElementById('greetButton');
    const output = document.getElementById('output');
    
    greetButton.addEventListener('click', () => {
        const now = new Date();
        output.textContent = Hello from MCON367! Current time: ;
    });
});
