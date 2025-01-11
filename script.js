document.addEventListener('DOMContentLoaded', function() {
    // Sæt standard sprog
    const defaultLang = 'da';
    changeLanguage(defaultLang);

    // Tilføj event listener til sprog-vælger
    const langSelector = document.getElementById('language-selector');
    if (langSelector) {
        langSelector.addEventListener('change', function(e) {
            changeLanguage(e.target.value);
        });
    }
});

// Initialisér AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    once: false,
    offset: 100,
    easing: 'ease-in-out',
    delay: 100
});

// Funktion til at skifte sprog
function changeLanguage(lang) {
    // Gem det valgte sprog
    document.documentElement.lang = lang;
    
    // Find alle elementer med data-lang attribut
    const elements = document.querySelectorAll('[data-lang]');
    
    // Vis/skjul elementer baseret på det valgte sprog
    elements.forEach(element => {
        if (element.getAttribute('data-lang') === lang) {
            element.style.display = '';
            element.style.opacity = '1';
        } else {
            element.style.display = 'none';
            element.style.opacity = '0';
        }
    });

    // Opdater sprog-vælger
    const langSelector = document.getElementById('language-selector');
    if (langSelector) {
        langSelector.value = lang;
    }

    // Gem valgt sprog i localStorage
    localStorage.setItem('selectedLanguage', lang);
}

// Indlæs gemt sprog når siden loader
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('selectedLanguage') || 'da';
    changeLanguage(savedLang);
});

// Telefon popup funktionalitet
function showPhone() {
    const popup = document.getElementById('phone-popup');
    
    // Fjern eventuelle eksisterende klasser
    popup.classList.remove('hidden');
    
    // Tilføj show klasse efter en kort forsinkelse (for animation)
    requestAnimationFrame(() => {
        popup.classList.add('show');
    });
    
    // Skjul popup efter 3 sekunder
    setTimeout(() => {
        popup.classList.remove('show');
        
        // Vent på at fade-out animationen er færdig før vi skjuler popup'en helt
        setTimeout(() => {
            popup.classList.add('hidden');
        }, 300);
    }, 3000);
}

// Lyt efter klik udenfor popup'en for at lukke den
document.addEventListener('click', (e) => {
    const popup = document.getElementById('phone-popup');
    if (popup.classList.contains('show') && !popup.contains(e.target) && !e.target.matches('.glass-button, .service-cta')) {
        popup.classList.remove('show');
        setTimeout(() => {
            popup.classList.add('hidden');
        }, 300);
    }
}); 