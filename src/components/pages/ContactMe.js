function ContactMe() {

    function submitForm() {
        const name = document.getElementById("name-input").value
        const popup = document.getElementById("popup-message")

        popup.textContent = `Thank you for your submission, ${name}! We'll get back to you shortly.`

        setTimeout(() => {
            popup.textContent = ""
        }, 3000);

    }

    return (
        <div>
            <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Name</label>
            <input type="email" className="form-control" id="name-input"/>
            </div>

            <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            
            <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Your Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <button type="submit" onClick={submitForm}>Submit</button>
            <div><span id="popup-message"></span></div>
        </div>
    )
};

export default ContactMe;