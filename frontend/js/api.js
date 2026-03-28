/**
 * 股票分析前端API交互模块
 */

const API_BASE_URL = 'http://localhost:5000/api';

class StockAnalysisAPI {
    /**
     * 获取每日板块分析数据
     */
    static async getDailyAnalysis() {
        try {
            const response = await fetch(`${API_BASE_URL}/stock/daily`);
            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error('获取每日分析数据失败:', error);
            return [];
        }
    }

    /**
     * 获取每周板块分析数据
     */
    static async getWeeklyAnalysis() {
        try {
            const response = await fetch(`${API_BASE_URL}/stock/weekly`);
            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error('获取每周分析数据失败:', error);
            return [];
        }
    }

    /**
     * 获取资金流入流出数据
     */
    static async getCapitalFlow() {
        try {
            const response = await fetch(`${API_BASE_URL}/stock/capital`);
            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error('获取资金流向数据失败:', error);
            return [];
        }
    }

    /**
     * 获取板块联动数据
     */
    static async getSectorLinkage() {
        try {
            const response = await fetch(`${API_BASE_URL}/stock/sectors`);
            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error('获取板块联动数据失败:', error);
            return { nodes: [], links: [] };
        }
    }

    /**
     * 获取AI预测数据
     */
    static async getPredictions() {
        try {
            const response = await fetch(`${API_BASE_URL}/stock/predictions`);
            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error('获取AI预测数据失败:', error);
            return [];
        }
    }

    /**
     * 获取选股建议数据
     */
    static async getStockSuggestions() {
        try {
            const response = await fetch(`${API_BASE_URL}/stock/suggestions`);
            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error('获取选股建议数据失败:', error);
            return [];
        }
    }

    /**
     * 检查API健康状态
     */
    static async checkHealth() {
        try {
            const response = await fetch(`${API_BASE_URL}/health`);
            const data = await response.json();
            return data.status === 'healthy';
        } catch (error) {
            console.error('API健康检查失败:', error);
            return false;
        }
    }
}

/**
 * 图表渲染模块
 */
class ChartRenderer {
    /**
     * 渲染每日涨跌幅柱状图
     */
    static renderDailyChart(data) {
        // TODO: 使用ECharts或Chart.js渲染
        return '每日分析图表';
    }

    /**
     * 渲染资金流向热力图
     */
    static renderCapitalChart(data) {
        // TODO: 使用ECharts或Chart.js渲染
        return '资金流向图表';
    }

    /**
     * 渲染板块联动图
     */
    static renderSectorChart(data) {
        // TODO: 使用ECharts或Chart.js渲染
        return '板块联动图表';
    }

    /**
     * 渲染本周分析图
     */
    static renderWeeklyChart(data) {
        // TODO: 使用ECharts或Chart.js渲染
        return '本周分析图表';
    }
}

/**
 * 数据更新模块
 */
class DataUpdater {
    static async updateAllData() {
        try {
            console.log('开始更新数据...');
            
            const dailyData = await StockAnalysisAPI.getDailyAnalysis();
            const weeklyData = await StockAnalysisAPI.getWeeklyAnalysis();
            const capitalData = await StockAnalysisAPI.getCapitalFlow();
            const sectorData = await StockAnalysisAPI.getSectorLinkage();
            const predictions = await StockAnalysisAPI.getPredictions();
            const suggestions = await StockAnalysisAPI.getStockSuggestions();

            console.log('数据更新完成:', {
                daily: dailyData.length,
                weekly: weeklyData.length,
                capital: capitalData.length,
                sector: sectorData.nodes.length,
                predictions: predictions.length,
                suggestions: suggestions.length
            });

            return {
                dailyData,
                weeklyData,
                capitalData,
                sectorData,
                predictions,
                suggestions
            };
        } catch (error) {
            console.error('数据更新失败:', error);
            return null;
        }
    }

    /**
     * 更新页面数据展示
     */
    static updateUI(data) {
        // TODO: 更新UI元素
        console.log('更新UI数据:', data);
    }
}

/**
 * 初始化页面
 */
async function initPage() {
    console.log('初始化股票分析页面...');
    
    // 检查API状态
    const isHealthy = await StockAnalysisAPI.checkHealth();
    if (!isHealthy) {
        alert('后端API服务未启动，请先启动后端服务器');
        return;
    }

    // 更新数据
    const data = await DataUpdater.updateAllData();
    
    if (data) {
        DataUpdater.updateUI(data);
        
        // 更新图表
        ChartRenderer.renderDailyChart(data.dailyData);
        ChartRenderer.renderCapitalChart(data.capitalData);
        ChartRenderer.renderSectorChart(data.sectorData);
        ChartRenderer.renderWeeklyChart(data.weeklyData);
    }
}

// 自动更新定时器
function startAutoRefresh(interval = 60000) {
    setInterval(async () => {
        console.log('自动刷新数据...');
        const data = await DataUpdater.updateAllData();
        if (data) {
            DataUpdater.updateUI(data);
            document.getElementById('update-time').textContent = new Date().toLocaleString();
        }
    }, interval);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initPage();
    startAutoRefresh();
});

export { StockAnalysisAPI, ChartRenderer, DataUpdater };