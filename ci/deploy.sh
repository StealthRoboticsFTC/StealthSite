#!/bin/sh

echo "starting code deployment in process ID: $$"
cd ~/vicinity
git pull
gsutil rsync -rd -x "\.git|.*\.log$" . gs://code.pakasa.world/vicinity
cd ~/vicinity/web
gsutil rsync -rd -x "\.git|.*\.sh$|.*\.log$" . gs://cnt.pakasa.world