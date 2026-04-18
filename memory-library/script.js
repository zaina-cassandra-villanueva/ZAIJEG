// PASSWORD
function checkPass() {
    var password = document.getElementById("pass").value;
    if(password === "0915") { // change to his birthday
        sessionStorage.setItem("musicTime", 0);
        window.location.href = "albums.html";
    } else {
        alert("Wrong password 💜");
    }
}

// MUSIC CONTINUITY
window.addEventListener("load", () => {
    const music = document.getElementById("bgMusic");
    if (music) {
        let time = sessionStorage.getItem("musicTime");
        if (time) music.currentTime = time;

        music.play();

        setInterval(() => {
            sessionStorage.setItem("musicTime", music.currentTime);
        }, 1000);
    }
});

// FLOATING HEARTS
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}, 600);

// GALLERY ALBUMS
const photos = {
    1: [
        {src:"photos/pic1.jpg", cap:"Our first picture together 💜"},
        {src:"photos/pic2.jpg", cap:"This day meant so much to me"}
    ],
    2: [
        {src:"photos/pic3.jpg", cap:"One of our favorite dates"},
        {src:"photos/pic4.jpg", cap:"Laughing with you is my favorite"}
    ],
    3: [
        {src:"photos/pic5.jpg", cap:"Random cute moment"},
        {src:"photos/pic6.jpg", cap:"A memory I always smile at"}
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
