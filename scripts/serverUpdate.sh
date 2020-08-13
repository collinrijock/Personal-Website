#!/bin/bash
cd /var/www/collinrijock.dev/Personal-Website
git pull origin master
npm install
npm run build