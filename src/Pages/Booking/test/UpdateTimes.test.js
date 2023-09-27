import { fetchAPI } from "../../../utilities/dataAPIs";
import { updateTimes } from "../BookingPage";

describe("updateTimes", () => {
  it("should update available times", () => {
    const dispatchMock = jest.fn();
    const selectedDate = new Date("2023-03-15");

    updateTimes(dispatchMock ,selectedDate);

    // Assert that the dispatch function was called with the updated times
    const updatedTimes = fetchAPI(selectedDate);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: "UPDATE_TIMES",
      times: updatedTimes,
    });
  });
});
