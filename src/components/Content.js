import styles from "./Content.module.css"
import Modal from "./Modal/Modal";
const taskList = [];



function onClose (){
    const modalMenu = document.querySelector(".modalMenu")
    const modalBtn = document.querySelector(".plusButton")
    const modalCloseBtn = document.querySelector(".closeModal")
    

    modalBtn.addEventListener("click", ()=> {
        modalMenu.style.display = "block"
    })
    modalCloseBtn.onclick = function() {
        modalMenu.style.display = "none";
      }

    window.addEventListener("click", (e) =>{     
        if (e.target == modalMenu) {
            modalMenu.style.display = "none";
          }
    })
}

function onSubmit(){
    const newTask = {}
    let completed = [];

    const modalMenu = document.querySelector(".modalMenu")
    const form = document.querySelector("form")
    const formItems = document.querySelectorAll("input")
    console.log(form);
    console.log(formItems);
    form.addEventListener('submit', (event) => {
        // stop form submission
        event.preventDefault();
        formItems.forEach(element => {
   
            
            newTask[`${element.name}`] = element.value;
            if(element.value == ''){
                // alert(`${element.name.toUpperCase()} must be filled out`);
                completed.push(false)
              } else{
                completed.push(true)
              }
        });
        if(completed.every((e)=>e  === true)){
            if(!localStorage.getItem('taskList')) {
                localStorage.setItem('taskList', JSON.stringify([newTask]))
              } else {
                const arr = JSON.parse(localStorage.getItem('taskList'));
                localStorage.setItem('taskList', JSON.stringify([...arr, newTask]))
              }
            location.reload(); 
        }
        
    });
    
};

function render(root){
    const contentDiv = document.createElement("div");
    contentDiv.className = "contentBox";
    const itemLists = [...JSON.parse(localStorage.getItem('taskList'))];
    console.log(itemLists);
    for(let items of itemLists){
        const itemsDiv = document.createElement("div");    
        itemsDiv.className = "itemBox";
       

        for(let keys of Object.keys(items)){ 
            const objectDiv = document.createElement("div");
            const keyDiv = document.createElement("div");
            const valuesDiv = document.createElement("div");
            keyDiv.className = `keys ${keys}`
            valuesDiv.className = `values ${keys}`
            console.log(itemLists)
            keyDiv.innerText = keys;
            valuesDiv.innerText = items[keys];

            objectDiv.append(keyDiv, valuesDiv);
            itemsDiv.appendChild(objectDiv);
        }
        contentDiv.appendChild(itemsDiv);
    }
    
    
    root.appendChild(contentDiv);
}


function Contents(){

    const root = document.querySelector('#root');   
    root.appendChild(Modal());
    onClose();
    onSubmit();
    render(root);
}

export default Contents;