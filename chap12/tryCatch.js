function test(val) {
  try {
    if (isNaN(val)) {
      throw "Not a number";
    } else {
      console.log("Got number");
    }
  } catch (e) {
    console.error("error", e);
  } finally {
    console.log("Done finally", val);
  }
}
test("a");
test(100);
