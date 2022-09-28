

function createElements(zip) {

    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=369d23ad5471bf036f577bbec69ebdd3`;

    axios.get(url)

        .then(function (response) {
            document.getElementById("Temperature").innerText = `It is now ${response.data.main.temp}°Kelvin`
            //console.log(response.data.main.temp);
        })

        .catch(function (error) {
            const tempElement = document.getElementById("Temperature");
            tempElement.innerText = error;
            tempElement.style.color = "red";
            console.log(error);
        })

        .then(function () {
            console.log("all done");
        });
    }

window.onload = function() {
    document.getElementById("sendButton").onclick = function() {
        //get zip from text field
        const zip = document.getElementById("zipCodeInput").value;
        //call 
        createElements(zip);
    }
}