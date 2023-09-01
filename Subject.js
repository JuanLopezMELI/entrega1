class Subject {
    name;
    professor;
    marks = [];
    finalMark;

    constructor(name, professor, marks) {
        this.name = name;
        this.professor = professor;
        this.marks = marks;
    }

    computeFinalMark() {
        let sum = 0;
        for(let i = 0; i < this.marks.length; i++) {
            sum += this.marks[i];
        }
        console.info("Lista de notas" + this.marks)
        console.info("Suma" + sum)
        this.finalMark = sum / this.marks.length
    }
}

