document.getElementById("Add").onclick = function () {
    var ul = document.getElementById("sidemenu");
    var oldTemplate = document.getElementById("teamTemplate");
    var li = oldTemplate.cloneNode(true);
    oldTemplate.id = "used";
    var add = document.getElementById("Add");
    li.childNodes[1].textContent = "Unnamed Team";
    li.childNodes[1].href = li.childNodes[1].href + "1";
    li.childNodes[3].id = li.childNodes[3].id + "1";
    li.className = "parent";
    ul.appendChild(li);
    ul.appendChild(add);
};
