// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var result = [];
  function closure(node) {
    if (node.classList === undefined) {
      return;
    }
    if (node.classList.contains(className)) {
      result.push(node);
    }
    for (var i = 0; i<node.childNodes.length; i++) {
      closure(node.childNodes[i]);
    }
  }
  closure(document.body);
  return result;
};