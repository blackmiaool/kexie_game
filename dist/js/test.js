"use strict";

var _marked = [miao, countc].map(regeneratorRuntime.mark);

var ttt = 1;
function miao() {
    return regeneratorRuntime.wrap(function miao$(_context) {
        while (1) switch (_context.prev = _context.next) {
            case 0:
                _context.next = 2;
                return console.log("m");

            case 2:
                _context.next = 4;
                return console.log("n");

            case 4:
            case "end":
                return _context.stop();
        }
    }, _marked[0], this);
}
function countc() {
    var i;
    return regeneratorRuntime.wrap(function countc$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
            case 0:
                _context2.next = 2;
                return console.log("1");

            case 2:
                _context2.next = 4;
                return console.log("2");

            case 4:
                _context2.next = 6;
                return console.log("3");

            case 6:
                _context2.next = 8;
                return console.log("q");

            case 8:
                i = _context2.sent;

                console.log("i", i);

                if (!(ttt == 1)) {
                    _context2.next = 15;
                    break;
                }

                _context2.next = 13;
                return console.log("a");

            case 13:
                _context2.next = 17;
                break;

            case 15:
                _context2.next = 17;
                return console.log("b");

            case 17:
                _context2.next = 19;
                return console.log("4");

            case 19:
                _context2.next = 21;
                return console.log("5");

            case 21:
            case "end":
                return _context2.stop();
        }
    }, _marked[1], this);
}
var count = countc();
setInterval(function () {
    count.next(5).value;
}, 500);
setTimeout(function () {
    ttt = 2;
}, 1000);