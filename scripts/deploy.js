async function main() {
  // We get the contract to deploy
  const JOSEPH = await ethers.getContractFactory("JOSEPH");
  const JOSEPH_token = await JOSEPH.deploy();

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
