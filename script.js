//your JS code he
const btn = document.querySelector(".btn")
const div = document.querySelector(".search")
const input = document.querySelector(".input")
btn.addEventListener("click", ()=>{
	div.style.transform="scale(1.2)"
	input.focus()
}) 