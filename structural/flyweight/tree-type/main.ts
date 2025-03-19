class TreeType {
  constructor(
    public name: string,
    public color: string,
    public texture: string
  ) {}

  draw(x: number, y: number) {
    console.log(
      `Drawing a ${this.color} tree ('${this.name}') at (${x}, ${y})`
    );
  }
}

class TreeFactory {
  private static treeTypes: Map<string, TreeType> = new Map();

  static getTreeType(name: string, color: string, texture: string): TreeType {
    const key = `${name}-${color}-${texture}`;
    if (!this.treeTypes.has(key)) {
      this.treeTypes.set(key, new TreeType(name, color, texture));
      console.log(`Created new TreeType: ${key}`);
    }
    return this.treeTypes.get(key)!;
  }
}

class Tree {
  constructor(private x: number, private y: number, private type: TreeType) {}

  draw() {
    this.type.draw(this.x, this.y);
  }
}

class Forest {
  private trees: Tree[] = [];

  plantTree(
    x: number,
    y: number,
    name: string,
    color: string,
    texture: string
  ) {
    const type = TreeFactory.getTreeType(name, color, texture);
    const tree = new Tree(x, y, type);
    this.trees.push(tree);
  }

  draw() {
    this.trees.forEach((tree) => tree.draw());
  }
}

const forest = new Forest();

forest.plantTree(10, 20, "Oak", "Green", "Rough");
forest.plantTree(15, 25, "Oak", "Green", "Rough");
forest.plantTree(20, 30, "Pine", "Dark Green", "Smooth");
forest.plantTree(5, 15, "Pine", "Dark Green", "Smooth");
forest.plantTree(50, 60, "Oak", "Green", "Rough");

forest.draw();
