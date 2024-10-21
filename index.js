// Add your code here
function submitData(name,email){
    return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'    
        },
        body: JSON.stringify({name: name, email: email}),
    })
    .then((resp) => resp.Json())
    .then((data) => {
        document.querySelector('body').append(data.id)
    })
    .catch((err) => {
        alert('Error:Wrong')
        document.querySelector('body').append(err.message)
    })
}
