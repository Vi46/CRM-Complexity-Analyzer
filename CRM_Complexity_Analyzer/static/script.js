let globalData;
const tableId = 'detailTable';
const table = document.getElementById('detailTable');
var complexityIndicator = document.getElementById("complexity_indicator");                
var gridDetailsContainer = document.getElementById("grid-details-container");




function tableClick() {
    // document.getElementById("tableBtn").style.backgroundColor = "blue";
    // document.getElementById("graphBtn").style.border = "none";
    // document.getElementById("gridBtn").style.border = "none";
    // document.getElementById("treemapBtn").style.border = "none";
    

    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    var div4 = document.getElementById("div4");
    var div5 = document.getElementById("div5");

    var computedStyleDiv1 = window.getComputedStyle(div1).getPropertyValue('display');
    var computedStyleDiv3 = window.getComputedStyle(div3).getPropertyValue('display');
    var computedStyleDiv4 = window.getComputedStyle(div4).getPropertyValue('display');
    var computedStyleDiv5 = window.getComputedStyle(div5).getPropertyValue('display');

    if (computedStyleDiv1 === "block" || computedStyleDiv3 === "block" || computedStyleDiv4 === "block" || computedStyleDiv5 === "block") {
        console.log('tableClick');
        div1.style.display = "none";
        div2.style.display = "block";
        div3.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "none";
    }
}

function gridClick() {

    // document.getElementById("tableBtn").style.border = "none";
    // document.getElementById("graphBtn").style.border = "none";
    // document.getElementById("gridBtn").style.border = "2px solid";
    // document.getElementById("treemapBtn").style.border = "none";
      

    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    var div4 = document.getElementById("div4");
    var div5 = document.getElementById("div5");


    var computedStyleDiv2 = window.getComputedStyle(div2).getPropertyValue('display');
    var computedStyleDiv3 = window.getComputedStyle(div3).getPropertyValue('display');
    var computedStyleDiv4 = window.getComputedStyle(div4).getPropertyValue('display');
    var computedStyleDiv5 = window.getComputedStyle(div5).getPropertyValue('display');
    
    // complexityIndicator.style.display="block";
       gridDetailsContainer.style.display ="none";
    if (computedStyleDiv2 === "block" || computedStyleDiv3 === "block" || computedStyleDiv4 === "block" || computedStyleDiv5 ==="block") {
        console.log('gridClick');
        div1.style.display = "block";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "none";
        
    }
}

function treeMapCountViewClick(){
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    var div4 = document.getElementById("div4");
    var div5 = document.getElementById("div5");

    var treemapHtml = "{{ treemap_html|safe }}";

    // Render the treemap using Plotly.js
    //document.getElementById('treemap-container').innerHTML = treemapHtml;
    console.log("treemapHtml---->",treemapHtml)

    var computedStyleDiv1 = window.getComputedStyle(div1).getPropertyValue('display');
    var computedStyleDiv2 = window.getComputedStyle(div2).getPropertyValue('display');
    var computedStyleDiv4 = window.getComputedStyle(div4).getPropertyValue('display');
    var computedStyleDiv5 = window.getComputedStyle(div5).getPropertyValue('display');

    if (computedStyleDiv1 === "block" || computedStyleDiv2 === "block" || computedStyleDiv4==="block"|| computedStyleDiv5==="block") {
        console.log('treeMapClick');        
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display ="block";
        div4.style.display ="none";
        div5.style.display ="none";
    }
}

