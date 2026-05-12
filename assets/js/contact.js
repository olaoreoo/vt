/**
 * Template Name: Creativo
 * Template URL: https://bootstrapmade.com/creativo-bootstrap-creative-agency-template/
 * Updated: Mar 23 2026 with Bootstrap v5.3.8
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  "use strict";

  $(document).on("click", "#frm_contact .btn-submit ", function (e) {
    // e.preventDefault();


try {
      console.log("[submit] new Message");
      let thisForm = "#frm_contact";
      var msg_error = $(".error-message");
      var msg_sent = $(".sent-message");
      var msg_loading = $(".loading");
      msg_loading.removeClass("hide_ele");

      // $("#frm_contact").validate({
      $(thisForm).validate({
        // validator settings

        // Specify validation rules
        rules: {
          name: {
            required: true,
          },
          msgInit: {
            required: true,
          },
          msgSubject: {
            required: true,
          },
          msgContent: {
            required: true,
          },
        },
        // Specify validation error messages
        messages: {
          name: {
            required: "Please select a User?",
          },
          msgInit: {
            required: "Please select a Department?",
          },
          msgSubject: {
            required: "Please enter a Subject?",
          },
          msgContent: {
            required: "Please enter a message?",
          },
        },

        // in the "action" attribute of the form when valid
        submitHandler: function (form, e) {
          console.log("[processing] new Message");
          msg_loading.removeClass("hide_ele");

          // Serialize the form data.
          var formData = $(form).serialize();
          var posturl = "forms/contact_2j.php";
          // return;

          $.ajax({
            type: "POST",
            url: posturl,
            data: formData,
            cache: false,
            dataType: "JSON",
          }).done(function (response) {
            if (response) {
              console.log("[received] Response");
              console.log(response);
              if (response.success_db === "success") {
                console.log("[response] Successfull");
                msg_loading.addClass("hide_ele");

                var frmMessages = $(msg_sent);
                $(frmMessages).removeClass("hide_ele");
                $(frmMessages).text(" Your message has been sent. Thank you!");
                $(frmMessages).append(response.message_db);
              } else {
                msg_loading.removeClass("hide_ele");
                console.log("[response] Error");
                var frmMessages = $(msg_error);
                frmMessages.removeClass("hide_ele");
                $(frmMessages).addClass("error");
                $(frmMessages).text(response.nofity_error);
                $(frmMessages).text("There has been an error");
              }
            } else {
              msg_loading.removeClass("hide_ele");
              console.log("[response] Error");
              var frmMessages = $(msg_error);
              frmMessages.removeClass("hide_ele");
              $(frmMessages).addClass("error");
              $(frmMessages).text(response.nofity_error);
              $(frmMessages).text("There has been an error");
            }
          });
        },
      });

} catch (error) {
                msg_loading.removeClass("hide_ele");
                console.log("[response] Error");
                console.log(error);
                var frmMessages = $(msg_error);
                frmMessages.removeClass("hide_ele");
                $(frmMessages).addClass("error");
                $(frmMessages).text(response.nofity_error);
                $(frmMessages).text("There has been an error");
}









  });
})();
