import os
from PIL import Image

def get_image_saturation(im):
    # Convert to HSV to check saturation
    hsv_im = im.convert('HSV')
    # Get the saturation band (index 1)
    s_band = hsv_im.split()[1]
    # Calculate average saturation
    stat = s_band.getdata()
    avg_sat = sum(stat) / len(stat)
    return avg_sat

def process_photo(src_path, target_path, max_width=600):
    im = Image.open(src_path)
    if im.mode != 'RGB':
        im = im.convert('RGB')
        
    # Resize keeping aspect ratio, making the width max_width
    ratio = max_width / im.width
    new_h = int(im.height * ratio)
    resized_im = im.resize((max_width, new_h), Image.Resampling.LANCZOS)
    
    # Save optimized as PNG
    resized_im.save(target_path, 'PNG', optimize=True)
    print(f"Processed and saved: {target_path} (new size: {resized_im.size})")

def main():
    user_profile = os.environ.get('USERPROFILE')
    if not user_profile:
        print("Error: USERPROFILE environment variable not found.")
        return
        
    downloads_dir = os.path.join(user_profile, 'Downloads')
    
    # The two recently downloaded files
    file1 = os.path.join(downloads_dir, 'WhatsApp Image 2026-06-15 at 11.57.55 PM.jpeg')
    file2 = os.path.join(downloads_dir, 'WhatsApp Image 2026-06-15 at 11.58.24 PM.jpeg')
    
    if not os.path.exists(file1) or not os.path.exists(file2):
        print("Error: One or both WhatsApp images not found in Downloads.")
        return
        
    # Open both and check saturation to identify who is who
    im1 = Image.open(file1)
    im2 = Image.open(file2)
    
    sat1 = get_image_saturation(im1)
    sat2 = get_image_saturation(im2)
    
    print(f"File 1 average saturation: {sat1:.2f}")
    print(f"File 2 average saturation: {sat2:.2f}")
    
    # The one with higher saturation is Aishwarya (colorful sari / outdoor background)
    # The one with lower saturation is Pravin (gray suit / studio background)
    if sat1 > sat2:
        aishwarya_src = file1
        pravin_src = file2
    else:
        aishwarya_src = file2
        pravin_src = file1
        
    target_dir = os.path.join('public', 'images', 'members')
    os.makedirs(target_dir, exist_ok=True)
    
    aishwarya_target = os.path.join(target_dir, 'aishwarya-dhole.png')
    pravin_target = os.path.join(target_dir, 'pravin-more.png')
    
    print("Processing Pravin More's photo...")
    process_photo(pravin_src, pravin_target)
    
    print("Processing Aishwarya Dhole's photo...")
    process_photo(aishwarya_src, aishwarya_target)
    
    print("Member photo processing completed.")

if __name__ == '__main__':
    main()
