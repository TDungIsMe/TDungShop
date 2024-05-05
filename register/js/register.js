// console.log(loginBtnText)
import {app,db} from '/firebase.js'
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";


const registerForm = document.getElementById('register-form')


registerForm.onsubmit = function (event) {
  event.preventDefault()
  const email = document.getElementById('email')
  const password = document.getElementById('password')
  const confirmpassword = document.getElementById('password')

//   const usernameError = document.getElementById('username-error')
//   const passwordError = document.getElementById('password-error')
//   const confirmpasswordError = document.getElementById('confirm-password-error')
//   const registerError = document.getElementById('register-error')

  // Kiểm tra
//   if (username.value === '') {
//     usernameError.innerHTML = 'Vui lòng nhập Tên đăng nhập'
//   } else {
//     usernameError.innerHTML = ''
//   }

//   if (password.value === '') {
//     passwordError.innerHTML = 'Vui lòng nhập Mật khẩu'
//   } else {
//     passwordError.innerHTML = ''
//   }

//   if (confirmpassword.value === '') {
//     confirmpasswordError.innerHTML = 'Vui lòng nhập Mật khẩu'
//   }else if (confirmpassword.value !== password.value) {
//     confirmpasswordError.innerHTML = 'Mật khẩu không trùng'
//   }
//    else { 
//     confirmpasswordError.innerHTML = ''
//   }
//   const existingUser = userList.find(function (user) {
//     return user.username === username.value
//   }) 
//   if (existingUser) {
//     registerError.innerHTML = 'Tên đăng nhập đã được sử dụng'
//   } else {
//     const newUser = {
//       username: username.value,
//       password: password.value,
//     }
//     userList.push(newUser)
//     localStorage.setItem('userList', JSON.stringify(userList))
//     registerError.innerHTML = ''
//     window.location.href = '../login'
//   }
const auth = getAuth();
createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Dang ky thanh cong ")
    window.location.href = '/'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('error')
    // ..
  });

}