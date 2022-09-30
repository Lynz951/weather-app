
document.body.onload = createElements;

var container = document.getElementById('root');
var root = document.getElementById('root');  
let ul = document.getElementById('root');
var button = document.createElement('input');

root.textContent = 'My Weather App';
root.style.backgroundColor = '#C1F4FA';
root.style.justifyContent = 'center';
root.style.width = '400px';
root.style.height = '900px';
root.style.fontSize = '20px';
root.style.paddingBlock = '30px';


button.type = 'button';
button.id = 'submit';
button.value = 'Submit';
button.className = 'btn';
button.classList = 'toggle("bg-rose")';

 
button.onclick = function() {
    const zip = document.getElementById("zipCodeInput").value;
    createElements(zip);
    };
 container.appendChild(button);

function createListItem(tag, text) {
    let list = document.createElement(tag);
    list.textContent = text;
    list.classList.add('list-striped');
    ul.appendChild(list); 
}

function createElements(zip) {
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=369d23ad5471bf036f577bbec69ebdd3`;
    
    axios.get(url)

        .then(function (response) {

            const currentDiv = document.getElementById("root");
            document.body.insertBefore(root, currentDiv);
            const weatherIcon = response.data.weather[0].icon;
            const pageIcon = document.createElement('img');
            let iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            pageIcon.src = iconUrl;

            createListItem('li', `City: ${response.data.name}`);
            createListItem('li', `Temperature in Kelvin: ${Math.round(response.data.main.temp)}°`);
            createListItem('li', `Temperature in Celsius: ${Math.round((response.data.main.temp) - 273)}°`);
            createListItem('li', `Temperature in Farenheit: ${Math.round((((response.data.main.temp)-273.15)*1.8)+32)}°`);
            createListItem('li', `Conditions: ${response.data.weather[0].description}`);
            
            root.appendChild(pageIcon);
            createListItem(tag, text);
        })

        .catch(function (error) {
            // document.getElementById("instr").innerText = "Error, invalid zipcode.";
            console.log(error);
        })

        .then(function () {
            console.log("all done");
        });
    }

function prettyPage (){
    //create element
    const input = document.createElement('input');
    const instr = document.createElement('div');

    //set attributes on element
    input.setAttribute('id', 'zipCodeInput');
    input.setAttribute('type', 'text');
    input.classList.add('text-center');
    instr.setAttribute('type', 'text');
    instr.setAttribute('id', 'instr');

    //set styles on element
    instr.style.color = 'black';

    //add text content to element
    input.textContent = 'Enter Zipcode Here';
    instr.textContent = 'Enter Zipcode and then press Submit';

    //add element to DOM
    const root = document.getElementById('root');
    root.appendChild(input);
    root.appendChild(instr);
}
prettyPage();