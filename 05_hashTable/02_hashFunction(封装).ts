class HashTable<T> {
  private storage: [string, T][][] = []
  private length: number = 7
  private count: number = 0
}

export default HashTable