/*Exercise 1
Create a webpage
Add a button to the body
Insert jQuery
Add a script at the end of the body
Add an event listener to the button
Log 'Yeah, you clicked me' to the console when the user clicks on the button*/

$('#yeah_btn').click(() =>{
    $('#second_btn').html('Click me!!')
});

/*Exercise 2
Add another button to the webpage
When the user clicks on the second button change the first button's text*/

$('#second_btn').click(()=>{
    $('#yeah_btn').html('Hehe');
})