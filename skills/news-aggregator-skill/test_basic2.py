#!/usr/bin/env python3
import json
import datetime

# 创建模拟新闻数据
def generate_test_data():
    all_items = []
    
    # 模拟Hacker News数据
    all_items.append({
        "title": "OpenAI Unveils GPT-5 with Revolutionary Multimodal Features",
        "url": "https://openai.com/blog/gpt-5",
        "source": "Hacker News",
        "time": "3 hours ago",
        "score": "123 points",
        "summary": "OpenAI发布GPT-5，具备前所未有的多模态能力，能够无缝处理文本、图像和音频输入，性能大幅提升40%。",
        "content": "GPT-5引入了全新的架构设计，支持实时多模态交互，在代码生成、创意写作和数据分析方面表现突出。",
        "category": ["AI", "LLM", "Tech"]
    })
    
    all_items.append({
        "title": "New Rust Framework 'Tokio 2.0' Released with Async Enhancements",
        "url": "https://tokio.rs/blog/tokio-2.0",
        "source": "Hacker News",
        "time": "6 hours ago",
        "score": "98 points",
        "summary": "Tokio团队发布2.0版本，显著改进异步性能和内存管理，成为构建高性能分布式系统的首选框架。",
        "content": "Tokio 2.0引入全新的调度算法，减少上下文切换开销，支持更细粒度的任务管理，优化了网络IO性能。",
        "category": ["Rust", "Async", "Performance"]
    })
    
    # 模拟GitHub Trending数据
    all_items.append({
        "title": "llama.cpp - Efficient LLM Inference Framework",
        "url": "https://github.com/ggerganov/llama.cpp",
        "source": "GitHub Trending",
        "time": "2025-03-28",
        "score": "500+ stars today",
2<script>    "summary": "这个C++实现的LLM推理框架支持多种模型架构，即使在CPU上也能高效运行大模型，社区活跃度极高。",
        "content": "llama.cpp实现了创新的内存管理和推理算法，减少了GPU依赖，让大模型推理在普通硬件上也能流畅运行。",
        "category": ["LLM", "C++", "Inference"]
    })
    
    all_items.append({
        "title": "vscode-copilot - AI Assistant Extension for VS Code",
        "url": "https://github.com/microsoft/vscode-copilot",
        "source": "GitHub Trending",
        "time": "2025-03-27",
        "score": "300+ stars today",
        "summary": "微软发布的VS Code AI助手扩展，提供代码生成、调试和优化建议，集成多个AI模型后端。",
        "content": "vscode-copilot通过智能上下文分析和代码补全，大幅提升开发效率，支持多种编程语言和框架。",
        "category": ["AI", "IDE", "Development"]
    })
    
    # 模拟36Kr数据
    all_items.append({
        "title": "腾讯云推出新一代AI服务平台，支持国产芯片",
        "url": "https://36kr.com/p/ai-platform",
        "source": "36Kr",
        "time": "2025-03-28",
        "score": "热门",
        "summary": "腾讯云发布新一代AI服务平台，提供一站式AI开发、训练和部署解决方案，特别强调国产芯片支持能力。",
        "content": "该平台集成了腾讯自研的AI框架和国产芯片优化技术，在模型训练和推理效率方面有明显提升，降低了AI应用开发门槛。",
        "category": ["Cloud", "AI", "ChineseTech"]
    })
    
    # 模拟WallStreetCN数据
    all_items.append({
        "title": "美联储维持利率不变，市场反应平稳",
        "url": "https://wallstreetcn.com/news/interest-rate",
        "source": "WallStreetCN",
        "time": "2025-03-28",
        "score": "重点关注",
        "summary": "美联储宣布维持利率不变，市场反应平稳，分析师预测今年可能降息1-2次。",
        "content": "美联储决策表明经济数据支持当前货币政策，通胀预期有所改善，但经济复苏仍需关注。",
        "category": ["Finance", "Monetary", "Policy"]
    })
    
    return all_items

# 生成测试数据
test_data = generate_test_data()

# 生成新闻摘要报告
print("# 📰 测试新闻摘要")
print("**更新时间:** " + datetime.datetime.now().strftime("%Y年%m月%d日 %H:%M:%S"))
print("")
print("## 🦄 硅谷热点 (Hacker News)")
for item in test_data[:2]:
    print(f"\n### 1. [{item['title']}]({item['url']})")
    print(f"**来源:** {item['source']} | **时间:** {item['time']} | **热度:** {item['score']}")
    print(f"{item['summary']}")
    print(f"\n**深度解读:**")
    print(f"- {item['content']}")
    print(f"- 标签: {', '.join(item['category'])}")

print("\n## 🐙 开源趋势 (GitHub Trending)")
for item in test_data[2:4]:
    print(f"\n### 1. [{item['title']}]({item['url']})")
    print(f"**来源:** {item['source']} | **时间:** {item['time']} | **热度:** {item['score']}")
    print(f"{item['summary']}")
    print(f"\n**核心价值:**")
    print(f"- {item['content']}")
    print(f"- 标签: {', '.join(item['category'])}")

print("\n## 🇨🇳 国内科技 (36Kr)")
for item in test_data[4:5]:
    print(f"\n### 1. [{item['title']}]({item['url']})")
    print(f"**来源:** {item['source']} | **时间:** {item['time']} | **热度:** {item['score']}")
    print(f"{item['summary']}")
    print(f"\n**场景标签:**")
    print(f"#{item['category'][0]} #{item['category'][1]} #{item['category'][2]}")

print("\n## 📈 金融市场 (WallStreetCN)")
for item in test_data[5:6]:
    print(f"\n### 1. [{item['title']}]({item['url']})")
    print(f"**来源:** {item['source']} | **时间:** {item['time']} | **热度:** {item['score']}")
    print(f"{item['summary']}")
    print(f"\n**启发思考:**")
    print(f"- {item['content']}")
    print(f"- 标签: {', '.join(item['category'])}")

print("\n---")
print("\n这是一个测试新闻摘要，展示了定时任务将发送的格式。")
print("定时任务会每天在8:00, 12:00, 20:00自动发送真实的新闻摘要到这个群聊。")