function treeMapComplexityViewClick(){
  // document.getElementById("tableBtn").style.border = "none";
  //   document.getElementById("graphBtn").style.border = "none";
  //   document.getElementById("gridBtn").style.border = "none";
  //   document.getElementById("treemapBtn").style.border = "2px solid";
    

    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    var div4 = document.getElementById("div4");
    var div5 = document.getElementById("div5");

    var treemapHtml = "{{ treemapComplexity_html|safe }}";

    // Render the treemap using Plotly.js
    //document.getElementById('treemap-container').innerHTML = treemapHtml;
    console.log("treemapHtml---->",treemapHtml)

    var computedStyleDiv1 = window.getComputedStyle(div1).getPropertyValue('display');
    var computedStyleDiv2 = window.getComputedStyle(div2).getPropertyValue('display');
    var computedStyleDiv3 = window.getComputedStyle(div3).getPropertyValue('display');
    var computedStyleDiv5 = window.getComputedStyle(div5).getPropertyValue('display');

    if (computedStyleDiv1 === "block" || computedStyleDiv2 === "block" || computedStyleDiv3 === "block"|| computedStyleDiv5 === "block") {
        console.log('treeMapClick');        
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display ="none";
        div4.style.display ="block";
        div5.style.display = "none";
}
}

function graphClick(){
  // document.getElementById("tableBtn").style.border = "none";
  //   document.getElementById("graphBtn").style.border = "2px solid";
  //   document.getElementById("gridBtn").style.border = "none";
  //   document.getElementById("treemapBtn").style.border = "none";
    

    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    var div4 = document.getElementById("div4");
    var div5 = document.getElementById("div5");


    var computedStyleDiv1 = window.getComputedStyle(div1).getPropertyValue('display');
    var computedStyleDiv2 = window.getComputedStyle(div2).getPropertyValue('display');
    var computedStyleDiv3 = window.getComputedStyle(div3).getPropertyValue('display');
    var computedStyleDiv4 = window.getComputedStyle(div4).getPropertyValue('display');

    
    if (computedStyleDiv1==="block"||computedStyleDiv2 === "block" || computedStyleDiv3 === "block" || computedStyleDiv4 === "block") {
        console.log('gridClick');
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "block";
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


        var overallComplexityElement = document.getElementById("overall_complexity");
        
        var extractedValue = overallComplexityElement.getAttribute("data-overall-rating");
        
        console.log("Extracted Value:", extractedValue);var divId = document.getElementById("overall_complexity");
        var divId = document.getElementById("overall_complexity");
        if(extractedValue ==="Low" ){
          divId.style.backgroundColor = "#47B649";
        }else if(extractedValue ==="Medium"){
          divId.style.backgroundColor = "#FFBF00";
        }else if(extractedValue ==="High"){
          divId.style.backgroundColor = "#FF211F";
        }
      var  org_typeId = document.getElementById("org_typeId");
      var orgType = org_typeId.innerHTML.trim();

      if(orgType==="https://test.salesforce.com"){
        org_typeId.innerHTML = '<img src="../static/sandbox.png" alt="User Icon" width="25" height="25" style="vertical-align: middle; margin-right: 3px;"></img>Sandbox'; 
        
      }else{
        org_typeId.innerHTML = '<img src="../static/production.png" alt="User Icon" width="25" height="25" style="vertical-align: middle; margin-right: 5px;"></img>Production';
      }
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
  var item = document.querySelector('.item'); // Changed to use class selector
  if (!item) {
      console.error("Element with class 'item' not found.");
      return;
  }

  var classMetricsString = item.getAttribute('data-class-metrics');
  if (!classMetricsString) {
      console.error("Data attribute 'data-class-metrics' is missing.");
      return;
  }

  var classMetrics = JSON.parse(classMetricsString.replace(/'/g, '"')); // Parse the string into an array

  document.getElementById('componentNameHeader').textContent = "Apex Classes";
  document.getElementById('complexityLevelHeader').style.display = "block";
  gridDetailsContainer.style.display = "block";
  clearTable();

  classDetailsArray = globalData.class_details;

  // Loop through your classes and populate the table rows
  classDetailsArray.forEach((apexClass, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      
      const cellName = row.insertCell(0);
      cellName.textContent = apexClass.class_name;

      const cellId = row.insertCell(1);
      cellId.textContent = apexClass.complexity_level;
      if (cellId.textContent === 'Low') {
          cellId.style.backgroundColor = '#47B649';
      } else if (cellId.textContent === 'Medium') {
          cellId.style.backgroundColor = '#FFBF00';
      } else if (cellId.textContent === 'High') {
          cellId.style.backgroundColor = '#FF211F';
      }

      // Add click event listener to each row
      row.addEventListener('click', () => {
        // Display custom popup with the information
        for (let i = 0; i < classMetrics.length; i++) {
            const keyName = Object.keys(classMetrics[i])[0];
            if (apexClass.class_name === classMetrics[i][keyName].class_name) {
                var popupContent = document.getElementById('popupContent');
                popupContent.innerHTML = 
                '<h1>Complexity Definition</h1>'+ '<br>' +
                '<b>Class Name:</b>' + '<span class="popSpan">'+' '+apexClass.class_name+'</span>' + '<br>' +
                '<b>Conditional Count:</b> ' + classMetrics[i][keyName].conditional_count + '<br>' +
                '<b>Dml Query Count:</b>' + classMetrics[i][keyName].dml_query_count + '<br>' +
                '<b>Loop Count:</b>' + classMetrics[i][keyName].loop_count + '<br>' +
                '<b>Nested If Count:</b>' + classMetrics[i][keyName].nested_if_count + '<br>' +
                '<b>Nested Loop Count:</b>' + classMetrics[i][keyName].nested_loop_count;+'<br>'+
                '<b>Combined Count:</b>' + classMetrics[i][keyName].combined_count  
                // Show the custom popup
                var customPopup = document.getElementById('customPopup');
                customPopup.style.display = 'block';
                break;
            }
        }
    });

  });
}

function closePopup() {
  // Hide the custom popup when the close button is clicked
  var customPopup = document.getElementById('customPopup');
  customPopup.style.display = 'none';
}

function clickFlow(){
    document.getElementById('componentNameHeader').textContent = "Flows";
    document.getElementById('complexityLevelHeader').style.display = "none";
    // complexityIndicator.style.display = "none";
    gridDetailsContainer.style.display ="block";
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

            // const cellId = row.insertCell(1);
            // cellId.textContent = index + 1;

        });
}

function clickApexTrigger(){
    var item = document.getElementById('item');
    var classMetricsString =item.getAttribute('data-trigger-metrics');
    var classMetrics = JSON.parse(classMetricsString.replace(/'/g, '"')); // Parse the string into an array
    console.log('classMetrics--->', classMetrics);
    var keyName = 'ChangePasswordController';
    
    console.log('classMetrics',classMetrics[0][keyName]);

    
    
    document.getElementById('componentNameHeader').textContent = "Apex Triggers";
    document.getElementById('complexityLevelHeader').style.display = "block";
    // complexityIndicator.style.display = "none";
    gridDetailsContainer.style.display ="block";
    clearTable();
    //apexTriggerArray = globalData.triggers;
    triggerArray = globalData.trigger_details;
    //console.log('globaldata--->',globalData);
    console.log('apexTriggerArray--->',triggerArray);

        // Loop through your classes and populate the table rows
        triggerArray.forEach((trigger, index) => {
          const row = table.insertRow(-1); // -1 inserts at the end
          console.log('trigger---->', trigger);
          console.log('index---->', index);
      
          const cellName = row.insertCell(0);
      
          cellName.textContent = trigger.class_name;
      
          const cellId = row.insertCell(1);
          cellId.textContent = trigger.complexity_level;
          if (cellId.textContent === 'Low') {
              cellId.style.backgroundColor = '#47B649';
          } else if (cellId.textContent === 'Medium') {
              cellId.style.backgroundColor = '#FFBF00';
          } else if (cellId.textContent === 'High') {
              cellId.style.backgroundColor = '#FF211F';
          }
      
          row.addEventListener('click', () => {
              // Display popup notification
              for (let i = 0; i < classMetrics.length; i++) {
                  const keyName = Object.keys(classMetrics[i])[0];
                  if (trigger.class_name === classMetrics[i][keyName].class_name) {
                      alert('Combined Count =' + classMetrics[i][keyName].combined_count + '\n' +
                          'Conditional Count=' + classMetrics[i][keyName].conditional_count + '\n' +
                          'Dml Query Count=' + classMetrics[i][keyName].dml_query_count + '\n' +
                          'Loop Count=' + classMetrics[i][keyName].loop_count + '\n' +
                          'Nested If Count=' + classMetrics[i][keyName].nested_if_count + '\n' +
                          'Nested Loop Count=' + classMetrics[i][keyName].nested_loop_count);
                      break;
                  }
              }
          });
      });
    }

function clickLWC(){
    document.getElementById('componentNameHeader').textContent = "Lightning Components";
    document.getElementById('complexityLevelHeader').style.display = "none";
    // complexityIndicator.style.display = "none";
    gridDetailsContainer.style.display ="block";
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

            // const cellId = row.insertCell(1);
            // cellId.textContent = index + 1;

        });
}

function clickCustomObjects(){
    document.getElementById('componentNameHeader').textContent = "Custom Objects";
    document.getElementById('complexityLevelHeader').style.display = "none";
    // complexityIndicator.style.display = "none";
    gridDetailsContainer.style.display ="block";
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

            // const cellId = row.insertCell(1);
            // cellId.textContent = index + 1;

        });

}

