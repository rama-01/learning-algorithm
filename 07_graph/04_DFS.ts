class Graph<T> {
  private vertexes: T[] = []
  private adjList: Map<T, T[]> = new Map()
  // 添加顶点和边
  addVertex(vertex: T) {
    this.vertexes.push(vertex)
    this.adjList.set(vertex, [])
  }
  addEdge(v1: T, v2: T) {
    this.adjList.get(v1)?.push(v2)
    this.adjList.get(v2)?.push(v1)
  }
  // 遍历邻接表
  traverse() {
    this.vertexes.forEach(vertex => {
      console.log(`${vertex} -> ${this.adjList.get(vertex)?.join(' ')}`);
    })
  }
  bfs() {
    if (!this.vertexes.length) return
    const queue: T[] = []
    const visited = new Set<T>()
    const vertex = this.vertexes[0]
    queue.push(vertex)
    visited.add(vertex)
    while (queue.length) {
      // const neighbors = this.adjList.get(queue.shift()!)
      const res = queue.shift()!
      console.log(res);
      const neighbors = this.adjList.get(res)
      if (!neighbors) continue //这里获取邻近顶点可能为空，所以中止循环
      for (const n of neighbors) {
        if (!visited.has(n)) {
          queue.push(n)
          visited.add(n)
        }
      }
    }
  }
  // 使用栈结构
  dfs() {
    if (!this.vertexes.length) return
    const stack: T[] = []
    const visited = new Set<T>()
    const vertex = this.vertexes[0]
    stack.push(vertex)
    visited.add(vertex)
    while (stack.length) {
      const res = stack.pop()!
      console.log(res)
      const neighbors = this.adjList.get(res)
      if (!neighbors) continue
      const len = neighbors.length
      for (let n = len - 1; n >= 0; n--) {
        const neighbor = neighbors[n]
        if (!visited.has(neighbor)) {
          stack.push(neighbor)
          visited.add(neighbor)
        }
      }
    }
  }
}

// 测试代码
const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'C')
graph.addEdge('C', 'D')
graph.addEdge('A', 'D')

// graph.traverse()
graph.dfs()

export default graph