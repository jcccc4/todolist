import styles from "./SideBar.module.css"

function Sidebar(){
    const root = document.getElementById("root");
    const sideBar = document.createElement('div');
    sideBar.classList.add(`${styles.sideBar}`);
    const titles = ["Inbox", "Today", "Upcoming"]
    for(let loop of titles){
        const names = document.createElement('div');
        names.className = loop.toLowerCase();
        names.innerText = loop;
        
        sideBar.appendChild(names);
    }
    root.appendChild(sideBar);
}

export default Sidebar;