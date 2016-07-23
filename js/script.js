//document.getElementById('heading').innerHTML = "JavaScript Title Heading";
//document.getElementById('subHeading').innerHTML = "JavaScript Subtitle Heading";
//document.getElementById('tbl').innerHTML = "<tr><th>Name</th><th>Gender</th></tr>"+
//										"<tr><td>Reymar</td><td>Male</td></tr>"+
//										"<tr><td>Cindy</td><td>Female</td></tr>"+
//										"<tr><td>Kevin</td><td>Male</td></tr>";

var titleHead = document.getElementById('heading');
titleHeadScript = "JavaScript Title Heading";
titleHead.innerHTML = titleHeadScript;

var subHead = document.getElementById('subHeading');
subHeadScript = "JavaScript Title Heading";
subHead.innerHTML = subHeadScript;

var table = document.getElementById('tbl');
var row = 3;
var col = 2;
var arrNames = ['Reymar', 'Cindy', 'Kevin'];
var arrGender = ['Male', 'Female', 'Male'];
var index = 0;
var html = "<thead><tr><th>Name</th><th>Gender</th></tr></thead>";
html += "<tbody>";
for(x=0;x<row;x++){
  html+="<tr>";
  html+="<td>"+arrNames[index]+"</td>";
  html+="<td>"+arrGender[index]+"</td>";
  html+="</tr>";
  index++;
}
html += "</tbody>";
table.innerHTML = html;