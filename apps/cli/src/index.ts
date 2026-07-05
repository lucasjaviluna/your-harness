#!/usr/bin/env node

/**
 * Your Harness
 *
 * Operating System for Software Engineering.
 */

const VERSION = "0.1.0";

function printBanner(): void {
  console.log("");
  console.log("==============================================");
  console.log("            Your Harness");
  console.log("  Operating System for Software Engineering");
  console.log("==============================================");
  console.log("");
}

function printVersion(): void {
  console.log(`Version: ${VERSION}`);
}

function printHelp(): void {
  console.log("Usage:");
  console.log("  yh <command>");
  console.log("");

  console.log("Available commands:");
  console.log("  init        Initialize a project");
  console.log("  intent      Manage engineering intents");
  console.log("  workitem    Manage work items");
  console.log("  spec        Manage specifications");
  console.log("  review      Manage reviews");
  console.log("  release     Manage releases");
  console.log("");

  console.log("For more information:");
  console.log("  yh <command> --help");
}

function main(): void {
  printBanner();
  printVersion();
  console.log("");

  const [, , command] = process.argv;

  if (!command || command === "--help" || command === "-h") {
    printHelp();
    return;
  }

  console.log(`Command "${command}" is not implemented yet.`);
}

main();
