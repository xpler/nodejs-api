var siege = require("siege");
siege()
  .on(3000)
  .for(60)
  .seconds.get("/v1/test")
  .attack();
