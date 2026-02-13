let inputText = document.querySelector(".input");
let outputText = document.querySelector(".output");
let allBtn = document.querySelectorAll(".btn");

let str = "";
let strCopy = "";

const toWords = new ToWords({ localeCode: "hi-IN" });


for (let btn of allBtn) {
    btn.addEventListener("click", function () {
        let btnId = this.getAttribute("id");
        // console.log(btnId);

        this.style.backgroundColor = "#24616eff";
        setTimeout(() => {
            btn.style.backgroundColor = "#5c94a1";
        }, 200);



        inputText.style.transform = "translateY(0px)";
        inputText.style.opacity = "1";
        outputText.style.color = "#44494c";
        outputText.style.fontSize = "20px";
        outputText.style.transform = "translateY(0px)";

        str += btnId;

        if (btnId == "=") {
            str = str.slice(0, -1);
            inputText.style.transform = "translateY(-20px)";
            inputText.style.opacity = "0";
            outputText.style.color = "#323232";
            outputText.style.fontSize = "23px";
            outputText.style.transform = "translateY(-10px)";
            // inputText.style.opacity = "0";

            outputText.innerText = toWords.convert(eval(str));

            btn.style.backgroundColor = "#266f7cff";
            setTimeout(() => {
                btn.style.backgroundColor = "#467c86";
            }, 200);

        }
        strCopy = str;


        if (btnId == "C") {
            str = "";
            strCopy = "";
            outputText.innerText = "";
            inputText.innerText = "";
        }

        inputText.innerHTML = strCopy;


        if (btnId == "back") {
            str = str.slice(0, -4);
            str = str.slice(0, -1);
            inputText.innerText = str;
            for (let i = 0; i < str.length; i++) {
                if (str[i] == "+" || str[i] == "-" || str[i] == "*" || str[i] == "/") {
                    if (str[i + 1] == "1" || str[i + 1] == "2" || str[i + 1] == "3" || str[i + 1] == "4" || str[i + 1] == "5" || str[i + 1] == "6" || str[i + 1] == "7" || str[i + 1] == "8" || str[i + 1] == "9" || str[i + 1] == "0") {
                        outputText.innerText = eval(str);
                        if (str.length == 0) {
                            outputText.innerText = "";
                            inputText.innerText = "";
                        }
                    }
                }
            }
        }


        for (let i = 0; i < str.length; i++) {
            if (str[i] == "+" || str[i] == "-" || str[i] == "*" || str[i] == "/") {
                if (str[i + 1] == "1" || str[i + 1] == "2" || str[i + 1] == "3" || str[i + 1] == "4" || str[i + 1] == "5" || str[i + 1] == "6" || str[i + 1] == "7" || str[i + 1] == "8" || str[i + 1] == "9" || str[i + 1] == "0") {
                    outputText.innerText = eval(str);
                    if (btnId == "=") {
                        outputText.innerText = toWords.convert(eval(str));
                    }
                }
            }
        }

    });
}
