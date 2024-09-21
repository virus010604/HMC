async function fetchData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      const userCards = document.getElementById('userCards');
      

      data.forEach((isi) => {
    
        let cleanedPhone = isi.phone.replace(/\s*x.*$/, "").replace(/-/g, "");

        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <h2>User ID: ${isi.id}</h2>
          <p><strong>Email:</strong> ${isi.email}</p>
          <p><strong>Address:</strong> ${isi.address.street}, ${isi.address.suite}, ${isi.address.city}</p>
          <p><strong>Phone:</strong> ${cleanedPhone}</p>
        `;

        userCards.appendChild(card);
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }

  fetchData();