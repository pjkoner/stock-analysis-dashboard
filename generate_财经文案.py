import matplotlib.pyplot as plt
import matplotlib
from matplotlib.font_manager import FontProperties
import numpy as np
from PIL import Image, ImageDraw, ImageFont
import io

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei', 'DejaVu Sans']
plt.rcParams['axes.unicode_minus'] = False

# 财经博主黄老师的视频文案
text = """去弱留强。我周末酒桌上的视频，说大金融、金融、银行、保险证券、白酒提前赶到下面，就是为了护盘的这两天信了吗？
所以看清结构很重要。我来分享一点我看到的东西，但是你们非得跟我犟。如果这两天空着的连涨两天，不要蠢蠢欲动。因为现在套牢的很多人还没解套。
明天要打到缺口、跳空缺口的位置了，下午明显缩量了。滞涨。早上冲高5天线掉下来又返回到5天线的，可以格局。技术好的，比如说上5天线抛掉，掉到5天线下面再接回来，又再往5天线的来回TT的，很舒服不会剃的，就看线就好了。因为现在磨磨唧唧、磨磨唧唧，红三兵就是连续红3天回踩5天线的很正常，所以套牢的不要指望一口气解套。

要看结构、量价关系、分时图学会高抛低吸，看不懂的就拿着。回调再次二次回踩，不要慌就行了。电力今天好多的绿电拉七八个点回下来的，这是典型的放量分歧了，边打边撤。然后PCB、光刻胶、还有算力租赁，我觉得还能格局。我要喝咖啡了，杭州的江景给大家看看好不好。有时间来约老黄喝咖啡。安了安了安了。

- 黄老师财经分析"""

# 分段处理文案
sections = [
    "核心观点：去弱留强",
    "护盘逻辑：大金融板块提前布局护盘",
    "技术分析：注意5天线技术操作",
    "市场心态：不要急于解套",
    "板块分析：电力、PCB、光刻胶、算力租赁",
    "操作建议：结构、量价关系、分时图",
    "个人动向：杭州江景咖啡邀约"
]

# 创建财经风格图表
fig, axes = plt.subplots(3, 2, figsize=(12, 16))
fig.suptitle("财经博主黄老师市场分析要点", fontsize=20, fontweight='bold')

# 第一图：核心观点
ax = axes[0, 0]
ax.text(0.5, 0.5, "📈 去弱留强\n\n市场策略：保留强势股，淘汰弱势股\n\n技术要点：看清结构是关键", 
        ha='center', va='center', fontsize=14, bbox=dict(boxstyle="round,pad=0.5", facecolor="lightblue", alpha=0.7))
ax.set_title("核心观点", fontsize=16)
ax.axis('off')

# 第二图：护盘板块
ax = axes[0, 1]
categories = ["大金融", "银行", "保险证券", "白酒"]
values = [95, 85, 80, 75]
colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"]
bars = ax.bar(categories, values, color=colors)
ax.set_title("护盘板块布局", fontsize=16)
ax.set_ylabel("关注度 (%)", fontsize=12)
ax.set_ylim([0, 100])
for i, v in enumerate(values):
    ax.text(i, v + 2, str(v), ha='center', fontsize=10)

# 第三图：技术指标
ax = axes[1, 0]
time_points = ["周一", "周二", "周三", "周四", "周五"]
price_data = [3100, 3120, 3090, 3150, 3160]
ma5_data = [3080, 3095, 3100, 3130, 3145]
ax.plot(time_points, price_data, 'r-', label='股价', linewidth=2, marker='o')
ax.plot(time_points, ma5_data, 'b--', label='5天线', linewidth=2, marker='s')

# 修正fill_between的错误
price_array = np.array(price_data)
ma5_array = np.array(ma5_data)
where_below = price_array > ma5_array
where_above = price_array <= ma5_array

