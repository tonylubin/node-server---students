// *** Creation of the model of a Student (using a CLASS) ***

// import firestore database (link)
const db = require("../config/firebase.js");

class Student {

    constructor (data) {
        this.id = data.id;
        this.name = data.name;
        this.age = data.age;
        this.interests = data.interests;
        this.dateCreated = new Date().toUTCString();
         }

        // static methods --> called directly on class (NOT instance of class) without creating instance of the class
        static async findAll() {
            const response = await db
                .collection("students")
                .get();
                // DOCS - array of all documents in collection (response called for)
                // .DATA() - returns Object with all fields in document
                return response.docs.map(doc => doc.data());
            }
   
        static async find(id) {
            const response = await db
                .collection("students")
                // a query with "id"(field id in database), "=="(equal to), id is the variable passed in
                .where("id", "==", id)
                // executes query
                .get();
                // our return/response from the promise
                return response.docs.map(doc => doc.data());
        }
        
        static async destroy(id) {
            const response = await db.collection("students")
                .where("id", "==", id)
                .get()

                response.forEach(student => student.ref.delete());
                
            return `The student with an ID of ${id} was deleted`;
        }
        
        // instance method
        async save() {
            this.dateModified = new Date().toUTCString();
            // making a COPY of the current student (working with), using spread operator {...this} 
            // E.g. the const newStudent (variable made with CREATE function in students.controller.js file)
            const student = {...this};
            // goes to "students" collection in firestore, generates auto-id(with .doc()) & writes(creates) the student variable (instance/copy) to the .doc() reference
            await db.collection("students").doc().set(student);

            return "A new student was created";
        }
    }

module.exports = Student;