const company_data = async () => {
    const fetch_url = "http://localhost:81/bizadmin/api/api.clients.php/";
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