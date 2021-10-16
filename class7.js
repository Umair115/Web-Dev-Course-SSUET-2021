areas = ['shop','ghar']
var phone_book = {
    "Umair_shop" : "41",
    "Umair_ghar" : "0343127954541",
    "Ammar" : "25402451014",
    "Riaz" : "14571325451"
}
var user = {
    name : "Umair",
    age :    24
}
console.log(phone_book);
console.log(phone_book.Ammar);
// console.log(phone_book[user.name+"_"+areas[0]]);
console.log(phone_book['Ammar'])

var user_data = {
    "results": [
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Hanaé",
                "last": "Picard"
            },
            "location": {
                "street": {
                    "number": 4300,
                    "name": "Quai Charles-De-Gaulle"
                },
                "city": "Asnières-sur-Seine",
                "state": "Corrèze",
                "country": "France",
                "postcode": 78663,
                "coordinates": {
                    "latitude": "0.9678",
                    "longitude": "39.8055"
                },
                "timezone": {
                    "offset": "+7:00",
                    "description": "Bangkok, Hanoi, Jakarta"
                }
            },
            "email": "hanae.picard@example.com",
            "login": {
                "uuid": "6c7d6512-cde4-4d93-b0f7-c6ef7515d683",
                "username": "heavypeacock463",
                "password": "wibble",
                "salt": "24s1KnSa",
                "md5": "0689a6b564d1c1e1c48c968f47d79c80",
                "sha1": "31aea5a539ab69af04e4c5f4920d83bc594ac887",
                "sha256": "4dbb3712fe17eec53830347c79c6a00da801f3ccc7dd4e3973a4de9a8318064a"
            },
            "dob": {
                "date": "1994-08-05T08:54:10.961Z",
                "age": 27
            },
            "registered": {
                "date": "2018-08-29T16:16:08.350Z",
                "age": 3
            },
            "phone": "02-03-83-51-80",
            "cell": "06-91-84-52-89",
            "id": {
                "name": "INSEE",
                "value": "2NNaN82308605 15"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/47.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/47.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/47.jpg"
            },
            "nat": "FR"
        },
    ],
    "info": {
        "seed": "4857f94f17e2e9de",
        "results": 1,
        "page": 1,
        "version": "1.3"
    }
}
console.log(user_data.results[0].name.first)
// var chair = {
//     legs = 4,
//     long_back = false,
//     updateLegs = function (){

//     },

// }