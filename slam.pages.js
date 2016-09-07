var slamVars = {};

String.prototype.replaceAll = function(find, replace) {
  return this.replace(new RegExp(find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"), 'g'), replace);
};

