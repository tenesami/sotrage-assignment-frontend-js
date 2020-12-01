const display = document.getElementById("display")
const sotre_container = document.getElementById("container")
const submit_form = document.getElementById("form")

//display.addEventListener("click", () => {

fetch("http://localhost:3000/stores").then(function(res) {
        return res.json()
    })
    .then(function(stores) {
        //console.log(stores)
        stores.forEach(function(list) {
            const new_list = document.createElement('h3')
            new_list.innerText = list.item
            sotre_container.appendChild(new_list)

            const new_discr = document.createElement('p')
            new_discr.innerText = list.description
            sotre_container.appendChild(new_discr)
        });

    });
//clear out the button after one click
// sotre_container.innerHTML = ''
//})

/* more about fetch and create I refers MDN web docs 
https://developer.mozilla.org/en-US/search?q=using+fetch
*/
//fetch store api create the item in the store 
const createStore = (storeAtt) => {
    return fetch("http://localhost:3000/stores", {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(storeAtt),
    })
}

const handleForm = (e) => {
    e.preventDefault()
        //console.log(e.target)
    debugger;
    createStore({
        store: {
            item: e.target.item,
            description: e.target.description
        },
    })

}

submit_form.addEventListener("submit", handleForm);