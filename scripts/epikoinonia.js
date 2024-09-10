/*ο κώδικας για το burger menu αρχίζει εδώ*/

document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const navContainer = document.querySelector('.nav-container');

    burger.addEventListener('click', function (e) {
        e.stopPropagation();
        navContainer.classList.toggle('active'); 
    });

    document.addEventListener('click', function (e) {
        if (!navContainer.contains(e.target) && !burger.contains(e.target)) {
            navContainer.classList.remove('active');
        }
    });
});

/*ο κώδικας για το burger menu τελειώνει εδώ*/
