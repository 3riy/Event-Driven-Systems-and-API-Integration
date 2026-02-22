# -- Fetch Data from a Free Public API: Stoic Quotes -- //
  # This script uses Python's built-in http.client to perform a simple GET request.
  # Unlike the RapidAPI example, this public API does not require an API key.

import http.client
# Establish an HTTPS connection to the API's host domain. Note: We only provide the domain name here, not the full URL.
conn = http.client.HTTPSConnection("stoic.tekloon.net")
# Initialize an empty payload since GET requests typically do not send data in the body
payload = ''
# Define headers - In this case, they are empty because the API is public and doesn't require authentication or specific content-type declarations.
headers = {}
# Send the HTTP GET request to the server
  # Method: "GET" - Used to retrieve data
  # Path: "/stoic-quote" - The specific endpoint that returns a random quote
conn.request("GET", "/stoic-quote", payload, headers)
# Capture the server's response (includes status code and data)
res = conn.getresponse()
# Read the raw bytes from the response body
data = res.read()
# Decode the bytes into a UTF-8 string to make it readable. This API returns a JSON string, e.g., {"data": {"author": "Seneca", "quote": "..."}}
print(data.decode("utf-8"))
