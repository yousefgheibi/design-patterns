import { MenuItem } from "./menu-item.interface";

export class MenuComposite implements MenuItem {
  private children: MenuItem[] = [];

  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  add(child: MenuItem): void {
    this.children.push(child);
  }

  remove(child: MenuItem): void {
    this.children = this.children.filter((c) => c !== child);
  }

  getChildren(): MenuItem[] {
    return this.children;
  }
}
