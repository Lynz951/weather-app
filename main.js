
document.body.onload = createElements;

var root = document.getElementById('root');  

let ul = document.getElementById('root');

var button = document.createElement('input');
button.type = 'button';
button.id = 'submit';
button.value = 'Submit';
button.className = 'btn';
button.classList = 'toggle("bg-rose")';
 
    button.onclick = function() {
        const zip = document.getElementById("zipCodeInput").value;
        console.log("zipcode",zip);
        createElements(zip);
    };
 
    var container = document.getElementById('root');
    container.appendChild(button);


function createElements(zip) {

    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=369d23ad5471bf036f577bbec69ebdd3`;
    

    axios.get(url)

        .then(function (response) {

            
            const root = document.getElementById('root');
            const currentDiv = document.getElementById("root");
            document.body.insertBefore(root, currentDiv);

            const weatherIcon = response.data.weather[0].icon;
            const pageIcon = document.createElement('img');

            const header = document.createElement('h1');


            let iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            pageIcon.src = iconUrl;

            createListItem('li', `City: ${response.data.name}`);
            createListItem('li', `Temperature: ${Math.round(response.data.main.temp)}°Kelvin OR ${Math.round((response.data.main.temp) - 273)}°Celsius OR ${Math.round((((response.data.main.temp)-273.15)*1.8)+32)}°Farenheit`);
            createListItem('li', `Conditions: ${response.data.weather[0].description}`);
            root.appendChild(pageIcon);

            createListItem(tag, text);
        })

        .catch(function (error) {
            console.log(error);
            innerText = error;
        })

        .then(function () {
            console.log("all done");
        });
    }

function createListItem(tag, text) {
    let list = document.createElement(tag);
    list.textContent = text;
    list.classList.add('list-striped');
    ul.appendChild(list);
    
}

function prettyPage (){
    //create element
const input = document.createElement('input');
const instr = document.createElement('div');
    //set attributes on element
input.setAttribute('id', 'zipCodeInput');
input.setAttribute('type', 'text')
input.classList.add('text-center');
instr.setAttribute('type', 'text');
instr.setAttribute('id', 'instr');
instr.classList.add('text-center');

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