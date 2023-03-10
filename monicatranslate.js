
const inputs = document.querySelectorAll("input")

inputs.forEach(input => {
    input.addEventListener("keydown", ({ key, shiftKey, ctrlKey, target })=> {
        console.info(`monicattranslate: keydown: shiftKey:${shiftKey}, ctrlKey:${ctrlKey}, key:${key}`)

        if (key.toLocaleLowerCase() == "u" && ctrlKey) {
            
            let key = target.value
            let currentValue = window.localStorage.getItem(key) ?? key
    
            let newValue = window.prompt(`Translate: "${currentValue}"`, currentValue)
            if (newValue) {
                navigator.clipboard.writeText(newValue);
                window.localStorage.setItem(key, newValue)
            }
        }
    })
});