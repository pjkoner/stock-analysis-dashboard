#!/bin/bash
cd /root/.openclaw/workspace/skills/news-aggregator-skill

# 获取当前时间
CURRENT_TIME=$(date +"%H:%M")

echo "正在获取新闻摘要..."
python3 scripts/fetch_news.py --source all --limit 20 --deep > /tmp/news_output.json

# 生成摘要报告
echo "生成新闻摘要报告..."

# 这里应该调用skill的脚本生成报告
# 但由于fetch_news.py可能需要修改，我们先用简单的方式

# 创建报告文件
REPORT_FILE="/root/.openclaw/workspace/reports/news_$(date +"%Y%m%d_%H%M").md"

echo "# 📰 每日新闻摘要 - $(date +"%Y年%m月%d日 %H:%M")" > $REPORT_FILE
echo "## 来自8大新闻源的精选报道" >> $REPORT_FILE
echo "" >> $REPORT_FILE

# 读取JSON数据并生成报告
if [ -f /tmp/news_output.json ]; then
    echo "**更新时间:** $(date '+%Y年%m月%d日 %H:%M:%S')" >> $REPORT_FILE
    echo "" >> $REPORT_FILE
    echo "数据来源：Hacker News、GitHub Trending、Product Hunt、36Kr、腾讯新闻、华尔街见闻、V2EX、微博热搜" >> $REPORT_FILE
    echo "" >> $REPORT_FILE
    echo "---" >> $REPORT_FILE
    
    # TODO: 解析JSON并生成更好的格式
    echo "新闻数据已收集完成，详情请查看JSON文件。" >> $REPORT_FILE
else
    echo "新闻收集失败，请检查网络连接和配置。" >> $REPORT_FILE
fi

echo "新闻摘要已保存到: $REPORT_FILE"