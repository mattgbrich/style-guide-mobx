# MobX React App Style Guide and POC
This is intended to be a style guide to be used for React applications using MobX. This specific app also includes a POC for 
virtual "routing" using JavaScript and state to handle view changes. 

## General Considerations
### Components
- All components should be function components, unless there is a specific need to use a class
- Use function declarations
- All Component names must be TitleCase (only Component files should be named using TitleCase)
- Files containing components should be named the same as the component they contain
- Only one component per file, unless there is a specific need to do otherwise

Example:
```javascript
// /components/DisplayUsers.js
import React from 'react';

function DisplayUsers () {
  return ();
}

export default DisplayUsers;
```

- If a Component is simple and only requires the single Component file, then it can be a single file. Otherwise,
if the Component requires additional specific files (`styles.js` file, additional related Components) then create a Folder
that is named the same as the Component, and put the main Component inside the folder with the file name `index.js`

Example:
```
components/
    DisplayUsers/
        index.js
        styles.js
        UserRow.js
        UserDetail.js
```

### Utility/Helper Methods
- Utility/helper methods should always go in a separate `utils.js` file.
- Never put logic handlers in the Component file. 

### Styling
- Always use JSS. Only use CSS if it is existing client CSS code that must be used. Don't create our own CSS.
- No inline styles
- Write styles in a separate file titled `styles.js`, not in the Component file.
- All global style rules will be managed in the MUI Theme in the `/styles` folder. 
- Don't hard code any color values. Colors may only be used through the MUI theme, and must all be defined only once in the `palette.js` file
- Colors should rarely be added (if ever). Before adding any new colors discuss the need for the new color with the team lead. 

### Dependency Configurations
- Any dependency configurations, or other global level app configurations go in the `/config` folder

### State Management
- All state maintained in the `/store` folder
- We'll access all stores through the `useStore` hook.
- Any other store can be accessed from within any given store by referencing the `rootStore`.
- Put all async actions within actions in the store methods
- If a data set for a store has associated API endpoints

##### To Create a New Store
1. Create a new folder within `/store` 
2. Add the store index file containing the class for the new store
3. Import the new store into the root store and add it to the constructor
