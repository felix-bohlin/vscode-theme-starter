import { common, editor, syntax, terminal } from "./colors.js"

export const myTheme = {
  $schema: "vscode://schemas/color-theme",
  type: "dark",
  colors: {
    "terminal.ansiBlack": terminal.black,
    "terminal.ansiBlue": terminal.blue,
    "terminal.ansiBrightBlack": terminal.brightBlack,
    "terminal.ansiBrightBlue": terminal.brightBlue,
    "terminal.ansiBrightCyan": terminal.brightCyan,
    "terminal.ansiBrightGreen": terminal.brightGreen,
    "terminal.ansiBrightMagenta": terminal.brightMagenta,
    "terminal.ansiBrightRed": terminal.brightRed,
    "terminal.ansiBrightWhite": terminal.brightWhite,
    "terminal.ansiBrightYellow": terminal.brightYellow,
    "terminal.ansiCyan": terminal.cyan,
    "terminal.ansiGreen": terminal.green,
    "terminal.ansiMagenta": terminal.magenta,
    "terminal.ansiRed": terminal.red,
    "terminal.ansiWhite": terminal.white,
    "terminal.ansiYellow": terminal.yellow,
    "terminal.background": terminal.background,
    "terminal.foreground": terminal.foreground,
    "terminalCursor.background": terminal.cursor.background,
    "terminalCursor.foreground": terminal.cursor.foreground,
  },
}
