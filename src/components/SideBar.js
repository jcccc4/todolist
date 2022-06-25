import styles from "./SideBar.module.css"



function Sidebar(){
    const root = document.getElementById("root");
    const sideBar = document.createElement('div');
    
    sideBar.classList.add(`${styles.sideBar}`);
    sideBar.id= 'sideNav';
    const titles = ["Tasks", "Today", "Upcoming"]
    for(let loop of titles){
        const names = document.createElement('div');
        names.className = loop.toLowerCase() + " sides";
        names.innerText = loop;
        names.id=loop.toLowerCase()
        sideBar.appendChild(names);
    }
    const projects = document.createElement('div');
    projects.className = 'projectSide';
    const projectName = document.createElement('div');
    projectName.className = 'sideTitle';
    projectName.innerText = "Projects"

    projects.appendChild(projectName)
    const projectsList = document.createElement('li');
    projectsList.className = 'projectLists';

    projects.appendChild(projectsList);
    sideBar.appendChild(projects)
    root.appendChild(sideBar);

}

export default Sidebar;