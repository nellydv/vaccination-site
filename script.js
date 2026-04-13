innerHTML += <div class="vaccine-card"><h3>${v[k].n}</h3><p>${v[k].d}</p></div>;
    }
}

function renderMyths() {
    const c = document.getElementById('myth-container');
    c.innerHTML = "";
    langData[cur].myths.forEach(m => {
        c.innerHTML += <div class="myth-card" onclick="this.classList.toggle('flipped')"><div class="card-inner"><div class="front">${m.f}</div><div class="back">${m.b}</div></div></div>;
    });
}

function renderFAQ() {
    const c = document.getElementById('faq-container');
    c.innerHTML = "";
    langData[cur].faqs.forEach(f => {
        c.innerHTML += <button class="accordion" onclick="toggleFaq(this)">${f.q}</button><div class="panel"><p>${f.a}</p></div>;
    });
}

function toggleFaq(el) {
    const p = el.nextElementSibling;
    p.style.display = (p.style.display === "block") ? "none" : "block";
}

// ЗАПУСК СРАЗУ
window.addEventListener('DOMContentLoaded', () => {
    changeLang('ru');
});