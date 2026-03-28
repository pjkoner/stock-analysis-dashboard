/**
 * 股票分析后端API服务器(Node.js版本)
 */

const express = require('express');
const app = express();
const PORT = 5000;

// 模拟数据
const SAMPLE_DATA = {
    daily_analysis: [
        {
            sector: "科技板块",
            change_percent: 3.5,
            volume: 10000000,
            ranking: 1
        },
        {
            sector: "金融板块",
            change_percent: 2.1,
            volume: 8000000,
            ranking: 2
        },
        {
            sector: "医疗板块",
            change_percent: -1.2,
            volume: 5000000,
            ranking: 3
        },
        {
            sector: "新能源板块",
            change_percent: 4.8,
            volume: 7000000,
            ranking: 4
        },
        {
            sector: "消费板块",
            change_percent: 0.5,
            volume: 6000000,
            ranking: 5
        }
    ],
    weekly_analysis: [
        {
            sector: "科技板块",
            weekly_change: 8.2,
            avg_volume: 12000000,
            trend: "上升"
        },
        {
            sector: "金融板块",
            weekly_change: 4.5,
            avg_volume: 9000000,
            trend: "平稳"
        },
        {
            sector: "医疗板块",
            weekly_change: -3.1,
            avg_volume: 5500000,
            trend: "下降"
        },
        {
            sector: "新能源板块",
            weekly_change: 12.8,
            avg_volume: 8500000,
            trend: "上升"
        },
        {
            sector: "消费板块",
            weekly_change: 1.2,
            avg_volume: 7000000,
            trend: "平稳"
        }
    ],
    capital_flow: [
        {
            sector: "科技板块",
            capital_in: 150000000,
            capital_out: 50000000,
            net_inflow: 100000000
        },
        {
            sector: "金融板块",
            capital_in: 80000000,
            capital_out: .0000,
            net_inflow: 40000000
        },
        {
            sector: "医疗板块",
            capital_in: 60000000,
            capital_out: 80000000,
            net_inflow: -20000000
        },
        {
            sector: "新能源板块",
            capital_in: 120000000,
            capital_out: 30000000,
            net_inflow: 90000000
        },
        {
            sector: "消费板块",
            capital_in: 70000000,
            capital_out: 60000000,
            net_inflow: 10000000
        }
    ],
    sector_linkage: {
        nodes: [
            {id: "科技", name: "科技板块", group: 1},
            {id: "新能源", name: "新能源板块", group: 2},
            {id: "金融", name: "金融板块", group: 3},
            {id: "医疗", name: "医疗板块", group: 4},
            {id: "消费", name: "消费板块", group: 5}
        ],
        links: [
            {source: "科技", target: "新能源", value: 0.8},
            {source: "科技", target: "金融", value: 0.6},
            {source: "新能源", target: "医疗", value: 0.4},
            {source: "金融", target: "消费", value: 0.7},
            {source: "医疗", target: "科技", value: 0.3}
        ]
    },
    predictions: [
        {
            sector: "科技板块",
            predicted_change: 2.5,
            confidence: 85,
            recommendation: "买入"
        },
        {
            sector: "金融板块",
            predicted_change: 1.8,
            confidence: 70,
            recommendation: "持有"
        },
        {
            sector: "医疗板块",
            predicted_change: -0.5,
            confidence: 60,
            recommendation: "观望"
        },
        {
            sector: "新能源板块",
            predicted_change: 4.2,
            confidence: 90,
            recommendation: "强烈买入"
        },
        {
            sector: "消费板块",
            predicted_change: 0.9,
            confidence: 65,
            recommendation: "持有"
        }
    ],
    stock_suggestions: [
        {
            name: "腾讯控股",
            code: "00700",
            sector: "科技板块",
            price: 350.2,
            change_percent: 2.3,
            score: 87,
            reason: "龙头地位稳固，业务多元化"
        },
        {
            name: "宁德时代",
            code: "300750",
            sector: "新能源板块",
            price: 180.5,
            change_percent: 5.8,
            score: 92,
            reason: "新能源龙头，技术领先"
        },
        {
            name: "招商银行",
            code: "600036",
            sector: "金融板块",
            price: 32.8,
            change_percent: 1.2,
            score: 75,
            reason: "稳健经营，盈利能力强"
        },
        {
            name: "迈瑞医疗",
            code: "300760",
            sector: "医疗板块",
            price: 280.0,
            change_percent: -0.8,
            score: 68,
            reason: "医疗设备龙头，短期波动"
        },
        {
            name: "贵州茅台",
            code: "600519",
            sector: "消费板块",
            price: 1500.0,
            change_percent: 0.5,
            score: 82,
            reason: "消费品龙头，品牌价值高"
        }
    ]
};

// 中间件
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// API路由
app.get('/api/stock/daily', (req, res) => {
    res.json({
        data: SAMPLE_DATA.daily_analysis,
        timestamp: new Date().toISOString()
    });
});

app.get('/api/stock/weekly', (req, res) => {
    res.json({
        data: SAMPLE_DATA.weekly_analysis,
        timestamp: new Date().toISOString()
    });
});

app.get('/api/stock/capital', (req, res) => {
    res.json({
        data: SAMPLE_DATA.capital_flow,
        timestamp: new Date().toISOString()
    });
});

app.get('/api/stock/sectors', (req, res) => {
    res.json({
        data: SAMPLE_DATA.sector_linkage,
        timestamp: new Date().toISOString()
    });
});

app.get('/api/stock/predictions', (req, res) => {
    res.json({
        data: SAMPLE_DATA.predictions,
        timestamp: new Date().toISOString()
    });
});

app.get('/api/stock/suggestions', (req, res) => {
    res.json({
        data: SAMPLE_DATA.stock_suggestions,
        timestamp: new Date().toISOString()
    });
});

app.get('/api/health', (req, res) => {
    res.json({
        status: "healthy",
        version: "1.0.0",
        timestamp: new Date().toISOString()
    });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`股票分析API服务器已启动，端口: ${PORT}`);
    console.log(`API接口列表:`);
    console.log(`http://localhost:${PORT}/api/stock/daily`);
    console.log(`http://localhost:${PORT}/api/stock/weekly`);
    console.log(`http://localhost:${PORT}/api/stock/capital`);
    console.log(`http://localhost:${PORT}/api/stock/sectors`);
    console.log(`http://localhost:${PORT}/api/stock/predictions`);
    console.log(`http://localhost:${PORT}/api/stock/suggestions`);
    console.log(`http://localhost:${PORT}/api/health`);
});

module.exports = app;