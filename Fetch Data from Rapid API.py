# -- Fetch Data from Rapid API: Weather API -- //
  # This script uses Python's built-in http.client to make a GET request to a REST API hosted on the RapidAPI platform.

import http.client

# Establish an HTTPS connection to the API host server
# RapidAPI acts as a gateway to the specific Weather API provider
conn = http.client.HTTPSConnection("weatherapi-com.p.rapidapi.com")

# Define headers - Metadata sent with the request
headers = {
    'x-rapidapi-key': "YOUR_API_KEY", # Unique credential used for authentication and billing. Replace with your actual RapidAPI key
    'x-rapidapi-host': "weatherapi-com.p.rapidapi.com" # Tells the gateway which specific API service to route to
}

# Send the HTTP GET request
  # Path: "/alerts.json?q=India" - queries for weather alerts in India
  # headers: Attaches the API key for authorization
conn.request("GET", "/alerts.json?q=India", headers=headers)

# Get the server's response object
res = conn.getresponse()

# Read the raw binary data from the response body
data = res.read()

# Decode the binary data into a UTF-8 string (JSON format) and print it. This converts the computer-readable bytes into human-readable text.
print(data.decode("utf-8"))
