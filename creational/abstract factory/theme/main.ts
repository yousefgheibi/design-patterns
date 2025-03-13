import { getThemeFactory } from "./theme.factory";

const factory = getThemeFactory("dark");

const dialog = factory.createDialog();
const toolbar = factory.createToolbar();

dialog.render();
toolbar.render();
