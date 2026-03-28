#!/usr/bin/env python3
import sys
import json

# 简单的测试脚本
print("测试新闻聚合器技能")
print(f"Python版本: {sys.version}")
print(f"Python路径: {sys.path}")

# 测试requests是否可用
try:
    import requests
    print("requests导入成功")
except ImportError as e:
    print(f"requests导入失败: {e}")

# 测试BeautifulSoup是否可用
try:
    from bs4 import BeautifulSoup
    print("BeautifulSoup导入成功")
except ImportError as e:
    print(f"BeautifulSoup导入失败: {e}")

# 输出测试结果
print(json.dumps({"test": "success", "timestamp": "2025-03-28T12:30:00Z"}))