const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Github Passport Authorization",
    description:
      "OAuth to github for authentication",
  },
  host: "localhost:3000",
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFile = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFile, doc);
