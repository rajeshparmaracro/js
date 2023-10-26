function getdata(){
    alert("about to get data")


const xhr= new XMLHttpRequest();
const url= 'http://127.0.0.1:5500/12ajax.json';
xhr.open('GET', url);

xhr.onload=()=>{
    console.log("loaded with data");
    console.log(typeof xhr.responseText);
    let dataObj=JSON.parse( xhr.responseText);
    console.log(dataObj);

    for (let key in dataObj) {
        let dl=document.createElement("dl");
        let dt=document.createElement("dt");
        dt.innerHTML=`${key}`;
        let dd=document.createElement("dd");
        dd.innerHTML=`${dataObj[key]}`;
        
        dl.appendChild(dt);
        dl.appendChild(dd)

        document.getElementById('loaded').appendChild(dl);
        }
    };

xhr.send()

}