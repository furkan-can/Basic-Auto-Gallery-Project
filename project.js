const form = document.getElementById('car-form');
const titleElement = document.getElementById('title');
const priceElement = document.getElementById('price');
const imageElement = document.getElementById('url');

//Start of UI Class

const ui = new UI();

//Load all events

eventListeners();

function eventListeners(){
    form.addEventListener('submit',addCar);
    //document.addEventListener('DOMContentLoaded',loadAllCars);
    //document.querySelector('#cars').addEventListener('click',deleteCar);
}

function addCar(e){
    const title = titleElement.value;
    const price = priceElement.value;
    const url = imageElement.value;
    if(title === '' || price === '' || url === ''){
        ui.showAlert('Please fill in all fields','danger');
    }else{
        const car = new Car(title,price,url);
        ui.addCar(car);
        ui.showAlert('Car Added','success');
    }
    ui.clearInputs(titleElement,priceElement,imageElement);
    e.preventDefault();
}