function addExpense() {
    const nameInput = document.getElementById('expense-name');
    const amountInput = document.getElementById('expense-amount');
    
    const name = nameInput.value.trim();
    const amount = amountInput.value.trim();
    
    if (name === '' || amount === '') {
        alert('Please enter both name and amount.');
        return;
    }
    
    const expenseList = document.getElementById('expense-list');
    const expenseItem = document.createElement('li');
    expenseItem.innerHTML = `${name}: $${amount} <button onclick="deleteExpense(this)">Delete</button>`;
    
    expenseList.appendChild(expenseItem);
    
    nameInput.value = '';
    amountInput.value = '';
}

function deleteExpense(button) {
    const expenseItem = button.parentElement;
    expenseItem.remove();
}
