//API callish thing
function getData(url, callWhenDone) {
  var inputs = [];
  $.getJSON(url, function (data) {
    $.each(data, function (i, val) {
      var userData = JSON.stringify(data[i].val)
      inputs.push(userData)
    })
  callwhendone(inputs)
  })
}

function saveData(url, callwhendone) {
  getData(url, function(inputs) {
  for (prop in inputs) {
    if (prop[inputs]) {
    }
  }

  });

}
//average
function average(values) {
  for (var i; i < values.length; i++) {
    var sumValues = 0
    var valueAtI = values[i]
    sumValues = sumValues + values[i]
   
  }
}
//counts responses
function count(values) {
  for (var i; i < values.length; i++) {
    if (values[i] == 1) {
      var valof1 = value[i]
      var numberof1 = values[i] + values[i]
      return numberof1
    }
    if (values[i] == 2) {
      var valof2 = (values[i] - 1)
      var numberof2 = valof2 + valof2
      return numberof2

    }
  } if (values[i] == 3) {
    var valof3 = (values[i] - 2)
    var numberof3 = valof3 + valof3
    return numberof3 
  }

}
//precent calculator
function percentOf(){
  patternArray = []
  var percentOf1 = values.length / numberof1
  var percentOf2 = values.length / numberof2
  var percentOf3 = values.length / numberof3
  patternArray.push(percentOf1)
  patternArray.push(percentOf2)
  patternArray.push(percentOf3)
  return patternArray
} 


$("#percent").append(`${patternArray[3]}`)



