let container = document.querySelector('.container');

function createGrid() {

    for (r=0; r<16; r++) {
        let row = document.createElement('div');
        row.style.display = 'flex';
        for (i=0; i<16; i++) {
            let div = document.createElement('div');
            div.setAttribute('class', 'cell');
            div.style.cssText = 'border: 0; margin: 0; width: 30px; height: 30px; outline: 1px solid black;';
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}

createGrid()