class Marks {
    indexNo
    mcqMarks
    essayMarks
    total
    grade
    isPass

    constructor(indexNo, mcqMarks, essayMarks) {
        this.indexNo = indexNo
        this.mcqMarks = mcqMarks
        this.essayMarks = essayMarks
        this.calculateTotalMarks()
        this.gradeMarks()
    }

    insertMarks(indexNo, mcqMarks, essayMarks) {
        this.indexNo = indexNo
        this.mcqMarks = mcqMarks
        this.essayMarks = essayMarks
    }

    calculateTotalMarks() {
        this.total = this.mcqMarks + this.essayMarks
    }

    displayTotalMarks() {
        console.log("Total marks: " + this.total)
    }

    passOrFail() {
        if (this.total >= 50) {
            this.isPass = true
            console.log("Pass")
        } else {
            this.isPass = false
            console.log("Fail")
        }
    }

    gradeMarks() {
        let x = this.total

        if (x >= 75) {
            this.grade = "A";
        } else if (x >= 65) {
            this.grade = "B";

        } else if (x >= 55) {
            this.grade = "C";
        } else if (x >= 35) {
            this.grade = "S";
        } else {
            this.grade = "W"
        }
    }

    displayGrade() {
        console.log("Grade: " + this.grade)
    }

}

m1 = new Marks("S001", 46, 40)
m1.displayGrade()
m1.displayTotalMarks()
m1.passOrFail()