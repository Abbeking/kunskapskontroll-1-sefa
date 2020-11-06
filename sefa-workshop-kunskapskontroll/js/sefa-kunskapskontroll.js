
// Återställ knappen

let btns = document.querySelectorAll('button');
let reset = btns[2];
reset.innerText = 'RESET';

console.log(reset);


let art1 = document.querySelector('.art-1');

// EVENT LISTENER ----- RESET KNAPP
reset.addEventListener('click', resetAll);

// EVENT LISTENER ----- FÖRSTA KNAPPEN

let knapp1 = btns[0];
knapp1.addEventListener('click', 
    function (event) {
        changeArt1toGrey();
        changeBtninArt1();
        changePhoto();
        RemoveArt2Btn();
        addList();
    }

);



////////////////////////////////////////////////////
function resetAll() {
    art1.style.backgroundColor = 'white';

    // reset till Sinus Hoodie
    let h2 = document.querySelector('.art-2 h2');
    h2.innerText = 'Sinus Hoodie';

    // reset image
    let image = document.querySelector('.art-1 img');
    image.src = "../img/hoodie-ash.png";

    // change first BTN in art1
    let art1Btn = document.querySelector('.art-1 button');
    art1Btn.innerText = 'buy';
    art1Btn.style.backgroundColor = '#222';

    // add Art2 btn
    let art2Btn = document.querySelector('.art-2 button');
    art2Btn.style.display = 'block';

    // addList   (UL WITH LI)
    document.querySelector('ul').remove();
}
/////////////////////////////////////////////////////



function changeBtninArt1 () {
    let art1Btn = document.querySelector('.art-1 button');
    art1Btn.innerText = 'size: S/M/L';
    art1Btn.style.backgroundColor = 'red';
}

// ändrar art-1 bakgrundsfärg till grey.
function changeArt1toGrey () {
    art1.style.backgroundColor = 'grey';
}


function RemoveArt2Btn () {
    let art2Btn = document.querySelector('.art-2 button');
    art2Btn.style.display = 'none';
}

function changePhoto () {
    let image = document.querySelector('.art-1 img');
    image.src = "../img/hoodie-fire.png";
}


function addList (){

    let body = document.querySelector('body');
    
    
    let newUl = document.createElement('ul');
    body.appendChild(newUl);
    
    for(let i=0; i < 5; i++){
        let listItem = document.createElement('li');
        let addtext = document.createTextNode('Input text');
        listItem.setAttribute('class', 'list-group-item');
        newUl.appendChild(listItem);
        listItem.appendChild(addtext);
    }
    
    let newLis = newUl.children;
    
     for(let i=0; i < newLis.length; i++){
       newLis[i].style.backgroundColor = 'grey';
       newLis[i].style.border = '3px solid red';
       newLis[i].style.listStyle = 'none';
       newLis[i].style.marginBottom = '1rem';
       newLis[i].style.marginRight = '1.6rem';
       newLis[i].style.padding = '1rem';
    
    }

}


