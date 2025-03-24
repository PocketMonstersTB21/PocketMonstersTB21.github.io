document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const promoCarousel = document.getElementById("promoCarousel");

    promoCarousel.classList.remove("show-carousel");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        if (email === "admin@pokemongo.com" && password === "password") {
            document.getElementById("navbar-guest").classList.add("d-none");
            document.getElementById("navbar-auth").classList.remove("d-none");

            promoCarousel.classList.add("show-carousel");


            const carouselInstance = new bootstrap.Carousel(promoCarousel, {
                interval: 3000,
                ride: "carousel",
            });

            const loginModalElement = document.getElementById("loginModal");
            const loginModal = bootstrap.Modal.getInstance(loginModalElement);
            if (loginModal) {
                loginModal.hide();
            }

            setTimeout(() => {
                promoCarousel.scrollIntoView({ behavior: "smooth" });
            }, 500);
        } else {
            alert("Invalid email or password. Please try again!");
        }
    });
});


let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        if (index >= slides.length) {
            index = 0;
        } else if (index < 0) {
            index = slides.length - 1;
        }


        const offset = -index * 100;
        document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;

        dots.forEach((dot) => dot.classList.remove('active'));
        dots[index].classList.add('active');

        currentIndex = index;
    }
    setInterval(() => {
        currentIndex++;
        showSlide(currentIndex);
    }, 4000);

    showSlide(currentIndex);
