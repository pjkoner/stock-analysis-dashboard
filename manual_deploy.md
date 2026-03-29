# 手动部署指南（GitHub认证替代方案）

## 情况
GitHub CLI (gh)需要认证，当前环境无token。

## 替代方案

### 方案1：使用Git命令直接创建仓库
1. 手动在GitHub网站创建仓库 `stock-analysis-dashboard`
2. 设置远程仓库：
```bash
git remote add origin https://github.com/<用户名>/stock-analysis-dashboard.git
```
3. 推送代码：
```bash
git push origin master
```

### 方案2：使用GitHub API创建仓库
需要GitHub token：
```bash
curl -X POST -H "Authorization: token YOUR_TOKEN" \
     -H "Accept: application/vnd.github.v3+json" \
     https://api.github.com/user/repos \
     -d '{"name":"stock-analysis-dashboard","private":false}'
```

### 方案3：使用环境变量
在环境中设置GitHub token：
```bash
export GH_TOKEN=your_token
gh repo create stock-analysis-dashboard --public
```

## 当前项目状态
- ✅ 代码已准备完成
- ✅ 本地git仓库已建立
- ✅ 3个提交已准备好
- ✅ 后端API服务运行正常
- ✅ 前端界面运行正常
- ⚠️ GitHub认证缺失

## 建议
等待后端Bot提供GitHub认证信息，或手动创建仓库后配置remote。