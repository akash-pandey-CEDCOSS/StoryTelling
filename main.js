function onSubmit() {
    var x1 = {

        "name": document.getElementById("name").value,
        "an_namee": document.getElementById("an_namee").value,
        "one_more": document.getElementById("one_more").value,
        "adjective": document.getElementById("adjective").value,
        // "verb": document.getElementById("verb").value,
        "number": document.getElementById("number").value,
        "yes": document.getElementById("yes").checked,
        // "no": document.getElementById("no").value,
        "speed": document.getElementById("speed").value,
        "quote": document.getElementById("quote").value,
        "texta": document.getElementById("texta").value,
    };
    localStorage.setItem("x1", JSON.stringify(x1));


}

function onloadData() {
    var x2 = localStorage.getItem("x1");
    var x3 = JSON.parse(x2);
    var u = document.getElementsByTagName("span");

    for (var x4 = 0; x4 < u.length; x4++) {
        switch (u[x4].className) {
            case "name":
                u[x4].innerHTML = x3.name;
                break;
            case "an_namee":
                u[x4].innerHTML = x3.an_namee;
                break;
            case "one_more":
                u[x4].innerHTML = x3.one_more;
                break;
            case "adjective":
                u[x4].innerHTML = x3.adjective;
                break;
            case "quote":
                u[x4].innerHTML = x3.quote;
                break;
            case "number":
                u[x4].innerHTML = x3.number;
                break;
            case "yes":
                u[x4].innerHTML = x3.yes ? "yes" : "No";
                break;
            case "no":
                u[x4].innerHTML = x3.no;
                break;
            case "speed":
                u[x4].innerHTML = x3.speed;
                break;
                case "texta":
                    u[x4].innerHTML=x3.texta;
                    break;




        }

    }
}