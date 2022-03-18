
const express = require('express')
const { createPool } = require('pg')
const app = express()
const port = 3000

const db = require('./projet_utils')
const aff = require('./projet_affiche')


app.use(express.static('public'))
app.use(express.static('static'))

app.use(express.urlencoded({ extended: true }))


function ShowChoixTable(results){
	
	let affiche = "<ol>Affiche table to do list </ol>"

	for (const elem of results.rows){
		affiche=affiche + `<li>affiche nom ${elem ['nom']} ${elem ['sujet']} ${elem ['desc_sujet']} ${elem ['deadline']} ${elem['statut']}<!li>`
		}
   	return affiche

}

//************************************************************
//  lancer avec localhost:3000/get_json
app.get('/get_json', (req, res) => {
	
    db.dbGetData(
          function (error, results){
          res.json(results.rows)
     },
   )
})

//*******************************************


//  lancer avec localhost:3000/todolist/
app.get('/todolist/', (req, res) => {

    db.dbGetData(
        
      function (error, results){

		let html=aff.afficheTab(results)
        res.send(html)
	
     },
   )
})


// insert apres saisie
app.post('/add_task',  (request, res) => {

   let formData = [ request.body['name'],request.body['sujet'],request.body['desc_sujet'],1,request.body['deadline']]
	
   db.insertTaskV(formData, function(){
   res.redirect("/todolist/")
  },)
})


// update statut 
app.post('/update_task',  (request, res) => {

  let formDataU = [request.body['statut'],request.body['id']]
	
	db.updateStatus(formDataU, function(){
	res.redirect("/todolist/")
  },)
})


// mode ecoute listener
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})