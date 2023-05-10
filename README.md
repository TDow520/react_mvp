# FullStack Shopping Cart  

This project is created to show understanding of how to create a fullstack application using React.js. This project has a database to hold items inputted by the user. THe list show items that they would like to buy.  The server connects to the database using Express.js. And the client talks to the server through Express fetch requests. I learned how much easier it is to build out different parts of a site using React.  This also helps to keep track of all the of what component i want to fucntion in certain ways.

## Operation

To start the homepage has prefilled items in the cart to show how the items will be displayed. Below the cart there is a form where the user can input the item name, what type of item it is, and the price of the item. If one or more of the fields are not populated when the submit button is clicked the item will not be updated to the database or the cart. Once the item is added to the cart there will automatically be a delete button to the right side of the item. This delete button is linked directly to that item and no other. If the user clicks the delete button it will disappear from the cart and the database. There is no secondary confirmation for deletion. 

### Future Operations
To the right corner there is a sign-in button. This button will pop up a display asking for the username and password. As of this publication the sing-in option is not operational. But I would like to add its function to this app. This will allow users to sign-in to view their personal shopping cart. I will also be looking into adding a way to save the user data after they sign-out and the computer restarts. 


## Tech Stack

**Client:** React, TailwindCSS

**Server:** Node, Express, Docker

**Database:** PostgresSQL

## Features

- Sign-in button
- delete button to delete its assign item
- form inputs to add an item

## Authors

- [@tdow520](https://www.github.com/TDow520)

