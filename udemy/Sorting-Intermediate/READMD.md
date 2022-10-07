# Intermediate Sorting

## Objectives

- 버블, 삽입, 선택 정렬의 한계를 이해한다.
- 합병, 퀵, 기수 정렬을 알아본다.

## 버블, 삽입, 선택 정렬의 한계

- 큰 규모에 맞지 않는다.
- O(N^2)의 시간 복잡도를 갖는다.

## 합병, 퀵, 기수 정렬

- O(NlogN)의 시간 복잡도를 갖는다.
- 효율적이지만 복잡하다는 tradeoff가 있다.

## Merge Sort

- 분할, 정렬, 합병 세 가지가 조합된 방법이다.
- 1개 이하의 요소를 갖는 배열은 이미 정렬되어 있다는 아이디어에서 시작한다.
- 먼저 2개의 정렬된 배열을 하나의 정렬된 배열로 합치는 함수가 필요하다.
- 데이터를 나눠나가는 과정에서 O(logN), 데이터를 합쳐나가는 과정에서 O(N)이므로 O(NlogN)의 시간 복잡도를 갖는다.
  | Time Complexity(Best) | Time Complexity(Average) | Time Complexity(Worst) | Space Complexity |
  | :-------------------: | :----------------------: | :--------------------: | :--------------: |
  | O(NlogN) | O(NlogN) | O(NlogN) | O(N) |
- 보통 시간 복잡도를 우선시 하지만 만약 공간 복잡도가 우선시 되는 상황에서는 이전에 다뤘던 알고리즘이 더 좋다.

## Quick Sort

- Merge Sort처럼 Quick Sort 또한 1개 이하의 요소를 갖는 배열은 이미 정렬되어 있다는 아이디어에서 시작한다.
- 한 개의 요소를 고르고(이 요소를 pivot이라고 부름) 그 pivot을 기준으로 작은 수는 왼쪽으로 큰 수는 오른쪽으로 배치한다.
- 그 후 왼쪽과 오른쪽에서 이 과정을 반복한다.
- 데이터를 나눠가는 과정에서 O(logN), 피벗 인덱스를 찾는 과정에서 O(N)이므로 O(NlogN)의 시간 복잡도를 갖는다.
- 정렬이 이미 되어 있는 데이터에 quick sort를 쓴다면 피벗 인덱스를 찾을 때, 전체 loop를 돌아야하므로 O(N^2)의 시간 복잡도를 갖는다.
  - 이 때는 start값을 0이 아닌 가운데 값으로 잡으면 어느정도 해결할 수 있다.

| Time Complexity(Best) | Time Complexity(Average) | Time Complexity(Worst) | Space Complexity |
| :-------------------: | :----------------------: | :--------------------: | :--------------: |
|       O(NlogN)        |         O(NlogN)         |         O(N^2)         |     O(logN)      |

## Radix Sort

- 두 개의 숫자를 서로 비교하지 않고 각각의 수의 크기에 기반하여 정렬한다.
- 0 ~ 9까지의 버킷을 만들고 총 (최댓값의 자릿수)회 만큼 loop를 돌며, 각 자릿수의 숫자가 해당하는 버킷에 숫자를 나눠 담는 과정을 반복한다.
- 기수 정렬은 다음과 같은 시간 복잡도를 갖는다.
  - 여기서 N은 정렬할 항목 수 또는 정수의 개수이고 K는 자릿수이다.

| Time Complexity(Best) | Time Complexity(Average) | Time Complexity(Worst) | Space Complexity |
| :-------------------: | :----------------------: | :--------------------: | :--------------: |
|         O(NK)         |          O(NK)           |         O(NK)          |      O(N+K)      |