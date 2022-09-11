function isSubsequence(str1, str2) {
  let leftPointer = 0;
  let rightPointer = 0;

  for (; leftPointer < str1.length; leftPointer++) {
    if (str1[leftPointer] === str2[rightPointer]) leftPointer++;
    rightPointer++;
  }

  if (leftPointer === str1.length) return true;
  return false;
}
