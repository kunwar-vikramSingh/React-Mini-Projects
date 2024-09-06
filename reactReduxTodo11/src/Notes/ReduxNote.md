1- Redux is a core Library , React-Redux is a implementation of Redux for React.So that they wired together to work seamlessly.
In react-redux state are mutable, means state management are done automatically.
---------------------------------------Formation of Redux project--------------------------------------
-Step - 1 Create a folder(App) inside Src Which is "Store".
Configuring a Redux Store with @reduxjs/toolkit

Importing necessary modules

configureStore from @reduxjs/toolkit: a function to create a Redux store
todoReducer from ../features/todo/todoSlice: a reducer function for managing todo state
Creating the Redux Store

export const store = configureStore({...}): creates a new Redux store instance and exports it as a constant named store
reducer: todoReducer: specifies the reducer function to use for managing state in the store. In this case, it's the todoReducer imported from todoSlice.
                
-Step - 2 Create a feature Slice.(visit folder).
-Step - 3 Now create a Components.By Using two methods i.e. useselector(), usedispatch().
-Step - 4 Now create a App.js file and import all the components and store in it.
