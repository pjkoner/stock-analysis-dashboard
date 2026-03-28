# 股票分析后端API服务器

## 功能
1. 每日板块分析
2. 每周板块分析
3. 资金流入流出分析
4. 板块联动分析
5. AI预测和建议
6. 选股建议

## API接口
- GET `/api/stock/daily`：每日板块分析
- GET `/api/stock/weekly`：每周板块分析
- GET `/api/stock/capital`：资金流入流出分析
- GET `/api/stock/sectors`：板块联动分析
- GET `/api/stock/predictions`：AI预测和建议
- GET `/api/stock/suggestions`：选股建议
- GET `/api/health`：健康检查

## 运行方式
```bash
pip install -r requirements.txt
python server.py
```

## 技术说明
- 基于Flask框架
- 使用JSON格式数据
- 可扩展为真实数据源（东方财富、新浪财经等API）
- 后续可集成机器学习预测模型