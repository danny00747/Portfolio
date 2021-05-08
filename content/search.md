---
title: 'Moteur de recherche personnalisé'
tag: 'Backend Development'
time: '05:00'
img: 'search.png'
---

En effectuant des recherches sur internet quotidiennement, je me suis aperçu de certaines inefficacités concernant les recherches sur internet.
Prenons un example, admettons que je veuilles rechercher 'Icons' sur le forum reddit dans le sous-forum 'webdev'
Voici les étapes à suivre :
- Accéder à reddit
- Chercher le sous-forum webdev  
- Cliquer sur le résultat
- Chercher Icons dans celui-ci.

Avec mon moteur de recherche, je peux tapper '!r webdev Icons' et je suis automatiquement redirigé sur le bon résultat.
Il y a déjà plusieurs modules intégrés, par example un permettant d'accéder facilement à des favoris et un autre qui effectue
des recherches YouTube.

J'ai utilisé une architecture modulaire qui me permet de facilement intégrer des nouveaux plugins.

Le code est disponible sur [Gitlab](https://gitlab.com/vandewalleh/ktor-search)
