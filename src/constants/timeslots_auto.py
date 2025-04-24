import datetime
import random
import json

# === CONFIGURATION ===
INPUT_FILE = "sitter.json"
OUTPUT_FILE = "sitter.json"
DAYS_BEFORE = 60
DAYS_AFTER = 60
BASE_DATE = datetime.date(2025, 4, 24)
TIME_FORMAT = "%I:%M %p"

def generate_random_time_slot():
    start_hour = random.randint(6, 20)
    end_hour = random.randint(start_hour + 1, min(start_hour + 6, 22))
    start_minute = random.choice([0, 15, 30, 45])
    end_minute = random.choice([0, 15, 30, 45])
    start_time = datetime.time(hour=start_hour, minute=start_minute)
    end_time = datetime.time(hour=end_hour, minute=end_minute)

    return {
        "startTime": start_time.strftime(TIME_FORMAT),
        "endTime": end_time.strftime(TIME_FORMAT)
    }

def generate_availability_slots():
    slots = {}
    for offset in range(-DAYS_BEFORE, DAYS_AFTER + 1):
        date = BASE_DATE + datetime.timedelta(days=offset)
        date_key = date.strftime("%Y-%d-%m")  # YYYY-DD-MM

        time_slots = [generate_random_time_slot()]

        # Attempt to add second non-overlapping slot
        second_slot = generate_random_time_slot()
        if second_slot["startTime"] > time_slots[0]["endTime"]:
            time_slots.append(second_slot)

        # Always store at least one slot for every date
        slots[date_key] = {
            "timeSlots": sorted(time_slots, key=lambda x: x["startTime"])
        }

    return slots

# === Load and update sitters ===
with open(INPUT_FILE, "r") as f:
    sitters = json.load(f)

for sitter in sitters:
    sitter["availabilitySlots"] = generate_availability_slots()

with open(OUTPUT_FILE, "w") as f:
    json.dump(sitters, f, indent=4)

print(f"✅ Injected availabilitySlots (121 days each) into {len(sitters)} sitters")