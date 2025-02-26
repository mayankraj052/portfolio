import { useState } from "react";

export default function Contact() {
    const [userEmail, setUserEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        if (!userEmail || !message) {
            alert("Please enter your email and message.");
            return;
        }

        const mailtoLink = `mailto:mayankrajsingh7646@gmail.com?subject=Message from ${userEmail}&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Send Me a Message
                </h2>
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-lg text-gray-700 mb-6">
                        Have a question or want to connect? Send me a message!
                    </p>
                    <div className="space-y-4">
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                            required
                        />
                        <textarea
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="4"
                            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                            required
                        ></textarea>
                        <button
                            onClick={handleSendMessage}
                            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors text-lg"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
