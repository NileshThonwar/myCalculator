
        let memory = 0;
        let inp = document.getElementById("inp")
        let parda = document.getElementById("parda")
        let mSave = document.getElementById("mSave")
        let mClear = document.getElementById("mClear")
        console.log(inp)
        function add(x) {
            if (parda.style.display == "none") {
                inp.value += x;

            }
            else {
                inp.disabled = true;
            }
        }
        function clearField() {
            inp.value = "";
        }
        function delField() {
            inp.value = inp.value.substr(0, inp.value.length - 1);
        }
        function calculate() {
            inp.value = eval(inp.value)
        }
        function displayOff() {
            let btn = document.getElementById("btn")
            clearField()
            if (btn.innerHTML == "Off") {
                btn.style.backgroundColor = "green"
                btn.innerHTML = "On"
                parda.style.display = "block"
            }
            else {
                btn.style.backgroundColor = "red"
                btn.innerHTML = "Off"
                parda.style.display = "none"
            }
        }
        function addMemoryPlus() {
            memory = inp.value;
            mval.innerHTML = `M:${memory}`
            if (memory > 0) {
                mSave.style.border = "2px solid black"
                mClear.style.backgroundColor = "red"
                mval.innerHTML = `M:${memory}`
            }
            return memory;
        }
        function callMemory() {
            inp.value += memory;
        }
        function addmemoryMinus() {
            memory = memory - inp.value;
            mClear.style.backgroundColor = "red"
            mSave.style.border = "2px solid black"
            mval.innerHTML = `M:${memory}`
            return memory;
        }
        function clearMemory() {
            memory = "";
            mval.innerHTML = "M:";
            mClear.style.backgroundColor = "#ff7d7d"
            mSave.style.border = "none"
        }
        let mval = document.getElementById("mVal")
        console.log(mval)
        function changeOpr() {
            if (inp.value < 0) {
                inp.value = inp.value * -1;
            }
        }
    