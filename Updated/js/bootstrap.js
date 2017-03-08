var nextPage;
var clickedTeam;

document.getElementById("Add").onclick = function () {
    addTeam("Unnamed Team");
};

function addTeam(name) {
    var ul = document.getElementById("sidemenu");
    var oldTemplate = document.getElementById("teamTemplate");
    var li = oldTemplate.cloneNode(true);
    oldTemplate.id = (ul.childNodes.length - 5).toString();
    var add = document.getElementById("Add");
    li.childNodes[1].textContent = name;
    li.childNodes[1].href = li.childNodes[1].href + "1";
    li.childNodes[3].id = li.childNodes[3].id + "1";
    li.className = "parent";
    ul.appendChild(li);
    ul.appendChild(add);
}

document.getElementById("NameEdit").onclick = function () {
    var name = document.getElementById("NameEnter").value;
    if (name != "") {
        document.getElementById("NameEnter").value = "";
        clickedTeam.childNodes[1].textContent = name;
        clickedTeam.className = "parent temp";
        var elem = clickedTeam;
        var r = 0;
        var g = 69;
        var b = 111;
        var id = setInterval(frame, 5);
        function frame() {
            if (b == 255) {
                clickedTeam.className = "parent active"
                clearInterval(id);
            } else {
                r++;
                g += 2;
                b += 3;
                elem.style.backgroundColor = "rgb(" + r.toString() + "," + g.toString() + "," + b.toString() + ")";
            }
        }
    }
};

document.getElementById("AddMember").onclick = function () {
    var name = document.getElementById("MemberName").value;
    document.getElementById("MemberName").value = "";
    if (name != "") {
        var childe = document.getElementById("MemberTemplate").cloneNode(true);
        childe.textContent = name;
        document.getElementById("MemberList").appendChild(childe);
        var elem = document.getElementById("memberBox");
        var r = 191;
        var g = 191;
        var b = 191;
        var id = setInterval(frame, 5);
        function frame() {
            if (r == 255) {
                clearInterval(id);
            } else {
                r++;
                g++;
                b++;
                elem.style.backgroundColor = "rgb(" + r.toString() + "," + g.toString() + "," + b.toString() + ")";
            }
        }
    }
};

function navSite(e) {
    window.name = "";
    var lastclicked = e.parentNode.parentNode.parentNode.id;
    window.name += lastclicked + "|";
    window.name += document.getElementById("teamTemplate").childNodes[1].textContent + "|";
    for (i = 1; i < 20; i++) {
        window.name += document.getElementById(i.toString()).childNodes[1].textContent + "|";
    }
}

function loadUp() {
    var ind = window.name.indexOf("|");
    var start = 0;
    var lastclicked = window.name.substring(start, ind);
    start = ind + 1;
    ind = window.name.indexOf("|", start);
    var last = window.name.substring(start, ind);
    start = ind + 1;
    ind = window.name.indexOf("|", start);
    while (ind > 0) {
        addTeam(window.name.substring(start, ind));
        start = ind + 1;
        ind = window.name.indexOf("|", start);
    }
    if (last != "") {
        addTeam(last);
    }
    clickedTeam = document.getElementById(lastclicked);
    clickedTeam.className = "parent active";
}

function registerTransfer() {
    window.name = document.getElementById("email").value + "|" + document.getElementById("password").value;
}

function registerLoad() {
    var ind = window.name.indexOf("|");
    document.getElementById("remail").value = window.name.substring(0, ind);
    document.getElementById("rpassword").value = window.name.substring(ind + 1);
}

function registerSubmit() {
    window.name = "teamTemplate|Unnamed Team|";
}
