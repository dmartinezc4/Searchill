var resultList = document.getElementById('results');
var filter = document.getElementById('search-input');
var searcher = document.getElementById('search-form');

// filter.addEventListener('keyup', filterItems);
searcher.addEventListener('submit', addItem);

// coger los datos de MedlinePlus API
const diabetes = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=250&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const resfriado = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=460&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';

function illness(link, description){
    var enf = {
        link: link,
        description: description
    };
    return enf;
}

async function getData(enfermedad){
    if(enfermedad === 'diabetes'){
        const response = await fetch(diabetes);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                                  substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'resfriado'){
        const response = await fetch(resfriado);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }
}

// addItem se hara con la API
function addItem(e){
    e.preventDefault();

    var to_search = filter.value.toLowerCase();

    const promise1 = Promise.resolve(getData(to_search));
    var newItem = promise1.then(function(value){
        console.log(value);
        
        // crear aqui el li con value

        var li = document.createElement('li');
        var a = document.createElement('a');
        var br = document.createElement('br');
        var link = document.createTextNode(to_search);
        var desc = document.createTextNode(value.description);
        a.appendChild(link);
        a.title = to_search;
        a.href = value.link;
        a.style.color = "#034f84";
        li.className = 'list-group-result';
        li.style.marginBottom = '20px';
        li.appendChild(a);
        li.appendChild(br);
        li.appendChild(desc);
        resultList.appendChild(li);
    })
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
