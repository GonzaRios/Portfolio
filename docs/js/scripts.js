/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2024 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
function submitForm() {
    var form = document.getElementById('myForm');
    var formData = new FormData(form);
  
    fetch('/submit-form', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log('Formulario enviado exitosamente', data);
    })
    .catch(error => {
      console.error('Error al enviar el formulario', error);
    });
  }
  