document.getElementById("Add").onclick = function () {
    var ul = document.getElementById("sidemenu");
    var oldTemplate = document.getElementById("teamTemplate");
    var li = oldTemplate.cloneNode(true);
    oldTemplate.id = (ul.childNodes.length - 5).toString();
    var add = document.getElementById("Add");
    li.childNodes[1].textContent = "Unnamed Team";
    li.childNodes[1].href = li.childNodes[1].href + "1";
    li.childNodes[3].id = li.childNodes[3].id + "1";
    li.className = "parent";
    ul.appendChild(li);
    ul.appendChild(add);
};

document.getElementById("NameEdit").onclick = function () {
    var name = document.getElementById("NameEnter").value;
    if (name != "") {
        document.getElementById("NameEnter").value = "";
        document.getElementById("teamTemplate").childNodes[1].textContent = name;
    }
};

document.getElementById("AddMember").onclick = function () {
    var name = document.getElementById("MemberName").value;
    document.getElementById("MemberName").value = "";
    if (name != "") {
        var childe = document.getElementById("MemberTemplate").cloneNode(true);
        childe.textContent = name;
        document.getElementById("MemberList").appendChild(childe);
    }
};
