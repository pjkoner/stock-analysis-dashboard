#!/usr/bin/env python3
import json
import datetime

# 创建模拟新闻数据
def generate_test_data():
    # 模拟Hacker News数据
    hackernews_items = [
        {
            "title": "OpenAI Unveils GPT-5 with Revolutionary Multimodal Features",
            "url": "https://openai.com/blog/gpt-5",
            "source": "Hacker News",
            "time": "3 hours ago",
            "score": "123 points",
            "summary": "OpenAI发布GPT-5，具备前所未有的多模态能力，能够无缝处理文本、图像和音频输入，性能大幅提升40%。",
            "content": "GPT-5引入了全新的架构设计，支持实时多模态交互，在代码生成、创意写作和数据分析方面表现突出。",
            "category": ["AI", "LLM", "Tech"]
        },
        {
            "title": "New Rust Framework 'Tokio 2.0' Released with Async Enhancements",
            "url": "https://tokio.rs/blog/tokio-2.0",
            "source": "Hacker News",
            "time": "6 hours ago",
            "score": "98 points",
            "summary": "Tokio团队发布2.0版本，显著改进异步性能和内存管理，成为构建高性能分布式系统的首选框架。",
            "content": "Tokio 2.0引入全新的调度算法，减少上下文切换开销，支持更细粒度的任务管理，优化了网络IO性能。",
            "category": ["Rust", "Async", "Performance"]
        }
    ]
    
    # 模拟GitHub Trending数据
    github_items = [
        {
            "title": "llama.cpp - Efficient LLM Inference Framework",
            "url": "https://github.com/ggerganov/llama.cpp",
            "source": "GitHub Trending",
            "time": "2025-03-28",
            "score": "500+ stars today",
            "summary": "这个C++实现的LLM推理框架支持多种模型架构，即使在CPU上也能高效运行大模型，社区活跃度极高。",
            "content": "llama.cpp实现了创新的内存管理和推理算法，减少了GPU依赖，让大模型推理在普通硬件上也能流畅运行。",
            "category": ["LLM", "C++", "Inference"]
        },
        {
            "title": "vscode-copilot - AI Assistant Extension for VS Code",
            "url": "https://github.com/microsoft/vscode-copilot",
            "source": "GitHub Trending",
            "time": "2025-03-27",
            "score": "300+ stars today",
            "summary": "微软发布的VS Code AI助手扩展，提供代码生成、调试和优化建议，集成多个AI模型后端。",
            "content": "vscode-copilot通过智能上下文分析和代码补全，大幅提升开发效率，支持多种编程语言和框架。",
            "category": ["AI", "IDE", "Development"]
        }
    ]
    
    # 模拟36Kr数据
    36kr_items = [
        {
            "title": "腾讯云推出新一代AI服务平台，支持国产芯片",
            "url": "https://36kr.com/p/ai-platform",
            "source": "36Kr",
            "time": "2025-03-28",
            "score": "热门",
            "summary": "腾讯云发布新一代AI服务平台，提供一站式AI开发、训练和部署解决方案，特别强调国产芯片支持能力。",
            "content": "该平台集成了腾讯自研的AI框架和国产芯片优化技术，在模型训练和推理效率方面有明显提升，降低了AI应用开发门槛。",
            "category": ["Cloud", "AI", "ChineseTech"]
        }
    ]
    
    # 模拟WallStreetCN数据
    wallstreet_items = [
        {
            "title": "美联储维持利率不变，市场反应平稳",
04208c00497f      return all_items
    
# 生成测试数据
test_data = generate_test_data()
print(json.dumps(test_data, ensure_ascii=False, indent=2))