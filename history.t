npm --version
nvm use node
node -v
npm install --save-dev hardhat
nvm use lts/*
nvm ls

npx hardhat compile
npx hardhat run scripts/deploy.js --network rinkeby
