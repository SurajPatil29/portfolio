import { useEffect, useState } from "react";

function TypeWriter({ text }) {
	const [displayText, setDisplayText] = useState("");
	const [index, setIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const speed = isDeleting ? 100 : 200;

		const timer = setTimeout(() => {
			if (!isDeleting && index < text.length) {
				setDisplayText((prev) => prev + text[index]);
				setIndex((prev) => prev + 1);
			} else if (isDeleting && index > 0) {
				setDisplayText((prev) => prev.slice(0, -1));
				setIndex((prev) => prev - 1);
			} else if (index === text.length) {
				setIsDeleting(true);
			} else if (index === 0) {
				setIsDeleting(false);
			}
		}, speed);

		return () => clearTimeout(timer);
	}, [index, isDeleting, text]);

	return (
		<p
			className="
        p-4 
        text-lg 
        md:text-2xl 
        lg:text-3xl 
        font-mono code-font text-red-500
      "
		>
			{displayText}|
		</p>
	);
}

export default TypeWriter;
