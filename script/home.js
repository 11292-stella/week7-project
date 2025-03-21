const urlapi = "https://striveschool-api.herokuapp.com/api/product/"

const get = function () {
  fetch(urlapi, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMjcwMzM4MzRiZjAwMTUwMDA3MDAiLCJpYXQiOjE3NDI1NDY2OTEsImV4cCI6MTc0Mzc1NjI5MX0.gVvg60Ph6Pn_gbAbhvgzGTeC5dKNnMlbj9kasjcghio",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("La risposta non è valida")
      }
    })
    .then((data) => {
      console.log("Dati ricevuti dall'API:", data)
      if (data && data.length > 0) {
        displayDvd(data)
      } else {
        console.log("Nessun prodotto disponibile.")
      }
    })
    .catch((error) => {
      console.log("Si è verificato un errore:", error)
    })
}

const displayDvd = function (products) {
  const dvdContainer = document.getElementById("dvdContainer")
  dvdContainer.innerHTML = ""

  products.forEach((product) => {
    const card = document.createElement("div")
    card.classList.add("col-md-4")

    card.innerHTML = `
      <div class="card">
        <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.description}</p>
          <p class="card-text">${product.price}€</p>
        </div>
      </div>
    `

    dvdContainer.appendChild(card)
  })
}

get()
