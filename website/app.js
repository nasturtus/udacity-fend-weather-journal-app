const API_KEY = "90f59b6085a213889aaba333b9ce58ca";
const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const units = "metric";

const getData = async (e) => {
  e.preventDefault();
  //   extract values from form fields
  const zip = document.querySelector("#zip").value;
  const feelings = document.querySelector("#feelings").value;
  //   construct url
  const url = `${baseURL}${zip},us&appid=${API_KEY}&units=${units}`;
  //   fetch api data
  const response = await fetch(url);

  try {
    const data = await response.json();

    // Extract epoch time and convert it into current date and time (string)
    let dateTime = String(new Date(data.dt * 1000));
    // Extract only the part up to (and including) year
    let index = dateTime.indexOf(":");
    dateTime = dateTime.slice(0, index - 3);
    // Extract temperature
    const temperature = data.main.temp;
    // Send to postData to push to server
    postData("/addLatestData", {
      date: dateTime,
      temperature: temperature,
      content: feelings,
    });
  } catch (err) {
    console.log("Error in getData: ", err);
  }
};

const postData = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const latestData = await response.json();
    console.log("Latest data received from server");
    console.log(latestData);
    updateUI();
  } catch (err) {
    console.log("Error in postData: ", err);
  }
};

const updateUI = async () => {
  const response = await fetch("/getLatestData");

  try {
    data = await response.json();
    document.querySelector("#date").innerHTML = data.date;
    document.querySelector(
      "#temp"
    ).innerHTML = `Temperature (celsius): ${data.temperature}`;
    document.querySelector(
      "#content"
    ).innerHTML = `I am feeling: ${data.content}`;
  } catch (err) {
    console.log("Error in updateUI: ", err);
  }
};

document.querySelector("#generate").addEventListener("click", getData);
