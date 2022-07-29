let magicWord = ['Şübhəsiz', 'Qətiyyən belədir', 'Şübhəsiz', 'Bəli — mütləq', 'Buna əmin ola bilərsiniz',
    'Mən düşünürəm, bəli', 'Çox güman ki', 'Yaxşı perspektiv', 'İşarələr bəli deyir', 'Bəli',
    'Hələ aydın deyil, yenidən cəhd edin', 'Sonra soruş', 'İndi sizə deməmək daha yaxşıdır',
    'İndi proqnozlaşdırmaq mümkün deyil', 'Konsentrə olun və yenidən soruşun', 'Heç düşünmə', 'Cavabım yox',
    'Məlumatlarıma görə - "yox"', 'Perspektivlər çox yaxşı deyil', 'Çox şübhəli'];

let ask = document.getElementById('ask');
let magicText = document.getElementById('magicText');
let magicImg = document.getElementById('magicImg');

ask.addEventListener("click", function () {
    let number = Math.floor(Math.random() * 15);

    this.classList.add("shake");
    magicImg.src = "./images/magicBallStart.webp";
    magicText.innerText = "";


    setTimeout(function () {
        ask.classList.remove("shake");
        magicImg.src = "./images/magicBallFinish.webp";
    }, 1000);


    setTimeout(function () {
        magicText.innerText = magicWord[number];
    }, 1500);


    // console.log(magicWord[number]);
});

