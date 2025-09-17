"use client"
import Layout from "../../components/layout/Layout"
import SubscribeSection from "../../components/sections/SubscribeSection"
import { useState } from "react"

export default function Contact() {
	const [formData, setFormData] = useState({
		fullname: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	})
	const [loading, setLoading] = useState(false)
	const [showModal, setShowModal] = useState(false)

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setLoading(true)

		setTimeout(() => {
			setLoading(false)
			setShowModal(true)
			setFormData({
				fullname: '',
				email: '',
				phone: '',
				subject: '',
				message: ''
			})
		}, 2000)
	}

	const closeModal = () => {
		setShowModal(false)
	}

	return (
		<Layout breadcrumbTitle="contact">
			<section className="contact-section padding">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div
								className="contact-content"
								style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px", position: "relative" }}
							>
								<h3 className="fw-bold mb-3 d-flex justify-content-center align-items-center gap-2"
									style={{ fontSize: "1.75rem", color: "gray" }}>
									Contact Us
								</h3>

								<p style={{ marginBottom: "40px", fontSize: "1rem", lineHeight: "1.6", color: "#444" }}>
									We believe good journalism starts with listening. If you have a question, feedback, or a story tip, we'd love to hear from you.
								</p>

								<div
									className="contact-form-wrap"
									style={{ borderRadius: "8px" }}
								>
									<h3 className="title text-left" style={{ marginBottom: "10px", fontSize: "1.3rem", fontWeight: "600", color: "gray" }}>
										Get in Touch
									</h3>

									<p style={{ marginBottom: "25px", fontSize: "0.95rem", color: "#555" }}>
										Quickly share your thoughts or questions using the form below.
									</p>

									<form onSubmit={handleSubmit}>
										<div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
											<input
												type="text"
												name="fullname"
												placeholder="Name"
												value={formData.fullname}
												onChange={handleInputChange}
												required
												style={{ flex: 1, borderRadius: "6px", border: "1px solid #ddd", padding: "12px 14px", fontSize: "0.95rem" }}
											/>
											<input
												type="email"
												name="email"
												placeholder="Email"
												value={formData.email}
												onChange={handleInputChange}
												required
												style={{ flex: 1, borderRadius: "6px", border: "1px solid #ddd", padding: "12px 14px", fontSize: "0.95rem" }}
											/>
										</div>

										<div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
											<input
												type="text"
												name="phone"
												placeholder="Phone Number"
												value={formData.phone}
												onChange={handleInputChange}
												required
												style={{ flex: 1, borderRadius: "6px", border: "1px solid #ddd", padding: "12px 14px", fontSize: "0.95rem" }}
											/>
											<input
												type="text"
												name="subject"
												placeholder="Subject"
												value={formData.subject}
												onChange={handleInputChange}
												required
												style={{ flex: 1, borderRadius: "6px", border: "1px solid #ddd", padding: "12px 14px", fontSize: "0.95rem" }}
											/>
										</div>

										<div style={{ marginBottom: "15px" }}>
											<textarea
												name="message"
												cols={30}
												rows={5}
												placeholder="Message"
												value={formData.message}
												onChange={handleInputChange}
												required
												style={{ width: "100%", borderRadius: "6px", border: "1px solid #ddd", padding: "12px 14px", fontSize: "0.95rem" }}
											/>
										</div>

										<button
											type="submit"
											disabled={loading}
											style={{
												background: loading ? "#ccc" : "#2077b6",
												color: "#fff",
												padding: "12px 28px",
												border: "none",
												borderRadius: "6px",
												cursor: loading ? "not-allowed" : "pointer",
												fontWeight: "500",
												position: "relative",
												minWidth: "140px",
											}}
										>
											{loading ? "Sending..." : "Send Message"}
										</button>
									</form>

									{/* Inline Loading */}
									{loading && (
										<div
											style={{
												position: "absolute",
												top: 0,
												left: 0,
												width: "100%",
												height: "100%",
												background: "rgba(255, 255, 255, 0.8)",
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												zIndex: 10,
												borderRadius: "8px",
											}}
										>
											<div
												style={{
													border: "5px solid #f3f3f3",
													borderTop: "5px solid #2077b6",
													borderRadius: "50%",
													width: "50px",
													height: "50px",
													animation: "spin 1s linear infinite",
												}}
											/>
										</div>
									)}

									<style>{`
                    @keyframes spin {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                  `}</style>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Success Modal */}
			{showModal && (
				<div
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: "rgba(0, 0, 0, 0.6)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						zIndex: 1000,
					}}
					onClick={closeModal}
				>
					<div
						style={{
							backgroundColor: "#fff",
							borderRadius: "12px",
							padding: "40px",
							maxWidth: "500px",
							width: "90%",
							boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
							textAlign: "center",
							position: "relative",
						}}
						onClick={(e) => e.stopPropagation()}
					>
						<div
							style={{
								width: "80px",
								height: "80px",
								backgroundColor: "#28a745",
								borderRadius: "50%",
								margin: "0 auto 25px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
								<polyline points="20,6 9,17 4,12"></polyline>
							</svg>
						</div>

						<h3 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#222", marginBottom: "15px" }}>
							Thank you for reaching out
						</h3>

						<p style={{ fontSize: "1rem", color: "#666", lineHeight: "1.5", marginBottom: "30px" }}>
							We sincerely appreciate your message, and our team will review it carefully. </p>

						<button
							onClick={closeModal}
							style={{
								backgroundColor: "#2077b6",
								color: "#fff",
								border: "none",
								padding: "12px 30px",
								borderRadius: "6px",
								fontSize: "1rem",
								fontWeight: "500",
								cursor: "pointer",
								transition: "background-color 0.3s ease",
							}}
							onMouseOver={(e) => (e.target.style.backgroundColor = "#1a6ca3")}
							onMouseOut={(e) => (e.target.style.backgroundColor = "#2077b6")}
						>
							Continue Reading
						</button>

						<button
							onClick={closeModal}
							style={{
								position: "absolute",
								top: "15px",
								right: "15px",
								background: "none",
								border: "none",
								fontSize: "24px",
								color: "#999",
								cursor: "pointer",
								padding: "5px",
								lineHeight: 1,
							}}
							onMouseOver={(e) => (e.target.style.color = "#666")}
							onMouseOut={(e) => (e.target.style.color = "#999")}
						>
							×
						</button>
					</div>
				</div>
			)}

			<SubscribeSection />
		</Layout>
	)
}
