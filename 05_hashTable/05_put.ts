class HashTable<T> {
  private storage: [string, T][][] = []
  private length: number = 7
  private count: number = 0
  // 封装哈希函数
  private hashFunc(str: string, max: number): number {
    let hashCode = 0
    let len = str.length
    for (let i = 0; i < len; i++) {
      hashCode = 31 * hashCode + str.charCodeAt(i)
    }
    const index = hashCode % max
    return index
  }
  // 插入，修改
  put(key: string, value: T) {
    //  get hashCode
    const index = this.hashFunc(key, this.length)
    let bucket = this.storage[index]
    // 如果为undefined，创建一个bucket
    if (!bucket) {
      bucket = []
      this.storage[index] = bucket
      // 以上两行代码能否合并呢？不行，因为必须给bucket赋值为[]
    }
    // 修改
    let isUpdate = false  //是否更新value
    for (let i = 0; i < bucket.length; i++) {
      /*  if (key === bucket[i][0]) {
         bucket[i][1] = value
         isUpdate = true
       } */
      // 其他写法，这里插入bucket的其实是tuple，允许存储不同的数据类型
      const tuple = bucket[i]
      const tupleKey = tuple[0]
      if (key === tupleKey) {
        tuple[1] = value
      }
    }
    // insert
    if (!isUpdate) {
      bucket.push([key, value])
      this.count++
    }
  }
}

const hashTable = new HashTable()
hashTable.put('aaa', 3)
hashTable.put('aab', 4)
hashTable.put('aaa', 6)

export default hashTable