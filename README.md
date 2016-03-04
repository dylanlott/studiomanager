# STUDIOKEEPER 
## The best way for DIY studios to manage their projects. 

## Users 

GET `/users/all` 
Returns all users 

POST '/users'
Create a new user 
{
"username": yourusername,
"password": yourpassword
}

POST `/users/auth/`
takes a user object 
{
"username": yourusername, 
"password": yourpassword 
}



