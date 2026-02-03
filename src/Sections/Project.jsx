import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// Screenshots
import home from "../assets/ProjectImgs/Full-stac_e-comm/HomePage.png";
import productList from "../assets/ProjectImgs/Full-stac_e-comm/ProductListing.png";
import productDetail from "../assets/ProjectImgs/Full-stac_e-comm/ProductDiscriptionPage.png";
import cart from "../assets/ProjectImgs/Full-stac_e-comm/CartPage.png";
import checkout from "../assets/ProjectImgs/Full-stac_e-comm/CheckoutPage.png";
import payment from "../assets/ProjectImgs/Full-stac_e-comm/PaymentPage.png";
import admin from "../assets/ProjectImgs/Full-stac_e-comm/AdminDashbordPage.png";

function Project() {
	const slides = [
		{ img: home, title: "Home Page" },
		{ img: productList, title: "Product Listing" },
		{ img: productDetail, title: "Product Details" },
		{ img: cart, title: "Cart" },
		{ img: checkout, title: "Checkout" },
		{ img: payment, title: "Payment" },
		{ img: admin, title: "Admin Dashboard" },
	];
	return (
		<section id="project" className="px-[5%] pt-[25%] md:pt-[10%]">
			{/* Heading */}
			<h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-gray-900">
				Featured Project
			</h2>

			<div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-10">
				{/* Meta */}
				<p className="text-sm text-gray-500 mb-2">
					Role:{" "}
					<span className="font-medium text-gray-700">
						Full-Stack Developer (solo)
					</span>
				</p>

				{/* Title */}
				<h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
					ClassyShop – Full-Stack E-Commerce Platform
				</h3>

				{/* Description */}
				<p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
					A production-ready e-commerce platform built with the MERN stack,
					supporting authentication, product management, cart & checkout flow,
					order lifecycle, and an admin dashboard. Designed with scalability,
					performance, and clean backend architecture in mind.
				</p>

				{/* Highlights */}
				<ul className="grid sm:grid-cols-2 gap-3 text-gray-700 mb-6">
					<li>✅ Designed REST APIs with pagination & filters</li>
					<li>✅ JWT + refresh token authentication</li>
					<li>✅ Cloudinary image upload & optimization</li>
					<li>✅ Fully responsive UI (mobile → desktop)</li>
				</ul>

				{/* Tech Stack */}
				<div className="flex flex-wrap gap-2 mb-8">
					{[
						"React",
						"React Router",
						"Tailwind CSS",
						"Material UI",
						"Node.js",
						"Express.js",
						"MongoDB",
						"JWT Authentication",
						"Firebase Auth",
						"Cloudinary",
						"Razorpay Integration",
					].map((tech) => (
						<span
							key={tech}
							className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-700 border border-blue-100"
						>
							{tech}
						</span>
					))}
				</div>

				{/* Preview */}
				<div className="rounded-xl overflow-hidden border border-gray-200 mb-8">
					<Swiper
						modules={[Pagination, Autoplay]}
						pagination={{ clickable: true }}
						autoplay={{ delay: 3000 }}
						spaceBetween={20}
						className="project-swiper"
					>
						{slides.map((slide, index) => (
							<SwiperSlide key={index}>
								<div className="relative">
									<img
										src={slide.img}
										alt={`ClassyShop – ${slide.title}`}
										className="w-full object-cover rounded-lg"
										loading="lazy"
									/>

									{/* Title overlay */}
									<div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm md:text-base px-4 py-2">
										{slide.title}
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				{/* Actions */}
				<div className="flex gap-4 flex-wrap">
					<a
						href="https://classyshop.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition"
					>
						<FaExternalLinkAlt />
						Live Demo
					</a>

					<a
						href="https://github.com/SurajPatil29/full-stack_e-comm"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 font-medium hover:bg-gray-100 transition"
					>
						<FaGithub />
						Source Code
					</a>
				</div>
			</div>
		</section>
	);
}

export default Project;
