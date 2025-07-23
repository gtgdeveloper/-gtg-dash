import { Connection, Keypair, PublicKey } from '@solana/web3.js';

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RPC_URL = process.env.RPC_URL;

if (!PRIVATE_KEY || !RPC_URL) {
  console.error("Missing PRIVATE_KEY or RPC_URL.");
  process.exit(1);
}

try {
  // Parse the private key (as a keypair array from Render environment)
  const keyArray = PRIVATE_KEY.startsWith('[')
    ? JSON.parse(PRIVATE_KEY)
    : Uint8Array.from(Buffer.from(PRIVATE_KEY.replace(/^0x/, ''), 'hex'));

  const keypair = Keypair.fromSecretKey(Uint8Array.from(keyArray));
  const connection = new Connection(RPC_URL, 'confirmed');

  const publicKey = keypair.publicKey;
  console.log("Scheduler running for account:", publicKey.toBase58());

  const balance = await connection.getBalance(publicKey);
  console.log("Current balance:", balance / 1e9, "SOL");

  // Add your Solana task logic here...

} catch (err) {
  console.error("Error in scheduler:", err);
}
