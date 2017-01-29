// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if ((typeof obj !== 'function') && (obj !== undefined)) {
      if (obj === null) {
         return "null";
      } else if (typeof obj === 'string') {
        return '"' + obj + '"';
      } else if (Array.isArray(obj)) {
        var result = [];
        for (var i = 0; i < obj.length; i++) {
          result.push(stringifyJSON(obj[i]));
        }
        return '[' + result.join(',') + ']';
      } else if (typeof obj === 'object') {
        var result = [];
        for (var i in obj) {
          if((typeof obj[i] !== 'function') && (obj[i] !== undefined)) {
            result.push('"' + i + '"' + ":" + stringifyJSON(obj[i]));
          } else {
            continue;
          }
        }
        return '{' + result.join(',') + '}';
      }
      return obj.toString();
  }
}