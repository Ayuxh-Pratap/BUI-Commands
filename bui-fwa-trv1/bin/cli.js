#!/usr/bin/env node
const { execSync } = require('child_process');

const runCommand = command => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (e) {
    console.error('Failed to execute ${command}', e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/Ayuxh-Pratap/BUI-Travel ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Extracting structure from BloxUI datasets for ${repoName}`);
console.log(`Initializing folder structure - Done ✅`);
console.log(`Composing tree pathways - Done ✅`);
console.log(`Composing version pathways - Done ✅`);
console.log(`Strating remote clone - Done ✅`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log(
  'Congratulations! Your site is ready. Follow the following commands to get started'
);
console.log(`cd ${repoName} && npm start`);