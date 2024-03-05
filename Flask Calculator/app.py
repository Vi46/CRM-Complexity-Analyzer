from flask import Flask, Response, render_template,request, stream_with_context,jsonify,session,redirect,url_for
from simple_salesforce import Salesforce
import re
import pandas as pd
import plotly.express as px

import requests


app = Flask(__name__)
app.jinja_env.autoescape = False
app.secret_key = 'your_secret_key'  # Change this to a secure secret key in a real application

instance_url=''
class_details = []
trigger_details =[]


VeevaObject_count=''
apex_class_count=''
flow_count=''
apex_trigger_count=''
lightning_component_count=''
custom_object_count=''
custom_permission_set_count=''
custom_labels_count=''
custom_tab_count=''
role_count=''
global_value_set_count=''
Custom_Application_count=''
Custom_Notification_Type_count=''
page_layout_count=''
Profile_count=''
WorkFlow_FieldUpdate_count=''
workFlow_alert_count=''
ContentAsset_count=''
flexipage_count=''
DuplicateRule_count=''
EmailTemplate_count=''
ProcessDefinition_count=''
Group_count=''
StaticResource_count=''

#classes
VeevaObjects=''
apex_classes =''
lightning_component_bundles =''
flows =''
triggers =''
custom_objects =''
custom_permission_sets =''
roles =''
Custom_Notification_Types =''
Profiles =''
ContentAssets =''
MatchingRules =''
DuplicateRules =''
EmailTemplates =''
ProcessDefinitions =''
Groups =''
StaticResources =''
flexipages =''
workFlow_alerts =''
WorkFlow_FieldUpdates =''
page_layouts ='' 
Custom_Applications=''
global_value_sets=''
custom_tabs=''
custom_labels=''
        
overall_metrics = {
    "for_loop_count": 0,
    "nested_for_loop_count": 0,
    "conditional_count": 0,
    "nested_if_count": 0,
    "dml_query_count": 0,
    "overall_combined_count": 0
    }

#Function to analyze Apex code complexity for each class
def analyze_complexity(class_name, class_body):
    # Define patterns to match loops and conditionals
    for_pattern = r'\bfor\s*\([^;]\)\s{'
    nested_for_pattern = r'\bfor\s*\([^;]\)\s{.\bfor\s\([^;]\)\s{'
    if_pattern = r'\bif\s*\([^;]\)\s{|\belse\s*{'
    nested_if_pattern = r'\bif\s*\([^;]\)\s{.\bif\s\([^;]\)\s{'

    # Count the number of loops and conditionals in the class
    for_loop_count = len(re.findall(for_pattern, class_body))
    nested_for_loop_count = len(re.findall(nested_for_pattern, class_body))
    conditional_count = len(re.findall(if_pattern, class_body))
    nested_if_count = len(re.findall(nested_if_pattern, class_body))

    # Update overall metrics
    overall_metrics["for_loop_count"] += for_loop_count
    overall_metrics["nested_for_loop_count"] += nested_for_loop_count
    overall_metrics["conditional_count"] += conditional_count
    overall_metrics["nested_if_count"] += nested_if_count

    # Define a pattern to match DML queries
    dml_pattern = r'\b(insert|update|upsert|delete)\s+[^\s]+\s+[^;]+;'

    # Count the number of DML queries found in the class
    dml_count = len(re.findall(dml_pattern, class_body))

    # Update overall metrics
    overall_metrics["dml_query_count"] += dml_count

    # Combine counts for each class
    class_combined_count = for_loop_count + conditional_count + dml_count
    

    # Return metrics for the class
    class_metrics = {
        "class_name": class_name,
        "loop_count": for_loop_count,
        "nested_loop_count": nested_for_loop_count,
        "conditional_count": conditional_count,
        "nested_if_count": nested_if_count,
        "dml_query_count": dml_count,
        "combined_count": class_combined_count
    }

    return class_metrics


