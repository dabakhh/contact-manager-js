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
    const callButton = document.querySelector("#create"); // constant which select the button for calling it
    callButton.addEventListener("click", () => { //event which taked when someone click to the button
        
        console.log("Vous êtes entrain d'ajouter un contact.");
        let contactX = {
        first_name: prompt("Entrer votre prénom: "),
        name: prompt("Entrer votre nom: "),
        age: prompt("Entrer votre âge: "),
        mail: prompt("Entrer votre mail: "),
        tel: prompt("Entrer votre numéro de téléphone: ")
        };
    });
    return contactX
}
// Function which add contact in the contactArray
// function addContact(table, fonction) {
//     const callButton = document.querySelector("#add");
//     callButton.addEventListener("click", () => {
//         table.push(fonction);
//         console.log(table);
//     })
// };
// addContact(contactArray, createContact());

// 2 - Show constacts
// 3 - Research contact
// 4 - Remove contact
// 5 - Statistics (number of contacts & average age)