function countStudents(path) {
  const fs = require('fs');

  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const students = lines.slice(1).map(line => line.split(','));
      const studentCount = students.length;

      const fields = {};
      students.forEach(student => {
        const field = student[3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student[0]);
      });

      let result = `Number of students: ${studentCount}\n`;
      for (const [field, names] of Object.entries(fields)) {
        result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      resolve(result.trim());
    });
  });
}

module.exports = countStudents;