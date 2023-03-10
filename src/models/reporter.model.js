'use strict';
var dbConn = require('./../../config/db.config');
//Reporter object create
var Reporter = function(reporter){
    this.first_name     = reporter.first_name;
    this.last_name      = reporter.last_name;
    this.email          = reporter.email;
    this.sex          = reporter.sex;
    this.phone_number   = reporter.phone_number;

};
// create report
Reporter.create = function (newEmp, result) {
dbConn.query("INSERT INTO reporters set ?", newEmp, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};

// find report by id
Reporter.findById = function (id, result) {
dbConn.query("Select * from logins where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};

// find all reports
Reporter.findAll = function (result) {
dbConn.query("Select * from reporters", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('reporters : ', res);
  result(null, res);
}
});
};

// counting all reports
Reporter.countAllReporters = function (result) {
  dbConn.query("SELECT COUNT(id) AS countall_reporters FROM reporters;", function (err, res) {
  if(err) {
     console.log("error: ", err);
    result(null, err);
  }
  else{
     console.log('incidencessss : ', JSON.stringify(res));
     result(null, res);
  }
  });
  };

// daily reporters
Reporter.dailyReporterz = function (result) {
  dbConn.query("SELECT * FROM `reporters` WHERE datetime >= curdate()", function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(null, err);
  }
  else{
    console.log('reporters : ', res);
    result(null, res);
  }
  });
  };
// counting daily reports
Reporter.countDailyReporters = function (result) {
  dbConn.query("SELECT COUNT(id) AS countdaily_reporters FROM reporters WHERE datetime >= curdate()", function (err, res) {
  if(err) {
     console.log("error: ", err);
    result(null, err);
  }
  else{
     console.log('reporters : ', JSON.stringify(res));
     result(null, res);
  }
  });
  };

// weekly reporters
Reporter.weeklyReporterz = function (result) {
  dbConn.query("select * from reporters where  `datetime` >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)", function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(null, err);
  }
  else{
    console.log('reporters : ', res);
    result(null, res);
  }
  });
  };
  // counting weekly reporters
  Reporter.countWeeklyReporters = function (result) {
    dbConn.query("SELECT COUNT(id) AS countweekly_reporters FROM reporters where  `datetime` >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)", function (err, res) {
      if(err) {
       console.log("error: ", err);
      result(null, err);
    }
    else{
       console.log('reporters : ', JSON.stringify(res));
       result(null, res);
    }
    });
    };

// monthly reporters
Reporter.monthlyReporterz = function (result) {
  dbConn.query("SELECT * FROM `reporters` WHERE  datetime >=  DATE_FORMAT(CURDATE() ,'%Y-%m-01')", function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(null, err);
  }
  else{
    console.log('reporters : ', res);
    result(null, res);
  }
  });
  };
// counting monthly reporters
Reporter.countMonthlyReporters = function (result) {
  dbConn.query("SELECT COUNT(id) AS countmonthly_reporters FROM reporters WHERE  datetime >=  DATE_FORMAT(CURDATE() ,'%Y-%m-01')", function (err, res) {
  if(err) {
     console.log("error: ", err);
    result(null, err);
  }
  else{
     console.log('reporters : ', JSON.stringify(res));
     result(null, res);
  }
  });
  };

Reporter.update = function(id, Reporter, result){
dbConn.query("UPDATE reporters SET first_name=?,last_name=?,email=?,sex=?,phone_number=? WHERE id = ?", [Reporter.first_name,Reporter.last_name,Reporter.email,Reporter.sex,Reporter.phone_number, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};

Reporter.delete = function(id, result){
dbConn.query("DELETE FROM reporters WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};


module.exports= Reporter;