@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        security_token = request.form['security_token']
        client_id = request.form['client_id']
        client_secret = request.form['client_secret']
        org_type = request.form['org_type']
        # print('org_type',org_type)

        # Store the values in session
        session['username'] = username
        session['password'] = password
        session['security_token'] = security_token
        session['client_id'] = client_id
        session['client_secret'] = client_secret
        session['org_type'] = org_type

        # Redirect to another route (e.g., a success page)
        return redirect(url_for('success'))

    return render_template('login.html')

@app.route('/success')
def success():
    # Retrieve values from session
    fe_username = session.get('username')
    fe_password = session.get('password')
    fe_security_token = session.get('security_token')
    fe_client_id = session.get('client_id')
    fe_client_secret = session.get('client_secret')
    fe_org_type = session.get('org_type')

    # Use the values as needed
    

    # Salesforce API credentials
    username = fe_username
    password = fe_password
    security_token = fe_security_token
    api_version = 'v57.0'

    login_url = fe_org_type
    print(login_url)
    
    payload = {
        'grant_type': 'password',
        'client_id': fe_client_id,
        'client_secret': fe_client_secret,
        'username': username,
        'password': f'{password}{security_token}'
    }

    # Get access token
    response = requests.post(f'{login_url}/services/oauth2/token', data=payload)
    print("response---->",response)
    access_token = response.json()['access_token']
    global instance_url
    instance_url = response.json()['instance_url']
    print("instance_url---->",instance_url)

    tooling_api_endpoint = f'{instance_url}/services/data/{api_version}/tooling/query'



    # Query for flexipage
    flexipage_query = "SELECT Id, DeveloperName From flexipage"
    headers = {
        'Authorization': f'Bearer {access_token}',
        'Content-Type': 'application/json'
    }
    response = requests.get(tooling_api_endpoint, headers=headers, params={'q': flexipage_query})
    global flexipages
    flexipages = response.json()['records']

    # Extract count and print information about flexipage
    global flexipage_count
    flexipage_count = len(flexipages)
    print(f'flexipage count: {flexipage_count}')
    for flexipage in flexipages:
        print(f'Id: {flexipage["Id"]}, flexipage: {flexipage["DeveloperName"]}')

    # Query for workFlow_alert
    workFlow_alert_query = "SELECT Id, DeveloperName From workFlowalert"
    headers = {
        'Authorization': f'Bearer {access_token}',
        'Content-Type': 'application/json'
    }
    response = requests.get(tooling_api_endpoint, headers=headers, params={'q': workFlow_alert_query})
    global workFlow_alerts
    workFlow_alerts = response.json()['records']

    # Extract count and print information about workFlow_alert
    global workFlow_alert_count
    workFlow_alert_count = len(workFlow_alerts)
    print(f'WorkFlow FieldUpdate count: {workFlow_alert_count}')
    for workFlowalert in workFlow_alerts:
        print(f'Id: {workFlowalert["Id"]}, Page Layout: {workFlowalert["DeveloperName"]}')

    # Query for WorkFlowFieldUpdate
    WorkFlow_FieldUpdate_query = "SELECT Id,Name FROM workflowfieldupdate"
    headers = {
        'Authorization': f'Bearer {access_token}',
        'Content-Type': 'application/json'
    }
    response = requests.get(tooling_api_endpoint, headers=headers, params={'q': WorkFlow_FieldUpdate_query})
    global WorkFlow_FieldUpdates 
    WorkFlow_FieldUpdates = response.json()['records']

    # Extract count and print information about WorkFlowFieldUpdate
    global WorkFlow_FieldUpdate_count
    WorkFlow_FieldUpdate_count = len(WorkFlow_FieldUpdates)
    print(f'WorkFlow FieldUpdate count: {WorkFlow_FieldUpdate_count}')
    for WorkFlow_FieldUpdate in WorkFlow_FieldUpdates:
        print(f'Id: {WorkFlow_FieldUpdate["Id"]}, Page Layout: {WorkFlow_FieldUpdate["Name"]}')

    # Query for Page Layout
    page_layout_query = "SELECT Id,Name FROM Layout"
    headers = {
        'Authorization': f'Bearer {access_token}',
        'Content-Type': 'application/json'
    }
    response = requests.get(tooling_api_endpoint, headers=headers, params={'q': page_layout_query})
    global page_layouts
    page_layouts = response.json()['records']

    # Extract count and print information about Page Layout
    global page_layout_count
    page_layout_count = len(page_layouts)
    print(f'page layout count: {page_layout_count}')
    for page_layout in page_layouts:
        print(f'Id: {page_layout["Id"]}, Page Layout: {page_layout["Name"]}')

    # Query for Custom Application
    Custom_Application_query = "SELECT Id,DeveloperName FROM CustomApplication"
    headers = {
        'Authorization': f'Bearer {access_token}',
        'Content-Type': 'application/json'
    }
    response = requests.get(tooling_api_endpoint, headers=headers, params={'q': Custom_Application_query})
    global Custom_Applications
    Custom_Applications = response.json()['records']

    # Extract count and print information about Custom Application
    global Custom_Application_count
    Custom_Application_count = len(Custom_Applications)
    print(f'Global Value Set Count: {Custom_Application_count}')
    for Custom_Application in Custom_Applications:
        print(f'Id: {Custom_Application["Id"]}, DeveloperName: {Custom_Application["DeveloperName"]}')

    # Query for Global Value Set
    global_value_set_query = "SELECT Id,DeveloperName FROM GlobalValueSet"
    headers = {
        'Authorization': f'Bearer {access_token}',
        'Content-Type': 'application/json'
    }
    response = requests.get(tooling_api_endpoint, headers=headers, params={'q': global_value_set_query})
    global global_value_sets
    global_value_sets = response.json()['records']

    # Extract count and print information about Global Value Set
    global global_value_set_count
    global_value_set_count = len(global_value_sets)
    # print(f'Global Value Set Count: {global_value_set_count}')
    # for global_value_set in global_value_sets:
        # print(f'Id: {global_value_set["Id"]}, DeveloperName: {global_value_set["DeveloperName"]}')

    # Query for Custom tab
    custom_tab_query = "SELECT Id,DeveloperName FROM Customtab"
    headers = {
        'Authorization': f'Bearer {access_token}',
        'Content-Type': 'application/json'
    }
    response = requests.get(tooling_api_endpoint, headers=headers, params={'q': custom_tab_query})
    global custom_tabs
    custom_tabs = response.json()['records']

    # Extract count and print information about Custom tab 
    global custom_tab_count
    custom_tab_count = len(custom_tabs)
    # print(f'custom tab count: {custom_tab_count}')
    # for customtab in custom_tabs:
        # print(f'Id: {customtab["Id"]}, DeveloperName: {customtab["DeveloperName"]}')

    # Query for Custom Label
    query = "SELECT Id,Name FROM CustomLabel"
    headers = {
        'Authorization': f'Bearer {access_token}',
        'Content-Type': 'application/json'
    }
    response = requests.get(tooling_api_endpoint, headers=headers, params={'q': query})
    global custom_labels
    custom_labels = response.json()['records']

    # Extract count and print information about Custom Label 
    global custom_labels_count
    custom_labels_count = len(custom_labels)
    # print(f'Custom Labels Count: {custom_labels_count}')
    # for customlabel in custom_labels:
        # print(f'Id: {customlabel["Id"]}, Name: {customlabel["Name"]}')


    # Query for Lightning Component Bundles
    query = "SELECT Id, DeveloperName, NamespacePrefix, ApiVersion FROM LightningComponentBundle"
    headers = {
        'Authorization': f'Bearer {access_token}',
        'Content-Type': 'application/json'
    }
    response = requests.get(tooling_api_endpoint, headers=headers, params={'q': query})
    global lightning_component_bundles
    lightning_component_bundles = response.json()['records']

    # Extract count and print information about Lightning Component Bundles
    global lightning_component_count
    lightning_component_count = len(lightning_component_bundles)
    # print(f'Lightning Component Bundle Count: {lightning_component_count}')
    # for bundle in lightning_component_bundles:
        # print(f'Id: {bundle["Id"]}, DeveloperName: {bundle["DeveloperName"]}, NamespacePrefix: {bundle.get("NamespacePrefix")}, ApiVersion: {bundle["ApiVersion"]}')

    # Create a Salesforce connection
    sf = Salesforce(username=username, password=password, security_token=security_token)

    # Query for Apex classes
    apex_class_query = "SELECT Id, Name, Body FROM ApexClass WHERE NamespacePrefix = Null"
    apex_class_result = sf.query(apex_class_query)
    global apex_classes
    apex_classes = apex_class_result['records']
    # print('apex_classes---->',apex_classes)
    global apex_class_count
    apex_class_count = apex_class_result['totalSize']
    global class_details

    for apex_class in apex_classes:
        class_name = apex_class["Name"]
        class_body = apex_class["Body"]
        class_metrics = analyze_complexity(class_name, class_body)

        if 0 <= class_metrics["combined_count"] <= 1:
            complexity_level = "Low Complexity"
        elif 2 <= class_metrics["combined_count"] <= 3:
            complexity_level = "Medium Complexity"
        elif 4 <= class_metrics["combined_count"] <= 5:
            complexity_level = "High Complexity"
        else:
            complexity_level = "Undefined Complexity"

        class_details.append({
            "class_name": class_name,
            "complexity_level": complexity_level
        })

    # Query for trigger
    apex_trigger_query = "SELECT Id, Name,Body FROM ApexTrigger"
    apex_trigger_result = sf.query(apex_trigger_query)
    global triggers
    triggers = apex_trigger_result['records']
    global apex_trigger_count
    apex_trigger_count = apex_trigger_result['totalSize']

    global trigger_details

    for trigger in triggers:
        class_name = trigger["Name"]
        class_body = trigger["Body"]
        class_metrics = analyze_complexity(class_name, class_body)

        if 0 <= class_metrics["combined_count"] <= 1:
            complexity_level = "Low Complexity"
        elif 2 <= class_metrics["combined_count"] <= 3:
            complexity_level = "Medium Complexity"
        elif 4 <= class_metrics["combined_count"] <= 5:
            complexity_level = "High Complexity"
        else:
            complexity_level = "Undefined Complexity"

        trigger_details.append({
            "class_name": class_name,
            "complexity_level": complexity_level
        })

    # Query for Flows
    flow_query = "SELECT Id, Label FROM FlowDefinitionView"
    flow_result = sf.query(flow_query)
    global flows
    flows = flow_result['records']
    global flow_count
    flow_count = flow_result['totalSize']

    # Query for Custom object
    custom_object_query = "SELECT Id, QualifiedApiName, Label, DurableId FROM EntityDefinition WHERE DurableId LIKE '01I%'"
    custom_object_result = sf.query(custom_object_query)
    global custom_objects
    custom_objects = custom_object_result['records']
    global custom_object_count
    custom_object_count = custom_object_result['totalSize']

    # Query for custom permission sets
    custom_permission_set_query = "SELECT Id, Name, Label FROM PermissionSet WHERE IsCustom = true"
    custom_permission_set_result = sf.query(custom_permission_set_query)
    global custom_permission_sets
    custom_permission_sets = custom_permission_set_result['records']
    global custom_permission_set_count
    custom_permission_set_count = custom_permission_set_result['totalSize']

    # Query for role 
    role_query = "SELECT Id, Name, DeveloperName FROM UserRole"
    role_result = sf.query(role_query)
    global roles
    roles = role_result['records']
    global role_count
    role_count = role_result['totalSize']

    # Query for CustomNotificationType
    Custom_Notification_Type_query = "SELECT Id,DeveloperName FROM CustomNotificationType"
    Custom_Notification_Type_result = sf.query(Custom_Notification_Type_query)
    global Custom_Notification_Types
    Custom_Notification_Types = Custom_Notification_Type_result['records']
    global Custom_Notification_Type_count
    Custom_Notification_Type_count = Custom_Notification_Type_result['totalSize']

    # Query for Profile
    Profile_query = "SELECT Id,Name FROM Profile"
    Profile_result = sf.query(Profile_query)
    global Profiles
    Profiles = Profile_result['records']
    global Profile_count
    Profile_count = Profile_result['totalSize']

    # Query for ContentAsset
    ContentAsset_query = "SELECT Id, MasterLabel, NamespacePrefix, DeveloperName FROM ContentAsset"
    ContentAsset_result = sf.query(ContentAsset_query)
    global ContentAssets
    ContentAssets = ContentAsset_result['records']
    global ContentAsset_count
    ContentAsset_count = ContentAsset_result['totalSize']

    # Query for MatchingRule
    MatchingRule_query = "SELECT Id, DeveloperName, MasterLabel FROM MatchingRule"
    MatchingRule_result = sf.query(MatchingRule_query)
    global MatchingRules
    MatchingRules = MatchingRule_result['records']
    global MatchingRule_count
    MatchingRule_count = MatchingRule_result['totalSize']

    # Query for DuplicateRule
    DuplicateRule_query = "SELECT Id, DeveloperName, MasterLabel FROM DuplicateRule"
    DuplicateRule_result = sf.query(DuplicateRule_query)
    global DuplicateRules
    DuplicateRules = DuplicateRule_result['records']
    global DuplicateRule_count
    DuplicateRule_count = DuplicateRule_result['totalSize']

    # Query for EmailTemplate
    EmailTemplate_query = "SELECT Id, DeveloperName FROM EmailTemplate"
    EmailTemplate_result = sf.query(EmailTemplate_query)
    global EmailTemplates
    EmailTemplates = EmailTemplate_result['records']
    global EmailTemplate_count
    EmailTemplate_count = EmailTemplate_result['totalSize']

    # Query for ProcessDefinition
    ProcessDefinition_query = "SELECT Id, Name, DeveloperName FROM ProcessDefinition"
    ProcessDefinition_result = sf.query(ProcessDefinition_query)
    global ProcessDefinitions
    ProcessDefinitions = ProcessDefinition_result['records']
    global ProcessDefinition_count
    ProcessDefinition_count = ProcessDefinition_result['totalSize']

    # Query for Queue
    Group_query = "SELECT Id, Name, Type FROM Group where type = 'group'"
    Group_result = sf.query(Group_query)
    global Groups
    Groups = Group_result['records']
    global Group_count
    Group_count = Group_result['totalSize']

    # Query for StaticResource 
    StaticResource_query = "SELECT Id, Name FROM StaticResource"
    StaticResource_result = sf.query(StaticResource_query)
    global StaticResources
    StaticResources = StaticResource_result['records']
    global StaticResource_count
    StaticResource_count = StaticResource_result['totalSize']

    #Query for Veeva Objects
    VeevaObject_query = "SELECT  QualifiedApiName, Label FROM EntityDefinition where QualifiedApiName LIKE '%vod%'"
    VeevaObject_result = sf.query(VeevaObject_query)
    global VeevaObjects
    VeevaObjects = VeevaObject_result['records']
    global VeevaObject_count
    VeevaObject_count = VeevaObject_result['totalSize']

    # Print information about Apex classes, triggers, and flows
    
    # Complexity
    
    counts_data = {
        'Apex Class Count': apex_class_count,
        'Flow Count': flow_count,
        'Apex Trigger Count': apex_trigger_count,
        'Lightning Component Count': lightning_component_count,
        'Custom Object Count': custom_object_count,
        'Custom Permission Set Count': custom_permission_set_count,
        'Custom Labels Count': custom_labels_count,
        'Custom Tab Count': custom_tab_count,
        'Role Count': role_count,
        'Global Value Set Count': global_value_set_count,
        'Custom Application Count': Custom_Application_count,
        'Custom Notification Type Count': Custom_Notification_Type_count,
        'Page Layout Count': page_layout_count,
        'Profile Count': Profile_count,
        'WorkFlow FieldUpdate Count': WorkFlow_FieldUpdate_count,
        'WorkFlow Alert Count': workFlow_alert_count,
        'Content Asset Count': ContentAsset_count,
        'Flexipage Count': flexipage_count,
        'Duplicate Rule Count': DuplicateRule_count,
        'Email Template Count': EmailTemplate_count,
        'Process Definition Count': ProcessDefinition_count,
        'Group Count': Group_count,
        'Static Resource Count': StaticResource_count,
        'VeevaObject_count':VeevaObject_count
    }

     # Convert the dictionary to a DataFrame for Plotly Express
    df = pd.DataFrame(list(counts_data.items()), columns=['Count Name', 'Count Value'])

    # Create a treemap using Plotly Express
    fig = px.treemap(df, path=['Count Name'], values='Count Value')
    fig.update_layout(
    width=1200,  # Set the width of the plot
    height=500,  # Set the height of the plot
    margin=dict(l=0, r=0, b=0, t=40),  # Adjust the margins
    )
    # Convert the figure to HTML
    treemap_html = fig.to_html(full_html=False)
    #print('treemap_html------>',treemap_html)

    #complexity apex rating assignment ---------->
    def apex_rating(count):
        if 1 <= count <= 50:
            return [2.5,'Low']
        elif 50 < count <= 100:
            return [7.5,'Medium']
        elif count > 100:
            return [10,'High']
        else:
            return [0,'-']
    

    apex_class_rating =apex_rating(apex_class_count)
    trigger_rating=apex_rating(apex_trigger_count)
    lwc_rating=apex_rating(lightning_component_count)
    flow_rating=apex_rating(flow_count)
    page_rating=apex_rating(page_layout_count)
    
    #complexity custom components rating assignment ---------->
    def components_rating(count):
        if 1 <= count <= 50:
            return [1.75,'Low']
        elif 50 < count <= 100:
            return [5.25,'Medium'] 
        elif count > 100:
            return [7,'High']
        else:
            return [0,'-']
        
        
    customObject_rating = components_rating(custom_object_count)
    customPermissionSet_rating = components_rating(custom_permission_set_count)
    customlabel_rating = components_rating(custom_labels_count)
    customtab_rating = components_rating(custom_tab_count)
    customApplication_rating = components_rating(Custom_Application_count)
    customNotification_rating = components_rating(Custom_Notification_Type_count)

    #complexity other components rating assignment ---------->
    def otherComponent_rating(count):
        if 1 <= count <= 50:
            return [1.25,'Low']
        elif 50 < count <= 100:
            return [3.75,'Medium']
        elif count > 100:
            return [5,'High']
        else:
            return [0,'-']


    #Component wise rating function calling    
    role_rating=otherComponent_rating(role_count)
    global_value_set_rating=otherComponent_rating(global_value_set_count)
    Profile_rating=otherComponent_rating(Profile_count)
    WorkFlow_FieldUpdate_rating=otherComponent_rating(WorkFlow_FieldUpdate_count)
    workFlow_alert_rating=otherComponent_rating(workFlow_alert_count)
    ContentAsset_rating=otherComponent_rating(ContentAsset_count)
    flexipage_rating=otherComponent_rating(flexipage_count)
    DuplicateRule_rating=otherComponent_rating(DuplicateRule_count)
    MatchingRule_rating=otherComponent_rating(MatchingRule_count)
    EmailTemplate_rating=otherComponent_rating(EmailTemplate_count)
    ProcessDefinition_rating=otherComponent_rating(ProcessDefinition_count)
    Group_rating=otherComponent_rating(Group_count)
    StaticResource_rating=otherComponent_rating(StaticResource_count)
    VeevaObject_rating=otherComponent_rating(VeevaObject_count)
    
    #Complexity treemap
    complexity_data = {
        'Apex Class': apex_class_rating,
        'Flow': flow_rating,
        'Apex Trigger': trigger_rating,
        'Lightning Component': lwc_rating,
        'Custom Object':  customObject_rating ,
        'Custom Permission':customPermissionSet_rating ,
        'Custom Labels':customlabel_rating,
        'Custom Tab':customtab_rating,
        'Role': role_rating,
        'Global Value Set': global_value_set_rating,
        'Custom Application':customApplication_rating,
        'Custom Notification':customNotification_rating,
        'Page Layout': page_rating,
        'Profile': Profile_rating,
        'WorkFlow FieldUpdate': WorkFlow_FieldUpdate_rating,
        'WorkFlow Alert': workFlow_alert_rating,
        'Content Asset': ContentAsset_rating,
        'Flexipage': flexipage_rating,
        'Duplicate Rule': DuplicateRule_rating,
        'Email Template': EmailTemplate_rating[1],
        'Process Definition': ProcessDefinition_rating,
        'Group': Group_rating,
        'Static Resource': StaticResource_rating,
        'VeevaObject':VeevaObject_rating
    }

     # Convert the dictionary to a DataFrame for Plotly Express
    df = pd.DataFrame([(name, pd.to_numeric(rating[0], errors='coerce'), rating[1]) for name, rating in complexity_data.items()],
                  columns=['Count Name', 'Count Rating', 'Count Label'])
    fig = px.treemap(df, 
                 path=['Count Name'], 
                 values='Count Rating', 
                 labels={'Count Name': 'Name', 'Count Label': 'Label'},
                 color='Count Label',
                 color_discrete_map={'Low': '#e6c0ff', 'Medium': '#b950ff', 'High': '#9900ff'})

    fig.update_layout(
         width=1200,  # Set the width of the plot
         height=500,  # Set the height of the plot
         margin=dict(l=0, r=0, b=0, t=40),  # Adjust the margins
    )
    
    
    #Convert the figure to HTML
    treemapComplexity_html = fig.to_html(full_html=False)
    #print('treemap_html------>',treemap_html)

    #overall complexity rating
    def overallComponent_rating(count):
            if 1 <= count <= 15:
                return 'Low'
            elif 15 < count <= 35:
                return 'Medium'
            elif count > 35:
                return 'High'
            else:
                return '-'
    
    #overall    
    overall_rating_array = [
    role_rating, global_value_set_rating, Profile_rating,
    WorkFlow_FieldUpdate_rating, workFlow_alert_rating,
    ContentAsset_rating, flexipage_rating, DuplicateRule_rating,
    MatchingRule_rating, EmailTemplate_rating, ProcessDefinition_rating,
    Group_rating, StaticResource_rating, VeevaObject_rating
    ]

    overall_rating = 0  # Initialize overall rating

    for variable in overall_rating_array:
        if isinstance(variable, list) and len(variable) > 0:
            overall_rating += variable[0]
        else:
        # Handle the case where the variable is not defined or not a list
            print(f"Error: {variable} is not a valid list or is not defined.")


    overall_rating_comment =overallComponent_rating(overall_rating)
    print('overall_rating_comment:', overall_rating_comment)

    return render_template('new.html', apex_class_count=apex_class_count,
                            flow_count=flow_count, flows=flows,
                            apex_trigger_count=apex_trigger_count, triggers=triggers,
                            lightning_component_count=lightning_component_count,
                            custom_object_count=custom_object_count,
                            custom_permission_set_count=custom_permission_set_count,
                            custom_labels_count=custom_labels_count,
                            custom_tab_count=custom_tab_count,
                            role_count=role_count,
                            global_value_set_count=global_value_set_count,
                            Custom_Application_count=Custom_Application_count,
                            Custom_Notification_Type_count=Custom_Notification_Type_count,
                            page_layout_count=page_layout_count,
                            Profile_count=Profile_count,
                            WorkFlow_FieldUpdate_count=WorkFlow_FieldUpdate_count,
                            workFlow_alert_count=workFlow_alert_count,
                            ContentAsset_count=ContentAsset_count,
                            flexipage_count=flexipage_count,
                            DuplicateRule_count=DuplicateRule_count,
                            MatchingRule_count=MatchingRule_count,
                            EmailTemplate_count=EmailTemplate_count,
                            ProcessDefinition_count=ProcessDefinition_count,
                            Group_count=Group_count,
                            StaticResource_count=StaticResource_count,
                            username=username,
                            VeevaObject_count=VeevaObject_count,
                            treemap_html=treemap_html,
                            treemapComplexity_html=treemapComplexity_html,
                            #rating
                            apex_class_rating=apex_class_rating,
                            trigger_rating=trigger_rating,
                            lwc_rating=lwc_rating,
                            flow_rating=flow_rating,
                            page_rating=page_rating,
                            customObject_rating=customObject_rating,
                            customPermissionSet_rating=customPermissionSet_rating,
                            customlabel_rating=customlabel_rating,
                            customtab_rating=customtab_rating,
                            customApplication_rating=customApplication_rating,
                            customNotification_rating=customNotification_rating,
                            role_rating=role_rating,
                            global_value_set_rating=global_value_set_rating,
                            Profile_rating=Profile_rating,
                            WorkFlow_FieldUpdate_rating=WorkFlow_FieldUpdate_rating,
                            workFlow_alert_rating=workFlow_alert_rating,
                            ContentAsset_rating=ContentAsset_rating,
                            flexipage_rating=flexipage_rating,
                            DuplicateRule_rating=DuplicateRule_rating,
                            MatchingRule_rating=MatchingRule_rating,
                            EmailTemplate_rating=EmailTemplate_rating,
                            ProcessDefinition_rating=ProcessDefinition_rating,
                            Group_rating=Group_rating,
                            StaticResource_rating=StaticResource_rating,
                            VeevaObject_rating=VeevaObject_rating
                            )
                            

    
