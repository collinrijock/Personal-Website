#!/bin/bash
git add .
echo "Enter commit msg:"
read msg
git commit -am "'$msg'"
git push
ssh root@collinrijock.dev 'bash -s' < ./scripts/serverUpdate.sh