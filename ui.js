function UI(){

}

UI.prototype.addCar = function(car){
    const list = document.getElementById('cars');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td><img src="${car.url}" class="img-fluid img-thumbnail"></td>
    <td>${car.title}</td>
    <td>${car.price}</td>
    <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
    `;
    list.appendChild(row);
}

UI.prototype.clearInputs = function(titleElement,priceElement,imageElement){
    titleElement.value = '';
    priceElement.value = '';
    imageElement.value = '';
}