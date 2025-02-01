function showSkills(category) {
    let sections = document.querySelectorAll('.content');
    let tabs = document.querySelectorAll('.tab');

    sections.forEach(section => {
        section.classList.remove('active');
    });

    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    document.getElementById(category).classList.add('active');
    event.target.classList.add('active');
}

document.querySelector('.nav-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
});

function sendEmail() {
    window.location.href = "mailto:udaykakade2525@gmail.com?subject=Contact%20Request";
}

function sendAnEmail() {
    window.location.href = "mailto:udaykakade2525@gmail.com"
}