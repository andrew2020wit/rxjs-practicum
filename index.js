const currentModule = "12";
const currentModuleFull = "./modules/" + currentModule;

console.log("=== Start", currentModule, "===");
require(currentModuleFull);
console.log("=== SinEnd", currentModule, "===");
