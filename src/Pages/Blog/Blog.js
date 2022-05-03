import React, { useState } from 'react';

const Blog = () => {
    const [collapse, setCollapse] = useState(true);
    const [collapse1, setCollapse1] = useState(true);
    const [collapse2, setCollapse2] = useState(true);
    const [collapse3, setCollapse3] = useState(true);
    return (
        <div>
            <h2 className='text-center text-5xl my-12'>Following is some frequently asked <span className='text-red-500'>Question's Answer</span></h2>
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/3">
                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">QUESTION 01</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Difference between JavaScript and NodeJS</h1>
                                <p className="leading-relaxed mb-3 text-justify">
                                    {
                                        collapse ? 'JavaScript is programming language and NodeJS is an asynchronous event-driven JavaScript runtime. JavaScript mainly using for client side activity and NodeJS mainly using for performing non-blocking operations.' : 'JavaScript is programming language and NodeJS is an asynchronous event-driven JavaScript runtime. JavaScript mainly using for client side activity and NodeJS mainly using for performing non-blocking operations. JavaScript running on any engine like spider-monkey, JavaScript-core & v8-engine and NodeJS running only on v8-engine. JavaScript syntax followed C standard and NodeJS syntax follwoed C++ standard. JavaScript allow to use Ajax anytime and NodeJS allows to execute bash/shell script through terminal.'
                                    }
                                </p>
                                <button className="text-indigo-500 inline-flex items-center" onClick={() => setCollapse(!collapse)}> Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>4.3K
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>1k
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/3">
                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">QUESTION 02</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Why should we use NodeJS and MongoDB?</h1>
                                <p className="leading-relaxed mb-3 text-justify">
                                    {
                                        collapse1 ? 'We should use: NodeJS for applications with heavy computing server-side and MongoDB for building quick scalable fully functional managed database. NodeJS used for simple CRUD application where no API needed to load data.' : 'NodeJS for applications with heavy computing server-side. MongoDB for building quick scalable fully functional managed database. NodeJS used for simple CRUD application where no API needed to load data. MongoDB used for global cluster atlases. NodeJS consider with server-side web applications with relational database. MongoDB fallout document database prominent with NoSQL database family.'
                                    }
                                </p>
                                <button className="text-indigo-500 inline-flex items-center" onClick={() => setCollapse1(!collapse1)}> Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>700
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>79
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/3">
                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">QUESTION 03</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Difference between SQL & NoSQL database</h1>
                                <p className="leading-relaxed mb-3 text-justify">
                                    {
                                        collapse2 ? 'SQL are relational and NoSQL are non-relational. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.' : 'SQL are relational and NoSQL are non-relational. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. SQL databases use vertically managed approach, while NoSQL databases use horizontally managed approach. SQL databases are table-based, while NoSQL databases use document, key-value'
                                    }
                                </p>
                                <button className="text-indigo-500 inline-flex items-center" onClick={() => setCollapse2(!collapse2)}> Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1K
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>117
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/3">
                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">QUESTION 04</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">What is the purpose of JWT & how it works?</h1>
                                <p className="leading-relaxed mb-3 text-justify">
                                    {
                                        collapse3 ? 'JWT, or JSON Web Token is an open standard used to share security information between two parties — a client and a server.' : 'JWT, or JSON Web Token is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. JWTs can be encrypted to also provide secrecy between parties. Because JWTs can be signed—for example, using public/private key pairs.'
                                    }
                                </p>
                                <button className="text-indigo-500 inline-flex items-center" onClick={() => setCollapse3(!collapse3)}> Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>2K
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>509
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;