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
    cell.style.opacity = 0;
    cell.addEventListener('mouseenter', (e) => {
        for (let radioButton of radioButtons) {
            if (random.checked) {
                selectedColour = randColour();
                break;
            } else if (radioButton.checked) {
                selectedColour = radioButton.value;
                break;
                }
            }
        if (e.ctrlKey) {
            cell.style.background = selectedColour;
            cell.style.opacity = parseFloat(cell.style.opacity) + 0.2;
            } else if (e.altKey) {
            cell.style.background = selectedColour;
            cell.style.opacity = parseFloat(cell.style.opacity) + 1.0;
            }
        });
    });
};

document.getElementById('black').checked = true;
createGrid(16);

gridSize.addEventListener('click', () => {
    document.getElementById("container").innerHTML = "";
    let custom = prompt('Please pick a grid size up to 100', 16);
    if (isNaN(custom) || custom > 100) {
        return alert('You must enter a number up to 100.');
    }
    createGrid(custom)
});

const randColour = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}