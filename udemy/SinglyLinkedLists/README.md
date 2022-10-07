# Singly Linked Lists

## Objectives

- 단일 연결 리스트에 대해 알아본다.
- 단일 연결 리스트와 배열의 차이점을 비교해본다.
- 단일 연결 리스트의 삽입, 삭제, 순회 등의 메서드를 알아본다.

## Feature

- data에 접근하기 위한 인덱스가 없다.
  - random access를 할 수 없다.
- head, tail, length 속성을 가지고 있다.
- Node로 이뤄져 있으며, 각각의 Node는 값과 또 다른 Node 또는 Null을 가리키는 포인터로 이뤄져있다.
- 배열은 삽입과 삭제의 비용이 비싸지만 단일 연결 리스트는 쉽다.
  - 연결 리스트를 사용하는 가장 중요한 이유는 삽입과 삭제를 쉽게 할 수 있기 때문이다.

## Big O

- Insertion: 맨앞 또는 맨뒤인 경우엔 O(1), 중간인 경우엔 O(N)
- Removal: 맨앞인 경우엔 O(1), 그 외의 경우엔 O(N)
- Searching: O(N)
- Access: O(N)

- 삽입 또는 삭제에 있어서는 단방향 연결 리스트가 배열보다 성능 면에서 우수하다. 따라서 삽입 혹은 삭제 작업을 주로 해야 한다거나, 임의 접근 작업이 필요 없는 경우에는 단방향 연결 리스트가 더 적절하다.

## Recap

- 데이터의 시작 또는 끝에 삽입 또는 삭제를 빈번히 수행하는 작업에서는 단방향 연결 리스트가 배열 대신 최적의 대안이다.
- 배열은 index가 내장되어 있지만, 단방향 연결 리스트는 그렇지 않다.
- 노드를 포함하는 리스트 자료 구조의 아이디어는 스택과 큐와 같은 다른 자료 구조의 기반이다.
  - 따라서 스택과 큐를 이해하려면 단방향 연결 리스트에 대한 이해가 있어야 한다.