/* ========== NAVBAR SHRINK ON SCROLL ========== */
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 10);
});

/* ========== SCROLL SPY ACTIVE NAVIGATION ========== */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(sec => {
        const top = sec.offsetTop - 120;
        const height = sec.clientHeight;

        if (pageYOffset >= top && pageYOffset < top + height) {
            current = sec.getAttribute("id");
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }
    });
});

const backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* ========== MODAL BUKTI GAMBAR ========== */
let images = [];
let currentIndex = 0;

function openModal(imgArray) {
   images = Array.isArray(imgArray) ? imgArray : [imgArray];
    currentIndex = 0;

    document.getElementById("modal-img").src = images[currentIndex];
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function openCV() {
    const modal = document.getElementById("cv-modal");
    if (modal) modal.style.display = "flex";
}

function closeCV() {
    const modal = document.getElementById("cv-modal");
    if (modal) modal.style.display = "none";
}
