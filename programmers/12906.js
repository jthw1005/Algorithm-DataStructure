/**
 * 같은 숫자는 싫어
 * https://school.programmers.co.kr/learn/courses/30/lessons/12906
 */

function solution(arr) {
  return arr.filter((el, idx) => el !== arr[idx + 1]);
}
