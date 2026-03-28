// 股票分析页面API集成脚本

/**
 * 数据管理类
 */
class StockDataManager {
    constructor() {
        this.apiBaseUrl = 'http://localhost:5000/api';
        this.dataCache = {};
    }

    /**
     * 获取每日板块分析数据
     */
    async fetchDailyAnalysis() {
        try {
            const response = await fetch(`${this.apiBaseUrl}/stock/daily`);
            const data = await response.json();
            this.dataCache.daily = data.data;
            return data.data;
        } catch (error) {
            console.error('获取每日分析数据失败:', error);
            return [];
        }
    }

    /**
     * 获取每周板块分析数据
     */
    async fetchWeeklyAnalysis() {
        try {
            const response = await fetch(`${this.apiBaseUrl}/stock/weekly`);
            const data = await response.json();
            this.dataCache.weekly = data.data;
            return data.data;
        } catch (error) {
            console.error('获取每周分析数据失败:', error);
            return [];
        }
    }

    /**
     * 获取资金流入流出数据
     */
    async fetchCapitalFlow() {
        try {
            const response = await fetch(`${this.apiBaseUrl}/stock/capital`);
            const data = await response.json();
            this.dataCache.capital = data.data;
            return data.data;
        } catch (error) {
            console.error('获取资金流向数据失败:', error);
            return [];
        }
    }

    /**
     * 获取板块联动数据
     */
    async fetchSectorLinkage() {
        try {
            const response = await fetch(`${this.apiBaseUrl}/stock/sectors`);
            const data = await response.json();
            this.dataCache.sectors = data.data;
            return data.data;
        } catch (error) {
            console.error('获取板块联动数据失败:', error);
            return { nodes: [], links: [] };
        }
    }

    /**
     * 获取AI预测数据
     */
    async fetchPredictions() {
        try {
            const response = await fetch(`${this.apiBaseUrl}/stock/predictions`);
            const data = await response.json();
            this.dataCache.predictions = data.data;
            return data.data;
        } catch (error) {
            console.error('获取AI预测数据失败:', error);
            return [];
200}
    }

    /**
     * 获取选股建议数据
     */
    async fetchStockSuggestions() {
        try {
            const response = await fetch(`${this.apiBaseUrl}/stock/suggestions`);
            const data = await response.json();
            this.dataCache.suggestions = data.data;
            return data.data;
        } catch (error) {
            console.error('获取选股建议数据失败:', error);
            return [];
        }
    }

    /**
     * 获取所有数据
     */
    async fetchAllData() {
        const daily = await this.fetchDailyAnalysis();
        const weekly = await this.fetchWeeklyAnalysis();
        const capital = await this.fetchCapitalFlow();
        const sectors = await this.fetchSectorLinkage();
        const predictions = await this.fetchPredictions();
        const suggestions = await this.fetchStockSuggestions();

        return {
            daily,
            weekly,
            capital,
            sectors,
            predictions,
            suggestions
        };
    }

    /**
     * 检查API健康状态
     */
    async checkHealth() {
        try {
            const response = await fetch(`${this.apiBaseUrl}/health`);
            const data = await response.json();
            return data.status === 'healthy';
        } catch (error) {
            console.error('API健康检查失败:', error);
            return false;
        }
    }
}

/**
 * UI渲染类
 */
class UIUpdater {
    constructor() {
        this.dataManager = new StockDataManager();
        this.currentSector = null;
        this.currentTimeRange = '今日';
    }

    /**
     * 更新每日图表
     */
    updateDailyChart(data) {
        const dailyChartEl = document.getElementById('daily-chart');
        dailyChartEl.innerHTML = `
            <div style="height: 100%; padding: 10px; background: #f8f9fa; border-radius: 8px;">
                ${data.map(item => `
                    <h3 style="margin-bottom: 10px;">${item.sector}: ${item.change_percent > 0 ? '+' : ''}${item.change_percent}%</h3>
                    <div style="height: ${Math.abs(item.change_percent) * 8}px; background: ${item.change_percent > 0 ? '#2ecc71' : '#e74c3c'}; width: 100%;"></div>
                `).join('')}
            </div>
        `;
    }

