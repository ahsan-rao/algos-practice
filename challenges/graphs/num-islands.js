/*

Given a 2d grid map of 1s (land) and 0s (water), count the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands
horizontally or vertically. You may assume all four edges of the grid are all
surrounded by water.

EXAMPLE 1:

Input:
[
  [0, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
Output: 1

Input:
[
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
]
Output: 3

Assume that the grid will be an array of arrays of numbers either 0 or 1, and
that the grid will have at least one element.

*/

const numIslands = grid => {
    let counter = 0;
  
    const dfs = (grid, i, j) => {
      if ( i < 0 || j < 0) return;
      if ( i >= grid.length || j >= grid[i].length || grid[i][j] === 0) return;
        grid[i][j] = 0;
        dfs(grid, i + 1, j); // top
        dfs(grid, i, j + 1); // right
        dfs(grid, i - 1, j); // bottom
        dfs(grid, i, j - 1); // left
    };
  
    for (let i = 0; i < grid.length; i += 1) {
      for (let j = 0; j < grid[i].length; j += 1) {
        if (grid[i][j] === 1) {
          dfs(grid, i, j);
          counter += 1;
        }
      }
    }
  
    return counter;
};

module.exports = {numIslands};
