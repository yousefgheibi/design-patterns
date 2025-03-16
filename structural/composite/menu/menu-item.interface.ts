export interface MenuItem {
  getName(): string;
  getChildren(): MenuItem[];
}
