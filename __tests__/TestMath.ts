
import { decimetersToFeet, hectogramsToLbs } from "@/app/lib/math";
import "@testing-library/jest-dom";

describe("converts decimeters(unit input from API) to feet", () => {
  it("should return a string of such as 5'2'' ",  () => {
    const decimeters = 100;
    const expected = "32'9\"";
    const result = decimetersToFeet(decimeters);

    expect(result).toBe(expected);
  });
  
  it("should return a string of such as 20.24lbs (2decimals) ",  () => {
    const hectograms = 100;
    const expected = "22.05 lbs";
    const result = hectogramsToLbs(hectograms);

    expect(result).toBe(expected);
  });
});
