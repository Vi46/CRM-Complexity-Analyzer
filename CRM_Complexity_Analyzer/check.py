from simple_salesforce import Salesforce

# Salesforce credentials
username = 'vishaldev@cct.com'
password = 'Pluto#21'
security_token = 'sSk5ZBgYkTdTPSdTer9ZiHky'
client_id= '3MVG9wt4IL4O5wvKWCHOWdmDDMQZcUh18IfDSt5w2u4QqgJEHMQ2UGabXj5ZQ5Oj7T4KFhYJ4Lny1NStxGFwT'


# Create a Salesforce instance
sf = Salesforce(username=username, password=password, security_token=security_token, client_id=client_id)

# Obtain the session ID
session_id = sf.session_id

print("Session ID:", session_id)