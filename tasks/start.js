const mode = process.env.MODE;

module.exports = async function start() {
  const developerMsg = "Hello Gulp! Start project gulp+webpack";
  const productionMsg = "Start build project for production";
  mode === "dev" ? console.log(developerMsg) : console.log(productionMsg);
};
