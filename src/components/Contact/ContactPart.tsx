const ContactPart = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-32 bg-[#1a1a1a] rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Get in Touch</h2>
            <p className="text-gray-300 text-center max-w-lg mb-6">
                Have a question or want to work together? Feel free to send me a message,
                I’m always happy to connect.
            </p>
            <a
                href="mailto:benjamincornet62130@outlook.fr"
                className="px-5 py-3 bg-[#00d8e6] text-gray-800 font-medium rounded-lg shadow hover:shadow-lg hover:bg-[#00c3d0] transition-all duration-200"
            >
                Contact Me
            </a>
        </div>
    );
};

export default ContactPart;
