let table = document.getElementById("periodicTable");

export function left(inputBlock, cI, rI){
  if(cI === 17 && rI === 0){cI = 0;}
  else if(cI === 12 && rI < 3){cI = 1;}
  else if(cI === 3 && rI > 7){cI = 16;}
  else{cI = (cI+17)%18;}

  let nextBlock = table.rows[rI].cells[cI].children[0];
  nextBlock.focus();
}
export function up(inputBlock, cI, rI){
  if(rI === 8){rI = 6;}
  else if(rI === 3 && cI > 1 && cI < 7){cI = 1; rI = 2;}
  else if(rI === 3 && cI > 6 && cI < 12){cI = 12; rI = 2;}
  else if(rI === 1 && cI === 1){cI = 0; rI = 0;}
  else if(rI === 1 && cI > 11){cI = 17; rI = 0;}
  else{rI-=1;}
  
  let nextBlock = table.rows[rI].cells[cI].children[0];
  nextBlock.focus();
}
export function right(inputBlock, cI, rI){
  if(cI === 0 && rI === 0){cI = 17;}
  else if(cI === 1 && rI < 3){cI = 12;}
  else if(cI === 16 && rI > 7){cI = 3;}
  else{cI = (cI+1)%18;}
  
  let nextBlock = table.rows[rI].cells[cI].children[0];
  nextBlock.focus();
}
export function down(inputBlock, cI, rI){
  if(rI === 6 && cI < 3){cI = 3; rI = 8;}
  else if(rI === 6 && cI ===17){cI = 16; rI = 8;}
  else if(rI === 6){rI = 8;}
  else{rI+=1;}

  let nextBlock = table.rows[rI].cells[cI].children[0];
  nextBlock.focus();
}