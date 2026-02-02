import { FaGithub, FaLinkedin } from "react-icons/fa";
import photo_2 from "../assets/photo_2.png";

function About() {
	return (
		<section id="about" className="px-[5%] pt-[25%] md:pt-[10%]">
			<div className="max-w-6xl mx-auto">
				{/* Heading */}
				<h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">
					About Me
				</h2>

				{/* Content */}
				<div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
					{/* Profile Image */}
					<div className="shrink-0">
						<img
							src={photo_2}
							alt="Suraj Patil"
							className="
                w-[160px]
                h-[160px]
                md:w-[260px]
                md:h-[260px]
                rounded-full
                border
                border-gray-200
                shadow-md
              "
						/>
					</div>

					{/* Text */}
					<div className="text-center lg:text-left">
						<p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
							Hi, I’m{" "}
							<span className="font-semibold text-gray-900">Suraj Patil</span>{" "}
							from Maharashtra. I hold a diploma in Electrical Engineering and
							successfully transitioned into software development.
						</p>

						<p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
							I’m a{" "}
							<span className="font-semibold text-blue-600">
								Full-Stack MERN Developer
							</span>{" "}
							with experience building responsive frontends using React and
							scalable backend APIs with Node.js, Express, and MongoDB. I’ve
							worked on real-world projects involving authentication, CRUD
							operations, and RESTful APIs, and I’m continuously strengthening
							my DSA and system design fundamentals.
						</p>

						{/* Social Links */}
						<div className="flex gap-6 justify-center lg:justify-start">
							<a
								href="https://github.com/SurajPatil29"
								target="_blank"
								rel="noopener noreferrer"
								className="
                  flex items-center gap-2
                  px-4 py-2
                  border border-gray-300
                  rounded-lg
                  hover:bg-gray-100
                  transition
                "
							>
								<FaGithub size={20} />
								<span className="font-medium">GitHub</span>
							</a>

							<a
								href="https://www.linkedin.com/in/suraj-patil-602bb72a8/"
								target="_blank"
								rel="noopener noreferrer"
								className="
                  flex items-center gap-2
                  px-4 py-2
                  border border-gray-300
                  rounded-lg
                  hover:bg-gray-100
                  transition
                "
							>
								<FaLinkedin size={20} />
								<span className="font-medium">LinkedIn</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
