/*
var members = ['egoing', 'k8805', 'hoya'];
console.log(members[1]);

var i = 0;
while(i < members.length) {
  console.log('array loop', members[i]);
  i = i + 1;
}
*/

// var roles = {
//   programmer: "egoing",
//   designer: "k8805",
//   manager: "hoya",
// };
// console.log(roles.designer);
// console.log(roles["designer"]);

// for (var n in roles) {
//   console.log("object => ", n, "value => ", roles[n]);
// }

// var f = function () {
//   console.log(1 + 1);
//   console.log(1 + 2);
// };

// var a = [f];
// a[0]();

// var o = {
//   func: f,
// };
// o.func();

var o = {
  v1: "v1",
  v2: "v2",
  f1: function () {
    console.log(this.v1);
  },
  f2: function () {
    console.log(this.v2);
  },
};

o.f1();
o.f2();
