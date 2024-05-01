
export function checkGrade(grade) {
    let newGrade = parseInt(grade);
    return newGrade <= 10 && newGrade >= 0;
}
