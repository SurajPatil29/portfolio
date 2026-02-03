import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { FiMenu } from "react-icons/fi";

function Navbar() {
	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 750);
	const [anchorEl, setAnchorEl] = useState(null);

	const resumeDownload =
		"https://drive.google.com/uc?export=download&id=1M0J5eOeyb2IXfLMeQejJT6iPj1yIVG4w";

	useEffect(() => {
		const handleResize = () => setIsDesktop(window.innerWidth >= 750);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const menuItems = [
		{ label: "Home", href: "#home" },
		{ label: "About", href: "#about" },
		{ label: "Skill", href: "#skill" },
		{ label: "Project", href: "#project" },
		{ label: "Contact", href: "#contact" },
	];

	return (
		<div className="p-4">
			{isDesktop ? (
				<nav className="flex items-center gap-8">
					{menuItems.map((item) => (
						<a
							key={item.label}
							href={item.href}
							className="text-gray-700 hover:text-blue-600 font-medium relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all"
						>
							{item.label}
						</a>
					))}

					<Button variant="contained" color="primary" href={resumeDownload}>
						Resume
					</Button>
				</nav>
			) : (
				<>
					<IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
						<FiMenu />
					</IconButton>

					<Menu
						anchorEl={anchorEl}
						open={Boolean(anchorEl)}
						onClose={() => setAnchorEl(null)}
					>
						{menuItems.map((item) => (
							<MenuItem
								key={item.label}
								component="a"
								href={item.href}
								onClick={() => setAnchorEl(null)}
							>
								{item.label}
							</MenuItem>
						))}

						<MenuItem
							component="a"
							href={resumeDownload}
							onClick={() => setAnchorEl(null)}
						>
							Resume
						</MenuItem>
					</Menu>
				</>
			)}
		</div>
	);
}

export default Navbar;
