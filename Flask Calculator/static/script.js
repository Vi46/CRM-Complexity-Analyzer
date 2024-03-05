let globalData;
const tableId = 'detailTable';
const table = document.getElementById('detailTable');

function tableClick() {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    var div4 = document.getElementById("div4");


    var computedStyleDiv1 = window.getComputedStyle(div1).getPropertyValue('display');
    var computedStyleDiv3 = window.getComputedStyle(div3).getPropertyValue('display');
    var computedStyleDiv4 = window.getComputedStyle(div4).getPropertyValue('display');

    if (computedStyleDiv1 === "block" || computedStyleDiv3 === "block" || computedStyleDiv4 === "block") {
        console.log('tableClick');
        div1.style.display = "none";
        div2.style.display = "block";
        div3.style.display = "none";
        div4.style.display = "none";
    }
}

function gridClick() {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    var div4 = document.getElementById("div4");

    var computedStyleDiv2 = window.getComputedStyle(div2).getPropertyValue('display');
    var computedStyleDiv3 = window.getComputedStyle(div3).getPropertyValue('display');
    var computedStyleDiv4 = window.getComputedStyle(div4).getPropertyValue('display');

    
    if (computedStyleDiv2 === "block" || computedStyleDiv3 === "block" || computedStyleDiv4 === "block") {
        console.log('gridClick');
        div1.style.display = "block";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
    }
}

function treeMapCountViewClick(){
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    var div4 = document.getElementById("div4");

    var treemapHtml = "{{ treemap_html|safe }}";

    // Render the treemap using Plotly.js
    //document.getElementById('treemap-container').innerHTML = treemapHtml;
    console.log("treemapHtml---->",treemapHtml)

    var computedStyleDiv1 = window.getComputedStyle(div1).getPropertyValue('display');
    var computedStyleDiv2 = window.getComputedStyle(div2).getPropertyValue('display');
    var computedStyleDiv4 = window.getComputedStyle(div4).getPropertyValue('display');

    if (computedStyleDiv1 === "block" || computedStyleDiv2 === "block" || computedStyleDiv4==="block") {
        console.log('treeMapClick');        
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display ="block";
        div4.style.display ="none";
    }
}

function treeMapComplexityViewClick(){
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    var div4 = document.getElementById("div4");

    var treemapHtml = "{{ treemapComplexity_html|safe }}";

    // Render the treemap using Plotly.js
    //document.getElementById('treemap-container').innerHTML = treemapHtml;
    console.log("treemapHtml---->",treemapHtml)

    var computedStyleDiv1 = window.getComputedStyle(div1).getPropertyValue('display');
    var computedStyleDiv2 = window.getComputedStyle(div2).getPropertyValue('display');
    var computedStyleDiv3 = window.getComputedStyle(div3).getPropertyValue('display');

    if (computedStyleDiv1 === "block" || computedStyleDiv2 === "block" || computedStyleDiv3 === "block") {
        console.log('treeMapClick');        
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display ="none";
        div4.style.display ="block";
}
}

function exportCSV() {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Type,Count\n";
    
    const counts = {
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
    };

    // Iterate over counts and add them to the CSV content
    for (const [type, count] of Object.entries(counts)) {
      csvContent += `${type},${count}\n`;
    }

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "export.csv");
    document.body.appendChild(link);

    link.click();
  }

  //new function
  function fetchRecords() {
    $.get('/get_records', function (data) {
        // Handle the data as needed
        globalData = data;

        
        
        // For demonstration, you can update the UI here
        // Replace this with your logic to update the UI
        // $('#recordCount').text('Apex Class Count: ' + data.apex_classes.length);
        // ... update other UI elements
    });
}

$(document).ready(function () {
    fetchRecords();
});

function clearTable() {
    // Get reference to the table
    var table = document.getElementById('detailTable');

    // Clear existing rows
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
}

function clickApexClass() {
    document.getElementById('componentNameHeader').textContent = "Apex Classes";
    clearTable();
    apexClassesArray = globalData.apex_classes;
    classDetailsArray = globalData.class_details;
    console.log('globaldata--->',globalData);
    console.log('apexdata--->',apexClassesArray);

        // Loop through your classes and populate the table rows
        classDetailsArray.forEach((apexClass, index) => {
            const row = table.insertRow(-1); // -1 inserts at the end
            console.log('apexclass---->',apexClass);
            console.log('index---->',index);
            
            const cellName = row.insertCell(0);
            
            cellName.textContent = apexClass.class_name;

            const cellId = row.insertCell(1);
            cellId.textContent = apexClass.complexity_level;


        
            console.log('classDetailsArray---->',classDetailsArray)
        
        

        });
    
}

