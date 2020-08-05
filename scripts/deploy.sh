#!/bin/bash
git add .
echo "Enter commit msg:"
read msg
git commit -am "'$msg'"
git push
echo "Changes pushed"
ssh collin@collinrijock.dev
cd /var/www/collinrijock.dev/Personal-Website
git pull
npm run build
exit
echo "Changes deployed"