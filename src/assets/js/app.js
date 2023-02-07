var App = (function (window, document) {
  return {
    toggleClass: function (e, className) {
      if (e.currentTarget.classList.contains(className)) {
        e.currentTarget.classList.remove(className);
      } else {
        e.currentTarget.classList.add(className);
      }
    },
    toggleTargetClass: function (targetClass, className) {
      var x = document.getElementsByClassName(targetClass);
      if (x[0].classList.contains(className)) {
        x[0].classList.remove(className);
      } else {
        x[0].classList.add(className);
      }
    },
    toggleParentClass: function (e, className) {
      if (e.currentTarget.parentElement.classList.contains(className)) {
        e.currentTarget.parentElement.classList.remove(className);
      } else {
        e.currentTarget.parentElement.classList.add(className);
      }
    },
    toggleGrandParentClass: function (e, className) {
      if (
        e.currentTarget.parentElement.parentElement.classList.contains(
          className
        )
      ) {
        e.currentTarget.parentElement.parentElement.classList.remove(className);
      } else {
        e.currentTarget.parentElement.parentElement.classList.add(className);
      }
    },
    addClass: function (classNameTo, className) {
      var x = document.getElementsByClassName(classNameTo);
      x[0].classList.add(className);
    },
    addClassToAll: function (classNameTo, className) {
      var x = document.getElementsByClassName(classNameTo);
      for (let a of x) {
        a.classList.add(className);
      }
    },
    removeClass: function (classNameTo, className) {
      var x = document.getElementsByClassName(classNameTo);
      x[0].classList.remove(className);
    },
    removeClassToAll: function (classNameTo, className) {
      var x = document.getElementsByClassName(classNameTo);
      for (let a of x) {
        a.classList.remove(className);
      }
    },
    onload: function (e) {
      var x = document.getElementsByClassName('addclass');
      for (let a of x) {
        a.classList.add(a.getAttribute('data-class'));
      }
    },
    showOverlay: function (id) {
      document.getElementById(id).style.display = "block";
    },
    hideOverlay: function (id) {
      document.getElementById(id).style.display = "none";
    },
    openBioSidebar: function (id) {
      document.getElementById(id).style.width = "100%";
    },
    closeBioSidebar: function (id) {
      document.getElementById(id).style.width = "0";
    },
  };
})(window, document);

$(function () {
  $(".partner-scroll").verticalLoop({
    delay: 2000,
    order: "asc",
  });
});




(function () {
  'use strict';
  window.addEventListener('load', function () {

    let contactFormWrapper = document.getElementById('form-modal');
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let contactEmail = document.getElementById('contactEmail');
    let subjectName = document.getElementById('subjectName');
    let phoneNumber = document.getElementById('phoneNumber');

    let submitContctForm = document.getElementById('getstarted--submit');

    function validateFirstNameQueries() {
      if (firstName.value === "" || firstName.value <= 2 || !firstName.value.match(/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/)) {
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
      if (phoneNumber.value === "" || phoneNumber.value <= 10 || !phoneNumber.value.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)) {
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
      if (lastName.value === "" || lastName.value <= 2 || !lastName.value.match(/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/)) {
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
      if (contactEmail.value === "" || contactEmail.value <= 2 || !contactEmail.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
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

    function validatesubjectNameQueries() {
      if (subjectName.value === "" || subjectName.value <= 2 || !subjectName.value.match(/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/)) {
        subjectName.classList.add('is-invalid');
        return false;
      } else {
        subjectName.classList.add('is-valid');
        subjectName.classList.remove('is-invalid');
        return true;
      }
    }

    if (subjectName) {
      subjectName.onkeydown = subjectName.onblur = subjectName.onkeyup = function () {
        validatesubjectNameQueries();
      }
    }

    if (submitContctForm) {

      submitContctForm.addEventListener('click', function (event) {
        event.preventDefault();
        if (!validateFirstNameQueries() || !validatelastNameQueries() || !validatecontactEmailQueries() || !validatesubjectNameQueries() || !validatePhoneNumberQueries()) {


        } else {

          var modalClose = document.getElementById('modal-contact-us');
          modalClose.click();
          $('#modal-thanku').modal('show');
          contactFormWrapper.reset();
        }

        return false;

      });
    }

  }, false);

})();