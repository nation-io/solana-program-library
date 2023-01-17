const x = require('@metaplex-foundation/amman');

module.exports = {
	validator: {
		killRunningValidators: true,
		programs: [
			{
				label: 'spl-governance',
				programId: 'BrTeNpfz7GV2vK8Auk6v3hka6otdNQisBrX2fAU3pfFu',
				deployPath: 'target/deploy/spl_governance.so',
			},
		],
		accounts: [
			{
				label: 'nation-wallet',
				accountId: 'CwbpUpj2ERR7E5CfY4j3gdjFnbT2TK1dkmYi8SRYuMLz',
				executable: false,
			},
		],
		jsonRpcUrl: x.LOCALHOST,
		websocketUrl: '',
		commitment: 'recent',
		ledgerDir: x.tmpLedgerDir(),
		resetLedger: true,
		verifyFees: false,
		detached: process.env.CI != null,
	},
	relay: {
		enabled: process.env.CI == null,
		killlRunningRelay: true,
	},
	storage: {
		enabled: process.env.CI == null,
		storageId: 'mock-storage',
		clearOnStart: true,
	},
	streamTransactionLogs: true,
	assetsFolder: '.amman',
};
