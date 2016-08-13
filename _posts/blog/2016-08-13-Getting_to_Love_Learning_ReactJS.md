---
layout: blog
category: blog
Title: Getting to Love Learning ReactJS
summary: There's a lot of resistance to learning the ReactJS library. That's because there are two main concepts that make it a tough sell for traditional developers. So let's take a look at what's been holding back most developers from learning ReactJS.
heroimage: "https://dl.dropboxusercontent.com/s/hajchgzne3wm5yo/2016-08-13%20at%204.11%20PM.png"
tags:
- front-end developer
- full-stack developer
- ReactJS
- JavaScript
- Frameworks

---

One of the greatest privileges of teaching for a living is that we get to explore all types of technologies. I had been looking at learning React for a long time because...well because of Google popularity trends like this.

![Google Trends ReactJS Popularity](http://i.imgur.com/mCHwDsn.png)

More than any other framework, I've heard a lot of resistance to some of the key concepts in the React Library, and honestly, every time I went through a React tutorial, It didn't feel quite right. I'm used to working through documentation that's confusing, but React is a whole different beast. It introduces several concepts that feel alien like components, JSX, state, one-way data flow and lifecycle methods.

<iframe width='760' height='400'  style="max-width:100%" src='https://www.lynda.com/player/embed/511713?fs=3&w=560&h=400&ps=paused&utm_medium=referral&utm_source=embed+video&utm_campaign=760-website&utm_content=vid-511713' mozallowfullscreen='true' webkitallowfullscreen='true' allowfullscreen='true' frameborder='0'></iframe><div style="margin-bottom:10px"><strong><a href="http://www.lynda.com/React-js-tutorials/Building-Web-Interface-React-js/495271-2.html" title="Learn how to create flexible, fast, and lightweight web interfaces, including web forms, with React.js.">Building a Web Interface with React.js</a></strong> by <a href="https://www.lynda.com/author/832401">Ray Villalobos</a></div>

However, unlike something like AngularJS which gets harder and more difficult to understand as you work through it, React gets easier and easier and that is both surprising and joyful. The hardest two things to get over are JSX and State. Let's talk about those two.

## JSX

This is probably the most controversial component of React. JSX is a language that compiles to JavaScript that allows you to use a version of HTML (really XHTML) into JavaScript. Here's what it looks like:

<script src="https://gist.github.com/planetoftheweb/6b9168da7305085adce90df93751df08.js"></script>

The template is embedded into your scripts, so it's like using HTML with a templating system like EJS or Mustache.js, but this ends up being compiled to a series of regular JavaScript commands. That means that you don't need processing after publishing. What makes this great is that React components are self-contained. If you want to know what the component does, it's all in the code. React's component architecture means that things stay leaner and code is easier to mainain. Although it seems like a weakness at first, as you get used to it, it's one of React's Strengths.

##State

<iframe width='760' height='400'  style="max-width:100%" src='https://www.lynda.com/player/embed/511722?fs=3&w=760&h=400&ps=paused&utm_medium=referral&utm_source=embed+video&utm_campaign=760-website&utm_content=vid-511722' mozallowfullscreen='true' webkitallowfullscreen='true' allowfullscreen='true' frameborder='0'></iframe><div style="margin-bottom:10px"><strong><a href="http://www.lynda.com/React-js-tutorials/Building-Web-Interface-React-js/495271-2.html" title="Learn how to create flexible, fast, and lightweight web interfaces, including web forms, with React.js.">Building a Web Interface with React.js</a></strong> by <a href="https://www.lynda.com/author/832401">Ray Villalobos</a></div>

The next thing that will make you mad at first, is React's concept of state. State means what's happening in your application at any point in time. In the code above notice that there's a single method called handleDelete() that reacts to the click of a button in the app, but doesn't really take care of it. Deleting the item happens in the main component. React's model means that you build a main component and then a series of sub-components. All state modifications happen in the main component.

![Imgur](http://i.imgur.com/P9CjBcZ.png)
*Although the delete functionality is part of the list component, state is always managed through the main component, so the code for this list is only concerned with displaying the list.*

**What?!?** You heard me right. That's another one of React's strengths that seem a weakness at first. The fact that state is always in the top component makes things easier to find. It also makes things easier because state controls the DOM for you. Components are simply interested on how to display data. When the state changes, the library will 'React' to the changes and re-render your components automatically. Think about that for a second, you never have to worry about handling state within your components, only about what they are supposed to be displaying. Trust me, this is a superior way to code and is the reason so many people have flocked to the library.

## Feel the love

<iframe width='760' height='400'  style="max-width:100%" src='https://www.lynda.com/player/embed/511717?fs=3&w=760&h=400&ps=paused&utm_medium=referral&utm_source=embed+video&utm_campaign=760-website&utm_content=vid-511717' mozallowfullscreen='true' webkitallowfullscreen='true' allowfullscreen='true' frameborder='0'></iframe><div style="margin-bottom:10px"><strong><a href="http://www.lynda.com/React-js-tutorials/Building-Web-Interface-React-js/495271-2.html" title="Learn how to create flexible, fast, and lightweight web interfaces, including web forms, with React.js.">Building a Web Interface with React.js</a></strong> by <a href="https://www.lynda.com/author/832401">Ray Villalobos</a></div>

If you've been on the fence about ReactJS, I think it's time you gave it a try. I prepared a short course called [Building a Web Interface with React](http://www.lynda.com/React-js-tutorials/Building-Web-Interface-React-js/495271-2.html) on Lynda.com. Like most of my other courses, it's project focused, so if you enjoy learning through building something real, give it a shot. It's only 1 hour and 20 minutes, so it's easy to get through. As usual, there's a [Github Repo](http://github.com/planetoftheweb/reactinterface) where you can download the source code for all of the videos.
