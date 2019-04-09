
module.exports = function (app) {

    app.get('/api/employee', function (req, res) {
        res.json(employees);
      });
}