const form = document.getElementById("formFilms")
form.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log("inviato")

  const name = document.getElementById("name").value
  const description = document.getElementById("description").value
  const brand = document.getElementById("brand").value
  const price = document.getElementById("price").value

  console.log("Name:", name)
  console.log("Description:", description)
  console.log("Brand:", brand)
  console.log("Price:", price)

  if (!name || !description || !brand || !price <= 0) {
    alert("compila tutti i campi correttamente")
    return
  }

  const newProduct = {
    name: name,
    description: description,
    brand: brand,
    price: price,
    ImageUrl:
      "https://media.gettyimages.com/id/506031057/it/foto/the-shining-a-1980-british-american-psychological-horror-film-starring-jack-nicholson-and.jpg?s=594x594&w=gi&k=20&c=FxwLtMAAVB8P_YLEBPL2Nr4GfarvygXAi1uAZfe8Vwo=",
  }

  console.log("Oggetto inviato:", newProduct)

  fetch(urlapi, {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMjcwMzM4MzRiZjAwMTUwMDA3MDAiLCJpYXQiOjE3NDI1NDY2OTEsImV4cCI6MTc0Mzc1NjI5MX0.gVvg60Ph6Pn_gbAbhvgzGTeC5dKNnMlbj9kasjcghio",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("errore nell'aggiunta del prodotto")
      }
    })
    .then((data) => {
      console.log("Risposta dopo l'aggiunta del prodotto:", data)
      get()

      alert("film aggiunto!")
      window.location.href = "home.html"
    })
    .catch((error) => {
      console.log("errore", error)
      alert("si è verificato un errore!")
    })
})
