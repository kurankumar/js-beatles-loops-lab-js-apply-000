// add solution here

function theBeatlesPlay (musicians, instruments){
  var allMusicians = [];
  var i;
  var tempMusicians;
  var tempInstrument;
  
  for (i = 0; i < 4; i++){
    tempMusicians = musicians[i];
    tempInstrument = instruments[i];
    allMusicians[i] = tempMusicians + " plays " + tempInstrument;
  }
  return allMusicians;
}

<<<<<<< HEAD

function johnLennonFacts(facts){
  var factsExclaimed = [];
  var i = 0;
  
  while (i < facts.length){
=======
var factsExclaimed = [];
function johnLennonFacts(facts){
  console.log(facts.Length);
  
  var i = 0;
  
  while (i < facts.Length){
>>>>>>> a07befdfb799e0fa3e21b122ca2f3e152a352085
    factsExclaimed[i] = facts[i];
    factsExclaimed[i] = factsExclaimed[i] + "!!!";
    i++;
  }
  return factsExclaimed;
<<<<<<< HEAD
}


function iLoveTheBeatles(x){
  var beatlesLove = [];
  var i = 0;
  var y;
  
  if (x < 15){
    y = 15 - x;
  }
  else{
    y = 1;
  }
  
  do {
    beatlesLove[i] = "I love the Beatles!";
    i++;
  }
  
  while(i < y);
  return beatlesLove;
  
}


=======
  
}
>>>>>>> a07befdfb799e0fa3e21b122ca2f3e152a352085
