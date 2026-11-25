// async function getData(){
//     return "Hello Backend";
// }

// console.log(getData());

function getStudent() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Chandan");
        }, 2000);

    });

}


async function displayStudent(){
    console.log("Fetching student..");
    const student= await getStudent();
    console.log(student);
}
displayStudent();