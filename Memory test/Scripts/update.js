import {left, up, right, down} from "./changeFocus.js";

/*
H = Hydrogen
Rm = Representative metal
Ml = Metalloid
Nm = Non-metal
Ng = Noble gas
Tm = Transition metal
Itm = Inner transition metal
*/

const selectionColor = "rgb(243, 92, 90)";

const H_color = "rgb(178, 203, 222)";
const Rm_color = "rgb(255, 224, 107)";
const Ml_color = "rgb(135, 214, 184)";
const Nm_color = "rgb(228, 202, 178)";
const Ng_color = "rgb(255, 186, 146)";
const Tm_color = "rgb(209, 211, 212)";
const Itm_color = "rgb(225, 186, 208)";

const colors = [H_color, Rm_color, Ml_color, Nm_color, Ng_color, Tm_color, Itm_color];

let debounce = function(func, delay){
  let timeoutId;

  return function(arg){
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {func.call(this, arg);}, delay);
  }
}

let movement = function(e){
  let cIndex = this.parentNode.cellIndex;
  let rIndex = this.parentNode.parentNode.rowIndex;
  if(e.keyCode === 37){// LEFT key
    left(cIndex, rIndex);
  }
  else if(e.keyCode === 38){// UP key
    up(cIndex, rIndex);
  }
  else if(e.keyCode === 39){// RIGHT key
    right(cIndex, rIndex);
  }
  else if(e.keyCode === 40){// DOWN key
    down(cIndex, rIndex);
  }
}

var checkingSet = new Set();
let check = function(){
  this.value = this.value.toLowerCase().replace(/\s/g, "");
  if(this.value === this.id){
    switch(this.classList[0]){
      case "Tm":
        this.style.backgroundColor = Tm_color;
        break;
      case "Itm":
        this.style.backgroundColor = Itm_color;
        break;
      case "Rm":
        this.style.backgroundColor = Rm_color;
        break;
      case "Nm":
        this.style.backgroundColor = Nm_color;
        break;
      case "Ml":
        this.style.backgroundColor = Ml_color;
        break;
      case "Ng":
        this.style.backgroundColor = Ng_color;
        break;
      case "H":
        this.style.backgroundColor = H_color;
        break;
    }

    checkingSet.add(this.id);
    if(checkingSet.size === 118){timer()();}
  }


  /* cheatcode for color testing */
  else if(this.value === "abc"){colorTesting();}
  /* --------------------------- */
  
  else{
    checkingSet.delete(this.id);
    this.style.removeProperty("background-color");
  }

  /* timer */
  timer();
}

let onFs = function(){
  setTimeout(() => {this.select();}, 0.1);

  let color = this.style.backgroundColor;
  if(!colors.includes(color)){this.style.backgroundColor = selectionColor;}
}

let onFsout = function(){
  if(this.style.backgroundColor === selectionColor){this.style.backgroundColor = null;}
}

let elementBlocks = document.getElementsByClassName("elementBlock");
Array.from(elementBlocks).forEach(function(i){
  i.addEventListener("keydown", debounce(movement, 1));
  i.addEventListener("input", check);
  i.addEventListener("focus", onFs);
  i.addEventListener("focusout", onFsout);
});

// -------------------------------------------------
let colorTesting = function(){
  Array.from(elementBlocks).forEach((k) => {
    switch(k.classList[0]){
      case "Tm":
        k.style.backgroundColor = Tm_color;
        break;
      case "Itm":
        k.style.backgroundColor = Itm_color;
        break;
      case "Rm":
        k.style.backgroundColor = Rm_color;
        break;
      case "Nm":
        k.style.backgroundColor = Nm_color;
        break;
      case "Ml":
        k.style.backgroundColor = Ml_color;
        break;
      case "Ng":
        k.style.backgroundColor = Ng_color;
        break;
      case "H":
        k.style.backgroundColor = H_color;
        break;
    }

    k.value = k.id;
    timer()();
  })
}