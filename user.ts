import inquirer from "inquirer";
import chalk from "chalk";

async function user(num:string,num1:string="input",arr?:string[]) 
{
    let std=await inquirer.prompt([{
        name:"input",
        type:num1,
        message:chalk.red.bold(num),
        choices:arr,

    }])    
    return std.input;
}
async function addstd(arr:string[]) 
{
    let std={
        name: await user("enter name of student or n if you added all: "),
        reg_no:await rand(),
        last_fee:await user("enter fee paid by this student: ","number"),
        enroll_courses: await user("select  enroll course: ","rawlist",arr)
    }
    return std;    
}
async function rand() 
{
    let num=Math.random()*100000;
    num=Math.floor(num);   
    return num; 
}

export {user,rand,addstd};