exec = require('child_process').exec;
module.exports = {
    onPreBuild: () => {
      console.log('Hello, we will not execute this Go executable!')
      const child = exec('./hello',(err, stdout, stderr) => {
        if (err) {
            console.log(err)
          throw err;
        }
      
        console.log(stdout);
      });
    },
  }
