

function createElements(zip) {

    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=369d23ad5471bf036f577bbec69ebdd3`;

    axios.get(url)

        .then(function (response) {
            document.getElementById("Temperature").innerText = `It is now ${response.data.main.temp}°Kelvin`
            console.log(response.data.main.temp);
        })

        .catch(function (error) {
            console.log(error);
        })

        .then(function () {
            console.log("all done");
        });
    }