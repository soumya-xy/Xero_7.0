import React, { useEffect } from 'react';
import { Wallet, Users, MessageCircle, Lock, Star } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { Account, Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

const Profile = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const creators = {
    sarah: {
      name: "Sarah",
      tagline: "Digital Artist | NFT Curator | Web3 Creator",
      bannerImage: "../src/public/banner/digital content creator.jpg",
      avatarImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      about: "Digital artist exploring the intersection of art and technology. Creating unique experiences in the web3 space since 2020. My work focuses on bringing imagination to life through digital mediums.",
      purpose: "Join my community to get exclusive access to my creative process, early NFT drops, and behind-the-scenes content.",
      stats: {
        supporters: "5.2K",
        earnings: "250K+",
        collections: "12"
      }
    },
    cryptomusic: {
      name: "CryptoMusic",

      tagline: "Music Producer | Web3 Audio Pioneer | NFT Composer",
      bannerImage: "../src/public/banner/CryptoMusic.jpg",
      avatarImage: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
      about: "Revolutionizing the music industry through web3 technology. Creating immersive audio experiences and exclusive music NFTs. Bridging the gap between traditional music and blockchain innovation.",
      purpose: "Be part of an exclusive community where music meets blockchain. Get access to unreleased tracks, studio sessions, and collaborative opportunities.",
      stats: {
        supporters: "8.7K",
        earnings: "420K+",
        collections: "15"
      }
    },
    web3academy: {
      name: "Web3 Academy",
      tagline: "Blockchain Educator | Course Creator | Community Builder",
      bannerImage: "../src/public/banner/web3 Academy.png",
      avatarImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
      about: "Empowering the next generation of web3 developers and creators. Providing comprehensive education on blockchain technology, smart contracts, and decentralized applications.",
      purpose: "Join our learning community to access premium courses, workshops, and mentorship programs. Build the future of the internet with us.",
      stats: {
        supporters: "12.4K",
        earnings: "680K+",
        collections: "20"
      }
    }
  };

  const creator = creators[id] || creators.sarah;

  const supportTiers = [
    {
      title: "Bronze Supporter",
      price: "0.5 APT/month",
      benefits: [
        "Access to supporter-only updates",
        "Early access to NFT drops",
        "Monthly digital wallpapers"
      ],
      color: "from-amber-500 to-amber-700"
    },
    {
      title: "Silver Curator",
      price: "1 APT/month",
      benefits: [
        "All Bronze benefits",
        "Exclusive NFT airdrops",
        "Private Discord channel access",
        "Monthly virtual meetups"
      ],
      color: "from-purple-500 to-pink-500",
      featured: true
    },
    {
      title: "Gold Collector",
      price: "2.5 APT/month",
      benefits: [
        "All Silver benefits",
        "1-on-1 monthly calls",
        "Custom NFT commission",
        "Name in credits of all works"
      ],
      color: "from-yellow-400 to-yellow-600"
    }
  ];

  async function subscribe() {
    try {
    
 
const APTOS_COIN = "0x1::aptos_coin::AptosCoin";
const COIN_STORE = `0x1::coin::CoinStore<${APTOS_COIN}>`;
const ALICE_INITIAL_BALANCE = 100_000_000;
const BOB_INITIAL_BALANCE = 100;
const TRANSFER_AMOUNT = 100;
  // Setup the client
  const config = new AptosConfig({ network: Network.DEVNET });
  const aptos = new Aptos(config);
 
  // Generate two account credentials
  // Each account has a private key, a public key, and an address
  const alice = Account.generate();
  const bob = Account.generate();
 
  // console.log("=== Addresses ===\n");
  // console.log(`Alice's address is: ${alice.accountAddress}`);
  // console.log(`Bob's address is: ${bob.accountAddress}`);
 
  // Fund the accounts using a faucet
  // console.log("\n=== Funding accounts ===\n");
 
  await aptos.fundAccount({
    accountAddress: alice.accountAddress,
    amount: ALICE_INITIAL_BALANCE,
  });
 
  await aptos.fundAccount({
    accountAddress: bob.accountAddress,
    amount: BOB_INITIAL_BALANCE,
  });
  // console.log("Alice and Bob's accounts have been funded!");
 
  // Look up the newly funded account's balances
  // console.log("\n=== Balances ===\n");
  const aliceAccountBalance = await aptos.getAccountResource({
    accountAddress: alice.accountAddress,
    resourceType: COIN_STORE,
  });
  const aliceBalance = Number(aliceAccountBalance.coin.value);
  console.log(`Alice's balance is: ${aliceBalance}`);
 
  const bobAccountBalance = await aptos.getAccountResource({
    accountAddress: bob.accountAddress,
    resourceType: COIN_STORE,
  });
  const bobBalance = Number(bobAccountBalance.coin.value);
  // console.log(`Bob's balance is: ${bobBalance}`);
 
  // Send a transaction from Alice's account to Bob's account
  const txn = await aptos.transaction.build.simple({
    sender: alice.accountAddress,
    data: {
      // All transactions on Aptos are implemented via smart contracts.
      function: "0x1::aptos_account::transfer",
      functionArguments: [bob.accountAddress, 100],
    },
  });
 
  // console.log("\n=== Transfer transaction ===\n");
  // Both signs and submits
  const committedTxn = await aptos.signAndSubmitTransaction({
    signer: alice,
    transaction: txn,
  });
  // Waits for Aptos to verify and execute the transaction
  const executedTransaction = await aptos.waitForTransaction({
    transactionHash: committedTxn.hash,
  });
  console.log("Transaction hash:", executedTransaction.hash);
 
  // console.log("\n=== Balances after transfer ===\n");
  alert("1 Aptos transferred to Sarah from your wallet")
  const newAliceAccountBalance = await aptos.getAccountResource({
    accountAddress: alice.accountAddress,
    resourceType: COIN_STORE,
  });
  const newAliceBalance = Number(newAliceAccountBalance.coin.value);
  console.log(`Now new Alice's balance is: ${newAliceBalance}`);
 
  const newBobAccountBalance = await aptos.getAccountResource({
    accountAddress: bob.accountAddress,
    resourceType: COIN_STORE,
  });
  const newBobBalance = Number(newBobAccountBalance.coin.value);

 
  // Bob should have the transfer amount
  if (newBobBalance !== TRANSFER_AMOUNT + BOB_INITIAL_BALANCE)
    throw new Error("Bob's balance after transfer is incorrect");
 
  // Alice should have the remainder minus gas
  if (newAliceBalance >= ALICE_INITIAL_BALANCE - TRANSFER_AMOUNT)
    throw new Error("Alice's balance after transfer is incorrect");
    } catch (error) {
      return error;
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Banner and Profile Section */}
      <div className="relative h-[400px]">
        <img 
          src={creator.bannerImage} 
          alt="Profile Banner"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-24">
            <img 
              src={creator.avatarImage} 
              alt="Creator Avatar"
              className="w-32 h-32 rounded-full border-4 border-purple-500 object-cover 
                shadow-[0_0_15px_rgba(147,51,234,0.5)]"
            />
            
            <div className="mt-4">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 
                bg-clip-text text-transparent">{creator.name}</h1>
              <p className="text-xl text-gray-300 mt-2">{creator.tagline}</p>
              
              <div className="flex gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span>{creator.stats.supporters} Supporters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-purple-400" />
                  <span>${creator.stats.earnings} Earned</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-purple-400" />
                  <span>{creator.stats.collections} Collections</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 
          bg-clip-text text-transparent">About</h2>
        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
          <p className="text-gray-300 mb-4">{creator.about}</p>
          <p className="text-gray-300">{creator.purpose}</p>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 
          bg-clip-text text-transparent">Support Tiers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportTiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm 
                transform hover:scale-[1.02] transition-all duration-300
                ${tier.featured ? 'ring-2 ring-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.3)]' : ''}`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r 
                  from-purple-500 to-pink-500 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              
              <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${tier.color} 
                bg-clip-text text-transparent`}>{tier.title}</h3>
              <p className="text-2xl font-bold mb-4">{tier.price}</p>
              
              <ul className="space-y-3 mb-6">
                {tier.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Lock className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <button  onClick={subscribe}          className={`w-full py-3 bg-gradient-to-r ${tier.color} rounded-lg 
                hover:shadow-[0_0_15px_rgba(147,51,234,0.5)] transition-all transform 
                hover:scale-105`}>
                Subscribe Now 
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Profile; 