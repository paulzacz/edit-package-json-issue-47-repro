import { set } from "edit-package-json";

const tryme = () => set(`{
  "name": "test",
  "dependencies": {
    "ranges-apply": "^2.0.0",
    "string-left-right": "^2.3.30"
  },
  "devDependencies": {}
}`,
    "dependencies.ranges-apply",
    "^3.2.2"
)
console.log(tryme());
