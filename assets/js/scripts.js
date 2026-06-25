// using fetch

const company_data = async () => {
  const fetch_url = "./assets/data/numbers.json";
  try {
    const res = await fetch(fetch_url);
    const data = await res.json();

    if (res.ok) {
      // console.log(data);
      const responseTime = data.responseTime;
      console.log(responseTime);
      return responseTime;
    }
  } catch (error) {
    console.error(error);
    // console.log("There was an error! ");
  }
};

company_data();