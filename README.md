# gentlepetals-server

First, use npm i to install all the pakages required. 

Then, create a .env file, provide DATABASE_URL in .env file, 
 - e.x : DATABASE_URL=mongodb://localhost:27017/gentlepetals
 - this server will use mongodb as database

Additionally, add SECRET_CODE for the server to hash the token and password. Add in the .env file
 - e.x : SECRET_CODE="PhamTheSang"

After all, RUN THE SERVER by command NPM RUN DEV to run the nodemon.

