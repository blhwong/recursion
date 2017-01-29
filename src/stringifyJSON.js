// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // numbers(ints, floats), null, boolean, string, array, object
  // no functions, no undefined
  // use recursion for nested arrays or nested objects

  // create variable result string
  // for(var key in obj)...
    // if(obj[key] is Array or Object)
      // use recursion
  // output result
  //create empty result string (accumulator)
  var accumulator="";
  _.reduce(obj, function(current, key, accumulator) {
    if((typeof(current)!=="function") || (current!==undefined)) {
      if (current===null) {
         accumulator = accumulator + "null";
      }
      accumualator = accumulator + current;
    }
  }, accumulator);
  return accumulator;
}


/*  var result = "{";
  for (var key in obj) {
    if (Array.isArray(obj[key])) {
        //for(var i=0; i<obj[key].length; i++) {
          // do something use recursion
          //call stringifyJSON(obj[key]);
        }
      } else if (typeof(obj[key]) === "object"){
      for(var key2 in obj[key]) {
        // do something use recursion
      } else {
        result = result + //something;
      }
    }
  }
  return result + "}";
};*/
/*
var stringifiableObjects = [
  9,
  null,
  true,
  false,
  'Hello world',
  [],
  [8],
  ['hi'],
  [8, 'hi'],
  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
  [8, [[], 3, 4]],
  [[[['foo']]]],
  {},
  {'a': 'apple'},
  {'foo': true, 'bar': false, 'baz': null},
  {'boolean, true': true, 'boolean, false': false, 'null': null },
  // basic nesting
  {'a': {'b': 'c'}},
  {'a': ['b', 'c']},
  [{'a': 'b'}, {'c': 'd'}],
  {'a': [], 'c': {}, 'b': true}
];
*/

// var myObj = { "name":"John", "age":31, "city":"New York", "grades":[90, 90, 90, [100, 100, 100]] };
// console.log(JSON.stringify(myObj));
// {"name":"John","age":31,"city":"New York"}


/*    if (Array.isArray(array)) {
      for(var i=0; i<array.length; i++) {
        do something
      }
    } else {
      for(var key in object) {
        do something
      }
    }
*/