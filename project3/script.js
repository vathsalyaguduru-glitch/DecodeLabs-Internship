function changeColor(){

    const colors = [
        "lightblue",
        "lightgreen",
        "lightpink",
        "lightyellow",
        "lavender"
    ];

    const random =
        colors[Math.floor(Math.random()*colors.length)];

    document.body.style.backgroundColor = random;
}

function toggleText(){

    const text =
        document.getElementById("text");

    if(text.style.display==="none"){
        text.style.display="block";
    }
    else{
        text.style.display="none";
    }
}

function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");
}

let count = 0;

function increase(){
    count++;
    document.getElementById("count").innerText = count;
}

function decrease(){
    count--;
    document.getElementById("count").innerText = count;
}