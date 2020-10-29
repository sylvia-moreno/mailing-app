# Test d'évaluation Front-end

## Présentation

L'outil est une application web permettant la visualisation de tous les messages envoyés à une agence.
Les messages peuvent être de plusieurs types différents: e-mail, SMS, vocal...
Il est donc destiné à un collaborateur d'une agence. Il peut visualiser les messages pour une ou plusieurs agences à laquelle il est attaché.
Le but de l'exercice est donc d'implémenter le code client de l'application avec à disposition une API JSON.

## Fonctionalités requises

* Je peux changer d'agence et je vois la liste des message de la dite agence
* Je peux faire défiler la liste des messages sur plusieurs pages
* Je clique sur un message et je vois le détail du message
  * Si le message n'était pas lu le compteur se décrémente

## Implémentations techniques requises pour le passage au debrief

* Intégrer la version mobile et desktop
* Intégrer la possibilité de changer d'agence (dropdown HTML natif)
* Intégrer la vue agence avec la liste des messages (accessible via URL ou dropdown)
* Intégrer la lecture d'un message en donnant la possibilité d'y accéder depuis l'URL (routing)
* Gérer le compteur de message non-lus (envoyer une requête à l'API pour faire persister la donnée)
* Gérer la pagination (infinite scroll)


## Apprécié avec l'implémentation

* Fidélité des écrans avec les maquettes fournies
* Tests (unitaires, fonctionnels)
* Bonnes pratiques d'accessibilité
* Dates relatives sur la liste des messages (ex: "Hier", "Il y a 2 heures")

## Contraintes techniques

* Framework et outillage obligatoire mais libre
* Utiliser l'API
* Qualité de rédaction du code

## Contenu

Les maquettes au format [Sketch](https://www.sketch.com) et [PDF](Maquettes.pdf) sont fournies.
Des *assets* sont disponibles dans le dossier éponyme.

## API

### API Endpoints

Replace `API_URL` by the one provided or `http://localhost:8080` if you have started it manually (cf. [CONTRIBUTING](CONTRIBUTING.md))

* Realtor list
  * `curl ${API_URL}/realtors`

* Realtor details
  * `curl ${API_URL}/realtors/101`

* Realtor messages list
  * `curl ${API_URL}/realtors/101/messages`
  * `curl ${API_URL}/realtors/101/messages?page=2`
  * `curl ${API_URL}/realtors/101/messages?page=2&page_size=20`
  * `curl ${API_URL}/realtors/101/messages?page=2&page_size=20&sort=date,desc`

* Single message details
  * `curl ${API_URL}/realtors/101/messages/1001`

* Mark a message as read (data can only be `application/json`)
  * `curl -X PATCH -H "Content-Type: application/json" ${API_URL}/realtors/101/messages/1001 -d '{"read":false}'` (explicit mark as unread)

### API Schemas

You'll find every schemas in the "Schemas" section of the documentation

The pagination header is called `X-Pagination` and the format is called `PaginationMetadata`
