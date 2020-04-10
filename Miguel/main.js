var resultList = document.getElementById('results');
var filter = document.getElementById('search-input');

filter.addEventListener('keyup', filterItems);

// addItem se hara con la API
function addItem(e){

}

// función para filtrar la busqueda
function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = resultList.getElementsByTagName('li');
    console.log(1);

    // converir htmlCollection a array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}
