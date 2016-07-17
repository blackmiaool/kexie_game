define(["jquery"],function () {
    let resPath = "res/";
    let z;
    let sx= 960;
    let sy= 540;

    $.fn.transform=function(v){
        this.css("-webkit-transform",v);
        this.css("-ms-transform",v);
        this.css("-o-transform",v);
        this.css("transform",v);
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

    function save(key, value) {
        if(typeof key!="string"||!value){
            console.error("wrong parameter");
            return ;
        }
        localStorage.removeItem(key)
        if(typeof value=="object"){
            localStorage.setItem(key, JSON.stringify(value));
        }else{
            localStorage.setItem(key, value);    
        }
        
    }

    function load(key) {
        let result=localStorage.getItem(key); 
        try{
            result=JSON.parse(result);
        }catch(e){
            //Just not object. It's ok.
        }
        
        return result;
    }
    function setZ(thisz){
        z=thisz;
    }
    function getUid() {
        if(z){
            z.uid++;
            return z.uid;
        }else{
            return 0;
        }
        
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
    var exports = {
        resPath,
        color,
        find_index,
        clone,
        load,
        save,
        g,
        setZ,
        getUid,
        local,
        sx,
        sy,
    }
    return exports;

})