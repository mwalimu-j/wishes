import React from "react";

const About: React.FC = () => {
	return (
		<section className="bg-gray-900 text-white py-16">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="text-center">
					<h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
					<p className="text-lg text-gray-300 mb-6">
						Hello! I’m Joshua Mwalimu, a passionate software engineering student at the University of Eastern Africa, Baraton. 
						My journey in software development is driven by a love for creating meaningful digital solutions that meet users' expectations and adapt to the ever-evolving world of technology.
					</p>

					<div className="text-left max-w-2xl mx-auto">
						<h3 className="text-2xl font-semibold text-white mb-4">
							My Specializations
						</h3>
						<p className="text-lg text-gray-300 mb-4">
							As a software engineer, I specialize in designing, developing, and maintaining software systems. My work involves problem-solving, writing clean and efficient code, and leveraging the latest technologies to create innovative solutions. Whether it's building a dynamic website, crafting a user-friendly application, or developing complex backend systems, I ensure every project aligns with modern standards and best practices.
						</p>

						<h3 className="text-2xl font-semibold text-white mb-4">
							My Approach
						</h3>
						<p className="text-lg text-gray-300 mb-4">
							I always embrace technological advancements, ensuring my skills remain current and relevant in the fast-paced world of software engineering. I believe in continuous learning and adapting to new tools, languages, and frameworks to deliver high-quality products.
						</p>
						
						<p className="text-lg text-gray-300 mb-4">
							My goal is to create websites and applications that are not only functional but also meaningful, enhancing user experiences and solving real-world problems. By focusing on usability, performance, and scalability, I aim to bring value to every project I work on.
						</p>

						<h3 className="text-2xl font-semibold text-white mb-4">
							Let’s Connect
						</h3>
						<p className="text-lg text-gray-300">
							If you’re interested in learning more about what I do or would like to collaborate on a project, feel free to explore my work or get in touch. Together, we can create something impactful and meaningful!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
