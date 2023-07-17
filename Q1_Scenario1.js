class Student {
    #indexNo
    #name
    #dob
    #address
    #contactNo
    #email
    #group

    constructor(indexNo, name, dob, address, contactNo, email) {
        this.#indexNo = indexNo;
        this.#name = name;
        this.#dob = dob;
        this.#address = address;
        this.#contactNo = contactNo;
        this.#email = email;
        this.setGroup()
    }

    setGroup() {
        switch (this.#indexNo % 4) {
            case 0:
                this.#group = "Group 1";
                break;
            case 1:
                this.#group = "Group 2";
                break;
            case 2:
                this.#group = "Group 3";
                break;
            case 3:
                this.#group = "Group 4";
                break;
        }
    }

    getGroup() {
        return this.#group;
    }

    getIndexNo() {
        return this.#indexNo;
    }

    setIndexNo(value) {
        this.#indexNo = value;
    }

    getName() {
        return this.#name;
    }

    setName(value) {
        this.#name = value;
    }

    getDob() {
        return this.#dob;
    }

    setDob(value) {
        this.#dob = value;
    }

    getAddress() {
        return this.#address;
    }

    setAddress(value) {
        this.#address = value;
    }

    getContactNo() {
        return this.#contactNo;
    }

    setContactNo(value) {
        this.#contactNo = value;
    }

    getEmail() {
        return this.#email;
    }

    setEmail(value) {
        this.#email = value;
    }

    showDetails() {
        console.log("Student Details:")
        console.log("IndexNo: " + this.#indexNo + "\nName: " + this.#name + "\nDob: " + this.#dob + "\nAddress: " + this.#address)
        console.log("ContactNo: " + this.#contactNo + "\nEmail: " + this.#email + "\nGroup: " + this.#group)
    }
}

stud1 = new Student(21, "Kasun", "2000.05.17", "91/7,Colombo", "0712346679", "example@gmail.com")

console.log(stud1.getEmail())
console.log(stud1.getGroup())
stud1.showDetails()
