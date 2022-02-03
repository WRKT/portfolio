# CCI-SIO21-Portfolio - Charte graphique

## [AVANT-PROPOS](#Avant-propos)
## [OUTILS-DE-CONCEPTION](#Outils-de-conception)
## [CONCEPTION](#Conception)

# Avant-propos
Ce document contient le référentiel de mon portfolio sur les images utilisés, les polices, et sur comment naviguer dans le site.
Ce site a été conçu par moi-même, sans framework, juste du code avec trois languages dont HTML, CSS, et du JS pour quelques propriétés.
Mon portfolio est actuellement hébergé chez le domaine de mon camarade de promotion à CCI Campus, Mr. Alexis Henry.

# Outils-de-conception
## Design page index

![Maquette_première_page](CHARTE_GRAPHIQUE/Maquettes/Maquette_première_page.png)

## Palette de couleurs
### Principaux couleurs utilisés

![palettes_couleurs](CHARTE_GRAPHIQUE/Maquettes/palettes_couleurs.jpeg)

### Couleur du background `(#f5f5f5)` et police `(#343434)`

![background_color](CHARTE_GRAPHIQUE/Maquettes/background_color.png)


## Police utilisé (font-style)

`Press Start 2P` of Google Fonts
![font-style](CHARTE_GRAPHIQUE/Maquettes/font-style.png)

# Conception
## Conception header
## Conception du Menu
### Description
* Menus rectangulaires défilantes de gauche à droite qui s'agrandira lorsque la souris sera sur le menu en question (propriétés CSS :hover)

* Lorsque le menu sera sélectionné par la souris, il s'agrandira au fur et à mesure avec une image de fond représentant la thématique du menu => exemple sur à propos, une photo de moi ; de même sur projets qui représentera les différents projets que j'ai entamé en IT.

* En plus de tout cela, à chaque menu, il y aura une image qui définira le menu en question 

### Visuel sample
Before                       |                   After
:---------------------------:|:-----------------------:
![Menu](CHARTE_GRAPHIQUE/Maquettes/Menu.png) | ![Menu_hover](CHARTE_GRAPHIQUE/Maquettes/Menu_hover.png)

### Images utilisés en :hover
A propos                    |                   Compétences
:--------------------------:|:----------------------------:
![A_propos](CSS/images/Index/a_propos.jpg) | ![Competences](CSS/images/Index/competences.jpg)
Expériences                 |                   Projets
![Experiences](CSS/images/Index/experiences.jpg) | ![Projets](CSS/images/Index/projets.jpg)

## Raccourci Menu vers les autres pages
### Caractéristiques
Deux boutons:
* Un bouton Menu en haut à gauche en lien vers d'autres pages dont:
    - A propos =>  Présentation + Parcours + Passion.
    - Compétences => Mes principales compétences
    - Expériences => Une page énumérant mes expériences professionnelles et link vers mon CV.
    - Projets => Les différents projets que j'ai réalisés en entreprise.
* Un bouton Accueil qui nous ramène vers la page index

Quand on clique sur ``MENU``, le menu se scroll de haut en bas avec un `background #000000`

### Visuel sample
#### Header menu
![Shortcut_menu](CHARTE_GRAPHIQUE/Maquettes/Shortcut_menu.png)
#### Menu opened
![Shortcut_menu_opened](CHARTE_GRAPHIQUE/Maquettes/Shortcut_menu_opened.png)

    
## Conception footer
### Description
* Dans la barre contact, mettre une icone pour chaque type de contacts: 
    - Enveloppe pour Mail
    - Logo de LinkedIn
    - Logo Github
    - Logo Discord
