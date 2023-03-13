# E-Commerce Project
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
 ## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Screenshots](#screenshots)
5. [License](#license)

## Description:
 The E-Commerce Project is an application that demonstrates the back-end portion of an E-Commerce site. The project utilizes an Express.JS API and it is configured to use Sequelize and is used in combination with a MySQL database.

 Routes for the project have been created and can be viewed, modified and deleted through Insomnia and are pictured in the screenshots section.

## Installation: 

To install, the user will clone the GitHub repo to their local storage. Once a terminal is lauched in the repo's main directory, the user will input "npm i" to install all dependencies. 

In the .env file, the The user will fill out their mysql username and password:

DB_NAME='ecommerce_db'
DB_USER='root'
DB_PASSWORD='*******'

Then, the database will start by inputing "mysql -u root -p" then "source db/schema.sql" this will create the tables. Once this is complete, the user will exit the mysql end of the term terminal and type "npm run seed" to seed the data into the tables"  

## Usage:

Routes for the project have been created and can be viewed, modified and deleted through Insomnia and pictured in the screenshots section below.

## Screenshots:

<a href="https://ibb.co/JjWqyRD"><img src="https://i.ibb.co/WvN0PWm/Create-Category-route.jpg" alt="Create-Category-route" border="0"></a>
<a href="https://ibb.co/XFfyvPF"><img src="https://i.ibb.co/gtbvB8t/Create-Product-route.jpg" alt="Create-Product-route" border="0"></a>
<a href="https://ibb.co/PwS94qy"><img src="https://i.ibb.co/XSw3pcP/Create-Tag-route.jpg" alt="Create-Tag-route" border="0"></a>
<a href="https://ibb.co/YT0WvBB"><img src="https://i.ibb.co/0VsXPyy/Delete-Category-route.jpg" alt="Delete-Category-route" border="0"></a>
<a href="https://ibb.co/02j8WQ1"><img src="https://i.ibb.co/B3Vd7wv/Delete-Product-route.jpg" alt="Delete-Product-route" border="0"></a>
<a href="https://ibb.co/qjF71DH"><img src="https://i.ibb.co/dMJjKfN/Delete-Tag-route.jpg" alt="Delete-Tag-route" border="0"></a>
<a href="https://ibb.co/C1VvbYP"><img src="https://i.ibb.co/r75Mxzd/Edit-Category-route.jpg" alt="Edit-Category-route" border="0"></a>
<a href="https://ibb.co/2sBPR0n"><img src="https://i.ibb.co/Tb5RJDv/Edit-Product-route.jpg" alt="Edit-Product-route" border="0"></a>
<a href="https://ibb.co/6NYjF3m"><img src="https://i.ibb.co/BwL0BXt/Edit-Tags-route.jpg" alt="Edit-Tags-route" border="0"></a>
<a href="https://ibb.co/b72ybNf"><img src="https://i.ibb.co/3kM8RSJ/Get-all-Categories-route.jpg" alt="Get-all-Categories-route" border="0"></a>
<a href="https://ibb.co/V9QBd7n"><img src="https://i.ibb.co/QQCmZ2S/Get-all-Products-route.jpg" alt="Get-all-Products-route" border="0"></a>
<a href="https://ibb.co/p12vLy3"><img src="https://i.ibb.co/BfLVCNg/Get-all-Tags-route.jpg" alt="Get-all-Tags-route" border="0"></a>
<a href="https://ibb.co/8zZ3pwh"><img src="https://i.ibb.co/PTHpnyS/Get-Category-by-ID-route.jpg" alt="Get-Category-by-ID-route" border="0"></a>
<a href="https://ibb.co/zVCMJRN"><img src="https://i.ibb.co/k2z718M/Get-Products-by-ID-route.jpg" alt="Get-Products-by-ID-route" border="0"></a>
<a href="https://ibb.co/3fy16cT"><img src="https://i.ibb.co/SQXNYB6/Get-Tag-by-ID-route.jpg" alt="Get-Tag-by-ID-route" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'></a><br />

Walkthrough video:

https://www.loom.com/share/c729ccd1dba24cc79c3555711810d810

## License:
MIT
