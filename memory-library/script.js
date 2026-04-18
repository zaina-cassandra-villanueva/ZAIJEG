function checkPass() {
    var password = document.getElementById("pass").value;
    if(password === "0915") { // CHANGE to his birthday
        window.location.href = "albums.html";
    } else {
        alert("Wrong password 💜");
    }
}

// Floating hearts
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💜";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}, 500);

// Gallery albums
const photos = {
    1: [
        {src:"photos/pic1.jpg", cap:"Our first picture together 💜"},
        {src:"photos/pic2.jpg", cap:"The day I felt so happy with you"}
    ],
    2: [
        {src:"photos/pic3.jpg", cap:"One of our favorite dates"},
        {src:"photos/pic4.jpg", cap:"Laughing with you is my favorite"}
    ],
    3: [
        {src:"photos/pic5.jpg", cap:"Random but cute moment"},
        {src:"photos/pic6.jpg", cap:"I love this memory so much"}
    ]
};

const params = new URLSearchParams(window.location.search);
const album = params.get("album");
const gallery = document.getElementById("gallery");

if(gallery && album && photos[album]) {
    photos[album].forEach(p => {
        gallery.innerHTML += `
            <div class="polaroid">
                <img src="${p.src}">
                <p>${p.cap}</p>
            </div>
        `;
    });
}
