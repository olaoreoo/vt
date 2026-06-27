
const company_data = async (item) => {
  const fetch_url = "./assets/data/numbers.json";
  try {
    const res = await fetch(fetch_url);
    const data = await res.json();

    if (res.ok) {
      const result = data[item];
      // console.log(item, result);
      return result;
    }
  } catch (error) {
    console.error(error);
  }
};

document.querySelector("#name").innerHTML = company_data("age");
