import {describe} from "mocha";

const path = require("path");
const wasm_tester = require("circom_tester").wasm;

// inputs MUST be generated by GO-CIRCUITS library https://github.com/iden3/go-circuits (using corresponding test)
describe("sybilTestMTP.circom:", async function() {

    const tests = [
        {"desc":"Sybil resistance - Happy flow - MTP","inputs":{"issuerClaim":["3583233690122716044519380227940806650830","23148936466334350744548790012294489365207440754509988986684797708370051073","10","0","30803922965249841627828060161","0","0","0"],"issuerClaimMtp":["0","0","0","20643387758736831799596675626240785455902781070167728593409367019626753600795","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],"issuerClaimClaimsRoot":"5181482836916141156416342038332162656372113141706502558354777241159764399436","issuerClaimRevRoot":"0","issuerClaimRootsRoot":"0","issuerClaimIdenState":"3339503409184382089877035147936476106276990951173542963633720034821185132093","issuerClaimNonRevMtp":["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],"issuerClaimNonRevMtpNoAux":"1","issuerClaimNonRevMtpAuxHi":"0","issuerClaimNonRevMtpAuxHv":"0","issuerClaimNonRevClaimsRoot":"5181482836916141156416342038332162656372113141706502558354777241159764399436","issuerClaimNonRevRevRoot":"0","issuerClaimNonRevRootsRoot":"0","issuerClaimNonRevState":"3339503409184382089877035147936476106276990951173542963633720034821185132093","holderClaim":["262057681346829900854325169563380898778","0","0","0","145645","0","10","0"],"holderClaimMtp":["8162166103065016664685834856644195001371303013149727027131225893397958846382","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],"holderClaimClaimsRoot":"12006277200756836824787057541628799261995319529473680287669983495894425006238","holderClaimRevRoot":"0","holderClaimRootsRoot":"0","holderClaimIdenState":"1438537536394088315184748264837402497932771798518495453409040400944219084229","gistRoot":"11877884399122528031402746070242028867338583997062808064326290853570580874470","gistMtp":["0","0","0","0","1243904711429961858774220647610724273798918457991486031567244100767259239747","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],"gistMtpAuxHi":"0","gistMtpAuxHv":"0","gistMtpNoAux":"0","crs":"123456789","userGenesisID":"23148936466334350744548790012294489365207440754509988986684797708370051073","profileNonce":"0","claimSubjectProfileNonce":"0","requestID":"321","issuerID":"123","currentTimestamp":"1642074362"},"expOut":{"userID":"23148936466334350744548790012294489365207440754509988986684797708370051073","sybilID":"21411712858152195557182873996645875700319223809429848212725198416822632213180"}},
        {"desc":"Sybil resistance - Happy flow with Profile - MTP","inputs":{"issuerClaim":["3583233690122716044519380227940806650830","23148936466334350744548790012294489365207440754509988986684797708370051073","10","0","30803922965249841627828060161","0","0","0"],"issuerClaimMtp":["0","0","0","20643387758736831799596675626240785455902781070167728593409367019626753600795","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],"issuerClaimClaimsRoot":"5181482836916141156416342038332162656372113141706502558354777241159764399436","issuerClaimRevRoot":"0","issuerClaimRootsRoot":"0","issuerClaimIdenState":"3339503409184382089877035147936476106276990951173542963633720034821185132093","issuerClaimNonRevMtp":["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],"issuerClaimNonRevMtpNoAux":"1","issuerClaimNonRevMtpAuxHi":"0","issuerClaimNonRevMtpAuxHv":"0","issuerClaimNonRevClaimsRoot":"5181482836916141156416342038332162656372113141706502558354777241159764399436","issuerClaimNonRevRevRoot":"0","issuerClaimNonRevRootsRoot":"0","issuerClaimNonRevState":"3339503409184382089877035147936476106276990951173542963633720034821185132093","holderClaim":["262057681346829900854325169563380898778","0","0","0","145645","0","10","0"],"holderClaimMtp":["8162166103065016664685834856644195001371303013149727027131225893397958846382","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],"holderClaimClaimsRoot":"12006277200756836824787057541628799261995319529473680287669983495894425006238","holderClaimRevRoot":"0","holderClaimRootsRoot":"0","holderClaimIdenState":"1438537536394088315184748264837402497932771798518495453409040400944219084229","gistRoot":"11877884399122528031402746070242028867338583997062808064326290853570580874470","gistMtp":["0","0","0","0","1243904711429961858774220647610724273798918457991486031567244100767259239747","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],"gistMtpAuxHi":"0","gistMtpAuxHv":"0","gistMtpNoAux":"0","crs":"123456789","userGenesisID":"23148936466334350744548790012294489365207440754509988986684797708370051073","profileNonce":"10","claimSubjectProfileNonce":"0","requestID":"321","issuerID":"123","currentTimestamp":"1642074362"},"expOut":{"userID":"19816097857299506276751016592539988756969255304244082727801276212869922817","sybilID":"21411712858152195557182873996645875700319223809429848212725198416822632213180"}},
        {"desc":"Sybil resistance - Happy flow with Profile and Subject - MTP","inputs":{"issuerClaim":["3583233690122716044519380227940806650830","24497320812635010775435456013830217801375919178980935564312517783529521153","10","0","30803922965249841627828060161","0","0","0"],"issuerClaimMtp":["20643387758736831799596675626240785455902781070167728593409367019626753600795","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],"issuerClaimClaimsRoot":"7548989542047724266078821565632990941857981951889314326285276071945019646899","issuerClaimRevRoot":"0","issuerClaimRootsRoot":"0","issuerClaimIdenState":"5506222531691139844295896785526877493099929256302137379679372984046649128508","issuerClaimNonRevMtp":["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],"issuerClaimNonRevMtpNoAux":"1","issuerClaimNonRevMtpAuxHi":"0","issuerClaimNonRevMtpAuxHv":"0","issuerClaimNonRevClaimsRoot":"7548989542047724266078821565632990941857981951889314326285276071945019646899","issuerClaimNonRevRevRoot":"0","issuerClaimNonRevRootsRoot":"0","issuerClaimNonRevState":"5506222531691139844295896785526877493099929256302137379679372984046649128508","holderClaim":["262057681346829900854325169563380898778","0","0","0","145645","0","10","0"],"holderClaimMtp":["8162166103065016664685834856644195001371303013149727027131225893397958846382","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],"holderClaimClaimsRoot":"12006277200756836824787057541628799261995319529473680287669983495894425006238","holderClaimRevRoot":"0","holderClaimRootsRoot":"0","holderClaimIdenState":"1438537536394088315184748264837402497932771798518495453409040400944219084229","gistRoot":"11877884399122528031402746070242028867338583997062808064326290853570580874470","gistMtp":["0","0","0","0","1243904711429961858774220647610724273798918457991486031567244100767259239747","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],"gistMtpAuxHi":"0","gistMtpAuxHv":"0","gistMtpNoAux":"0","crs":"123456789","userGenesisID":"23148936466334350744548790012294489365207440754509988986684797708370051073","profileNonce":"10","claimSubjectProfileNonce":"999","requestID":"321","issuerID":"123","currentTimestamp":"1642074362"},"expOut":{"userID":"19816097857299506276751016592539988756969255304244082727801276212869922817","sybilID":"1150468086655797487178838002550740766405123759104799896729630553107465758891"}}
    ];

    let circuit;
    this.timeout(300000);

    before(async () => {
        circuit = await wasm_tester(
            path.join(__dirname, "../circuits", "sybilTestMTP.circom"),
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



describe("sybilTestSig.circom:", async function() {

    const tests = [
        {"desc":"Sybil resistance - Happy flow - Sig","inputs":{"issuerAuthClaim":["80551937543569765027552589160822318028","0","18843627616807347027405965102907494712213509184168391784663804560181782095821","21769574296201138406688395494914474950554632404504713590270198507141791084591","17476719578317212277","0","0","0"],"issuerAuthClaimMtp":["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],"issuerAuthClaimsRoot":"20643387758736831799596675626240785455902781070167728593409367019626753600795","issuerAuthRevRoot":"0","issuerAuthRootsRoot":"0","issuerAuthClaimNonRevMtp":["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],"issuerAuthClaimNonRevMtpAuxHi":"0","issuerAuthClaimNonRevMtpAuxHv":"0","issuerAuthClaimNonRevMtpNoAux":"1","issuerClaim":["3583233690122716044519380227940806650830","23148936466334350744548790012294489365207440754509988986684797708370051073","10","0","30803922965249841627828060161","0","0","0"],"issuerClaimNonRevClaimsRoot":"20643387758736831799596675626240785455902781070167728593409367019626753600795","issuerClaimNonRevRevRoot":"0","issuerClaimNonRevRootsRoot":"0","issuerClaimNonRevState":"2943483356559152311923412925436024635269538717812859789851139200242297094","issuerClaimNonRevMtp":["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],"issuerClaimNonRevMtpAuxHi":"0","issuerClaimNonRevMtpAuxHv":"0","issuerClaimNonRevMtpNoAux":"1","issuerClaimSignatureR8x":"6009541096871527792243386384096231340067474190101091530507148551135935669869","issuerClaimSignatureR8y":"21407298901003665469054234025891175478757417093942142815529365365949388290718","issuerClaimSignatureS":"1061441685873832236639155829779552898548912415538872104865210006348646647963","holderClaim":["262057681346829900854325169563380898778","0","0","0","145645","0","10","0"],"holderClaimMtp":["8162166103065016664685834856644195001371303013149727027131225893397958846382","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],"holderClaimClaimsRoot":"12006277200756836824787057541628799261995319529473680287669983495894425006238","holderClaimRevRoot":"0","holderClaimRootsRoot":"0","holderClaimIdenState":"1438537536394088315184748264837402497932771798518495453409040400944219084229","gistRoot":"11877884399122528031402746070242028867338583997062808064326290853570580874470","gistMtp":["0","0","0","0","1243904711429961858774220647610724273798918457991486031567244100767259239747","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],"gistMtpAuxHi":"0","gistMtpAuxHv":"0","gistMtpNoAux":"0","crs":"123456789","userGenesisID":"23148936466334350744548790012294489365207440754509988986684797708370051073","profileNonce":"0","claimSubjectProfileNonce":"","requestID":"321","issuerID":"123","currentTimestamp":"1642074362"},"expOut":{"userID":"23148936466334350744548790012294489365207440754509988986684797708370051073","sybilID":"21411712858152195557182873996645875700319223809429848212725198416822632213180"}},
        {"desc":"Sybil resistance - Happy flow with Profile - Sig","inputs":{"issuerAuthClaim":["80551937543569765027552589160822318028","0","18843627616807347027405965102907494712213509184168391784663804560181782095821","21769574296201138406688395494914474950554632404504713590270198507141791084591","17476719578317212277","0","0","0"],"issuerAuthClaimMtp":["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],"issuerAuthClaimsRoot":"20643387758736831799596675626240785455902781070167728593409367019626753600795","issuerAuthRevRoot":"0","issuerAuthRootsRoot":"0","issuerAuthClaimNonRevMtp":["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],"issuerAuthClaimNonRevMtpAuxHi":"0","issuerAuthClaimNonRevMtpAuxHv":"0","issuerAuthClaimNonRevMtpNoAux":"1","issuerClaim":["3583233690122716044519380227940806650830","23148936466334350744548790012294489365207440754509988986684797708370051073","10","0","30803922965249841627828060161","0","0","0"],"issuerClaimNonRevClaimsRoot":"20643387758736831799596675626240785455902781070167728593409367019626753600795","issuerClaimNonRevRevRoot":"0","issuerClaimNonRevRootsRoot":"0","issuerClaimNonRevState":"2943483356559152311923412925436024635269538717812859789851139200242297094","issuerClaimNonRevMtp":["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],"issuerClaimNonRevMtpAuxHi":"0","issuerClaimNonRevMtpAuxHv":"0","issuerClaimNonRevMtpNoAux":"1","issuerClaimSignatureR8x":"6009541096871527792243386384096231340067474190101091530507148551135935669869","issuerClaimSignatureR8y":"21407298901003665469054234025891175478757417093942142815529365365949388290718","issuerClaimSignatureS":"1061441685873832236639155829779552898548912415538872104865210006348646647963","holderClaim":["262057681346829900854325169563380898778","0","0","0","145645","0","10","0"],"holderClaimMtp":["8162166103065016664685834856644195001371303013149727027131225893397958846382","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],"holderClaimClaimsRoot":"12006277200756836824787057541628799261995319529473680287669983495894425006238","holderClaimRevRoot":"0","holderClaimRootsRoot":"0","holderClaimIdenState":"1438537536394088315184748264837402497932771798518495453409040400944219084229","gistRoot":"11877884399122528031402746070242028867338583997062808064326290853570580874470","gistMtp":["0","0","0","0","1243904711429961858774220647610724273798918457991486031567244100767259239747","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],"gistMtpAuxHi":"0","gistMtpAuxHv":"0","gistMtpNoAux":"0","crs":"123456789","userGenesisID":"23148936466334350744548790012294489365207440754509988986684797708370051073","profileNonce":"10","claimSubjectProfileNonce":"","requestID":"321","issuerID":"123","currentTimestamp":"1642074362"},"expOut":{"userID":"19816097857299506276751016592539988756969255304244082727801276212869922817","sybilID":"21411712858152195557182873996645875700319223809429848212725198416822632213180"}}
    ];
    let circuit;
    this.timeout(300000);

    before(async () => {
        circuit = await wasm_tester(
            path.join(__dirname, "../circuits", "sybilTestSig.circom"),
            {
                output: path.join(__dirname, "../circuits", "build/sybilSig"),
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