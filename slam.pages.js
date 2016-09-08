String.prototype.replaceAll = function(find, replace) {
  return this.replace(new RegExp(find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"), 'g'), replace);
};

function slamIt(find,replace) {
  document.getElementsByTagName("*").innerHTML = document.getElementsByTagName("*").innerHTML.replaceALL(¨[{¨ + find + ¨}]¨,replace);
}
