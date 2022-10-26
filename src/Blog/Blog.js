import React from 'react';

const Blog = () => {
    return (
        <div className='blog w-full p-5 text-left text-lg text-white '>
          <div className="singelBlog  border p-2 border-2 border-[#FB2676] my-9">
            <h2 className='border p-2 border-2'><b>Question:</b> what is cors?</h2>
            <h2 className='border p-2 border-2 borde bg-[#3F0071]'><b>Ans:</b> Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</h2>
          </div>
          <div className="singelBlog  border p-2 border-2 border-[#FB2676] my-9">
            <h2 className='border p-2 border-2'><b>Question:</b> Why are you using firebase? What other options do you have to implement authentication?</h2>
            <h2 className='border p-2 border-2 borde bg-[#3F0071]'><b>Ans:</b>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more..</h2>
          </div>
          <div className="singelBlog  border p-2 border-2 border-[#FB2676] my-9">
            <h2 className='border p-2 border-2'><b>Question:</b> How does the private route work?</h2>
            <h2 className='border p-2 border-2 borde bg-[#3F0071]'><b>Ans:</b> The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</h2>
          </div>
          <div className="singelBlog  border p-2 border-2 border-[#FB2676] my-9">
            <h2 className='border p-2 border-2'><b>Question:</b> What is Node? How does Node work?</h2>
            <h2 className='border p-2 border-2 borde bg-[#3F0071]'><b>Ans:</b> Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</h2>
          </div>
        </div>
    );
};

export default Blog;