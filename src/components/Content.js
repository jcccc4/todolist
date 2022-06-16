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
            console.log(element.value)
            if(element.value== ''){
                alert(`${element.name.toUpperCase()} must be filled out`);
                completed.push(false)
              } else{
                completed.push(true)
              }
        });
        if(completed.every((e)=>e  === true)){
            taskList.push(newTask)
        }
        modalMenu.style.display = "none"
        console.log(taskList);
    });
    
};

function Contents(){

    const root = document.querySelector('#root');   
    root.appendChild(Modal());
    onClose();
    onSubmit();
    console.log(taskList);
}

export default Contents;