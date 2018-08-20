function reverseStringRecursion(string) {
  if(string.length === 0) return "";

  return string[string.length - 1] + reverseStringRecursion(string.slice(0, string.length - 1));
}
