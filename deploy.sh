#!/usr/bin/env sh

# 发生错误时终止
set -e

# 构建
npm run build

# 进入构建输出的目录下
cd dist

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
# 替换下面的 <USERNAME> 和 <REPO>
# 使用 HTTPS 协议进行推送
git push -f https://github.com/MellowWine/vue-website.git main:gh-pages

cd -