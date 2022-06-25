
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
    filteredState: {
        filteredArrItems: [],
    },
    loopFilter: [],
    template(items){
        
        if(items.length == 0 ){
            return "<div class = 'noneBox' >Nothing To Display</div>"
        }
        function objItem(obj){
            let words = ""
            Object.keys(obj).map((key) =>{
                    let word = key.charAt(0).toUpperCase() + key.slice(1);
                    let wordKey = obj[key].charAt(0).toUpperCase() + obj[key].slice(1);
                    words += `  <div class = "objAttribute">
                                    <div class = "${key}">${word} </div>: 
                                    <div class = "${key} ${obj[key]}">${wordKey} 
                                </div></div>`
                } 
            )
            return `<div class = "objContainer">${words}</div>`
        }
        


        return (`${items.map(obj => {

            return objItem(obj)})}`)
    },
    
    sideClick(){  
        document.querySelectorAll('.projectList').forEach(element => {


            element.addEventListener('click', (e) => {
                const el = e.target.innerText.toLowerCase()
                this.filteredState.filteredArrItems = this.state.arrItems.filter(ele =>{
                    if(ele.project.toLowerCase().trim() == el){
                        return true;
                    }
                    return false;
                })
              
                console.log('updated')
                this.updateUI();
            })
        })
        
        document.querySelectorAll('.sides').forEach(element => {

            element.addEventListener('click', (e) => {
           
                document.querySelectorAll('.sides').forEach(element => element.classList.remove('on'))
                const task = e.target.id;
                const currentDate = new Date();
                const logs = this.state.arrItems;
                const currentDateArr = [currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()].join('')
                if(task === 'tasks'){
                    this.filteredState.filteredArrItems = this.state.arrItems;
                    
                    e.target.classList.add('on')
                } else if(task === 'today') {
                    
                    this.filteredState.filteredArrItems = 
                    this.state.arrItems.filter((e)=>{
                        const logDate = new Date(e.date)

                        const logDateArr = [logDate.getFullYear(), logDate.getMonth(), logDate.getDate()].join('')
                        return (logDateArr== currentDateArr)
                    })
                    e.target.classList.add('on')
                
                } else if(task === 'upcoming') {
                    
                    this.filteredState.filteredArrItems = 
                    this.state.arrItems.filter((e)=>{
        
                        const logDate = new Date(e.date)
                        const logDateArr = [logDate.getFullYear(), logDate.getMonth(), logDate.getDate()].join('')
                        return (logDateArr > currentDateArr)
                        
                    })
                    e.target.classList.add('on')
                } 
                this.updateUI(); 
            })
        })  
    },projectFilter(){
        const seen = new Set();
        this.loopFilter = this.state.arrItems.filter(el => {
            const duplicate = seen.has(el.project);
            seen.add(el.project);
            return !duplicate;
          });


         let projectId = 0;

        return `${this.loopFilter.map((e) => 
            {   projectId++;
                return `<ul class = "project${projectId} sides projectList " id = "project${projectId}">${e.project}</ul>`
        })}`.split(",").join('');
        
    },
    initialize(root){

        this.contentDiv.className = 'contentBox';
        if(!localStorage.getItem('taskList')) {
            localStorage.setItem('taskList', JSON.stringify([]))
          }

        document.querySelector('#tasks').classList.add("on")
        this.state.arrItems = JSON.parse(localStorage.getItem('taskList'));
        root.appendChild(this.contentDiv)
        this.filteredState.filteredArrItems = this.state.arrItems;

        
        
        document.querySelector('.projectLists').innerHTML = this.projectFilter();  
        document.querySelector('.contentBox').innerHTML = this.template(this.state.arrItems).split(",").join('');
        document.querySelector("form").addEventListener("submit", (e) => this.onSubmit(e) )
   
        this.sideClick();
        
    },
    onSubmit(event){

        const formItems = document.querySelectorAll("input");
        const modalMenu = document.querySelector(".modalMenu")
        event.preventDefault();
        const newTask = {};
        const completed = [];
        formItems.forEach(element => {
                        newTask[`${element.name}`] = element.value.trim().toLowerCase();
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
        document.querySelectorAll('.sides').forEach(element => {
            element.addEventListener('click', () => {
            this.sideClick();})
    })
        this.filteredState.filteredArrItems = this.state.arrItems;
        document.querySelectorAll('.sides').forEach(element => element.classList.remove('on'));
        document.querySelector('#tasks').classList.add("on");
        this.updateUI();      
    },
    updateUI(){
        
        document.querySelector('.contentBox').innerHTML = this.template(this.filteredState.filteredArrItems).split(",").join(''); 
        document.querySelector('.projectLists').innerHTML = this.projectFilter();
        this.sideClick()
    }
}


function Contents(){

    const root = document.querySelector('#root');   
    root.appendChild(Modal());
    onClose();
    
    contentItems.initialize(root);
    
}

export default Contents;