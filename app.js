import {app,db,collection,addDoc,getDocs} from "./firebase.js";

const formSubmit = document.getElementById("formSubmit")
formSubmit.addEventListener("click", async () => {
    const name = document.getElementById("name")
    const lname = document.getElementById("lname")
    const email = document.getElementById("email")
    const contact = document.getElementById("contact")

    console.log("name.value", name.value, lname.value, email.value, contact.value)
    const userObj = {
        name: name.value,
        lastname: lname.value,
        email: email.value,
        contact: contact.value,
    }


    const userCollection = collection(db, "user")

    const response = await addDoc(userCollection, userObj)
    console.log(response, "response")

})

