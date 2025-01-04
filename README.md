# Algorithms

<details>
  <summary>
    <h2>자료구조</h2>
  </summary>

### 자료구조의 종류

> `단순 구조`, `선형 구조`, `비선형 구조`

#### 단순구조

- 정수
- 실수
- 문자열
- 논리

#### 선형 구조

> 한 원소 뒤에 하나의 원소만이 존재하여 자료들이 선형으로 나열되어 있는 구조

- 배열
- 연결 리스트
- 스택
- 큐

#### 비선형 구조

> 원소 간에 다대다 관계를 가지는 구조

- 그래프
- 트리

<br/><hr/><br/>

### 시간복잡도

> 소프트웨어의 성능은 명확하게 표현할 수 없다. 따라서 `빅오표기법`으로 표현한다 (시간복잡도 표현)

### 빅오표기법

<img width="1117" src="https://user-images.githubusercontent.com/82315118/210250252-ccd1198a-13b7-422c-bb18-7736edef55cf.png" />

( 상수함수 < 로그함수 < 선형함수 < 다항함수 < 지수함수 )

- 상수항은 무시한다
- 가장 큰 항 외에는 무시한다

```
O(1) : stack에서 Push, Pop

O(log n) : 이진 트리

O(n) : for loop

O(n log n) : 퀵 정렬, 병합정렬, 힙 정렬

O(n^2): 이중 for 문, 삽입정렬, 거품정렬, 선택정렬

O(2^n) : 피보나치 수열
```

<br/>

<ul>
  <li>
    <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/Linked List">
      Linked List
    </a>
  </li>
  <li>
    <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/BST">
      BST
    </a>
  </li>
  <li>
    <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/Recursion">
      Recursion
    </a>
  </li>
  <li>
    <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/BFS.md">
      BFS
    </a>
  </li>
  <li>
    <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/DFS.md">
      DFS
    </a>
  </li>
  <li>
    <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/Graph.md">
      Graph
    </a>
  </li>
  <li>
    <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/Trie">
      Trie
    </a>
  </li>
  <li>
    <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/Heap">
      Heap
    </a>
  </li>
  <li>
    <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/Hash Table.md">
      Hash Table
    </a>
  </li>
  <li>
    <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/Greedy.md">
      Greedy
    </a>
  </li>
  <li>
    <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/Sort.md">
      Sort
    </a>
  </li>
</ul>
<br/><hr/><br/>
</details>

<details open>
  <summary>
    <h2>Programmers</h2>
  </summary>

  <details open>
    <summary>
      <h3>Level 2</h3>
    </summary>
    <ul>
      <li>
        <a href="./Programmers/Lv2/큰 수 만들기">[Greedy] 큰 수 만들기</a>
      </li>
      <li>
        <a href="./Programmers/Lv2/배상 비용 최소화">[Heap] 배상 비용 최소화</a>
      </li>
      <li>
        <a href="./Programmers/Lv2/프린터">[Queue] 프린터</a>
      </li>
      <li>
        <a href="./Programmers/Lv2/올바른 괄호">[Stack] 올바른 괄호</a>
      </li>
    </ul>
  </details>

  <details open>
    <summary>
      <h3>Level 3</h3>
    </summary>
    <ul>
      <li>
        <a href="./Programmers/Lv3/가장 먼 노드">[Graph] 가장 먼 노드</a>
      </li>
      <li>
        <a href="./Programmers/Lv3/가장 먼 노드">[Hash] 베스트 앨범</a>
      </li>
      <li>
        <a href="./Programmers/Lv3/입국심사">[BS] 입국심사</a>
      </li>
      <li>
        <a href="./Programmers/Lv3/퍼즐 조각 채우기">[BFS] 퍼즐 조각 채우기</a>
      </li>
    </ul>
  </details>

  <details open>
    <summary>
      <h3>Level 4</h3>
    </summary>
    <ul>
      <li>
        <a href="./Programmers/Lv4/자동완성">[Trie] 자동완성</a>
      </li>
    </ul>
  </details>
</details>

<details open>
  <summary>
    <h2>LeetCode</h2>
  </summary>
  <ul>
    <li>
      <a href="./LeetCode/21">[Linked List] 21</a>
    </li>
    <li>
      <a href="./LeetCode/938">[DFS] 938</a>
    </li>
    <li>
      <a href="./LeetCode/2265">[DFS] 2265</a>
    </li>
    <li>
      <a href="./LeetCode/230">[BST] 230</a>
    </li>
    <li>
      <a href="./LeetCode/102">[BFS] 102</a>
    </li>
    <li>
      <a href="./LeetCode/3">[Hash Map] 3</a>
    </li>
  </ul>
</details>

<details open>
  <summary>
    <h2>Note</h2>
  </summary>

  <ul>
    <li>
      <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/Linked List">
        Linked List
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/BST">
        BST
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/Recursion">
        Recursion
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/BFS.md">
        BFS
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/DFS.md">
        DFS
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/Graph.md">
        Graph
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/Trie">
        Trie
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/Heap">
        Heap
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/Hash Table.md">
        Hash Table
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/Greedy.md">
        Greedy
      </a>
    </li>
    <li>
      <a href="https://github.com/wonjin-dev/algorithm/blob/main/Note/Sort.md">
        Sort
      </a>
    </li>
  </ul>
</details>
