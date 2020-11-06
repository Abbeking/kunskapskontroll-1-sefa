
/*****************************  Börjar här  ***********************************/



// RESET --- KNAPP


let btns = document.querySelectorAll('button');
let someBtns = document.querySelectorAll('header a');
let cartBtn = document.querySelectorAll('header img')
// BARA EN RESET KNAPP.
let reset = btns[2];
reset.innerText = 'RESET';

console.log(reset);


let art1 = document.querySelector('.art-1');

// EVENT LISTENER --- RESET KNAPP
reset.addEventListener('click', resetAll);

// EVENT LISTENER



// Andra knappen (Home)
let btn2 = someBtns[0];
btn2.addEventListener('click',
    function (event) {
        changeBodytoGrey();
    }

);


// Tredje knappen (art-1 button)
let btn3 = btns[0];
btn3.addEventListener('click',
    function (event) {
        changeBtninArt1();
    }

);



// Fjärde knappen (Products)
let btn4 = someBtns[1];
btn4.addEventListener('click',
    function (event) {
        changePhoto();
    }

);

// Femte knappen (Contact)
let btn5 = someBtns[2];
btn5.addEventListener('click',
    function (event) {
        RemoveArt2Btn();
    }

);


// Sjätte knappen (Varukorgen -- symbolen) Scrolla ner så ser du " IN STOCK "
let btn6 = cartBtn[1];
btn6.addEventListener('click',
    function (event) {
        addList();
    }

);

/****************************************************************/
function resetAll() {
    // Standard bakgrund " vit " på body
    body.style.backgroundColor = 'white';

    // Image (Reset)
    let image = document.querySelector('.art-1 img');
    image.src = "../img/hoodie-ash.png";

    // Button (change in art1)
    let art1Btn = document.querySelector('.art-1 button');
    art1Btn.innerText = 'buy';
    art1Btn.style.backgroundColor = '#222';
    art1Btn.style.width = '';
    art1.style.backgroundColor = 'white';

    // Button (added in art2)
    let art2Color = document.querySelector('.art-2')
    let art2Btn = document.querySelector('.art-2 button');
    let art2Img = document.querySelector('.art-2 figure')
    let art2H2 = document.querySelector('.art-2 h2')
    let art2H3 = document.querySelector('.art-2 h3')
    let art2P = document.querySelector('.art-2 p')
    art2Btn.style.display = 'block';
    art2Img.style.display = '';
    art2H2.innerText = 'Sinus Hoodie'
    art2H2.style.textAlign = '';
    art2H2.style.marginTop = '';
    art2H3.innerText = 'Fire';
    art2H3.style.display = 'block';
    art2H3.style.marginTop = '';
    art2P.style.display = 'block';
    art2P.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione neque sint quaerat consequatur laudantium!';
    art2Color.style.backgroundColor = 'white';
    art2P.style.fontWeight = '';

    // List added with ul
    document.querySelector('ul').remove();
}
/****************************************************************/



function changeBtninArt1 () {
    let art1Btn = document.querySelector('.art-1 button');
    art1Btn.innerText = 'size: S/M/L ⬇️';
    art1Btn.style.backgroundColor = 'red';
    art1Btn.style.lineHeight = '1.3rem';
    art1Btn.style.width = '9rem';
    art1Btn.style.textAlign = 'center';
    art1.style.backgroundColor = '#D8D8D8';
}

let body = document.querySelector('body')

// ändrar body bakgrundsfärg till grey.
function changeBodytoGrey () {
    body.style.backgroundColor = '#B0B0B0';
}

// tar bort button i art 2
function RemoveArt2Btn () {
    let art2Color = document.querySelector('.art-2')
    let art2Btn = document.querySelector('.art-2 button');
    let art2Img = document.querySelector('.art-2 figure')
    let art2H2 = document.querySelector('.art-2 h2')
    let art2H3 = document.querySelector('.art-2 h3')
    let art2P = document.querySelector('.art-2 p')
    art2Btn.style.display = 'none';
    art2Img.style.display = 'none';
    art2H2.innerText = 'Live chat';
    art2Color.style.backgroundColor = '#98FB98';
    art2H2.style.textAlign = 'center';
    art2H2.style.marginTop = '3rem';
    art2H3.innerText = '👨[Support] Alex';
    art2H3.style.marginTop = '2rem';
    art2P.innerText = 'Hello! We are currently offline, please send us an email: support-skates@sinus.com'
    art2P.style.fontWeight = 'bold';
}

// ändrar bild i art-1
function changePhoto () {
    let image = document.querySelector('.art-1 img');
    image.src = "../img/hoodie-fire.png";
}

/****************************************************************/


function addList () {

    let body = document.querySelector('body');
    
    let addedUl = document.createElement('ul');
    body.appendChild(addedUl);

    // UL blir flex --> så att det inte blir kolumn, under varann.
    addedUl.style.display = 'flex';
    addedUl.style.justifyContent = 'space-around';
  
    
    for (let i = 0; i < 3; i++){
        let listItem = document.createElement('li');
        let addtext = document.createTextNode('In stock');
        listItem.setAttribute('class', 'list-group-item');
        addedUl.appendChild(listItem);
        listItem.appendChild(addtext);
    }
    
    let allLi = addedUl.children;
    
     for (let i = 0; i < allLi.length; i++){
        allLi[i].style.border = '5px solid black';
        allLi[i].style.listStyle = 'none';
        allLi[i].style.backgroundColor = 'green';
        allLi[i].style.marginBottom = '1rem';
        allLi[i].style.padding = '0.7rem';
        allLi[i].style.width = '5.5rem';
        allLi[i].style.textAlign = 'center';
        allLi[i].style.color = '#ffffff';
    
    }

}

/*****************************  Slutar här  ***********************************/
