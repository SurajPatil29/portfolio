import Navbar from "./Navbar";
import HeaderSectionLogo from "./HeaderSectionLogo";

function Header() {
	return (
		<header className="fixed top-0 w-full bg-white/80 backdrop-blur border-b z-50">
			<div className="flex items-center justify-around px-6 py-3">
				<HeaderSectionLogo />
				<Navbar />
			</div>
		</header>
	);
}

export default Header;
