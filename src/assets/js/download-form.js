(function () {
    'use strict';
    window.addEventListener('load', function () {

      let contactFormWrapper = document.getElementById('formDownload');
      let firstName = document.getElementById('fName');
      let lastName = document.getElementById('lName');
      let contactEmail = document.getElementById('dEmail');
      // let subjectName = document.getElementById('subjectName');
      let phoneNumber = document.getElementById('cNumber');

    //   let submitContctForm = document.getElementById('submitDownload');

      function validateFirstNameQueries() {
        if (firstName.value === "" || firstName.value <= 2 || !firstName.value.match(
            /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/)) {
          firstName.classList.add('is-invalid');
          return false;
        } else {
          firstName.classList.add('is-valid');
          firstName.classList.remove('is-invalid');
          return true;
        }
      }

      if (firstName) {
        firstName.onkeydown = firstName.onblur = firstName.onkeyup = function () {
          validateFirstNameQueries();
        }
      }

      function validatePhoneNumberQueries() {
        if (phoneNumber.value === "" || phoneNumber.value <= 10 || !phoneNumber.value.match(
            /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)) {
          phoneNumber.classList.add('is-invalid');
          return false;
        } else {
          phoneNumber.classList.add('is-valid');
          phoneNumber.classList.remove('is-invalid');
          return true;
        }
      }

      if (phoneNumber) {
        phoneNumber.onkeydown = phoneNumber.onblur = phoneNumber.onkeyup = function () {
          validatePhoneNumberQueries();
        }
      }


      function validatelastNameQueries() {
        if (lastName.value === "" || lastName.value <= 2 || !lastName.value.match(
            /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/)) {
          lastName.classList.add('is-invalid');
          return false;
        } else {
          lastName.classList.add('is-valid');
          lastName.classList.remove('is-invalid');
          return true;
        }
      }

      if (lastName) {
        lastName.onkeydown = lastName.onblur = lastName.onkeyup = function () {
          validatelastNameQueries();
        }
      }

      function validatecontactEmailQueries() {
        if (contactEmail.value === "" || contactEmail.value <= 2 || !contactEmail.value.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) {
          contactEmail.classList.add('is-invalid');
          return false;
        } else {
          contactEmail.classList.add('is-valid');
          contactEmail.classList.remove('is-invalid');
          return true;
        }
      }

      if (contactEmail) {
        contactEmail.onkeydown = contactEmail.onblur = contactEmail.onkeyup = function () {
          // lastDrawnSalary.value = lastDrawnSalary.value.replace(/[^0-9]+/,"");
          validatecontactEmailQueries();
        }
      }


    //   if (submitContctForm) {

    //     submitContctForm.addEventListener('click', function (event) {
    //       event.preventDefault();
    //       if (!validateFirstNameQueries() || !validatelastNameQueries() || !validatecontactEmailQueries() || !validatePhoneNumberQueries()) {


    //       } else {

    //         var modalClose = document.getElementById('modal-contact-us');
    //         modalClose.click();
    //         $('#modal-thanku').modal('show');
    //         contactFormWrapper.reset();
    //       }

    //       return false;

    //     });
    //   }

    }, false);

  })();