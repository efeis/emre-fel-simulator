const dizeler = {
    a: [
        "Mecalis-i hüda-i bezm-i hüda,", "Efkâr-ı mahrutî şeb-i hande-nigar,", 
        "Mahlukat-ı füsun-ı alemin mihriban,", "Beyan-ı dergâh-ı aşk ü sevdâ,", 
        "Huzur-u âlemde perişan hayal,", "Şehrayin-i mazi, mehtabın izinde,", 
        "Hicran-ı iklimde hüzünlü akşamlar,", "Aşkın sefinesi, zamanın deryası,"
    ],
    b: [
        "Tesirat-ı muhalefet-i ziya-i ma’şuk,", "Hayal-i münteşir-i mevsim-i gam,", 
        "Müsavver-i ziya-yı mehtap firkat,", "Şeb-i yeldâda melal-i meserret,", 
        "Sensiz gecelerde nehirler susar,", "Gönlümde yankılanır eski bir türkü,", 
        "Hayalin ufkunda yıldızlar sönük,", "Şarkılar sessiz, sokaklar matem,"
    ],
    c: [
        "Hafız-ı mecalis-i şeb-i meşakat,", "Mütedavil-i tasavvur-i zülal-i aşk,", 
        "Tefekkür-i leyali-i şeb-i mihrap,", "Beyan-ı musahhar-ı firkat-i elem,", 
        "Rüzgarın fısıltısı, geceyi boğar,", "Şehirde yankılanan, suskun bir ezgi,", 
        "Baharın getirdiği o eski hatıra,", "Gözlerim ufukta, hayalin uzakta,"
    ],
    d: [
        "Halvet-i mekân-ı firkat-i sergüzeşt,", "Muhalefet-i temaşa-yı hicran,", 
        "Mukadderat-ı evsaf-ı gubar-ı hayal,", "Beyan-ı müntehab-ı aşk-ı mecnûn,", 
        "Sensiz geçen bir asır, gönlümde firar,", "Aşkın bıraktığı derin bir izdirap,", 
        "Kelimeler yorgun, gönlüm hep seninle,", "Her dizede saklı, yaralı bir hikaye."
    ]
};

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateDortluk() {
    const dortlukElement = document.getElementById('dortluk');
    
    let dize1 = getRandomElement(dizeler.a);
    let dize2 = getRandomElement(dizeler.b);
    let dize3 = getRandomElement(dizeler.c);
    let dize4 = getRandomElement(dizeler.d);

    while (dize2 === dize1) {
        dize2 = getRandomElement(dizeler.b);
    }
    while (dize3 === dize1 || dize3 === dize2) {
        dize3 = getRandomElement(dizeler.c);
    }
    while (dize4 === dize1 || dize4 === dize2 || dize4 === dize3) {
        dize4 = getRandomElement(dizeler.d);
    }

    const dortluk = `${dize1}\n${dize2}\n${dize3}\n${dize4}`;
    
    dortlukElement.innerText = dortluk;
}

document.addEventListener('DOMContentLoaded', generateDortluk);
