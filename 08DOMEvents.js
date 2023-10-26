function divClick(e){
console.log("Div Clicked");
console.log(e);
}

function butClick(e){
    console.log("button Clicked");
    console.log(e.target);
}

function inputEntered(e){
  
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    let input=e.target.value;
    document.getElementById("data").innerHTML=input;
}


function nameInput(e){
    if(e.target.value.length<5){
        
        document.getElementById("nameErr").innerHTML="Please Enter the Rigth value";
    }
    else{
        document.getElementById("nameErr").innerHTML="";
    }
}

function sbt(e){
    console.log("About To SUbmit");
    e.preventDefault();

}