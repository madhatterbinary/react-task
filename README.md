ANSWERS TO REACT-TASK FROM Circus Street (Ulysses Alvarez)

Please, you can find the sample component JargonItem.jsx in the folder component

-    Read

1-    Create the store that will be passed via the Provider from Redux.
2-    Create action with type: GET_ALL_JARGON to get the payload from the API call.
3-    Create reducer that will subscribe to get the payload from the action under the type: GET_ALL_JARGON.
4-    Pass the reducer data to the High Order Component created via the connect method connected to the component expecting to receive all the available jargons.
5-    Create a method in mapStateTopProps() that can be called in the componentDidMount() method of the component.

-    Add

1-    Create an event handler connected to the mapDispatchToProps() method of the component with the “add-btn”. Dispatch an action of type: ADD_NEW_JARGON carrying as a parameter the jargon that will be added to the database.
2-    In the action file containing action methods create a new post request method to the server API to add the new jargon using “axios-thunk” module to pass the jargon as a param.
3-    After a promise gets back a result dispatch two new actions with types: SEND_JARGON_SUCESS and SEND_JARGON_FAILED.
4-    Connect the dispatched actions with the corresponding reducers in the reducers methods which correspond to those actions.
5-    In the reducer with type: SEND_JARGON_SUCESS get the new state of the application from the action payload and connect it to the corresponding component mapStateToProps() to update the jargons list with the newly added jargon.

-    Edit

1-    Most likely we will create a JargonListItems component for holding the list of jargons and a JargonItem component for holding the detail of the individual jargon. It will have an object with the jargon name, the description, the delete, cancel and save and edit button if the user has authorisation to edit.
2-    The text boxes for jargon name and jargon description will be available as editable input texts for editing.
3-    Both of this text inputs will be wrapped around a form div for both validation and sending to the server.
4-    Once the texts have been edited clicking the save button will open another component as a popup window asking if you are happy with the changes. If yes, the button to save will be connected to an even handler that is passed to the mapDispatchToProps() of the component holding the form.
5-    In the action file create a new method type: EDIT_JARGON to send a request to the API to update the exiting data with the new edited parameters.
6-    After a promise gets back a result dispatch two new actions with type: JARGON_EDITED_SUCCESS  and JARGON_EDITED_FAILED.
7-    Connect the dispatched actions with the corresponding reducers in the reducers methods which correspond to those actions.
8-    In the reducer with type: JARGON_EDITED_SUCCESS  get the new state of the application from the action payload and connect it to the corresponding component mapStateToProps() to update the jargons list with the edited jargon.

-    Delete

1-    Follow similar steps to Add section but change actions and reducers type. In the request to the server use the delete option from “axios” and pass the objet to delete in the parameter call. A reusable popup window component from the confirmation to save edited text should prompt the user to confirm deletion or cancel.

What would you test about this component and why?
1-    That the parameters of the functions are correct and return the correct values.
2-    That the functions have not typos.
3-    That some properties should be of a specific type and are required.

Give an example of where you might choose to use internal state for a component?
1-    When the state changed is internal to the component and does not involve changing the state of the application.
For the sample code provided a text and text area editing module required to be installed using npm in the command line [ npm install riek --save-dev ]

