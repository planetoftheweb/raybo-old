---
layout: blog
category: blog
Title: 5 Reasons You Should Develop Your Next Site Using Node & ExpressJS
summary: Creating a website using NodeJS instead of Apache used to be hard, but today several advances have made NodeJS Servers easy to deploy. In this article, I talk about what are some of the advantages of using Node and Express and why you should give it a shot.
heroimage: "https://cdn.lynda.com/course/502310/502310-636070288437663461-16x9.jpg"

github: https://github.com/planetoftheweb/expressjs
demo: https://expressjs-jkyzfdtuoy.now.sh


tags:
- front-end developer
- full-stack developer
- NodeJS
- ExpressJS
- JavaScript

---

I do a lot of [full-stack development courses](https://www.lynda.com/ray), and over time, courses go out of date. So it was great to redo one of my more popular courses on [Building a Website with Node and ExpressJS](https://www.lynda.com/Express-js-tutorials/Building-Website-Node-js-Express-js-REVISION-Q3-2016/502310-2.html). Originally, the course focused on creating a simple website using Node and ExpressJS. Deploying a site with Node was light years easier today than in the past and allowed me to do much more.

## #5 Easy Deployment

One of the problems I found with the original version of the course was how hard it was to deploy a site. Most cheap servers couldn't handle serving a NodeJS project. I tried all types of approaches including buying a VPN server and installing Node myself...not a pleasant experience.The easiest thing at the time was [Heroku](https://www.heroku.com), but the documentation was hard to read and deployment challenging.

<iframe width='560' height='315' src='https://www.lynda.com/player/embed/519127?fs=3&w=560&h=315&ps=paused&utm_medium=referral&utm_source=embed+video&utm_campaign=ldc-website&utm_content=vid-519127' mozallowfullscreen='true' webkitallowfullscreen='true' allowfullscreen='true' frameborder='0'></iframe><div style="margin-bottom:10px"><strong><a href="https://www.lynda.com/Express-js-tutorials/Building-Website-Node-js-Express-js/502310-2.html" title="Build JavaScript websites that do more. Learn how to use Node.js and Express to build multi-page websites and applications with features like feedback forms and live chat.">Building a Website with Node.js and Express.js</a></strong> by <a href="https://www.lynda.com/author/832401">Ray Villalobos</a></div>

Today, I found there's a lot more ways to deploy your app including services like [Now](https://zeit.co/now/) and [Firebase](https://firebase.google.com/). Now from Zeit example makes it ridiculously easy to deploy a NodeJS site using a simple npm command (literally $ now). Platforms like Firebase provide easy, cheap hosting and an easy to use real-time multi-user NoSQL database.

![Now from Zeit is a super easy way to deploy NodeJS websites](https://dl.dropboxusercontent.com/s/8bp2k9zcjif3b7c/2016-12-20%20at%2010.47%20PM.png)

Deployment is no longer anything to stress about, but besides deployment, this combination of technologies gives you some serious advantages that are tough to program using the alternative LAMP (Linux, Apache MySQL and PHP).

## #4 Non-blocking Architecture
A huge advantage of NodeJS is it's non-blocking architecture. That means that you make a request for a document or data, your app can make send the request to your server and keep on doing other stuff. When the request if fulfilled, it gets passed back to your app, so the server request doesn't block your application. That makes for sites and apps that are more responsive and can handle connections much more efficiently.

When you use something like PHP with MySQL and you make a request from a database, the page will wait until the query you've made is done. You can easily tax a server with a complex query that will make it stall. Database AJAX requests feel faster and more responsive using Node.

## #3 JavaScript Everywhere
Another reason for working with Node sounds obvious. A single language to manage your front-end and your back-end is more efficient. Plus, you get all of the features available in Node, including things like [file access](https://nodejs.org/api/fs.html).

<iframe width='560' height='315' src='https://www.lynda.com/player/embed/519131?fs=3&w=560&h=315&ps=paused&utm_medium=referral&utm_source=embed+video&utm_campaign=ldc-website&utm_content=vid-519131' mozallowfullscreen='true' webkitallowfullscreen='true' allowfullscreen='true' frameborder='0'></iframe><div style="margin-bottom:10px"><strong><a href="https://www.lynda.com/Express-js-tutorials/Building-Website-Node-js-Express-js/502310-2.html" title="Build JavaScript websites that do more. Learn how to use Node.js and Express to build multi-page websites and applications with features like feedback forms and live chat.">Building a Website with Node.js and Express.js</a></strong> by <a href="https://www.lynda.com/author/832401">Ray Villalobos</a></div>

Node has [thousands of plugins](https://www.npmjs.com/) that can easily add functionality to your project, so things like real-time communication, access to noSQL databases and template engines are easily added. In that way, Node is more modular than something like PHP, which is hugely complex with many more features than you'll ever use.

## #2 Routing your App & Verbs

<iframe width='560' height='315' src='https://www.lynda.com/player/embed/519145?fs=3&w=560&h=315&ps=paused&utm_medium=referral&utm_source=embed+video&utm_campaign=ldc-website&utm_content=vid-519145' mozallowfullscreen='true' webkitallowfullscreen='true' allowfullscreen='true' frameborder='0'></iframe><div style="margin-bottom:10px"><strong><a href="https://www.lynda.com/Express-js-tutorials/Building-Website-Node-js-Express-js/502310-2.html" title="Build JavaScript websites that do more. Learn how to use Node.js and Express to build multi-page websites and applications with features like feedback forms and live chat.">Building a Website with Node.js and Express.js</a></strong> by <a href="https://www.lynda.com/author/832401">Ray Villalobos</a></div>

Another big advantage is Node's ability to have control over the routing of your application, so URLs become more than just paths to filenames, but can be useful in the management of content. With NodeJS you get direct access to verbs and can build interactions that are tougher to do with LAMP. You can control how you manage GET, POST, UPDATE and DELETE requests directly.

## #1 Real Time Multi-user Features

<iframe width='560' height='315' src='https://www.lynda.com/player/embed/519151?fs=3&w=560&h=315&ps=paused&utm_medium=referral&utm_source=embed+video&utm_campaign=ldc-website&utm_content=vid-519151' mozallowfullscreen='true' webkitallowfullscreen='true' allowfullscreen='true' frameborder='0'></iframe><div style="margin-bottom:10px"><strong><a href="https://www.lynda.com/Express-js-tutorials/Building-Website-Node-js-Express-js/502310-2.html" title="Build JavaScript websites that do more. Learn how to use Node.js and Express to build multi-page websites and applications with features like feedback forms and live chat.">Building a Website with Node.js and Express.js</a></strong> by <a href="https://www.lynda.com/author/832401">Ray Villalobos</a></div>

Because NodeJS already gives you superior routing features, but the language makes it easy to access files and packages like [Socket.io](http://socket.io/) make it ridiculously simple to build real time multi-user applications.

That means you start thinking of your site as an application instead of an electronic brochure where users can interact in meaningful ways. Those types of interactions are harder to achieve in a LAMP environment.

## Conclusion
Creating a site with Node & ExpressJS is much simpler than it used to be and there are many more deployment options. Learning Node and Express can be a bit challenging because although it is JavaScript, it might be slightly different from what you're used to. If you want to get started, [check out my course](https://www.lynda.com/Express-js-tutorials/Building-Website-Node-js-Express-js-REVISION-Q3-2016/502310-2.html), where I cover all of these techniques, including routing, building an API, handling http verbs and building a chat within a website. If you want to take a look at what it's like, you can see a [demo of the site](http://github.com/planetoftheweb/expressjs) from the course or head to the [Github repo](http://expressjs-jkyzfdtuoy.now.sh/) for some code.
