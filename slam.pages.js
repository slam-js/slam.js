var slamVars = {};

function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

String.prototype.replaceAll(find, replace) {
  return this.replace(new RegExp(escapeRegExp(find), 'g'), replace);
};

