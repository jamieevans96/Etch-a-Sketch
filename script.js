const content = document.querySelector("#content");

for (i = 1; i < 257; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', 'div');

    div.addEventListener('mouseover', function (e) {
        e.target.style.background = 'black';
    });

    content.appendChild(div);
}