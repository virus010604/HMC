function hitungDiskon(harga, diskon) {
    let potongan = (harga * diskon) / 100;
    let hargaSetelahDiskon = harga - potongan;
    return potongan;
  }
  console.log(`jumlah potongan = ${hitungDiskon(20000,2)}`);
  