function insertRow() {
    const tableBody = document.getElementById('sampleTable');

    if (!tableBody) {
        return;
    }

    const newRow = tableBody.insertRow(0);

    const cell1 = newRow.insertCell(0);
    
    const cell2 = newRow.insertCell(1);

    cell1.textContent = "New Cell";
    cell2.textContent = "New Row";
}