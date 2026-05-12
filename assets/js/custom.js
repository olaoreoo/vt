/**
 * Template Name: Creativo
 */

(function () {
  ("use strict");
  /**
   * Begining of custom scripts
   */
  function load_menu() {
    // let tbl_cont = document.getElementById("navmenu");
    const tbl_cont = $("#navmenu");
    const posturl = "components/nav.html";
    tbl_cont.load(posturl);
    return;
  }
  load_menu();

  function load_footer() {
    // let tbl_contw = document.getElementById("footer");
    const tbl_cont = $("#footer");
    const posturl = "components/footer.html";
    tbl_cont.load(posturl);
    return;
  }
  load_footer();

  function load_services() {
    // let tbl_contw = document.getElementById("footer");
    const tbl_cont = $("#services");
    const posturl = "components/services.html";
    tbl_cont.load(posturl);
    tbl_cont.removeClass("hide");
    return;
  }
  // load_services();

  function load_testimonials() {
    // let tbl_contw = document.getElementById("footer");
    const tbl_cont = $("#testimonials");
    const posturl = "components/testimonials.html";
    tbl_cont.load(posturl);
    tbl_cont.removeClass("hide");
    return;
  }
  // load_testimonials();

  function load_teams() {
    const tbl_cont = $("#teams");
    const posturl = "components/teams.html";
    tbl_cont.load(posturl);
    tbl_cont.removeClass("hide");
    return;
  }
  // load_teams();

  function load_pricing() {
    const tbl_cont = $("#pricing");
    const posturl = "components/pricing.html";
    tbl_cont.load(posturl);
    tbl_cont.removeClass("hide");
    return;
  }
  // load_pricing();

  function load_faq() {
    const tbl_cont = $("#faq");
    const posturl = "components/faq.html";
    tbl_cont.load(posturl);
    tbl_cont.removeClass("hide");
    return;
  }
  // load_faq();

  function load_whyus() {
    const tbl_cont = $("#why-us");
    const posturl = "components/why-us.html";
    tbl_cont.load(posturl);
    tbl_cont.removeClass("hide");
    return;
  }
  // load_whyus();

  function load_about() {
    const tbl_cont = $("#about");
    const posturl = "components/about.html";
    tbl_cont.load(posturl);
    tbl_cont.removeClass("hide");
    return;
  }
  // load_about();

  // export { load_footer, load_services };
})();
