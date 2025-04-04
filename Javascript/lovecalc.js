// var n = Math.random();
// console.log(n);
// n = n * 6;
// n = Math.floor(n) + 1; //using math.floor to round a number to the nearest whole number
// console.log(n);

// this takes two inputes and gives score
// prompt('what is your name?');
// prompt('what is their name?')

// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;
// alert(`Your love score is   ${loveScore}%`);

// leap year

function isLeap(){
    if (year % 4 === 0){
        if (year % 100 === 0){
            if (year % 400 === 0){
                return "leap Year.";
            }else {
                return "not leap year.";
            }
        } else {
            return "leap year"
        }
    }else{
        return "Not leap year";
    }
}





