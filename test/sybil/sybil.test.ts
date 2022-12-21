import {describe} from "mocha";

const path = require("path");
const wasm_tester = require("circom_tester").wasm;

// inputs MUST be generated by GO-CIRCUITS library https://github.com/iden3/go-circuits (using corresponding test)
describe("sybilTest.circom:", async function() {

    const tests = [
        {"desc":"Sybil resistance - Happy flow test","inputs":{"issuerClaim":["3583233690122716044519380227940806650830","19104853439462320209059061537253618984153217267677512271018416655565783041","10","0","30803922965249841627828060161","0","0","0"],"issuerClaimMtp":["0","0","0","0","20705360459443886266589173521200199826970601318029396875976898748762842059297","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],"issuerClaimClaimsRoot":"4291331108778058814748735252751774985133130667958634779040926608237236193887","issuerClaimRevRoot":"0","issuerClaimRootsRoot":"0","issuerClaimIdenState":"5687720250943511874245715094520098014548846873346473635855112185560372332782","issuerClaimNonRevMtp":["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],"issuerClaimNonRevMtpNoAux":"1","issuerClaimNonRevMtpAuxHi":"0","issuerClaimNonRevMtpAuxHv":"0","issuerClaimNonRevClaimsRoot":"4291331108778058814748735252751774985133130667958634779040926608237236193887","issuerClaimNonRevRevRoot":"0","issuerClaimNonRevRootsRoot":"0","issuerClaimNonRevState":"5687720250943511874245715094520098014548846873346473635855112185560372332782","userGenesisID":"19104853439462320209059061537253618984153217267677512271018416655565783041","profileNonce":"0"},"expOut":{"userID":"19104853439462320209059061537253618984153217267677512271018416655565783041"}}

    ];
    let circuit;
    this.timeout(300000)

    before(async () => {
        circuit = await wasm_tester(
            path.join(__dirname, "../circuits", "sybilTest.circom"),
            {
                output: path.join(__dirname, "../circuits", "build/sybil"),
                recompile: true,
                reduceConstraints: false,
            },
        );
    });

    tests.forEach(({desc, inputs, expOut}) => {
        it(`auth ${desc}`, async function() {
            const w = await circuit.calculateWitness(inputs, true);
            await circuit.checkConstraints(w);
            await circuit.assertOut(w, expOut);
        });
    });
});
