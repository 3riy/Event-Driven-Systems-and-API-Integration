import requests

# Function to get user data
def get_user():
    url = "https://jsonplaceholder.typicode.com/users/1"

    try:
        response = requests.get(url, timeout=5)

        if response.status_code == 200:
            data = response.json()
            print("User data:")
            print(data)
        else:
            print(f"Requests failed with status code: {response.status_code}")

    except requests.exceptions.RequestException as e:
        print("Network errors", e)

if __name__ == "__main__":
    get_user()
