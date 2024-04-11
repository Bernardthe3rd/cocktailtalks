
export function checkGrade(grade) {
    let newGrade = grade;
    return Number(newGrade) <= 10 && Number(newGrade) >= 0;
}
