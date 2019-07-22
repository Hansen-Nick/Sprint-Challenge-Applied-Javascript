// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

console.log(axios.get('https://lambda-times-backend.herokuapp.com/articles'))

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        articleSubjects = Object.keys(response.data.articles)
        for (let i = 0; i < articleSubjects.length; i++) {
            let dataObject = response.data.articles[articleSubjects[i]];
            dataObject.forEach((article) => {
                new Card(article);
            })
        }
    })

    .catch((err) => {
        console.log('Error: ', err)
    }) 



function cardCreator(cardInfo) {
    let outerDiv = document.createElement('div');
    outerDiv.classList.add('card');
    let headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headline');
    let authorDiv = document.createElement('div');
    authorDiv.classList.add('author');
    let imgDiv = document.createElement('div');
    imgDiv.classList.add('img-container');
    let img = document.createElement('img');
    let authorName = document.createElement('span');

    headlineDiv.textContent = cardInfo.headline;
    img.src = cardInfo.authorPhoto;
    authorName.textContent = cardInfo.authorName

    outerDiv.appendChild(headlineDiv);
    outerDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgDiv);
    imgDiv.appendChild(img);
    authorDiv.appendChild(authorName);

    return outerDiv
}

let container = document.querySelector('.cards-container');

class Card {
    constructor(card) {
        container.appendChild(cardCreator(card));
    }
}
