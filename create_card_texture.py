#!/usr/bin/env python3
"""
Create a custom card texture for the Lanyard component
Using the pixel art avatar
"""
from PIL import Image, ImageDraw, ImageFont
import os

# Card dimensions (based on standard ID card ratio)
CARD_WIDTH = 512
CARD_HEIGHT = 720

def create_card_texture():
    # Create base card with gradient background
    card = Image.new('RGB', (CARD_WIDTH, CARD_HEIGHT), '#1a1a2e')
    draw = ImageDraw.Draw(card)
    
    # Add gradient effect
    for y in range(CARD_HEIGHT):
        r = int(26 + (y / CARD_HEIGHT) * 20)
        g = int(26 + (y / CARD_HEIGHT) * 10)
        b = int(46 + (y / CARD_HEIGHT) * 30)
        draw.line([(0, y), (CARD_WIDTH, y)], fill=(r, g, b))
    
    draw = ImageDraw.Draw(card)
    
    # Load pixel art avatar
    avatar_path = '/home/ubuntu/portfolio-yu-wang/public/images/pixel-avatar.png'
    if os.path.exists(avatar_path):
        avatar = Image.open(avatar_path).convert('RGBA')
        
        # Resize avatar - use NEAREST for pixel art to keep crisp edges
        avatar_size = 260
        avatar = avatar.resize((avatar_size, avatar_size), Image.Resampling.NEAREST)
        
        # Create rounded rectangle mask for avatar
        mask = Image.new('L', (avatar_size, avatar_size), 0)
        mask_draw = ImageDraw.Draw(mask)
        radius = 20
        mask_draw.rounded_rectangle((0, 0, avatar_size, avatar_size), radius=radius, fill=255)
        
        # Apply mask
        avatar_masked = Image.new('RGBA', (avatar_size, avatar_size), (0, 0, 0, 0))
        avatar_masked.paste(avatar, (0, 0))
        avatar_masked.putalpha(mask)
        
        # Add border
        border_size = avatar_size + 8
        border = Image.new('RGBA', (border_size, border_size), (0, 0, 0, 0))
        border_draw = ImageDraw.Draw(border)
        border_draw.rounded_rectangle((0, 0, border_size, border_size), radius=radius+4, fill='#5227FF')
        border_draw.rounded_rectangle((4, 4, border_size-4, border_size-4), radius=radius, fill=(0, 0, 0, 0))
        
        # Position on card
        avatar_x = (CARD_WIDTH - border_size) // 2
        avatar_y = 70
        
        # Paste
        card_rgba = card.convert('RGBA')
        card_rgba.paste(border, (avatar_x, avatar_y), border)
        card_rgba.paste(avatar_masked, (avatar_x + 4, avatar_y + 4), avatar_masked)
        card = card_rgba.convert('RGB')
    
    draw = ImageDraw.Draw(card)
    
    # Try to load fonts
    try:
        font_bold = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 40)
        font_regular = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 22)
        font_small = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 16)
    except:
        font_bold = ImageFont.load_default()
        font_regular = ImageFont.load_default()
        font_small = ImageFont.load_default()
    
    # Add name
    name = "BRIAN WANG"
    name_bbox = draw.textbbox((0, 0), name, font=font_bold)
    name_width = name_bbox[2] - name_bbox[0]
    draw.text(((CARD_WIDTH - name_width) // 2, 365), name, fill='white', font=font_bold)
    
    # Add title
    title = "Data Scientist & Developer"
    title_bbox = draw.textbbox((0, 0), title, font=font_regular)
    title_width = title_bbox[2] - title_bbox[0]
    draw.text(((CARD_WIDTH - title_width) // 2, 415), title, fill='#B19EEF', font=font_regular)
    
    # Add divider line
    line_y = 460
    line_margin = 80
    draw.line([(line_margin, line_y), (CARD_WIDTH - line_margin, line_y)], fill='#5227FF', width=2)
    
    # Add university
    uni = "UIUC '27  •  Statistics & CS"
    uni_bbox = draw.textbbox((0, 0), uni, font=font_regular)
    uni_width = uni_bbox[2] - uni_bbox[0]
    draw.text(((CARD_WIDTH - uni_width) // 2, 480), uni, fill='#FF9FFC', font=font_regular)
    
    # Add tags at bottom
    tags = ["♠ Poker", "⚽ Man Utd", "🎮 Gamer"]
    tag_y = 550
    total_width = 0
    tag_padding = 16
    tag_gap = 10
    
    # Calculate total width
    tag_widths = []
    for tag in tags:
        bbox = draw.textbbox((0, 0), tag, font=font_small)
        w = bbox[2] - bbox[0] + tag_padding * 2
        tag_widths.append(w)
        total_width += w
    total_width += tag_gap * (len(tags) - 1)
    
    # Draw tags
    tag_x = (CARD_WIDTH - total_width) // 2
    for i, tag in enumerate(tags):
        w = tag_widths[i]
        # Draw tag background
        draw.rounded_rectangle(
            [(tag_x, tag_y), (tag_x + w, tag_y + 32)],
            radius=16,
            fill='#2a2a4e'
        )
        # Draw tag text
        bbox = draw.textbbox((0, 0), tag, font=font_small)
        text_w = bbox[2] - bbox[0]
        draw.text((tag_x + (w - text_w) // 2, tag_y + 7), tag, fill='white', font=font_small)
        tag_x += w + tag_gap
    
    # Add "Seeking Summer '26" status
    status = "🟢 Seeking Summer '26"
    status_bbox = draw.textbbox((0, 0), status, font=font_small)
    status_width = status_bbox[2] - status_bbox[0]
    draw.text(((CARD_WIDTH - status_width) // 2, 610), status, fill='#4ade80', font=font_small)
    
    # Add decorative elements
    # Top corner accent
    draw.polygon([(0, 0), (50, 0), (0, 50)], fill='#5227FF')
    # Bottom corner accent
    draw.polygon([(CARD_WIDTH, CARD_HEIGHT), (CARD_WIDTH - 50, CARD_HEIGHT), (CARD_WIDTH, CARD_HEIGHT - 50)], fill='#FF9FFC')
    
    # Save the texture
    output_path = '/home/ubuntu/portfolio-yu-wang/src/assets/lanyard/card_texture.png'
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    card.save(output_path, 'PNG')
    print(f"Card texture saved to: {output_path}")
    
    return output_path

if __name__ == '__main__':
    create_card_texture()
