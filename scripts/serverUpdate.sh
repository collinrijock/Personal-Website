#!/bin/bash
cd /var/www/collinrijock.dev/Personal-Website
git reset --hard
npm install
npm run build
exit