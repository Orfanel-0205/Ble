const puzzlePieces = document.querySelectorAll('.puzzle-piece');
const boardCells = document.querySelectorAll('.board-cell');

puzzlePieces.forEach(piece => {
    piece.addEventListener('dragstart', dragStart);
});

boardCells.forEach(cell => {
    cell.addEventListener('dragover', dragOver);
    cell.addEventListener('drop', drop);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.src);
    e.target.style.opacity = '0.5';
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const imgSrc = e.dataTransfer.getData('text/plain');
    
    if (!e.target.querySelector('img')) {
        const newImg = document.createElement('img');
        newImg.src = imgSrc;
        newImg.classList.add('visible');
        e.target.appendChild(newImg);
        e.target.style.backgroundImage = 'none'; // Remove background if needed
    }
}
