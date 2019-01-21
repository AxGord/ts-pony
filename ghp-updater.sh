#!/bin/bash
GH_REPO="@github.com/AxGord/ts-pony.git"
FULL_REPO="https://$GH_TOKEN$GH_REPO"

mkdir doc
cd doc

git init
git remote add origin $FULL_REPO
git fetch
git config user.name "rapporter-travis"
git config user.email "travis"
git checkout gh-pages

cd ..
npm run doc
cd doc

git add -a
git commit -m "GH-Pages update by travis after $TRAVIS_COMMIT"
git push origin gh-pages