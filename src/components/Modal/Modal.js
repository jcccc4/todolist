


function Modal(){
    const modal = document.createElement('div');
    const modalButton = document.createElement('div');
    const modalMenu = document.createElement('div');
    const modalContent = document.createElement('div');
    const closeModal = document.createElement('span');   
    const form = document.createElement('div');
    const formContainer = document.createElement("form")
    const formTitle = document.createElement("div");
    const formButton = document.createElement("button");
    const formButtonContainer = document.createElement("div")
    
    modalButton.className = "plusButton";
    modalMenu.className = "modalMenu";
    modalContent.className = "modalContent";
    closeModal.className = "closeModal";
    form.className = "form";
    formContainer.className = "formContainer";
    formTitle.className = "formTitle"
    formButton.className = "formButton"
    formButtonContainer.className = "formButtonContainer"

    closeModal.innerHTML = "&times;";
    formTitle.innerHTML ="Create New Task";
    formButton.innerHTML ="Add to do";
    formButton.type = "submit"


    
    const formMenu = ['Title', 'Date', 'Description', 'Priority', 'Project'];
    for(let items of formMenu){
        const divLabel = document.createElement('label');
        const divInput = document.createElement('input');
        const formBox = document.createElement('div');

        formBox.className = "formBox";
        divLabel.className = items.toLowerCase();
        divLabel.setAttribute("for", items.toLowerCase());
        divInput.setAttribute("name", items.toLowerCase());
        divLabel.innerHTML = `${items}: `
   
        if(items === 'Title' || items === 'Description' ){
            divInput.type = "text";
        } else if(items == 'Date'){
            divInput.type = 'date'
        } 
        // else if(items === 'Priority' || items === 'Project'){

        // }


        formBox.append(divLabel, divInput);
        form.appendChild(formBox);
    }
    formButtonContainer.appendChild(formButton);
    formContainer.append(form,formButtonContainer);
    modalContent.append(formTitle, closeModal, formContainer);
    modalMenu.append(closeModal, modalContent);
    modal.append(modalButton, modalMenu);

    return modal;
}

export default Modal;