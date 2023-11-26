const listeQuestions = [
    "Citez les midlaners qui ont joués pour KCorp sur League of Legends ?", 
    "Quel joueur est rester dans le roster Rocket league entre la saison 2023 et 2024 ?", 
    "Quel est le pseudo de la taupe ?",
    "Quel joueur Valorant est passer de coach à joueur durant la saison ?",
    "Durant quel split l'équipe Lol à gagner son premier titre LFL",
    "Donnez la date exacte de la montée en LEC (Contractuellement parlant). (jj/mm/aaaa)",
    "Combien de KCX ont été organisés ?",
    "Comment s'appelle le joueur Smash qui officie pour la KC ?",
    "Quel a été le premier titre remporté par la KC tout jeu confondu ?",
    "Combien de titre EMEA a remporté la KC sur LoL ?"
]

const listeReponses = [
    "Saken", 
    "Vatira", 
    "KC Bakyou",
    "ZEISH",
    "Spring 2021",
    "20/11/2023",
    "3",
    "Kurama",
    "Worlds TFT 2020",
    "4"
]

// Fonction pour afficher le bouton "Start"
function afficherBoutonStart() {
    let zoneOptions = document.querySelector('.zoneOptions')
    let zoneProposition = document.querySelector('.zoneProposition')
    let zoneSaisie = document.querySelector('.zoneSaisie')
    let zoneScore = document.querySelector('.zoneScore')
    let boutonStart = document.createElement('button')
    boutonStart.className = 'button_19';
    boutonStart.setAttribute('role', 'button');
    boutonStart.textContent = 'Start Game !'
    boutonStart.id = 'btnStart'
    zoneOptions.appendChild(boutonStart)

    // Ajouter un écouteur d'événements pour le bouton "Start"
    boutonStart.addEventListener('click', ()=> {
        zoneOptions.style.display ='none'
        zoneProposition.style.display = 'block'
        zoneSaisie.style.display = 'block'
        zoneScore.style.display = 'block'
        lancerJeu()
    })
}

function afficherResultat(score,nbQuestionliste) {
    // Récupération de la zone dans laquelle on va écrire le score
    let spanScore = document.querySelector(".zoneScore span")
    // Ecriture du texte
    let affichageScore = `${score} / ${nbQuestionliste}`
    // On place le texte à l'intérieur du span.
    spanScore.innerText = affichageScore
}

// Fonction pour afficher le mot dans la zoneProposition
function afficherProposition(question) {
    let zoneProposition = document.querySelector('.zoneProposition')
    zoneProposition.innerText = question
}



function lancerJeu(){

    // Variables
    let score = 0
    let i = 0
    let btnValiderReponse = document.getElementById("btnValiderReponse")
    let inputEcriture = document.getElementById("inputEcriture")
    afficherProposition(listeQuestions[i])


    // Ajouter un écouteur d'événements pour le clic sur le bouton de validation
    btnValiderReponse.addEventListener('click', validerOuEnter)

    // Ajouter un écouteur d'événements pour la touche "Enter" dans le champ de saisie
    inputEcriture.addEventListener('keypress', (event)=> {
        // Vérifier si la touche appuyée est la touche "Enter" (code 13)
        if (event.key === 'Enter') {
            validerOuEnter()
        }
    })


    // Fonction pour traiter le clic sur le bouton ou la touche "Enter"
    function validerOuEnter() {
        if (inputEcriture.value.trim().toLowerCase() === listeReponses[i].toLowerCase()) {
            score++
        }

        i++
        afficherResultat(score,i)
        // À chaque clic sur Valider, vider le champ inputEcriture
        inputEcriture.value = ""

        if (i >= listeQuestions.length) {
            // Ecran de fin de jeu
            btnValiderReponse.disabled = true
            afficherResume()
            // Appeler la fonction pour afficher le résultat final
        } else {
            afficherProposition(listeQuestions[i])
        }

    }

    function afficherResume() {
        let zoneOptions = document.querySelector('.zoneOptions')
        let resuméHTML = `<h2>Résumé des questions et réponses :</h2><ul>`

        for (let j = 0; j < listeQuestions.length; j++) {
            resuméHTML += `<li class="resume_item"><div class="finQuestion"><strong>Question ${j + 1}: ${listeQuestions[j]}</strong></div><p><strong>Réponse: ${listeReponses[j]}</p></li>`
        }

        resuméHTML += '</ul>'
        zoneOptions.innerHTML = resuméHTML
        zoneOptions.style.display = 'block'

        let zoneProposition = document.querySelector('.zoneProposition')
        zoneProposition.style.display = 'none'
        let zoneSaisie = document.querySelector('.zoneSaisie')
        zoneSaisie.style.display = 'none'
    }

    afficherResultat(score,i)

}

let zoneProposition = document.querySelector('.zoneProposition')
zoneProposition.style.display = 'none'
let zoneSaisie = document.querySelector('.zoneSaisie')
zoneSaisie.style.display = 'none'
let zoneScore = document.querySelector('.zoneScore')
zoneScore.style.display = 'none'

