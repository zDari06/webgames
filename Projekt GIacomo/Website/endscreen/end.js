const submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', () => {
    const answer = document.getElementById('answer').value
    const win = document.getElementById('message')
    if(answer === "sui") {
        win.innerHTML = `<h4>Du hast das Wort gefunden</h4>`
    }
    else {
        win.innerHTML = `<h4>Falsches Lösungswort</h4>`
    }
    
})




word.textContent = localStorage.getItem("One") + localStorage.getItem("Two") + localStorage.getItem("Three")