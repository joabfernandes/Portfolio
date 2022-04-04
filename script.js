function validardados(){
    window.event.preventDefault()

    if(document.form.nome.value == ""){
        alert("Nome é obrigatório")
        document.form.nome.focus()
    }else if(document.form.email.value.indexOf("@") == -1 || 
    document.form.email.value.indexOf(".") == -1){
        alert("Email inválido")
        document.form.email.focus()
    }else if(document.form.assunto.value == ""){
        alert("Assunto é obrigatório")
        document.form.assunto.focus()
    }else if(document.form.mensagem.value == "" ||
        document.form.mensagem.value.length < 50){
        alert("A mensagem precisa ter pelo menos 50 (cinquenta) caracteres");
        document.form.mensagem.focus()
    }

}

document.querySelector("form").addEventListener("submit", validardados);
