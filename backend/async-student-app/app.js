import{
    getStudents,
    getStudentById
} from "./studentService.js"

async function main(){
    try{
        console.log("Fetching students..");
        const students =await getStudents();
        console.log("All students: ",students);
        const student= await getStudentById(10);
        console.log("Selected student: ",student);
    }catch(error){
        console.error("Error: ",error.message);
    }
}
main();