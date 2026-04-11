let scope = "Global Scope";

function checkScope() {
  let scope = "Block Scope";

  let f_lit = function () {
    return scope;
  };
  console.log(f_lit());
  let f_con = new Function("scope", "return scope;");
  console.log(f_con());
}

checkScope();
