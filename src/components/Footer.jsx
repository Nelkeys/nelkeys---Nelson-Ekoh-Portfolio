
function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>&copy; {currentYear} Copoyright: Nelson Ekoh</p>

            <div className="social-icons">
                <i class='bx bxl-facebook-circle' onClick={() => window.open('https://www.facebook.com/profile.php?id=61560002280377&mibextid=ZbWKwL', '_blank')}></i>
                <i class='bx bxl-github' onClick={() => window.open('https://github.com/Nelkeys', '_blank')}></i>
                <i class='bx bxl-instagram-alt' onClick={() => window.open('https://www.instagram.com/_nelkeys?igsh=MWlwcHQ5dHIxMTF5Yw==', '_blank')}></i>
                <i class='bx bxl-linkedin-square' onClick={() => window.open('https://www.linkedin.com/in/nelson-ekoh-05561a264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank')}></i>
            </div>
        </footer>
    );
}

export default Footer