@app.route('/download_csv')
def download_csv():
        # Get count values from your data
        
        
        counts_data = {
        'Apex Class Count': apex_class_count,
        'Flow Count': flow_count,
        'Apex Trigger Count': apex_trigger_count,
        'Lightning Component Count': lightning_component_count,
        'Custom Object Count': custom_object_count,
        'Custom Permission Set Count': custom_permission_set_count,
        'Custom Labels Count': custom_labels_count,
        'Custom Tab Count': custom_tab_count,
        'Role Count': role_count,
        'Global Value Set Count': global_value_set_count,
        'Custom Application Count': Custom_Application_count,
        'Custom Notification Type Count': Custom_Notification_Type_count,
        'Page Layout Count': page_layout_count,
        'Profile Count': Profile_count,
        'WorkFlow FieldUpdate Count': WorkFlow_FieldUpdate_count,
        'WorkFlow Alert Count': workFlow_alert_count,
        'Content Asset Count': ContentAsset_count,
        'Flexipage Count': flexipage_count,
        'Duplicate Rule Count': DuplicateRule_count,
        'Email Template Count': EmailTemplate_count,
        'Process Definition Count': ProcessDefinition_count,
        'Group Count': Group_count,
        'Static Resource Count': StaticResource_count,
        'VeevaObject_count':VeevaObject_count
    }

        # print("counts_data",counts_data)

        # Define CSV response
        csv_data = generate_csv(counts_data)

        # Create a CSV response
        response = Response(stream_with_context(csv_data))
        response.headers['Content-Type'] = 'text/csv'
        response.headers['Content-Disposition'] = 'attachment; filename=counts_data.csv'

        return response

