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





// Retour à l'accueil
function retourAccueil() {
    window.location.href = "index.html";
}