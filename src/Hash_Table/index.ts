export default class HashTable {
  size: number;
  table: any[][];

  constructor(size: number) {
    this.size = size;
    this.table = [];
  }

  get(key: string): any | undefined {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i] === key) {
          return bucket[i].value;
        }
      }
    }
    return undefined;
  }

  insert(key: string, value: any): void {
    const index = this.hash(key);

    if (!this.table[index]) {
      this.table[index] = [];
    }

    const currentValue = this.get(key);

    if (typeof currentValue !== "undefined") {
      const bucket = this.table[index];

      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i].key === key) {
          bucket[i].value = value;
        }
      }
    } else {
      this.table[index].push({ key, value });
    }
  }

  remove(key: string): any {
    const value = this.get(key);
    this.insert(key, undefined);
    return value;
  }

  hash(key: string): number {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.size;
    }

    return hash;
  }
}
