#!/bin/bash

# Install the project's dependencies
npm install

# Create a production build
npm run build

# Check if the app is already running in PM2. If it is, stop and delete it.
if pm2 info gmz-social-download > /dev/null; then
    pm2 delete gmz-social-download
fi

# Start the application in production mode with PM2 on port 3002
PORT=3003 pm2 start npm --name "gmz-social-download" -- start

# Save the PM2 process list
pm2 save

echo "Application deployment completed and PM2 process list saved."
