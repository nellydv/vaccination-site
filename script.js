<h3><i class="fas fa-syringe"></i> ${vax[month].n}</h3>
                <p>${vax[month].d}</p>
            </div>
        `;
    }
}

function renderMyths() {
    const container = document.getElementById('myth-container');
    container.innerHTML = "";
    langData[currentLang].myths.forEach(m => {
        container.innerHTML += `
            <div class="myth-card" onclick="this.classList.toggle('flipped')">
                <div class="card-inner">
                    <div class="front">${m.f}</div>
                    <div class="back">${m.b}</div>
                </div>
            </div>
        `;
    });
}

function renderFAQ() {
    const container = document.getElementById('faq-container');
    container.innerHTML = "";
    langData[currentLang].faqs.forEach(f => {
        container.innerHTML += `
            <button class="accordion" onclick="toggleFaq(this)">${f.q} <i class="fas fa-chevron-down"></i></button>
            <div class="panel"><p>${f.a}</p></div>
        `;
    });
}

function toggleFaq(el) {
    const panel = el.nextElementSibling;
    panel.style.display = (panel.style.display === "block") ? "none" : "block";
}

// Первичная загрузка
window.onload = () => { renderMyths(); renderFAQ(); };