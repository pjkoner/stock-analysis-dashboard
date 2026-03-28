from PIL import Image, ImageDraw, ImageFont
import datetime

# 财经博主黄老师的视频文案
text = """去弱留强。我周末酒桌上的视频，说大金融、金融、银行、保险证券、白酒提前赶到下面，就是为了护盘的这两天信了吗？
所以看清结构很重要。我来分享一点我看到的东西，但是你们非得跟我犟。如果这两天空着的连涨两天，不要蠢蠢欲动。因为现在套牢的很多人还没解套。
明天要打到缺口、跳空缺口的位置了，下午明显缩量了。滞涨。早上冲高5天线掉下来又返回到5天线的，可以格局。技术好的，比如说上5天线抛掉，掉到5天线下面再接回来，又再往5天线的来回TT的，很舒服不会剃的，就看线就好了。因为现在磨磨唧唧、磨磨唧唧，红三兵就是连续红3天回踩5天线的很正常，所以套牢的不要指望一口气解套。

要看结构、量价关系、分时图学会高抛低吸，看不懂的就拿着。回调再次二次回踩，不要慌就行了。电力今天好多的绿电拉七八个点回下来的，这是典型的放量分歧了，边打边撤。然后PCB、光刻胶、还有算力租赁，我觉得还能格局。我要喝咖啡了，杭州的江景给大家看看好不好。有时间来约老黄喝咖啡。安了安了安了。

- 黄老师财经分析"""

# 创建财经风格图片
img_width = 1200
img_height = 1800
background_color = (245, 245, 245)  # 淡灰色背景
text_color = (40, 40, 40)  # 深灰色文字

img = Image.new('RGB', (img_width, img_height), background_color)
draw = ImageDraw.Draw(img)

# 使用默认字体
try:
    title_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 60)
    content_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 35)
    point_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 40)
    footer_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 30)
except:
    # 如果找不到字体，使用默认字体
    title_font = ImageFont.load_default()
    content_font = ImageFont.load_default()
    point_font = ImageFont.load_default()
    footer_font = ImageFont.load_default()

# 标题 - 红色标题
draw.text((img_width//2, 80), "📈 财经博主黄老师市场分析", fill=(220, 0, 0), font=title_font, anchor="mm")

# 副标题 - 蓝色
draw.text((img_width//2, 150), "核心观点与操作策略", fill=(30, 30, 120), font=title_font, anchor="mm")

# 正文内容
y_position = 250
lines = text.split('\n')
for line in lines:
    if line.strip():
        draw.text((100, y_position), line.strip(), fill=text_color, font=content_font)
        y_position += 70

# 添加分隔线
draw.line((100, y_position + 20, img_width - 100, y_position + 20), fill=(200, 200, 200), width=3)
y_position += 80

# 关键要点标题
draw.text((100, y_position), "🔑 核心要点总结", fill=(0, 100, 0), font=point_font)
y_position += 80

# 关键要点
key_points = [
    "✓ 去弱留强：保留强势股，淘汰弱势股",
    "✓ 护盘逻辑：大金融、银行、保险证券、白酒板块提前布局",
    "✓ 技术操作：围绕5天线高抛低吸",
    "✓ 市场心态：套牢者不要急于解套，不要蠢蠢欲动",
    "✓ 板块分析：电力（分歧）、PCB、光刻胶、算力租赁可格局",
    "✓ 学习要点：看清结构、量价关系、分时图",
    "✓ 行情判断：磨磨唧唧、红三兵形态正常",
    "✓ 操作建议：看不懂就拿着，回调不要慌"
]

for point in key_points:
    draw.text((120, y_position), point, fill=(0, 100, 0), font=point_font)
    y_position += 70

# 技术图形分隔线
draw.line((100, y_position + 20, img_width - 100, y_position + 20), fill=(200, 200, 200), width=2)
y_position += 80

# 技术分析标题
draw.text((100, y_position), "📊 技术指标建议", fill=(220, 0, 0), font=point_font)
y_position += 80

# 技术要点
tech_points = [
    "• 5天线操作：冲高抛，回落接",
    "• 缺口位置：明天打到跳空缺口",
    "• 量价关系：下午明显缩量，滞涨",
    "• 分时图：学会高抛低吸",
    "• 红三兵：连续3天上涨回踩5天线正常",
    "• 放量分歧：电力板块典型现象"
]

for point in tech_points:
    draw.text((120, y_position), point, fill=(40, 40, 40), font=content_font)
    y_position += 50

# 板块建议分隔线
draw.line((100, y_position + 20, img_width - 100, y_position + 20), fill=(200, 200, 200), width=2)
y_position += 80

# 板块建议标题
draw.text((100, y_position), "🏦 板块投资建议", fill=(30, 30, 120), font=point_font)
y_position += 80

# 板块建议
industry_points = [
    "🟢 可格局板块：PCB、光刻胶、算力租赁",
    "🔴 谨慎板块：电力（放量分歧）",
    "🟡 关注板块：白酒、银行、保险证券",
    "📈 操作思路：边打边撤，持有观望"
]

for point in industry_points:
    draw.text((120, y_position), point, fill=(40, 40, 40), font=content_font)
    y_position += 50

# 底部装饰
draw.rectangle((100, y_position, img_width - 100, y_position + 30), fill=(220, 0, 0))
draw.text((img_width//2, y_position + 15), "投资有风险，操作需谨慎", fill=(255, 255, 255), font=content_font, anchor="mm")
y_position += 60

# 底部信息
footer_text = "整理时间：{} | 来源：黄老师视频文案 | 格式：适合社交媒体分享".format(datetime.datetime.now().strftime("%Y-%m-%d"))
draw.text((img_width//2, img_height - 80), footer_text, fill=(100, 100, 100), font=footer_font, anchor="mm")

# 保存图片
img.save('财经黄老师分析摘要.png')
print("财经文案图片已保存为: 财经黄老师分析摘要.png")

# 创建一个简单版图片
img_simple = Image.new('RGB', (800, 1200), (245, 245, 245))
draw_simple = ImageDraw.Draw(img_simple)

# 简单版标题
draw_simple.text((400, 50), "黄老师财经观点", fill=(220, 0, 0), font=title_font, anchor="mm")

# 要点总结
simple_content = """📈 核心观点：去弱留强

📊 护盘板块：
• 大金融、银行、保险证券、白酒
• 提前布局护盘

🎯 技术操作：
• 围绕5天线高抛低吸
• 缺口位置是关键
• 量价关系要看清

⚡️ 市场心态：
• 套牢者不要急于解套
• 不要蠢蠢欲动

🏦 板块策略：
• PCB、光刻胶、算力租赁可格局
• 电力板块存在分歧
• 边打边撤，持有观望

📝 操作建议：
• 看不清就拿着
• 回调不要慌
• 学习结构、量价、分时图

📍 杭州江景邀约
- 黄老师"""

y_pos = 120
for line in simple_content.split('\n'):
    draw_simple.text((50, y_pos), line.strip(), fill=(40, 40, 40), font=content_font)
    y_pos += 40

img_simple.save('财经黄老师观点摘要.png')
print("简单版图片已保存为: 财经黄老师观点摘要.png")