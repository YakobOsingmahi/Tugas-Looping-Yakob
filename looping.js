// Nomor 1
document.write('<h1>Nomor 1</h1><br>');

for (let i = 1; i <= 100; i++) {
  document.write(i + '<br>');
}

// Nomor 2
document.write('<h1>Nomor 2</h1><br>');
let i = 0;
for (i = 0; i <= 18; i += 2) {
  document.write(i + '<br>');
}

// Nomor 3
document.write('<h1>Nomor 3</h1><br>');
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    document.write(i + 'bilangan genap' + '<br>');
  } else if (i % 2 == 1) {
    document.write(i + 'bilangan ganjil' + '<br>');
  }
}
// Nomor 4
document.write('<h1>Nomor 4</h1><br>');
let ulang = confirm('apakah anda mau mengulang?');
let hitung = 0;

while (ulang) {
  hitung++;
  ulang = confirm('apakah anda mau mengulang?');
}
document.write('anda telah melakukan penggulangan sebanyak' + hitung + 'kali');

// Nomor 5
document.write('<h1>Nomor 5</h1><br>');
let tanya = prompt('Sebutkan kepanjangan dari nama IB?');
while (tanya != null) {
  if (tanya != 'Impact Byte') {
    tanya = prompt('Jawaban kamu salah!!! Silakan Ulangi.\n Sebutkan kepanjangan dari nama IB');
  } else {
    alert('Selamat jawaban kamu benar');
    break;
  }
}
document.write('Selamat jawaban kamu benar');
