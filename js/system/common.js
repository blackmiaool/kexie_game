define(function () {
    var exports = {
        clone: (myObj) => {
            if (typeof (myObj) != 'object') return myObj;
            if (myObj == null) return myObj;
            var myNewObj = new Object();
            for (var i in myObj)
                myNewObj[i] = clone(myObj[i]);
            return myNewObj;
        },
        color: (r, g, b) => {
            return "rgb(" + r + "," + g + "," + b + ")"
        },
    }
    exports.g = function (str) {
        return "res/" + str
    }
    return exports;

})