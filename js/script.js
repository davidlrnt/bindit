var bind = {
  data: "OMG"
}
var test = "OMG!!!"
var data = "it works"

var rxBind = /\{\{(.*?)\}\}/;

var items = document.body.getElementsByTagName("*");
for (var i = items.length; i--;) {
  if (match = rxBind.exec(items[i].innerHTML)) {
    console.log(match[1])
    items[i].innerHTML = eval(match[1])
  }
}

