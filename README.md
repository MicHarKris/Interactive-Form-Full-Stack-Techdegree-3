# Interactive Form
 An interactive form, with changing elements and validations before submission

'In this project, you'll use JavaScript to enhance an interactive registration form for a fictional Full Stack conference.
Using the supplied HTML and CSS files, you'll add JavaScript to make the form more user-friendly by:

- Adding customized and conditional behavior and interactivity
- Validating user input and providing helpful error messages when the user enters invalid information into the form fields.'

 # Special Features
 - added a 'passive' state to all the text fields, in order to keep them from immediately identifying a partially written field as an error, and keeps this behaviour from happening, until the user either leaves the field (blur), or attempts to register (submit), after which it will update after each key-press (keyup) - this is done to keep the immediate error message from being too aggressive while simply typing.
