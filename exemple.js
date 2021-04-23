// Etape 1 - Sélectionner nos éléments

let form = document.querySelector('#formulaire');
let input = document.querySelector('#prix');
let error = document.querySelector('small');
// console.log(form);

// Etape 2 - Cacher l'erreur
error.style.display = 'none';

// Etape 3 - Générer un nombre aléatoire
let randomNumber = Math.floor(Math.random() * 1001);
let coups = 0;
let currentNumber;

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
    if (isNaN(input.value)) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
});

// Etape 5 - Agir à l'envoi du formulaire
form.addEventListener('submit', (e) => {

    e.preventDefault();

    if(isNaN(input.value) || input.value == '') {

        input.style.borderColor = 'red';
        
    } else {
        coups++;
        input.style.borderColor = 'silver';
        currentNumber = input.value;
        input.value = '';
    }

});
// Etape 6 - Créer la fonction vérifier