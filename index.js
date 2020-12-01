const display = document.getElementById("display")
const sotre_container = document.getElementById("container")
const submit_form = document.getElementById("form")

display.addEventListener("click", () => {

    fetch("http://localhost:3000/stores").then(function(res) {
            return res.json()
        })
        .then(function(stores) {
            console.log(stores)
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
    sotre_container.innerHTML = ''
})


const handleForm = (e) => {
    e.preventDefault()
    console.log(e.target)
}

submit_form.addEventListener("submit", handleForm);