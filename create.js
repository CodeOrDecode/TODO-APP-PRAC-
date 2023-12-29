
let taskOne = document.getElementById("taskOne");


async function addTodo() {

    try {

        let obj = {
            title: taskOne.value,
            type: false
        }
        console.log(obj);

        let res = await fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj)
        });

    } catch (error) {
        console.log(error);
    }



}