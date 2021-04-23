// Etape 1 - Sélectionner nos éléments

let form = document.querySelector('#formulaire');
let input = document.querySelector('#prix');
let error = document.querySelector('small');
// console.log(form);

// Etape 2 - Cacher l'erreur
error.style.display = 'none';

// Etape 3 - Générer un nombre aléatoire
let randomNumber = Math.floor(Math.random() * 1001);

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
        
        input.style.borderColor = 'silver';
    }

});
// Etape 6 - Créer la fonction vérifier