function clickCustomPermissionSets(){
    document.getElementById('componentNameHeader').textContent = "Permission Sets";
    document.getElementById('complexityLevelHeader').style.display = "none";
    // complexityIndicator.style.display = "none";
    gridDetailsContainer.style.display ="block";
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

            // const cellId = row.insertCell(1);
            // cellId.textContent = index + 1;

        });

}

function clickCustomLabels(){
    document.getElementById('componentNameHeader').textContent = "Custom Labels";
    document.getElementById('complexityLevelHeader').style.display = "none";
    // complexityIndicator.style.display = "none";
    gridDetailsContainer.style.display ="block";
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

            // const cellId = row.insertCell(1);
            // cellId.textContent = index + 1;

        });

}

function clickCustomTabs(){
    document.getElementById('componentNameHeader').textContent = "Custom Tabs";
    document.getElementById('complexityLevelHeader').style.display = "none";
    // complexityIndicator.style.display = "none";
    gridDetailsContainer.style.display ="block";
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

            // const cellId = row.insertCell(1);
            // cellId.textContent = index + 1;

        });

}

function clickRoles(){
    document.getElementById('componentNameHeader').textContent = "Roles";
    document.getElementById('complexityLevelHeader').style.display = "none";
    // complexityIndicator.style.display = "none";
    gridDetailsContainer.style.display ="block";
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

            // const cellId = row.insertCell(1);
            // cellId.textContent = index + 1;

        });

}