ax.fill_between(time_points, price_data, ma5_data, where=where_below, color='lightgreen', alpha=0.3)
ax.fill_between(time_points, price_data, ma5_data, where=where_above, color='lightcoral', alpha=0.3)
ax.set_title("5天线技术操作", fontsize=16)
ax.set_ylabel("指数点位", fontsize=12)
ax.legend()
ax.grid(True, linestyle='--', alpha=0.5)

# 第四图：市场情绪
ax = axes[1, 1]
labels = ["已解套", "未解套", "观望"]
sizes = [30, 60, 10]
colors = ["#FFD166", "#06D6A0", "#EF476F"]
ax.pie(sizes, labels=labels, colors=colors, autopct='%1.1f%%', startangle=90)
ax.set_title("持仓结构分析", fontsize=16)

# 第五图：板块关注度
ax = axes[2, 0]
categories = ["电力", "PCB", "光刻胶", "算力租赁", "白酒", "银行"]
heat_values = [80, 70, 65, 75, 85, 90]
heat_values_norm = np.array(heat_values) / 100
colors = plt.cm.YlOrRd(heat_values_norm)
bars = ax.bar(categories, heat_values, color=colors)
ax.set_title("板块关注度热度", fontsize=16)
ax.set_ylabel("热度 (%)", fontsize=12)
ax.set_ylim([0, 100])

# 第六图：操作建议
ax = axes[2, 1]
tips = [
    "1. 看结构：分析市场整体结构",
    "2. 量价关系：成交量与价格关系",
    "3. 分时图：掌握日内波动节奏",
    "4. 高抛低吸：震荡行情操作策略",
    "5. 看不懂就拿着：减少盲目操作",
    "6. 回调二次回踩：不要恐慌",
    "7. 红三兵形态：连续3天上涨回踩"
]
y_positions = np.linspace(0.9, 0.1, len(tips))
for i, tip in enumerate(tips):
    ax.text(0.1, y_positions[i], tip, fontsize=12, verticalalignment='center')
ax.set_title("操作建议要点", fontsize=16)
ax.axis('off')

plt.tight_layout()
plt.savefig('财经黄老师分析图表.png', dpi=300, bbox_inches='tight')
plt.close()

print("图表已保存为: 财经黄老师分析图表.png")

# 创建文字摘要图片
img_width = 1200
img_height = 1800
background_color = (245, 245, 245)
text_color = (40, 40, 40)

img = Image.new('RGB', (img_width, img_height), background_color)
draw = ImageDraw.Draw(img)

# 标题
title_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 60)
draw.text((img_width//2, 80), "财经博主黄老师分析摘要", fill=(30, 30, 120), font=title_font, anchor="mm")

# 正文
content_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 35)
y_position = 180
lines = text.split('\n')
for line in lines:
    if line.strip():
        draw.text((100, y_position), line.strip(), fill=text_color, font=content_font)
        y_position += 60

# 添加分隔线
draw.line((100, y_position + 20, img_width - 100, y_position + 20), fill=(200, 200, 200), width=3)
y_position += 60

# 关键要点
key_points = [
    "✓ 去弱留强：保留强势股，淘汰弱势股",
    "✓ 护盘逻辑：大金融、银行、保险证券、白酒板块布局",
    "✓ 技术操作：围绕5天线高抛低吸",
    "✓ 市场心态：套牢者不要急于解套",
    "✓ 板块分析：电力（分歧）、PCB、光刻胶、算力租赁可格局",
    "✓ 学习要点：看结构、量价关系、分时图",
    "✓ 个人邀约：杭州江景咖啡时光"
]

point_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 40)
for point in key_points:
    draw.text((100, y_position), point, fill=(0, 100, 0), font=point_font)
    y_position += 70

# 底部信息
footer_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 30)
footer_text = "整理时间：2025-01-28 | 格式：适合社交媒体分享"
draw.text((img_width//2, img_height - 80), footer_text, fill=(100, 100, 100), font=footer_font, anchor="mm")

img.save('财经黄老师文案摘要.png')
print("文字摘要已保存为: 财经黄老师文案摘要.png")