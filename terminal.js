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
        this.echo('Hello, ' + what +'. Wellcome to this terminal.');
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
        greetings: 'Welcome to my interactive terminal. Type help for more information.',
        completion: true,
    }





);