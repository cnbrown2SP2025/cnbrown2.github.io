// Stub: Fetch grade data from the database (future functionality)
function fetchGradeData() {
  console.log("fetchGradeData() called");
  // Placeholder: This function will retrieve data from the backend/database
}

// Stub: Populate the gradebook table with data (future functionality)
function populateGradebook() {
  console.log("populateGradebook() called");
  // Placeholder: This function will use data to populate the table
}

// Call stubs to test
fetchGradeData();
populateGradebook();

async function fetchGradeData() {
    try {
        const response = await fetch('/grades'); // Make sure your server has this route
        const data = await response.json();
        populateGradebook(data); // Pass data to table population function
    } catch (error) {
        console.error('Error fetching grade data:', error);
    }
}
function populateGradebook(data) {
    const tableBody = document.querySelector('#gradebook-table tbody');
    tableBody.innerHTML = ''; // Clear previous data

    data.forEach((grade) => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = grade.student_name;

        const assignmentCell = document.createElement('td');
        assignmentCell.textContent = grade.assignment;

        const scoreCell = document.createElement('td');
        scoreCell.textContent = grade.score;

        row.appendChild(nameCell);
        row.appendChild(assignmentCell);
        row.appendChild(scoreCell);
        tableBody.appendChild(row);
    });
}
