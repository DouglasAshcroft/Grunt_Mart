# HOW TO USE GruntAPI:
Refer to this address to start all requests:
http://localhost:3000/
## Items
Data Structure:
{id, product_name, manufacturer, nsn, category, description, price, pic}

GET
"items/" - get a list of all items
"items/random/" - get a small list of random items
"items/:id/" - get information on a single item
headers/body are not required

POST
"items/new/" post a new item to the database
headers required.
Body must include product_name, manufacturer, nsn, category ID, description, price, and an URL reference for picture. DO NOT include id, it will be assigned automatically.

DELETE
"items/delete/:id" remove the specified item from the database

UPDATE
"items/:id/update" update an item in the database
headers required.
Body must include only the fields being updated.

## Categories
Data Structure:
{id, category_name, description}

GET
"category/" - get a list of all
"category/:id/" - get a list of all items belonging to a specific category
headers/Body not required.

POST
"category/new/" - submit a new category to the database
headers required.
Body must include category_name and description. DO NOT include id, it will be assigned automatically.

DELETE
"category/:id/delete" - delete the specified category from the database

UPDATE
"category/:id/update" - update the specified category in the database
headers required.
Body must include only the fields being updated.

## Roles
Data Structure:
{id, role_name, description, category_list}
NOTE: Category list refers to internal files and not a database entry

GET
"roles/" - get a list of all roles
"roles/:id/" - get all categories belonging to a specific roles
POST

DELETE

UPDATE
headers required.
Body must include only the fields being updated.

## Orders
Data Structure:
{id, user, price, date, status, items_ordered}

GET
"user/orders/" - get a list of all orders for the specified user
"user/orders/:id" - get information on the specific order
POST

DELETE

UPDATE
headers required.
Body must include only the fields being updated.

## Users
Data Structure:
{id, user_name, address, email, payment_info}

GET
"user/:id" - get information on a specific user
POST

DELETE

UPDATE
headers required.
Body must include only the fields being updated.