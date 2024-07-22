import { app, db, collection, addDoc, getDocs } from "./firebase.js";
const get = document.getElementById("formSubmit");
get.addEventListener('click', async (stop) => {
    stop.preventDefault()
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const email = document.getElementById("useremail").value;
    const contact = document.getElementById("userno").value;
    try {
        const docRef = await addDoc(collection(db, "user_information"), {
            firstName: firstName,
            lastName: lastName,
            email: email,
            contact: contact,
        });
        console.log("Document written with ID: ", docRef.id);
        setTimeout(() => { window.location.reload() }, 100);
        alert("Thank You For Your Time Your Information Is Received")
    } catch (e) {
        console.error("Error adding document: ", e);
    }
});