import { getCustomProperty, incrementCustomProperty, setCustomProperty } from "./updateCustomProperty.js"

const SPEED = 0.05
const groundElems = document.querySelectorAll("[data-ground]")

//ground set up
export function setupGround(){
    setCustomProperty(groundElems[0], "--left", 0)
    //300 match with css width
    setCustomProperty(groundElems[1], "--left", 300)
}

//handle ground off screen
export function updateGround(delta, speedScale){
 groundElems.forEach(ground =>{
    incrementCustomProperty(ground, "--left", delta * speedScale * SPEED * -1)
    //ground has moved off screen (right side) loop around 
    if(getCustomProperty(ground, "--left")<= -300){
        incrementCustomProperty(ground, "--left", 600)
    }
 })
}