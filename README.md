# STUDIOKEEPER 
## The best way for DIY studios to manage their projects. 

## Users

### `GET /users/all` 
	Returns all users 
	[
  {
    "_id": "56e106752457fbe02bde7b8f",
    "email": "dylan@bandforgeapp.com",
    "password": "$2a$10$OVqU/e5XfxeDCVChFy4ceehRby1xEyMDBcs6n2RHDn50Mqw4zhtAe",
    "__v": 0
  }	]

### `POST /users`
	Create a new user 
	{
	    "email":"dylan@bandforgeapp.com", 
	    "password":"password"
	}

### `POST /users/auth/`
takes a user object 
	{
	    "email":"dylan@bandforgeapp.com", 
	    "password":"password"
	}

## Client 
Every User has a list of clients. To attach a new client to that user 

`POST /clients/`
Takes the following object: 
````json
{
    "contact_name":"Greg Long", 
    "contact_email":"greg@watrecords.com", 
    "status":"open", 
    "location":"Boston", 
    "active":"true"
}
````
and will return 
````
{
  "__v": 0,
  "contact_name": "Greg Long",
  "contact_email": "greg@watrecords.com",
  "location": "Boston",
  "_id": "56e10bb616d6ccb92ca41054",
  "active": true,
  "status": "open",
  "joined": "2016-03-10T05:52:54.824Z"
}
````






