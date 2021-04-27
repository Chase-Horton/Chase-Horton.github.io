    /*  __      __          ___                                          __             
       /\ \  __/\ \        /\_ \                                        /\ \__          
       \ \ \/\ \ \ \     __\//\ \     ___    ___     ___ ___      __    \ \ ,_\   ___   
        \ \ \ \ \ \ \  /'__`\\ \ \   /'___\ / __`\ /' __` __`\  /'__`\   \ \ \/  / __`\ 
         \ \ \_/ \_\ \/\  __/ \_\ \_/\ \__//\ \L\ \/\ \/\ \/\ \/\  __/    \ \ \_/\ \L\ \
          \ `\___x___/\ \____\/\____\ \____\ \____/\ \_\ \_\ \_\ \____\    \ \__\ \____/
           '\/__//__/  \/____/\/____/\/____/\/___/  \/_/\/_/\/_/\/____/     \/__/\/___/ 
                                                                                        
                                                                                        
                                              ___                                       
                                             /\_ \    __                                
         ___ ___   __  __        ___     ___ \//\ \  /\_\    ___      __                
       /' __` __`\/\ \/\ \      / __`\ /' _ `\ \ \ \ \/\ \ /' _ `\  /'__`\              
       /\ \/\ \/\ \ \ \_\ \    /\ \L\ \/\ \/\ \ \_\ \_\ \ \/\ \/\ \/\  __/              
       \ \_\ \_\ \_\/`____ \   \ \____/\ \_\ \_\/\____\\ \_\ \_\ \_\ \____\             
        \/_/\/_/\/_/`/___/> \   \/___/  \/_/\/_/\/____/ \/_/\/_/\/_/\/____/             
                       /\___/                                                           
                       \/__/                                                            
        __                                                   ___                        
       /\ \__                           __                  /\_ \                       
       \ \ ,_\    __   _ __    ___ ___ /\_\    ___      __  \//\ \                      
        \ \ \/  /'__`\/\`'__\/' __` __`\/\ \ /' _ `\  /'__`\  \ \ \                     
         \ \ \_/\  __/\ \ \/ /\ \/\ \/\ \ \ \/\ \/\ \/\ \L\.\_ \_\ \_                   
          \ \__\ \____\\ \_\ \ \_\ \_\ \_\ \_\ \_\ \_\ \__/.\_\/\____\                  
           \/__/\/____/ \/_/  \/_/\/_/\/_/\/_/\/_/\/_/\/__/\/_/\/____/                  
                                                                                         */
                                                                                                                                                                        
let greeting =` _    _ ____ __   ___ _____ __  __ ____    ____ _____    __  __ _  _    _____ _  _ __   ____ _  _ ____ 
( \\/\\/ ( ___(  ) / __(  _  (  \\/  ( ___)  (_  _(  _  )  (  \\/  ( \\/ )  (  _  ( \\( (  ) (_  _( \\( ( ___)
 )    ( )__) )(_( (__ )(_)( )    ( )__)     )(  )(_)(    )    ( \\  /    )(_)( )  ( )(__ _)(_ )  ( )__) 
(__/\\__(____(____\\___(_____(_/\\/\\_(____)   (__)(_____)  (_/\\/\\_)(__)   (_____(_)\\_(____(____(_)\\_(____)
 ____ ____ ____ __  __ ____ _  _   __   __                                                             
(_  _( ___(  _ (  \\/  (_  _( \\( ) /__\\ (  )                                                            
  )(  )__) )   /)    ( _)(_ )  ( /(__)\\ )(__                                                           
 (__)(____(_)\\_(_/\\/\\_(____(_)\\_(__)(__(____)                                                          `
console.log(greeting)

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

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
let repo = {}
$('#terminalDiv').terminal({
    help : function(){
        this.echo(`For more information on any command press type help COMMAND-NAME
clear   or    CTRL + L  |   Clears the screen
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
            files[loc][dirName] = 'folder'
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
    },
    git : function(option, filename){
        if(option == 'add'){
            if(files[filename]!= undefined){
                repo[filename] = files[filename]
                this.echo('Commited ' + filename + ' to your local repository.\nPlease run git push to initialize repository before running git status');
                console.log(repo)
            } else{
                this.echo('Invalid file name.');
            }
        } else if(option == 'remove'){
            if(repo[filename] != undefined){
                delete repo[filename];
                this.echo('Removed ' + filename + ' from your local repository');
            } else{
                this.echo(filename + ' not found in your local repository, type "git status" to view your local repository');
            }  
        } else if(option == 'push'){
            document.cookie = "savedData=" + JSON.stringify(repo)+";";
            this.echo('Pushing added files into cookies :)');
        } else if(option == 'status'){
            //can easily make recursive function that goes into folders by checking if folder in string and fileLocs but for now only prints folders
            this.echo('Changes to be pushed:')//add to different branches CHANGE THIS TO DISPLAY THE DIFF BETWEEN COOKIE AND REPO AND ALSO DIFF BETWEEN REPO AND FILES
            let cookie = JSON.parse(getCookie("savedData"));
            let allFiles = {};
            for(const folder in repo){
                Object.assign(allFiles, JSON.parse(JSON.stringify(repo[folder])), JSON.parse(JSON.stringify(cookie[folder])))
            }
            for(const folder in repo){
                this.echo(`-${folder}`)
                for(const file in allFiles){
                    if(repo[folder][file] == cookie[folder][file]){
                        this.echo(` --${file}`);
                    } else if(cookie[folder][file] == undefined){
                        this.echo(` --${file} (added)`);
                    } else if(repo[folder][file] == undefined){
                        this.echo(` --${file} (removed)`)
                    } else if(repo[folder][file] != cookie[folder][file]){
                        this.echo(` --${file} (modified)`)
                    }
                }
            }
            this.echo('Differences beween repository and files (changes to be commited)')
            allFiles = {};
            for(const folder in repo){
                Object.assign(allFiles, JSON.parse(JSON.stringify(files[folder])), JSON.parse(JSON.stringify(repo[folder])))
            }
            console.log(allFiles)
            console.log('repo', repo)
            for(const folder in repo){
                this.echo(`-${folder}`)
                for(const file in allFiles){
                    if(repo[folder][file] == files[folder][file]){
                        this.echo(` --${file}`);
                    } else if(repo[folder][file] == undefined){
                        this.echo(` --${file} (added)`);
                    } else if(files[folder][file] == undefined){
                        this.echo(` --${file} (removed)`)
                    } else if(repo[folder][file] != files[folder][file]){
                        this.echo(` --${file} (modified)`)
                    }
                }
            }
        } else if(option == 'pull'){
            repo = JSON.parse(getCookie("savedData"));
            for(const folder in repo){
                files[folder] = $.extend(true,{},repo[folder]);
            }
            console.log(repo);
        } else if(option == 'commit'){
            for(const folder in repo){
                repo[folder] = files[folder];
            }
        } else if(option == 'restore'){
            for(const folder in repo){
                files[folder] = repo[folder]
                this.echo('Restored directory to last commit')
            }
        }
        else{
            this.echo(option + ' is not a valid argument. Type "help git" for more information on git.')
        }
    }
    }, 
    {
        greetings: 'Welcome to my online terminal. Type help for more information...',
        completion: true,
        checkArity: false,
    }
);