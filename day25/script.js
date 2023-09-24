
// RESTAPI
// JSON,xml, graphql, trpc

// JSON-> Javascript Object Notation

// client -> server


const email = document.getElementById('email');
const password = document.getElementById('password');

const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (event) => {
   event.preventDefault()
   let data = {
      email: email.value,
      password: password.value
   }

   // Change object to json using json.stringify method


   const loginForm = async () => {
      const resp = await fetch('https://e8a1-27-34-30-0.ngrok.io/users/login', {
         method: "POST",
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(data)
      });
      const loginResp = await resp.json();

      if (loginResp.status) {
         document.getElementById('error-message').innerText = loginResp.message;
      } else {
         console.log(loginResp)
         document.getElementById('error-message').innerText = loginResp.message;
      }

      console.log(loginResp);
   }

   loginForm();

})