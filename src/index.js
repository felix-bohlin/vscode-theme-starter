import { cozyDark } from "./my-theme.js"
import fs from "fs/promises"

fs.mkdir("./themes", { recursive: true })
  .then(() =>
    Promise.all([
      fs.writeFile(
        `./${process.env.npm_package_name}.json`,
        JSON.stringify(cozyDark, null, 2)
      ),
    ])
  )
  .catch(() => process.exit(1))
