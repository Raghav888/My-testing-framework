import "./styles.css";

// My program
function add(a, b) {
  return a + b;
}

// Que: write a function which takes three values. Multiply the first two and subtract the last one. Then, write a test for it.
function threeValue(a, b, c) {
  return a * b - c;
}
// My testing framework
const pass = (testname) => console.log(testname, "passed! Yay!");

const failure = (testName) => console.error(testName, "failed... :( ");

function test(testName, callback) {
  console.log("testing..", testName);
  const testResult = callback();
  testResult ? pass(testName) : failure(testName);
}

// My test
test("should add two numbers", () => {
  const a = 22;
  const b = 11;

  return add(a, b) === 33;
});

test("should add firsttwo and subtract third", () => {
  const a = 10;
  const b = 20;
  const c = 30;
  return threeValue(a, b, c) === 170;
});
export default function App() {
  return (
    <div className="App">
      <div className="app-body">Put your app body here</div>
    </div>
  );
}
