import json

# JSON string
json_string = '{"name": "John", "age": 30, "skills": ["Python","javascript"]}'

try:
    # Parse JSON to dictionary
    person = json.loads(json_string)
    
    # Accessing values
    n = person['name']
    a = person['age']
    s1 = person['skills'][0]
    s2 = person['skills'][1]
    
    description = f"Name: {n}, Age: {a}, Skills: {s1}, {s2}"
    print(description)
    
except json.JSONDecodeError as e:
    print("Failed to parse JSON:", e)

except KeyError as e:
    print("Missing key:", e)

except Exception as e:
    print("Unexpected error", e)