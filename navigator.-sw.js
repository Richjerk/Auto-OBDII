if ("serviceWorker"in navigator){
    navigator.serviceWorker
        .register("/sw.js")
        .then(serviceWorker=>{
            console.log("Service Worker registered:",serviceWorker);
})
.catch(error=>{"Error registering the Service Worker:",error});
};