function clickFlow(){
    document.getElementById('componentNameHeader').textContent = "Flows";
    clearTable();
    flowArray = globalData.flows;
    //console.log('globaldata--->',globalData);
    console.log('flowdata--->',flowArray);

    

        // Loop through your classes and populate the table rows
        flowArray.forEach((flow, index) => {
            const row = table.insertRow(-1); // -1 inserts at the end
            console.log('apexclass---->',flow);
            console.log('index---->',index);
            
            const cellName = row.insertCell(0);
            cellName.textContent = flow.Label;

            const cellId = row.insertCell(1);
            cellId.textContent = index + 1;

        });
}

function clickApexTrigger(){
    document.getElementById('componentNameHeader').textContent = "Apex Triggers";
    clearTable();
    apexTriggerArray = globalData.triggers;
    triggerArray = globalData.trigger_details;
    //console.log('globaldata--->',globalData);
    console.log('apexTriggerArray--->',apexTriggerArray);

        // Loop through your classes and populate the table rows
        triggerArray.forEach((apexClass, index) => {
            const row = table.insertRow(-1); // -1 inserts at the end
            console.log('apexclass---->',apexClass);
            console.log('index---->',index);
            
            const cellName = row.insertCell(0);
            
            cellName.textContent = apexClass.class_name;

            const cellId = row.insertCell(1);
            cellId.textContent = apexClass.complexity_level;

        });
}

function clickLWC(){
    document.getElementById('componentNameHeader').textContent = "Lightning Components";
    clearTable();
    lwcArray = globalData.lightning_component_bundles;
    //console.log('globaldata--->',globalData);
    console.log('apexTriggerArray--->',lwcArray);

        // Loop through your classes and populate the table rows
        lwcArray.forEach((lwc, index) => {
            const row = table.insertRow(-1); // -1 inserts at the end
            console.log('trigger---->',lwc);
            console.log('index---->',index);
            
            const cellName = row.insertCell(0);
            cellName.textContent = lwc.DeveloperName;

            const cellId = row.insertCell(1);
            cellId.textContent = index + 1;

        });
}

function clickCustomObjects(){
    document.getElementById('componentNameHeader').textContent = "Custom Objects";
    clearTable();
    customObjectsArray = globalData.custom_objects;
    //console.log('globaldata--->',globalData);
    console.log('customObjectsArray--->',customObjectsArray);

        // Loop through your classes and populate the table rows
        customObjectsArray.forEach((customObjects, index) => {
            const row = table.insertRow(-1); // -1 inserts at the end
            console.log('customObjects---->',customObjects);
            console.log('index---->',index);
            
            const cellName = row.insertCell(0);
            cellName.textContent = customObjects.Label;

            const cellId = row.insertCell(1);
            cellId.textContent = index + 1;

        });

}

function clickCustomPermissionSets(){
    document.getElementById('componentNameHeader').textContent = "Permission Sets";
    clearTable();
    customPermissionSetsArray = globalData.custom_permission_sets;
    //console.log('globaldata--->',globalData);
    console.log('customPermissionSetsArray--->',customPermissionSetsArray);

        // Loop through your classes and populate the table rows
        customPermissionSetsArray.forEach((customPermissionSet, index) => {
            const row = table.insertRow(-1); // -1 inserts at the end
            console.log('customPermissionSet---->',customPermissionSet);
            console.log('index---->',index);
            
            const cellName = row.insertCell(0);
            cellName.textContent = customPermissionSet.Label;

            const cellId = row.insertCell(1);
            cellId.textContent = index + 1;

        });

}

function clickCustomLabels(){
    document.getElementById('componentNameHeader').textContent = "Custom Labels";
    clearTable();
    CustomLabelsArray = globalData.custom_labels;
    //console.log('globaldata--->',globalData);
    console.log('CustomLabelsArray--->',CustomLabelsArray);

        // Loop through your classes and populate the table rows
        CustomLabelsArray.forEach((customLabel, index) => {
            const row = table.insertRow(-1); // -1 inserts at the end
            console.log('trigger---->',customLabel);
            console.log('index---->',index);
            
            const cellName = row.insertCell(0);
            cellName.textContent = customLabel.Name;

            const cellId = row.insertCell(1);
            cellId.textContent = index + 1;

        });

}

function clickCustomTabs(){
    document.getElementById('componentNameHeader').textContent = "Custom Tabs";
    clearTable();
    customTabsArray = globalData.custom_tabs;
    //console.log('globaldata--->',globalData);
    console.log('customTabsArray--->',customTabsArray);

        // Loop through your classes and populate the table rows
        customTabsArray.forEach((customTab, index) => {
            const row = table.insertRow(-1); // -1 inserts at the end
            console.log('customTab---->',customTab);
            console.log('index---->',index);
            
            const cellName = row.insertCell(0);
            if(customTab.DeveloperName == null){
                cellName.textContent = 'Empty';
            } else{
                cellName.textContent = customTab.DeveloperName;
            }

            const cellId = row.insertCell(1);
            cellId.textContent = index + 1;

        });

}

