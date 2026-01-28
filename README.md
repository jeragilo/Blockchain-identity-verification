![Solidity](https://img.shields.io/badge/solidity-%5E0.8.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-frontend-blue)
![Hardhat](https://img.shields.io/badge/hardhat-testing-yellow)
![Deployed](https://img.shields.io/badge/deployment-testnet-green)

# 🔐 Blockchain Identity Verification System

This is a full-stack Web3 DApp that allows users to securely register their identity hashes on the Ethereum blockchain using smart contracts. This project implements **Phase 1** of a decentralized identity management system — combining a functional smart contract backend with a responsive frontend interface.

---

## 🚀 Tech Stack

- **Smart Contracts:** Solidity, Hardhat, Ethers.js, Sepolia Testnet
- **Frontend:** Next.js, React, TypeScript, TailwindCSS
- **Web3 Integration:** MetaMask, ethers.js
- **Deployment:** Local Hardhat network & Sepolia, Vercel-ready frontend

---

## 🎯 Features

✅ Secure identity registration via smart contract  
✅ Wallet connection with MetaMask  
✅ Identity hash keccak256 encoding  
✅ Full-stack project structure with modularity  
✅ Smart contract deployment via Hardhat  
✅ Built-in gas estimation and error handling  
✅ Developer-friendly terminal logs and UI statuses  

---

<pre lang="markdown">
### 📁 Folder Structure

```plaintext
Blockchain-identity-verification/
│
├── blockchain/                   # Smart Contract Backend
│   ├── contracts/               # Solidity contracts (e.g., IdentityVerification.sol)
│   ├── scripts/                 # Deployment scripts (e.g., deploy.js)
│   ├── test/                    # Smart contract test files (e.g., Lock.js)
│   ├── .env                     # Env vars (PRIVATE_KEY, ALCHEMY_API_URL)
│   ├── hardhat.config.js        # Hardhat config for networks & plugins
│   ├── package.json             # Backend dependencies
│   └── README.md                # (Optional) backend-only doc
│
├── frontend/                    # Next.js Frontend DApp
│   ├── pages/                   # App entry (_app.tsx), homepage (index.tsx)
│   ├── constants/               # Contract ABI and address
│   ├── styles/                  # Tailwind CSS (e.g., globals.css)
│   ├── public/                  # Icons & static assets
│   ├── tailwind.config.ts       # Tailwind config
│   ├── postcss.config.mjs       # PostCSS config
│   ├── tsconfig.json            # TypeScript config
│   ├── package.json             # Frontend dependencies
│   └── README.md                # (Optional) frontend-only doc
│
├── .gitignore
├── README.md                    # Project overview & setup guide
└── LICENSE                      # (Optional) open source license
```
</pre>


---

## 📸 Demo Screenshots

_Add here screenshots of:_
- Home Page
- Wallet Connected
- Successful Registration

---

## 🧠 Skills Demonstrated

- Solidity Smart Contract Design
- Full-stack DApp Development
- Web3 Wallet Authentication
- Gas Optimization & Error Handling
- GitHub Version Control & Deployment
- Clean Project Structuring (Multi-folder)

---

## 🧪 Future Improvements

- Role-based access or multi-step identity verification  
- Store encrypted metadata (IPFS + off-chain storage)  
- Integration with L2 chains (Polygon, Optimism)  
- Mobile optimization & QR-based login  
- NFT-based identity badges  

---

## 📜 Use Cases

This project can serve as a foundation for:
- Web3 Identity Verification Tools
- DAO Onboarding Systems
- Blockchain-based KYC Systems
- Digital Passports & Proof of Humanity

---

## 👨‍💻 Author

**Jesus Gil**  
- GitHub: [@jeragilo](https://github.com/jeragilo)  
- LinkedIn: [linkedin.com/in/jesusrgil](https://linkedin.com/in/jesusrgil)

---

