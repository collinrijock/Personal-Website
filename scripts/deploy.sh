#!/bin/bash
git add .
echo "Enter commit msg:"
read msg
git commit -am "'$msg'"
git push
echo "Changes pushed"
ssh collin@collinrijock.dev 'bash -s' < serverUpdate.sh
echo "Changes deployed"