function clickRoles(){
    document.getElementById('componentNameHeader').textContent = "Roles";
    clearTable();
    rolesArray = globalData.roles;
    //console.log('globaldata--->',globalData);
    console.log('apexTriggerArray--->',rolesArray);

        // Loop through your classes and populate the table rows
        rolesArray.forEach((role, index) => {
            const row = table.insertRow(-1); // -1 inserts at the end
            console.log('trigger---->',role);
            console.log('index---->',index);
            
            const cellName = row.insertCell(0);
            cellName.textContent = role.Name;

            const cellId = row.insertCell(1);
            cellId.textContent = index + 1;

        });

}

function clickGlobalValueSets(){
    document.getElementById('componentNameHeader').textContent = "Global Value Sets";
    clearTable();
    globalValueSetsArray = globalData.global_value_sets;
    //console.log('globaldata--->',globalData);
    console.log('globalValueSetsArray--->',globalValueSetsArray);

        // Loop through your classes and populate the table rows
        globalValueSetsArray.forEach((globalValueSet, index) => {
            const row = table.insertRow(-1); // -1 inserts at the end
            console.log('globalValueSet---->',globalValueSet);
            console.log('index---->',index);
            
            const cellName = row.insertCell(0);
            cellName.textContent = globalValueSet.DeveloperName;

            const cellId = row.insertCell(1);
            cellId.textContent = index + 1;

        });

}

function clickCustomApplications(){
    document.getElementById('componentNameHeader').textContent = "Custom Applications";
    clearTable();
    customApplicationsArray = globalData.Custom_Applications;
    //console.log('globaldata--->',globalData);
    console.log('customApplicationsArray--->',customApplicationsArray);

        // Loop through your classes and populate the table rows
        customApplicationsArray.forEach((customApplication, index) => {
            const row = table.insertRow(-1); // -1 inserts at the end
            console.log('customApplication---->',customApplication);
            console.log('index---->',index);
            
            const cellName = row.insertCell(0);
            cellName.textContent = customApplication.DeveloperName;

            const cellId = row.insertCell(1);
            cellId.textContent = index + 1;

        });

}

function clickCustomNotificationTypes(){
    document.getElementById('componentNameHeader').textContent = "Custom Notification Types";
    clearTable();
    customNotificationtypeArray = globalData.Custom_Notification_Types;
    console.log('customNotificationtypeArray--->',customNotificationtypeArray);
    customNotificationtypeArray.forEach((customNotificationtype, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('customNotificationtype---->',customNotificationtype);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent = customNotificationtype.Name;

      const cellId = row.insertCell(1);
      cellId.textContent = index + 1;


  });
}
  
