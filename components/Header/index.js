// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    let headerDiv = document.createElement('div');
    headerDiv.classList.add('header');
    let date = document.createElement('span');
    date.textContent = 'March 28, 2019';
    date.classList.add('date');
    let title = document.createElement('h1');
    title.textContent = 'Lambda Times';
    let temp = document.createElement('span');
    temp.textContent = '98°'

    headerDiv.appendChild(date);
    headerDiv.appendChild(title);
    headerDiv.appendChild(temp);

    return headerDiv
}

class headerContainer {
    constructor() {
        const container = document.querySelector('.header-container');
        container.appendChild(Header())
    }
}

new headerContainer;

