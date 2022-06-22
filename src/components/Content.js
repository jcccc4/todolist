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

const contentItems = {
    contentDiv : document.createElement('div'),
    state: {
        arrItems: [],
    },
    template(items){
        
        if(items.length == 0 ){
            return "<div class = 'noneBox' >Nothing To Display</div>"
        }
        function objItem(obj){
            let words = ""
            Object.keys(obj).map((key) =>{
                    words += `  <div class = "objAttribute">
                                    <div class = "${key}">${key} </div>: 
                                    <div class = "${key} ${obj[key]}">${obj[key]} 
                                </div></div>`
                } 
            )
            return `<div class = "objContainer">${words}</div>`
        }
        return (`${items.map(obj => {

                return objItem(obj)})}`)
    },
    initialize(root){

        this.contentDiv.className = 'contentBox';
        if(!localStorage.getItem('taskList')) {
            localStorage.setItem('taskList', JSON.stringify([]))
          }
        this.state.arrItems = JSON.parse(localStorage.getItem('taskList'));
        
        root.appendChild(this.contentDiv)
       
        document.querySelector('.contentBox').innerHTML = this.template(this.state.arrItems).split(",").join('');
        document.querySelector("form").addEventListener("submit", (e) => this.onSubmit(e) );
        
    },
    onSubmit(event){

        const formItems = document.querySelectorAll("input");
        const modalMenu = document.querySelector(".modalMenu")
        event.preventDefault();
        const newTask = {};
        const completed = [];
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
            this.state.arrItems.push(newTask);
            modalMenu.style.display = "none";
            localStorage.setItem('taskList', JSON.stringify(this.state.arrItems))
        };
        this.updateUI();      
    },
    updateUI(){
        document.querySelector('.contentBox').innerHTML = this.template(this.state.arrItems).split(",").join(''); 
      }

}


function Contents(){

    const root = document.querySelector('#root');   
    root.appendChild(Modal());
    onClose();
    
    contentItems.initialize(root);
    // onSubmit();
    // render(root);
    
}

export default Contents;