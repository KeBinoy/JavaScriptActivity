var students = { "MITResume" : [
{ "name" : "Reymar", "fullname" : "Reymar Taleon", "address" : "Mati City", "email" : "rtaleon@gmail.com", "position" : "Faculty", "gender" : "Male" },
{ "name" : "Cindy", "fullname" : "Cindy Lasco", "address" : "Mati City", "email" : "clasco@gmail.com", "position" : "Faculty", "gender" : "Female" },
{ "name" : "Kevin", "fullname" : "Kevin John Rivera", "address" : "Davao City", "email" : "krivera@gmail.com", "position" : "System Programmer", "gender" : "Male" },
{ "name" : "Danver", "fullname" : "Danver Palmiano", "address" : "Mati City", "email" : "dpalmiano@gmail.com", "position" : "Faculty", "gender" : "Male" },
{ "name" : "Ed", "fullname" : "Eduardo Santiago", "address" : "Tagum City", "email" : "esantiago@gmail.com", "position" : "System Programmer", "gender" : "Male" },
{ "name" : "Glester", "fullname" : "Glester Dionaldo", "address" : "Bukidnon City", "email" : "gdionaldo@gmail.com", "position" : "MIS Staff", "gender" : "Male" },
{ "name" : "Jeffrey", "fullname" : "Jeffrey Mocoy", "address" : "Davao City", "email" : "jmocoy@gmail.com", "position" : "Freelancer", "gender" : "Male" }
]
} 

var htmlResume = ""; 

for(i=0;i<students.MITResume.length;i++)
{

  
  htmlResume += "<div class='modal fade' id='"+students.MITResume[i].name+"' role='dialog'>";
  htmlResume += "<div class='modal-dialog'>";
  htmlResume += "<div class='modal-content'>";
  htmlResume += "<div class='modal-header'>";
  htmlResume += "<button type='button' class='close' data-dismiss='modal'>&times;</button>";
  htmlResume += "<h4 class='modal-title'>Resume of "+students.MITResume[i].name+"</h4>";
  htmlResume += "</div>";
  htmlResume += "<div class='modal-body'>";
  if(students.MITResume[i].gender == "Male"){
  	htmlResume +='<img src="img/id.png" class="img-responsive" style = "margin:auto;" alt="Responsive image" />';
  }else{
  	htmlResume +='<img src="img/female.png" class="img-responsive" style = "margin:auto;" alt="Responsive image" />';
  }
   
	htmlResume += '<div class="row">';
	htmlResume += '<div class="col-sm-12">';
	htmlResume += '<div class="panel panel-primary">';
		htmlResume += '<div class="panel-heading"><h3 class="panel-title">Personnal Information</h3></div>';
		htmlResume += '<div class="panel-body">';
			htmlResume += '<div class="col-sm-3" >';
			htmlResume += 'Name:';
			htmlResume += '</div>';
			htmlResume += '<div class="col-sm-8 col-md-2 col-lg-9">'+
						students.MITResume[i].fullname+
						'</div>'+
						'<div class="col-sm-3" >'+
						'Address:'+
						'</div>'+
						'<div class="col-sm-8 col-md-2 col-lg-9">'+
						students.MITResume[i].address+
						'</div>'+
						'<div class="col-sm-3" >'+
						'Gender:'+
						'</div>'+
						'<div class="col-sm-8 col-md-2 col-lg-9">'+
						students.MITResume[i].gender+
						'</div>'+
						'<div class="col-sm-3" >'+
						'Position:'+
						'</div>'+
						'<div class="col-sm-8 col-md-2 col-lg-9">'+
						students.MITResume[i].position+
						'</div>'+
						'<div class="col-sm-3" >'+
						'Email:'+
						'</div>'+
						'<div class="col-sm-8 col-md-2 col-lg-9">'+
						students.MITResume[i].email+
						'</div>';
			htmlResume += '</div>';
			htmlResume += '</div>';
		htmlResume += '</div>';
	htmlResume += '</div>';
  htmlResume += "</div>";
  htmlResume += "<div class='modal-footer'>";
  htmlResume += "<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>";
  htmlResume += "</div>";
  htmlResume += "</div>";
  htmlResume += "</div>";
  htmlResume += "</div>";

}

var divResume = document.getElementById('resumeModal');
divResume.innerHTML = htmlResume;