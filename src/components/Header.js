import styles from "./Header.module.css"
import Icon1 from "../images/check-all.svg"
import Icon2 from "../images/notebook.svg"

function HeaderUI() {
    return (`
    <object data="${Icon1}" class="red" ></object>
    <div>To-DO</div>
    <object data="${Icon2}" class="red" ></object>
    `)
}

function Header(){
    const root = document.getElementById("root")
    const div = document.createElement('div');
    div.classList.add(`${styles.header}`);

    div.innerHTML = HeaderUI();
    
    root.appendChild(div);
}

export default Header;