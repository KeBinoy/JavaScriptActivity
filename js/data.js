var students = { "MIT" : [
{ "name" : "Reymar", "gender" : "Male" },
{ "name" : "Cindy", "gender" : "Female" },
{ "name" : "Kevin", "gender" : "Male" }
]
} 


var htmlStudents = "<thead><tr><th>Name</th><th>Gender</th></tr></thead>";
htmlStudents += "<tbody>";
for(i=0;i<students.MIT.length;i++)
{

htmlStudents+="<tr><td width=50>"+ students.MIT[i].name+"</td>";
htmlStudents+="<td width=50>"+ students.MIT[i].gender +"</td></tr>";

}
htmlStudents += "</tbody>";


var table2 = document.getElementById('tbl2');
table2.innerHTML = htmlStudents;
