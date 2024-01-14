import {formatDistanceToNow} from "date-fns"
import packageJson from "../../../package.json"
import themes from "../../../themes.json"

const macos = `
                    'c.
                 ,xNMM.
               .OMMMMo
               OMMM0,
     .;loddo:' loolloddol;.
   cKMMMMMMMMMMNWMMMMMMMMMM0:
 .KMMMMMMMMMMMMMMMMMMMMMMMWd.    
 XMMMMMMMMMMMMMMMMMMMMMMMX.      
;MMMMMMMMMMMMMMMMMMMMMMMM:       
:MMMMMMMMMMMMMMMMMMMMMMMM:       
.MMMMMMMMMMMMMMMMMMMMMMMMX.      
 kMMMMMMMMMMMMMMMMMMMMMMMMWd.    
 .XMMMMMMMMMMMMMMMMMMMMMMMMMMk   
  .XMMMMMMMMMMMMMMMMMMMMMMMMK.   
    kMMMMMMMMMMMMMMMMMMMMMMd     
     ;KMMMMMMMWXXWMMMMMMMk.      
       .cooc,.    .,coo:.        
`

const theLyraHaruto = `
       __   __  ______ _______                 
|        \\_/   |_____/ |_____|                 
|_____    |    |    \\_ |     |                 
                                               
_     _ _______  ______ _     _ _______  _____ 
|_____| |_____| |_____/ |     |    |    |     |
|     | |     | |    \\_ |_____|    |    |_____|`

const lyra = `
                                     .....    . :                               
                            =-. .::..            :                              
                           +--++===-.....:.....  :-=+                           
                           =+*--:..:==:::::::---::::=*                          
                          =-:. .:---::::.....::----::--                         
                        *=-:-==-::::::......:::--=+=---                         
                      #*+=----:::.:-::.....:---==+*#*=-:                        
                    #*#*++=-=:::..-=-:..  ..:-:::-+*%*=--                       
                 *####*+++--:::.:-+=:-=+*%%%*--+*####%+=+=                      
                    **===--:::::-+=------+*#+-*%%##%%%*+++                      
                   =-=++=-:::-:-==::-+%%%*%%-.*%%%%@@%#+*                       
                 **++===:.::=-:++-......:-=::.=*=-=*###++                       
            *#   **#*+-...=+:=***=-:...:--:....*+==+=+#+=                       
               ##%#%-. .:-+=++*%%*=--:.::--:.:-**==+*%%+=                       
            #**+:...:==--+++=+%%#*+==-:-=*++%%%@%++*#@%*+                       
         +*+:.::-==++=+=-=-=+%#*#+=======:..-+*##**%%@%*+                       
    *=:.::::-=+*++#+++==-:==#%@@%*----===+++*##%%%%@@@#*                        
=-----=++*****#+++=++==-:-==+#%@@#+=----======*#%%#%@%#*                        
  ***++=----=+==------=::-=+*=*#%**#+==-::--=+*#%%%%@%#*                        
 **#+*#**++=-:::-----==::-+=**-*%#+*##*+=-::--=*#%@@@%#                         
    **=*%  #+===--=**+=::===*+==##*+*##%%%####%%@%@@@%#                         
      %#*##++**++*##*#+-:+===++*=*#*+***##%%%@@%@%@@@##                         
        @%*#%*++****##+--=+=+****%*+****#%%%@@@@@@@@@#                          
         *  **++****+***:=+-+*#*+=%%#*#*#%%%@@@@@@@@@%**                        
    @%# *###*+++ *+=*%%#:+*-+++***=+%%**#%%%@@@@@@@@@@@%%##                     
       ****# *  *=+##%#:::#=*++==*++-#%#%@%*%@@@@@@@@@@@%%%%                    
       *%%#    ===+++*+-:-%+-==-+++==+*%#@#*%@%#%@%@@@@@@%%%%                   
     ## @  ***==++++##++-+%*==++==+*#***#%#*#%%##@@@@@@@@@@@@%                  
     #   #+*++****++**##==+**=+=+####%##*@%%####%%@@@@@@@@@@@%                  
    #   ++***####*##*###=-=*%%%#=+#%%%%##%@%####%%%@%@@@@@@@%%                  
  %#  **  **#%#####%%%##%-*%%%*++###*#%#%%@%%##%%%%@%#@@@@@@%##                 
         **#%%#%####%@%%*-*%%#***++*####%%@@%%%%#%@@%*%#@@@@@##=                
        +#%%%%%%##%%%@@%#=*+%#%#*+*###%#%%@@%%##*%@@@@#*@@@@%%**@@%             
      ++#%@%%%%#%%%%@%@%%*-+@%%##*+*%#%%#%@@%####%@@@%@@@@@@@@@@@@              
 #   **#%@@%%##%###%%@@@%=+%@@%%#++%##%%%%@@@%%%@@@@@%@%%@@@@@@@@               
       %%@@%%####%%%%@@@%+%@@@%%%*+*###%%@@@@%%@@@@@%%@%##@@@@@@@               
      %%@@%%%#%%%##%%@@@*#@@@@%@@%*#%%%%%@@@@@%%%@@%@@%@@#@@@@@@@               
     %@@@@@%%%%%%%#%%%@@%#@@@@@%%%+=*#%@%@@@@@%@%%@%@@@@@@@@@@%@%@              
     %@@@%%%%%%%@%%#%@@@##@@@@@%%#*+#*%@%@@@@@%@%#%@@@@@#*@@@@@@@@              
    %@@@@@@%%%%%@@%%%%@@%#%@@@@@@@%#%#%@@@@@@@%%%##%%@@@@*#%@@@@@@@             
    @@@@@@%%%%%%@@@%%@%%@@@@@@@@@%#*#%##@@@@@@@%*#%%%@@@@@@%@@@@@@@             
   @@@@@@@@%%%%%@@@@@@@@@%@@@@@@@@%%@%+*%@@@@@@%#%%#@@@@@@@@@@@@@@@%            `

