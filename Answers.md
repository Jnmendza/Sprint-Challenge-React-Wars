# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a flexible library used to build user interfaces. A library is a collection of codes that write code in a much simpler way. React takes the concept of the HTML structure and allows you to build such components with javascript which can hold HTML and JS code inside as well. A benefit is that it uses the Virtual DOM to speed up the site. Each time you make a change in your code, DOM will be completely updated. React creates a copy of the DOM then it figures out which part is new and only updates that code. It consumes a lot less time than updating the DOM every single time.

1. What does it mean to think in react?

Thinking refers to how can I seperate this app into different component files to make the code easier to handle.

1. Describe state.

State is an object that represents the parts of your app that can be changed. You can store property values that belong to a component .So if you freeze your app at a particular moment in time you get different components at a different state. 

1. Describe props.

Props is one way you can handle data. It is an object that has been injected with data from other components.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is anything that affects something outside the scope of the function being executed. It's used to fetch API's and that data can be passed in as arguments 
