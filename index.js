const u1 = {
    "results": [
        {
            "gender": "female",
            "name": {
                "title": "ms",
                "first": "syeda",
                "last": "faassen"
            },
            "location": {
                "street": "3867 leidsekade",
                "city": "dalfsen",
                "state": "friesland",
                "postcode": 41400
            },
            "email": "syeda.faassen@example.com",
            "login": {
                "username": "whitelion413",
                "password": "funny",
                "salt": "RLNzT38w",
                "md5": "3df5973d77439d77e7702dcebb3eb114",
                "sha1": "873559335b4e9fce5772f93bc2fe16402d298e80",
                "sha256": "045a19f0a63524d81fc7b1ebb9c23c5c5e36180575112430407b0281596dfe5e"
            },
            "dob": "1988-07-01 06:22:00",
            "registered": "2008-09-10 21:08:54",
            "phone": "(615)-799-3425",
            "cell": "(071)-883-6680",
            "id": {
                "name": "BSN",
                "value": "41631983"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/95.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/95.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/95.jpg"
            },
            "nat": "NL"
        }
    ],
    "info": {
        "seed": "5a86e3cda4009133",
        "results": 1,
        "page": 1,
        "version": "1.1"
    }
};
const u2 = {
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "naod",
                "last": "barbosa"
            },
            "location": {
                "street": "7196 rua santa catarina ",
                "city": "belo horizonte",
                "state": "são paulo",
                "postcode": 68006
            },
            "email": "naod.barbosa@example.com",
            "login": {
                "username": "orangecat335",
                "password": "theboss",
                "salt": "zAToBGmf",
                "md5": "344f2a70154351510f18e24ae05b703b",
                "sha1": "c6a92217d8756da333e8e8d37ae21b9fd8bcac1e",
                "sha256": "806c2e66e9a4e1e59a05475f74e655173314c910bd350aa99d41d75e68b56567"
            },
            "dob": "1966-12-10 21:46:08",
            "registered": "2010-09-10 18:54:33",
            "phone": "(76) 3841-6729",
            "cell": "(31) 9361-4476",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/78.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/78.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/78.jpg"
            },
            "nat": "BR"
        }
    ],
    "info": {
        "seed": "d1582e1448f8f933",
        "results": 1,
        "page": 1,
        "version": "1.1"
    }
};
const u3 = {
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "ایلیا",
                "last": "رضایی"
            },
            "location": {
                "street": "6557 آیت‌الله مدنی",
                "city": "سنندج",
                "state": "زنجان",
                "postcode": 66420
            },
            "email": "ایلیا.رضایی@example.com",
            "login": {
                "username": "whitepeacock256",
                "password": "shirley",
                "salt": "190KXSJN",
                "md5": "1677c19ff7c7bf7e2ef70323e6d11006",
                "sha1": "817a53feacc37d62babbb0962f6c7d5f803b3b05",
                "sha256": "a4bbbcef8ab2611a7df96253c20874d3518a56a98e89baef7c5f40e03b76f3e9"
            },
            "dob": "1959-03-05 22:17:15",
            "registered": "2004-11-30 16:21:50",
            "phone": "002-93745717",
            "cell": "0948-055-7882",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/29.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/29.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/29.jpg"
            },
            "nat": "IR"
        }
    ],
    "info": {
        "seed": "090ee8ffc0dbcc8c",
        "results": 1,
        "page": 1,
        "version": "1.1"
    }
};


const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', function (request, response) {
    response.send('Hello Avans!');
});
app.get('/about', function (request, response) {
    response.send('Written by Bart');
});
app.post('/', function (request, response) {
    response.send('Hello Avans, POST request received!');
});
app.put('/', function (request, response) {
    response.send('Hello Avans, PUT request received!');
});
app.get('/api', function (request, response) {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            response.json(u1);
            break;
        case 1:
            response.json(u2);
            break;
        case 2:
            response.json(u3);
            break;
    }
});
app.all('*', function (request, response) {
    response.status(404);
    response.send('404 - Not found');
});

app.listen(port, function () {
    console.log('Server app is listening on port 3000');
});
