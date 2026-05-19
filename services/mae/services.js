$().ready(function () {
      function load_header() {
        const tbl_cont = $("#header");
        var posturl = "../assets/header.html";
        tbl_cont.load(posturl);
        console.log("user list loaded");
        return;
      }
      load_header();

      function load_servicedata_tbl() {
        const tbl_cont = $("#service-details");
        var posturl = "index2.html";
        tbl_cont.load(posturl);
        console.log("user list loaded");
        return;
      }
      load_servicedata_tbl();

      function load_footer() {
        const tbl_cont = $("#footer");
        var posturl = "../../components/footer.html";
        tbl_cont.load(posturl);
        console.log("loaded - footer");
        return;
      }
      load_footer();

});