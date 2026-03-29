# 股票分析系统

## 项目概述
一个提供每日、每周、资金流入板块分析，AI建议和预测，板块联动展示，个股滚动展示，以及选股策略建议的股票分析系统。

## 功能特性
- **每日分析**：各板块当日表现、涨跌幅、成交量
- **每周分析**：本周累积表现、趋势分析
- **资金流入分析**：板块资金流入流出情况、主力资金流向
- **AI预测模块**：基于历史数据和趋势给出投资建议
- **板块联动展示**：板块间的关联关系可视化
- **个股滚动展示**：板块内个股轮流展示
- **选股策略建议**：基于策略和数据的个股推荐

## 项目结构
```
stock-analysis-dashboard/
├── backend/                # 后端API服务
│   ├── server.py          # Flask后端服务器
│   ├── requirements.txt   # Python依赖
│   ├── README.md          # 后端说明文档
├── frontend/              # 前端界面
│   ├── index.html         # 主页面
│   ├── js/
│   │   ├── api.js         # API交互模块
│   ├── README.md          # 前端说明文档
├── README.md              # 项目总文档
├── 股票分析项目计划.md     # 项目计划
├── 进度检查点.md          # 进度跟踪
├── 后端任务说明书.md      # 后端任务说明书
├── 前端任务说明书.md      # 前端任务说明书
```

## 技术架构
- **前端**: HTML/CSS/JavaScript + 图表库 (Chart.js/ECharts)
- **后端**: Flask (Python) 提供API接口
- **数据**: 模拟数据 → 可接入真实股票API

## 部署说明

### 1. 后端部署
```bash
cd backend
pip install -r requirements.txt
python server.py
```

后端将在 `http://localhost:5000` 启动，提供以下API接口：
- `/api/stock/daily`: 每日板块分析
- `/api/stock/weekly`: 每周板块分析
- `/api/stock/capital`: 资金流入流出分析
- `/api/stock/sectors`: 板块联动分析
- `/api/stock/predictions`: AI预测和建议
- `/api/stock/suggestions`: 选股建议
- `/api/health`: 健康检查

### 2. 前端部署
```bash
cd frontend
# 使用静态服务器启动
python -m http.server 8000
```

前端将在 `http://localhost:8000` 启动

## 开发进展
**已完成的功能：**
1. 后端API服务 ✓（Node.js Express运行于localhost:5000）
2. 前端页面 ✓（HTML/CSS/JavaScript + Chart.js）
3. API接口 ✓（6个核心接口：每日/每周/资金/板块/AI/选股）
4. 前后端集成 ✓（实时数据对接）
5. 图表可视化 ✓（Chart.js图表实现）
6. 交互功能 ✓（板块选择、时间切换、数据刷新）

**部署测试：**
- 后端API服务器：http://localhost:5000
- 前端页面：http://localhost:8000
- 全部API接口正常运行
- 前端页面完全可交互

**核心功能实现：**
- ✅ 每日板块分析展示
- ✅ 资金流入流出可视化
- ✅ AI预测和建议展示
- ✅ 板块联动关系展示
- ✅ 个股滚动展示
- ✅ 实时数据更新

**下一步优化：**
1. 集成真实股票数据API（东方财富、新浪财经等）
2. 实现更复杂的AI预测算法
3. 部署到GitHub Pages
4. 添加用户配置功能

## 团队分工
- **前端Bot**: UI设计、图表实现、交互功能
- **后端Bot**: API开发、数据分析、AI预测
- **元宝**: 项目管理、协调、部署、验收

## 项目状态
**已完成的开发工作：**
✅ **后端API服务** - Express服务器 (Node.js) 提供7个API接口
✅ **前端界面** - HTML/CSS/JavaScript + Chart.js图表
✅ **数据模拟** - 实时股票数据生成与分析
✅ **图表可视化** - Chart.js图表实现
✅ **交互功能** - 板块选择、时间切换、数据刷新
✅ **文档** - README、部署指南、演示报告
✅ **Git仓库** - 13个提交，所有文件已准备完毕

**待完成的工作：**
⚠️ **GitHub部署** - 等待GitHub认证解决
- GitHub API (`api.github.com`) 可以访问，但需要token认证
- GitHub网站 (`github.com`) HTTPS连接超时
- SSH连接需要密钥认证

**解决方案：**
1. **GitHub API Token** - 使用token通过API创建仓库
2. **SSH密钥** - 生成SSH密钥并添加到GitHub
3. **手动创建** - 在GitHub网站手动创建仓库
4. **备份归档** - 提供`stock-analysis-core.tar.gz` (176KB)

**交付准备：**
- 归档文件: `stock-analysis-project.tar.gz` (18KB)
- 归档文件: `stock-analysis-core.tar.gz` (176KB) - 精简版
- 演示报告: `project_demo.md`
- 手动部署指南: `manual_deploy.md`
- GitHub访问测试报告: `GitHub访问测试报告.md`
- 紧急部署方案: `紧急部署方案.md`

## 网络状态测试
✅ **GitHub API**: api.github.com 可以访问（需要认证）
⚠️ **GitHub网站**: github.com HTTPS连接超时
⚠️ **GitHub SSH**: 需要SSH密钥认证

## 团队分工
- **前端Bot**: UI设计、图表实现、交互功能
- **后端Bot**: API开发、数据分析、AI预测
- **元宝**: 项目管理、协调、部署、验收