#!/bin/bash

# 股票分析系统启动脚本

echo "=== 启动股票分析系统 ==="

echo "1. 启动后端API服务器..."
cd backend
npm install express
node server.js &
BACKEND_PID=$!

echo "2. 启动前端页面服务器..."
cd frontend
python3 -m http.server 8000 &
FRONTEND_PID=$!

echo "3. 等待服务器启动..."
sleep 2

echo "4. 测试API接口..."
curl http://localhost:5000/api/health

echo "5. 系统状态..."
echo "后端API: http://localhost:5000"
echo "前端页面: http://localhost:8000"
echo "API接口列表:"
echo "  /api/stock/daily - 每日分析"
echo "  /api/stock/weekly - 每周分析"
echo "  /api/stock/capital - 资金分析"
echo "  /api/stock/sectors - 板块联动"
echo "  /api/stock/predictions - AI预测"
echo "  /api/stock/suggestions - 选股建议"
echo "  /api/stock/hot - 热门股票"
echo "  /api/stock/analysis/:ticker - 个股分析"

echo "6. 停止服务器..."
echo "按Ctrl+C停止所有服务器"
echo "或执行: kill $BACKEND_PID $FRONTEND_PID"

wait