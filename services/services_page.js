export function load_header() {
  const tbl_cont = $("#header");
  var posturl = "assets/header.html";
  tbl_cont.load(posturl);
  console.log(" service header loaded");
  return;
}

export function load_footer() {
  const tbl_cont = $("#footer");
  var posturl = "../components/footer.html";
  tbl_cont.load(posturl);
  console.log("loaded - service footer");
  return;
}

export function load_whyus() {
  const tbl_cont = $("#why-us");
  const posturl = "../components/why-us.html";
  tbl_cont.load(posturl);
  tbl_cont.removeClass("hide");
  return;
}

export function load_services() {
  const tbl_cont = $("#services");
  const posturl = "../components/services.html";
  tbl_cont.load(posturl);
  tbl_cont.removeClass("hide");
  return;
}

export function load_testimonials() {
  // let tbl_contw = document.getElementById("footer");
  const tbl_cont = $("#testimonials");
  const posturl = "../components/testimonials.html";
  tbl_cont.load(posturl);
  tbl_cont.removeClass("hide");
  return;
}