function clickGlobalValueSets(){
    document.getElementById('componentNameHeader').textContent = "Global Value Sets";
    document.getElementById('complexityLevelHeader').style.display = "none";
    // complexityIndicator.style.display = "none";
    gridDetailsContainer.style.display ="block";
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

            // const cellId = row.insertCell(1);
            // cellId.textContent = index + 1;

        });

}

function clickCustomApplications(){
    document.getElementById('componentNameHeader').textContent = "Custom Applications";
    document.getElementById('complexityLevelHeader').style.display = "none";
    // complexityIndicator.style.display = "none";
    gridDetailsContainer.style.display ="block";
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

            // const cellId = row.insertCell(1);
            // cellId.textContent = index + 1;

        });

}

function clickCustomNotificationTypes(){
    document.getElementById('componentNameHeader').textContent = "Custom Notification Types";
    document.getElementById('complexityLevelHeader').style.display = "none";
    // complexityIndicator.style.display = "none";
    gridDetailsContainer.style.display ="block";
    clearTable();
    customNotificationtypeArray = globalData.Custom_Notification_Types;
    console.log('customNotificationtypeArray--->',customNotificationtypeArray);
    customNotificationtypeArray.forEach((customNotificationtype, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('customNotificationtype---->',customNotificationtype);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent = customNotificationtype.Name;

    //   const cellId = row.insertCell(1);
    //   cellId.textContent = index + 1;


  });
}
  
