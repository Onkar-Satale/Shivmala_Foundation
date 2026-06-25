import os
import shutil
from PIL import Image, ImageChops

def trim_background(im, padding=20, threshold=20):
    # Convert image to RGB if it's not
    if im.mode != 'RGB':
        im = im.convert('RGB')
        
    # Sample corner colors to find background color
    corners = [
        im.getpixel((0, 0)),
        im.getpixel((im.width - 1, 0)),
        im.getpixel((0, im.height - 1)),
        im.getpixel((im.width - 1, im.height - 1))
    ]
    
    # Let's take the average or the most common color.
    bg_color = corners[0]
    
    # Create a solid image of the background color
    bg = Image.new(im.mode, im.size, bg_color)
    
    # Find the difference between the image and the background
    diff = ImageChops.difference(im, bg)
    
    # Convert diff to grayscale
    diff = diff.convert('L')
    
    # Apply threshold to ignore compression noise
    diff = diff.point(lambda p: 255 if p > threshold else 0)
    
    # Find bounding box of the difference
    bbox = diff.getbbox()
    if bbox:
        # Crop the image to the bounding box
        cropped = im.crop(bbox)
        
        # Create a new image of background color with padding
        new_w = cropped.width + 2 * padding
        new_h = cropped.height + 2 * padding
        padded_im = Image.new(im.mode, (new_w, new_h), bg_color)
        padded_im.paste(cropped, (padding, padding))
        return padded_im
    return im

def resize_logo(im, max_height=120, max_width=240):
    ratio = im.width / im.height
    
    # Calculate dimensions to fit within max_width x max_height
    # Try fitting to max_width
    new_w = max_width
    new_h = int(new_w / ratio)
    
    # If height exceeds max_height, fit to max_height instead
    if new_h > max_height:
        new_h = max_height
        new_w = int(new_h * ratio)
        
    # Only resize if the image is larger than the target box
    if im.height > new_h or im.width > new_w:
        return im.resize((new_w, new_h), Image.Resampling.LANCZOS)
    return im

def main():
    user_profile = os.environ.get('USERPROFILE')
    if not user_profile:
        print("Error: USERPROFILE environment variable not found.")
        return
        
    downloads_dir = os.path.join(user_profile, 'Downloads')
    
    # Define mapping of source filename to target filename
    logo_mapping = {
        'WhatsApp Image 2026-06-16 at 12.03.23 AM.jpeg': 'shivmala-infra.png',
        'WhatsApp Image 2026-06-16 at 12.04.29 AM.jpeg': 'lekcon-infra.png',
        'WhatsApp Image 2026-06-16 at 12.07.02 AM.jpeg': 'learncraft-institute.png',
        'WhatsApp Image 2026-06-16 at 12.07.02 AM (1).jpeg': 'learncraft-consultant.png',
        'WhatsApp Image 2026-06-16 at 12.08.38 AM.jpeg': 'mahi-events.png'
    }
    
    # Target directory in the workspace
    target_dir = os.path.join('public', 'images', 'donors')
    os.makedirs(target_dir, exist_ok=True)
    
    print("Starting logo processing with web optimization (resizing)...")
    
    for src_name, target_name in logo_mapping.items():
        src_path = os.path.join(downloads_dir, src_name)
        target_path = os.path.join(target_dir, target_name)
        
        if not os.path.exists(src_path):
            print(f"Warning: Source file {src_name} not found in Downloads.")
            continue
            
        try:
            # Open the image
            im = Image.open(src_path)
            print(f"Processing {src_name} (original size: {im.size})...")
            
            # Crop the background
            cropped_im = trim_background(im, padding=15, threshold=15)
            
            # Resize for web performance (max height 120px, max width 240px)
            optimized_im = resize_logo(cropped_im, max_height=120, max_width=240)
            
            # Save the processed image as PNG
            optimized_im.save(target_path, 'PNG', optimize=True)
            print(f"Saved optimized logo to {target_path} (new size: {optimized_im.size})")
            
        except Exception as e:
            print(f"Error processing {src_name}: {e}")
            
    print("Logo processing completed.")

if __name__ == '__main__':
    main()
