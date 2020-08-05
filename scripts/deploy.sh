#!/bin/bash
git add .
echo "Enter commit msg:"
read msg
git commit -am "'$msg'"
git push remote master
echo "Changes deployed."