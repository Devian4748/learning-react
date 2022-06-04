# learning-react

## UI Kits

Follow the instructions component by component, make sure the component's test pass before moving on to the next section.
Create the following Components such that we have a functioning basic UI Kit:

### Link

- Start by importing the Link component in the index.js and using it in the App component for the tests to pass
- Should return an <a> element
- That element should have the provided text.
- It should also set the href attribute.
- It should set the class to ui-link which you can find in the index.css

### Button

- Should generate a <button> element with the text provided.
- It should also set the type and disabled attributes as they are received from the props.
- It should set the class to ui-button

### Container

- Should render a <div> element that wraps everything inside it.
- Should have the class ui-container
- This is an example of what wrapping means <Container><p>content</p></Container>. This would end up rendering: <div class="ui-container"><p>content</p></div>

### Input

- Should render an <input /> element.
- Should set the type to type="text" by default (when the type prop has not been specified).
- It should also let the user change the type, so <Input type="email" /> should override the default type and set it to type="email".
- It should also accept the placeholder and name attributes.
- It should set the class to ui-textfield

### Recap

There are some limitations to this kind of UI Kit, for example:

- What if we need to make the <Input /> disabled? We did not make it support the disabled attribute
- What about other attributes that we didn't think about?
- What about the huge amount of code having to duplicate the props into attributes?
- How do we create several types of Buttons that differ in terms of design? For example a Primary one and a Secondary one?

## Imporved UI Kit

- All Components are customizable from the outside (they accept any attribute).
- All Components will keep their default classNames (for example ui-container for the Container Component) however you should still be able to add a className on the Component which will be added next to the default className.

### Create Online Store

- The goal is to create online store

#### App component

- Start by rendering the Please Login h2 and the Login button
- When the user clicks on the Login button, then you should render the StoreFront component.
- When user is logged in, you should render the StoreFront Component as well as the logout button.

#### StoreFront component

- we have hardcoded 2 products in the products array.
- In StoreFront, render 2 empty <Product /> Components.
- Each Product component should receive only one prop called details which contains one of the hardcoded product details. Give the first <Product /> the first index of the array, and the second <Product /> the 2nd index of the array.

#### Product component

- Render the product's image, title & description.
- When the user clicks on + or - it should increment a counter which keeps track of how many items the user wants to order.
- Do not allow the counter to go below 0 (you cannot order -1 items).
- When the counter is 0, disable the - button and hide the counter. So the counter will only show up when it's at 1 or above, and disappear if it's 0.
