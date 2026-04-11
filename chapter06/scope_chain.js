let y = "Global";

function outerFunc() {
  let y = "local Outer";

  function innerFunc() {
    let z = "Local Inner";
    console.log(z);
    console.log(y);
    console.log(x);
  }
  innerFunc();
}

outerFunc();
