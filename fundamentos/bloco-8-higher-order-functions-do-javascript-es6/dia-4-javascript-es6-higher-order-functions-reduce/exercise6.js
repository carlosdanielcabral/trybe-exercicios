const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = () => {
  return students.reduce((acc, student, index) => {
    acc.push({
      name: student,
      average: (grades[index].reduce((acc, grade) => acc + grade)) / grades[index].length,
    });
    return acc;
  }, []);
}
