// menghilangkan objek
function button() {
    document.getElementById('teks').style.display ='none'
}

// input value
const background = document.getElementById('background')
const input = document.getElementById('input')

function klik() {
    console.log('klik')
    background.style.backgroundColor = input.value
}

// input value 2
const inputValue = document.getElementById('input2')
const select = document.getElementById('select')
const background2 = document.getElementById('background2')
const judul2 = document.getElementById('judul2')
const penjelasan2 = document.getElementById('penjelasan2')

function klik2() {
    const userSelect = select.options.selectedIndex
    console.log('user memilih= ', userSelect)

    switch (userSelect) {
        case 1: background2.style.backgroundColor = inputValue.value
            break;
        case 2: judul2.style.color = inputValue.value
            break;
        case 3: penjelasan2.style.color = inputValue.value
            break;
    }
}