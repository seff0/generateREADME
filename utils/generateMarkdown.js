// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## DESCRIPTION

Repo is owned by ${data.github}.

${data.description}

## TABLE OF CONTENTS

[DESCRIPTION](#description)

[INSTALLATION-NOTES](#installation-notes)

[USAGE-NOTES](#usage-notes)

[LICENSE](#license)

[HOW-TO-CONTRIBUTE](#how-to-contribute)

[TESTING-NOTES](#testing-notes)

[QUESTIONS](#questions)

## INSTALLATION-NOTES

${data.installation}

## USAGE-NOTES

${data.usage}

## LICENSE

## HOW-TO-CONTRIBUTE

${data.contributions}

## TESTING-NOTES

${data.testing}

## QUESTIONS

Please direct questions to: ${data.github} on github or ${data.email} via email.
`;
}

module.exports = generateMarkdown;
