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
