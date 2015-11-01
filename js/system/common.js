define(function () {
    var exports = {
        color: (r, g, b) => {
            return "rgb(" + r + "," + g + "," + b + ")"
        },
        find_index: (array, key, value) => {
            for (var i in array) {
                if (array[i][key] == value) {
                    return i;
                }
            }
        },
        clone,
        load_object,
        save_object,
    }

    function clone(myObj) {
        if (typeof (myObj) != 'object') return myObj;
        if (myObj == null) return myObj;
        var myNewObj = new Object();
        for (var i in myObj)
            myNewObj[i] = clone(myObj[i]);
        return myNewObj;
    }
    exports.g = function (str) {
        return "res/" + str
    }

    function save_object(key, obj) {
        localStorage.removeItem(key)
        localStorage.setItem(key, JSON.stringify(obj));
    }

    function load_object(key) {
        return JSON.parse(localStorage.getItem(key))
    }
    return exports;

})