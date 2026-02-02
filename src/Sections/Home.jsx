import TypeWriter from "../Componants/TypeWriter";

function Home() {
	return (
		<section
			id="home"
			className="
        text-center
        pt-[120px]
        md:pt-[180px]
        w-full
        max-w-6xl
        mx-auto
        px-4
      "
		>
			{/* Name */}
			<h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
				Hi, I’m <span className="text-blue-600">Suraj Patil</span>
			</h1>

			{/* Role */}
			<div className="mb-6">
				<TypeWriter text="Full-Stack MERN Developer" />
			</div>

			{/* Description */}
			<p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-8 mb-10">
				Full-Stack MERN Developer with hands-on experience building scalable web
				applications using <b>React</b>, <b>Node.js</b>, <b>Express</b>, and{" "}
				<b>MongoDB</b>. Skilled in responsive UI design, RESTful API
				development, authentication, and database integration, with a strong
				focus on clean architecture and performance.
			</p>

			{/* CTA Buttons */}
			<div className="flex justify-center gap-4 flex-wrap">
				<a
					href="#project"
					className="
            px-6 py-3
            rounded-lg
            bg-blue-600
            text-white
            font-medium
            hover:bg-blue-700
            transition
          "
				>
					View Projects
				</a>

				<a
					href="#contact"
					className="
            px-6 py-3
            rounded-lg
            border
            border-gray-300
            font-medium
            hover:bg-gray-100
            transition
          "
				>
					Contact Me
				</a>
			</div>
		</section>
	);
}

export default Home;