function clickPageLayout(){
    document.getElementById('componentNameHeader').textContent = "Page Layouts";
    document.getElementById('complexityLevelHeader').style.display = "none";
    // complexityIndicator.style.display = "none";
    gridDetailsContainer.style.display ="block";
    clearTable();
    pageLayoutArray = globalData.page_layouts;
    console.log('pageLayoutArray--->',pageLayoutArray);
    pageLayoutArray.forEach((pageLayout, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('pageLayout---->',pageLayout);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent = pageLayout.Name;

    //   const cellId = row.insertCell(1);
    //   cellId.textContent = index + 1;


  });
}
  
  function clickProfiles(){
    document.getElementById('componentNameHeader').textContent = "Profiles";
    document.getElementById('complexityLevelHeader').style.display = "none";
    // complexityIndicator.style.display = "none";
    gridDetailsContainer.style.display ="block";
    clearTable();
    profilesArray = globalData.Profiles;
    console.log('profilesArray--->',profilesArray);
    profilesArray.forEach((profile, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('profile---->',profile);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent = profile.Name;

    //   const cellId = row.insertCell(1);
    //   cellId.textContent = index + 1;


  });
  
  }
  
  function clickWorkFlowFieldUpdates(){
    document.getElementById('componentNameHeader').textContent = "Work-flow Field Updates";
    document.getElementById('complexityLevelHeader').style.display = "none";
    // complexityIndicator.style.display = "none";
    gridDetailsContainer.style.display ="block";
    clearTable();
    workFlow_FieldUpdatesArray = globalData.WorkFlow_FieldUpdates;
    console.log('workFlow_FieldUpdatesArray--->',workFlow_FieldUpdatesArray);
    workFlow_FieldUpdatesArray.forEach((workFlow_FieldUpdate, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('workFlow_FieldUpdates---->',workFlow_FieldUpdate);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent = workFlow_FieldUpdate.Name;

    //   const cellId = row.insertCell(1);
    //   cellId.textContent = index + 1;


  });
  
  }
  
  function clickWorkFlowAlerts(){
    document.getElementById('componentNameHeader').textContent = "Work-flow Alerts";
    document.getElementById('complexityLevelHeader').style.display = "none";
    // complexityIndicator.style.display = "none";
    gridDetailsContainer.style.display ="block";
    clearTable();
    workFlow_alertsArray = globalData.workFlow_alerts;
    console.log('workFlow_alertsArray--->',workFlow_alertsArray);
    workFlow_alertsArray.forEach((workFlow_alertsUpdate, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('workFlow_alertsUpdate---->',workFlow_alertsUpdate);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent = workFlow_alertsUpdate.DeveloperName;

    //   const cellId = row.insertCell(1);
    //   cellId.textContent = index + 1;


  });
  
  }
  
  function clickContentAssets(){
    document.getElementById('componentNameHeader').textContent = "Content Assets";
    document.getElementById('complexityLevelHeader').style.display = "none";
    // complexityIndicator.style.display = "none";
    gridDetailsContainer.style.display ="block";
    clearTable();
    contentAssetsArray = globalData.ContentAssets;
    console.log('contentAssetsArray--->',contentAssetsArray);
    contentAssetsArray.forEach((contentAsset, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('contentAsset---->',contentAsset);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent = contentAsset.DeveloperName;

    //   const cellId = row.insertCell(1);
    //   cellId.textContent = index + 1;


  });
  
  }
  
  function clickFlexipages(){
    document.getElementById('componentNameHeader').textContent = "Flexipages";
    document.getElementById('complexityLevelHeader').style.display = "none";
    // complexityIndicator.style.display = "none";
    gridDetailsContainer.style.display ="block";
    clearTable();
    flexipagesArray = globalData.flexipages;
    console.log('flexipagesArray--->',flexipagesArray);
    flexipagesArray.forEach((flexipage, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('flexipage---->',flexipage);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent = flexipage.DeveloperName;

    //   const cellId = row.insertCell(1);
    //   cellId.textContent = index + 1;


  });
  
  }
  
  function clickDuplicateRules(){
    document.getElementById('componentNameHeader').textContent = "Duplicate Rules";
    document.getElementById('complexityLevelHeader').style.display = "none";
    // complexityIndicator.style.display = "none";
    gridDetailsContainer.style.display ="block";
    clearTable();
    duplicateRulesArray = globalData.DuplicateRules;
    console.log('duplicateRulesArray--->',duplicateRulesArray);
    duplicateRulesArray.forEach((duplicateRule, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('duplicateRule---->',duplicateRule);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent = duplicateRule.MasterLabel;

    //   const cellId = row.insertCell(1);
    //   cellId.textContent = index + 1;


  });
  
  
  }
  
  function clickMatchingRules(){
    document.getElementById('componentNameHeader').textContent = "Matching Rules";
    document.getElementById('complexityLevelHeader').style.display = "none";
    // complexityIndicator.style.display = "none";
    gridDetailsContainer.style.display ="block";
    clearTable();
    matchingRulesArray = globalData.MatchingRules;
    console.log('matchingRulesArray--->',matchingRulesArray);
    matchingRulesArray.forEach((matchingRules, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('matchingRules---->',matchingRules);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent = matchingRules.DeveloperName;

    //   const cellId = row.insertCell(1);
    //   cellId.textContent = index + 1;


  });
    
  
  }
  
  function clickEmailtemplates(){
    document.getElementById('componentNameHeader').textContent = "Email Templates";
    document.getElementById('complexityLevelHeader').style.display = "none";
    // complexityIndicator.style.display = "none";
    gridDetailsContainer.style.display ="block";
    clearTable();
    emailTemplatesArray = globalData.EmailTemplates;
    console.log('emailTemplatesArray--->',emailTemplatesArray);
    emailTemplatesArray.forEach((emailTemplate, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('emailTemplate---->',emailTemplate);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent = emailTemplate.DeveloperName;

    //   const cellId = row.insertCell(1);
    //   cellId.textContent = index + 1;


  });
  
  }
  
  function clickProcessBuilders(){
    document.getElementById('componentNameHeader').textContent = "Process Builders";
    document.getElementById('complexityLevelHeader').style.display = "none";
    // complexityIndicator.style.display = "none";
    gridDetailsContainer.style.display ="block";
    clearTable();
    processBuilderArray = globalData.ProcessDefinitions;
    console.log('processBuilderArray--->',processBuilderArray);
    processBuilderArray.forEach((ProcessBuilder, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('ProcessBuilder---->',ProcessBuilder);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent = ProcessBuilder.DeveloperName;

    //   const cellId = row.insertCell(1);
    //   cellId.textContent = index + 1;


  });
  
  }
  
  function clickQueues(){
    document.getElementById('componentNameHeader').textContent = "Queues";
    document.getElementById('complexityLevelHeader').style.display = "none";
    // complexityIndicator.style.display = "none";
    gridDetailsContainer.style.display ="block";
    clearTable();
    groupsArray = globalData.Groups;
    console.log('groupsArray--->',groupsArray);
    groupsArray.forEach((group, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('group---->',group);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent = group.Name;

    //   const cellId = row.insertCell(1);
    //   cellId.textContent = index + 1;


  });
  
  }
  
  function clickStaticResources(){
    document.getElementById('componentNameHeader').textContent = "Static Resources";
    document.getElementById('complexityLevelHeader').style.display = "none";
    // complexityIndicator.style.display = "none";
    gridDetailsContainer.style.display ="block";
    clearTable();
    staticResourcesArray = globalData.StaticResources;
    console.log('staticResourcesArray--->',staticResourcesArray);
    staticResourcesArray.forEach((StaticResource, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('StaticResource---->',StaticResource);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent =StaticResource.Name;

    //   const cellId = row.insertCell(1);
    //   cellId.textContent = index + 1;


  });
  
  }

