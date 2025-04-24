import json
import random
import requests

# Configurations
input_file = "sitter.json"      # Replace with your actual file name
output_file = "sitter.json"    # Optional: use input_file to overwrite
new_key = "profileImage"        # Key to be added
# value = False
index = 1               # Minimum random number
# max_value = 99
# Maximum random number

def fetch_random_profile_image(gender: str = "female") -> str:
    try:
        res = requests.get(f"https://randomuser.me/api/?gender={gender.lower()}")
        res.raise_for_status()
        return res.json()["results"][0]["picture"]["large"]
    except Exception as e:
        print(f"❌ Error fetching image: {e}")
        return ""  # fallback to empty string

# Load JSON data
with open(input_file, "r") as f:
    data = json.load(f)

if not isinstance(data, list):
    raise TypeError("Top-level JSON structure must be a list of objects")

for obj in data:
    if isinstance(obj, dict):
        # obj[new_key] = random.randint(min_value, max_value)
        gender = 'women' if obj["gender"] == 'female' else 'men'
        value = f"https://randomuser.me/api/portraits/{gender}/{index}.jpg"
        index+=1
        obj[new_key] = value
# Write the updated data back to the file
with open(output_file, "w") as f:
    json.dump(data, f, indent=4)

print(f"✅ Added '{new_key}' to all items and saved to '{output_file}'")