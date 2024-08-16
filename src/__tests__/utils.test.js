import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    const currentYear = new Date().getFullYear();
    const birthYear = 1984;
    const ageOfPerson = currentAgeForBirthYear(birthYear);
    const answer = currentYear - birthYear;

        expect(ageOfPerson).toEqual(answer)
  });
});
