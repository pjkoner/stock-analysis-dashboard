#!/bin/bash
cd /root/.openclaw/workspace/skills/news-aggregator-skill

# 获取新闻
echo "正在获取新闻..."
python3 scripts/fetch_news.py --source all --limit 10 --deep > /tmp/news.json

# 检查文件是否存在
if [ ! -f /tmp/news.json ]; then
    echo "无法获取新闻数据"
    exit 1
fi

# 生成消息
MESSAGE="# 📰 每日新闻摘要
新闻来源：Hacker News、GitHub Trending、Product Hunt、36Kr、腾讯新闻、华尔街见闻、V2EX、微博热搜

我已经收集了最新的新闻热点，正在整理分析..."

# 发送消息到元宝群聊
openclaw message send --channel yuanbao --to "group:552388281" --message "$MESSAGE"

echo "新闻摘要已发送到元宝群聊"