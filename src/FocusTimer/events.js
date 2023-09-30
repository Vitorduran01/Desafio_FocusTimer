import state from "./state.js"
import * as actions from "./actions.js"
import * as el from "./elements.js"
import { updateDisplay } from "./timer.js";
import * as controls from "./elements.js";

export function registerControls(){
    el.controls.addEventListener('click', (event) =>
    {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function"){
            return
        }

        actions[action]()
    })
}

export function setMinutes(){
    el.minutes.addEventListener('focus',() => {
        el.minutes.textContent = ""
    } )

    el.minutes.onkeypress = (event) =>  /\d/.test(event.key) 

    el.minutes.addEventListener('blur', (event) =>{
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    })
}

export function registerControlsSounds(){
    controls.controlsSounds.addEventListener('click', (event) =>{
        const buttonSound = event.target.dataset.music

        if(typeof actions[buttonSound] != "function"){
                return;
            }

        actions[buttonSound]()
    })
}
// export function registerControlsSounds(){
//     controls.controlsSounds.addEventListener('click', (event) =>{
//         const buttonSound = event.target.dataset.music
//         console.log(buttonSound)

//         if(typeof actions[buttonSound] != "function"){
//             return
//         }

//         actions[buttonSound]()
//     })
// }
