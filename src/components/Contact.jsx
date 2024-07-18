
function Contact() {
    return(
        <div className="contact">
            <div className="title">
                <h2>contact.</h2>
            </div>

            <form action="javascript:void(0)">
                    <input type="text" name="name" id="name" placeholder="name"/>
                    <input type="email" name="email" id="email" placeholder="email"/>
                    <textarea name="message" id="message" placeholder="message"></textarea>
                    <button type="submit" id="submit">send</button>
            </form>
        </div>
    );
}

export default Contact