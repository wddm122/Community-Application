# Community Application

Group:
Ivandi
Weixiang Lou


# Assignment 2: Community Application w/ React JS & Socket IO

## Overview

Using your knowledge of application design and development, develop an application to enable community around a topic or theme of your choosing.

Examples of community applications:

- Slack
- Discord
- Teams (Microsoft)
- Reddit and other forums

## Goals

1. Apply UI/UX skills using a common/ubiquitous framework/library
2. Enforce collaborative workflow best practices for development

## Getting started

1. Develop a theme for your project
1. Create a Github Organization for your team
1. Create a repo named after your organization in this format: `[orgname].github.io` (where `[orgname]` is replaced by your organization name)
1. Give access to the entire Organization (or just the Repo) to your team members
1. Create a README file with the following in it and commit to `master`:
	```
	# Community Application

	## Group
	```
2. Each member should write a ticket reminding themselves to "Add my name to the README.md"
   1. Assign it to yourself
   2. Add at least one "label" to the issue (use the most appropriate one)
3. Each member should now clone the repo, create a unique branch, and in that branch, add their name under the `# Group` heading, with a link to their Github homepage
4. When you commit your work, use the commit message to `close #` the ticket
5. Each member should create a pull request
6. As a group, select one person to merge all of the requests into `master`
7. After managing all merge conflicts, commit all the changes to `master` and push the branch to remote
8. Prune all of the name branches to demonstrate that functionality
9. On Slack, create a group message that includes all members of your group and the instructor, then paste the link to your Github Organization into it

## Project requirements

- Delegate roles to all group members
- Decide on any dependencies your team may wish to incorporate (ie, Sass, etc)
- Develop a plan for the layout of each page
- Decide on the general design system (colours, fonts, etc)
- Use React Router to navigate to all pages
- All work must be done in branches
- All communication must go through "Issues", including (but not limited to):
  - Code bugs
  - Design decisions
  - Assigned tasks
  - Content changes
- Issues must be managed (open/comment/close)
- Include documentation (PDFs, compressed images, etc - no originals are necessary)


## Git management criteria

- Ensure each feature or bug fix has its own branch during development _(don't use named user branches for all of your work!)_
- There should not be any `node_modules` folders in any of your branches
- Use `Issues` to track everything! Even if they're just upcoming features or proposals (use _labels_ to track their status/significance)
- All users should contribute to the Issues and documentation. Be sure to add a paragraph of text in the `README.md` file to explain your project and repository management strategy (how work was delegated, how pull requests and merges were handled, etc)

## Deliverables & Grades

The entire project is worth 40% of your final grade in WDDM-122.

### Part A (25% of grade)

Due: **~~Sunday, March 15 (before 11:59pm)~~ Tuesday, March 24 (before noon)**

Collaborative prototyping of the application. Include all states, animations, transitions. Prototype as much of the interface functionality as possible using only HTML and CSS.

| Grade | Value | Description |
| --- | :---: | --- |
| Organization & Repository Management | 5 | Slack (or other) communication, issues/tickets, distribution of work, project management, commit messages, branch names and usage, frequency of commits, fair distribution of work, file structure |
| Content & Design | 5 | Development of assets, graphics, design prototypes, content, information architecture |
| Code & Layout | 15 | Prototyping pages using HTML/CSS |

### Part B (75% of grade)

Due: **Tuesday, April 14 (before 11:59pm)**

Pages built with dynamic content and functionality.

| Grade | Value | Description |
| --- | :---: | --- |
| Organization & Repository Management | 5 | Slack (or other) communication, issues/tickets, distribution of work, project management, commit messages, branch names and usage, frequency of commits, fair distribution of work, file structure |
| Component Structure | 5 | Use of React to develop Components (functional or classes) |
| Management of State & Rendering | 10 | Appropriate use of state variables to trigger re-rendering only when necessary and isolated to the components that require updates |
| Events | 10 | Implementation of Events dynamically using React |
| Routing | 10 | Proper page routing and data passing through URLs and History |
| Web Sockets | 10 | Use and efficiency of Web Sockets |
| Data Management | 10 | Overall management of Data using Context or other means  |
| Code & Efficiency | 5 | Use of best practices, documentation and overall cleanliness  |
| Design & Overall Impression | 10 | Usability, design and overall look & feel  |



# Quick React Demo

A quick React demo and test. To run from the command line (in this root folder):

## 1. Install the Node Modules

```shell
npm install
```

## 2. Run the Webpack Server

```shell
npm start
```

## 3. Build the public files ("dist")

Only required when publishing live online.

```shell
npm run build
```
