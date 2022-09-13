/* Sample function test for typing text */
let i = 0
let text = "Hi there! The name's Winness, codename 'WRKT.', a willing Cybersecurity Engineer who wants to be specialized in the field of programming and automating security policies in system and network infrastructure. I am currently studying at CCI Campus Alsace to learn the fundamentals of networking and system security, but also introduction to algorithm and programming from scratch. I am always excited to learn new technologies, especially about automating tasks and security operation. Want to know more about my journey and projects ? Feel free to go here:"

let speed = 40

function typing(){
    if (i < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
    }
}

typing()
