// script.js

const dizeler = {
    a: [
        "Sevda bahçesinde hayal-i pervane,", "Gecenin karanlığında yıldızlar yanar,",
        "Sessiz gecelerde bir hüzün var,", "Bir bahar sabahı, gönlümde ferah,",
        "Aşkın ateşinde yanar gönlüm,", "Yıldızlar altında bir garip sevdâ,",
        "Hayalin peşinde sürüklenir aklım,", "Gönül deryasında mest-i muhabbet,",
        "İlham perisiyle düşler kurarım,", "Aşkın sarmalında kaybolmuş ruhum,",
        "Geceler boyu süren bir ızdırap,", "Aşk sarhoşu gönlümde hep sen,",
        "Mehtaplı gecelerde hayalinle,", "Yıldızlar şahit, ay yol gösterir,",
        "Sevda bahçesinde dolaşır hayal,", "Rüyalarda buluşuruz seninle,",
        "Sükut içinde bir derviş gönlüm,", "Mevsimler geçer, aşkın baki,",
        "Leyla-mecnun misali aşkı yaşarım,", "Gönül bahçesinde efsun-i hal,",
        "Gözlerimde mecnun, gönlümde asuman,", "Ferhat'ın aşkı gibi dağları deler,"
    ],
    b: [
        "Gözlerimde mestane, gönlümde hicran.", "Hayal-i düşlerde gönüller kanar.",
        "Gözlerimde yaşlar, kalbimde nar.", "Rüzgarın serinliği, içimde bir ah.",
        "Hasretin narıyla dolar ömrüm.", "Mehtabın ışığında ruhum hep ağlâ.",
        "Bir nebze huzur bulmaz yüreğim.", "Her bir bakışınla artar minnet.",
        "Sevda masalında seni ararım.", "Her adımda seni bulurmuşum.",
        "Gönlümde saklıdır aşkın harap.", "Her nefes, her an isminle perişan.",
        "Aşkın denizinde dalgalanır gönlüm.", "Gönlümde hasretin yürek deler.",
        "Gözlerimde mestane, gönlümde melal.", "Her gecede bir masal, bir düşte.",
        "Her demde seni anar, seni bulur.", "Her nefes, her an seninle sanki.",
        "Sükut-u hayal ile yıkılır kalbim,", "Gözlerimde fer, gönlümde elem,"
    ],
    c: [
        "Sükunet içinde bir garip derman,", "Rüzgarın fısıldadığı umutlar var,",
        "Yıldızların altında hayaller ar,", "Kuşların şarkısı, içimdeki feryat,",
        "Geceler boyu süren bu dert,", "Gönül hanesinde hasretle yanan,",
        "Her dert, her keder seninle başlar,", "Öyle bir aşk ki dillere destân,",
        "Her gece mehtapta yankılanır sesin,", "Sonsuz düşlerde bir umman,",
        "Bir melâl, bir hicran öyküsü,", "Rüzgarla savrulan yaprak gibi,",
        "Sensiz her gece karanlık ve zindan,", "Aşkınla yanarım, her an sana,",
        "Gecelerin sessizliğinde feryad,", "Gönlümde saklıdır bu aşk öyküsü,",
        "Aşkınla coşar, her an yanar,", "Gönlümde saklıdır bu aşkın izleri,",
        "Gönül sarayında hep bir hasret,", "Şeb-i yelda da seni anar,"
    ],
    d: [
        "Aşkın denizinde kaybolur firkat.", "Karanlıkta ışık olur anılar.",
        "Sevgiliye hasretle yanan bir yar.", "Sevgiliye kavuşmak, en büyük murat.",
        "Sevdanın izidir gönülde mert.", "Bir hicran hikâyesi, yürekle bakan.",
        "Sensiz geçen zaman gönlümü taşlar.", "Her nefesimde sen, her an.",
        "Gönül şarkılarımda gizli hevesin.", "Seninle var olur, seninle can.",
        "Her bir dörtlükte sensin gülsüm.", "Her anım seninle, her an âşık.",
        "Gönlümde seninle yaşar her an.", "Dizelerde saklıdır bu aşka.",
        "Kalbimde hep sana, hep sana âd.", "Sensiz her anım bir kayboluş, bir süs.",
        "Sensiz bir dünya, gönlümde hicran.", "Sensiz geçen her gün birer ezgi.",
        "Her an seni anar bu gönül,", "Sana kavuşmak tek bir murad."
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
