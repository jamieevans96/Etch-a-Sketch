const content = document.querySelector("#content");

    for (i = 1; i < 257; i++) {
        const div = document.createElement('div');

        div.addEventListener('mouseover', function (e) {
            e.target.style.background = 'black';
        });

        content.appendChild(div);
    }

function clearFunc() {

    var y = prompt("number");

    document.getElementById("content").style.gridTemplateRows = "repeat(" + y + ", " + (960/y) + "px)";
    document.getElementById("content").style.gridTemplateColumns = "repeat(" + y + ", " + (960/y) + "px)";

    let x = (y * y) + 1;

    for (i = 1; i < x; i++) {
        const div = document.createElement('div');

        div.addEventListener('mouseover', function (e) {
            e.target.style.background = 'black';
        });

        content.appendChild(div);
    }
}