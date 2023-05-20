import useTitle from "../useTitle/useTitle";

const Blog = () => {

  useTitle("Blog")

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl text-center font-bold mb-4">
            Questions - Answer
          </h1>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow px-6 py-4">
              <h2 className="text-lg font-medium">
                What is an access token and refresh token?
              </h2>
              <h2 className="text-lg font-medium">
              How do they work and where should we store them on the client-side?
              </h2>
              <p className="mt-2">
                An access token is a credential used to access protected
                resources on behalf of a user. It is usually obtained after a
                user authenticates and is used to authorize subsequent API
                requests. A refresh token is a long-lived token that can be used
                to obtain a new access token once the current one expires.
              </p><br /> <br />
              <div>
                <p>
                Its essential to implement secure storage and transmission practices for access tokens and refresh tokens to prevent unauthorized access and protect user data
                </p> <br />
                <p>
                On the client-side, access tokens are typically stored in memory or secure HTTP-only cookies, as they need to be sent with each request to the server. Refresh tokens, being long-lived and more sensitive, require secure storage. Options include storing them in encrypted local storage, as secure HTTP-only cookies with appropriate attributes, or implementing additional security measures based on the specific requirements of the application.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow px-6 py-4">
              <h2 className="text-lg font-medium">
                Compare SQL and NoSQL databases?
              </h2>
              <p className="mt-2">
                SQL databases, also known as relational databases, use a
                structured schema and store data in tables with predefined
                columns. NoSQL databases, on the other hand, are non-relational
                and dont have a fixed schema. They can store data in various
                formats like key-value pairs, documents, graphs, etc. SQL
                databases offer strong consistency and support complex queries,
                while NoSQL databases provide high scalability and flexibility.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow px-6 py-4">
              <h2 className="text-lg font-medium">What is Express.js?</h2>
              <h2 className="text-lg font-medium">What is Nest.js?</h2>
              <p className="mt-2">
                Express.js is a fast and minimalist web application framework
                for Node.js. It provides a robust set of features for building
                web applications and APIs, such as routing, middleware support,
                template engines, and much more. Express.js is widely used in
                the Node.js ecosystem and is known for its simplicity and
                extensibility.
              </p>{" "}
              <br />
              <p className="mt-2">
                Nest.js is a progressive Node.js framework for building
                efficient, scalable, and maintainable server-side applications.
                It is built with TypeScript and takes advantage of its features
                like decorators, static typing, and modules. Nest.js follows the
                architectural principles of Angular and provides a modular and
                structured approach to building backend applications.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow px-6 py-4">
              <h2 className="text-lg font-medium">
                What is MongoDB aggregate?
              </h2>
              <p className="mt-2">
                MongoDBs aggregation framework is a powerful tool for performing
                data analysis and transformation operations on MongoDB
                collections. It allows you to process documents and perform
                operations like filtering, grouping, sorting, joining, and more.
                Aggregation pipelines in MongoDB consist of multiple stages that
                are applied sequentially to the documents in a collection to
                produce the desired results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
