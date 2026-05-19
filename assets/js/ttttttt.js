const fetch_url = "http://localhost:81/bizadmin/api/api.clients.php/";
const company_data = async () => {
  // async () => {
  try {
    const res = await fetch(fetch_url);
    const data = await res;
    const tdata = await data.json();
    console.log(tdata);
    return tdata;
  } catch {

  }

};
company_data();