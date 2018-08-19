// Write a function that takes an integer and console.logs a pyramid made of //
//octothorpes in which the number of rows equals the number passed into the function.
//Each row of this pyramid should contain the same number of characters such each
//row of the pyramid is centered over the row under it. So pyramid(3) will log this
//
//  ___#___=> # = i * 2 + 1
//  __###__
//  _#####_
//  #######
//
function pyramidMaker(depth) {
  let underscores = depth;
  if(depth < 0) return -1;

  const rows = [];
  //if(depth > 0) console.log(rows[0]);

  for(let i = -1; i < depth - 1; i++) {
    const nextRow = "_".repeat(underscores - 1) + "#".repeat((i+1) * 2 + 1) + "_".repeat(underscores -1);
    underscores--;
    console.log(nextRow);
    rows.push(nextRow);
  }

  return rows;
}
