import { Dialog } from "./dialog/dialog.interface";
import { Toolbar } from "./toolbar/toolbar.interface";

export interface ThemeFactory {
  createDialog(): Dialog;
  createToolbar(): Toolbar;
}
