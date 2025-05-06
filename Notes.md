Parcel

Babel

JSX - javascript syntax

JSX should be written in () braces if multiple lines are there
inside ( ) if we add {} braces then we can write JS inside {}
let x =100
(
{console.log(x)}
)

React Components

// Class Based Function - OLD
// Functional Based Components - NEW

// Functional based Compnents

// A normal JS function which returns some jsx is called function component

// Always function name should be Capital otherwise it shows error

// const AboutComonent = () =>{
// <h1>hello</h1>
// }

// with or without return both are same at a time

// const AboutComponent = () =>{
// return <h1>hello</h1>
// }

how will you render this AboutComponent
root.render(<AboutComponent/>)

<AboutComponent/> or
<AboutComponent></AboutComponent> are same things

Component Composition

composing 2 components in one component
put one component inside another

Croess side scripting

JSX sanitize the everything which is passed inside it

example:
if there is api call , we are getting data from it and which may be malacious
but when i try to fectch inside a JSX it sanitizes whole code

const test = api.getData();

const TestComponent = () => {
(

  <div>
  {test}
  <h1>hello! </h1>
  </div>
  )
 }

inline Styling

style ={{ }}
here outer bracket represents some JS code and another bracket is js object means we write style in form of object

style ={{color: 'red' }}

Props

passing props to component is nothing but passing arguments to functions




key property in map method 

key = {index}
we should not use index as a key
its not recommended

import and export

Default export 
export default header
import header form header.js

Named export:
export multiple things from file
export const logo_url = {}
import {} from ./constants