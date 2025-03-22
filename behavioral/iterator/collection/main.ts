interface Iterator<T> {
  next(): T | null;
  hasNext(): boolean;
}

interface Collection<T> {
  createIterator(): Iterator<T>;
}

class NumberIterator implements Iterator<number> {
  private collection: number[];
  private currentIndex: number = 0;

  constructor(collection: number[]) {
    this.collection = collection;
  }

  next(): number | null {
    if (this.hasNext()) {
      return this.collection[this.currentIndex++];
    }
    return null;
  }

  hasNext(): boolean {
    return this.currentIndex < this.collection.length;
  }
}

class NumberCollection implements Collection<number> {
  private numbers: number[] = [];

  constructor(numbers: number[]) {
    this.numbers = numbers;
  }

  createIterator(): Iterator<number> {
    return new NumberIterator(this.numbers);
  }
}

const numbers = new NumberCollection([1, 2, 3, 4, 5]);
const iterator = numbers.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
