How to run and build project: 
yarn && yarn start in terminal of the project directory

Assumptions:
Due to the simplistic nature of the task, I made some safe assumptions as they were not specified on the ticket. 
- Icons for selection was used since it did not explicitly mention to use a toggle. However, changing this element would be easy.
- Icons were used to represent the collapse functionality of the Dropdown. It is also easy to change this
- Each Dropdown has its own state that is managed by itself. 
- All the selected values are retrieved by a parent function.
- Does not need to support the ability to pass an option list to > 1 Dropdown.
- Use case of muti-select and single select functionalities is always turned on was assumed. 


Thought Process:
When I thought of how to implement the Dropdown component, I thought there would be 2 essential components: Dropdown(Parent) and DropdownOption(child). Dropdown holds the the state of all the options and DropdownOption would simply render the "option" based on the text passed down. When a user selects/deselects an option in the DropdownOption, it is saved in its parent (Dropdown) component. This allows me to iterate through all the selected options for their values to be saved in the selectedValues state in parent.

I created 2 helper components that were shared amongst the 2 essential components: Rectangle (just a border) and Flex (a simple div using display: flex). Each of these shared component takes in style props that allows for easier reuse.

Some functionality inspiration came from material-ui's select component(found here: https://material-ui.com/components/selects/). Initially, I had the onClick handlers directly on the icons but to avoid user mis-clicking causing the function to not fire, I moved it on top of the wrapper. It also gave me an idea of what would happen when the option text or the total values selected are too long to display.

- Efficiency. Can your component render large lists efficiently? Is your component doing excessive
computations? 

I believe my component can render large lists efficiently. Options are passed into the Dropdown component and is rendered by using a map() function once it is turned into an object with "selected" state. Run time is O(n). Only simple computations are ran as I broke down the component into pieces.

- Extensibility. Can functionality be added to your component relatively easily?

I believe so, the developer just has to pass in a list of strings for options, a state handler to save the state in the parent component, and a helper text if the developer wishes.

- Readability. Can a fellow developer dive right into your code?

I believe so. I tried my best to separate business logic from JSX to keep things separated. Documentation were provided inside the codebase to help guide a fellow developer for ease of access. I tried to name the variables so a fellow developer can hypothesize the meaning of it.


Restriction of Dropdown Component:

Values of all the selected options are not saved onto the parent of Dropdown component until the user clicks on the Dropdown component. This restriction is due to the fact that an event handler was passed from App->Dropdown component and the state of all the selected values is not saved until the onClick function triggers the event handler. This restriction could be resolved if the state of all of selected options was saved on the parent (App) instead of the child (Dropdown)


Installed library:
- styled-component: https://styled-components.com/
allows to stying of component and importing/exporting them for ease of use


sources for icons:
- expand more, expand less, circle, and checked icons were downloaded as svg from Google
https://fonts.google.com/icons

resources referenced:
- ellipsis for entries that did not fix the textbook displaying values:
https://stackoverflow.com/questions/30945109/stop-text-from-leaking-out-of-div/30945146

BONUS: Button provided to allow user to select/deselect all options in Dropdown 1.



