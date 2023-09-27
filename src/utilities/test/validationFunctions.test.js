import {
  validateDateFunction,
  validateNameFunction,
  validateNumberFunction,
} from "../validationFunction";

describe("Booking Form", () => {
  //validateNameFunction//

  it("should return false when value is a whitespace", () => {
    const eventMock = {
      target: { value: " " },
    };

    const isValid = validateNameFunction(eventMock);

    expect(isValid).toBe(false);
  });

  it("should return true when value is not a whitespace", () => {
    const eventMock = {
      target: { value: "Mohamed Alaa" },
    };

    const isValid = validateNameFunction(eventMock);

    expect(isValid).toBe(true);
  });

  it("should return false when input contains a number", () => {
    const eventMock = {
      target: { value: "Mohamed Alaa 123" },
    };

    const isValid = validateNameFunction(eventMock);

    expect(isValid).toBe(false);
  });

  //validateDateFunction//

  it("should return false when selected date is before current date", () => {
    const eventMock = {
      target: { value: "2023-03-14" },
    };

    const isValid = validateDateFunction(eventMock);

    expect(isValid).toBe(false);
  });

  it("should return true when selected date is after current date", () => {
    const eventMock = {
      target: { value: "2033-03-16" },
    };

    const isValid = validateDateFunction(eventMock);

    expect(isValid).toBe(true);
  });

  it("should return false when selected date is the same as current date", () => {
    const currentDate = new Date();
    const eventMock = {
      target: { value: `${currentDate}` },
    };

    const isValid = validateDateFunction(eventMock);

    expect(isValid).toBe(false);
  });

  //validateNumberFunction//

  it("should return false when number of guests is less than 1", () => {
    const eventMock = {
      target: { value: 0 },
    };

    const isValid = validateNumberFunction(eventMock);

    expect(isValid).toBe(false);
  });

  it("should return false when number of guests is greater than 25", () => {
    const eventMock = {
      target: { value: 30 },
    };

    const isValid = validateNumberFunction(eventMock);

    expect(isValid).toBe(false);
  });

  it("should return true when number of guests is between 1 and 25 (inclusive)", () => {
    const eventMock = {
      target: { value: 10 },
    };

    const isValid = validateNumberFunction(eventMock);

    expect(isValid).toBe(true);
  });
});
