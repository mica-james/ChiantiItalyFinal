document.addEventListener("DOMContentLoaded", () => {
	console.log("JS Loaded");
	var photos = [
		{ src: "../randomPhotos/Fontanelle.jpg", text: "Hotel Le Fontanelle" },
		{ src: 	"../randomPhotos/Calvane.jpg", text: "Villa Le Calvane" },
		{ src: "../randomPhotos/BorgoScopeto.jpg", text: "Borgo Scopeto Wine & Country Relais" },
		{ src: "../randomPhotos/Belvedere.jpg", text: "Hotel Belvedere Di San Lenino" }
	];
	var button = document.getElementById("newImage");
	var largeImageContainer = document.getElementById("imageContainer");

	button.addEventListener("click", () => {
		largeImageContainer.innerHTML = "";
		
		var randomIndex = Math.floor(Math.random() * photos.length);
		var { src, text } = photos[randomIndex];
		
		var pictureDiv = document.createElement("div");
		pictureDiv.className = "photoItem";
		
		var img = document.createElement("img");
		img.src = src;
		img.alt = text;
		pictureDiv.appendChild(img);

		var caption = document.createElement("p");
		caption.textContent = text;
		pictureDiv.appendChild(caption);
		
		largeImageContainer.appendChild(pictureDiv);
		
		largeImageContainer.style.display = "block";
	});
});