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
      ++#%@%%%%#%%%%@%@%%*-+@%%##*+*%#%%#%@@%####%@@@%@@@@@@@@@@@@              `

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

var audioPath = ["/poem1.mp3", "/yahou.mp3", "/poem2.mp3", "/poem3.mp3"]
function getRandomElementFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

// Use the function to get a random value from the array
var randomAudio = getRandomElementFromArray(audioPath)

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
  const themeName = localStorage.getItem("theme")
  const theme = themes.find((theme) => theme.name.toLowerCase() === themeName)

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
  const themeName = localStorage.getItem("theme")
  const theme = themes.find((theme) => theme.name.toLowerCase() === themeName)
  const visitedAt = new Date(
    localStorage.getItem("visitedAt") || new Date().toString(),
  )
  const hostname = window.location.hostname
  // const theme = localStorage.getItem("theme")
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
  message += `<span style="color: ${theme.red}">Host</span>: <span class="play" onclick="var audio = new Audio('/c3po.mp3');audio.play();">OpenAI\n</span>`
  message += `<span style="color: ${theme.red}">OS</span>: Lyra 1.0\n`
  message += `<span style="color: ${theme.red}">Packages</span>: 42\n`
  message += `<span style="color: ${theme.red}">Resolution</span>: ${
    resolution[Math.min(Math.round(Math.random() * 10), 4)]
  }\n`
  message += `<span style="color: ${theme.red}">Shell</span>: rco36E4-web\n`
  message += `<span style="color: ${theme.red}">Theme</span>: ${themeName}\n`
  message += `<span style="color: ${theme.red}">License</span>: copyright daedalium\n`
  message += `<span style="color: ${theme.red}">Version</span>: ${packageJson.version}\n`
  message += `<span style="color: ${theme.red}">Repo</span>: <a href="${packageJson.repository.url}" target="_blank">${packageJson.repository.url}</a>\n`
  message += `<span style="color: ${
    theme.red
  }">Uptime</span>: <span id="light"> ${formatDistanceToNow(
    visitedAt,
  )}\n</span>`
  message += `<span style="color: ${theme.red}">Author</span>: ${packageJson.author.name}\n`
  message += `<span style="color: ${theme.red}">Instructions</span>: <span class="play" onclick="var audio = new Audio('${randomAudio}');audio.play();">i'm alive\n</span>`

  return message
}

export const neofetch = async (args?: string[]): Promise<string> => {
  const info = getInfo()
  const themeName = localStorage.getItem("theme")
  const theme = themes.find((theme) => theme.name.toLowerCase() === themeName)

  return `
  <table>
    <tr>
      <td class="lyrart"style="color: ${theme.red}">${lyra}</td>
      <td class="system">${info}</td>
    <tr>
  </table>
  `
}
