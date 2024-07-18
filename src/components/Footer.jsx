
function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>&copy; {currentYear} Copoyright: Nelson Ekoh</p>

            <div className="social-icons">
                <i class='bx bxl-facebook-circle' ></i>
                <i class='bx bxl-github'></i>
                <i class='bx bxl-instagram-alt' ></i>
                <i class='bx bxl-linkedin-square' ></i>
            </div>
        </footer>
    );
}

export default Footer