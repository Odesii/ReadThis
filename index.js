
const inquirer = require('inquirer');
const colors = require('colors')
const fs = require('fs');
//links markdown generation to index
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
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
        choices:["MIT", "AFL-3.0", "Apache-2.0", "WTFPL", "OSL-3.0" ]
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
        name:"questions",
        message:colors.bgRed("Who to Contact with Questions About the Machine?")
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log(colors.bgGreen('Your Documentation is Ready'))
  );

}

// TODO: Create a function to initialize app
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
