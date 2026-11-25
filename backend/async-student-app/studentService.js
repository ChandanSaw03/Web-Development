const students=[
    { id: 1,name: "Chandan", branch:"CSE" },
    { id: 2,name: "Rahul", branch:"IT" },
    { id: 3,name: "Aman", branch:"CSE" },
];

export function getStudents(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(students);
        },1000);
    });
}

export function getStudentById(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const student=students.find(
                (student)=>student.id ===Number(id)
            );
            if(student){
                resolve(student);
            }else{
                reject(new Error("Student not found"));
            }
        },1000);
    });
}