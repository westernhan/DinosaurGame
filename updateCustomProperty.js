export function getCustomProperty(elem, prop) {
    //get css values and specific css property then convert to number
    return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0
  }
  
  export function setCustomProperty(elem, prop, value) {
    elem.style.setProperty(prop, value)
  }
  
  export function incrementCustomProperty(elem, prop, inc) {
    setCustomProperty(elem, prop, getCustomProperty(elem, prop) + inc)
  }