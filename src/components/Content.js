import styles from "./Content.module.css"
import Modal from "./Modal/Modal";



function Contents(){
    const root = document.querySelector('#root');
    
    root.appendChild(Modal());
}

export default Contents;