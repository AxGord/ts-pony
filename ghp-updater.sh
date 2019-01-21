#!/bin/bash
GH_REPO="@github.com/AxGord/ts-pony.git"
FULL_REPO="https://$GH_TOKEN$GH_REPO"

function create_all_branches()
{
    # Keep track of where Travis put us.
    # We are on a detached head, and we need to be able to go back to it.
    local build_head=$(git rev-parse HEAD)

    # Fetch all the remote branches. Travis clones with `--depth`, which
    # implies `--single-branch`, so we need to overwrite remote.origin.fetch to
    # do that.
    git config --replace-all remote.origin.fetch +refs/heads/*:refs/remotes/origin/*
    git fetch
    # optionally, we can also fetch the tags
    git fetch --tags

    # create the tacking branches
    for branch in $(git branch -r|grep -v HEAD) ; do
        git checkout -qf ${branch#origin/}
    done

    # finally, go back to where we were at the beginning
    git checkout ${build_head}
}

npm run doc

cd ../

git clone --single-branch --branch gh-pages $FULL_REPO doc
cd doc
create_all_branches
git fetch origin
git config user.name "rapporter-travis"
git config user.email "travis"
git checkout gh-pages
cp -r ../ts-pony/doc .

git add -A
git commit -m "GH-Pages update by travis after $TRAVIS_COMMIT"
git push origin gh-pages