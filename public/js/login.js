window.addEventListener("load", function () {
  const form = document.querySelector(".login-form");
  const inputEmail = document.querySelector("#email");
  const inputContraseña = document.querySelector("#password");
  const button = document.querySelector("#submit");
  const divErrorName = document.querySelector(".errorName");
  const divErrorPassword = document.querySelector(".errorPassword");
  // console.log(inputEmail);
  // console.log(button);

  button.addEventListener("click", function (e) {
  
    let errores = {};
    if (inputEmail.value.length < 1) {
      errores.mail = "El campo usuario debe estar completo";
      // divErrorName.innerText = "El campo debe estar completo";
      inputEmail.style.border = "solid 1px red";
    }
    

    if (inputContraseña.value.length < 1) {
      errores.contra = "El campo contraseña debe estar completo";
      // divErrorPassword.innerText = "El campo debe estar completo";
      inputContraseña.style.border = "solid 1px red";
    }

    
    if (Object.keys(errores).length >= 1) {  
      e.preventDefault();
   
      divErrorName.innerText = errores.mail ? errores.mail : ""
       if(errores.mail==undefined){ 
       inputEmail.style.border = "solid 1px green"; 
     
              
      }
      divErrorPassword.innerText = errores.contra ? errores.contra: ""
      if(errores.contra==undefined){ 
        inputContraseña.style.border = "solid 1px green";
      }
      
    } 
    else {

      form.submit();
    }
  });
});
