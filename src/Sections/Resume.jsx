import Button from "@mui/material/Button";

function Resume() {
	const downloadResume = () => {
		window.location.href =
			"https://drive.google.com/uc?export=download&id=10licJK7TbuIdn3Mv53Be0MV2iJIz-FKO";
	};

	return (
		<Button
			variant="contained"
			color="primary"
			onClick={downloadResume}
			sx={{
				backgroundColor: "#EF4444",
				"&:hover": { backgroundColor: "#DC2626" },
				textTransform: "none",
				fontWeight: 600,
				borderRadius: "8px",
			}}
		>
			Resume
		</Button>
	);
}

export default Resume;
