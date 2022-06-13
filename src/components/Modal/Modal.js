import styles from './Modal.module.css'

function Modal(){
    const modal = document.createElement('div');
    const modalButton = document.createElement('div');
    const modalMenu = document.createElement('div');
    const modalContent = document.createElement('div');
    const closeModal = document.createElement('span');   
    const form = document.createElement('form');


    
    modalButton.className = `${styles.plusButton}`;
    modalMenu.className = `${styles.modalMenu}`;
    modalContent.className = `${styles.modalContent}`;
    closeModal.className = `${styles.closeModal}`;
    form.className = `${styles.form}`;
    closeModal.innerHTML = "&times;";


    const formMenu = ['Title', 'Date', 'Description', 'Priority', 'Project'];
    for(let items of formMenu){
        const divLabel = document.createElement('label');
        const divInput = document.createElement('input');
        const formBox = document.createElement('div');

        formBox.className = styles.formBox;
        divLabel.className = items.toLowerCase();
        divLabel.setAttribute("for", items.toLowerCase());
        divLabel.innerHTML = `${items}: `
        if(items === 'Title' || items === 'Description' ){
            divInput.type = "text";
        } else if(items == 'Date'){
            divInput.type = 'datetime-local'
        } 
        // else if(items === 'Priority' || items === 'Project'){

        // }


        formBox.append(divLabel, divInput);
        form.appendChild(formBox);
    }
    
    modalContent.append(closeModal, form);
    modalMenu.append(closeModal, modalContent);
    modal.append(modalButton, modalMenu);

    return modal;
}

export default Modal;