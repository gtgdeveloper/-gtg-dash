const Web3 = require('web3');

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RPC_URL = process.env.RPC_URL;

if (!PRIVATE_KEY || !RPC_URL) {
  console.error("Missing PRIVATE_KEY or RPC_URL in environment variables.");
  process.exit(1);
}

const web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));

async function run() {
  const account = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);
  console.log("Scheduler running for account:", account.address);

  // Example: fetch balance
  const balance = await web3.eth.getBalance(account.address);
  console.log("Current balance:", web3.utils.fromWei(balance, 'ether'), "ETH");

  // Add your scheduled task logic here
}

run().catch((err) => {
  console.error("Error running scheduler:", err);
});
