document.querySelector('h1').addEventListener('click', function () {
    this.style.color = 'red';
});

document.querySelectorAll('nav a').forEach(function (link) {
    link.addEventListener('mouseover', function () {
        this.style.fontWeight = 'bold';
    });

    link.addEventListener('mouseout', function () {
        this.style.fontWeight = 'normal';
    });
});
