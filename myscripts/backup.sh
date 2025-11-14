#!/bin/bash

# 显示开始
echo "开始备份..."

# 设置日期
DATE=$(date +%Y-%m-%d_%H-%M-%S)

# 目标目录
TARGET=backup_$DATE

# 创建备份目录
mkdir -p $TARGET

# 把 data 文件夹复制进去
cp -r ./data $TARGET/

# 显示完成
echo "备份完成：$TARGET"
