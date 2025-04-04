// adding event listener to our code

let numberOfDrum = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfDrum; i ++ ) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        alert("i got clicked")

        var audio = new Audio("dido.mp3");
        audio.play();
    });
}



