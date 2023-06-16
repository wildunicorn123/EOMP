let cookies = [];


function addPerson (){
    let koek = {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        id: document.getElementById('id').value,
    };
    
    cookies.push(koek);
    console.log(cookies)

   

}

let showKoek = document.getElementById('table');

    function print(){
        showKoek.innerHTML = '';
        cookies.forEach((data) =>{
            showKoek.innerHTML +=`
            <tr class="row">
            <td>${data.name}</td>
            <td>${data.price}</td>
            <td>${data.id}</td> 
            </tr>
            `
        })
    };