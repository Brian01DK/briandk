// Sprogskift funktion
function changeLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-lang]').forEach(element => {
        element.classList.remove('active');
    });
    document.querySelectorAll(`[data-lang="${lang}"]`).forEach(element => {
        element.classList.add('active');
    });
}

// Popup funktion
function showPhone() {
    const popup = document.querySelector('.popup');
    popup.style.display = 'block';
    
    // Skjul popup efter 3 sekunder
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}

// Luk popup når der klikkes udenfor
document.addEventListener('click', (e) => {
    const popup = document.querySelector('.popup');
    if (popup.style.display === 'block' && !popup.contains(e.target) && !e.target.matches('.cta-button')) {
        popup.style.display = 'none';
    }
});

// Initialiser dansk som standardsprog
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('da');
}); 