const { syncDB } = require("../../tasks/async-db");

describe("Test en Sync-DB", () => {
  test("Should execute 2 ", () => {
    syncDB();
    const times = syncDB();

    expect(times).toBe(2);
  });
});
