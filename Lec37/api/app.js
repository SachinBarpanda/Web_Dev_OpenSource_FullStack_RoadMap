let JsonData = `[
    {
        "id":1,
        "name":"Janki",
        "occupation":"software Developer",
        "address":[]
    },
    {
        "id":2,
        "name":"Ajay",
        "occupation" : "DevOps",
        "address":[
            {
                "addressid":1,
                "city":"Delhi",
                "country":"Bharat"
            }
        ]
    }
]`

let obj = JSON.parse(JsonData);
console.log(obj[0].occupation);

let str = JSON.stringify(obj[0].occupation);
console.log(str);