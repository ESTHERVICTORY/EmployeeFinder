const path =require('path');
module.export =function (app){
    app.get('/delete', function (req, res) {
        res.json(employess);
      });
}