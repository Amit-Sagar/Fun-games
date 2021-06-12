function ageindays()
{ var birthyear= prompt('what year were you born?....buddy!!');
var ageindayss=(2020-birthyear)*365;
var h2 =document.createElement('h2');
var textanswer= document.createTextNode('your age is' + ageindayss +'days');
h2.setAttribute('id','ageindays');
h2.appendChild(textanswer);
document.getElementById("flex-result").appendChild(h2);
console.log(ageindayss);
}
function reset()
{
    document.getElementById("ageindays").remove()
}
//challenge2

function generate()
{
    var image =document.createElement('img');
    var div= document.getElementById('flex-generator');
    image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5lrTnuzty3a8b3UBukQWHxQB08R693AAl7Q&usqp=CAU";
     div.appendChild(image);
}
//challenge3
function Rpsgame(yourchoice){
    console.log(yourchoice);
    var humanchoice,botchoice;
    humanchoice=yourchoice.id;
    botchoice=numbertochoice(rpsint());
    console.log('computer choice',botchoice);
     result= decidewinner(humanchoice,botchoice);
    console.log(result);
     message=finalmessage(result);
    console.log(message);
    rpsfrontend(yourchoice.id,botchoice,message);
}
function rpsint()
{ return Math.floor(Math.random()*3);
}
function numbertochoice(number){
    return ['Rock', 'paper' ,'Scissor'][number];
}
function decidewinner(yourchoice,computerchoice){
    var rpsdatabase={
        "Rock" : {'Scissor' : 1, 'Rock': 0.5, 'paper' : 0},
        "paper" : {'Rock' : 1, 'paper' : 0.5, 'Scissor' : 0},
        "Scissor" : {'paper' : 1,'Scissor':0.5, 'rock' : 0},
    }
    var yourscore= rpsdatabase[yourchoice][computerchoice];
    var computerscore=rpsdatabase[computerchoice][yourchoice];

    return [yourscore,computerscore];
}
function finalmessage([yourscore , computerscore]){
    if(yourscore === 0){
        return {'message': 'You lose' , 'color':'red'};
    }else if(yourscore === 0.5){
        return {'message':'Draw','color':'blue'};
    }else{
        return {'message':'You win!', 'color':'green'};
    }
}
function rpsfrontend(humanimagechoice,botimagechoice,finalmessage)
     { var imagedatabase={
    "Rock" : document.getElementById("Rock").src,
    "paper" : document.getElementById("paper").src,
    "Scissor" : document.getElementById("Scissor").src
}
document.getElementById("Rock").remove();
document.getElementById("paper").remove();
document.getElementById("Scissor").remove();

var humanDiv = document.createElement('div');
var botDiv = document.createElement('div');
var messageDiv = document.createElement('div');

humanDiv.innerHTML="<img src='" +imagedatabase[humanimagechoice]+"'height=150px width=150px > ";
messageDiv.innerHTML="<h2 style= 'color':"+finalmessage['color']+"fontsize:60px; padding:30px; '>"+finalmessage['message']+"</h2>";
botDiv.innerHTML="<img src='" +imagedatabase[botimagechoice]+"'height=150px width=150px >";

document.getElementById('flex-boxrpsdiv').appendChild(humanDiv);
document.getElementById('flex-boxrpsdiv').appendChild(messageDiv);
document.getElementById('flex-boxrpsdiv').appendChild(botDiv);
}
function remove()
{
    document.getElementById("Rpsgame").remove()
}