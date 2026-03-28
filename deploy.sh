#!/bin/bash

# 股票分析系统部署脚本

echo "=== 股票分析系统部署 ==="

# 检查是否安装了gh CLI
if ! command -v gh &> /dev/null; then
    echo "GitHub CLI (gh) 未安装，请先安装"
    echo "安装方法: brew install gh 或 apt-get install gh"
    exit 1
fi

# 检查GitHub认证
echo "检查GitHub认证..."
gh auth status

# 创建GitHub仓库
echo "创建GitHub仓库..."
gh repo create stock-analysis-dashboard --public --description "股票分析系统：每日/每周/资金流入板块分析，AI建议和预测" --confirm

# 初始化Git
echo "初始化Git仓库..."
git init
git add .
git commit -m "初始提交：股票分析系统"

# 推送到GitHub
echo "推送到GitHub..."
git branch -M main
git remote add origin https://github.com/$(gh api user --jq .login)/stock-analysis-dashboard.git
git push -u origin main

echo "=== 部署完成 ==="
echo "前端访问地址: http://localhost:8000"
echo "后端API地址: http://localhost:5000"
echo "GitHub仓库: https://github.com/$(gh api user --jq .login)/stock-analysis-dashboard"