import Header from "./Componants/Header/Header";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Skill from "./Sections/Skill";
import Project from "./Sections/Project";
import Contact from "./Sections/Contact";

function App() {
	return (
		<>
			<Header />
			<main className="px-[10%]">
				<Home />
				<About />
				<Skill />
				<Project />
				<Contact />
			</main>
		</>
	);
}

export default App;
