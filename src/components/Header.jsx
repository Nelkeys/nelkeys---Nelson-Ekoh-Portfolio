

function Header() {

    return (
        <header className="header">
            <div className="lic">
                <h1 className="logo">nelkeys<span>.</span></h1>

                <i class='bx bx-menu menu-fk'></i>
                <i class='bx bx-x'></i>
            </div>
            

            <nav>
                <ul>
                    <li><a href="#">about</a></li>
                    <li><a href="#">skills</a></li>
                    <li><a href="#">portfolio</a></li>
                    <li><a href="#">contact</a></li>
                </ul>
            </nav>
        </header>
    );

}

export default Header