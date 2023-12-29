let mainOne = document.getElementById("mainOne");

async function getAll() {

    try {
        let res = await fetch("http://localhost:3000/posts");
        let data = await res.json();
        createCards(data);

    } catch (error) {
        console.log(error);

    }

}


getAll();


function createCards(data) {
    data.forEach((ele) => {
        let heading2 = document.createElement("h2");
        let smallDiv = document.createElement("div");
        smallDiv.className = "childone";
        let p2 = document.createElement("p");
        heading2.textContent = ele.title;
        p2.textContent = ele.type ? "Is task completed : Yes" : "Is task completed : No";

        let button1 = document.createElement("button");

        button1.textContent = "Delete";
        button1.addEventListener("click", async function () {
            let res = await fetch(`http://localhost:3000/posts/${ele.id}`, {
                method: "DELETE",
            })
        })


        let button2 = document.createElement("button");

        button2.textContent = "Update";
        button2.addEventListener("click", async function () {
            let obj = { type: !ele.type }
            let res = await fetch(`http://localhost:3000/posts/${ele.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(obj)
            })
        })

        smallDiv.append(heading2, p2, button1, button2);
        mainOne.append(smallDiv);
    })


}