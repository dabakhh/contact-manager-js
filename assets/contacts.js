// Available contacts (objects)
let contact1 = {
    first_name: "Abdou Aziz",
    name: "DIOP",
    age: 21,
    mail: "dabakh@gmail.com",
    tel: 783013644
};
let contact2 = {
    first_name: "Fatou",
    name: "CISSE",
    age: 21,
    mail: "fatou@gmail.com",
    tel: 775066822
};
let contact3 = {
    first_name: "Mouhamed Lamine",
    name: "DIOP",
    age: 23,
    mail: "lamine@gmail.com",
    tel: 772565136
};
let contact4 = {
    first_name: "Gnagna",
    name: "CAMARA",
    age: 22,
    mail: "gnagna@gmail.com",
    tel: 776308271
};

// Contacts array
let contactArray = [contact1, contact2, contact3, contact4];

// 1 - Add contact

// Function which create contact
function createContact() {        
    alert("Vous êtes entrain d'ajouter un contact.");
    let contactX = {
    first_name: prompt("Entrer votre prénom: "),
    name: prompt("Entrer votre nom: "),
    age: +prompt("Entrer votre âge: "), // Return NAN if the string is invalid
    mail: prompt("Entrer votre mail: "),
    tel: +prompt("Entrer votre numéro de téléphone: ") // Return NAN if the string is invalid
    };
    console.log("Contact successfully created!👇")
    console.log(contactX);
    return contactX; //return the contact as an object 
}
// Function which add contact in the contactArray
function addContact(table, fonction) {
    table.push(fonction);
};

// Select the button for calling it
const callButton = document.querySelector("#create"); 
callButton.addEventListener("click", () => {
        callButton.style.backgroundColor="yellow";
    addContact(contactArray, createContact());
    });

// 2 - Show contacts
function showContacts() {
    contactArray.forEach(element => { // Show contact one by one
        console.log(element)
    });
}
const callShowbtn = document.querySelector("#showbtn")
callShowbtn.addEventListener("click", () => {
    callShowbtn.style.backgroundColor="yellow";
    console.log("Voici la liste des contacts: ")
    showContacts() // Execute the showContact function
});
// 3 - Research contact
const callSearchbtn = document.getElementById("searchbtn"); // Select the button for calling it
function searchContact(contactlist, contact) {
    let actif = 0;
    contactlist.forEach(element => {
        if (contact == element.first_name) {
            console.log("Voici le contact recherché:👇")
            console.log(element);
        }
        else actif++;
    })
    if (actif == contactlist.length) console.log("This contact does not exist!")
};
callSearchbtn.addEventListener("click", () => {
    callSearchbtn.style.backgroundColor="green";
    searchContact(contactArray, prompt("Rechercher un contact.")); // Execute the searchfor function
});
// 4 - Remove contact
const callrm = document.querySelector(".rmbtn");

function removeContact(contactlist, contact){
    let actif = 0;
    contactlist.forEach(element => {
        if (contact == element.first_name) {
            contactlist.pop(element);
            console.log("Contact succesfully deleted! Here is the new array👇")
            console.log(contactlist);
        }
        else actif++;
    })
    if (actif == contactlist.length) console.log("This contact does not exist!")
}
callrm.addEventListener("click", ()=>{
    callrm.style.backgroundColor="yellow";
    removeContact(contactArray, prompt("Rechercher le contact à supprimer:")); // Execute the searchfor function
})
// 5 - Statistics (number of contacts & average age)
const callsta = document.getElementsByClassName("stabtn");
// Total number of contacts
function calcContact(contactlist){
    return contactlist.length
}
// Average age
function calcAverage(contactlist){
    let sum = 0;
    contactlist.forEach(element => {
        sum += element.age
    });
    console.log("Total number of contacts: " + calcContact(contactArray));
    console.log("Average age: " + parseInt(sum / contactlist.length));
}
callsta[0].addEventListener("click", ()=>{
    callsta[0].style.backgroundColor="yellow"; // Use the index because getElementsByClassName return a collection not a single element!
    calcAverage(contactArray)
})

