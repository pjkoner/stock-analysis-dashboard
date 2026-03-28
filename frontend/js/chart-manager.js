/**
 * Chart.js图表管理器
 */

class ChartManager {
    constructor() {
        this.charts = {};
    }

    /**
     * 初始化每日涨跌幅图表
     */
    initDailyChart(data) {
        const canvas = document.createElement('canvas');
        canvas.id = 'daily-chart-canvas';
        const container = document.getElementById('daily-chart');
        container.innerHTML = '';
        container.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        
        const sectors = data.map(item => item.sector);
        const changes = data.map(item => item.change_percent);
        const colors = data.map(item => item.change_percent > 0 ? '#2ecc71' : '#e74c3c');

        this.charts.daily = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: sectors,
                datasets: [{
                    label: '涨跌幅 (%)',
                    data: changes,
                    backgroundColor: colors,
                    borderColor: colors,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '涨跌幅 (%)'
                        }
                    }
                }
            }
        });
    }

    /**
     * 初始化资金流向图表
     */
    initCapitalChart(data) {
        const canvas = document.createElement('canvas');
        canvas.id = 'capital-chart-canvas';
        const container = document.getElementById('capital-chart');
        container.innerHTML = '';
        container.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        
        const sectors = data.map(item => item.sector);
        const inflows = data.map(item => item.net_inflow);
        const colors = data.map(item => item.net_inflow > 0 ? '#3498db' : '#e74c3c');

        this.charts.capital = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: sectors,
                datasets: [{
                    label: '净资金流入 (¥)',
                    data: inflows,
                    backgroundColor: colors,
                    borderColor: colors,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '净资金流入'
                        }
                    }
                }
            }
        });
    }

    /**
     * 初始化AI预测图表
     */
    initPredictionsChart(data) {
        const canvas = document.createElement('canvas');
        canvas.id = 'predictions-chart-canvas';
        const container = document.getElementById('weekly-chart');
        container.innerHTML = '';
        container.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        
        const sectors = data.map(item => item.sector);
        const predictions = data.map(item => item.predicted_change);
        const confidences = data.map(item => item.confidence);
        
        this.charts.predictions = new Chart(ctx, {
            type: 'line',
            data: {
                labels: sectors,
                datasets: [
                    {
                        label: '预测涨幅 (%)',
                        data: predictions,
                        backgroundColor: '#667eea',
                        borderColor: '#667eea',
                        tension: 0.1
                    },
                    {
                        label: '信心指数 (%)',
                        data: confidences,
                        backgroundColor: '#764ba2',
                        borderColor: '#764ba2',
                        tension: 0.1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '百分比'
                        }
                    }
                }
            }
        });
    }

    /**
     * 初始化板块联动图表
     */
    initSectorChart(data) {
        const container = document.getElementById('sector-chart');
        container.innerHTML = `
            <div style="height: 100%; padding: 10px; background: #f8f9fa; border-radius: 8px;">
                <h3 style="margin-bottom: 15px;">板块联动关系</h3>
                <canvas id="sector-chart-canvas"></canvas>
                <div style="text-align: center; margin-top: 20px;">
                    线条粗细表示关联强度，颜色表示板块类型
                </div>
            </div>
        `;

        const canvas = document.getElementById('sector-chart-canvas');
        const ctx = canvas.getContext('2d');

        // 这里暂时用简单的饼图代替复杂的关系图
        this.charts.sector = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: data.nodes.map(node => node.name),
                datasets: [{
                    data: data.nodes.map(node => node.group * 10), // 用组别*10作为权重
                    backgroundColor: [
                        '#667eea', '#764ba2', '#3498db', '#2ecc71', '#e74c3c'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right'
                    }
                }
            }
        });
    }

    /**
     * 更新所有图表
     */
    updateAllCharts(data) {
        if (data.daily && data.daily.length > 0) {
            this.initDailyChart(data.daily);
        }
        if (data.capital && data.capital.length > 0) {
            this.initCapitalChart(data.capital);
        }
        if (data.predictions && data.predictions.length > 0) {
            this.initPredictionsChart(data.predictions);
        }
        if (data.sectors && data.sectors.nodes.length > 0) {
            this.initSectorChart(data.sectors);
        }
    }
}

export { ChartManager };