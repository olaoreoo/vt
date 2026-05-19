/**
 * Template Name: Creativo
 * Template URL: https://bootstrapmade.com/creativo-bootstrap-creative-agency-template/
 * Updated: Mar 23 2026 with Bootstrap v5.3.8
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  "use strict";

  $(document).on("click", "#frm_inquiry .btn-submit ", function (e) {
    // e.preventDefault();
    console.log("[submit] new Inquiry");

    const thisForm = $("#frm_inquiry");

    try {
      console.log("[validate] new Inquiry");

      var msg_loading = $(".loading");
      var msg_error = $(".error-message");
      var msg_sent = $(".sent-message");

      msg_loading.removeClass("hide_ele");
      var posturl = "forms/contact_2.php";

      // $("#frm_contact").validate({
      thisForm.validate({
        // validator settings

        // Specify validation rules
        rules: {
          name: {
            required: true,
          },
          email: {
            required: true,
          },
          subject: {
            required: true,
          },
          message: {
            required: true,
          },
        },
        // Specify validation error messages
        message: {
          name: {
            required: "Please give us your nsme.",
          },
          email: {
            required: "Please select a Department?",
          },
          subject: {
            required: "Please enter a Subject?",
          },
          message: {
            required: "Please enter a message?",
          },
        },

        // in the "action" attribute of the form when valid
        submitHandler: function (thisForm, e) {
          console.log("[validated] new Message");

          // Serialize the form data.
          var formData = $(thisForm).serialize();
          var posturl = "forms/contact2.php";

          $.ajax({
            type: "POST",
            url: posturl,
            data: formData,
            cache: false,
            dataType: "JSON",
          }).done(function (response) {
            if (response) {
              console.log("[received] Response");

              if (response.success_db === "success") {
                console.log("[response] Successfull");
                msg_loading.addClass("hide_ele");
                msg_error.addClass("hide_ele");
                msg_sent.removeClass("hide_ele");
                msg_sent.text(response.message_db);
                thisForm.reset();
                return;
              } else {
                msg_sent.addClass("hide_ele");
                msg_loading.removeClass("hide_ele");
                msg_error.removeClass("hide_ele");
                msg_error.text(response.message_db);
                console.log("[response] Response Error");
                return;
              }
            } else {
              msg_sent.addClass("hide_ele");
              msg_loading.addClass("hide_ele");
              msg_error.removeClass("hide_ele");
              msg_error.text(response.message_db);
              console.log("[response] Unknown Error");
              return;
            }
          });
        },
      });
    } catch (e) {
      msg_sent.addClass("hide_ele");
      msg_loading.addClass("hide_ele");
      msg_error.removeClass("hide_ele");
      msg_error.text("Error. Something went wrong");
      console.log("[response] Server Error");
      return;
    }
  });
})();
