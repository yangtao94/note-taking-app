const lebron = [];
let g_id = 0;

class Note{
    constructor(title, content) {
        this.title = title;
        this.content = content;

    }

    setTitle(title) {
        this.title = title;
    }

    setContent(content) {
        this.content = content;
    }

    setId(id) {
        this.id = id;
    }

}

let note_list = document.getElementById('accordionExample');
let bt = document.getElementById('saveBtn');
let s_bt = document.getElementById('Search');
let exampleButton = document.getElementById('exampleButton');


exampleButton.addEventListener("click", () => {
    console.log("Hi");
    let length = note_list.childNodes.length;
    console.log(length);
    note_list.removeChild(note_list.childNodes[length-2]);
})



function newNote(n_title, n_content) {
    console.log(n_title,n_content,g_id);
    //let note_id = g_id;
    let collapse_id = "collapse"+ g_id;
    let header_id = "heading" + g_id;
    let card_id = "card"+g_id;

    //Structure for the title
    let card_div = document.createElement('div');
    card_div.classList.add("card");
    card_div.id = card_id;

    let card_header = document.createElement('div');
    card_header.classList.add("card-header");
    card_header.id = header_id;


    let header = document.createElement('h2');
    header.classList.add("mb-0");

    let title = document.createElement('button');
    title.classList.add("btn", "btn-link", "collapsed");
    title.setAttribute("type", "button");
    title.setAttribute("data-toggle", "collapse");
    title.setAttribute("data-target", `#${collapse_id}`);
    title.setAttribute("aria-expanded", "false");
    title.setAttribute("aria-controls", collapse_id);
    title.innerHTML = n_title;

    header.appendChild(title);
    card_header.appendChild(header);
    card_div.appendChild(card_header);

    //Collapse into content
    let content = document.createElement('div');
    content.id = collapse_id;
    content.classList.add("collapse");
    
    content.setAttribute("aria-labelledby", header_id);
    content.setAttribute("data-parent", "#accordionExample");

    let card_body = document.createElement('div');
    card_body.classList.add("card-body");
    
    let text = document.createElement('p');
    text.innerHTML = n_content;

    let del_button = document.createElement('a');
    del_button.classList.add("btn","btn-danger");
    del_button.setAttribute("href","#takeNotes");
    del_button.innerHTML = "Delete Note";
    del_button.addEventListener("click",() => {
        note_list.removeChild(document.getElementById(card_id));
    });

    let edit_button = document.createElement('a');
    edit_button.classList.add("btn","btn-primary");
    edit_button.setAttribute("href","#takeNotes");
    edit_button.innerHTML = "Edit Note";
    edit_button.addEventListener("click",() => {
        note_list.removeChild(document.getElementById(card_id));
        document.getElementById('title').value = n_title;
        document.getElementById('description').value = n_content;
    });


    card_body.appendChild(text);
    card_body.appendChild(del_button);
    card_body.insertAdjacentElement('beforeend',edit_button);
    content.appendChild(card_body);
    card_div.appendChild(content);

    return card_div;
}









bt.addEventListener('click', function () {
    //create a Note object
    let title = document.getElementById('title').value;
    let text = document.getElementById('description').value;
    document.getElementById('title').value = "";
    document.getElementById('description').value = "";



    let newCollapsable = newNote(title, text);

    let store = new Note(title, text);
    store.setId(newCollapsable.id);
    g_id++;
    lebron.push(store);



    note_list.prepend(newCollapsable);




})

