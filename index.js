let container = document.querySelector('.container');

function createGrid() {

    let row = document.createElement('div');
    // not sure if this is how to make this flex
    row.style.display = 'flex';

    for (i=0; i<16; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'cell');
        div.style.cssText = 'border: 0; margin: 0; width: 30px; height: 30px; outline: 1px solid black;';
        row.appendChild(div);
    }
    container.appendChild(row);
}

createGrid()

// function that creates a div called 'row'. And a loop 
// that puts 16 square divs inside that row div.
// 
// That loop is nested in another loop that creates 16
// columns, each of which are one of those rows.