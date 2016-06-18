define(function () {
    let resPath = "/res/";
    let v;
    var exports = {
        resPath,
        color,
        find_index,
        clone,
        load_object,
        save_object,
        g,
        setV,
        getUid,
        local
    }

    function find_index(array, key, value) {
        for (var i in array) {
            if (array[i][key] == value) {
                return i;
            }
        }
    }

    function color(r, g, b) {

        return `rgb(${r},${g},${b})`;

    }

    function clone(myObj) {
        if (typeof (myObj) != 'object') return myObj;
        if (myObj == null) return myObj;
        var myNewObj = new Object();
        for (var i in myObj)
            myNewObj[i] = clone(myObj[i]);
        return myNewObj;
    }

    function g(str) {
        return resPath + str
    }

    function save_object(key, obj) {
        localStorage.removeItem(key)
        localStorage.setItem(key, JSON.stringify(obj));
    }

    function load_object(key) {
        return JSON.parse(localStorage.getItem(key))
    }
    function setV(thisv){
        v=thisv;
    }
    function getUid() {
        v.uid++;
        return v.uid;
    }
    let local = {

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