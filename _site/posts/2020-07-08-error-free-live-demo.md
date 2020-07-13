---
layout: post
title: 'How to eliminate the terror of a live coding demo training tutorial'
summary: "I've prepared dozens of project based online tutorials and given as many live training sessions featuring the dreaded 'live coding' demo. It can be embarrasing when you type in a comma instead of a semicolon. Here's a process for having a flawless demo."
hero: /images/posts/markus-spiske-Skf7HxARcoc-unsplash.jpg
thumb: /images/posts/markus-spiske-Skf7HxARcoc-unsplash_tn.png

tags:
  - tutorial
  - web development
---

Lets take a look at how I would approach strucuring and buildling a repo for a live demo, which is similar to how I create many online training courses.

## Committing our finished state

First, I use Git to mark out what my code is supposed to look like when it's finished. Git has a feature called `diff` that lets you compare your current code to a branch. So if you create a branch that has how some code is supposed to look at the end of a demo, you can back up to a previous point and use this trick.

```bash
git init
git add -A
git commit -m "finished state"
```

Let's delete some code here so that my state shows what my code is going to look like at the beginning of my demo. If I wanted to see what I'm missing in this code, I would do a git diff command.

```bash
git diff
```

Unfortunately, this is real confusing because we're using the terminal, so it's not that helpful.

## Using Visual Studio Code

However, if you're using Visual Studio Code, you get the same thing integrated into the editor.

