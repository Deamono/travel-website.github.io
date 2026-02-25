document.addEventListener("DOMContentLoaded", function () {

    window.toggleMenu = function () {
        document.getElementById("nav-links").classList.toggle("active");
    };

    window.showContact = function () {
        alert("📞 Phone: 9967219373, 9821572299\n📧 Email: dattagurutoursandtravels@gmail.com");
    };

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    document.querySelectorAll(".fleet-card img").forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });

    window.closeModal = function () {
        modal.style.display = "none";
    };

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

});