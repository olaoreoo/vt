export function load_header() {
  const tbl_cont = $("#header");
  var posturl = "../assets/header.html";
  tbl_cont.load(posturl);
  console.log("header loaded");
  return;
}

export function load_servicedata() {
  const tbl_cont = $("#service-details");
  var posturl = "index2.html";
  tbl_cont.load(posturl);
  console.log("service data loaded");
  return;
}

export function load_footer() {
  const tbl_cont = $("#footer");
  var posturl = "../../components/footer.html";
  tbl_cont.load(posturl);
  console.log("loaded - footer");
  return;
}
