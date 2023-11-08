import { Helmet } from "react-helmet";

const Blogs = () => {
    return (
        <div className="w-9/12 mx-auto py-10 dark:text-slate-50">
            <Helmet>
                <title>Blogs page</title>
            </Helmet>
            <div className="shadow-md p-6">
                <div className="">
                    <h1 className="text-2xl font-semibold font-[Suranna]">What is One way data binding?</h1>
                </div>
                <div className="">
                    <p className="py-2">
                        One-way data binding, as the name suggests, flows data in a single direction.It updates the user interface (UI) based on changes in the application's data model.The UI elements are dependent on the data source, not the other way around.In one-way data binding, changes in the data source trigger updates in the UI.It's commonly used for displaying static or read-only information.One-way data binding is ideal for scenarios where you want to display data but not allow direct user manipulation. Here is some advantage of One-way data binding:
                        <br />
                        <br />
                        1.Provides a clear separation between data and the UI, making code more maintainable.
                        <br />
                        2.Improves performance, as the UI only updates when the data changes.
                        <br />
                        3.Reduces the risk of unintended side effects.
                    </p>
                </div>
            </div>
            <div className="shadow-md p-6">
                <div className="">
                    <h1 className="text-2xl font-semibold font-[Suranna]">What is NPM in node.js?</h1>
                </div>
                <div className="">
                    <p className="py-2">
                        NPM stands for Node Package Manager.NPM simplifies the management of dependencies by automatically resolving and installing the required packages.It is the default package manager for Node.js, serving as a central repository for open-source JavaScript packages.NPM helps developers discover, install, and manage libraries, tools, and frameworks used in Node.js projects.NPM simplifies the process of adding external packages and dependencies to Node.js applications.It promotes code reuse, accelerates development, and maintains version control.It manages project dependencies using a package.json file.
                    </p>
                </div>
            </div>
            <div className="shadow-md p-6">
                <div className="py-2">
                    <h1 className="text-2xl font-semibold font-[Suranna]">Different between Mongodb database vs mySQL database</h1>
                </div>
                <div className="">
                    <p className="">
                        MongoDB
                        <br />
                        MongoDB is a NoSQL database.MongoDB uses a document-based data model.MongoDB stores data in flexible, JSON-like documents called BSON (Binary JSON).MongoDB is schema-less, allowing for dynamic and evolving data structures.MongoDB uses a query language similar to JavaScript for querying data.MongoDB is often used for applications with changing, semi-structured, or large volumes of data, like social media platforms.
                        <br />
                        <br />
                        MySQL
                        <br />
                        MySQL is a traditional relational database management system (RDBMS).It uses a structured table-based data model.MySQL uses SQL (Structured Query Language) for data manipulation.MySQL is part of the SQL family of databases.MySQL is suitable for applications that require structured and relational data, like e-commerce websites.Consider factors like data structure, scalability, performance, and the need for complex queries.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;