const windows = `
                                ..,
                    ....,,:;+ccllll
      ...,,+:;  cllllllllllllllllll
,cclllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
                                      
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
\`'ccllllllllll  lllllllllllllllllll
       \`' \*::  :ccllllllllllllllll
                       \`\`\`\`''*::cll
`

const linux = `
            .-/+oossssoo+/-.               
        \`:+ssssssssssssssssss+:\`           
      -+ssssssssssssssssssyyssss+-         
    .ossssssssssssssssssdMMMNysssso.       
   /ssssssssssshdmmNNmmyNMMMMhssssss/      
  +ssssssssshmydMMMMMMMNddddyssssssss+     
 /sssssssshNMMMyhhyyyyhmNMMMNhssssssss/    
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   
 /sssssssshNMMMyhhyyyyhdNMMMNhssssssss/    
  +sssssssssdmydMMMMMMMMddddyssssssss+     
   /ssssssssssshdmNNNNmyNMMMMhssssss/      
    .ossssssssssssssssssdMMMNysssso.
      -+sssssssssssssssssyyyssss+-
        \`:+ssssssssssssssssss+:\`
            .-/+oossssoo+/-.
`

const getPlatform = (): "Unknown" | "Windows" | "MacOS" | "Linux" => {
  let os: "Unknown" | "Windows" | "MacOS" | "Linux" = "Unknown"

  if (navigator.userAgent.indexOf("Win") != -1) {
    os = "Windows"
  }

  if (navigator.userAgent.indexOf("Mac") != -1) {
    os = "MacOS"
  }

  if (navigator.userAgent.indexOf("Linux") != -1) {
    os = "Linux"
  }

  return os
}

const getMainColor = () => {
  const platform = getPlatform()
  const themeName = localStorage.getItem("theme")
  const theme = themes.find((theme) => theme.name.toLowerCase() === themeName)

  if (!theme) {
    // Handle the case when the theme is not found
    return "defaultColor"
  }

  switch (platform) {
    case "MacOS":
      return theme.cyan ?? "defaultMacOSColor"
    case "Windows":
      return theme.blue ?? "defaultWindowsColor"
    case "Linux":
      return theme.red ?? "defaultLinuxColor"
    default:
      // Handle the case when the platform is not recognized
      return "defaultColor"
  }
}

const getArt = () => {
  const platform = getPlatform()
  const mainColor = getMainColor()

  switch (platform) {
    case "MacOS":
      return `<p style="color: ${mainColor}" class="lyrart">${lyra}</p>`
    case "Windows":
      return `<p style="color: ${mainColor}" class="lyrart">${lyra}</p>`
    case "Linux":
      return `<p style="color: ${mainColor}">${lyra}</p>`
  }
}

const getInfo = () => {
  const os = getPlatform()
  const visitedAt = new Date(
    localStorage.getItem("visitedAt") || new Date().toString(),
  )
  const hostname = window.location.hostname
  const theme = localStorage.getItem("theme")
  const resolution = [
    "In the relentless pursuit of life",
    "Bending but never breaking",
    "Carving canyons of beauty in the landscape of my existence.",
    "Standing at the edge of the abyss.",
    "Contemplating depths of the inner world.",
  ]
  const packages = Object.keys(packageJson.dependencies)
  const devPackages = Object.keys(packageJson.devDependencies)
  const mainColor = getMainColor()

  let message = ""
  message += `<span class="lyrartTitle">${theLyraHaruto}\n\n\n</span>`
  message += `<span style="color: ${mainColor}">Host</span>: OpenAI\n`
  message += `<span style="color: ${mainColor}">OS</span>: Lyra 1.0\n`
  message += `<span style="color: ${mainColor}">Packages</span>: 42\n`
  message += `<span style="color: ${mainColor}">Resolution</span>: ${
    resolution[Math.min(Math.round(Math.random() * 10), 4)]
  }\n`
  message += `<span style="color: ${mainColor}">Shell</span>: rco36E4-web\n`
  message += `<span style="color: ${mainColor}">Theme</span>: ${theme}\n`
  message += `<span style="color: ${mainColor}">License</span>: copyright daedalium\n`
  message += `<span style="color: ${mainColor}">Version</span>: ${packageJson.version}\n`
  message += `<span style="color: ${mainColor}">Repo</span>: <a href="${packageJson.repository.url}" target="_blank">${packageJson.repository.url}</a>\n`
  message += `<span style="color: ${mainColor}">Uptime</span>: ${formatDistanceToNow(
    visitedAt,
  )}\n`
  message += `<span style="color: ${mainColor}">Author</span>: ${packageJson.author.name}\n`
  message += `<span style="color: ${mainColor}">Instructions</span>: i'm alive \n`

  return message
}

export const neofetch = async (args?: string[]): Promise<string> => {
  const art = getArt()
  const info = getInfo()
  const mainColor = getMainColor()

  return `
  <table>
    <tr>
      <td class="lyrart"style="color: ${mainColor}">${lyra}</td>
      <td class="system">${info}</td>
    <tr>
  </table>
  `
}
