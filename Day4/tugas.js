// Fungsi untuk memesan makanan
function pesanMakanan(namaMakanan, waktuPembuatan) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${namaMakanan} sudah siap!`);
    }, waktuPembuatan);
  });
}

// mengantarkan makanan
function antarMakanan(namaMakanan, waktuAntar) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // pengantaran berhasil atau gagal
      if (Math.random() > 0.2) {
        resolve(`${namaMakanan} sudah diantar!`);
      } else {
        reject(`${namaMakanan} gagal diantar.`);
      }
    }, waktuAntar);
  });
}

// memesan dan mengantarkan dua makanan secara bersamaan
function prosesMakananAllSettled() {
  const makanan1 = "Pizza";
  const makanan2 = "Burger";

  const pesanPizza = pesanMakanan(makanan1, 2000).then((a) =>
    antarMakanan(makanan1, 1000)
  );
  const pesanBurger = pesanMakanan(makanan2, 3000).then((a) =>
    antarMakanan(makanan2, 1500)
  );

  Promise.allSettled([pesanPizza, pesanBurger]).then((results) => {
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        console.log("Sukses:", result.value);
      } else {
        console.log("Gagal:", result.reason);
      }
    });
  });
}

prosesMakananAllSettled();
