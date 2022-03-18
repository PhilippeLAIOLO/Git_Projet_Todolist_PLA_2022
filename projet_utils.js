//acces postgresql

const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'todolist',
  password: 'Philou67'
  //port: {3000},
})
pool.connect()


//c'est la connection qui nous permet d'envoyer des
//requêtes à la base de donnée
function dbGetData(fonction_traitement_resultat_bdd){

  let connection = pool
  let query = `SELECT * from tasks order by id asc`

  connection.query(query, fonction_traitement_resultat_bdd)


 }

// insertion données nouvele tache

function insertTaskV(valueToInsert,fonction_apres_traitementV){

  let connection = pool
  let query = `insert into tasks (
	nom, sujet, desc_sujet, statut, deadline)
	VALUES ($1, $2, $3, $4 ,$5 );`

connection.query(query,valueToInsert, fonction_apres_traitementV)

}


// update statut
function updateStatus(valueToUpdate,fonction_apres_traitementU){

  let connection = pool
  let query = `UPDATE tasks
	SET statut=$1
	WHERE id=$2;`


connection.query(query,valueToUpdate, fonction_apres_traitementU)
 
}




module.exports = {
  insertTaskV: insertTaskV,
  dbGetData: dbGetData,
  updateStatus:updateStatus,
  
}
