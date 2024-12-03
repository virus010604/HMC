const agera = {
    no_plat: "L1239",
    nama: "agera",
    brand: "Koeniseg",
    warna: ["Gray dan Green", "Gold dan Red"],
    Bahan_bakar: ["Bensin", "Pertalite", "Pertamax"],
    Maksimal_penumpang: 2
  }
  
  const body = document.body;
  const tambah = document.createElement("p");
  let hasil = ""; 
  for (let i in agera) {
    hasil += `${i}: ${agera[i]}<br>`;
  }
  
  tambah.innerHTML = hasil;
  body.appendChild(tambah);