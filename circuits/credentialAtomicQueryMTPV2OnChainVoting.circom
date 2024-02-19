pragma circom 2.0.0;

include "./onchain/credentialAtomicQueryMTPOnChainVoting.circom";

component main{public [requestID,
                       issuerID,
                       issuerClaimIdenState,
                       issuerClaimNonRevState,
                       timestamp,
                       isRevocationChecked,
                       challenge,
                       gistRoot,
                       votingAddress,
                       commitment]} = CredentialAtomicQueryMTPOnChainVoting(40, 32, 1, 40, 64);
