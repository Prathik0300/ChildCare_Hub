import json
import random

# Configurations
input_file = "sitter.json"      # Replace with your actual file name
output_file = "sitter.json"     # You can overwrite or create a new file
key_to_add = "distance"         # Key we want to add or update
min_value = 1                   # Minimum random number (example: 1 mile)
max_value = 21                 # Maximum random number (example: 100 miles)

# Load JSON data
with open(input_file, "r") as f:
    data = json.load(f)

# Ensure the top-level JSON is a list
if not isinstance(data, list):
    raise TypeError("Top-level JSON structure must be a list of objects")

# Update each object
for obj in data:
    if isinstance(obj, dict):
        obj[key_to_add] = random.randint(min_value, max_value)

# Save updated JSON back to file
with open(output_file, "w") as f:
    json.dump(data, f, indent=4)

print(f"✅ Successfully added/updated '{key_to_add}' for all objects in '{output_file}'!")