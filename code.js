"use strict";

const zone = document.querySelector(".zone");

zone.addEventListener("dragover", (e)=>{
	e.preventDefault();
})

zone.addEventListener("drop", (e)=>{
	let n = e.dataTransfer.getData("tex");
	zone.style.background = `url("tex${n}.png")`;
	zone.style.outline = `2px solid #aaa`;

})

for (let i = 1; i < document.querySelector(".textures").children.length+1; i++) {
	document.querySelector(`.tex${i}`).addEventListener("dragstart", (e)=>changeTexture(i, e));
}

const changeTexture = (n, e)=>{
	e.dataTransfer.setData("tex", n);
}