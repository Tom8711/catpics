const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

function fetchCat(){
  fetch('https://api.thecatapi.com/v1/images/search')
  .then((data)=>{
    return data.json()
  }).then((catlink)=>{
    document.getElementById("cat-picture").innerHTML = `<img src="${catlink[0].url}" class="rounded mx-auto d-block">`
  })
}


