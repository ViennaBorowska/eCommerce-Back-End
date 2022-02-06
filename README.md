# E-Commerce Back-End

## DESCRIPTON

A demonstration of the back-end of an e-commerce site, using RESTful API routes to make requests and post updates to the database.
The database includes 4 tables for; Categories, Products, Tags and Product Tags.

## LANGUAGE : Javascript

## TOOLS : Node.js, Express, MySQL, Sequelize, DotEnv

## REPOSITORY LINK

https://github.com/ViennaBorowska/eCommerce-Back-End

## FILES

- config > connection.js = Sequelize/MySql configuration.
- db > schema.sql = file to initialise & use database.
- models > 4 x .js files = models for each table. index.js = table associations
- routes > index.js = file for defaulthome route '/', including error message & instructions.<br />
  ...............> api > 3 x routes.js files = API request routes for each model. index.js = connecting & using routes with express.
- seeds > 4 x seeds.js files = seed data for tables. index.js = links 4 seed files together to run as one command.
- .env file = environment variables for MySql credentials in config/connection.js
- package-lock.json - node modules tree visiblity
- package.json - node.js metadata
- README.md - project information
- server.js > starting server using Express & Sequelize

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

1. Clone the GitHub repository by pasting the following in your command line: `git clone git@github.com:ViennaBorowska/eCommerce-Back-End.git`
2. Install required packages/dependencies by running `npm i` in terminal.
3. Add own credentials to .env file to configure MySQL
4. Initialise the database in MySQL
5. Seed the database by running `npm seed`.
6. Run the command `npm start` in the terminal to start the MySQL server.
7. API routes can now be accessed on the browser, or through a REST application e.g. Insomnia, Postman etc.

## Usage

Once the above installation steps have been completed, the database can be used.
Please see below walkthrough video demonstration.

<img src="/assets/project-demo.avi" alt="Demo video of how to install and manage the e-commerce database">

This video is also available in Google Drive [here](https://drive.google.com/file/d/1Zhifm-4x_kxB40LBX7Kj_4KyXtXZsbAz/view?usp=sharing)

## Contributing

Contributions and improvements are always welcome. Please make your own branch and commit any changes for review. Do not push changes to the main branch.

## Questions

If you have any questions about this projects, please contact me directly at viennabdev@gmail.com. You can view more of my projects at https://github.com/ViennaBorowska.

This README was compiled using my own [README generator](https://github.com/ViennaBorowska/ReadMe-Generator)
