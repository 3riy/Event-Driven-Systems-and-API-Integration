import http.client

conn = http.client.HTTPSConnection("stoic.tekloon.net")
payload = ''
headers = {}
conn.request("GET", "/stoic-quote", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))