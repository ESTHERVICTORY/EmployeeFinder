// ===============================================================================
// DATA
// Below data will hold all of the Employees.

// ===============================================================================

var tableArray = [
    {
      Name: "Ahmed",
      Photo: "ahmed@example.com",
      Scores: [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = tableArray;