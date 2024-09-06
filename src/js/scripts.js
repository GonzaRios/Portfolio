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
  