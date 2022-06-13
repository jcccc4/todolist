import styles from "./Header.module.css"
import Icon1 from "../images/check-all.svg"
import Icon2 from "../images/notebook.svg"

function Header(){
    const root = document.getElementById("root")
    const div = document.createElement('div');
    const image1 = document.createElement('object');;
    const image2 = document.createElement('object');;
    const title = document.createTextNode('To-DO')
    image1.data = Icon1;
    image2.data = Icon2;
    image1.classList.add(`${styles.logos}`);
    image2.classList.add(`${styles.logos}`);
    image1.classList.add(`red`);
    div.classList.add(`${styles.header}`);
    
    root.appendChild(div);
    div.append(image1 ,title, image2);
    
}

export default Header;