#!/bin/bash
git add *
echo "Add done"
# $(date) est la variable de la date actuelle
git commit -m "Commit du $(date)"
echo "Commit done"
git push
echo "Push done"