function clickVeevaObjects(){
    document.getElementById('componentNameHeader').textContent = "Veeva Object";
    document.getElementById('complexityLevelHeader').style.display = "none";
    // complexityIndicator.style.display = "none";
    gridDetailsContainer.style.display ="block";
    clearTable();
    veevaObjectArray = globalData.VeevaObjects;
    console.log('staticResourcesArray--->',veevaObjectArray);
    veevaObjectArray.forEach((StaticResource, index) => {
      const row = table.insertRow(-1); // -1 inserts at the end
      console.log('StaticResource---->',StaticResource);
      console.log('index---->',index);
      
      const cellName = row.insertCell(0);
      cellName.textContent =StaticResource.Label;

    //   const cellId = row.insertCell(1);
    //   cellId.textContent = index + 1;


  });

  }

function clickIntegration(){
  document.getElementById('componentNameHeader').textContent = "Integration";
  document.getElementById('complexityLevelHeader').style.display = "none";
  // complexityIndicator.style.display = "none";
  gridDetailsContainer.style.display ="block";
  clearTable();
  integrationObjectArray = globalData.response_classes;
  console.log('integrationObjectArray--->',integrationObjectArray);
  integrationObjectArray.forEach((StaticResource, index) => {
    const row = table.insertRow(-1); // -1 inserts at the end
    console.log('StaticResource---->',StaticResource);
    console.log('index---->',index);
    
    const cellName = row.insertCell(0);
    cellName.textContent =StaticResource;

    // const cellId = row.insertCell(1);
    // cellId.textContent = index + 1;


}); 

}

