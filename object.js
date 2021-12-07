var student = {
    name: "Taskin",
    id: 44,
    study: {
        subject: "Bsc EEE",
        uni: "AIUB"
    },
    job: "MERN Stack Developer",
    cgpa: 3.60
}

console.log(student);
var name = student.name;
var university = student.study.uni
console.log("Student Name : " + name);
console.log(university);

// ====== value change in object in 3 way ======

var studentName = "name";
student[studentName] = "Taskin Asghar";
console.log(student);

student.job = "Python Developer";
console.log(student);

student["job"] = "MERN";
console.log(student)


