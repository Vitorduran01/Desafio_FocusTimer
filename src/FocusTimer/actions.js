import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    sounds.buttonPress.play()
}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sounds.buttonPress.play()
}

export function set(){
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
    sounds.buttonPress.play()
}

export function plus(){
    state.minutes = state.minutes + 5
    el.minutes.textContent = String(state.minutes)    
    sounds.buttonPress.play()
}

export function less(){
    state.minutes = state.minutes - 5
    el.minutes.textContent = String(state.minutes) 
    sounds.buttonPress.play()
}




///teste

export function forest(){

    state.music = document.getElementById('forest').classList.toggle('musicOn')

    sounds.forestAudio.play()
    if(state.music === false){
        sounds.forestAudio.pause()
    }

}

export function rain(){
    state.music = document.getElementById('rain').classList.toggle('musicOn')

    sounds.rainAudio.play()
    if(state.music === false){
        sounds.rainAudio.pause()
    }
}

export function coffe(){
    state.music = document.getElementById('coffe').classList.toggle('musicOn')

    sounds.cafeAudio.play()
    if(state.music === false){
        sounds.cafeAudio.pause()
    }

}

export function fire(){
    state.music = document.getElementById('fire').classList.toggle('musicOn')
    sounds.fireplaceAudio.play()
    if(state.music === false){
        sounds.fireplaceAudio.pause()
    }
}