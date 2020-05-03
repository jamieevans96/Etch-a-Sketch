const content = document.querySelector("#content");

    for (i = 1; i < 257; i++) {
        const div = document.createElement('div');
        div.setAttribute('id', 'sqr' + i);

        div.addEventListener('mouseover', function (e) {
            e.target.style.background = 'black';
        });

        content.appendChild(div);
    }


function clearFunc() {

    var c = document.getElementById("content").childElementCount;

    for (i = 0; i < c; i++) {
        var divTemp = document.getElementById("content");
        divTemp.removeChild(divTemp.childNodes[0]);
    }

    var y = prompt("number");

    document.getElementById("content").style.gridTemplateRows = "repeat(" + y + ", " + (960/y) + "px)";
    document.getElementById("content").style.gridTemplateColumns = "repeat(" + y + ", " + (960/y) + "px)";

    let x = (y * y) + 1;

    for (i = 1; i < x; i++) {
        const div = document.createElement('div');
        div.setAttribute('id', 'sqr' + i);

        div.style.background = "#3bbced";

        div.addEventListener('mouseover', function (e) {
            e.target.style.background = 'black';
        });

        content.appendChild(div);
    }
}

function multiColor() {
    var c = document.getElementById("content").childElementCount;

    for (i = 1; i < (c + 1); i++) {
        const div = document.querySelector("sqr" + i);

        document.getElementById('sqr' + i).addEventListener('mouseover', function (e) {
            e.target.style.background = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')';
        });
    }
}

function blackPass() {
    var c = document.getElementById("content").childElementCount;



    for (i = 1; i < (c + 1); i++) {
        let x = 90;

        const div = document.querySelector("sqr" + i);

        document.getElementById('sqr' + i).addEventListener('mouseover', function (e) {
            e.target.style.background = 'hsl(0, 0%, ' + x + '%)';
            x = x - 10;
        });
    }
}