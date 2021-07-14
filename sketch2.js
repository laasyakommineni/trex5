var student= {
    name : "Laasya",
    grade : 9,
    roll_num : 111,
    fav_subject: "coding",
    marks : [55,89,65,47,85]
};

function setup(){
    createCanvas(400,400);
    console.log(student.name);
    console.log(student.grade);
    student.roll_num=125;
    console.log(student.roll_num);

}