getElementById('hero-title').innerText = langData[l].heroT;
    document.getElementById('hero-sub').innerText = langData[l].heroS;
    document.getElementById('calc-h').innerHTML = <i class="fas fa-calculator"></i> ${langData[l].calcH};
    document.getElementById('calc-desc').innerText = langData[l].desc;
    document.getElementById('btn-calc-action').innerText = langData[l].btn;
    document.getElementById('myth-h').innerHTML = <i class="fas fa-lightbulb"></i> ${langData[l].mythH};
    document.getElementById('faq-h').innerHTML = <i class="fas fa-question-circle"></i> ${langData[l].faqH};
    
    document.getElementById('m-home').innerText = langData[l].mHome;
    document.getElementById('m-calc').innerText = langData[l].mCalc;
    document.getElementById('m-myths').innerText = langData[l].mMyths;
    document.getElementById('m-faq').innerText = langData[l].mFaq;

    renderMyths(); renderFAQ();
}

function generateSchedule() {
    const date = document.getElementById('birthdate').value;
    if(!date) return alert("Select date!");
    const out = document.getElementById('schedule-output');
    out.innerHTML = "";
    const v = langData[cur].vaccines;
    for(let k in v) {
        out.innerHTML += <div class="vaccine-card"><h3><i class="fas fa-syringe"></i> ${v[k].n}</h3><p>${v[k].d}</p></div>;
    }
}

function renderMyths() {
    const c = document.getElementById('myth-container'); c.innerHTML = "";
    langData[cur].myths.forEach(m => {
        c.innerHTML += <div class="myth-card" onclick="this.classList.toggle('flipped')"><div class="card-inner"><div class="front">${m.f}</div><div class="back">${m.b}</div></div></div>;
    });
}

function renderFAQ() {
    const c = document.getElementById('faq-container'); c.innerHTML = "";
    langData[cur].faqs.forEach(f => {
        c.innerHTML += <button class="accordion" onclick="toggleFaq(this)">${f.q}</button><div class="panel"><p>${f.a}</p></div>;
    });
}

function toggleFaq(el) {
    const p = el.nextElementSibling;
    p.style.display = (p.style.display === "block") ? "none" : "block";
}

window.onload = () => { renderMyths(); renderFAQ(); };