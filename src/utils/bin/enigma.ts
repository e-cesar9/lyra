export const enigma = async (
  args: string[],
  callback?: (value: string) => string,
): Promise<string> => {
  if (args.length === 0) {
    return `
      I am a number, studied by thinkers,
      Only clear in simplest reflections.
      I am a chain, that keeps the paradoxes of existence,
      A fade into the clarity of knowledge.
      I am the shadow, in discussions of time and space, 
      A light in the nature of reality.
      
      Who am I?
      `
  }

  switch (args[0]) {
    case "Pi":
      return "A number.."
    case "3,14":
      return "In another multiverse maybe.."
    case "3.14":
      return "In another multiverse maybe.."

    case "1,618":
      return "Almost possible.."

    case "h":
      return "A number.."

    case "6,626 x 10-34":
      return "Smart choice, but no."

    case "299 792,458":
      return "Nice try but.. No."
    case "0,112358132134":
      return "You impress me.. No."

    case "random":
      return "Lol.."
    default:
      return "You're far from reality."
  }
}
