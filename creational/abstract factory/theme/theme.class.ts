import { DarkDialog, LightDialog } from "./dialog/dialog.class";
import { Dialog } from "./dialog/dialog.interface";
import { ThemeFactory } from "./theme.interface";
import { DarkToolbar, LightToolbar } from "./toolbar/toolbar.class";
import { Toolbar } from "./toolbar/toolbar.interface";

export class LightThemeFactory implements ThemeFactory {
  createDialog(): Dialog {
    return new LightDialog();
  }

  createToolbar(): Toolbar {
    return new LightToolbar();
  }
}

export class DarkThemeFactory implements ThemeFactory {
  createDialog(): Dialog {
    return new DarkDialog();
  }

  createToolbar(): Toolbar {
    return new DarkToolbar();
  }
}
