import superagent from 'superagent'

export default {

  get: (url, params, callback) => {
    superagent
      .get(url)
      .query(params)
      .set('Accept', 'application/json')
      .end((err, response) => {

        if(err){
          callback(err, null) //this is a REQUEST failure, NOT api failure
          return
        }

        //this is API failure, when connfirmation will be 'fail'
        const confirmation = response.body.confirmation
        if (confirmation != 'success'){
          callback({message: response.body.message}, null)
          return
        }

        callback(null, response.body) //response.body its the thing that comes form SUPERAGENT

      })

  },

  post: (url, body, callback) => {
    superagent
      .post(url)
      .send(body)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if(err){
          callback(err, null) //this is a REQUEST failure, NOT api failure
          return
        }

        //this is API failure, when connfirmation will be 'fail'
        const confirmation = response.body.confirmation
        if (confirmation != 'success to create'){
          callback({message: response.body.message}, null)
          return
        }

        callback(null, response.body) //response.body its the thing that comes form SUPERAGENT

      })
  },

  put: () => {

  },

  delete: () => {

  }

}