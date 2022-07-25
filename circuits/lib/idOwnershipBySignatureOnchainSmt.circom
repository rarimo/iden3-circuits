/*
# idOwnershipBySignature.circom

Circuit to check that the prover is the owner of the identity
- prover is owner of the private key
- prover public key is in a ClaimKeyBBJJ that is inside its Identity State (in Claim tree)
*/

pragma circom 2.0.0;

include "utils/claimUtils.circom";
include "utils/treeUtils.circom";

template IdOwnershipBySignatureOnchainSmt(nLevels, onChainLevels) {
    signal input userID;
    signal input userState;

	signal input userClaimsTreeRoot;
	signal input userAuthClaimMtp[nLevels];
	signal input userAuthClaim[8];

	signal input userRevTreeRoot;
    signal input userAuthClaimNonRevMtp[nLevels];
    signal input userAuthClaimNonRevMtpNoAux;
    signal input userAuthClaimNonRevMtpAuxHi;
    signal input userAuthClaimNonRevMtpAuxHv;

	signal input userRootsTreeRoot;

	signal input challenge;
	signal input challengeSignatureR8x;
	signal input challengeSignatureR8y;
	signal input challengeSignatureS;

    signal input userOnChainSmtRoot;
    signal input userOnChainSmtMtp[onChainLevels];

    signal input verifierCorrelationID;
    signal input nullifierHash;

    component verifyAuthClaim = VerifyAuthClaimAndSignature(nLevels);
    for (var i=0; i<8; i++) { verifyAuthClaim.authClaim[i] <== userAuthClaim[i]; }
	for (var i=0; i<nLevels; i++) { verifyAuthClaim.authClaimMtp[i] <== userAuthClaimMtp[i]; }
	verifyAuthClaim.claimsTreeRoot <== userClaimsTreeRoot;
	verifyAuthClaim.revTreeRoot <== userRevTreeRoot;
	for (var i=0; i<nLevels; i++) { verifyAuthClaim.authClaimNonRevMtp[i] <== userAuthClaimNonRevMtp[i]; }
	verifyAuthClaim.authClaimNonRevMtpNoAux <== userAuthClaimNonRevMtpNoAux;
	verifyAuthClaim.authClaimNonRevMtpAuxHv <== userAuthClaimNonRevMtpAuxHv;
	verifyAuthClaim.authClaimNonRevMtpAuxHi <== userAuthClaimNonRevMtpAuxHi;

    verifyAuthClaim.challengeSignatureS <== challengeSignatureS;
    verifyAuthClaim.challengeSignatureR8x <== challengeSignatureR8x;
    verifyAuthClaim.challengeSignatureR8y <== challengeSignatureR8y;
    verifyAuthClaim.challenge <== challenge;

    component checkUserState = checkIdenStateMatchesRoots();
    checkUserState.claimsTreeRoot <== userClaimsTreeRoot;
    checkUserState.revTreeRoot <== userRevTreeRoot;
    checkUserState.rootsTreeRoot <== userRootsTreeRoot;
    checkUserState.expectedState <== userState;

    /* Check on-chain SMT inclusion existence */
    component onChainSmtInclusion = SMTVerifier(onChainLevels);
    onChainSmtInclusion.enabled <== 1;
    onChainSmtInclusion.fnc <== 0; // Inclusion
    onChainSmtInclusion.root <== userOnChainSmtRoot;
    for (var i=0; i<onChainLevels; i++) { onChainSmtInclusion.siblings[i] <== userOnChainSmtMtp[i]; }
    onChainSmtInclusion.oldKey <== 0;
    onChainSmtInclusion.oldValue <== 0;
    onChainSmtInclusion.isOld0 <== 0;
    onChainSmtInclusion.key <== userID;
    onChainSmtInclusion.value <== userState;

    /* Nullifier calculation */
    component checkNullifier = checkNullifier();
    for (var i=0; i<8; i++){ checkNullifier.claim[i] <== userAuthClaim[i]; }
    checkNullifier.correlationID <== verifierCorrelationID;
    checkNullifier.nullifierHash <== nullifierHash;
}

template checkNullifier() {
    signal input claim[8];
    signal input correlationID;
    signal input nullifierHash;

    component getPubKey = getPubKeyFromClaim();
    for (var i=0; i<8; i++){ getPubKey.claim[i] <== claim[i]; }

    component poseidon = Poseidon(3);
    poseidon.inputs[0] <== correlationID;
    poseidon.inputs[1] <== getPubKey.Ax;
    poseidon.inputs[2] <== getPubKey.Ay;

    poseidon.out === nullifierHash;
}
