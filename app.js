let dni = prompt("Ingrese el dni del estudiante");
let studentName = prompt("Ingrese el nombre del estudiante");
let age = prompt("Ingrese la edad del estudiante");

let subjectsCount = +prompt("¿Para cuántas asignaturas desea ingresar notas?");

let marks = [];
let subjects = [];

for(let i = 0; i < subjectsCount; i++) {
    let subjectName = prompt(`Ingrese el nombre de la asignatura número ${i + 1}`);
    let professorName = prompt("Ingrese el nombre del profesor de la asignatura");
    let marksCount = +prompt(`¿Cuántas notas del estudiante desea ingresar para ${subjectName}?`);

    for(let i = 0; i < marksCount; i++) {
        let mark = +prompt(`Ingrese la nota número ${i + 1} de la asignatura ${subjectName}`);
        marks.push(mark);
    }

    let subject = new Subject(subjectName, professorName, marks);
    subject.computeFinalMark();
    subjects.push(subject);
}

const student = new Student(dni, studentName, age, subjects);

console.log(
    `Las notas finales del estudiante ${student.name} son las siguientes: `
);

for(let i =0; i < subjects.length; i++) {
    let subject = subjects[i];
    let mensaje = `${subject.name} dirigida por el profesor ${subject.professor}
    obtiene una nota final de: ${subject.finalMark}.`;
    
    if(subject.finalMark >= 7) {
        mensaje = mensaje +  "¡Aprobaste!";
        alert(mensaje);
    } else {
        mensaje = mensaje + "No Aprobaste";
        alert(mensaje);
    }
    
}

