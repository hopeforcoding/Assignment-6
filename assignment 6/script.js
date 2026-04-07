
   
   //contact form js
   const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    const modal = document.getElementById('modal');
    const modalDetails = document.getElementById('modalDetails');
    const closeModal = document.getElementById('closeModal');

    function validateName() {
      const name = nameInput.value.trim();
      if (name === '') {
        nameError.textContent = "Name cannot be empty.";
        return false;
      } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        nameError.textContent = "Name can only contain letters.";
        return false;
      } else {
        nameError.textContent = '';
        return true;
      }
    }

    function validateEmail() {
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === '') {
        emailError.textContent = "Email cannot be empty.";
        return false;
      } else if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        return false;
      } else {
        emailError.textContent = '';
        return true;
      }
    }

    function validateMessage() {
      const message = messageInput.value.trim();
      if (message === '') {
        messageError.textContent = "Message cannot be empty.";
        return false;
      } else if (message.length < 10) {
        messageError.textContent = "Message must be at least 10 characters.";
        return false;
      } else {
        messageError.textContent = '';
        return true;
      }
    }

    // form submission
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isMessageValid = validateMessage();

      if (isNameValid && isEmailValid && isMessageValid) {
        modalDetails.innerHTML = `
          <strong>Name:</strong> ${nameInput.value}<br>
          <strong>Email:</strong> ${emailInput.value}<br>
          <strong>Message:</strong> ${messageInput.value}
        `;
        modal.style.display = 'block';
        form.reset();
      }
    });

    // pop-up
    closePopUp.onclick = function() {
      PopUp.style.display = 'none';
    }
    window.onclick = function(event) {
      if (event.target == PopUp) {
        PopUp.style.display = 'none';
      }
    }