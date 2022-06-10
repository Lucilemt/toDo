# Créer un to Do list

Le but est de créer un tableau HTML gérant une « To Do List ». Le tableau sera créé à la demande de l’utilisateur lors de l’appui d’un clic.

Le format du tableau

Nom des colonnes :
id : index (nombre entier commençant à 0 et s’incrémente à chaque ligne) Tâches : chaîne de caractères Etat : booléen («completé» ou «non completé») Supprimer : bouton « Supprimer »
Remplissage du tableau : Remplir les données avec un JSON récupéré (jsonplaceholder https://jsonplaceholder.typicode.com/todos/)

Évènements :

Suppression 
Lors d’un clic sur un des boutons « Supprimer », on affiche une boîte de dialogue de confirmation (« confirm ») pour avoir une validation de suppression. Si l’utilisateur clique sur « Ok » on supprime la ligne correspondante au bouton. 

Ajout 
Lors d’un clic sur le bouton « Ajout » on propose à l’utilisateur d’ajouter une ligne :
L’id n’est pas renseigné par l’utilisateur, il sera généré automatiquement
Le nom de la tâche est renseigné par l’utilisateur
L’état est renseigné par l’utilisateur grâce à une liste déroulante
Le bouton « Supprimer » est généré automatiquement
Lorsque l’utilisateur confirme son ajout, on ajoute une ligne à la fin du tableau.
