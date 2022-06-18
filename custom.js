function addNewWEFeild(box){
	 box.style.display="block";
}
	
function addNewAQFeild(B){											
	B.style.display="block";
}

function generateCV(cv){
	var name=document.getElementById('nameFeild').value;
	var contactFeild=document.getElementById('contactFeild').value;
	var addressFeild=document.getElementById('addressFeild').value;
	var fbFeild=document.getElementById('fbFeild').value;
	var instaFeild=document.getElementById('instaFeild').value;
	var linkedFeild=document.getElementById('linkedFeild').value;
	var objectiveFeild=document.getElementById('objectiveFeild').value;
	var ex1=document.getElementById('ex1').value;
	var ex2=document.getElementById('ex2').value;
	var q1=document.getElementById('q1').value;
	var q2=document.getElementById('q2').value;
	var mobile_reg=/^[0-9]{10}$/;
	if(mobile_reg.test(contactFeild)){
		cv.innerHTML=`
		<div class="BoxResume pt-5">
			<div class="container" id="cv-template">
				<div class="row">
					<div class="col-md-4 text-center py-5 background">
						<!--first col-->
						<div class="p-5">
							<img src="logo.jpg" 
							alt=""
							class="img-fluid myimg">
							<div class="container">
								<p>${name}</p>
								<p>${contactFeild}</p>
								<p>${addressFeild}</p>
								
								<hr/>
								<p>
								<a href="#1">${fbFeild}</a>
								</p>
								<p>
								<a href="#1">${instaFeild}</a>
								</p>
								<p>
								<a href="#1">${linkedFeild}</a>
								</p>
							</div>
						</div>
					</div>
					<div class="col-md-8 py-5">
						<!--second col-->
						<h1 class="text center" style="font-weight: 980">${name}</h1>
						<!--objective card--->
						<div class="card mt-4">
							<div class="card-header background">
							<h3>Objective</h3>
							</div>
							<div class="card-body">
							<p>${objectiveFeild}</p>
							</div>
						</div>
						<!--work experience-->
						<div class="card mt-4">
							<div class="card-header background">
							<h3>Work Experience</h3>
							</div>
							<div class="card-body">
								<ul>
									<li>
										${ex1}
									</li>
									<li>
										${ex2}
									</li>
								</ul>
							</div>
						</div>
						<div class="card mt-4">
							<div class="card-header background">
							<h3>Academic Qualifications</h3>
							</div>
							<div class="card-body">
								<ul>
									<li>
										${q2}
									</li>
									<li>
										${q2}
									</li>
								</ul>
							</div>
						</div>
	
					</div>
				</div>
				<div class="container mt-3 text-center">
					<button class="btn background" onclick="window.print()" value="print">Print CV</button>
				</div>
			</div>
		</div>
	`;
	}
	else{
		alert("Please Fill All Details....");
	}
	
	
}