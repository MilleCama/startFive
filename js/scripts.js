import reviews from './reviews.js';

// inject current year in footer 
const now =  new Date();
document.querySelector('#year').textContent = now.getFullYear();

const hamburgerElement = document.querySelector('#theButton');
const navElement = document.querySelector('#theNav');

hamburgerElement.addEventListener('click', () => {
    hamburgerElement.classList.toggle('open');
    navElement.classList.toggle('open');
});

const reviewsParent = document.querySelector('.reviewCards');

for (let i = 0; i < reviews.length; i++) {
    const mySection = document.createElement('section');
    const myName = document.createElement('h3');
    myName.textContent = reviews[i].name;
    const myReview = document.createElement('p');
    myReview.textContent = reviews[i].review;
    const myStars = document.createElement('div');

    for (let step = 0; step < reviews[i].stars; step++) {
        const reviewIndicator = document.createElement('img');
        reviewIndicator.src = "images/star-outline.svg";
        reviewIndicator.classList.add('star-icon');
        myStars.appendChild(reviewIndicator);
    }


    mySection.append(myName);
    mySection.append(myStars);
    mySection.append(myReview);
    reviewsParent.append(mySection);
}