# Sorting

## Feature

- 대략 유명한 정렬 알고리즘만 15개 정도 된다.
- 그만큼 유명하고 많이 나오는 알고리즘 유형이다.
- 가지고 있는 데이터가 랜덤화 되었는지, 역배치 되었는지, 거의 정렬이된 상태인지 등등에 따라 각각의 정렬 알고리즘마다 장단점을 갖는다.

## Objectives

- Bubble sort를 구현한다.
- Selection sort를 구현한다.
- Insertion sort를 구현한다.
- 정렬 알고리즘의 중요성을 이해한다.

## Swap function

- 먼저 정렬 알고리즘에서 자주 등장하는 swap 함수를 알아보자.

```js
// ES5
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

//ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
```

## Bubble Sort

- 성능이 좋진 않다. 흔하게 쓰이지 않는다.
- 각 자릿수를 순회하며 큰 숫자를 뒤로 보내는 알고리즘.
- 정렬이 완료되어서 swap이 더이상 일어나지 않으면 남은 loop를 돌지 않아도 되므로 이 때 함수를 종료시켜 최적화를 할 수 있다.
- O(N^2)의 시간 복잡도를 갖는다.

## Selection Sort

- 배열 내에서 최솟값을 찾아 맨 앞에 배치한다.
- (배치가 안 된 요소들 중 최솟값을 찾아 맨 앞에 배치한다.) x N회
- O(N^2)의 시간 복잡도를 갖는다.
- 메모리 사용을 줄여야 하거나, swap함수 사용을 줄여야 하는 경우에 Bubble Sort보다 좋다.

## Insertion Sort

- Bubble Sort, Selection Sort와 비슷하다.
- 그러나 두 알고리즘 보다 좋은 특징들이 확실히 존재한다.
- 하나의 배열 내에서 요소를 하나씩 순회하며 점진적으로 정렬된 배열을 만들어간다.
- O(N^2)의 시간 복잡도를 갖는다.
- 데이터가 거의 정렬되어 있는 경우 빠르다.
- 라이브 스트리밍 방식으로 들어온 데이터를 즉시 입력해야 하는 상황에서 편리하다.
  - 기존 데이터들은 이미 다 정렬이 되어 있고 새로 들어온 데이터가 들어갈 자리만 파악하면 되기 때문.

## Tip

- 알고리즘이 적용되는 특정 상황을 시뮬레이션 해보면 반복문이나 조건문 등을 작성할 때 도움된다.

## Bubble vs Selection vs Insertion

|   Algorithm    | Time Complexity(Best) | Time Complexity(Average) | Time Complexity(Worst) | Space Complexity |
| :------------: | :-------------------: | :----------------------: | :--------------------: | :--------------: |
|  Bubble Sort   |         O(N)          |          O(N^2)          |         O(N^2)         |       O(1)       |
| Insertion Sort |         O(N)          |          O(N^2)          |         O(N^2)         |       O(1)       |
| Selection Sort |        O(N^2)         |          O(N^2)          |         O(N^2)         |       O(1)       |
