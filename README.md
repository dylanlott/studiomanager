# STUDIOKEEPER 
## The best way for DIY studios to manage their projects. 

## Users

GET `/users/all` 
	Returns all users 
	[
  {
    "_id": "56e106752457fbe02bde7b8f",
    "email": "dylan@bandforgeapp.com",
    "password": "$2a$10$OVqU/e5XfxeDCVChFy4ceehRby1xEyMDBcs6n2RHDn50Mqw4zhtAe",
    "__v": 0
  }	]

POST '/users'
	Create a new user 
	{
	    "email":"dylan@bandforgeapp.com", 
	    "password":"password"
	}

POST `/users/auth/`
takes a user object 
	{
	    "email":"dylan@bandforgeapp.com", 
	    "password":"password"
	}



