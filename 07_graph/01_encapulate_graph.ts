class Graph<T> {
  private vertexes: T[] = []
  private adjList: Map<T, T[]> = new Map()
}

// 测试代码
const graph = new Graph()

export default graph