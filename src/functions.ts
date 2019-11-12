
function add(x: number, y: number) {
  return x + y;
}

const add2 = function(x: number, y: number) {
  return x + y;
}

const mas = add;

const addArrow = (x: number, y: number) => {
  return x + y;
}

const addArrowShorter = (x: number, y: number) => (
  x + y
);

const addArrowShortest = (x: number, y: number) => x + y;

function addTyped(x: number, y: number): number {
  return x + y;
}

const x = 10;
let y: number;

type functionalType = (x: string) => number;

const getLength: functionalType = (foo) => foo.length;
// const badGetLength: functionalType = (bar: number) => bar;

export default null;