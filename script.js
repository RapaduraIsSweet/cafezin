function openWhatsApp() {
  var message = "hmmmm quero sim vamo (adicione aqui seu horario)";
  var phoneNumber = "5598984108474";
  var whatsappLink = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  window.open(whatsappLink);
}

document.addEventListener("DOMContentLoaded", function() {
  var noButton = document.getElementById("noButton");
  var yesButton = document.getElementById("yesButton");
  var popup = document.getElementById("popup");
  var close = document.getElementById("close");

  noButton.addEventListener("click", function() {
    var audio = document.getElementById("audio");
    var image = document.createElement("img");
    image.src = "https://assets.puzzlefactory.com/puzzle/441/329/original.webp";
    image.style.position = "absolute";
    image.style.left = "50%";
    image.style.top = "50%";
    image.style.transform = "translate(-50%, -50%)";
    image.style.width = "200px";
    image.style.height = "200px";
    document.body.appendChild(image);
    audio.play();
    setTimeout(function() {
      document.body.removeChild(image);
    }, 1000);

    var randomX = Math.floor(Math.random() * (window.innerWidth - 200));
    var randomY = Math.floor(Math.random() * (window.innerHeight - 200));
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
  });

  yesButton.addEventListener("click", function() {
    popup.style.display = "flex";
  });

  close.addEventListener("click", function() {
    popup.style.display = "none";
  });
});
