
window.addEventListener("keydown", ({key, shiftKey})=> {
    console.info(shiftKey, key)
    if (key.toLocaleLowerCase() == "t" && !!shiftKey){

        let key = window.getSelection()
        let currentValue = window.localStorage.getItem(key) ?? key

        let newValue = window.prompt("Translate this", currentValue)
        if (newValue != currentValue) {
            window.localStorage.setItem(key, newValue)
        }
    }
})