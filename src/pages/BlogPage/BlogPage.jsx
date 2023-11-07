

function BlogPage() {
    return (
        <div className="pt-32">
            <div className="container mx-auto p-8 bg-orange-50 flex flex-col items-center m-6 rounded-lg">
                <h1 className="text-5xl font-normal mb-8 mt-4">Understanding Web Development Concepts</h1>

                <div className="my-4 bg-orange-100 p-6 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-semibold py-3 px-6 bg-orange-50 rounded-lg inline-block mb-2">1. What is One-way Data Binding?</h2>
                    <p className="text-gray-700">
                        One-way data binding is a concept used in web development frameworks like React and Angular.
                        It means that data flows in one direction, from the source (usually the component's state) to the
                        view, and not the other way around. Changes in the source data will automatically update the view,
                        but changes in the view won't affect the source data directly. This unidirectional flow of data
                        helps in maintaining a predictable and stable application state.
                    </p>
                </div>

                <div className="my-4 bg-orange-100 p-6 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-semibold py-3 px-6 bg-orange-50 rounded-lg inline-block mb-2">2. What is NPM in Node.js?</h2>
                    <p className="text-gray-700">
                        NPM stands for Node Package Manager. It is the default package manager for Node.js, which is a
                        runtime environment for executing JavaScript on the server-side. NPM is used to install and manage
                        third-party libraries and packages for Node.js applications. It provides a convenient way to
                        distribute, reuse, and manage code dependencies, making it easier for developers to build Node.js
                        applications using external libraries and modules.
                    </p>
                </div>

                <div className="w-full my-4 bg-orange-100 p-6 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-semibold py-3 px-6 bg-orange-50 rounded-lg inline-block mb-2">3. Difference between MongoDB and MySQL</h2>
                    <p className="text-gray-700">
                        MongoDB and MySQL are both database management systems, but they have some key differences:
                        <ul className="list-disc ml-8">
                            <li>MongoDB is a NoSQL database, while MySQL is a relational database.</li>
                            <li>MongoDB stores data in a flexible, schema-less format (JSON-like documents), while MySQL uses tables with a predefined schema.</li>
                            <li>MySQL uses structured query language (SQL) for querying data, whereas MongoDB uses a flexible query language that allows for complex queries on JSON-like documents.</li>
                            <li>MongoDB is horizontally scalable, making it suitable for handling large amounts of unstructured data, while MySQL is vertically scalable and better suited for structured data.</li>
                            <li>MongoDB is a good choice for projects with evolving or undefined data structures, while MySQL is ideal for projects with well-defined schemas and ACID compliance requirements.</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BlogPage;
