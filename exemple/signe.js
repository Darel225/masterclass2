// On vérifie qu'on est bien sur la page signe.html
if (window.location.pathname.includes("signe.html")) {

    // On récupère toutes les données sauvegardées dans localStorage
    let nom         = localStorage.getItem("nom");
    let signe       = localStorage.getItem("signe");
    let image       = localStorage.getItem("image");
    let description = localStorage.getItem("description");
    let annee       = localStorage.getItem("annee");
    let genre       = localStorage.getItem("genre");
    let heure       = localStorage.getItem("heure");

    // On calcule l'âge
    let anneeActuelle = new Date().getFullYear();
    let age = anneeActuelle - Number(annee);

    // On choisit la bonne formule selon le genre
    let formule = "";
    if (genre === "homme") {
        formule = "Tu es un homme " + signe + ".";
    } else if (genre === "femme") {
        formule = "Tu es une femme " + signe + ".";
    } else {
        formule = "Tu es " + signe + ".";
    }

    // DOM : on modifie les éléments HTML avec les données
    document.getElementById("message").textContent = "Bonjour " + nom + " — " + signe;
    document.getElementById("imageSigne").src = image;
    document.getElementById("description").textContent = description;
    document.getElementById("infosSupp").textContent =
        formule + " Tu as " + age + " ans. Né(e) à " + heure + ".";
}

// Ouvre le popup : on affiche le voile (qui contient le popup)
function ouvrirPopup() {

    let signe = localStorage.getItem("signe");

    // Prédictions selon le signe
    let predictions = {
        "Bélier":      "Cette semaine, une opportunité inattendue va se présenter à toi. Sois prêt(e) à foncer !",
        "Taureau":     "Une rencontre importante est sur le point de changer quelque chose dans ta vie.",
        "Gémeaux":     "Ton énergie sera au maximum dans les prochains jours, profites-en pour avancer.",
        "Cancer":      "Quelqu'un proche de toi a besoin de toi. Fais confiance à ton instinct.",
        "Lion":        "La chance est de ton côté cette semaine. Les efforts vont enfin payer.",
        "Vierge":      "Un projet que tu portais va enfin prendre forme. Reste concentré(e).",
        "Balance":     "Une décision importante t'attend. Prends le temps de bien réfléchir avant d'agir.",
        "Scorpion":    "Les astres te promettent une belle surprise dans les jours à venir.",
        "Sagittaire":  "Un voyage ou une nouvelle aventure se profile à l'horizon. Ouvre les yeux !",
        "Capricorne":  "Ton travail et ta persévérance vont bientôt être récompensés.",
        "Verseau":     "Une idée brillante va surgir. Note-la tout de suite, elle peut tout changer.",
        "Poissons":    "Tes rêves te donnent des indices importants. Écoute-les attentivement."
    };

    let texte = predictions[signe] || "Les astres sont mystérieux aujourd'hui... Reviens demain !";

    // DOM : on écrit la prédiction dans le popup
    document.getElementById("textePrediction").textContent = texte;

    // DOM : on affiche le voile (qui contient le popup)
    // On remet aussi l'animation à zéro en retirant et remettant le style
    let voile = document.getElementById("voile");
    let popup = document.getElementById("popup");

    voile.style.display = "flex"; // flex pour centrer le popup dedans

    // On réinitialise l'animation pour qu'elle rejoue à chaque ouverture
    popup.style.animation = "none";
    popup.offsetHeight;  // force le navigateur à recalculer (trick connu)
    popup.style.animation = "";
}

// Ferme le popup : on cache le voile
function fermerPopup() {
    document.getElementById("voile").style.display = "none";
}

// Retour à l'accueil
function retourAccueil() {
    window.location.href = "index.html";
}