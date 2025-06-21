import zipfile
import os

# Path to the zip file
zip_path = input("File ")

# Where to extract (creates folder if it doesn't exist)
extract_to = input("Folder ")
os.makedirs(extract_to, exist_ok=True)

# Unzip it
with zipfile.ZipFile(zip_path, 'r') as zip_ref:
    zip_ref.extractall(extract_to)

print(f"Files extracted to: {extract_to}")
