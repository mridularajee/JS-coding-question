// Delay ke baad message print kare

function delayMsg(msg, delay){
    setTimeout(()=>{
        console.log(msg);
    }, delay);
}
delayMsg("hi i am js", 2000);