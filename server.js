const add_text = document.getElementById("add_text");

function add_item(){
    // alert(add_text.value)
    //create li element & add the task 
    const li_item = document.createElement("li");
    const li_text = add_text.value;
    li_item.append(li_text)
    

    //append li element to ul
    const item_set = document.getElementById("item_set");
    item_set.appendChild(li_item)


    //create edit btn and append to li
    const edit_btn = document.createElement("button");
    edit_btn.textContent = "EDIT"
    li_item.appendChild(edit_btn)


    //after adding task to li, empty input
    add_text.value = ""

    //create dlt btn and append to li
    const dlt_btn = document.createElement("button")
    dlt_btn.textContent = "DELETE"
    li_item.appendChild(dlt_btn)


    //edit function call 
    edit_btn.addEventListener("click", function(){
        editTask(li_item, li_text)
    })


    //delete function call
    dlt_btn.addEventListener("click", function(){
        deleteTask(li_item);
    })


}



//delete Task
function deleteTask(li_item){
    li_item.remove();
}


//edit Task
function editTask(li_item, original_text){
    
    //create input for edit text 
    const edit_input = document.createElement("input");
    edit_input.type = "text";
    edit_input.value = original_text;

    //replace original text with the new input
    li_item.innerHTML = "";
    li_item.appendChild(edit_input)

    //create save btn
    const save_btn = document.createElement("button");
    save_btn.textContent = "SAVE";
    li_item.appendChild(save_btn)



    save_btn.addEventListener("click", function(){
        //change old li text to new text
        const new_text = edit_input.value;
        li_item.innerHTML = new_text;


        //create edit btn and append to li
        const edit_btn = document.createElement("button");
        edit_btn.textContent = "EDIT"
        li_item.appendChild(edit_btn)


        //create dlt btn and append to li
        const dlt_btn = document.createElement("button")
        dlt_btn.textContent = "DELETE"
        li_item.appendChild(dlt_btn)


        //edit function call 
        edit_btn.addEventListener("click", function(){
            editTask(li_item, new_text)
        })


        //delete function call
        dlt_btn.addEventListener("click", function(){
            deleteTask(li_item);
        })

    })

}