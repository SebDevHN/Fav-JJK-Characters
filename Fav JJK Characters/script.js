const charData = {
    gojo: {
        name: "Satoru Gojo",
        bio: "The strongest jujutsu sorcerer. He possesses the Limitless technique and the Six Eyes, allowing him to manipulate space at an atomic level. His presence alone shifts the balance of the world.",
        video: "videos/gojo.mp4",
        theme: "gojo-theme"
    },
    maki: {
        name: "Maki Zenin",
        bio: "Born with almost no cursed energy in exchange for superhuman physical prowess. After shedding the burden of her clan, she reached a state of Heavenly Restriction that rivals the legendary Toji Fushiguro.",
        video: "videos/maki.mp4",
        theme: "maki-theme"
    },
    higuruma: {
        name: "Hiromi Higuruma",
        bio: "A genius lawyer who awakened his technique during the Culling Game. His Domain Expansion, Deadly Sentencing, forces the target into a non-violent courtroom trial where their guilt is judged by Judgeman.",
        video: "videos/higuruma.mp4",
        theme: "higuruma-theme"
    }
};

const modal = document.getElementById('char-modal');
const modalName = document.getElementById('modal-name');
const modalBio = document.getElementById('modal-bio');
const modalVideo = document.getElementById('char-video');
const closeBtn = document.querySelector('.close-btn');
const cards = document.querySelectorAll('.char-card');



cards.forEach(card => {
    card.addEventListener('click', () => {
        const charId = card.getAttribute('data-char');
        const data = charData[charId];

        // Update Content
        modalName.innerText = data.name;
        modalBio.innerText = data.bio;
        modalVideo.querySelector('source').src = data.video;
        modalVideo.load();


        modal.className = `modal active ${data.theme}`;


        document.body.style.overflow = 'hidden';
    });
});

const closeModal = () => {
    modal.classList.add('closing');
    modalVideo.pause();


    setTimeout(() => {
        modal.classList.remove('active');
        modal.classList.remove('closing');
        document.body.style.overflow = 'auto';
    }, 800);
};

closeBtn.addEventListener('click', closeModal);


modal.querySelector('.modal-bg').addEventListener('click', closeModal);
