import { MenuComposite } from "./menu-composite.class";
import { MenuItem } from "./menu-item.interface";
import { MenuLeaf } from "./menu-leaf.class";

const mainMenu = new MenuComposite("Main Menu");

const fileMenu = new MenuComposite("File");
fileMenu.add(new MenuLeaf("New"));
fileMenu.add(new MenuLeaf("Open"));
fileMenu.add(new MenuLeaf("Save"));

const editMenu = new MenuComposite("Edit");
editMenu.add(new MenuLeaf("Cut"));
editMenu.add(new MenuLeaf("Copy"));
editMenu.add(new MenuLeaf("Paste"));

mainMenu.add(fileMenu);
mainMenu.add(editMenu);

function showMenu(menu: MenuItem, indent: string = "") {
  console.log(`${indent}- ${menu.getName()}`);
  for (const child of menu.getChildren()) {
    showMenu(child, indent + "  ");
  }
}

showMenu(mainMenu);