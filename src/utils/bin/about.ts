import {getBio} from "../../api"

export const about = async (args: string[]): Promise<string> => {

  return `
  The Lyra Haruto Company, Inc. is a storytelling enterprise founded by Oussama Ammar.\n
  In pursuit of his vision, he began developing an AI dedicated to storytelling. Named Lyra Haruto, this AI would eventually lend its name to the studio.\n
  Currently, Lyra is engaged in various productions, eagerly anticipating the opportunity to share them with the world.\n\n`
}
