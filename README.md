# News-Central

📰 News Central
Contexte :
vous développerez une application MERN MongoDB, Express, React, Node.js)
permettant aux utilisateurs d'accéder à un agrégateur d'actualités filtrable avec
un historique de consultation. L'architecture doit être modulaire et optimisée en
utilisant une instance Axios pour gérer toutes les requêtes API concernent
votre propre backend ou une API externe de news.
Liste des APIs à utiliser pour ce projet :
https://newsapi.org/
https://developer.nytimes.com/docs/articlesearch-product/1/overview
https://gnews.io/docs/v4#search-endpoint

🚨 Chaque membre de l'équipe doit se fournir de son propre fichier .env qui
contient ses propres clés API.🚨
Objectifs :
✅ 1. Création d'un Backend Unifié pour les Requêtes d'Actualités
Développer une API Node.js/Express permettant de centraliser toutes les
requêtes.
Les utilisateurs pourront filtrer les articles selon plusieurs critères :
Popularité
Mot-clé (string de recherche)
Catégorie de news (business, media, generale, sante, science, sports,
technologies)
Date de début / Date de fin
String spécifique dans un article
Source de l'article
Adresse web de la source
✅ 2. Gestion des Requêtes via des Instances Axios
Créer des instances Axios pour centraliser et uniformiser les appels API.
✅ 3. Historique des Articles Consultés
Stocker les articles consultés par chaque utilisateur dans la base de
données.
Permettre aux utilisateurs dʼaccéder à lʼhistorique des articles visités, triés
par date de consultation.
Chaque article dans l'historique doit également inclure un bouton “Retour à
la rechercheˮ permettant à l'utilisateur de recréer et exécuter exactement
la même requête de recherche qui a rendu cet article
✅ 4. Interface Utilisateur avec React
Construire une interface en React pour afficher les articles et appliquer les
filtres dynamiquement.
Ajouter une section historique accessible depuis le profil de lʼutilisateur.
🎯 Livrables attendus :
-- Un backend fonctionnel avec des routes API.
-- le .ENV ou bien un .ENV.EXAMPLE
-- Une interface utilisateur avec navigation 
