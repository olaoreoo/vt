import { load_header, load_servicedata, load_footer } from "../services.js";
$().ready(function () {

  load_header();
  load_footer();
  load_servicedata();
});