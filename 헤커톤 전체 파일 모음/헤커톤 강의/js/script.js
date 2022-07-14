const logo = document.getElementById('logo');
const coca = document.getElementById('coca');
const fanta = document.getElementById('fanta');
const sprite = document.getElementById('sprite');
const circle = document.getElementById('circle');
const btn = document.getElementById('btn');
const facebook = document.getElementById('facebook');
const instagram = document.getElementById('instagram');
const twitter = document.getElementById('twitter');

coca.addEventListener('mouseover', () => {
    logo.src = "./images/logo/cocacolaLogo.png";
    circle.style.backgroundColor = 'red';
    btn.style.backgroundColor = 'red';
    
    coca.style.transform = 'translateY(-50px)';
    fanta.style.transform = 'translateY(0px)';
    sprite.style.transform = 'translateY(0px)';

    facebook.style.backgroundColor = 'red';
    instagram.style.backgroundColor = 'red';
    twitter.style.backgroundColor = 'red';
});


fanta.addEventListener('mouseover', () => {
    logo.src = "./images/logo/FantaLogo.png";
    circle.style.backgroundColor = '#6610f2';
    btn.style.backgroundColor = '#6610f2';
    
    coca.style.transform = 'translateY(0px)';
    fanta.style.transform = 'translateY(-50px)';
    sprite.style.transform = 'translateY(0px)';

    facebook.style.backgroundColor = '#6610f2';
    instagram.style.backgroundColor = '#6610f2';
    twitter.style.backgroundColor = '#6610f2';
});

sprite.addEventListener('mouseover', () => {
    logo.src = "./images/logo/spriteLogo.png";
    circle.style.backgroundColor = '#28a745';
    btn.style.backgroundColor = '#28a745';
    
    coca.style.transform = 'translateY(0px)';
    fanta.style.transform = 'translateY(0px)';
    sprite.style.transform = 'translateY(-50px)';

    facebook.style.backgroundColor = '#28a745';
    instagram.style.backgroundColor = '#28a745';
    twitter.style.backgroundColor = '#28a745';
});