def generate_csv(data):
    # Function to generate CSV data from the counts_data dictionary
    yield ','.join(['Count Name', 'Count Value']) + '\n'
    for count_name, count_value in data.items():
        yield f'{count_name},{count_value}\n'


@app.route('/get_records')
def get_records():
    #fetchedrecords
        records_data = {
        'apex_classes': apex_classes,
        'lightning_component_bundles':lightning_component_bundles,
        'flows': flows,
        'triggers': triggers,
        'custom_objects':custom_objects,
        'custom_permission_sets':custom_permission_sets,
        'roles':roles,
        'Custom_Notification_Types':Custom_Notification_Types,
        'Profiles':Profiles,
        'ContentAssets':ContentAssets,
        'MatchingRules':MatchingRules,
        'DuplicateRules':DuplicateRules,
        'EmailTemplates':EmailTemplates,
        'ProcessDefinitions':ProcessDefinitions,
        'Groups':Groups,
        'StaticResources':StaticResources,
        'flexipages':flexipages,
        'workFlow_alerts':workFlow_alerts,
        'WorkFlow_FieldUpdates':WorkFlow_FieldUpdates,
        'page_layouts':page_layouts,
        'Custom_Applications':Custom_Applications,
        'global_value_sets':global_value_sets,
        'custom_tabs':custom_tabs,
        'custom_labels':custom_labels,
        'class_details':class_details,
        'trigger_details':trigger_details,
        'VeevaObjects':VeevaObjects
        
    }
            

        # print("records_data",records_data)

        return jsonify(records_data)

if __name__ == '__main__':
    app.run(debug=True,host="0.0.0.0",port=5000)  



