import React from "react";

export default function Rules() {
  return (
    <div style={container}>
      <h1>📜 Conditions Générales d’Utilisation (CGU)</h1>

      <p>
        Bienvenue sur DEV-GPT. Cette plateforme est un espace de communication en temps réel
        permettant aux utilisateurs d’échanger via messages privés et groupes.
        En accédant au site, vous acceptez pleinement les présentes conditions générales d’utilisation.
      </p>

      <h2>1. Objet de la plateforme</h2>
      <p>
        DEV-GPT offre un service de messagerie incluant :
        <br />- Chat en temps réel (privé et groupe)
        <br />- Partage de médias (images, audio, vidéo)
        <br />- Interaction sociale (réactions, réponses, mentions)
      </p>

      <h2>2. Acceptation des conditions</h2>
      <p>
        L’accès au site est conditionné par l’acceptation complète de ce règlement.
        Si vous n’acceptez pas ces conditions, vous devez immédiatement quitter la plateforme.
      </p>

      <h2>3. Création de compte</h2>
      <p>
        L’inscription se fait via Google. Vous acceptez de fournir des informations exactes.
        Toute tentative de fraude ou usurpation d’identité est interdite.
      </p>

      <h2>4. Responsabilité de l’utilisateur</h2>
      <p>
        Chaque utilisateur est responsable :
        <br />- De son compte
        <br />- De ses messages
        <br />- De ses interactions
      </p>

      <h2>5. Règles de conduite</h2>
      <p>
        Il est strictement interdit de :
        <br />- Harceler ou insulter un utilisateur
        <br />- Diffuser du contenu haineux ou discriminatoire
        <br />- Envoyer du spam ou publicité abusive
        <br />- Partager du contenu illégal ou dangereux
        <br />- Usurper l’identité d’une autre personne
      </p>

      <h2>6. Contenu utilisateur</h2>
      <p>
        Les utilisateurs restent propriétaires de leur contenu, mais accordent à DEV-GPT
        le droit de le stocker et de l’afficher pour le bon fonctionnement du service.
      </p>

      <h2>7. Signalement et modération</h2>
      <p>
        Un système de signalement permet de remonter tout abus.
        Les administrateurs peuvent :
        <br />- Examiner les messages signalés
        <br />- Supprimer du contenu
        <br />- Sanctionner les utilisateurs
      </p>

      <h2>8. Sanctions</h2>
      <p>
        En cas de violation :
        <br />- Avertissement
        <br />- Suspension temporaire
        <br />- Suppression définitive du compte
      </p>

      <h2>9. Rôle des administrateurs</h2>
      <p>
        Les administrateurs disposent d’un accès spécial leur permettant de :
        <br />- Gérer les utilisateurs
        <br />- Ajouter d’autres administrateurs
        <br />- Activer/désactiver le mode maintenance
        <br />- Gérer les signalements
      </p>

      <h2>10. Mode maintenance</h2>
      <p>
        Le site peut être temporairement désactivé pour des mises à jour.
        Un message informera les utilisateurs en cas d’indisponibilité.
      </p>

      <h2>11. Confidentialité</h2>
      <p>
        Les données collectées (nom, email, photo) sont utilisées uniquement pour le service.
        Aucune donnée ne sera vendue ou partagée sans consentement.
      </p>

      <h2>12. Sécurité</h2>
      <p>
        Nous mettons en œuvre des mesures pour sécuriser la plateforme.
        Toutefois, l’utilisateur doit également protéger son compte.
      </p>

      <h2>13. Limitation de responsabilité</h2>
      <p>
        DEV-GPT ne peut être tenu responsable des contenus publiés par les utilisateurs.
      </p>

      <h2>14. Modification des conditions</h2>
      <p>
        Les présentes conditions peuvent être modifiées à tout moment.
        Les utilisateurs seront informés en cas de changement important.
      </p>

      <h2>15. Propriété</h2>
      <p>
        Le propriétaire principal du site est :
        <br />
        <strong>octavio wina</strong> disponible sur Facebook :
        <br />
        <a
          href="https://www.facebook.com/profile.php?id=61585694014120"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#3b82f6" }}
        >
          Voir le profil Facebook
        </a>
      </p>

      <h2>16. Acceptation finale</h2>
      <p>
        En cliquant sur "Accepter et continuer", vous confirmez avoir lu,
        compris et accepté l’ensemble de ces conditions.
      </p>

      <button style={btn}>✅ Accepter et continuer</button>
    </div>
  );
}

const container = {
  padding: "20px",
  background: "#0f172a",
  color: "#fff",
  minHeight: "100vh",
};

const btn = {
  marginTop: "30px",
  padding: "12px",
  background: "#3b82f6",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};
