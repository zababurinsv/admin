#!/usr/bin/env sh

# abort on errors
set -e

# build
cd ./docs
npm run build

# navigate into the build output directory
cd /docs/vuepress/docs/src/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
#git remote add Sergey https://github.com/zababurinsv/vuepress.git
git config pull.rebase true
git push -f --set-upstream Sergey master:gh-pages

cd -