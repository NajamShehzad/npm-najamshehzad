#!/usr/bin/env node

const {
  white,
  blueBright
} = require("colorette");

const work = white(`Software Engineer`)
// const gde = `${blueBright('Google Developers Expert in Angular')}`
const twitter = blueBright('https://twitter.com/NajamShehzad_B')
const linkedIn = blueBright('https://www.linkedin.com/in/najamshehzadbutt')
const github = blueBright('https://github.com/najamshehzad')
// const slides = blueBright('https://slides.com/najamshehzad')
const website = blueBright('https://www.najamshehzad.dev/')
// const ngCookBook = blueBright('https://ng-cookbook.com')
const npx = white('npx najamshehzad')

const heading = `${white('Najam Shehzad Butt')}`
const rows = {
  // ['Google Developers Expert']: gde,
  // ['Angular Cookbook']: ngCookBook,
  LinkedIn: linkedIn,
  Github: github,
  Website: website,
  Twitter: twitter,
  // Slides: slides,
  Card: npx
}

let output = `
${heading}
${work}
`;

// `maxKeyLetters` helps in formatting the information nicely
const maxKeyLetters = Math.max(...Object.keys(rows).map(key => key.length));
const secondaryContent = Object.keys(rows).map((key) => {
  return `${key.padEnd(maxKeyLetters)} : ${rows[key]}`
}).join('\n');

output += `
${secondaryContent}
`;

console.log(output)