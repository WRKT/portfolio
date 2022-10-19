// Sample function test for typing text 
let i = 0
let text = "Hi there! Je me presente: Winness, codename 'WRKT.', jeune technicien système et réseau qui voudrait se spécialiser dans la conception, la programmation et l'application des mesures de sécurité sur un système d'information, en vue de devenir un ingenieur en Cybersécurité capable de faire face aux divers aléas du cyberespace."
let speed = 34

function typing(){
    if (i < text.length){
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
    }
}
typing()


