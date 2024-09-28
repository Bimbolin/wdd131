// scripts/bom.js
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('_____');

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        // Create the li element
        const li = document.createElement('li');
        
        // Create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        
        // Populate the li element with the input value
        li.textContent = input.value;
        
        // Append the delete button to the li element
        li.append(deleteButton);
        
        // Append the li element to the unordered list
        list.append(li);
        
        // Clear the input field
        input.value = '';
        
        // Add event listener to the delete button
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });
    }
    // Clear the input field
    input.value = '';
    
    // Set focus back to the input element
    input.focus();
});
