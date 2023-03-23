# Interactive Form
 An interactive form, with changing elements and validations before submission

 Each of the required fields will notify the user, that they need to fill out the field before submission, or change the format, in case the user made a spelling or typing error.

 The Job Role dynamically opens a field, if the Other option is selected, so the user can fill it out manually.
 Likewise, the T-Shirt sections sorts the content of possible colors to match the options available for the selected designs.

 # Special Features - Extra Credit
 The activities check-boxes make checks to see if the time of the events clash with each other, and disable the corresponding fields, if that is the case, so the user cannot double-book an event at the same time, without first de-selecting the other event.

 - added a 'passive' state to all the text fields, in order to keep them from immediately identifying a partially written field as an error, and keeps this behaviour from happening, until the user either leaves the field (blur), or attempts to register (submit), after which it will update after each key-press (keyup);
 - Had a conversation with Rohald (Student Success Specialist) and we both agreed on this solution as both a friendlier alternative to the standard task, and as something that still adhered to the task of the 'keyup error message' format.

 - each required text field has a 'field cannot be empty' or 'field is incorrectly formatted' error message, and the Credit Card information field describes clearly the correct formatting, as per the original hint messages.
