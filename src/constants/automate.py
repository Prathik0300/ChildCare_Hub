import json
import random

# Configurations
input_file = "babysitter.json"      # Replace with your actual file name
output_file = "babysitter.json"    # Optional: use input_file to overwrite
new_key = "matchCount"        # Key to be added
min_value = 0                 # Minimum random number
max_value = 100                # Maximum random number

# Load JSON data
with open(input_file, "r") as f:
    data = json.load(f)

if not isinstance(data, list):
    raise TypeError("Top-level JSON structure must be a list of objects")

for obj in data:
    if isinstance(obj, dict):
        obj[new_key] = min_value
# Write the updated data back to the file
with open(output_file, "w") as f:
    json.dump(data, f, indent=4)

print(f"✅ Added '{new_key}' to all items and saved to '{output_file}'")