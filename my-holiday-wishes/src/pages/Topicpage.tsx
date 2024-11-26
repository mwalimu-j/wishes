import React from "react";

const TopicPage: React.FC = () => {
	return (
		<section className="bg-gray-100 py-16">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="text-center">
					<h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
						Data Structures and Algorithms
					</h2>
					<p className="text-base sm:text-lg text-gray-700 mb-6">
						Data Structures and Algorithms are fundamental concepts in computer
						science that allow you to solve problems efficiently. In this
						section, we’ll explore various data structures, algorithms, and
						their real-world applications.
					</p>
				</div>

				{/* Data Structures Section */}
				<div className="mb-16">
					<h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
						Data Structures
					</h3>
					<p className="text-base sm:text-lg text-gray-700 mb-4">
						A <strong>data structure</strong> is a way of organizing and storing
						data so that it can be accessed and modified efficiently. Some
						commonly used data structures include arrays, linked lists, stacks,
						queues, trees, and graphs.
					</p>

					<ul className="list-disc pl-8 text-base sm:text-lg text-gray-700 mb-4">
						<li>
							<strong>Arrays</strong>: A collection of elements, all of the same
							type, stored in contiguous memory locations.
						</li>
						<li>
							<strong>Linked Lists</strong>: A linear collection of elements,
							where each element points to the next one.
						</li>
						<li>
							<strong>Stacks</strong>: A collection that follows the Last In,
							First Out (LIFO) principle.
						</li>
						<li>
							<strong>Queues</strong>: A collection that follows the First In,
							First Out (FIFO) principle.
						</li>
						<li>
							<strong>Trees</strong>: A hierarchical structure consisting of
							nodes, with each node having a value and a list of references to
							child nodes.
						</li>
						<li>
							<strong>Graphs</strong>: A collection of nodes (vertices) and
							edges, where each edge connects two nodes.
						</li>
					</ul>
				</div>

				{/* Algorithms Section */}
				<div className="mb-16">
					<h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
						Algorithms
					</h3>
					<p className="text-base sm:text-lg text-gray-700 mb-4">
						An <strong>algorithm</strong> is a step-by-step procedure for
						solving a problem or performing a task. Some of the most important
						algorithms include sorting algorithms, searching algorithms, and
						graph algorithms.
					</p>

					<ul className="list-disc pl-8 text-base sm:text-lg text-gray-700 mb-4">
						<li>
							<strong>Sorting Algorithms</strong>: Algorithms that arrange the
							elements of a list in a specific order (e.g., Bubble Sort, Quick
							Sort, Merge Sort).
						</li>
						<li>
							<strong>Searching Algorithms</strong>: Algorithms that help locate
							an element within a collection (e.g., Linear Search, Binary
							Search).
						</li>
						<li>
							<strong>Graph Algorithms</strong>: Algorithms used to solve
							problems on graphs (e.g., Dijkstra's Algorithm, Breadth-First
							Search, Depth-First Search).
						</li>
					</ul>
				</div>

				{/* Real-World Applications Section */}
				<div className="mb-16">
					<h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
						Real-World Applications
					</h3>
					<p className="text-base sm:text-lg text-gray-700 mb-4">
						Data Structures and Algorithms are used in various real-world
						applications. Here are some examples:
					</p>

					<ul className="list-disc pl-8 text-base sm:text-lg text-gray-700 mb-4">
						<li>
							<strong>Web Search</strong>: Searching and indexing large amounts
							of data on the web using algorithms like Binary Search and Graph
							Search.
						</li>
						<li>
							<strong>Social Media</strong>: Graph algorithms used to detect
							relationships between users, suggest friends, or recommend
							content.
						</li>
						<li>
							<strong>Navigation Systems</strong>: Dijkstra’s Algorithm and
							other graph-based algorithms are used in GPS navigation systems.
						</li>
						<li>
							<strong>Cryptography</strong>: Data structures and algorithms are
							essential for securing communications, such as encryption and
							hashing algorithms.
						</li>
					</ul>
				</div>

				{/* Learn More Button */}
				<div className="text-center">
					<a
						href="https://www.geeksforgeeks.org/data-structures/"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block bg-blue-500 text-white text-base sm:text-lg font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition-all">
						Learn More
					</a>
				</div>
			</div>
		</section>
	);
};

export default TopicPage;
