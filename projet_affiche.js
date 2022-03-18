//Partie Affichage HTML/JS

const fct = require('./projet_func')

function afficheTab(results) {
	
let affichePG = ""

	for (const elem of results.rows){
		if (elem['statut']==0){
		var affStatut="A faire"
		var affButton="Passer à Terminée"
		var change=1}
		else{
		var affStatut="Terminée"
		var affButton="A reprendre"
		var change=0
		 }
		affichePG=affichePG + `
		 <tr>
		 	<form  action="/update_task" method="POST" enctype="application/x-www-form-urlencoded">
                  <td >
						<input readonly class="form-control transparent-input" name="id" id="id" value="${elem ['id']}"></input>
				  </td>
                  <td>${elem ['nom']}</td>
                  <td>${elem ['sujet']}</td>
                  <td>${elem ['desc_sujet']}</td>
                  <td>${fct.formatDate(elem ['deadline'])}</td>
                  <td >${affStatut}
					<input type="hidden" readonly class="form-control transparent-input" name="statut" id="statut" value=${change}></input>
				  </td>
			      <td>
					<button type="submit" class="btn btn-success ms-1" >${affButton}</button>
				  </td>
			</form>
          </tr>
				`
		}


	
let VarAffiche = `
<html>
    <head>


          <!-- Latest compiled and minified CSS -->
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">

          <!-- jQuery library -->
          <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>

          <!-- Popper JS -->
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>

          <!-- Latest compiled JavaScript -->
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>

          <link rel="stylesheet" href="stylenth.css"> 

        <style>input.transparent-input{
       background-color:transparent !important;
       border:none !important;
		}
		</style> 
    </head>

<body>
<section class="vh-100" style="background-color: #eee;">
  <div class="container py-5 h-100">
<!--  <div class="row d-flex justify-content-center align-items-center h-200"> -->
	<div class="row  justify-content-center align-items-center ">
 <!--     <div class="col col-lg-9 col-xl-7"> -->
	      <div class="col ">
        <div class="card rounded-1">
          <div class="card-body p-1">

            <h4 class="text-center my-2 pb-1">To Do List</h4>

            <form class="row row-cols-lg-auto g-1 justify-content-center align-items-center mb-2 pb-2" action="/add_task" method="POST" enctype="application/x-www-form-urlencoded">
             <div class="row col-12" > 
			  <div class="col-4">
                <div class="form-outline">
				  <label class="form-label" for="name">Nom</label>
				  <input type="text" name="name" id="name" class="form-control" required /> 
				</div>
              </div>				
              <div class="col-4">
                <div class="form-outline">			  
				  <label class="form-label" for="sujet">Sujet</label>
				  <input type="text" name="sujet" id="sujet" class="form-control" required /> 
				</div>
              </div>
 			  <div class="col-2">
                <div class="form-outline">
				  <label class="form-label" for="deadline">deadline</label>
				  <input type="date" name="deadline" id="deadline" min="2022-01-01"  required />  
				 </div>
              </div>
			  <div class="col-2">
			    <div class="form-outline">
					<label class="form-label" for="new">Nouvelle tâche</label><br/>
					<button type="submit" class="btn btn-primary">Save</button> 
				</div>
              </div>	
			</div>
			<div class="row col-12">
			  <div class="col-10">
			    <div class="form-outline">
				  <label class="form-label" for="desc_sujet">Description</label>
				  <input type="text" name="desc_sujet" id="desc_sujet" class="form-control" required /> 
				</div>		
			  </div>
			</div>
 	
             </form>
	
            <table class="table mb-2">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Nom     </th>
                  <th scope="col">Tache       </th>
                  <th scope="col">Description           </th>
                  <th scope="col">deadline   </th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>`
			  +
			  affichePG
			  
			  +
              `  
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</body>    

</html> `
return VarAffiche
}

module.exports = {
  afficheTab: afficheTab,
}