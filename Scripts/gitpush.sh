#!/bin/bash

#Add tous les fichiers du dossier
git add *
echo "Add done"
# $(date) est la variable de la date actuelle
git commit -m "Commit du $(date)"
echo "Commit done"
#Etape finale: le push
git push
echo "Push done"