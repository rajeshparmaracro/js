function save(){
    console.log("save");
    let userString=document.getElementById("div1").value;
    sessionStorage.setItem("my-data", userString);
}

function remove(){
    console.log("remove");
    sessionStorage.setItem("my-data");
}

function display(){
    console.log("display");
    let dataString=sessionStorage.getItem("my-data");
    console.log(dataString);
    document.getElementById("data").innerHTML=`<li>${dataString}<li/>`;
}