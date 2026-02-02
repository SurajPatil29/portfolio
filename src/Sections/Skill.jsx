import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,
	FaNodeJs,
	FaGithub,
} from "react-icons/fa";
import { SiVercel, SiRender } from "react-icons/si";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

function Skill() {
	const skillGroups = {
		Frontend: [
			{ name: "HTML", icon: <FaHtml5 /> },
			{ name: "CSS", icon: <FaCss3Alt /> },
			{ name: "JavaScript", icon: <FaJs /> },
			{ name: "React", icon: <FaReact /> },
			{ name: "Tailwind CSS", icon: <SiTailwindcss /> },
		],
		Backend: [
			{ name: "Node.js", icon: <FaNodeJs /> },
			{ name: "Express.js", icon: <SiExpress /> },
			{ name: "MongoDB", icon: <SiMongodb /> },
		],
		Tools: [
			{ name: "GitHub", icon: <FaGithub /> },
			{ name: "Vercel", icon: <SiVercel /> },
			{ name: "Render", icon: <SiRender /> },
		],
	};

	return (
		<section id="skill" className="px-[5%] pt-[25%] md:pt-[10%]">
			{/* Heading */}
			<h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-gray-900">
				Skills
			</h2>

			{/* Groups */}
			<div className="max-w-6xl mx-auto space-y-12">
				{Object.entries(skillGroups).map(([group, skills]) => (
					<div key={group}>
						<h3 className="text-xl font-semibold text-gray-800 mb-6">
							{group}
						</h3>

						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
							{skills.map((skill) => (
								<div
									key={skill.name}
									className="
                    flex flex-col items-center justify-center
                    p-6
                    bg-white
                    rounded-xl
                    border
                    border-gray-200
                    hover:border-blue-500
                    hover:shadow-md
                    transition
                    cursor-default
                  "
								>
									<div className="text-4xl text-blue-600 mb-2">
										{skill.icon}
									</div>
									<span className="text-gray-800 font-medium">
										{skill.name}
									</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Skill;
