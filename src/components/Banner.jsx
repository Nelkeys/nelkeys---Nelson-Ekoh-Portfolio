import hero from "../assets/hero.svg"



function Banner() {

    return (
        <div className="banner">
            <img className="hero-image" src={hero} alt="developers avatar" />

            <div className="info">
                <h2 className="hello-text">hello there!</h2>

                <p>A second year Computer Science student at the Akwa-Ibom State University (AKSU) with an interest in Software Development, UX Design and Artificial Intelligence - and seeking exciting opportunities related to the same.</p>

                <p>I am a detail oriented person and I keep my goals and tasks organized to maintain productivity. I would bring to table a wide range of software skills, ranging from design and development to writing scripts for intelligent agents. I believe that the skills that I have attained from the dynamic environment and competitive university life define me, and I am looking forward to implementing and polishing them in any opportunity that I receive.</p>

                <div className="social-icons">
                    <i class='bx bxl-facebook-circle' ></i>
                    <i class='bx bxl-github'></i>
                    <i class='bx bxl-instagram-alt' ></i>
                    <i class='bx bxl-linkedin-square' ></i>
                </div>
            </div>
        </div>
    );

}

export default Banner