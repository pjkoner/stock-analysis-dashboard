#!/bin/bash

# GitHub部署脚本

echo "开始部署股票分析系统到GitHub..."

# 1. 检查Git状态
echo "1. 检查Git状态..."
git status

# 2. 提交所有更改
echo "2. 提交所有更改..."
git add .
git commit -m "部署股票分析系统到GitHub"

# 3. 创建GitHub仓库（需要GitHub认证）
echo "3. 创建GitHub仓库..."
# gh repo create stock-analysis-dashboard --public

# 4. 设置远程仓库
echo "4. 设置远程仓库..."
# git remote add origin https://github.com/yourusername/stock-analysis-dashboard.git

# 5. 推送代码
echo "5. 推送代码..."
# git push -u origin master

echo "部署脚本已准备好。需要GitHub认证后执行步骤3-5。"