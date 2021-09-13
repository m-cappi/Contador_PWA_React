//if(navigator.serviceWorker){}
if("serviceWorker" in navigator){
    //console.log('si existe')
    navigator.serviceWorker.register("./serviceWorker.js") //o sw.js
}