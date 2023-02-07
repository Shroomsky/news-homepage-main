const closeMenuBtn = document.querySelector("#close");
const hamburgerBtn = document.querySelector("#open");
const navigation = document.querySelector(".nav");
const mask = document.querySelector("#mask");

const openMenu = () => {
	navigation.classList.add("active");
	mask.style.display = "block";
};
const closeMenu = () => {
	navigation.classList.remove("active");
	mask.style.display = "";
};

hamburgerBtn.addEventListener("click", openMenu);
