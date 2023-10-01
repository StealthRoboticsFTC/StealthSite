#!/bin/sh

echo "starting code deployment in process ID: $$"
setsid ./deploy.sh > deploy.log 2>&1 &
echo "sleeping for 10 sec ..."
sleep 10
echo "done..."