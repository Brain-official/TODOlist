// targeting all the selectors by Id
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let todoLists = document.getElementById("todo-lists");




// submit event lister, to listen for clicks on the submit button **************************
form.addEventListener("submit", (e)=> {
    e.preventDefault()

    console.log("button clicked")

    formValidation()
})





// prevents user from posting empty form.
function formValidation () {
    if(input.value === "") {
        msg.innerHTML = "Post cannot be blank"
        console.log("failed validation")
    }else {
        msg.innerHTML = ""
        acceptData()  //we call the acceptData functon in the formValidation to store the inputs from the user
        console.log("success!")
    }
}





// accepting and storing data fron input fields and storing in object, "data"
let data = {}

function acceptData() {
    data["text"] = input.value;

    createPost()
    console.log(data)
}




// to display user's posts on the todo-list.
function createPost() {
    todoLists.innerHTML += `
    <div class="todo" id="todo">
        <div class="task" id="task">${data.text}</div>
        <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>
        <button class="check-btn"><i class="fa fa-check" aria-hidden="true"></i></button>
        <button class="edit-btn"><i class="fas fa-edit"></i></button>
    </div>
`

 input.value = " ";
}















