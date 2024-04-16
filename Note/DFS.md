# 깊이 우선 탐색(DFS, Depth-First Search)

## DFS 세 가지 주요 탐색 방법

- Pre-Order Traversal (전위 순회): 루트 -> 왼쪽 하위 트리 -> 오른쪽 하위 트리
- In-Order Traversal (중위 순회): 왼쪽 하위 트리 -> 루트 -> 오른쪽 하위 트리
- Post-Order Traversal (후위 순회): 왼쪽 하위 트리 -> 오른쪽 하위 트리 -> 루트

### Post Order Traversal

DFS는 트리나 그래프를 탐색하는 알고리즘으로, 루트에서 시작하여 가능한 한 깊게 노드를 탐색하고, 더 이상 탐색할 노드가 없으면 이전 노드로 돌아가는 방식.
<br/>
Post Order Traversal은 노드를 '왼쪽 하위 트리 -> 오른쪽 하위 트리 -> 루트' 순서로 방문하기 때문에 트리의 노드를 삭제하거나, 트리를 복사하거나, 트리를 뒤집는 등의 작업을 할 때 유용.
