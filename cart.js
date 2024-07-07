import {app,db} from '/firebase.js'
import { collection, getDocs , doc , deleteDoc , query, where , getDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";


const auth = getAuth();
let userId 
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
     userId = user.uid;
     fetchProducts()
  } else {
    // User is signed out
    return
  }
});


const tbody = document.getElementById('tbody')

async function fetchProducts() {
    if (!userId) return;
  tbody.innerHTML = "";
  const q = query(collection(db, "cart"), where("userId", "==", userId));

const querySnapshot = await getDocs(q);
querySnapshot.forEach(async (CartDoc) => {
  // doc.data() is never undefined for query doc snapshots
  let data = {...CartDoc.data()}
  data.id = CartDoc.id

  const docRef = doc(db, "products", data.productId);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
   data.product = { ...docSnap.data() }
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
 
   renderProduct(data);
});
//   const querySnapshot = await getDocs(collection(db, "products"));
//   let i = 1;
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//   //   console.log(doc.id, " => ", doc.data());
//     const product = {...doc.data(), id: doc.id, order: i}
//     renderProduct(product)
//     i++
//   });

}
fetchProducts();




function renderProduct(item) {
    
    const tr = document.createElement('tr')
    tbody.appendChild(tr)

    tr.innerHTML= `
    <td class="product-thumbnail">
    <img src="${item.product.image}" alt="Image" class="img-fluid">
  </td>
  <td class="product-name">
    ${item.product.name}
  </td>
  <td>${item.product.price}</td>
  <td>
    <div class="input-group mb-3 d-flex align-items-center quantity-container" style="max-width: 120px;">
      <div class="input-group-prepend">
        <button class="btn btn-outline-black decrease" type="button">&minus;</button>
      </div>
      <input type="text" class="form-control text-center quantity-amount" value="${item.quantity}" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
      <div class="input-group-append">
        <button class="btn btn-outline-black increase" type="button">&plus;</button>
      </div>
    </div>

  </td>
  <td>${Number(item.product.price) * Number(item.quantity)}</td>
  <td><a href="#" class="btn btn-black btn-sm">X</a></td>`;

//   const deleteBtn = document.getElementsByClassName("delete-btn")[product.order - 1]
//   deleteBtn.onclick =function (params) {
//     deleteProduct(product)
//   }
}

async function deleteProduct(product) {
  const isConfirm = confirm("Are you sure you want to delete" + product.name)
  if (!isConfirm) {
    return
  }
  //Delete Product
  await deleteDoc(doc(db, "products", product.id));
  fetchProducts();

}