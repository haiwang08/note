#!/bin/bash

echo "拉取最新代码..."
git pull

echo "安装依赖..."
npm install

echo "构建项目..."
npm run build

echo "重启服务..."
pm2 restart my-app

echo "部署完成！"
