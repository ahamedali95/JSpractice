/*#### Pascal's Triangle ####
# This is an example of Pascal's Triangle:
#
#  depth
#    0   |      1
#    1   |     1 1
#    2   |    1 2 1
#    3   |   1 3 3 1
#    4   |  1 4 6 4 1
#
#
# Pascal's Triangle is a mathematical construct that follows a simple
# rule: each number in the triangle is the sum of the two numbers
# directly above-and-to-the-left and above-and-to-the-right of it.
#
# For example, to find the next row after [1,2,1]:
#
#         1       2       1
#
#     1       3       3       1
#     |       |       |       |
#  (0 + 1) (1 + 2) (2 + 1) (1 + 0)
#
#
# Write a function that will return Pascal's Triangle at the given
# depth. The triangle should be represented as an array of rows.
#
# pascals_triangle(0) => [[1]]
# pascals_triangle(2) => [[1], [1,1], [1,2,1]]
# pascals_triangle(4) => [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]
*/

function pascalsTriangle(depth) {
  const rows = [[1], [1,1]];

  if(depth < 0) return -1;
  if(depth === 0) return rows[0];
  if(depth === 1) return rows;

  for(let i = 1; i < depth; i++) {
    rows.push(findNextRow(rows[i]));
  }

  return rows;
}

function findNextRow(array) {
  const newRow = [1];

  for(let i = 0; i < array.length - 1; i++) {
    newRow.push(array[i] + array[i+1]);
  }

  newRow.push(1);
  return newRow;
}
