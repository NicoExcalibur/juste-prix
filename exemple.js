// Etape 1 - Sélectionner nos éléments

let form = document.querySelector('#formulaire');
let input = document.querySelector('#prix');
let error = document.querySelector('small');
console.log(form);

// Etape 2 - Cacher l'erreur
error.style.display = 'none';

// Etape 3 - Générer un nombre aléatoire
let randomNumber = (1000) => {

    return Math.floor(Math.random() * Math.floor(1000));

}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre

// Etape 5 - Agir à l'envoi du formulaire

// Etape 6 - Créer la fonction vérifier