let offBtn = document.getElementById("off");
let onBtn = document.getElementById("on");
let bulb = document.getElementById("bulb");

onBtn.addEventListener("click" , () =>{
bulb.src = "on-transparent.png"
  bulb.classList.add("glow");
});

offBtn.addEventListener("click" , () =>{
 bulb.src = "off-transparent.png"   
   bulb.classList.remove("glow");
});




console.log(bulb);
