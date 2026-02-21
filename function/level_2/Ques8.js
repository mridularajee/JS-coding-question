// API response se sirf required fields extract kare

function resApi(data){
    debugger;
    return data.map(user=>({
        id: user.id,
        name: user.Name
    }));
       
}

const users = [{
    id:1,
    Name:"Mridula",
    Address:"Delhi"
},
{
    id:2,
    Name:"Ritu",
    Address:"Kanpur"
    }
]
console.log(resApi(users))