//grid color
document.addEventListener("DOMContentLoaded", function () {
  // Add this array of colors corresponding to the ratings
  var ratingColors = {
    'High': '#FF211F',
    'Medium': '#FFBF00',
    'Low': '#47B649'
  };

  // Function to update the color of a grid item
  function updateItemColor(item, rating) {
    var color = ratingColors[rating];
    console.log('color--->',color)
    item.style.backgroundColor = color;
  }

  // Initialize colors for all grid items
  var gridItems = document.querySelectorAll('.item');
  gridItems.forEach(function (item) {
    var rating = item.getAttribute('data-rating');
    updateItemColor(item, rating);
  });

  // Attach click event listeners to each grid item (optional, if you still want to change color on click)
  gridItems.forEach(function (item) {
    item.addEventListener('click', function () {
      // Replace 'clickApexClass' with the appropriate function for each item
      // Get the rating for the clicked item (assuming it's stored in data-rating attribute)
      var rating = item.getAttribute('data-rating');
      // Update the color based on the rating
      updateItemColor(item, rating);
    });
  });
});

   
function filterTable() {
  var complexityFilter = document.getElementById("complexityFilter").value.toLowerCase();
  var rows = document.querySelectorAll("#detailTable tr:not(:first-child)"); // Exclude the header row

  rows.forEach(function(row) {
      var complexity = row.querySelector("td:nth-child(2)").textContent.toLowerCase();

      if (complexityFilter === "" || complexity === complexityFilter) {
          row.style.display = "";
      } else {
          row.style.display = "none";
      }
  });
}

function filterreport() {
  var filter = document.getElementById("complexity-filter").value;
  var rows = document.querySelectorAll(".table_container table tr");

  for (var i = 1; i < rows.length; i++) {
    var complexityCell = rows[i].getElementsByTagName("td")[3];
    var isLegendRow = rows[i].classList.contains("metadata-values");
    if (!complexityCell || isLegendRow) continue; // Skip if no complexity cell found or if it's a legend row
    if (filter === "all" || complexityCell.classList.contains(filter)) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}

