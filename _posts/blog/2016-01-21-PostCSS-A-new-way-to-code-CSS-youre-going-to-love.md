---
layout: blog
category: blog
Title: Learn about PostCSS! A new way to code CSS you're going to love
summary: Every so often, a new tool things changes the status quo and makes doing your job easier. First, there was Sass, Less and now, there's a new kid in town called PostCSS. It's changing how web designers and developers work. You should check it out because you're going to love it. In this article, I'll show you what the fuss is all about and show you some videos of PostCSS in action from a couple of my lynda.com courses.
heroimage: "http://i.imgur.com/eKBnydV.png"
tags:
- front-end developer
- full-stack developer
- developer
- Flexbox
- PostCSS
- Bootstrap 4
- Designer

---

## Why the world needs pre-processors

The reason that PostCSS and other tools are needed is because of the limitations in the CSS language itself. It's great for writing rules that target document selectors, classes and IDs, but it's somewhat inflexible. For example, if you wanted to use the same color over and over throughout your CSS file, the version of CSS supported in most current browsers does not support variables, so you end up typing the same color over and over. Plus if you want to update the color throughout your site, you end up having to update the same code in a bunch of places.

Tools like [Less](http://lesscss.org/) and [Sass](http://sass-lang.com/) give you the ability to create constructs like variables, import css into a current stylesheet (without making an additional server call), mixins (like javascript functions), math, color operations and much more. A lot of professional developers made the switch from developing with plain CSS to a language like Sass and Less, which then convert to a CSS file.

## And the winner is...

For a long time, a war of sorts existed between Less and Sass, the two leading pre-processors for CSS. Chris Coyier of CSS-Tricks wrote a great article where he [compared Sass and Less](https://css-tricks.com/sass-vs-less/) and his final conclusion was that Sass was a slightly better tool. However, Bootstrap 3 was built with Less, and since that's the [most popular front-end framework](https://github.com/twbs) in the world, there was still a bit of a fight left in Less. That's until late in 2015 [Mark Otto](https://twitter.com/mdo), Director of Design at Github's and one of the lead developers for Bootstrap dropped this bombshell.

![Bootsrap 4 in SCSS](http://i.imgur.com/fHbK0FQ.png)

This effectively buried Less in my book and gave the decision of the ruling pre-processor tool to Sass, but it also made you take note of this thing called PostCSS. Yes, the [new version of Bootstrap 4](v4-alpha.getbootstrap.com), now uses Sass instead of Less, but whatever version 5 looks like, it's probably going to involve PostCSS.

## PostCSS' Rising Popularity
PostCSS started out as a tool for dealing with one of the most pesky problems web developers have to handle. How to write CSS code that works in older browsers (mainly Internet Explorer). The traditional way meant checking a website like [CanIUse](http://caniuse.com/) to verify which CSS features worked with wich browsers. The first versions of what's now PostCSS automated this process by checking the CanIUse site for you and automatically adding the proper prefixes where needed. This plugin was called AutoPrefixer and quickly became the most popular (and best) way to handle this task. Eventually, AutoPrefixer became just a plugin of a much larger eco-system that allows you to do any number of transformations. If you haven't seen it in action, take a look below.

<iframe width='560' height='315' src='https://www.lynda.com/player/embed/458552?fs=3&w=560&h=315&ps=paused&utm_medium=referral&utm_source=embed+video&utm_campaign=ldc-website&utm_content=vid-458552' mozallowfullscreen='true' webkitallowfullscreen='true' allowfullscreen='true' frameborder='0'></iframe>

## Why it's a better solution
So, if Sass won the pre-processor battle and you've invested some time learning it, what's so great about PostCSS. First, it's not really a pre-processor. It's an engine for transforming CSS code using JavaScript. That means that you can do more than just transform your CSS files, you can feed it HTML documents, JavaScript or anything else for parsing...and it doesn't have to pre-process these, it can also post-process files.

## Post-processing

With something like Sass, you write code with a language that only looks like CSS, but eventually that language gets converted into a CSS document. With PostCSS, you can simply take an existing CSS document and make modifications to it without first having to use another language, so technically that's post-processing, but you can use postCSS as either a pre processor like Sass and Less or a postprocessor. Autoprefixer makes working with something like Flexbox painless (and trust me without it, dealing with the different prefixes is pure agony). Here's a good example of how to layout navigation with Flexbox without having to worry about prefixes.

<iframe width='560' height='315' src='https://www.lynda.com/player/embed/461861?fs=3&w=560&h=315&ps=paused&utm_medium=referral&utm_source=embed+video&utm_campaign=ldc-website&utm_content=vid-461861' mozallowfullscreen='true' webkitallowfullscreen='true' allowfullscreen='true' frameborder='0'></iframe>

## It's insanely fast...and modular
This tool is really fast, but the reason for that speed is what's interesting. There's two ways to work with Sass. If you want the latest and greatest features you're going to want to work with the version of Sass that's written in Ruby. That means that you might end up having to install Ruby, keep your Gems up to date and when Sass runs, it runs as a ruby process. That makes Ruby Sass very slow. You won't notice it at first, but as your projects get bigger and bigger that lack of speed becomes more obvious...and annoying.

PostCSS is faster than CSS. First because it uses NodeJS, so you don't have to run things through Ruby (Yay for Windows pre-processing). Although there is a version of Sass that runs in a similar manner, [PostCSS is still faster](https://evilmartians.com/chronicles/postcss-1_5x-faster). But the other reason it can be much faster is that it is modular. When you install something like Sass, you're installing the entire library, no matter how much of it you need. When you work with PostCSS, you end up installing only the features that you want, which also contributes to the application's overall speed.

## Using only what you need

<iframe width='560' height='315' src='https://www.lynda.com/player/embed/461868?fs=3&w=560&h=315&ps=paused&utm_medium=referral&utm_source=embed+video&utm_campaign=ldc-website&utm_content=vid-461868' mozallowfullscreen='true' webkitallowfullscreen='true' allowfullscreen='true' frameborder='0'></iframe>

Let's say for example that you're interested in adding math functions so that you can build your media queries a lot easier (see video above). You install just the plugin that gives you that ability or you can install a pack of plugins that let you work with [next generation CSS features](https://jonathantneal.github.io/precss/) in current browsers called PreCSS.

Or, what if you want an easier way to work with keyframe animations in your CSS. You can load up a [library of pre-built animations](https://github.com/zhouwenbin/postcss-animation) through another plugin called PostCSS Animation. That tool creates all of the keyframes for your and is based on a library called [Animate.css](http://daneden.github.io/animate.css/).

<iframe width='560' height='315' src='https://www.lynda.com/player/embed/461875?fs=3&w=560&h=315&ps=paused&utm_medium=referral&utm_source=embed+video&utm_campaign=ldc-website&utm_content=vid-461875' mozallowfullscreen='true' webkitallowfullscreen='true' allowfullscreen='true' frameborder='0'></iframe>

## Making the transition
Learning something new is tough, but thankfully PostCSS is easy to learn. At it's most basic, it's as easy as writing the CSS you're already writing and not worrying about prefixing your code anymore with the AutoPrefixer plugin. If you're coming from a Sass background, there is a version of the tool that [gives you most of Sass' feature set](https://github.com/jonathantneal/precss) called PreCSS. But here's the thing, you don't have to use it if you don't want to...you can keep on using Sass and add only the PostCSS features you want. There are already more than 200 plugins and the list is growing rapidly.

One of the challenges you'll face when transitioning is that the tool can be installed in a lot of different ways using many build tools like [Grunt](http://gruntjs.com/), [Gulp](http://gulpjs.com/), [Webpack](webpack.github.io) and more. Even then, the way you configure and install PostCSS varies a bit.


## Get started now

If you want a quick step by step guide on how to set things up and what it can do for you, then check out my course [PostCSS: First Look](http://www.lynda.com/CSS-tutorials/PostCSS-First-Look/442850-2.html). This is a quick guide in less than 50 minutes where I show you how to set things up and how adding different plugins works. If you haven't made up your mind yet, this is the course for you. There's a [Github repo for this course](https://github.com/planetoftheweb/postcss), so you can get the files and play around with things yourself.

<iframe width='560' height='315' src='https://www.lynda.com/player/embed/458544?fs=3&w=560&h=315&ps=paused&utm_medium=referral&utm_source=embed+video&utm_campaign=ldc-website&utm_content=vid-458544' mozallowfullscreen='true' webkitallowfullscreen='true' allowfullscreen='true' frameborder='0'></iframe>

## Making the transition from Sass

If you're coming from Sass and what to see what using PostCSS through a realistic project feels like, then check out [Building a Responsive Single-Page Design with PostCSS](http://www.lynda.com/CSS-tutorials/Building-Responsive-Single-Page-Design-PostCSS/417644-2.html). I show you how to work with PreCSS, CSSNext and CSS Animate to create a single page responsive layout using Flexbox. You can check out [the github repo](https://github.com/planetoftheweb/postcsslayouts) for the course, which has a great GulpJS process that you can fork and use as a template for your own work.

<iframe width='560' height='315' src='https://www.lynda.com/player/embed/461848?fs=3&w=560&h=315&ps=paused&utm_medium=referral&utm_source=embed+video&utm_campaign=ldc-website&utm_content=vid-461848' mozallowfullscreen='true' webkitallowfullscreen='true' allowfullscreen='true' frameborder='0'></iframe>
