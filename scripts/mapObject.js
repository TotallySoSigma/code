function run() {
    console.log("Running Please wait...");
    let map = new Map();
    let dropdown = document.getElementById("choice").value;
    let input = document.getElementById("textarea").value;
    let input2 = document.getElementById("textarea2").value;
    if (input2 == ""){
        input2 = undefined;
    } else {
        if (dropdown.value == set) {
            //
        } else if (dropdown.value == "get") {
            
        } else if (dropdown.value == "has") {

        } else if (dropdown.value == "deletE") {

        } else if (dropdown.value == "clear") {

        } else if (dropdown.value == "size") {

        }
    }
    console.log(map);
}
//Methods: set(), get(), has(), delete(), clear(), size()
function Map() {
    let array = [];
    this.set = function (key, value) {
        array[array.length] = {
            key: value
        };
    }
    this.get = function (item) {////////////////////////////////////////////////////////////
        return
    }
    this.has = function (item) {////////////////////////////////////////////////////////////
        return
    }
    this.deletE = function (item) {////////////////////////////////////////////////
        return
    }
    this.clear = function () {
        for (let i = 0; i < array.length; i++) {
            array.length = 0;

        }
    }
    this.size = function () {
        return array.length;
    }
}