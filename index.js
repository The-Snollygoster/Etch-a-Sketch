let container = document.querySelector('#container');
let gridSize = document.querySelector('#gridSize');
let radioButtons = document.querySelectorAll('input[name=colour]');

function createGrid(size) {
    for (r=0; r<size; r++) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        row.style.cssText = 'display: flex; flex: 1 1 0;';
        for (i=0; i<size; i++) {
            let div = document.createElement('div');
            div.setAttribute('class', 'cell');
            div.style.cssText = 'flex: 1 1 0; border: 0; margin: 0;';
            row.appendChild(div);
        }
        container.appendChild(row);
    }

    let selectedColour;
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
    cell.addEventListener('mouseenter', () => {
        for (let radioButton of radioButtons) {
            if (radioButton.checked) {
                selectedColour = radioButton.value;
                break;
                }
            }
        cell.style.background = selectedColour;
        });
    });
};

document.getElementById('black').checked = true;
createGrid(16);

gridSize.addEventListener('click', () => {
    document.getElementById("container").innerHTML = "";
    let custom = prompt('Please pick a grid size up to 100', 16);
    if (custom == NaN) {
        custom = prompt('Please enter a number up to 100');
    } else if (custom > 100) {
        custom = prompt('The maximum grid size is 100x100. Please enter a lower value.');
    }
    createGrid(custom)
});