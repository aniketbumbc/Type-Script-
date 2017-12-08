var a;
var b;
var c;
var d;
var f = [1, 2, 3, 40];
var g = [1, "hellp", true];
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["blue"] = 1] = "blue";
    color[color["green"] = 2] = "green";
})(color || (color = {}));
; // constant  value  
var bgclor = color.blue;
