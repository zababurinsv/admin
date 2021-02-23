#!/usr/bin/env sh

# abort on errors
set -e
git add -A
git commit -m 'update'
git push
# build
cd ./docs
npm run build

# navigate into the build output directory
cd ./src/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
#git remote Sergey https://github.com/zababurinsv/vuepress.git
#git push -f git@github.com:zababurinsv/zababurinsv.github.io.git/vuepress origin/gh-pages
#git push --set-upstream https://github.com/zababurinsv/vuepress.git origin/gh-pages
cd -