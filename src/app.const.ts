import { Token } from "./types"

export const tokens: Token[] = [{
  id: 'WBTC',
  name: 'bitcoin'
}, {
  id: 'WETH',
  name: 'ethereum'
}, {
  id: 'LINK',
  name: 'chainlink'
}, {
  id: 'DAI',
  name: 'dai'
}, {
  id: 'YFI',
  name: 'yearn'
}, {
  id: 'ALCX',
  name: 'alchemy'
}, {
  id: 'LUNA',
  name: 'terra'
}, {
  id: 'alETH',
  name: 'ethereum'
}, {
  id: 'alUSD',
  name: 'tether'
}]

export const pools = [
  {
    "name": "YFI/DAI - CALL",
    "optionType": "CALL",
    "pairName": "YFI/DAI",
    "totalDeposited": "85496929427457619576",
    "totalWithdrawn": "76918817405566234835",
    "totalLocked": "2558400000000000000",
    "startTimestamp": "1645818491",
    "totalAvailable": "2896066645992579401",
    "netSizeInUsd": "51779159948408413332689",
    "averageReturn": "63585864023141144000",
    "totalVolume": "39446388944319371879"
  },
  {
    "name": "YFI/DAI - PUT",
    "optionType": "PUT",
    "pairName": "YFI/DAI",
    "totalDeposited": "1142508236938217591203185",
    "totalWithdrawn": "1052070589534158708851217",
    "totalLocked": "3600000000000000000000",
    "startTimestamp": "1645818491",
    "totalAvailable": "78931885702378219035796",
    "netSizeInUsd": "82528879065782081397276",
    "averageReturn": "91258328883369594000",
    "totalVolume": "76670764598034805694400"
  },
  {
    "name": "WBTC/DAI - CALL",
    "optionType": "CALL",
    "pairName": "WBTC/DAI",
    "totalDeposited": "10783255459",
    "totalWithdrawn": "9337296663",
    "totalLocked": "398300000",
    "startTimestamp": "1635473495",
    "totalAvailable": "885587969",
    "netSizeInUsd": "275391915129749600000000",
    "averageReturn": "8879146100",
    "totalVolume": "9268782695"
  },
  {
    "name": "WBTC/DAI - PUT",
    "optionType": "PUT",
    "pairName": "WBTC/DAI",
    "totalDeposited": "4406167003140159360230226",
    "totalWithdrawn": "4237947484031935399292893",
    "totalLocked": "105461800000000000000000",
    "startTimestamp": "1635473495",
    "totalAvailable": "42567161365476988098709",
    "netSizeInUsd": "148028961365476988098709",
    "averageReturn": "87997494078105534400",
    "totalVolume": "1002184800000000000000000"
  },
  {
    "name": "LINK/DAI - CALL",
    "optionType": "CALL",
    "pairName": "LINK/DAI",
    "totalDeposited": "219943058028964044177135",
    "totalWithdrawn": "166383619942463861348905",
    "totalLocked": "2990000000000000000000",
    "startTimestamp": "1635473526",
    "totalAvailable": "50039307307653820251141",
    "netSizeInUsd": "369896665722794137580206",
    "averageReturn": "99010201006981841900",
    "totalVolume": "1172066831229806037518165"
  },
  {
    "name": "LINK/DAI - PUT",
    "optionType": "PUT",
    "pairName": "LINK/DAI",
    "totalDeposited": "4745197217630284412266785",
    "totalWithdrawn": "4637406454122692210712536",
    "totalLocked": "29604999999999999996725",
    "startTimestamp": "1635473526",
    "totalAvailable": "28124708800926492907713",
    "netSizeInUsd": "57724280476407941786310",
    "averageReturn": "53557194440746606800",
    "totalVolume": "626739836002908681348098"
  },
  {
    "name": "WETH/DAI - CALL",
    "optionType": "CALL",
    "pairName": "WETH/DAI",
    "totalDeposited": "3074203028159895131383",
    "totalWithdrawn": "2374753092009074908346",
    "totalLocked": "146100000000000000000",
    "startTimestamp": "1635473465",
    "totalAvailable": "169659698161910234487",
    "netSizeInUsd": "524082127448260695498774",
    "averageReturn": "45144002714416425100",
    "totalVolume": "3745375350109841187231"
  },
  {
    "name": "WETH/DAI - PUT",
    "optionType": "PUT",
    "pairName": "WETH/DAI",
    "totalDeposited": "9189618501150190128416510",
    "totalWithdrawn": "8589143338255459793877384",
    "totalLocked": "64353350000000000000000",
    "startTimestamp": "1635473465",
    "totalAvailable": "141543704273022801199109",
    "netSizeInUsd": "205897054273022801199109",
    "averageReturn": "34289020928101024200",
    "totalVolume": "7815073487428786614932600"
  },
  {
    "name": "LUNA/DAI - CALL",
    "optionType": "CALL",
    "pairName": "LUNA/DAI",
    "totalDeposited": "6830429755052126700707646",
    "totalWithdrawn": "6819824194320940986385304",
    "totalLocked": "0",
    "startTimestamp": "1648158668",
    "totalAvailable": "10634296462321210319100",
    "netSizeInUsd": "211659627868093976410",
    "averageReturn": "100270949663708005500",
    "totalVolume": "4016000000000000000000"
  },
  {
    "name": "LUNA/DAI - PUT",
    "optionType": "PUT",
    "pairName": "LUNA/DAI",
    "totalDeposited": "813391218632706741207803",
    "totalWithdrawn": "170696230798235890823629",
    "totalLocked": "0",
    "startTimestamp": "1648158668",
    "totalAvailable": "9109776718833675889060",
    "netSizeInUsd": "9137106048990176916727",
    "averageReturn": "1417433913640531000",
    "totalVolume": "1492295237120844559682840"
  },
  {
    "name": "ALCX/DAI - CALL",
    "optionType": "CALL",
    "pairName": "ALCX/DAI",
    "totalDeposited": "5344158891518481253517",
    "totalWithdrawn": "2483635110113642493984",
    "totalLocked": "0",
    "startTimestamp": "1642880490",
    "totalAvailable": "2966262755386990584227",
    "netSizeInUsd": "80768367566801818052501",
    "averageReturn": "103696489945985420100",
    "totalVolume": "37608000000000000000000"
  },
  {
    "name": "ALCX/DAI - PUT",
    "optionType": "PUT",
    "pairName": "ALCX/DAI",
    "totalDeposited": "1109336745104096998024543",
    "totalWithdrawn": "1008636098603822503088292",
    "totalLocked": "18055000000000000000000",
    "startTimestamp": "1642880490",
    "totalAvailable": "26722645636723527329305",
    "netSizeInUsd": "44779384800480057671106",
    "averageReturn": "44466095494830283900",
    "totalVolume": "1180210335549443228106243"
  },
  {
    "name": "alETH/alUSD - CALL",
    "optionType": "CALL",
    "pairName": "alETH/alUSD",
    "totalDeposited": "756587456376063490025",
    "totalWithdrawn": "702203693587501709226",
    "totalLocked": "0",
    "startTimestamp": "1642879989",
    "totalAvailable": "25016857125622248127",
    "netSizeInUsd": "41772715630751256386122",
    "averageReturn": "46000599890237638200",
    "totalVolume": "117362910914856454468"
  },
  {
    "name": "alETH/alUSD - PUT",
    "optionType": "PUT",
    "pairName": "alETH/alUSD",
    "totalDeposited": "644667954440345400473292",
    "totalWithdrawn": "547780515382833009169792",
    "totalLocked": "19300000000000000000000",
    "startTimestamp": "1642879989",
    "totalAvailable": "38941910654707330325123",
    "netSizeInUsd": "58251355745358204212881",
    "averageReturn": "60112963270847656000",
    "totalVolume": "654808714400416200404000"
  }
]