import json

# Create JSON string
json_string = '{"name": "John", "age": 30, "skills": ["Python","javascript"]}'

# Parse JSON to dictionary
person= json.loads(json_string)

# Access values
n=person['name']
a=person['age']
s1=person['skills'][0]
s2=person['skills'][1]

description=f"Name: {n}, Age: {a}, Skills: {s1}, {s2}"

# Print description
print(description)
''' Output:
Name: John, Age: 30, Skills: Python, javascript
'''