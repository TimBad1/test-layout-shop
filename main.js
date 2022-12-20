document.addEventListener('DOMContentLoaded', () => {
    const CREATE_BUTTON = document.querySelector('#create');
    const MODAL = document.querySelector('#modal');
    const CLOSE_MODAL_BUTTON = document.querySelector('#close-btn');
    const CANCEL_MODAL_BUTTON= document.querySelector('#cancel');
    const CREATE_MODAL_BUTTON= document.querySelector('#new-create');
    

    CREATE_BUTTON.addEventListener('click', () => {
        MODAL.classList.add('is-open')
    })

    CLOSE_MODAL_BUTTON.addEventListener('click', () => {
        MODAL.classList.remove('is-open')
    })

    CANCEL_MODAL_BUTTON.addEventListener('click', () => {
        MODAL.classList.remove('is-open')
    })

    CREATE_MODAL_BUTTON.addEventListener('click', () => {
        MODAL.classList.remove('is-open')
    })



    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
})