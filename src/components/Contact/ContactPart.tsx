const ContactPart = () => {
    return (
        <div className="absolute  bg-[#1a1a1a]">
            <div className="flex flex-col w-124">
                <h2 className="mt-8 text-gray-300">Get in Touch</h2>
                <span className="mt-4 text-gray-300">
                    I am always open to new opportunities and collaborations. Whether you have a question or just want to say hello, feel free to send me a message.
                </span>
                <span className="mt-4 text-gray-300">
                    I am also available for freelance work, so if you have a project in mind, let's discuss how I can help you bring it to life.
                </span>
                <span className="mt-4 text-gray-300">
                    I look forward to hearing from you!
                </span>
                <a href="mailto:benjamincornet62130@outlook.fr"
                   className="mt-8 px-4 py-2 bg-[#00d8e6] w-44 text-white rounded text-center pulse-animation">Contact
                    Me</a>
            </div>
        </div>
    );
};

export default ContactPart;