greeting = `oooooo   oooooo     oooo           oooo                                                         .                                                                       oooo   o8o                        
\`888.    \`888.     .8'            \`888                                                       .o8                                                                       \`888   \`"'                        
 \`888.   .8888.   .8'    .ooooo.   888   .ooooo.   .ooooo.  ooo. .oo.  .oo.    .ooooo.     .o888oo  .ooooo.     ooo. .oo.  .oo.   oooo    ooo     .ooooo.  ooo. .oo.    888  oooo  ooo. .oo.    .ooooo.  
  \`888  .8'\`888. .8'    d88' \`88b  888  d88' \`"Y8 d88' \`88b \`888P"Y88bP"Y88b  d88' \`88b      888   d88' \`88b    \`888P"Y88bP"Y88b   \`88.  .8'     d88' \`88b \`888P"Y88b   888  \`888  \`888P"Y88b  d88' \`88b 
   \`888.8'  \`888.8'     888ooo888  888  888       888   888  888   888   888  888ooo888      888   888   888     888   888   888    \`88..8'      888   888  888   888   888   888   888   888  888ooo888 
    \`888'    \`888'      888    .o  888  888   .o8 888   888  888   888   888  888    .o      888 . 888   888     888   888   888     \`888'       888   888  888   888   888   888   888   888  888    .o 
     \`8'      \`8'       \`Y8bod8P' o888o \`Y8bod8P' \`Y8bod8P' o888o o888o o888o \`Y8bod8P'      "888" \`Y8bod8P'    o888o o888o o888o     .8'        \`Y8bod8P' o888o o888o o888o o888o o888o o888o \`Y8bod8P' 
                                                                                                                                  .o..P'                                                                 
                                                                                                                                  \`Y8P'                                                                  
                                                                                                                                                                                                         
   .                                         o8o                        oooo                                                                                                                             
 .o8                                         \`"'                        \`888                                                                                                                             
.o888oo  .ooooo.  oooo d8b ooo. .oo.  .oo.   oooo  ooo. .oo.    .oooo.    888                                                                                                                             
 888   d88' \`88b \`888""8P \`888P"Y88bP"Y88b  \`888  \`888P"Y88b  \`P  )88b   888                                                                                                                             
 888   888ooo888  888      888   888   888   888   888   888   .oP"888   888                                                                                                                             
 888 . 888    .o  888      888   888   888   888   888   888  d8(  888   888                                                                                                                             
 "888" \`Y8bod8P' d888b    o888o o888o o888o o888o o888o o888o \`Y888""8o o888o                                                                                                                            
                                                                                                                                                                                                         
                                                                                                                                                                                                         
                                                                                                                                                                                                         \n\tType help for more information.`
greeting1 =` _    _ ____ __   ___ _____ __  __ ____    ____ _____    __  __ _  _    _____ _  _ __   ____ _  _ ____ 
( \\/\\/ ( ___(  ) / __(  _  (  \\/  ( ___)  (_  _(  _  )  (  \\/  ( \\/ )  (  _  ( \\( (  ) (_  _( \\( ( ___)
 )    ( )__) )(_( (__ )(_)( )    ( )__)     )(  )(_)(    )    ( \\  /    )(_)( )  ( )(__ _)(_ )  ( )__) 
(__/\\__(____(____\\___(_____(_/\\/\\_(____)   (__)(_____)  (_/\\/\\_)(__)   (_____(_)\\_(____(____(_)\\_(____)
 ____ ____ ____ __  __ ____ _  _   __   __                                                             
(_  _( ___(  _ (  \\/  (_  _( \\( ) /__\\ (  )                                                            
  )(  )__) )   /)    ( _)(_ )  ( /(__)\\ )(__                                                           
 (__)(____(_)\\_(_/\\/\\_(____(_)\\_(__)(__(____)                                                          `
console.log(greeting)
let loc = 'home'
let fileLocs = {
    '/': ['home'],
    'home':[]
}
let files = {
    '/':{'home':'folder'},
    'home':{
    'info.txt': 'Made with JQuery Terminal',
    'about.txt': 'Made by Chase Horton 4/25/21',
    'fizzBuzz.py': 'while True:\n   print("fizzBuzz")'
    }
}

$('#terminalDiv').terminal({
    hello: function(what) {
        this.echo('Hello, ' + what +'. Welcome to this terminal.');
        },
    help : function(){
        this.echo(`For more information on any command press type help COMMAND-NAME
CTRL + L                |   Clears the screen
ls                      |   Lists files in current directory
cat FILENAME            |   Prints contents of FILENAME
touch FILENAME 'CONTENT'|   Create File with FILENAME containing CONTENT (note: content of the file must be in single or double quotes)
rm FILENAME             |   Deletes FILENAME
cd LOCATION             |   Change current directory to LOCATION
mkdir DIR               |   Create a directory with name DIR`
);
    },
    ls : function(){
        if(loc == undefined){
            let keys = Object.keys(files)
            for(let i = 0; i < keys.length; i++){
                this.echo(keys[i]);
            }
        } else {
            let keys = Object.keys(files[loc])
            for(let i = 0; i < keys.length; i++){
            this.echo(keys[i]);
            }
        }
        
    },
    cat : function(fileName){
        if(files[loc][fileName] == undefined){
            this.echo('Invalid File Name.')
        } else{
            this.echo(files[loc][fileName]);
        }

    },
    touch : function(fileName, fileContent){
        if(files[loc][fileName] == undefined){
            files[loc][fileName] = fileContent;
        }
        else{
            this.echo('File already exists');
        }
    },
    rm : function(fileName){
        delete files[loc][fileName];
    },
    mkdir : function(dirName){
        if(!fileLocs[loc].includes(dirName)){
            files[dirName] = {};
            files[loc][dirName] = 'Folder'
            fileLocs[loc].push(dirName);
        } else{
            this.echo('Cannot create a directory that already exists.')
        }
    },
    cd : function(dirName){
        if(dirName == '..'){
            temp = Object.keys(fileLocs).find(key => fileLocs[key].includes(loc));
            if(temp != undefined){
                loc = temp;
            } else{
                this.echo('You are already at the root directory!')
            }
        }
        else if(fileLocs[loc].includes(dirName)){
            loc = dirName;
        }
        else{
            this.echo('Directory does not exist');
        }
    }
    }, 
    {
        greetings: greeting,
        completion: true,
    }





);
