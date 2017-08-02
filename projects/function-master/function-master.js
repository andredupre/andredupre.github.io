// 13 global objectValues

function objectValues(data) {
    var toArray = Object.values(data);
    return toArray;
};

// 14 keysToString

function keysToString(data) {
    for (var i = 0; Object.keys(data).length; i++) {
      var a = Object.keys(data);
        return a.join(" ");
    }
}

// 15 valuesToString

function valuesToString(data) {
    var toArray = Object.values(data);
    var strArray = [];
    for (var i = 0; i < toArray.length; i++) {
      if (typeof toArray[i] === "string") {
          strArray.push(toArray[i]);
      }
    }
    var toString = strArray.join(" ");
    return toString;
}

// 16 arrayOrObject

function arrayOrObject(data) {
  if (Array.isArray(data)) {  
  return "array";
  }
  return typeof data;
}

// 17 capitalizeWord

function capitalizeWord(data) {
  return data[0].charAt(0).toUpperCase() + data.substring(1);
}

// 8 

function capitalizeAllWords(data) {
  var wordArray = data.split(" ");
  var capWordArray = [];
  for (var i = 0; i < wordArray.length; i++) {
    var caps = wordArray[i].charAt(0).toUpperCase() + wordArray[i].substring(1);
    capWordArray.push(caps);
  }
  var newCapString = capWordArray.join(" ");
  return newCapString;
}

function welcomeMessage(data) {
  var name = data["name"].charAt(0).toUpperCase() + data["name"].substring(1);
  return "Welcome " + name + "!";
}

function profileInfo(data) {
  var name = data["name"].charAt(0).toUpperCase() + data["name"].substring(1);
  var species = data["species"].charAt(0).toUpperCase() + data["species"].substring(1);
  return name + " is a " + species; 
}

function maybeNoises(data) {
  if (Object.keys(data).length === 0) {
    return "there are no noises";
  } else if (data["noises"].length > 1) {
    return data["noises"].join(" ");
  } else if (data["noises"].length === 0) {
    return "there are no noises";
  }
}

function hasWord(string, word) {
  return string.search(word) > -1;
}

function addFriend(name, object) {
  object["friends"].push(name);
  return object;
}

// NOT MATCHING NAME TO OBJECT.KEY[i]
function isFriend(name, object) {
  for (var i = 0; i < Object.values(object).length; i++) {
    console.log(Object.values(object)[i]);
    if (Object.values(object)[i] === name) {
      return true;
    }
  }
  return false;
}

function nonFriends(name, list) {
  for (var i = 0; i < Object.values(list).length; i++) {
    
    
  }
}



function updateObject(object, key, value) {
  
}



function removeProperties(object, array) {
  
}
 


function dedup(array) {
  
}





