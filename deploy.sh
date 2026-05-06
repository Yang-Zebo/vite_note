#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 从环境变量获取仓库地址,如果未设置则使用默认值
REPO_URL=${DEPLOY_REPO_URL:-"https://github.com/Yang-Zebo/vite_note.git"}

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

# 发布到 GitHub Pages
git push -f "$REPO_URL" master

cd -