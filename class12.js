

fetch('https://api.randomuser.me/')
    .then(response => response.json())
    .then(data => {
        var _name = data['results'][0]['name']['title'] + 
        " " + data['results'][0]['name']['first'] + 
        " " + data['results'][0]['name']['last'];
        document.getElementById('name').innerHTML = _name
        document.getElementById('image')
        .setAttribute('src', data['results'][0]['picture']['large'])
    })
    .catch(e => console.log(e))


   