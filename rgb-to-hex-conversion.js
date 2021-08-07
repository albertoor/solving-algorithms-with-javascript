/*
	The rgb function is incomplete. Complete it so that passing in RGB decimal values will 
	result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. 
	Any values that fall out of that range must be rounded to the closest valid value.

	Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

	The following are examples of expected output values:

	EXAMPLES:
	rgb(255, 255, 255) // returns FFFFFF
	rgb(255, 255, 300) // returns FFFFFF
	rgb(0,0,0) // returns 000000
	rgb(148, 0, 211) // returns 9400D3
*/
const rgb = (r, g, b) => {
  const hexadecimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8",
                      "9", "A", "B", "C", "D", "E", "F"];
  
  const extractValue = (x) => {
    if (x > 255) {
      return [15, 15];
    } else if (x < 0) {
      return [0, 0];
    } else {
      value = x / 16;
      remainder = (value % 1) * 16;
      return [Math.floor(value), remainder];
    }
  };

  r = extractValue(r);
  g = extractValue(g);
  b = extractValue(b);

  return (hex =
    hexadecimal[r[0]] +
    hexadecimal[r[1]] +
    hexadecimal[g[0]] +
    hexadecimal[g[1]] +
    hexadecimal[b[0]] +
    hexadecimal[b[1]]);
};



// Test
console.log(rgb(0, 0, 0));
console.log(rgb(0, 0, -20));
console.log(rgb(300, 255, 255));
console.log(rgb(173, 255, 47));
console.log(rgb(185, 223, 281));
