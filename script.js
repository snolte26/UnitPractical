// container and button setup
var wrapEle = document.body.querySelector(".wrapper");
var submitEle = document.querySelector(".submit");

// lists
var stringers = [{item: 3}, {item: "Jerry"}, {item: "Sandy"}, {item: 4}, {item: "Pepper"}, {item: 15}, {item: "Jocastah"}, {item: 12}]
var elements = [];

//main shit happens here
function writeLines(thing){
  var that = this;
  this.item = thing.item;
  this.ele = document.createElement("div");
  // if item is a string
  if (typeof this.item == "string"){
    this.eleString = document.createElement("p");
    
    if (this.item.length > 5){
      this.eleString.innerHTML = "The value is " + this.item + " and the length is " + this.item.length;
      this.ele.appendChild(this.eleString);
    }else{
      this.eleString.innerHTML = "The value is " + this.item + " and the length is normal.";
      this.ele.appendChild(this.eleString);
    }
    
  }else{ // if item is a number
    this.eleNumber = document.createElement("p");
    
    // if number is less than 10
    if (this.item < 10){
      this.eleNumber.innerHTML = "The value is " + this.item + " and it is below 10.";
      this.ele.appendChild(this.eleNumber);
    }else if(this.item == 15){ // if number is 15
      this.eleNumber.innerHTML = "The value is " + this.item + " and it is exactly 15.";
      this.ele.appendChild(this.eleNumber);
    }else{ // if number is not less than 10 and is not 15
      this.eleNumber.innerHTML = "The value is " + this.item + " and it is normal.";
      this.ele.appendChild(this.eleNumber);
    }
  }
  
  // listen to clicks and hovers
  this.ele.addEventListener ("click", function(){
    that.ele.style.color = "blue";
  });
  this.ele.addEventListener ("mouseover", function(){
    that.ele.style.backgroundColor = "yellow";
  });
  this.ele.addEventListener ("mouseout", function(){
    that.ele.style.backgroundColor = "white";
  });
  
  wrapEle.appendChild(this.ele);
}

// takes randomized list and sends items to writeLines
function start(list){
  for (var i=0; i<list.length; i++){
  elements.push(new writeLines(list[i]))
  }
}


// randomizer randomizes the list, then sends to starter
function randomize(list){
  list = list.sort(() => Math.random() - 0.5);
  wrapEle.innerHTML = "";
  start(list);
}

// waits for the submit button to be clicked, sends list to randomizer
submitEle.addEventListener("click", function () {
  randomize(stringers);
});

// starts everything. sends items to the writeLines function
for (var i=0; i<stringers.length; i++){
  elements.push(new writeLines(stringers[i]))
}