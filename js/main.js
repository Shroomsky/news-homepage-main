const closeMenuBtn = document.querySelector("#close");
const hamburgerBtn = document.querySelector("#open");
const navigation = document.querySelector(".nav");
const mask = document.querySelector("#mask");
const allDivs = document.querySelectorAll("div");

const openMenu = () => {
	navigation.classList.add("active");
	mask.style.display = "block";
};
const closeMenu = () => {
	navigation.classList.remove("active");
	mask.style.display = "";
};

const observer = () => {

	const currentDiv = window.scrollY;
	allDivs.forEach((div) => {
		if (div.classList.contains("white") && div.offsetTop <= currentDiv + 36) {
			hamburgerBtn.classList.add("white-color");
		} else if (
			!div.classList.contains("white") &&
			div.offsetTop <= currentDiv + 36
		) {
			hamburgerBtn.classList.remove("white-color");
		}
	});
};

hamburgerBtn.addEventListener("click", openMenu);
window.addEventListener("scroll", observer);
