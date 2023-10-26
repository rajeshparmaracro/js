function notify(){
    alert("About to notify");


Notification.requestPermission()
    .then((userPermission)=>{
        console.log(userPermission);
        if (userPermission==="default") {
            alert("Pleases provide permission")
        } else {
            new Notification('New Mail', {body:"You are Hero"});

        }
    })
}



obj={
    body: "mail coming",
    image:"./image.jpg",
    icon:"./icon.jpg",
}

function notify(){
    alert("About to notify");


Notification.requestPermission()
    .then((userPermission)=>{
        console.log(userPermission);
        if (userPermission==="default") {
            alert("Pleases provide permission")
        } else {
            new Notification('New Mail',obj);

        }
    })
}