    /**
     * 更新资金图表
     */
    updateCapitalChart(data) {
        const capitalChartEl = document.getElementById('capital-chart');
        capitalChartEl.innerHTML = `
            <div style="height: 100%; padding: 10px; background: #f8f9fa; border-radius: 8px;">
                <h3 style="margin-bottom: 15px;">资金流向强度</h3>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
                    ${data.map(item => `
                        <div style="background: ${item.net_inflow > 0 ? '#3498db' : '#e74c3c'}; height: ${Math.min(Math.abs(item.net_inflow / 5000000), 80)}px; color: white; text-align: center; padding: 5px;">
                            ${item.sector}<br>¥${item.net_inflow > 0 ? '+' : ''}${item.net_inflow}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    /**
     * 更新预测图表
     */
    updatePredictionsChart(data) {
        const weeklyChartEl = document.getElementById('weekly-chart');
        weeklyChartEl.innerHTML = `
            <div style="height: 100%; padding: 10px; background: #f8f9fa; border-radius: 8px;">
                <h3 style="margin-bottom: 15px;">AI预测结果</h3>
                ${data.map(item => `
                    <div style="margin-bottom: 10px; padding: 10px; background: ${item.recommendation === '强烈买入' ? '#2ecc71' : item.recommendation === '买入' ? '#3498db' : '#f39c12'}; border-radius: 5px;">
                        <strong>${item.sector}: ${item.recommendation}</strong><br>
                        预测涨幅: ${item.predicted_change > 0 ? '+' : ''}${item.predicted_change}%
                    </div>
                `).join('')}
            </div>
        `;
    }

    /**
     * 更新个股面板
     */
    updateStockPanel(data) {
        const stockPanel = document.querySelector('.stock-panel');
        stockPanel.innerHTML = `
            <h2>个股滚动展示</h2>
            ${data.map(item => `
                <div class="stock-card">
                    <div class="stock-name">${item.name} (${item.code})</div>
                    <div>¥${item.price} <span class="stock-change ${item.change_percent > 0 ? 'up' : ''}">${item.change_percent > 0 ? '+' : ''}${item.change_percent}%</span></div>
                    <p>${item.reason}</p>
                    <div style="margin-top: 5px; font-size: 12px;">评分: ${item.score}</div>
                </div>
            `).join('')}
        `;
    }

    /**
     * 更新AI建议
     */
    updateAIRecommendations(predictionsData, suggestionsData) {
        const aiSection = document.querySelector('.ai-section');
        
        const topPredictions = predictionsData.filter(p => p.recommendation.includes('买入'));
        const topStocks = suggestionsData.sort((a, b) => b.score - a.score).slice(0, 3);
        
        aiSection.innerHTML = `
            <div class="ai-header">
                <i class="fas fa-brain ai-icon"></i>
                <h2>AI建议与预测</h2>
            </div>
            
            <div class="ai-prediction">
                <h3>板块预测</h3>
                ${topPredictions.map(item => `
                    <p>${item.sector}: <strong>${item.recommendation}</strong> (预测涨幅: ${item.predicted_change > 0 ? '+' : ''}${item.predicted_change}%, 信心指数: ${item.confidence}%)</p>
                `).join('')}
            </div>
            
            <div class="ai-prediction">
                <h3>选股策略</h3>
                <p>建议策略: <strong>价值投资 + 趋势追踪</strong></p>
                <p>优选股票: ${topStocks.map(s => s.name).join('、')}</p>
                <p>风险提示: 医疗板块资金流出，短期谨慎</p>
            </div>
            
            <div class="ai-prediction">
                <h3>操作建议</h3>
                <p>1. 重点关注新能源板块，持续流入资金</p>
                <p>2. 科技板块与新能源联动性强，可关注相关个股</p>
                <p>3. 医疗板块暂时回避，等待资金回流信号</p>
            </div>
        `;
    }

    /**
     * 更新板块联动图表
     */
    updateSectorChart(data) {
        const sectorChartEl = document.getElementById('sector-chart');
        sectorChartEl.innerHTML = `
            <div style="height: 100%; padding: 10px; background: #f8f9fa; border-radius: 8px;">
                <h3 style="margin-bottom: 15px;">板块联动关系</h3>
                <div style="display: flex; justify-content: space-around; align-items: center; height: 200px;">
                    ${data.nodes.map(node => `
                        <div style="background: ${this.getSectorColor(node.name)}; width: ${60 + 20 * (node.group || 1)}px; height: ${60 + 20 * (node.group || 1)}px; border-radius: 50%; color: white; text-align: center; padding: ${20 + (node.group || 1)}px;">
                            ${node.name}
                        </div>
                    `).join('')}
                </div>
                <div style="text-align: center; margin-top: 20px;">连线表示关联强度</div>
            </div>
        `;
    }

    /**
     * 更新图表（使用Chart.js）
     */
    async updateChartVisualizations(data) {
        try {
            // 导入ChartManager
            if (typeof Chart !== 'undefined') {
                const chartManager = new ChartManager();
                chartManager.updateAllCharts(data);
            } else {
                console.warn('Chart.js未加载，使用简单图表');
                this.updateSimpleCharts(data);
            }
        } catch (error) {
            console.error('图表更新失败:', error);
            this.updateSimpleCharts(data);
        }
    }

    /**
     * 更新简单图表（备用）
     */
    updateSimpleCharts(data) {
        if (data.daily && data.daily.length > 0) {
            this.updateDailyChart(data.daily);
        }
        if (data.capital && data.capital.length > 0) {
            this.updateCapitalChart(data.capital);
        }
        if (data.predictions && data.predictions.length > 0) {
            this.updatePredictionsChart(data.predictions);
        }
        if (data.sectors && data.sectors.nodes.length > 0) {
            this.updateSectorChart(data.sectors);
        }
    }

    /**
     * 获取板块颜色
     */
    getSectorColor(sector) {
        const colors = {
            '科技板块': '#667eea',
            '新能源板块': '#764ba2',
            '金融板块': '#3498db',
            '消费板块': '#2ecc71',
            '医疗板块': '#e74c3c'
        };
        return colors[sector] || '#667eea';
    }

    /**
     * 更新UI
     */
    async updateUI() {
        const isHealthy = await this.dataManager.checkHealth();
        if (!isHealthy) {
            console.warn('API服务器未连接，使用模拟数据');
            return this.updateMockData();
        }

        const data = await this.dataManager.fetchAllData();
        
        // 更新图表
        if (typeof Chart !== 'undefined') {
            this.updateChartVisualizations(data);
        } else {
            this.updateSimpleCharts(data);
        }
        
        // 更新个股面板和AI建议
        if (data.suggestions.length > 0) {
            this.updateStockPanel(data.suggestions);
        }
        
        this.updateAIRecommendations(data.predictions, data.suggestions);
        
        // 更新时间显示
        document.getElementById('update-time').textContent = new Date().toLocaleString();
    }

    /**
     * 使用模拟数据更新UI
     */
    updateMockData() {
        const mockDaily = [
            { sector: "科技板块", change_percent: 3.5, volume: 10000000, ranking: 1 },
            { sector: "金融板块", change_percent: 2.1, volume: 8000000, ranking: 2 },
            { sector: "医疗板块", change_percent: -1.2, volume: 5000000, ranking: 3 },
            { sector: "新能源板块", change_percent: 4.8, volume: 7000000, ranking: 4 },
            { sector: "消费板块", change_percent: 0.5, volume: 6000000, ranking: 5 }
        ];
        const mockCapital = [
            { sector: "科技板块", capital_in: 150000000, capital_out: 50000000, net_inflow: 100000000 },
            { sector: "金融板块", capital_in: 80000000, capital_out: 40000000, net_inflow: 40000000 },
            { sector: "医疗板块", capital_in: 60000000, capital_out: 80000000, net_inflow: -20000000 },
            { sector: "新能源板块", capital_in: 120000000, capital_out: 30000000, net_inflow: 90000000 },
            { sector: "消费板块", capital_in: 70000000, capital_out: 60000000, net_inflow: 10000000 }
        ];
        const mockPredictions = [
            { sector: "科技板块", predicted_change: 2.5, confidence: 85, recommendation: "买入" },
            { sector: "金融板块", predicted_change: 1.8, confidence: 70, recommendation: "持有" },
            { sector: "医疗板块", predicted_change: -0.5, confidence: 60, recommendation: "观望" },
            { sector: "新能源板块", predicted_change: 4.2, confidence: 90, recommendation: "强烈买入" },
            { sector: "消费板块", predicted_change: 0.9, confidence: 65, recommendation: "持有" }
        ];
        const mockSuggestions = [
            { name: "腾讯控股", code: "00700", sector: "科技板块", price: 350.2, change_percent: 2.3, score: 87, reason: "龙头地位稳固，业务多元化" },
            { name: "宁德时代", code: "300750", sector: "新能源板块", price: 180.5, change_percent: 5.8, score: 92, reason: "新能源龙头，技术领先" },
            { name: "招商银行", code: "600036", sector: "金融板块", price: 32.8, change_percent: 1.2, score: 75, reason: "稳健经营，盈利能力强" },
            { name: "迈瑞医疗", code: "300760", sector: "医疗板块", price: 280.0, change_percent: -0.8, score: 68, reason: "医疗设备龙头，短期波动" },
            { name: "贵州茅台", code: "600519", sector: "消费板块", price: 1500.0, change_percent: 0.5, score: 82, reason: "消费品龙头，品牌价值高" }
        ];
        
        this.updateDailyChart(mockDaily);
        this.updateCapitalChart(mockCapital);
        this.updatePredictionsChart(mockPredictions);
        this.updateStockPanel(mockSuggestions);
        this.updateAIRecommendations(mockPredictions, mockSuggestions);
    }
}

// 初始化UI
const uiManager = new UIUpdater();

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
    console.log('股票分析页面初始化...');
    uiManager.updateUI();
    
    // 设置自动更新
    setTimeout(() => {
        console.log('5分钟后自动更新数据...');
        uiManager.updateUI();
    }, 300000);
    
    // 定时刷新
    setInterval(() => {
        console.log('每10分钟自动刷新数据...');
        uiManager.updateUI();
    }, 600000);
});

// 导出UI管理器
export { uiManager, StockDataManager };