function clickPageLayout(){
    document.getElementById('componentNameHeader').textContent = "Page Layouts";
    clearTable();
    pageLayoutArray = globalData.page_layouts;
    console.log('pageLayoutArray--->',pageLayoutArray);
    pageLayoutArray.forEach((pageLayout, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('pageLayout---->',pageLayout);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent = pageLayout.Name;

      const cellId = row.insertCell(1);
      cellId.textContent = index + 1;


  });
}
  
  function clickProfiles(){
    document.getElementById('componentNameHeader').textContent = "Profiles";
    clearTable();
    profilesArray = globalData.Profiles;
    console.log('profilesArray--->',profilesArray);
    profilesArray.forEach((profile, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('profile---->',profile);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent = profile.Name;

      const cellId = row.insertCell(1);
      cellId.textContent = index + 1;


  });
  
  }
  
  function clickWorkFlowFieldUpdates(){
    document.getElementById('componentNameHeader').textContent = "Work-flow Field Updates";
    clearTable();
    workFlow_FieldUpdatesArray = globalData.WorkFlow_FieldUpdates;
    console.log('workFlow_FieldUpdatesArray--->',workFlow_FieldUpdatesArray);
    workFlow_FieldUpdatesArray.forEach((workFlow_FieldUpdate, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('workFlow_FieldUpdates---->',workFlow_FieldUpdate);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent = workFlow_FieldUpdate.Name;

      const cellId = row.insertCell(1);
      cellId.textContent = index + 1;


  });
  
  }
  
  function clickWorkFlowAlerts(){
    document.getElementById('componentNameHeader').textContent = "Work-flow Alerts";
    clearTable();
    workFlow_alertsArray = globalData.workFlow_alerts;
    console.log('workFlow_alertsArray--->',workFlow_alertsArray);
    workFlow_alertsArray.forEach((workFlow_alertsUpdate, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('workFlow_alertsUpdate---->',workFlow_alertsUpdate);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent = workFlow_alertsUpdate.DeveloperName;

      const cellId = row.insertCell(1);
      cellId.textContent = index + 1;


  });
  
  }
  
  function clickContentAssets(){
    document.getElementById('componentNameHeader').textContent = "Content Assets";
    clearTable();
    contentAssetsArray = globalData.ContentAssets;
    console.log('contentAssetsArray--->',contentAssetsArray);
    contentAssetsArray.forEach((contentAsset, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('contentAsset---->',contentAsset);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent = contentAsset.DeveloperName;

      const cellId = row.insertCell(1);
      cellId.textContent = index + 1;


  });
  
  }
  
  function clickFlexipages(){
    document.getElementById('componentNameHeader').textContent = "Flexipages";
    clearTable();
    flexipagesArray = globalData.flexipages;
    console.log('flexipagesArray--->',flexipagesArray);
    flexipagesArray.forEach((flexipage, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('flexipage---->',flexipage);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent = flexipage.DeveloperName;

      const cellId = row.insertCell(1);
      cellId.textContent = index + 1;


  });
  
  }
  
  function clickDuplicateRules(){
    document.getElementById('componentNameHeader').textContent = "Duplicate Rules";
    clearTable();
    duplicateRulesArray = globalData.DuplicateRules;
    console.log('duplicateRulesArray--->',duplicateRulesArray);
    duplicateRulesArray.forEach((duplicateRule, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('duplicateRule---->',duplicateRule);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent = duplicateRule.MasterLabel;

      const cellId = row.insertCell(1);
      cellId.textContent = index + 1;


  });
  
  
  }
  
  function clickMatchingRules(){
    document.getElementById('componentNameHeader').textContent = "Matching Rules";
    clearTable();
    matchingRulesArray = globalData.MatchingRules;
    console.log('matchingRulesArray--->',matchingRulesArray);
    matchingRulesArray.forEach((matchingRules, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('matchingRules---->',matchingRules);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent = matchingRules.DeveloperName;

      const cellId = row.insertCell(1);
      cellId.textContent = index + 1;


  });
    
  
  }
  
  function clickEmailtemplates(){
    document.getElementById('componentNameHeader').textContent = "Email Templates";
    clearTable();
    emailTemplatesArray = globalData.EmailTemplates;
    console.log('emailTemplatesArray--->',emailTemplatesArray);
    emailTemplatesArray.forEach((emailTemplate, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('emailTemplate---->',emailTemplate);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent = emailTemplate.DeveloperName;

      const cellId = row.insertCell(1);
      cellId.textContent = index + 1;


  });
  
  }
  
  function clickProcessBuilders(){
    document.getElementById('componentNameHeader').textContent = "Process Builders";
    clearTable();
    processBuilderArray = globalData.ProcessDefinitions;
    console.log('processBuilderArray--->',processBuilderArray);
    processBuilderArray.forEach((ProcessBuilder, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('ProcessBuilder---->',ProcessBuilder);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent = ProcessBuilder.DeveloperName;

      const cellId = row.insertCell(1);
      cellId.textContent = index + 1;


  });
  
  }
  
  function clickQueues(){
    document.getElementById('componentNameHeader').textContent = "Queues";
    clearTable();
    groupsArray = globalData.Groups;
    console.log('groupsArray--->',groupsArray);
    groupsArray.forEach((group, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('group---->',group);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent = group.Name;

      const cellId = row.insertCell(1);
      cellId.textContent = index + 1;


  });
  
  }
  
  function clickStaticResources(){
    document.getElementById('componentNameHeader').textContent = "Static Resources";
    clearTable();
    staticResourcesArray = globalData.StaticResources;
    console.log('staticResourcesArray--->',staticResourcesArray);
    staticResourcesArray.forEach((StaticResource, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('StaticResource---->',StaticResource);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent =StaticResource.DeveloperName;

      const cellId = row.insertCell(1);
      cellId.textContent = index + 1;


  });
  
  }

function clickVeevaObjects(){
    document.getElementById('componentNameHeader').textContent = "Veeva Object";
    clearTable();
    veevaObjectArray = globalData.VeevaObjects;
    console.log('staticResourcesArray--->',veevaObjectArray);
    veevaObjectArray.forEach((StaticResource, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('StaticResource---->',StaticResource);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent =StaticResource.Label;

      const cellId = row.insertCell(1);
      cellId.textContent = index + 1;


  });

  }



   
