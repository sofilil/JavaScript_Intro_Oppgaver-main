const users = [

    {name: "Trude", age: 45},
    {name: "Simen", age: 25},
    {name: "Lars", age: 32},
    {name: "Ali", age: 29},
    {name: "Finn", age: 67},
    {name: "Kåre", age: 74},
    {name: "Hanne", age: 43},
    {name: "Åse", age: 91},
    {name: "Anne", age: 14},
    {name: "Amanda", age: 19},
    {name: "Morgan", age: 58},
];

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const filterBtn = document.getElementById("filter");
const userList = document.getElementById("users");

const createUsers = () => {
    users.map(user=>{
        const {name, age} = user;

        let li = document.createElement("li");
        li.innerHTML = `Navn: ${name} - Alder: ${age}`;
        userList.appendChild(li);

    })
}

createUsers();


    const handleFilter = () =>{
        userList.innerHTML = "";
        let age = ageInput.value;
        let userByAge = users.filter(user=>user.age >= age);
        userByAge.map(user=>{

            const {name, age} = user;
            let li = document.createElement("li");
            li.innerHTML = `Name: ${name} - Age: ${age}`;
            userList.appendChild(li);
        });


    }

    const handleSearch = (e) => {
        userList.innerHTML = "";
        let getUser = users.filter(user =>user.name.toLowerCase().includes(e.target.value.toLowerCase()));

        getUser.map(user =>{
            const {name, age} = user;
            let li = document.createElement("li");
            li.innerHTML = `Name: ${name} - Age:${age}`
            userList.appendChild(li);
        });

    }

nameInput.addEventListener("keypress", handleSearch);
filterBtn.addEventListener("click", handleFilter);