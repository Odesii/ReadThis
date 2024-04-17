// required packages 
const inquirer = require('inquirer');
const colors = require('colors')
const fs = require('fs');
//links markdown generation to index
const generateMarkdown = require("./utils/generateMarkdown.js");

//List of Questions for inquirer to use 
const questions = [
    {
        type: "input",
        name:"title",
        message:colors.bgRed("The Machine Needs a Name!")
    },
    {
        type: "input",
        name:"description",
        message:colors.bgRed("What is the Machines Reason for Being?")
    },
    {
        type: "list",
        name:"license",
        message:colors.bgRed("Machines Usage Rights?"),
        choices:["MIT", "Apache-2.0", "WTFPL", "OSL-3.0" ]
    },
    {
        type: "input",
        name:"install",
        message:colors.bgRed("Whats the Machines Startup Sequence?")
    },
    {
        type: "input",
        name:"usage",
        message:colors.bgRed("How do You Control the Machine?")
    },
    {
        type: "input",
        name:"contributions",
        message:colors.bgRed("Who Helps the Machine?")
    },
    {
        type: "input",
        name:"testing",
        message:colors.bgRed("How is the Machine Tested")
    },
    {
        type: "input",
        name:"user",
        message:colors.bgRed("What it the Operators Name")
    },
    {
        type: "input",
        name:"email",
        message:colors.bgRed("How does the Machine contact you?")
    }

];

//  a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log(colors.bgGreen('Your Documentation is Ready'))
  );

}

//  function to initialize app in console starting off with ASCII art the running inquire for user input
function init() {
    console.log("Initializing application...")
    console.log(colors.brightGreen(`

      +#                                #+.      
    -@@#                                *@@=     
   +@@@%                                #@@@*    
  +@%-@@:        .-=+*####**=-:        .@@-%@*   
 .@@=:*@@.   .=#@@@@@@@@@@@@@@@@#+:    %@#:-@@:  
 -@@:::#@@:-%@@@@@@@@@@@@@@@@@@@@@@%=:%@%:::@@+  
 :@@::::+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*::::@@=  
  @@*:::::+%@@@@@@@@@@@--%@@@@@@@@@@%+:::::+@@   
  -@@=::::::-+#@@@@@@*::::*@@@@@@%=-::::::=@@=   
   -@@*-::::::%@@@#+::::::::=#@@@@:::::::*@@=    
#:   .#@@*=-:=%@=::::::::::::::::=@@+:-=*@@#.   :#
%@.   +@@%@@@@@@+::::::-**-::::::=@@@@@@%@@*   .%@
%@@+ .@@@*:--:*@@=:::::%@@@:::::=@@#:--:+@@@: =@@@
%@#@@%@@+@#-::::=*+:::::%%:::::=+=:::::*@+@@%@@#@@
%@--*%@@--#@*-:::::::::=@@+:::::::::-*@#--@@%*--@@
*@@#-:#@#::-%@@#+-:::-*@++@#=:::-=*%@@-::*@#:-#@@*
 #@#:#@#:::+@@@@@@@@@@::::%@@@@@@@@@*:::*@#:#@%  
 *@#:#@@::::=#@@@%**@@::::@@#*%@@@%+::::%@#:*@#  
 *@#:#@@#-::::::::-*@@::::@@#-:::::::::#@@%:#@#  
 -@@%@@*@@#+=-==*%@*:*::::*-+@%*+=-=+*@@*@@%@@=  
  .=*%@@==*#%@@*=*@=+=::::=+=@#+*@@%#*=-%@%*=.   
     :@@@%#*+%@%-:+%%*%##%*#%*::%@%++*%@@@-      
      *@%=+*#@@%@+::::::-:::::=@%@@#*+=%@#       
       #@%=::#@+=#@@@@@@@@@@@@#==@%::-%@%        
        +@@%+=#@+:-@@@@@@@@@@=:=@#=+#@@*         
         :%@@@@@@%#%+::::::+@#%@@@@@@@-          
           =@@*::=+::::::::::+=::*@@+            
             +@@+::::-#@@#-::::+@@*.             
              .*@%+==%@@@@@-=+%@#.               
                .*#%%@@@@@@%%#*:                 
  `));
  
    inquirer.prompt(questions).then((answers) => {

        const markD = generateMarkdown(answers);

        writeToFile("README.md", markD);
    })
}

// Function call to initialize app
init();
