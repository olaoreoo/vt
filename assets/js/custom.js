("use strict");
/**
 * Begining of custom scripts
 */


export function load_header() {
  const tbl_cont = $("#header");
  const posturl = "./components/header.html";
  tbl_cont.load(posturl);
  return;
}

// export function load_menu() {
//   const tbl_cont = $("#navmenu");
//   const posturl = "components/nav_root.html";
//   tbl_cont.load(posturl);
//   return;
// }

export function load_footer() {
  // let tbl_contw = document.getElementById("footer");
  const tbl_cont = $("#footer");
  const posturl = "components/footer.html";
  tbl_cont.load(posturl);
  return;
}

export function load_services() {
  // let tbl_contw = document.getElementById("footer");
  const tbl_cont = $("#services");
  const posturl = "components/services.html";
  tbl_cont.load(posturl);
  tbl_cont.removeClass("hide");
  return;
}

export function load_testimonials() {
  // let tbl_contw = document.getElementById("footer");
  const tbl_cont = $("#testimonials");
  const posturl = "components/testimonials.html";
  tbl_cont.load(posturl);
  tbl_cont.removeClass("hide");
  return;
}

export function load_team() {
  const tbl_cont = $("#team");
  const posturl = "components/team.html";
  tbl_cont.load(posturl);
  tbl_cont.removeClass("hide");
  return;
}

export function load_pricing() {
  const tbl_cont = $("#pricing");
  const posturl = "components/pricing.html";
  tbl_cont.load(posturl);
  tbl_cont.removeClass("hide");
  return;
}

export function load_faq() {
  const tbl_cont = $("#faq");
  const posturl = "components/faq.html";
  tbl_cont.load(posturl);
  tbl_cont.removeClass("hide");
  return;
}

export function load_whyus() {
  const tbl_cont = $("#why-us");
  const posturl = "components/why-us.html";
  tbl_cont.load(posturl);
  tbl_cont.removeClass("hide");
  return;
}

export function load_about() {
  const tbl_cont = $("#about");
  const posturl = "components/about.html";
  tbl_cont.load(posturl);
  tbl_cont.removeClass("hide");
  return;
}
export function load_contact() {
  const tbl_cont = $("#contact");
  const posturl = "components/contact.html";
  tbl_cont.load(posturl);
  tbl_cont.removeClass("hide");
  return;
}