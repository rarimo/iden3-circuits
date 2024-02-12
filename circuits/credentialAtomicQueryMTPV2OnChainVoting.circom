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
                       voteId,
                       commitment]} = CredentialAtomicQueryMTPOnChain(40, 32, 64, 40, 64);
