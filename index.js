const layar = document.querySelector('.layar');
const tombol = document.querySelector('.tombol');
let angkaPertama = '';
let operator = '';
let angkaKedua = '';
let resetLayar = false;

function perbaruiLayar() {
    layar.textContent = angkaKedua || angkaPertama || '0';
}

function masukkanAngka(e) {
    if (resetLayar) {
        layar.textContent = '';
        resetLayar = false;
    }
    if (layar.textContent.length < 10) {
        if (layar.textContent === '0' && e.textContent !== '.') {
            layar.textContent = e.textContent;
        } else {
            layar.textContent += e.textContent;
        }
    }
}

function masukkanOperator(e) {
    if (angkaPertama && operator) {
        hitung();
    }
    angkaPertama = layar.textContent;
    operator = e.textContent;
    resetLayar = true;
}

function hitung() {
    angkaKedua = layar.textContent;
    let hasil = 0;
    const num1 = parseFloat(angkaPertama);
    const num2 = parseFloat(angkaKedua);

    switch (operator) {
        case '+':
            hasil = num1 + num2;
            break;
        case '-':
            hasil = num1 - num2;
            break;
        case 'X':
            hasil = num1 * num2;
            break;
        case '/':
            hasil = num1 / num2;
            break;
        case '%':
            hasil = num1 % num2;
            break;
    }

    layar.textContent = parseFloat(hasil.toFixed(5));
    angkaPertama = layar.textContent;
    angkaKedua = '';
    operator = '';
    resetLayar = true;
}

function hapusSemua() {
    angkaPertama = '';
    operator = '';
    angkaKedua = '';
    resetLayar = false;
    layar.textContent = '0';
}

function hapusInputTerakhir() {
    layar.textContent = layar.textContent.slice(0, -1) || '0';
}

tombol.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('nomor') || target.classList.contains('desimal')) {
        masukkanAngka(target);
    } else if (target.classList.contains('operator')) {
        masukkanOperator(target);
    } else if (target.classList.contains('equal')) {
        hitung();
    } else if (target.classList.contains('clear')) {
        hapusSemua();
    } else if (target.classList.contains('clear-entry')) {
        hapusInputTerakhir();
    }
});

perbaruiLayar();