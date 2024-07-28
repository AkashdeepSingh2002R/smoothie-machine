// Function to update the selected ingredients list in real-time
function updateSelected() {
    const selectedIngredients = [];
    // Get all checked checkboxes and add their values to the selectedIngredients array
    document.querySelectorAll('input[name="ingredient"]:checked').forEach((checkbox) => {
        selectedIngredients.push(checkbox.value);
    });

    // Display selected ingredients in the list
    const selectedList = document.getElementById('selectedList');
    selectedList.innerHTML = ''; // Clear previous selections
    selectedIngredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = ingredient;
        selectedList.appendChild(li);
    });
}

// Function to capture selected ingredients and create a smoothie
function mixSmoothie() {
    const selectedIngredients = [];
    // Get all checked checkboxes and add their values to the selectedIngredients array
    document.querySelectorAll('input[name="ingredient"]:checked').forEach((checkbox) => {
        selectedIngredients.push(checkbox.value);
    });

    // Check if no ingredients are selected
    if (selectedIngredients.length === 0) {
        alert('Please select at least one ingredient.');
        return;
    }

    // Shake the machine and show "Smoothie is ready" message
    const machineImage = document.getElementById('machineImage');
    machineImage.classList.add('shake');
    setTimeout(() => {
        machineImage.classList.remove('shake');
        const orderSummary = document.getElementById('orderSummary');
        // Display the order summary with a success message
        orderSummary.innerHTML = '<div class="alert alert-success" role="alert"><h4 class="alert-heading">Your smoothie is ready!</h4><p>Enjoy your delicious smoothie made with ' + selectedIngredients.join(', ') + '.</p></div>';
    }, 3000); // 3 seconds shaking animation
}
