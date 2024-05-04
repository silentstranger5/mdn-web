import urllib.request

url = "http://127.0.0.1:5000"
with urllib.request.urlopen(url) as f:
    print(eval(f.read().decode("utf-8")))