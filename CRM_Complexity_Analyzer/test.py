import requests

# Salesforce API credentials
username = 'adminuser@rudhrainfosolutions.com.ssmdev02'
password = 'Rudhra@03'
security_token = 'lOVn1rYDr906keZCChvT6EVj'
client_id = '3MVG9pcaEGrGRoTI9emqZjaO0tEF0QoOuNWnInVCCeOPXDByUfhUnQ.6NQMNm5VWD2jliPQD2QdRCdn8fztk5'
client_secret = 'FED2632090D35ECB842C9DA3B5A014CF4D07303B98C7D30C5DFC106E2723FFC9'

# Salesforce login endpoint
login_url = 'https://test.salesforce.com/services/oauth2/token'

# Set up the payload for obtaining the access token
payload = {
    'grant_type': 'password',
    'client_id': client_id,
    'client_secret': client_secret,
    'username': username,
    'password': password + security_token
}

# Make a request to obtain the access token
response = requests.post(login_url, data=payload)
access_token = response.json()['access_token']
instance_url = response.json()['instance_url']

# Set up the headers for subsequent requests
headers = {
    'Authorization': f'Bearer {access_token}',
    'Content-Type': 'application/json'
}

# Query for Apex classes
apex_class_query = f"{instance_url}/services/data/v52.0/query?q=SELECT+Id,Name,Body+FROM+ApexClass"
response = requests.get(apex_class_query, headers=headers)
apex_classes = response.json()['records']

# Process the result
for apex_class in apex_classes:
    print(f'Apex Class Name: {apex_class["Name"]}, Id: {apex_class["Id"]}')


