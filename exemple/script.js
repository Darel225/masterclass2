// On attend que l'utilisateur soumette le formulaire
document.getElementById("formAstro").addEventListener("submit", function(e) {

    // On empêche la page de se recharger toute seule
    e.preventDefault();

    // On récupère les valeurs du formulaire avec le DOM
    let nom    = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let jour   = Number(document.getElementById("jour").value);
    let mois   = Number(document.getElementById("mois").value);
    let annee  = document.getElementById("annee").value;
    let genre  = document.getElementById("genre").value;
    let heure  = document.getElementById("heure").value;

    // On déclare les variables du signe (on les remplira juste après)
    let signe       = "";
    let image       = "";
    let description = "";

    // On détermine le signe selon le jour et le mois
    if ((mois === 3 && jour >= 21) || (mois === 4 && jour <= 19)) {
        signe = "Bélier";
        image = "belier.jpg";
        description = "Vous êtes courageux et dynamique.";
    }
    else if ((mois === 4 && jour >= 20) || (mois === 5 && jour <= 20)) {
        signe = "Taureau";
        image = "image/taurau.png";
        description = "Vous êtes patient et loyal.";
    }
    else if ((mois === 5 && jour >= 21) || (mois === 6 && jour <= 20)) {
        signe = "Gémeaux";
        image = "image/gemeaux.png";
        description = "Vous êtes intelligent et communicatif.";
    }
    else if ((mois === 6 && jour >= 21) || (mois === 7 && jour <= 22)) {
        signe = "Cancer";
        image = "image/cancer.png";
        description = "Vous êtes sensible et protecteur.";
    }
    else if ((mois === 7 && jour >= 23) || (mois === 8 && jour <= 22)) {
        signe = "Lion";
        image = "image/lion.png";
        description = "Vous êtes leader et charismatique.";
    }
    else if ((mois === 8 && jour >= 23) || (mois === 9 && jour <= 22)) {
        signe = "Vierge";
        image = "image/vierge.png";
        description = "Vous êtes organisé et perfectionniste.";
    }
    else if ((mois === 9 && jour >= 23) || (mois === 10 && jour <= 22)) {
        signe = "Balance";
        image = "image/balance.png";
        description = "Vous aimez l'équilibre et la justice.";
    }
    else if ((mois === 10 && jour >= 23) || (mois === 11 && jour <= 21)) {
        signe = "Scorpion";
        image = "image/scorpion.png";
        description = "Vous êtes mystérieux et intense.";
    }
    else if ((mois === 11 && jour >= 22) || (mois === 12 && jour <= 21)) {
        signe = "Sagittaire";
        image = "image/sagittaire.png";
        description = "Vous êtes optimiste et aventurier.";
    }
    else if ((mois === 12 && jour >= 22) || (mois === 1 && jour <= 19)) {
        signe = "Capricorne";
        image = "image/capricorne.png";
        description = "Vous êtes discipliné et ambitieux.";
    }
    else if ((mois === 1 && jour >= 20) || (mois === 2 && jour <= 18)) {
        signe = "Verseau";
        image = "image/verseau.png";
        description = "Vous êtes original et indépendant.";
    }
    else if ((mois === 2 && jour >= 19) || (mois === 3 && jour <= 20)) {
        signe = "Poissons";
        image = "image/poisson.png";
        description = "Vous êtes intuitif et rêveur.";
    }

    // On sauvegarde toutes les infos dans localStorage pour les afficher sur signe.html
    localStorage.setItem("nom",         nom + " " + prenom);
    localStorage.setItem("signe",       signe);
    localStorage.setItem("image",       image);
    localStorage.setItem("description", description);
    localStorage.setItem("annee",       annee);
    localStorage.setItem("genre",       genre);
    localStorage.setItem("heure",       heure);

    // On redirige l'utilisateur vers la page résultat
    window.location.href = "signe.html";

});