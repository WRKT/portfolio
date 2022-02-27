// Fonction qui affichera le menu déroulant sur les pages 
function openNav() {
    document.getElementById("nav").style.height="100%";
}

//Fonction qui fermera le menu déroulant
function closeNav() {
    document.getElementById("nav").style.height="0%";
}
//--------------FIN Shortcut menu-----------------------

//--------------Script page A_propos--------------------
// Déclaration des variables pour permettre le changement des titres, paragraphes, img
const sections = { 
    S1: {
      title: "Hello There ",
      img: "../CSS/images/A_propos/Me.jpg",
      alt: "Photo de Winness R.",
      p: `Winness, 23 ans, un grand passionné de nouvelles technologies, 
          et plus particulièrement dans le domaine du système et réseaux orienté cybersécurité.
          Actuellement en formation BTS SIO option SISR au sein de la CCI Campus Alsace, 
          en alternance chez la Préfecture du Bas-Rhin, je projette d'évoluer vers un poste 
          d'Administrateur Système et Réseaux, et sur le long terme en tant que DevOps.<br><br><br>`,
    },
    S2: {
      title: "My journey ",
      img: "../CSS/images/A_propos/parcours.jpg",
      alt: "Photo livre académique",
      p: `Avant de découvrir la possibilité de faire de ma passion mon métier, mon premier amour
          fut la Science Politique, dans l'espoir de mieux comprendre le monde dans lequel on vit actuellement.
          Et malgré ma réorientation, je suis toujours en quête de cette compréhension, et ce, en ayant recours aux nouvelles technologies.
          Nous sommes dans l'ère du numérique, et je suis d'autant plus ravi de pouvoir approfondir mes connaissances dans ce domaine.<br><br><br>`,
    },
    S3: {
      title: "My cup of tea ",
      alt: "Manette R2-D2",
      img: "../CSS/images/A_propos/hobbies.jpg",
      p: ` Si j’étais un personnage de mangas, je serai Shunsui Kyoraku de Bleach...
          <p>Si j’étais un jeu-vidéo, je serai Dark Souls...</p>
          <p>Si j’étais un film de science-fiction, je serai Star Wars...</p>
          <p>Si j'étais un personnage de l'univers Marvel, je serai Raccoon Rocket...</p>
          <p>Si j’étais un livre, je serai Le Léviathan de Thomas Hobbes...</p>
          <p>Mon portrait chinois, pour découvrir à la fois mes passions et quelques traits importants de ma personnalité.</p>`,
    },
  };

  // Tableau qui va contenir les trois affiches sur la page A_propos.html
  let tableau = document.querySelectorAll(".fa-sort-up");
  let aboutcontainer = document.getElementById("aboutcontainer");
  let changethis = sections.S1;
  
  let sectionreplace = `
  <div id="1" class="section">
  <h1 class="titre"><big>${
    changethis.title[0]
  //Selectionner la première lettre des chaines de caractères
  }</big><small>${changethis.title.slice(1)}</small>?</h1>
  <img alt="${changethis.alt}" class="aboutimg" src="${
  changethis.img
  }"/>
  <p>${changethis.p}</p>
  </div>`;
  
  if (aboutcontainer) {
    aboutcontainer.insertAdjacentHTML("afterbegin", sectionreplace);
    tableau[0].addEventListener("click", (e) => {
    aboutcontainer.removeChild(document.querySelector("#aboutcontainer > div"));
    let changethis = sections.S1;
    let sectionreplace = `
      <div id="1" class="section">
      <h1 class="titre"><big>${
        changethis.title[0]
      }</big><small>${changethis.title.slice(1)}</small>?</h1>
      <img alt="${changethis.alt}" class="aboutimg" src="${
      changethis.img
    }"/>
      <p>${changethis.p}</p>
      </div>`;
  
    document
      .getElementById("aboutcontainer")
      .insertAdjacentHTML("afterbegin", sectionreplace);
      tableau[1].classList.remove("shine")
      tableau[2].classList.remove("shine")
      tableau[0].classList.add("shine")
   });
  
  tableau[1].addEventListener("click", (e) => {
    aboutcontainer.removeChild(document.querySelector("#aboutcontainer > div"));
    let changethis = sections.S2;
    let sectionreplace = `
      <div id="1" class="section">
      <h1 class="titre"><big>${
        changethis.title[0]
      }</big><small>${changethis.title.slice(1)}</small>...</h1>
      <img alt="${changethis.alt}" class="aboutimg" src="${
      changethis.img
    }"/>
      <p>${changethis.p}</p>
      </div>`;
  
    document
      .getElementById("aboutcontainer")
      .insertAdjacentHTML("afterbegin", sectionreplace);
      tableau[0].classList.remove("shine")
      tableau[2].classList.remove("shine")
      tableau[1].classList.add("shine")
  });
  tableau[1].style.margin="50px"
  
  tableau[2].addEventListener("click", (e) => {
    aboutcontainer.removeChild(document.querySelector("#aboutcontainer > div"));
    let changethis = sections.S3;
    let sectionreplace = `
      <div id="1" class="section">
      <h1 class="titre"><big>${
        changethis.title[0]
      }</big><small>${changethis.title.slice(1)}</small>!</h1>
      <img alt="${changethis.alt}" class="aboutimg" src="${
      changethis.img
    }" type="img/png"/>
      <p>${changethis.p}</p>
      </div>`;
  
    document
      .getElementById("aboutcontainer")
      .insertAdjacentHTML("afterbegin", sectionreplace);
      tableau[0].classList.remove("shine")
      tableau[1].classList.remove("shine")
      tableau[2].classList.add("shine")  
  })
};
//------------------FIN A_propos----------------------------

//------------------Script Contacts------------------------
