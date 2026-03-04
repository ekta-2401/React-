import React from "react";
import ReactDOM from "react-dom/client";



//React element
const headingElement = React.createElement("h1", {id: "heading"}, "Heading from React Element");
const jsxHeading = <h1 id="heading">Heading from JSX</h1>;
//React functional component
const HeadingComponent = () => {
    return <h1 id="heading">Heading from Functional Component</h1>
}

const Title = () => (
  <h1 id="title">Heading from Title function</h1>
);

//shorthand syntax for React functional component
const HeadingComponent2 = () => <h1 id="heading">Heading from Functional Component 2</h1>

//If we want to write in multiple  line then we have to wrap it in parentheses
const HeadingComponent3 = () => {
    return (
        <div>
            {Title()}
            <Title/>
            {headingElement}   // we can also use React element in functional component
            {jsxHeading}
            <HeadingComponent/>
            <HeadingComponent2/>
            <p>This is a paragraph from Functional Component 3</p>
            <h1 id="heading">Heading from Functional Component 3</h1>
        </div>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
// component rendering
root.render(<HeadingComponent3 />); 