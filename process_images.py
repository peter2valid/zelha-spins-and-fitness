import os
import glob
from PIL import Image

input_dir = 'images real'
output_dir = 'public/images/optimized'

os.makedirs(output_dir, exist_ok=True)

# Define descriptive SEO names based on what we saw in the images and the gym's services
seo_names = [
    "zelha-fitness-juja-deadlift",
    "zelha-spin-fitness-juja-apparel",
    "zelha-gym-juja-leg-press",
    "zelha-fitness-juja-pushups-workout",
    "zelha-fitness-juja-outdoor-dance-zumba",
    "zelha-spin-class-juja-indoor-cycling",
    "zelha-fitness-juja-core-training-pushups",
    "zelha-spin-fitness-juja-indoor-cycling-class",
    "zelha-fitness-juja-medicine-ball-workout",
    "zelha-gym-juja-treadmill-cardio",
    "zelha-fitness-juja-group-class-photo",
    "zelha-gym-juja-personal-training",
    "zelha-spin-fitness-juja-cardio-workout",
    "zelha-fitness-juja-weightlifting-area",
    "zelha-gym-juja-step-aerobics-class",
    "zelha-spin-fitness-juja-tabata-workout",
    "zelha-fitness-juja-community-fitness",
    "zelha-gym-juja-strength-training",
    "zelha-spin-fitness-juja-women-fitness",
    "zelha-fitness-juja-men-workout",
    "zelha-gym-juja-fitness-equipment",
    "zelha-spin-fitness-juja-health-wellness",
    "zelha-fitness-juja-group-exercise",
    "zelha-gym-juja-workout-motivation",
    "zelha-fitness-juja-gym-logo"
]

images = sorted(glob.glob(os.path.join(input_dir, '*.*')))

for i, img_path in enumerate(images):
    try:
        if i < len(seo_names):
            new_name = seo_names[i] + ".webp"
        else:
            new_name = f"zelha-fitness-juja-gallery-{i}.webp"
            
        out_path = os.path.join(output_dir, new_name)
        
        with Image.open(img_path) as img:
            # Convert to RGB if RGBA (for WebP compatibility)
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGB')
                
            # Resize if too large to help with compression
            max_size = (1200, 1200)
            img.thumbnail(max_size, Image.Resampling.LANCZOS)
            
            # Compress to < 100KB
            quality = 85
            img.save(out_path, 'WEBP', quality=quality)
            
            while os.path.getsize(out_path) > 100 * 1024 and quality > 10:
                quality -= 5
                img.save(out_path, 'WEBP', quality=quality)
                
            print(f"Processed: {os.path.basename(img_path)} -> {new_name} ({os.path.getsize(out_path)/1024:.1f} KB)")
            
    except Exception as e:
        print(f"Error processing {img_path}: {e}")
