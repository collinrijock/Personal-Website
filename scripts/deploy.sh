#!/bin/bash
git add .
echo "Enter commit msg:"
read msg
git commit -am "'$msg'"
git push
echo "Changes pushed"
ssh root@collinrijock.dev 'bash -s' < ./scripts/serverUpdate.sh
echo "Changes deployed"