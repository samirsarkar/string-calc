//

export const stringCalculatorAdd = (numbers: string): number => {
  if (!numbers) return 0

  // Determine the delimiter and numbers string
  const [delimiter, numbersString] = numbers.startsWith("//")
    ? ((): [string, string] => {
        const delimiterEnd = numbers.indexOf("\n")
        return [numbers.slice(2, delimiterEnd), numbers.slice(delimiterEnd + 1)]
      })()
    : [",", numbers]

  // Replace new lines with the delimiter and parse numbers
  const numberArray = numbersString
    .replace(/\n/g, delimiter)
    .split(delimiter)
    .map((num) => parseInt(num.trim(), 10))

  // Check for negative numbers
  const negativeNumbers = numberArray.filter((n) => n < 0)
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(", ")}`
    )
  }

  // Sum numbers, ignoring NaN values
  return numberArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0)
}
