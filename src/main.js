// Write function
function write(element, sentence = "Winness", duration = 125, index = 0) {
  if (index < sentence.length) {
    setTimeout(() => {
      element.innerHTML += `${sentence[index]}`;
      write(element, sentence, duration, index + 1);
    }, duration);
  }
}


// Navbar responsive function
function Menu(e) {
  let list = document.querySelector("ul");

  e.name === "menu-sharp"
    ? ((e.name = "close"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"))
    : ((e.name = "menu-sharp"),
      list.classList.remove("top-[80px]"),
      list.classList.remove("top+-[80px]"));
}

// Edit this for particles

const particleColor = "#fff6cd";
const particleCount = 80;

particlesJS("banner", {
  particles: {
    number: {
      value: particleCount,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: particleColor,
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: particleColor,
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 15,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: particleColor,
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 10,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 2,
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  config_demo: {
    hide_card: false,
    background_color: "#b61924",
    background_image: "",
    background_position: "50% 50%",
    background_repeat: "no-repeat",
    background_size: "cover",
  },
});

let button = document.getElementById("scrollbutton");

button.style.display = "none"

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 1024 || document.documentElement.scrollTop > 1024) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

// Bouton afficher plus
let showMoreSkillsButton = document.getElementById("showmore");

function showMore() {
  let elements = document.querySelectorAll(".skills")
  let count = 0;
  elements.forEach((v,k) => {
     if (count < 2) {
      v.style.display = "flex"
      v.classList.remove('skills')
    }
    count++
  })
  if (elements.length <= 2) {
    console.log(elements.length)
    // showMoreSkillsButton.removeEventListener('click');
    showMoreSkillsButton.style.display = "none"
  }
}

showMoreSkillsButton.addEventListener("click", showMore, true); 