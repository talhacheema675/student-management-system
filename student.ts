import inquirer from "inquirer";
import chalk from "chalk";
import { user,rand,addstd } from "./user.js";
import figlet from "figlet";
console.log(chalk.yellow.bold(figlet.textSync("Student Management system")));
let student:any[]=[];
let course:any[]=[];
let scounter=0
let ccounter=0
for(let z=0;z>=0;z++)
{
course[ccounter]=await user("enter subject or enter n if you added all subjects: ")
if(course[ccounter]=='n')
{   course.pop();
    break;
}
ccounter++;

}
console.log(course);



let operation:string[]=["add new student","add course","view student detail","view students enoll in course","delete student","view outstanding dues","Exit"]
for(let i=0;i>=0;i++)
{
let optn= await user("please select an option","rawlist",operation)
if(optn=="add new student")
{
    student[scounter]= await addstd(course);
    scounter++;
}
else if(optn=="add course")
{
    course[ccounter]=await user("enter subject or enter n if you added all subjects: ");
    ccounter++;
}

else if(optn=="view student detail")
{
    let dtil= await user("please select option","rawlist",["check detail of all students","check detail of single student"])
    if(dtil=="check detail of single student")
    {
        let std_name= await user("please enter name of student",);
        for(let j=0;j<scounter;j++)
        {
            if(student[j].name==std_name)
            {
                console.log(student[j]);
                break;
            }
            else if(j==scounter-1)
            {
                console.log(chalk.bgRed("sorry no such student exist"));
            }
        }
    }
    else
    {
        console.log(student);
    }
}
else if(optn=="view students enoll in course")
{
    let crc_find= await user("select course to see students","rawlist",course)
    let syst:string[]=[];
    for(let x=0;x<scounter;x++)
    {
        if(student[x].enroll_courses==crc_find)
        {
            syst.push(student[x].name);
        }
    }
    console.log(chalk.red.bold(`total students enrolled in ${crc_find} are : ${syst}`));
}
else if(optn=="delete student")
{
    let delstd= await user("enter name of student to be removed")
    for(let c=0;c<scounter;c++)
    {
        if(student[c] && student[c].name==delstd)
        {
            student.splice(c,1);
            scounter--;
            break;
        }
        else if(c==scounter-1)
        {
            console.log(chalk.bgGreen(`No student with name ${delstd} exist`));
        }
    }
}
else if(optn=="view outstanding dues")
{
    let semfee=await user("enter semester fee","number");
    let dues= await user("please select operation","rawlist",["check outstanding balance of single student","check outstanding balance of all"])
    if(dues=="check outstanding balance of single student")
    {
        let student_balance= await user("please enter the name of student")
        {
            for(let g=0;g<scounter;g++)
            {
                if(student[g].name==student_balance)
                {
                    console.log(chalk.red.bold(`the outstanding balance of ${student_balance} is ${semfee-student[g].last_fee}`))
                    break;
                }
                else if(g=scounter-1)
                {
                    console.log(chalk.bgRed("you have enter the wrong name"))
                }
            }
        }
    }
    else{
        for(let b=0;b<scounter;b++)
        {
            console.log(chalk.gray(`the outstanding balance of ${student[b].name} is ${semfee-student[b].last_fee}`))
        }
    }

}
else if(optn=="Exit")
{
    break;
}

}