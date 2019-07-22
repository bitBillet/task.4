// массив для дивов
let blocks = document.getElementsByClassName('chessCoub');
// начальный номер ряда
let count = 1;
// раскраска доски на черные квадраты в порядке сверху вниз и слева направо
for (let i = 0; i < blocks.length; i++) {
    // раскраска в черный нечетных квадратов с нечетным номером ряда
    if (i % 2 && i > 0 && count % 2) blocks[i].style.background = 'black';
    // назначить следующий номер ряда в обратном шахматному порядке сверху вниз
    if (i % 8 == 0 && i > 0) {
        count++;
    }
    // раскраска в черный четных квадратов с четным номером ряда
    if (i % 2 == 0 && count % 2 == 0) {
        blocks[i].style.background = 'black';
    }
    blocks[i].onclick = stepHorse;
}
// функция для смены цвета по клику и вывода возможных ходов коня
function stepHorse() {
    // смена цвета нажатого квадрата
    this.style.background = 'blue';
    this.style.border = '1px solid grey';
    // вывод возможных ходов назад
    for (let i = 0; i < blocks.length; i++) {
        if (blocks[i].style.background == 'blue' && i > 7 &&
            blocks[i].id != 'A' && blocks[i].id != 'B') {
            blocks[i - 10].style.background = 'lime';
            blocks[i - 10].style.border = '1px solid grey';
        }
        if (blocks[i].style.background == 'blue' && blocks[i].id != 'G' &&
            blocks[i].id != 'H' && i > 7) {
            blocks[i - 6].style.background = 'lime';
            blocks[i - 6].style.border = '1px solid grey';
        }
        if (blocks[i].style.background == 'blue' && blocks[i].id != 'H' &&
            i >= 15) {
            blocks[i - 15].style.background = 'lime';
            blocks[i - 15].style.border = '1px solid grey';
        }
        if (blocks[i].style.background == 'blue' && blocks[i].id != 'A' &&
            i >= 17) {
            blocks[i - 17].style.background = 'lime';
            blocks[i - 17].style.border = '1px solid grey';
        }
        // вывод возможных ходов вперед
        if (blocks[i].style.background == 'blue' && blocks[i].id != 'A' &&
            i <= 48) {
            blocks[i + 15].style.background = 'lime';
            blocks[i + 15].style.border = '1px solid grey';
        }
        if (blocks[i].style.background == 'blue' && blocks[i].id != 'H' &&
            i <= 46) {
            blocks[i + 17].style.background = 'lime';
            blocks[i + 17].style.border = '1px solid grey';
        }
        if (blocks[i].style.background == 'blue' && blocks[i].id != 'A' &&
            blocks[i].id != 'B' && i <= 57) {
            blocks[i + 6].style.background = 'lime';
            blocks[i + 6].style.border = '1px solid grey';
        }
        
        if (blocks[i].style.background == 'blue' && blocks[i].id != 'G' &&
            blocks[i].id != 'H' && i <= 53) {
            blocks[i + 10].style.background = 'lime';
            blocks[i + 10].style.border = '1px solid grey';
        }
    }

}
