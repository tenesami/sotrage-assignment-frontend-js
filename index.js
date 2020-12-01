fetch("http://localhost:3000/stores").then(function(res) {
        return res.json()
    })
    .then(function(stores) {
        console.log(stores)
        stores.forEach(function(list) {
            const new_list = document.createElement('h3')
            new_list.innerText = list.item
            document.body.appendChild(new_list)

            const new_discr = document.createElement('p')
            new_discr.innerText = list.description
            document.body.appendChild(new_discr)

        });

    });