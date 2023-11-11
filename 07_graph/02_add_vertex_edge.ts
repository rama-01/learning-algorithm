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
}

// 测试代码
const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'C')

graph.traverse()

export default graph