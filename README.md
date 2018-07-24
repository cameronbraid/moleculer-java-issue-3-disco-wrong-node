Steps to reproduce issue :
```
# download node deps
yarn

# download mvn deps
mvn compile

# in terminal 1
node discovery.js

# wait for discovery 

# in terminal 2
node server.js

# wait for discovery 

# in terminal 3
mvn exec:java

# wait for discovery 

# you can now run one of two commands in the console of client by typing the command name and hitting enter

# list actions
a

# call math.add
c
```