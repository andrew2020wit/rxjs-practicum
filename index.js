const currentModule = "13";
const currentModuleFull = "./modules/" + currentModule;

console.log("=== Start", currentModule, "===");
require(currentModuleFull);
console.log("=== SinEnd", currentModule, "===");
