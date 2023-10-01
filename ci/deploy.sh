#!/bin/sh

echo "starting code deployment in process ID: $$"
cd ~/StealthSite
git pull
gsutil rsync -rd -x "\.git|.*\.sh$|.*\.log$" . gs://stealth-robotics
