# Sprint Challenge: React - Star Wars

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored ReactJS, Function Components, component state and side effects. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web and style that data nicely on the page.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency ReactJS Fundamentals and your command of the concepts and techniques in the Function Components and Class Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager.

## Description

In this challenge, create a web page that presents a styled list of Star Wars characters. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

-   [ ] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

## Answer

React JS is a front end library that solves issues around DOM manipulation, memory management, reusability, testing, and more. The core problem that React does extremely well is couple JS and HTMl into reusable components that make inserting components into the DOM very fast. React also uses a virtual DOM that is recreated every time state changes and then compares it to the current DOM in order to update only the parts of the DOM that need updating to reduce memory usage and increase efficiency of the browser.

This is best encapsulated with the useEffect hook in our most recent NASA project. With a few lines of code, we could create a reusable "card" representing the photo and it's associated information and then render that to the page. If we wanted to also update that information with a date picker for instance, the only item that gets re-rendered is the card based on the new fetched data. Ultimately this makes building single-page applications REALLY easy.

-   [ ] What does it mean to _think_ in react?

## Answer

Thinking in React means to think in components. Usually I follow the following checklist based on a design file.

1. How many components will I need?
2. Which components will store data or just display data?
3. Which components will be siblings and parents to each other?
4. Which components need to pass data to each other?
5. How customizable does each component need to be?
6. How responsive does each component need to be?
7. Can I use a library that's already built out most of the functionality of the component I'm trying to build?

Usually creating a small map that answers these questions will make development easier.

-   [ ] Describe state.

## Answer

State is an object that represents the "data" that you want to have at a given moment. In the case of React state is an object of "memory" that a component can use in order to update itself or child components.

In React state is like a variable within a closure in vanilla Javascript. Just like a funciton can call & update variables outside of it's scope, but contained within the scope of the parent function, state in React acts the same way.

-   [ ] Describe props.

## Answer

Props are pieces of data that are passed to a component in order to customize the component that props are passed to. This can include state, objects, strings, functions, or even other components, basically any type of data. You can think of props like "propogation", because I want a particular piece of code to propogate downward and be consumed by a child or grandchild.

There are reserved props like "className" in React, but for the most part, you can create any "prop" and then pass that to a component and consume that prop with props.propName.

-   [ ] What are side effects, and how do you sync effects in a React component to state or prop changes?

## Answer

Side Effects are functions that are executed as a "side effect" to some other action occuring. Before hooks in react, side effects included function calls like componentDidMount, componentWillUnmount, shouldComponentUpdate, componentDidUnmount. These were all function that were executed based on a very specific action or occurance of an action outside of it self.

More specifically if let's say you changed the name of a username and you wanted to check the availability of that username while the user is typing. As a developer you would want to send the string that the user is typing into a query that checked if that particular string was taken, and then given that information back to the user. The checking of the name is a "Side Effect" of the user typing.

In React you sync state and props to side effects (more specifically useEffect()) with dependencies. A dependency passed to useEffect will call the function within useEffect (the first argument) when the dependency is changed.

For instance if I used

```
useEffect(() => {
    console.log(stateString);
    }, [stateString])
```

I would get a console.log action every time the stateString was updated.

## Project Set Up

Follow these steps to set up and work on your project:

-   [ ] Create a forked copy of this project.
-   [ ] Add PM as collaborator on Github.
-   [ ] Clone your OWN version of Repo. **(Not Lambda's by mistake!)**
-   [ ] Create a new Branch locally: `git checkout -b <firstName-lastName>`.
-   [ ] Change directories into `./starwars` (`cd starwars`) and run `yarn install` or `npm install` to retrieve all needed dependencies.
-   [ ] Once you have installed the _node_modules_, run `yarn start` or `npm start` to get your server up and running.
-   [ ] With the server up and running, open Chrome and head over to `localhost:3000` and view your beautiful app. Maybe it's not _that_ pretty... _yet_, your goal is to ensure this project becomes a thing of beauty.
        Follow these steps for completing your project.
-   [ ] Implement the project on this Branch, **committing progress & changes often.**
-   [ ] Push commits: `git push origin <firstName-lastName>`.

Follow these steps for completing your project:

-   [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo).
-   [ ] Add your Project Manager as a Reviewer on the Pull-request.
-   [ ] PM then will count the HW as done by merging the branch back into master.

## Minimum Viable Product

Your finished project must include all of the following requirements:

-   [ ] Fetch a list of Star Wars characters from the [Star Wars API (or SWAPI)](https://swapi.co/) and render them to the screen.
-   [ ] Follow the documentation to learn how to fetch a list of "people". However, don't spend _too_ long on this. Here is a link for you to follow if you've looked around the docs for about 15 minutes or so and haven't found where to go - [Secret Link to Awesomeness 🤫](https://swapi.co/documentation#people).
-   [ ] Set the data you fetch to state.
-   [ ] Map over the list and render a component for each character on the page.
-   [ ] You must display at least one element for each star wars character in the data set.
-   [ ] The elements must be styled with either SemanticUI or styled-components - don't rely on browser default styles.

#### Required best practices:

-   [ ] Consistent naming. Examples: variables, functions, Components, and file/folder organization.
-   [ ] Consistent spacing. Examples: line breaks, around arguments and before/after functions.
-   [ ] Consistent quotation usage.
-   [ ] Spell-check.
-   [ ] Schedule time to review, refine and reassess your work.

It is better to submit a challenge that meets [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) than one that attempts too much and fails.

## Stretch Problems

-   [ ] Add at least one test using a testing tool:

    -   [react-testing-library](https://github.com/testing-library/react-testing-library#basic-example)
    -   [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html)

-   [ ] Build a pagination system that will allow you to load the next page of data.
    -   `console.log()` the data coming back from the server.
    -   Notice that there are `next` and `previous` fields that give you a URL.
    -   You can build a function that will get characters called `getCharacters` that you can use dynamically to get the next or previous set of characters. You would need to supply it with the proper fields, and you'll need to set up more state to do this.

<!--
- [ ] Build another app from scratch that looks very similar to this one. Inside of your main `App` component fetch some data in this same fashion from this url `https://dog.ceo/dog-api/#all` you'll have to follow the documentation at that website and figure out how to change up the code you've seen here in this Star Wars app in order to properly fetch the data and store it on Component State.
-->
