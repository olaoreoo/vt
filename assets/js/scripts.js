// using fetch
// const fetch_url = "http://localhost:81/bizadmin/api/api.clients.php/";
const fetch_url = "http://localhost:81/vt/assets/data/company.json";

const company_data = async () => {
// async () => {
  try {
    const res = await fetch(fetch_url);
    const data = await res.json();
    const fname =  data.name;
    const address = data.address;
    const phone = data.phone;

    if (res.ok) {
      console.log(data);
      // return data;
    }
    $("#name").html(fname + " : ");
    $("#name").append(address + " : ");
    $("#name").append(phone + " ");
  } catch (error) {
     console.log(error);
    console.log("There was an error! ");
  }


};

company_data();
