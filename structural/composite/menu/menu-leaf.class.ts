import { MenuItem } from "./menu-item.interface";

export class MenuLeaf implements MenuItem {
  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  getChildren(): MenuItem[] {
    return [];
  }
}
