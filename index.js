let container = document.querySelector('.container');
let gridSize = document.querySelector('#gridSize');

function createGrid() {
    for (r=0; r<16; r++) {
        let row = document.createElement('div');
        row.style.cssText = 'display: flex; flex: 1 1 0;';
        for (i=0; i<16; i++) {
            let div = document.createElement('div');
            div.setAttribute('class', 'cell');
            div.style.cssText = 'flex: 1 1 0; border: 0; margin: 0; outline: 1px solid black;';
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}
createGrid()

let cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseenter', () => {
        cell.style.background = 'black';
    });
});

gridSize.addEventListener('click', () => {
    prompt('How big would you like the Grid to be?');
})