# VS Code Theme Starter

Get started with your first VS Code Theme!

## 1. Enter `package.json` info
  - [ ] name
  - [ ] displayName
  - [ ] description
  - [ ] author
  - [ ] publisher
  - [ ] repository.url
  - [ ] contributes.themes.label/uiTheme/path
  - [ ] icon (if you want)
  - [ ] keywords (if you want)

> [!NOTE]
> Not sure how to enter your info? [Example of a package.json](https://github.com/felix-bohlin/cozy-dark/blob/main/package.json).

## 2. Change your theme!

The easiest way is to:
   a. Use the theme you want to change
   b. `CTRL/CMD + SHIFT + P`: Developer: Generate Theme From Current Settings
   c. Paste that object into `my-theme.js`
   d. Press `F5` to debug your theme

## 3. Misc
- [ ] Change README
- [ ] Add license


## 4. Setup annoying Microsoft account stuff
More on that [here](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#publishing-extensions)

## 5. Publish!
1. Run:
```
pnpm i -g @vscode/vsce
```

2. Build your theme:
```
pnpm package
```

3. Publish! Run either:
```
pnpm publish:patch
// or
pnpm publish
// or
pnpm publish:major
```

## Useful commands
- Developer: Generate Theme From Current Settings
- Developer: Inspect Editor Token And Scopes


## Links
- [VS Code Theme color reference](https://code.visualstudio.com/api/references/theme-color)
- [Syntax highlight guide](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide)
- [Create a new color theme](https://code.visualstudio.com/api/extension-guides/color-theme#create-a-new-color-theme)
- [Getting started, your first extension](https://code.visualstudio.com/api/get-started/your-first-extension)
