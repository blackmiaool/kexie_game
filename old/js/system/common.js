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
    exports.local = {
        set: (a, b) => {
            if (typeof (b) == "object")

                localStorage.setItem(a, JSON.stringify(b));
            else
                localStorage.setItem(a, b);
        },
        get: (a) => {
            var item = localStorage.getItem(a);
            var ret = item;
        
            if (item) {
                try {
                    ret = JSON.parse(item);
                } catch (e) {
                    //whatever
                }
            }

            return ret;
        },
        rm: (a) => {
            localStorage.removeItem(a)
        }
    };
    return exports;

})

