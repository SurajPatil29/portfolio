import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

function Contact() {
	return (
		<section id="contact" className="px-[5%] py-20 bg-gray-50 text-center m-5">
			{/* Heading */}
			<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
				Let’s work together
			</h2>

			<p className="text-gray-600 mb-12 text-lg">
				Open to full-time roles & internships
			</p>

			{/* Contact Cards */}
			<div className="max-w-3xl mx-auto grid gap-6 sm:grid-cols-3">
				{/* Email */}
				<div className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border hover:shadow-md transition">
					<FaEnvelope size={28} className="text-blue-600" />
					<span className="text-gray-800 font-medium">
						surajrpatil0729@gmail.com
					</span>
				</div>

				{/* Phone */}
				<div className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border hover:shadow-md transition">
					<FaPhoneAlt size={26} className="text-blue-600" />
					<span className="text-gray-800 font-medium">+91&nbsp;9325518422</span>
				</div>

				{/* LinkedIn */}
				<a
					href="https://www.linkedin.com/in/suraj-patil-602bb72a8/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border hover:shadow-md hover:text-blue-600 transition"
				>
					<FaLinkedin size={30} />
					<span className="font-medium">LinkedIn</span>
				</a>
			</div>
		</section>
	);
}

export default Contact;
