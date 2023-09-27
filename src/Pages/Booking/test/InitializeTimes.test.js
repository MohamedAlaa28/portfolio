import { initializeTimes } from "../BookingPage";

describe("initializeTimes", () => {
  it("should return the initial list of available times", () => {

    expect(initializeTimes()).not.toBeNull();
  });
});
