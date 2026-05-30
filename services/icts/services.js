import { load_header, load_servicedata, load_footer } from "../services.js";
$().ready(function () {

  load_header();
  load_footer();
  load_servicedata();

      function load_stafftest() {
        const tbl_cont = $(".client-feedback");
        const posturl = "../../components/stafftest.html";
        tbl_cont.load(posturl);
        return;
      }
      load_stafftest();
});