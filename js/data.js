

var students = { "MIT" : [
{ "name" : "Reymar", "gender" : "Male" },
{ "name" : "Cindy", "gender" : "Female" },
{ "name" : "Kevin", "gender" : "Male" },
{ "name" : "Danver", "gender" : "Male" },
{ "name" : "Ed", "gender" : "Male" },
{ "name" : "Glester", "gender" : "Male" },
{ "name" : "Jeffrey", "gender" : "Male" }
]
} 


var htmlStudents = "<thead><tr><th>Name</th><th>Gender</th><th>Action</th></tr></thead>";
htmlStudents += "<tbody>";
for(i=0;i<students.MIT.length;i++)
{

htmlStudents+="<tr><td width=50>"+ students.MIT[i].name+"</td>";
htmlStudents+="<td width=50>"+ students.MIT[i].gender +"</td>";
// htmlStudents+="<td width=50><button type = 'button' class = 'btn btn-primary' data-toggle = 'modal' data-target = '#"+students.MIT[i].name+"'>View Resume</button></tr>";
htmlStudents+="<td width=50><button  type='button' class = 'btn btn-primary ' data-toggle = 'modal' data-target = '#"+students.MIT[i].name+"'>View Resume</button></td></tr>";

}
htmlStudents += "</tbody>";


var table2 = document.getElementById('tbl2');
table2.innerHTML = htmlStudents;
