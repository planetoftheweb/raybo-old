---
layout: blog
category: blog
Title: What's wrong with AngularJS2 and why you're going to like it
summary: I've been working with AngularJS2 for a while, so I wanted to give some thoughts to those who are thinking or planning to update or upgrade their apps to this new version. I'll discuss what's new, what's very different, what works and what is going to be a challenge.
heroimage: "http://i.imgur.com/orx7HI2.png"
tags:
- front-end developer
- full-stack developer
- AngularJS2
- AngularJS
- JavaScript
- Frameworks

---

## The AngularJS2 Upgrade

AngularJS has been one of the fastest growing frameworks in the history of the web. However, the new version is a dramatic upgrade to the platform. It's essentially a new product, so if you've spent a significant amount of time learning AngularJS 1, migrating to the second version can be challenging. The dramatic rise in the popularity of the platform has been slowed and tempered somewhat by the announcement of some of these changes, so is migration really worthwhile?

![AngularJS' Growth seemed to stall a bit after AngularJS2 was announced. The big climb at the end is a projection for next month](http://i.imgur.com/0I9MMbj.png)
> AngularJS' Growth seemed to stall a bit after AngularJS2 was announced. The big climb at the end is a projection for next month

Many of the changes the AngularJS team made to the platform are future-focused and performance driven. Looking to cutting edge technologies like ES6 and TypeScript is a great idea in some ways because it gives us a better toolset for solving problems. Performance changes, like modifications to change detection will make things faster, but at the cost of popular features like two-way data binding.

For upgraders, those leaps come at a great cost, which usually means that you'll need to spend more time learning some of the things you took for granted in the previous version. Let's explore some of these issues and examine wether or not they're worthwhile.

## Documentation
AngularJS2 comes can be programmed in one of three languages. ES5 (Regular JavaScript), Dart and TypeScript. But in reality, there's only one language you should be programming in and that's TypeScript. Trust me, I fought this hard. I wanted to use AngularJS with regular JavaScript. I loved how easy it was to add AngularJS features to a project by adding one or two script tags to a page.

The problem is documentation. As of this article AngularJS2 is in Beta 6, but most of the documentation is still written only for TypeScript. That's not just on Angular's website, just about any articles you'll find for AngularJS2 will be written for TypeScript. It makes me think that somehow the Angular team doesn't really want folks to be writing on ES5.

![AngularJS2 JavaScript Developer Guide](http://i.imgur.com/eSYjkd2.png)
> The documentation for Vanilla JavaScript is still way too underdeveloped

 If they did, they would be releasing documentation concurrently for both versions. Look at how few options are available in the developer guide for plain javascript (above) compared to the options available for TypeScript (look below).

![AngularJS2 TypeScript Developer Guide](http://i.imgur.com/ch7CXKR.png)
>In contrast, the documentation for TypeScript is much more robust.

I don't mind them using TypeScript. It makes everything in AngularJS2 better and easier. It's the better way to go for sure, but I object to them saying they support ES5 and not writing the documentation. If you're not going to keep up, then just drop the pretense and say you're only going to support TypeScript...rip off that bandaid fast because it's going to hurt.

## Build tools
One of the by-products of having to use TypeScript is that you need to run a build tool to handle the processing of both TypeScript and ES6. That makes working with AngularJS2 an order of magnitude harder than AJS1. Remember the first time you ran the sweet demo where you type into an input field and a headline automatically updates with the input field (a.k.a. two-way data binding).

![The old demo](http://i.imgur.com/46lMDBe.png)
> The old demo took less than a few minutes to understand and implement.

To get that working on an AngularJS1 project, you simply add a script tag to your page, add two attributes and some template HTML and BANG! Your page has superpowers.

Contrast that with what's in the instructions for the '5 minute demo' on the [AngularJS2 TypeScript page](https://angular.io/docs/ts/latest/quickstart.html). Some  terminal commands, a ts.config.json file, now typings.json file, nodeJS, a package.json file, npm install, some more terminal commands, 2 TypeScript files. That's a total of 6 files, and what do you get? Wait for it...'Hello World'. And it's a Hello World where unless you had some solid web development experience, you probably didn't know what was going on in half the files. A number of module dependencies, a System.config module loader, npm scripts running processes. Ouch!

![You know you're in trouble when the 5 minute quickstart has a scrollbar that looks like this'](http://i.imgur.com/orx7HI2.png)
> The five minute demo only takes 5 minutes if you've got a time machine or are just copying and pasting code. Understanding what's going on takes a lot longer. Look at the size of that scrollbar.

The example process for an AngularJS2 app is opinionated and something you'll want to adjust to your needs. I wish there was a way to work with TypeScript that was simpler, but there isn't. After using the examples in the documentation, you'll have to spend time figuring out how you want to approach your own version of the build.

## ES6 and TypeScript
Learning TypeScript to use with AngularJS2 apps is the reason why you need such a complex build process. TypeScript is a Superset of ES6. That means that it has all of the features of ES6 plus some from ES7. Let's go over some of these.

If you're coming from plain javascript (ES5), you're really going to love classes in TypeScript/ES6. They're much easier to work with than with ES5. ES6 also adds template strings, I have mixed feelings about these. I like the concept of behind the templates, but including them inline makes your modules longer than they need to be. However, keeping all of the code in one single file does make things easier to update. At any rate, you can use external files for your templates, so this ends up being a positive addition to the structure of your apps.

The other feature you'll have to get used to is decorators. That comes from TypeScript and ES7. You're going to them. Decorators lets you describe how your modules are set up and how they will interface with other elements like templates. The only odd thing is that putting a semicolon at the end of a component causes an error (weird), which you totally end up doing at least once. You're going to miss decorators after you stop working in AngularJS2.

![You're not going to be happy about having to learn TypeScript, but you'll get over it eventually](http://i.imgur.com/9Lb4X3F.png)
> You're not going to be happy about having to learn TypeScript, but you'll get over it eventually.

TypeScript as it's name implies also adds a strongly typed infrastructure to JavaScript. This isn't a big deal if you come from a strongly-typed language, but it's a huge pain for ES5 developers. They're optional in TypeScript, but most of the examples around the web will use type syntax. Using types has benefits like making your IDEs syntax highlighting work better with better error detection.

However, if you hate the concept of having to define the type for variables, objects and other things, try to ease into them. You can program AngularJS2 without strong types, so go ahead. Do it your way, but learn how to incorporate with types as well. This is something you'll be expected to understand, so it will come down to the style your team wants to adopt.

## More bad and good news
Once you get past the scary build process, and embrace TypeScript, there's more important changes you'll need to deal with. The most dramatic is how the framework works with controllers, scope, plus the new module architecture. To put it bluntly, there is no more scope...or controllers, everything is now a module. Stop for a second and think about how awesome scope is and how easy it makes building an application.

The sweet sauce of AngularJS1 is the two way data-binding goodness that makes a model available in your controllers. This is what made you fall in love the platform in the first place.

> As much as you loved them, scopes and controllers are gone, and they replaced it with something thats...better.

I love scope. I'm going to miss scope. I kicked, screamed, stressed and then started warming up to components. It's a really smart way to write code that's much easier than the previous MVC or MVW model. However, the two way data binding model is going to be tough for you to give up. They were a performance nightmare, but boy were they awesome.

## I love Components

As I mentioned, AngularJS2 uses a component based structure to help you with building your applications. This is hands down the best feature in AngularJS2. A component is an encapsulation of the MVC structure you already love. You can have your template and controllers in a single place.

![The first thing you're going to love about AngularJS2 is Decorators](http://i.imgur.com/m7hgKW0.png)
> The first thing you're going to love about AngularJS2 is Decorators

The structure of your apps is going to be a lot more modular once you get started with AngularJS2. However, it does have some drawbacks. There's a little bit of extra import cruft to perform since you end up importing many libraries depending on the features you want to use inside each component. I feel like I have to spend a lot of time setting things up...just the way the computer wants it.

If you've ever used custom directives, you'll fall in love with components though. Components are what custom directives should have been.

## You're going to dislike Pipes
Ugh Pipes. Imagine everything that's awesome about AngularJS1's `filter` and `orderBy` and kiss it goodbye. Pipe's are the replacement and they sort of work the same way that they did without two of the best parts.

![You're going to miss filters, but I'm really hoping they bring this back](http://i.imgur.com/0DhWMmK.png)
> You're going to miss filters

This is one of those decisions that didn't make sense to me. Why get rid of something that is clearly so useful. If you want to filter by a search, then it gets a lot more complex, you can create your own filters (pipes) yourself (see below).

![](http://i.imgur.com/cRiW7Ls.png)

There are some built in pipes, but not the really useful ones. For example, you can pipe content to make things uppercase (not specially useful) and also use pipes to filter dates. However the two that you really need are gone. If you're desperate to recreate the awesome functionality of filters, you can check out the section on [Upgrading from 1.x](https://angular.io/docs/ts/latest/guide/upgrade.html), which provides some code to recreate some of this functionality in the new version, but I feel like this should be placed back into the main library.

## Conclusion
I know AngularJS2 isn't quite done, but what I've seen so far is awesome but annoying. Things that were super simple like pipes and scope are gone and that's both good and bad. I'm frustrated at the over complexity of the new platform plus the lack of documentation for JS5. But then, I remember that learning Angular 1 was tough at the beginning and became so much more fun as you studied things further. Angular 1 also helped a lot of folks think about the MVC structure (or MV Whatever) and that was good. AngularJS2 is going to force you to think about solving problems through a component based architecture classes and maybe...gasp!...types.

If you want to take a look at some simple code from my upcoming Learn AngularJS2: The Basics, check out [the Github Repo](https://github.com/planetoftheweb/angular2). 
