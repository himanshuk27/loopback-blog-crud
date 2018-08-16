# Loopback CRUD ops API

### Instructions
start command: node .

### Database source
mongodb, running on aws ec2 instance.

### Create new user account
POST/BlogUsers
eg - {
  "name": "Himanshu",
  "email": "himanshuk27@gmail.com",
  "emailVerified": true,
  "password": "admin"
}

### Login
POST/BlogUsers/Login
eg- {"email": "himanshuk27@gmail.com", "password": "admin"}

Set access token

### Get all blog post
GET/BlogPosts

### Post a new Blog
Login -> set access token
POST/BlogPost then PUT BlogPost/{id}/publish for publishing

###Custom ACLs -
-All users can see blog posts, 
-Authenticated users can write blog post, 
-All author can update thier post, 

### custom relations
-Blogpost belongs to BlogUser, 
-BlogUser has many BlogPost
