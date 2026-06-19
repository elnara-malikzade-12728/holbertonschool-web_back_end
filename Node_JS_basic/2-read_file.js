import fs from 'fs';

/**
 * Counts and logs students from a CSV database file.
 * @param {string} path - The path to the CSV database file.
 */
const countStudents = (path) => {
  // 1. Defensively verify if path exists, otherwise throw strict error message
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  try {
    // 2. Read file synchronously using utf8 encoding
    const fileContent = fs.readFileSync(path, 'utf8').trim();
    
    // 3. Split data into rows and discard empty lines
    const lines = fileContent.split('\n').filter((line) => line.trim().length > 0);
    
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    // 4. Remove the header row and count active students
    const studentRows = lines.slice(1);
    console.log(`Number of students: ${studentRows.length}`);

    // 5. Categorize students by their field (CS or SWE)
    const fields = {};

    for (const row of studentRows) {
      if (row.trim()) {
        const studentData = row.split(',');
        const firstName = studentData[0].trim();
        const field = studentData[studentData.length - 1].trim();

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }
    }

    // 6. Log each specific field with its count and list of names
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

// 🔑 THE FIX FOR LINT & BABEL: Standard ES6 default export matching the airbnb guide
export default countStudents;
