const body = document.body;

const mainDiv = document.createElement('div');
mainDiv.className = "container d-flex flex-wrap justify-content-between gap-5";
mainDiv.id = "container";
// mainDiv.style.display = "flex"

//Header create and append
const headerTag = document.createElement('h3');
headerTag.innerText = "Our Team";
headerTag.className = "text-center";

document.body.appendChild(headerTag);

//Paragraph create and append
const paraTag = document.createElement('p');
paraTag.innerText = "Test Okay Test Okay Test Okay Test Okay.";
paraTag.className = "text-center";

document.body.appendChild(paraTag);


fetch('https://dummyjson.com/products', {
   method: "GET"
}).then((resp) => {
   return resp.json();
}).then((value) => {
   console.log(value)
   value.products.forEach((product) => {

      //Create card and append
      const card = document.createElement('div');
      card.className = "card";
      card.style.width = "22%"
      card.style.height = "500px"

      //Card Header start
      const cardHeader = document.createElement('div');
      cardHeader.className = "card-header  h-75";

      const image = document.createElement('img');
      image.src = product.thumbnail;
      image.className = 'card-img h-100';

      cardHeader.appendChild(image);
      card.appendChild(cardHeader);

      //Card Header end

      //Card Body start
      const cardBody = document.createElement('div');
      cardBody.className = "card-body";
      cardBody.style.textAlign = "center";

      const h4 = document.createElement('h4');
      h4.innerText = product.title;
      h4.className = "text-primary";

      cardBody.appendChild(h4);

      const p = document.createElement('p');
      p.innerText = product.brand;
      p.className = "text-secondary";

      cardBody.appendChild(p);

      const button = document.createElement('button');
      button.innerText = "Read More";
      button.className = "btn btn-outline-info";

      cardBody.appendChild(button);

      //Card Body end

      card.appendChild(cardBody);

      mainDiv.appendChild(card);
   })
})




body.appendChild(mainDiv);