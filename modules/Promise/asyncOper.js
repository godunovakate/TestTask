"use strict";

let promise=new Promise(function(resolve, reject) {
  setTimeout(()=>resolve(1), 1000);

}).then(function(result){

  alert(result);

  return new Promise((resolve, reject) => {
    setTimeout(()=>resolve(result+1), 1000);
  });

}).then(function(result) {

  alert(result);

  return new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(result+1), 1000);
  });

}).then(function(result) {

  alert(result);

})