![hover on this triangle to see the difference between your finished code and what you have](http://pixelprowess.com/i/2020-07-07_20-52-47.png)

Notice the small triangle next to where the new code should be. When you hover on this triangle a line should appear next to it. If you click on it, you can see the code you're supposed to type.

### Using the shortcut icons

![You can see the missing line that's on the finished version](http://pixelprowess.com/i/2020-07-08_08-53-09.png)

You can use the icons on the right hand side to perform git functions. From the left.

- The `plus sign` will **stage** the change
- The `rotated arrow` will **revert** the change...in our case, that would put the finished code back on the page;
- The `up` and `down` arrows will move up and down the code
- The `x` will close the window.

### Typing in new code

The nice thing is that if you type in some code, the view will update as well, telling you where code than is different that you should have typed is.

Let's go to the bottom of the page so we can type in the script for a notification.

![Here's some longer code at the bottom of the screen](http://pixelprowess.com/i/2020-07-08_09-22-32.png)

Let's add some code at the bottom of the screen so that we can see how it works when we're demoing our code.

```js
<script>
let notyf = new Notyf({
  duration: 0,
  dismissible: true
})
notyf.success('Way to go Bud')
</script>
```

![http://pixelprowess.com/i/2020-07-08_09-39-51.png](http://pixelprowess.com/i/2020-07-08_09-39-51.png)

Take a peek at your editor now. You can see that It's showing you some lines where some of the code you've typed is different than the code you're supposed to type.

### Debugging mistakes

Let's make a mistake on purpose. I'll get rid of the `{` at the end of my Notyf call. You should see a new line appear and if you click on that line you'll see where your mistake is.

![http://pixelprowess.com/i/2020-07-08_09-53-10.png](http://pixelprowess.com/i/2020-07-08_09-53-10.png)

**VS Code** is giving you all types of help here. It's highlighted where the missing curly brace is and showing you the line you typed underneath. Notice there's a little **lightbulb** to the left. If you click on that you can also copy a specific line. That's good if you don't want to revert a bunch of lines.

## Using the Github Desktop app

Now sometimes this view can be distracting during a demo, so you can use an external tool that shows you what you need to type during the demo. A super nice and free option is the [Github Desktop Application](https://desktop.github.com/). You can visually see the changes there.

Make sure you've saved the document before you open up the Github Desktop App; there will be some setup required. Once you've run the app go to the **file** menu and open the file or folder with your project.

![Using the Github Desktop Application.](http://pixelprowess.com/i/2020-07-08_10-01-52.png)

This is a great overview that you can have in a separate window when doing your demo. You can also send a screenshot of this and put it on an ipad that you can reference.

## Using Separate Branches

What if you have a lot of code in different files, or you have a lot of code that you don't want to do all at once? In that case, you can create branches to separate each step. You'll need to think about what you want to show in each step though and create a starting version of your code.

### Creating a starting state

For my code, I want just a simple template with the bootstrap css and no script tags.

```html
<html>
  <head>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
      integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container">
      <h1>Headline</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
        officiis, velit minus deserunt est suscipit. Consequuntur laboriosam
        est, illum totam voluptates tempore commodi ut, molestiae nulla vel
        dicta aperiam tenetur?
      </p>
      ...
    </div>
  </body>
</html>
```

That seems like a good start. Let's **save** this and create a branch for our starting point.

```bash
git checkout -b step00
git add -A
git commit -m "step00"
```

### Building Step 01

Now we need to modify this to add what would make a good step one. However, you'll notice that our helpful triangles and lines are gone, since as far as Git knows, our commit locked in our changes. This is where Github Desktop is going to come in handy again.

![The History Section](http://pixelprowess.com/i/2020-07-08_12-11-49.png)

The desktop app saves our history, so make sure you go to the history tab and you should see your changes from the original. The nice thing is that we can copy and paste code from here as well. Let's go ahead and copy the link to the Notyf css here as well as the basic most basic code to create a notification.

```html/12-15
<html>
  <head>
    ...
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.css"
    />
  </head>
  <body>
    ...
    <script src="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.js"></script>
    <script>
      let notyf = new Notyf()
      notyf.success('Way to go Bud')
      notyf.error('Oh...fudge')
    </script>
  </body>
</html>
```

I also added an error notification because it'd be nice at this point to show the two options. That looks good for a step01

1. **Save** your file
2. Checkout a new branch
3. **Add** and **Commit** the branch

```bash
git checkout -b step01
git add -A
git commit -m "step01"
```

### Adding another step

For the next step, we're going to show some of the options available with the library.

```html
<script>
  let notyf = new Notyf({
    duration: 0,
    dismissible: true,
    position: { x: 'right', y: 'top' },
  })
  notyf.success('Way to go Bud')
</script>
```

1. **Save** your file
2. Checkout a new branch
3. **Add** and **Commit** the branch

```bash
git checkout -b step02
git add -A
git commit -m "step02"
```

### Looking at your progress

For our next step, let's show how to create a custom notification.

```html/1,3-5
<script>
  let notyf = new Notyf({
    duration: 0,
    dismissible: true,
    position: { x: 'right', y: 'top' },
    types: [
      {
        type: 'home',
        background: '#d33682',
      },
    ],
  })
  notyf.success('Way to go Bud')
  notyf.open({
    type: 'home',
    message: 'Welcome Home',
  })
</script>
```

Now we'll create the branch for this.

```bash
git checkout -b step03
git add -A
git commit -m "step03"
```

If you haven't noticed yet, what this is doing is creating a history for each of our steps and if you look at the Github Desktop App and click on the different steps you can see the progress. Notice that every step will show you what you've changed and the line numbers at which the changes were made, which again can be helpful while doing the demo.

![http://pixelprowess.com/i/2020-07-08_13-05-07.gif](http://pixelprowess.com/i/2020-07-08_13-05-07.gif)

### Our last step

Our last step will take place in a couple of lines. First we need to add the link tag to the top of the screen under our bootstrap call.

```html
<link href="https://unpkg.com/css.gg/icons/all.css" rel="stylesheet" />
```

And we'll need to add the icon tag to the type:

```js
icon: {
  className: 'gg-home text-white d-inline-block',
  tagName: 'i',
},
```

Once again, let's create the branch for that step.

```bash
git checkout -b step04
git add -A
git commit -m "step04"
```

## The new demo

So that's the end of splitting our code into different steps, but how does that change the structure of our demo? Clearly the Github Desktop App can be helpful here, we have the full history of our demo here neatly placed in different branches. But let's say we want to work on a specific step. For example, say we want to demo what we did on Step 02.

```bash
git checkout step02
```

![Step 2 with the latest changes](http://pixelprowess.com/i/2020-07-08_15-08-24.png)

In the Github Desktop App, this shows us the code at the end of step02 and what changes we made from step01 to get to that point. But, if I'm starting to record, then I want to be able to rewind the code so that I'm looking at step 01's version.

### A little bit of git-fu

This is going to take a few steps, but it'll be worth it. First we can use a command called `cherry-pick` to rewind our code to what was happening in another branch.

```bash
git cherry-pick step01 -n
```

Cherry pick loads up and normally commits another branch or a commit from your commit log, but since we used the `-n` option here, it won't commit the changes. The problem now is that Visual Studio code being careful and all wants to make sure that since we're changing things we approve the changes.

![Results of cherry picking](http://pixelprowess.com/i/2020-07-08_15-27-17.png)

Mercifully we can just accept all incoming changes using Visual Studio Code's command palette. Chooose `View:Command palette` or use the equivalent command key equivalent, then type in `incoming` and choose `Merge Conflict Accept All Incoming`.

![Accepting Incomming changes](http://pixelprowess.com/i/2020-07-08_15-28-56.png)

Now your code should look like `step01`, but we've lost our beautiful diff squares. To bring those back…

1. First make sure you `save` your changes, then let's reset the HEAD pointer quietly.
2. Reset the HEAD pointer quietly.

```bash
git reset HEAD -q
```

Now our beautiful triangles/lines are there again showing you what you should be typing and you can go on with the demo for that. The Github Desktop App still has our previews, so if you want to have an overview of what you need to do, you can take a peek.

![The Github Desktop App](http://pixelprowess.com/i/2020-07-08_15-41-17.png)

## Posting your demo to Github

But, what about your students. What if they want to follow along with what you're doing or have access to your repo. Let's post this on Github as a Repo. There's a few ways you can do this, but the easiest is to use the **Github Desktop App**.

![Publish repos from the Github Desktop App](http://pixelprowess.com/i/2020-07-08_15-56-27.png)

You can name your app here, add a description and choose wether to create a public or private repository. Now, this is only going to publish the branch that you're on; in our case that's **step02**. If you want to publish all branches.

1. Go back to **Visual Studio Code** and issue a command to push ALL branches.
2. Issue a `git push` command

```bash
git push --all
```

![Push all branches](http://pixelprowess.com/i/2020-07-08_16-00-43.png)

## Compare branches with Github

Having all of your branches in Github gives you one more super power, the ability to compare branches and link to that comparison. Let's say that you want to send students a link to the changes happening between [Step 01 and Step 02](https://github.com/planetoftheweb/demo-notyf/compare/step01..step02).

![Git Comparison](http://pixelprowess.com/i/2020-07-08_16-13-28.png)

The formula for building those comparisons are as follows:

1. The URL of your repo: [https://github.com/planetoftheweb/demo-notyf/](https://github.com/planetoftheweb/demo-notyf/)
2. Add the word `compare` at the end
3. Add the name of the first branch you're comparing from `step01`
4. Add two periods `..`
5. Add the name of the second branch you're comparing to `step02`

So you can use this formula to compare any two branches.

## Changing the default branch

If someone clones this repo, they will clone the first branch you pushed, you can change the default branch to our **step00** branch, which has the beginning version of our code. You could set a different branch to be the default if you wanted students to start at a specific step or make the **master** branch the default and it would have the finished version of the code.

1. Look for the branches link.

![Click on the branches link](http://pixelprowess.com/i/2020-07-08_16-41-07.png)

2. Click on the **change default** branch button
3. Choose the branch you want to set up as your default branch
4. Click on the **update button**

![Change the default branch](http://pixelprowess.com/i/2020-07-08_17-13-15.png)

5. Click on the **I understand...** button

![I understand](http://pixelprowess.com/i/2020-07-08_16-45-18.png)

    Note: It might be a good idea to add a README.md file to give a description of your project.

## The advantages of publishing

The big advantage here is that each branch gives you a way to take a peek and what you're going to be typing and with Github Desktop, an overview of what you need to do. Hopefully that will put you at ease and help you do your live demos with confidence.
