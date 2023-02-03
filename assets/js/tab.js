let docTitle = document.title;
window.addEventListener("blur", ()=> {
    document.title = 'Please come back'
})

window.addEventListener("focus", ()=> {
    document.title = docTitle;
})
