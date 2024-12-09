import { describe, it, expect } from "vitest"
import { stringCalculatorAdd } from "./calculator"

describe("StringCalculator", () => {
  it("should return 0 for an empty string", () => {
    expect(stringCalculatorAdd("")).toBe(0)
  })

  it("should return the number for a single number", () => {
    expect(stringCalculatorAdd("1")).toBe(1)
  })

  it("should return the sum for two comma-separated numbers", () => {
    expect(stringCalculatorAdd("1,2")).toBe(3)
  })

  it("should handle new lines between numbers", () => {
    expect(stringCalculatorAdd("1\n2,3")).toBe(6)
  })

  it("should support different delimiters", () => {
    expect(stringCalculatorAdd("//;\n1;2")).toBe(3)
  })

  it("should throw an exception for a single negative number", () => {
    expect(() => stringCalculatorAdd("-1,2")).toThrow(
      "Negative numbers not allowed: -1"
    )
  })

  it("should throw an exception for multiple negative numbers", () => {
    expect(() => stringCalculatorAdd("2,-4,3,-5")).toThrow(
      "Negative numbers not allowed: -4, -5"
    )
  })

  it("should handle mixed delimiters", () => {
    expect(stringCalculatorAdd("1,2\n3")).toBe(6)
  })

  it("should ignore non-number values", () => {
    expect(stringCalculatorAdd("1,\n")).toBe(1)
  })

  it("should handle complex custom delimiters", () => {
    expect(stringCalculatorAdd("//***\n1***2***3")).toBe(6)
  })
})
