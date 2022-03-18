# ReadMe projet TODOLIST
Projet permettant via une page Web de lister des tâches .
Possibilité d'en ajouter et mettre à jour leur statuts.
Informations stockées dans une base de données

#Pré-requis
Installer PostgreSQL (télécharger)
Installer Node (https://nodejs.org/fr/download/) et Express (npm install --save express)
Utiliser un éditeur (VisualStudio, NotePad++ ou SublimeText)

Créer un schéma et une table tasks PostGreSQL:

CREATE TABLE IF NOT EXISTS public.tasks (
    nom character(20) COLLATE pg_catalog."default",
    sujet character(30) COLLATE pg_catalog."default",
    desc_sujet text COLLATE pg_catalog."default",
    deadline date,
    statut integer,
    id integer NOT NULL DEFAULT nextval('tasks_id_seq'::regclass) )

#Démarrage
deposer les composants js et htmls dans un repertoire serveur
Lancer le serveur: 'node todolist.js' sur le repertoire associé
Lancer la page Web : http://loalhost:3000/todolist/

#Version :
V1.0 du 18 mars 2022

#Auteur :
P Laiolo , etablissement scolaire EFREI cohorte 2021/2022

