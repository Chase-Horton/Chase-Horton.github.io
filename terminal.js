files = {
    'info.txt': 'Made with JQuery Terminal',
    'about.txt': 'Made by Chase Horton 4/25/21',
    'fizzBuzz.py': 'while True:\n   print("fizzBuzz")'
}

$('#terminalDiv').terminal({
    hello: function(what) {
        this.echo('Hello, ' + what +'. Wellcome to this terminal.');
        },
    help : function(){
        this.echo(`For more information on any command press type help COMMAND-NAME
CTRL + L                |Clears the screen
ls                      |Lists files in current directory
cat FILENAME            |Prints contents of FILENAME
touch FILENAME CONTENT  |Create File with FILENAME containing CONTENT
rm FILENAME             |Deletes FILENAME`
);
    },
    ls : function(){
        let keys = Object.keys(files)
        for(let i = 0; i < keys.length; i++){
            this.echo(keys[i]);
        }
    },
    cat : function(fileName){
        this.echo(files[fileName]);
    },
    touch : function(fileName, fileContent){
        files[fileName] = fileContent
    },
    rm : function(fileName){
        delete files[fileName]
    }
    }, 
    {
        greetings: 'Welcome to my interactive terminal. Type Help for more information.',
        completion: true,
    }





);