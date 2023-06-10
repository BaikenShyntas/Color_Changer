document.addEventListener('DOMContentLoaded', function() {
    const Colorinp = document.querySelector(".container__inp");
    const h1 = document.querySelector(".container__h1");
    const p = document.querySelector(".container__p");

    function paintbackground() {
        document.body.style.backgroundColor = Colorinp.value;

        const blackColors = [
            'black',
            '#000000',
            '#000',
            'rgb(0, 0, 0)',
            'rgba(0, 0, 0, 1)',
            'hsl(0, 0%, 0%)',
            'hsla(0, 0%, 0%, 1)',
            // Черные оттенки
            '#010101',
            '#020202',
            '#030303',
            // Добавьте дополнительные значения цветов и оттенков, если необходимо
        ];          

        if (blackColors.includes(Colorinp.value.toLowerCase())) {
            h1.style.color = 'white';
            p.style.color = 'white';
        } else {
            h1.style.color = 'black';
            p.style.color = 'black';
        }
    }

    Colorinp.addEventListener('input', paintbackground);
});
