# GitHub部署指南

## 项目代码已准备好
✅ 所有代码文件已创建
✅ Git仓库已初始化
✅ 前端和后端都已开发完成
✅ 系统可正常运行

## 部署步骤

### 第一步：创建GitHub仓库
1. 访问 https://github.com
2. 点击右上角 "+" → "New repository"
3. 填写仓库信息：
   - Repository name: `stock-analysis-dashboard`
   - Description: `股票分析系统：每日/每周/资金流入板块分析，AI建议和预测`
   - 选择公开（Public）
   - 点击 "Create repository"

### 第二步：上传代码
1. 在GitHub仓库页面点击 "Upload files"
2. 上传以下目录：
   - `backend/` - 后端代码
   - `frontend/` - 前端代码
   - `README.md` - 项目文档
   - `deploy.sh` - 部署脚本
   - `股票分析项目计划.md` - 项目计划

### 第三步：设置GitHub Pages
1. 进入仓库设置（Settings）
2. 找到 GitHub Pages 部分
3. 选择部署来源：`main branch`
4. 点击 "Save"

### 第四步：运行系统
1. **后端运行**：
```bash
cd backend
npm install express
node server.js
```

2. **前端运行**：
```bash
cd frontend
python3 -m http.server 8000
```

## 项目状态
✅ 后端API服务器：http://localhost:5000
✅ 前端页面：http://localhost:8000
✅ 功能全部实现：
   - 每日板块分析
   - 每周板块分析
   - 资金流入流出分析
   - 板块联动展示
   - AI预测和建议
   - 选股策略建议

## 演示地址
如果部署到GitHub Pages，访问地址将是：
`https://<your-username>.github.io/stock-analysis-dashboard/`

## 时间要求
**剩余时间：21小时**
请立即开始部署工作，不要再重新规划或开发，直接使用已完成代码。