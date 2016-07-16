function getData(url, data){
var inputs = [];
$.getJSON(url, function(data) {
  $.each(data, function(i, val) {
  var userData = JSON.stringify(data[i].val)
  inputs.push(userData, 1)
})
})
}

function saveData(){
    getData(inputs);
  for(prop in inputs){
    if(prop[inputs]){

    }
  }

}

function average(values){
for(var i; i < values.length; i++){ 
    var sumValues = 0 
    var valueAtI = values[i]
    sumValues = sumValues + values[i] 

}
}
function count(values){
for(var i; i < values.length; i++){
  if(values[i] == 1){ 
    var valof1 = value[i]
     var numberof1 =  values[i] + values[i]
  }
  if(values[i] == 2){
    var valof2 = (values[i] - 1)
    var numberof2 = valof2 + valof2 

  }
} if(values[i] == 3){
   var valof3 = (values[i] - 2)
   var numberof3 = valof3 + valof3 
}

}
// var precentTemplate = `<

// $("#precent").append(precentTemplate)