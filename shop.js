import {app,db} from '/firebase.js'
import { collection, getDocs , doc , deleteDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";


const productList  = document.getElementById('product-list')

async function fetchProducts() {
  productList.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "products"));
  let i = 1;
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
    const product = {...doc.data(), id: doc.id, order: i}
    renderProduct(product)
    i++
  });

}
fetchProducts();

function renderProduct(product) {
    const productCard = document.createElement('div')
    productList.appendChild(productCard)
    productCard.classList.add("col-12", "col-md-4" , "col-lg-3" , "mb-5")
    productCard.innerHTML= `						
    <a class="product-item" href="./shop-detail.html?id=${product.id}">
      <img style="height: 300px; object-fit:cover; " src="${product.image}" class="img-fluid product-thumbnail">
    <h3 class="product-title">${product.name}</h3>
    <strong class="product-price">${product.price}</strong>
 
    <span class="icon-cross">
      <img src="images/cross.svg" class="img-fluid">
    </span>
  </a>`
}

