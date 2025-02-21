// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Contract;
  return {
    create: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc5],
    created: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc5],
    log: [ctc1, ctc0],
    that: [ctc1, ctc0, ctc0]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc5 = stdlib.T_Object({
    description: ctc1,
    hardCap: ctc2,
    id: ctc2,
    link: ctc3,
    maxContribution: ctc2,
    minContribution: ctc2,
    owner: ctc0,
    privateSaleAmt: ctc2,
    softCap: ctc2,
    title: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Data({
    None: ctc7,
    Some: ctc0
    });
  const ctc9 = stdlib.T_Data({
    None: ctc7,
    Some: ctc2
    });
  const ctc10 = stdlib.T_Data({
    None: ctc7,
    Some: ctc7
    });
  const map0_ctc = ctc8;
  
  const map1_ctc = ctc9;
  
  const map2_ctc = ctc10;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      2: [ctc0],
      3: [ctc0, ctc5, ctc2, ctc2, ctc2],
      5: [ctc0, ctc0, ctc2],
      7: [ctc0, ctc0, ctc2],
      9: [ctc0, ctc2, ctc2, ctc0, ctc2],
      12: [ctc0, ctc2, ctc0, ctc2, ctc2],
      13: [ctc0, ctc5, ctc2, ctc2, ctc0, ctc6, ctc2, ctc2, ctc0, ctc2, ctc2],
      14: [ctc0],
      17: [ctc0, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc2, ctc4, ctc5]);
  return {
    mapDataTy: ctc6
    };
  };
export async function _Contributors_claimRefund12(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_claimRefund12 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_claimRefund12 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v721, v738, v755, v952, v960] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'), [ctc1, ctc3, ctc1, ctc3, ctc3]);
  const v968 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:224:15:application call to [unknown function] (defined at: ./index.rsh:224:15:function exp)', 'at ./index.rsh:224:15:application call to [unknown function] (defined at: ./index.rsh:224:15:function exp)'],
    msg: 'in',
    who: 'Contributors_claimRefund'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v721, v738, v755, v952, v960, v968],
    evt_cnt: 1,
    funcNum: 9,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:224:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v972], secs: v974, time: v973, didSend: v400, from: v971 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_claimRefund"
        });
      ;
      const v977 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v971), null);
      let v978;
      switch (v977[0]) {
        case 'None': {
          const v979 = v977[1];
          v978 = stdlib.checkedBigNumberify('./index.rsh:218:55:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v980 = v977[1];
          v978 = v980;
          
          break;
          }
        }
      const v981 = stdlib.ge(v960, v978);
      const v982 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v971), null);
      let v983;
      switch (v982[0]) {
        case 'None': {
          const v984 = v982[1];
          v983 = false;
          
          break;
          }
        case 'Some': {
          const v985 = v982[1];
          v983 = true;
          
          break;
          }
        }
      const v986 = v981 ? v983 : false;
      if (v986) {
        let v988;
        switch (v977[0]) {
          case 'None': {
            const v989 = v977[1];
            v988 = stdlib.checkedBigNumberify('./index.rsh:218:55:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v990 = v977[1];
            v988 = v990;
            
            break;
            }
          }
        const v991 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v971), null);
        let v992;
        switch (v991[0]) {
          case 'None': {
            const v993 = v991[1];
            v992 = v755;
            
            break;
            }
          case 'Some': {
            const v994 = v991[1];
            v992 = v994;
            
            break;
            }
          }
        const v998 = stdlib.sub(v960, v988);
        sim_r.txns.push({
          kind: 'from',
          to: v992,
          tok: undefined /* Nothing */
          });
        await stdlib.simMapSet(sim_r, 2, v971, undefined /* Nothing */);
        const v1001 = 'refundPassed        ';
        null;
        const v1002 = true;
        const v1003 = await txn1.getOutput('Contributors_claimRefund', 'v1002', ctc7, v1002);
        
        const v1008 = stdlib.sub(v952, stdlib.checkedBigNumberify('./index.rsh:231:34:decimal', stdlib.UInt_max, '1'));
        const v2024 = v1008;
        const v2026 = v998;
        const v2027 = stdlib.gt(v1008, stdlib.checkedBigNumberify('./index.rsh:223:29:decimal', stdlib.UInt_max, '0'));
        const v2028 = stdlib.gt(v998, stdlib.checkedBigNumberify('./index.rsh:223:51:decimal', stdlib.UInt_max, '0'));
        const v2029 = v2027 ? v2028 : false;
        if (v2029) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v721,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        const v1015 = 'refundFailed        ';
        null;
        const v1016 = false;
        const v1017 = await txn1.getOutput('Contributors_claimRefund', 'v1016', ctc7, v1016);
        
        const v2031 = v952;
        const v2033 = v960;
        const v2034 = stdlib.gt(v952, stdlib.checkedBigNumberify('./index.rsh:223:29:decimal', stdlib.UInt_max, '0'));
        const v2035 = stdlib.gt(v960, stdlib.checkedBigNumberify('./index.rsh:223:51:decimal', stdlib.UInt_max, '0'));
        const v2036 = v2034 ? v2035 : false;
        if (v2036) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v721,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc1, ctc3, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v972], secs: v974, time: v973, didSend: v400, from: v971 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v977 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v971), null);
  let v978;
  switch (v977[0]) {
    case 'None': {
      const v979 = v977[1];
      v978 = stdlib.checkedBigNumberify('./index.rsh:218:55:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v980 = v977[1];
      v978 = v980;
      
      break;
      }
    }
  const v981 = stdlib.ge(v960, v978);
  const v982 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v971), null);
  let v983;
  switch (v982[0]) {
    case 'None': {
      const v984 = v982[1];
      v983 = false;
      
      break;
      }
    case 'Some': {
      const v985 = v982[1];
      v983 = true;
      
      break;
      }
    }
  const v986 = v981 ? v983 : false;
  if (v986) {
    let v988;
    switch (v977[0]) {
      case 'None': {
        const v989 = v977[1];
        v988 = stdlib.checkedBigNumberify('./index.rsh:218:55:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v990 = v977[1];
        v988 = v990;
        
        break;
        }
      }
    const v991 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v971), null);
    let v992;
    switch (v991[0]) {
      case 'None': {
        const v993 = v991[1];
        v992 = v755;
        
        break;
        }
      case 'Some': {
        const v994 = v991[1];
        v992 = v994;
        
        break;
        }
      }
    const v998 = stdlib.sub(v960, v988);
    ;
    await stdlib.mapSet(map2, v971, undefined /* Nothing */);
    const v1001 = 'refundPassed        ';
    null;
    const v1002 = true;
    const v1003 = await txn1.getOutput('Contributors_claimRefund', 'v1002', ctc7, v1002);
    if (v400) {
      stdlib.protect(ctc0, await interact.out(v972, v1003), {
        at: './index.rsh:224:16:application',
        fs: ['at ./index.rsh:224:16:application call to [unknown function] (defined at: ./index.rsh:224:16:function exp)', 'at ./index.rsh:230:21:application call to "notify" (defined at: ./index.rsh:224:42:function exp)', 'at ./index.rsh:224:42:application call to [unknown function] (defined at: ./index.rsh:224:42:function exp)'],
        msg: 'out',
        who: 'Contributors_claimRefund'
        });
      }
    else {
      }
    
    const v1008 = stdlib.sub(v952, stdlib.checkedBigNumberify('./index.rsh:231:34:decimal', stdlib.UInt_max, '1'));
    const v2024 = v1008;
    const v2026 = v998;
    const v2027 = stdlib.gt(v1008, stdlib.checkedBigNumberify('./index.rsh:223:29:decimal', stdlib.UInt_max, '0'));
    const v2028 = stdlib.gt(v998, stdlib.checkedBigNumberify('./index.rsh:223:51:decimal', stdlib.UInt_max, '0'));
    const v2029 = v2027 ? v2028 : false;
    if (v2029) {
      return;
      }
    else {
      ;
      return;
      }}
  else {
    const v1015 = 'refundFailed        ';
    null;
    const v1016 = false;
    const v1017 = await txn1.getOutput('Contributors_claimRefund', 'v1016', ctc7, v1016);
    if (v400) {
      stdlib.protect(ctc0, await interact.out(v972, v1017), {
        at: './index.rsh:224:16:application',
        fs: ['at ./index.rsh:224:16:application call to [unknown function] (defined at: ./index.rsh:224:16:function exp)', 'at ./index.rsh:234:21:application call to "notify" (defined at: ./index.rsh:224:42:function exp)', 'at ./index.rsh:224:42:application call to [unknown function] (defined at: ./index.rsh:224:42:function exp)'],
        msg: 'out',
        who: 'Contributors_claimRefund'
        });
      }
    else {
      }
    
    const v2031 = v952;
    const v2033 = v960;
    const v2034 = stdlib.gt(v952, stdlib.checkedBigNumberify('./index.rsh:223:29:decimal', stdlib.UInt_max, '0'));
    const v2035 = stdlib.gt(v960, stdlib.checkedBigNumberify('./index.rsh:223:51:decimal', stdlib.UInt_max, '0'));
    const v2036 = v2034 ? v2035 : false;
    if (v2036) {
      return;
      }
    else {
      ;
      return;
      }}
  
  
  };
export async function _Contributors_contribute13(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_contribute13 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_contribute13 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc9 = stdlib.T_Object({
    description: ctc6,
    hardCap: ctc3,
    id: ctc3,
    link: ctc7,
    maxContribution: ctc3,
    minContribution: ctc3,
    owner: ctc1,
    privateSaleAmt: ctc3,
    softCap: ctc3,
    title: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc3]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v721, v734, v738, v741, v750, v752, v753, v754, v755, v756, v763] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '13'), [ctc1, ctc9, ctc3, ctc3, ctc1, ctc10, ctc3, ctc3, ctc1, ctc3, ctc3]);
  const v776 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:116:46:application call to [unknown function] (defined at: ./index.rsh:116:46:function exp)', 'at ./index.rsh:116:46:application call to [unknown function] (defined at: ./index.rsh:116:46:function exp)'],
    msg: 'in',
    who: 'Contributors_contribute'
    });
  const v777 = v776[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v779 = stdlib.gt(v777, stdlib.checkedBigNumberify('./index.rsh:117:23:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v779, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:117:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:116:46:application call to [unknown function] (defined at: ./index.rsh:116:46:function exp)', 'at ./index.rsh:116:46:application call to [unknown function] (defined at: ./index.rsh:116:46:function exp)'],
    msg: 'Contribution too small',
    who: 'Contributors_contribute'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v721, v734, v738, v741, v750, v752, v753, v754, v755, v756, v763, v776],
    evt_cnt: 1,
    funcNum: 10,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v777, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v788], secs: v790, time: v789, didSend: v197, from: v787 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_contribute"
        });
      const v792 = v788[stdlib.checkedBigNumberify('./index.rsh:116:14:spread', stdlib.UInt_max, '0')];
      const v796 = stdlib.add(v763, v792);
      sim_r.txns.push({
        amt: v792,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v801 = v796;
      const v802 = await txn1.getOutput('Contributors_contribute', 'v801', ctc3, v801);
      
      const v808 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v787), null);
      let v809;
      switch (v808[0]) {
        case 'None': {
          const v810 = v808[1];
          v809 = false;
          
          break;
          }
        case 'Some': {
          const v811 = v808[1];
          v809 = true;
          
          break;
          }
        }
      if (v809) {
        const v812 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v787), null);
        let v813;
        switch (v812[0]) {
          case 'None': {
            const v814 = v812[1];
            v813 = stdlib.checkedBigNumberify('./index.rsh:122:61:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v815 = v812[1];
            v813 = v815;
            
            break;
            }
          }
        await stdlib.simMapSet(sim_r, 1, v787, v813);
        const v816 = stdlib.add(v754, stdlib.checkedBigNumberify('./index.rsh:125:31:decimal', stdlib.UInt_max, '1'));
        const v817 = v734.hardCap;
        const v818 = stdlib.add(v753, v792);
        const v819 = stdlib.ge(v818, v817);
        const v820 = v819 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v821 = stdlib.eq(v820, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v2037 = v821;
        const v2038 = v753;
        const v2039 = v816;
        const v2040 = v787;
        const v2041 = v789;
        const v2043 = v796;
        const v2044 = stdlib.le(v756, v741);
        const v2045 = v2044 ? v821 : false;
        if (v2045) {
          sim_r.isHalt = false;
          }
        else {
          const v2047 = stdlib.ge(v753, v817);
          const v2048 = v2047 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v2049 = stdlib.eq(v2048, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v2049) {
            const v2050 = 'passed              ';
            null;
            const v2051 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:156:32:decimal', stdlib.UInt_max, '100'));
            const v2052 = stdlib.sub(v796, v2051);
            sim_r.txns.push({
              kind: 'from',
              to: v721,
              tok: undefined /* Nothing */
              });
            sim_r.isHalt = false;
            }
          else {
            const v2059 = v734.softCap;
            const v2060 = stdlib.ge(v753, v2059);
            if (v2060) {
              const v2061 = 'passed              ';
              null;
              const v2062 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:186:34:decimal', stdlib.UInt_max, '100'));
              const v2063 = stdlib.sub(v796, v2062);
              sim_r.txns.push({
                kind: 'from',
                to: v721,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }
            else {
              const v2070 = 'failed              ';
              null;
              sim_r.isHalt = false;
              }}}}
      else {
        const v829 = v734.maxContribution;
        const v830 = stdlib.gt(v792, v829);
        if (v830) {
          await stdlib.simMapSet(sim_r, 0, v787, v787);
          await stdlib.simMapSet(sim_r, 2, v787, null);
          await stdlib.simMapSet(sim_r, 1, v787, v829);
          const v834 = stdlib.add(v754, stdlib.checkedBigNumberify('./index.rsh:132:33:decimal', stdlib.UInt_max, '1'));
          const v835 = stdlib.add(v753, v829);
          const v836 = v734.hardCap;
          const v837 = stdlib.add(v753, v792);
          const v838 = stdlib.ge(v837, v836);
          const v839 = v838 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v840 = stdlib.eq(v839, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
          const v2113 = v840;
          const v2114 = v835;
          const v2115 = v834;
          const v2116 = v787;
          const v2117 = v789;
          const v2119 = v796;
          const v2120 = stdlib.le(v756, v741);
          const v2121 = v2120 ? v840 : false;
          if (v2121) {
            sim_r.isHalt = false;
            }
          else {
            const v2123 = stdlib.ge(v835, v836);
            const v2124 = v2123 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v2125 = stdlib.eq(v2124, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            if (v2125) {
              const v2126 = 'passed              ';
              null;
              const v2127 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:156:32:decimal', stdlib.UInt_max, '100'));
              const v2128 = stdlib.sub(v796, v2127);
              sim_r.txns.push({
                kind: 'from',
                to: v721,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }
            else {
              const v2135 = v734.softCap;
              const v2136 = stdlib.ge(v835, v2135);
              if (v2136) {
                const v2137 = 'passed              ';
                null;
                const v2138 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:186:34:decimal', stdlib.UInt_max, '100'));
                const v2139 = stdlib.sub(v796, v2138);
                sim_r.txns.push({
                  kind: 'from',
                  to: v721,
                  tok: undefined /* Nothing */
                  });
                sim_r.isHalt = false;
                }
              else {
                const v2146 = 'failed              ';
                null;
                sim_r.isHalt = false;
                }}}}
        else {
          const v848 = v734.minContribution;
          const v849 = stdlib.lt(v792, v848);
          if (v849) {
            await stdlib.simMapSet(sim_r, 0, v787, v787);
            await stdlib.simMapSet(sim_r, 2, v787, null);
            await stdlib.simMapSet(sim_r, 1, v787, v848);
            const v853 = stdlib.add(v754, stdlib.checkedBigNumberify('./index.rsh:138:33:decimal', stdlib.UInt_max, '1'));
            const v854 = stdlib.add(v753, v848);
            const v855 = v734.hardCap;
            const v856 = stdlib.add(v753, v792);
            const v857 = stdlib.ge(v856, v855);
            const v858 = v857 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v859 = stdlib.eq(v858, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            const v2189 = v859;
            const v2190 = v854;
            const v2191 = v853;
            const v2192 = v787;
            const v2193 = v789;
            const v2195 = v796;
            const v2196 = stdlib.le(v756, v741);
            const v2197 = v2196 ? v859 : false;
            if (v2197) {
              sim_r.isHalt = false;
              }
            else {
              const v2199 = stdlib.ge(v854, v855);
              const v2200 = v2199 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              const v2201 = stdlib.eq(v2200, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
              if (v2201) {
                const v2202 = 'passed              ';
                null;
                const v2203 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:156:32:decimal', stdlib.UInt_max, '100'));
                const v2204 = stdlib.sub(v796, v2203);
                sim_r.txns.push({
                  kind: 'from',
                  to: v721,
                  tok: undefined /* Nothing */
                  });
                sim_r.isHalt = false;
                }
              else {
                const v2211 = v734.softCap;
                const v2212 = stdlib.ge(v854, v2211);
                if (v2212) {
                  const v2213 = 'passed              ';
                  null;
                  const v2214 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:186:34:decimal', stdlib.UInt_max, '100'));
                  const v2215 = stdlib.sub(v796, v2214);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v721,
                    tok: undefined /* Nothing */
                    });
                  sim_r.isHalt = false;
                  }
                else {
                  const v2222 = 'failed              ';
                  null;
                  sim_r.isHalt = false;
                  }}}}
          else {
            await stdlib.simMapSet(sim_r, 0, v787, v787);
            await stdlib.simMapSet(sim_r, 2, v787, null);
            await stdlib.simMapSet(sim_r, 1, v787, v792);
            const v868 = stdlib.add(v754, stdlib.checkedBigNumberify('./index.rsh:144:33:decimal', stdlib.UInt_max, '1'));
            const v869 = stdlib.add(v753, v792);
            const v870 = v734.hardCap;
            const v872 = stdlib.ge(v869, v870);
            const v873 = v872 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v874 = stdlib.eq(v873, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            const v2265 = v874;
            const v2266 = v869;
            const v2267 = v868;
            const v2268 = v787;
            const v2269 = v789;
            const v2271 = v796;
            const v2272 = stdlib.le(v756, v741);
            const v2273 = v2272 ? v874 : false;
            if (v2273) {
              sim_r.isHalt = false;
              }
            else {
              const v2277 = stdlib.eq(v873, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
              if (v2277) {
                const v2278 = 'passed              ';
                null;
                const v2279 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:156:32:decimal', stdlib.UInt_max, '100'));
                const v2280 = stdlib.sub(v796, v2279);
                sim_r.txns.push({
                  kind: 'from',
                  to: v721,
                  tok: undefined /* Nothing */
                  });
                sim_r.isHalt = false;
                }
              else {
                const v2287 = v734.softCap;
                const v2288 = stdlib.ge(v869, v2287);
                if (v2288) {
                  const v2289 = 'passed              ';
                  null;
                  const v2290 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:186:34:decimal', stdlib.UInt_max, '100'));
                  const v2291 = stdlib.sub(v796, v2290);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v721,
                    tok: undefined /* Nothing */
                    });
                  sim_r.isHalt = false;
                  }
                else {
                  const v2298 = 'failed              ';
                  null;
                  sim_r.isHalt = false;
                  }}}}}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc9, ctc3, ctc3, ctc1, ctc10, ctc3, ctc3, ctc1, ctc3, ctc3, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v788], secs: v790, time: v789, didSend: v197, from: v787 } = txn1;
  undefined /* setApiDetails */;
  const v792 = v788[stdlib.checkedBigNumberify('./index.rsh:116:14:spread', stdlib.UInt_max, '0')];
  const v793 = stdlib.gt(v792, stdlib.checkedBigNumberify('./index.rsh:117:23:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v793, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:117:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:116:46:application call to [unknown function] (defined at: ./index.rsh:116:46:function exp)', 'at ./index.rsh:116:46:application call to [unknown function] (defined at: ./index.rsh:116:46:function exp)'],
    msg: 'Contribution too small',
    who: 'Contributors_contribute'
    });
  const v796 = stdlib.add(v763, v792);
  ;
  const v801 = v796;
  const v802 = await txn1.getOutput('Contributors_contribute', 'v801', ctc3, v801);
  if (v197) {
    stdlib.protect(ctc0, await interact.out(v788, v802), {
      at: './index.rsh:116:15:application',
      fs: ['at ./index.rsh:116:15:application call to [unknown function] (defined at: ./index.rsh:116:15:function exp)', 'at ./index.rsh:120:19:application call to "notify" (defined at: ./index.rsh:119:37:function exp)', 'at ./index.rsh:119:37:application call to [unknown function] (defined at: ./index.rsh:119:37:function exp)'],
      msg: 'out',
      who: 'Contributors_contribute'
      });
    }
  else {
    }
  
  const v808 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v787), null);
  let v809;
  switch (v808[0]) {
    case 'None': {
      const v810 = v808[1];
      v809 = false;
      
      break;
      }
    case 'Some': {
      const v811 = v808[1];
      v809 = true;
      
      break;
      }
    }
  if (v809) {
    const v812 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v787), null);
    let v813;
    switch (v812[0]) {
      case 'None': {
        const v814 = v812[1];
        v813 = stdlib.checkedBigNumberify('./index.rsh:122:61:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v815 = v812[1];
        v813 = v815;
        
        break;
        }
      }
    await stdlib.mapSet(map1, v787, v813);
    const v816 = stdlib.add(v754, stdlib.checkedBigNumberify('./index.rsh:125:31:decimal', stdlib.UInt_max, '1'));
    const v817 = v734.hardCap;
    const v818 = stdlib.add(v753, v792);
    const v819 = stdlib.ge(v818, v817);
    const v820 = v819 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    const v821 = stdlib.eq(v820, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    const v2037 = v821;
    const v2038 = v753;
    const v2039 = v816;
    const v2040 = v787;
    const v2041 = v789;
    const v2043 = v796;
    const v2044 = stdlib.le(v756, v741);
    const v2045 = v2044 ? v821 : false;
    if (v2045) {
      return;
      }
    else {
      const v2047 = stdlib.ge(v753, v817);
      const v2048 = v2047 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v2049 = stdlib.eq(v2048, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v2049) {
        const v2050 = 'passed              ';
        null;
        const v2051 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:156:32:decimal', stdlib.UInt_max, '100'));
        const v2052 = stdlib.sub(v796, v2051);
        ;
        return;
        }
      else {
        const v2059 = v734.softCap;
        const v2060 = stdlib.ge(v753, v2059);
        if (v2060) {
          const v2061 = 'passed              ';
          null;
          const v2062 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:186:34:decimal', stdlib.UInt_max, '100'));
          const v2063 = stdlib.sub(v796, v2062);
          ;
          return;
          }
        else {
          const v2070 = 'failed              ';
          null;
          return;
          }}}}
  else {
    const v829 = v734.maxContribution;
    const v830 = stdlib.gt(v792, v829);
    if (v830) {
      await stdlib.mapSet(map0, v787, v787);
      await stdlib.mapSet(map2, v787, null);
      await stdlib.mapSet(map1, v787, v829);
      const v834 = stdlib.add(v754, stdlib.checkedBigNumberify('./index.rsh:132:33:decimal', stdlib.UInt_max, '1'));
      const v835 = stdlib.add(v753, v829);
      const v836 = v734.hardCap;
      const v837 = stdlib.add(v753, v792);
      const v838 = stdlib.ge(v837, v836);
      const v839 = v838 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v840 = stdlib.eq(v839, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      const v2113 = v840;
      const v2114 = v835;
      const v2115 = v834;
      const v2116 = v787;
      const v2117 = v789;
      const v2119 = v796;
      const v2120 = stdlib.le(v756, v741);
      const v2121 = v2120 ? v840 : false;
      if (v2121) {
        return;
        }
      else {
        const v2123 = stdlib.ge(v835, v836);
        const v2124 = v2123 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v2125 = stdlib.eq(v2124, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        if (v2125) {
          const v2126 = 'passed              ';
          null;
          const v2127 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:156:32:decimal', stdlib.UInt_max, '100'));
          const v2128 = stdlib.sub(v796, v2127);
          ;
          return;
          }
        else {
          const v2135 = v734.softCap;
          const v2136 = stdlib.ge(v835, v2135);
          if (v2136) {
            const v2137 = 'passed              ';
            null;
            const v2138 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:186:34:decimal', stdlib.UInt_max, '100'));
            const v2139 = stdlib.sub(v796, v2138);
            ;
            return;
            }
          else {
            const v2146 = 'failed              ';
            null;
            return;
            }}}}
    else {
      const v848 = v734.minContribution;
      const v849 = stdlib.lt(v792, v848);
      if (v849) {
        await stdlib.mapSet(map0, v787, v787);
        await stdlib.mapSet(map2, v787, null);
        await stdlib.mapSet(map1, v787, v848);
        const v853 = stdlib.add(v754, stdlib.checkedBigNumberify('./index.rsh:138:33:decimal', stdlib.UInt_max, '1'));
        const v854 = stdlib.add(v753, v848);
        const v855 = v734.hardCap;
        const v856 = stdlib.add(v753, v792);
        const v857 = stdlib.ge(v856, v855);
        const v858 = v857 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v859 = stdlib.eq(v858, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v2189 = v859;
        const v2190 = v854;
        const v2191 = v853;
        const v2192 = v787;
        const v2193 = v789;
        const v2195 = v796;
        const v2196 = stdlib.le(v756, v741);
        const v2197 = v2196 ? v859 : false;
        if (v2197) {
          return;
          }
        else {
          const v2199 = stdlib.ge(v854, v855);
          const v2200 = v2199 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v2201 = stdlib.eq(v2200, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v2201) {
            const v2202 = 'passed              ';
            null;
            const v2203 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:156:32:decimal', stdlib.UInt_max, '100'));
            const v2204 = stdlib.sub(v796, v2203);
            ;
            return;
            }
          else {
            const v2211 = v734.softCap;
            const v2212 = stdlib.ge(v854, v2211);
            if (v2212) {
              const v2213 = 'passed              ';
              null;
              const v2214 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:186:34:decimal', stdlib.UInt_max, '100'));
              const v2215 = stdlib.sub(v796, v2214);
              ;
              return;
              }
            else {
              const v2222 = 'failed              ';
              null;
              return;
              }}}}
      else {
        await stdlib.mapSet(map0, v787, v787);
        await stdlib.mapSet(map2, v787, null);
        await stdlib.mapSet(map1, v787, v792);
        const v868 = stdlib.add(v754, stdlib.checkedBigNumberify('./index.rsh:144:33:decimal', stdlib.UInt_max, '1'));
        const v869 = stdlib.add(v753, v792);
        const v870 = v734.hardCap;
        const v872 = stdlib.ge(v869, v870);
        const v873 = v872 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v874 = stdlib.eq(v873, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v2265 = v874;
        const v2266 = v869;
        const v2267 = v868;
        const v2268 = v787;
        const v2269 = v789;
        const v2271 = v796;
        const v2272 = stdlib.le(v756, v741);
        const v2273 = v2272 ? v874 : false;
        if (v2273) {
          return;
          }
        else {
          const v2277 = stdlib.eq(v873, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v2277) {
            const v2278 = 'passed              ';
            null;
            const v2279 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:156:32:decimal', stdlib.UInt_max, '100'));
            const v2280 = stdlib.sub(v796, v2279);
            ;
            return;
            }
          else {
            const v2287 = v734.softCap;
            const v2288 = stdlib.ge(v869, v2287);
            if (v2288) {
              const v2289 = 'passed              ';
              null;
              const v2290 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:186:34:decimal', stdlib.UInt_max, '100'));
              const v2291 = stdlib.sub(v796, v2290);
              ;
              return;
              }
            else {
              const v2298 = 'failed              ';
              null;
              return;
              }}}}}}
  
  
  };
export async function _Contributors_contributed17(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_contributed17 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_contributed17 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc10 = stdlib.T_Contract;
  const ctc11 = stdlib.T_Struct([['id', ctc3], ['title', ctc7], ['link', ctc8], ['description', ctc9], ['owner', ctc1], ['contractInfo', ctc10]]);
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Data({
    Contributors_contributed0_478: ctc6,
    Contributors_creating0_478: ctc12,
    Contributors_timedOut0_478: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v721, v1046] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17'), [ctc1, ctc3]);
  const v1074 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:260:11:application call to [unknown function] (defined at: ./index.rsh:260:11:function exp)', 'at ./index.rsh:243:37:application call to "runContributors_contributed0_478" (defined at: ./index.rsh:260:11:function exp)', 'at ./index.rsh:243:37:application call to [unknown function] (defined at: ./index.rsh:243:37:function exp)'],
    msg: 'in',
    who: 'Contributors_contributed'
    });
  const v1084 = ['Contributors_contributed0_478', v1074];
  
  const txn1 = await (ctc.sendrecv({
    args: [v721, v1046, v1084],
    evt_cnt: 1,
    funcNum: 14,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:260:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1104], secs: v1106, time: v1105, didSend: v608, from: v1103 } = txn1;
      
      switch (v1104[0]) {
        case 'Contributors_contributed0_478': {
          const v1107 = v1104[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_contributed"
            });
          ;
          const v1115 = v1107[stdlib.checkedBigNumberify('./index.rsh:260:11:spread', stdlib.UInt_max, '0')];
          const v1116 = v1107[stdlib.checkedBigNumberify('./index.rsh:260:11:spread', stdlib.UInt_max, '1')];
          const v1117 = null;
          const v1118 = await txn1.getOutput('Contributors_contributed', 'v1117', ctc0, v1117);
          
          const v1125 = 'contributed         ';
          null;
          const v2343 = v1046;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Contributors_creating0_478': {
          const v1159 = v1104[1];
          
          break;
          }
        case 'Contributors_timedOut0_478': {
          const v1211 = v1104[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1104], secs: v1106, time: v1105, didSend: v608, from: v1103 } = txn1;
  switch (v1104[0]) {
    case 'Contributors_contributed0_478': {
      const v1107 = v1104[1];
      undefined /* setApiDetails */;
      ;
      const v1115 = v1107[stdlib.checkedBigNumberify('./index.rsh:260:11:spread', stdlib.UInt_max, '0')];
      const v1116 = v1107[stdlib.checkedBigNumberify('./index.rsh:260:11:spread', stdlib.UInt_max, '1')];
      const v1117 = null;
      const v1118 = await txn1.getOutput('Contributors_contributed', 'v1117', ctc0, v1117);
      if (v608) {
        stdlib.protect(ctc0, await interact.out(v1107, v1118), {
          at: './index.rsh:260:12:application',
          fs: ['at ./index.rsh:260:12:application call to [unknown function] (defined at: ./index.rsh:260:12:function exp)', 'at ./index.rsh:261:15:application call to "notify" (defined at: ./index.rsh:260:62:function exp)', 'at ./index.rsh:260:62:application call to [unknown function] (defined at: ./index.rsh:260:62:function exp)'],
          msg: 'out',
          who: 'Contributors_contributed'
          });
        }
      else {
        }
      
      const v1125 = 'contributed         ';
      null;
      const v2343 = v1046;
      return;
      
      break;
      }
    case 'Contributors_creating0_478': {
      const v1159 = v1104[1];
      return;
      break;
      }
    case 'Contributors_timedOut0_478': {
      const v1211 = v1104[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Contributors_creating17(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_creating17 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_creating17 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc9 = stdlib.T_Contract;
  const ctc10 = stdlib.T_Struct([['id', ctc3], ['title', ctc6], ['link', ctc7], ['description', ctc8], ['owner', ctc1], ['contractInfo', ctc9]]);
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Data({
    Contributors_contributed0_478: ctc12,
    Contributors_creating0_478: ctc11,
    Contributors_timedOut0_478: ctc12
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v721, v1046] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17'), [ctc1, ctc3]);
  const v1051 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:246:11:application call to [unknown function] (defined at: ./index.rsh:246:11:function exp)', 'at ./index.rsh:243:37:application call to "runContributors_creating0_478" (defined at: ./index.rsh:246:11:function exp)', 'at ./index.rsh:243:37:application call to [unknown function] (defined at: ./index.rsh:243:37:function exp)'],
    msg: 'in',
    who: 'Contributors_creating'
    });
  const v1070 = ['Contributors_creating0_478', v1051];
  
  const txn1 = await (ctc.sendrecv({
    args: [v721, v1046, v1070],
    evt_cnt: 1,
    funcNum: 14,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:246:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1104], secs: v1106, time: v1105, didSend: v608, from: v1103 } = txn1;
      
      switch (v1104[0]) {
        case 'Contributors_contributed0_478': {
          const v1107 = v1104[1];
          
          break;
          }
        case 'Contributors_creating0_478': {
          const v1159 = v1104[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_creating"
            });
          ;
          const v1179 = v1159[stdlib.checkedBigNumberify('./index.rsh:246:11:spread', stdlib.UInt_max, '0')];
          const v1180 = null;
          const v1181 = await txn1.getOutput('Contributors_creating', 'v1180', ctc0, v1180);
          
          const v1193 = v1179.id;
          const v1194 = v1179.title;
          const v1195 = v1179.link;
          const v1196 = v1179.description;
          const v1197 = v1179.owner;
          const v1198 = v1179.contractInfo;
          null;
          const v2355 = v1046;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Contributors_timedOut0_478': {
          const v1211 = v1104[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1104], secs: v1106, time: v1105, didSend: v608, from: v1103 } = txn1;
  switch (v1104[0]) {
    case 'Contributors_contributed0_478': {
      const v1107 = v1104[1];
      return;
      break;
      }
    case 'Contributors_creating0_478': {
      const v1159 = v1104[1];
      undefined /* setApiDetails */;
      ;
      const v1179 = v1159[stdlib.checkedBigNumberify('./index.rsh:246:11:spread', stdlib.UInt_max, '0')];
      const v1180 = null;
      const v1181 = await txn1.getOutput('Contributors_creating', 'v1180', ctc0, v1180);
      if (v608) {
        stdlib.protect(ctc0, await interact.out(v1159, v1181), {
          at: './index.rsh:246:12:application',
          fs: ['at ./index.rsh:246:12:application call to [unknown function] (defined at: ./index.rsh:246:12:function exp)', 'at ./index.rsh:247:15:application call to "notify" (defined at: ./index.rsh:246:49:function exp)', 'at ./index.rsh:246:49:application call to [unknown function] (defined at: ./index.rsh:246:49:function exp)'],
          msg: 'out',
          who: 'Contributors_creating'
          });
        }
      else {
        }
      
      const v1193 = v1179.id;
      const v1194 = v1179.title;
      const v1195 = v1179.link;
      const v1196 = v1179.description;
      const v1197 = v1179.owner;
      const v1198 = v1179.contractInfo;
      null;
      const v2355 = v1046;
      return;
      
      break;
      }
    case 'Contributors_timedOut0_478': {
      const v1211 = v1104[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Contributors_timedOut17(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_timedOut17 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_timedOut17 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc10 = stdlib.T_Contract;
  const ctc11 = stdlib.T_Struct([['id', ctc3], ['title', ctc7], ['link', ctc8], ['description', ctc9], ['owner', ctc1], ['contractInfo', ctc10]]);
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Data({
    Contributors_contributed0_478: ctc6,
    Contributors_creating0_478: ctc12,
    Contributors_timedOut0_478: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v721, v1046] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17'), [ctc1, ctc3]);
  const v1088 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:267:11:application call to [unknown function] (defined at: ./index.rsh:267:11:function exp)', 'at ./index.rsh:243:37:application call to "runContributors_timedOut0_478" (defined at: ./index.rsh:267:11:function exp)', 'at ./index.rsh:243:37:application call to [unknown function] (defined at: ./index.rsh:243:37:function exp)'],
    msg: 'in',
    who: 'Contributors_timedOut'
    });
  const v1098 = ['Contributors_timedOut0_478', v1088];
  
  const txn1 = await (ctc.sendrecv({
    args: [v721, v1046, v1098],
    evt_cnt: 1,
    funcNum: 14,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:267:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1104], secs: v1106, time: v1105, didSend: v608, from: v1103 } = txn1;
      
      switch (v1104[0]) {
        case 'Contributors_contributed0_478': {
          const v1107 = v1104[1];
          
          break;
          }
        case 'Contributors_creating0_478': {
          const v1159 = v1104[1];
          
          break;
          }
        case 'Contributors_timedOut0_478': {
          const v1211 = v1104[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_timedOut"
            });
          ;
          const v1252 = v1211[stdlib.checkedBigNumberify('./index.rsh:267:11:spread', stdlib.UInt_max, '0')];
          const v1253 = v1211[stdlib.checkedBigNumberify('./index.rsh:267:11:spread', stdlib.UInt_max, '1')];
          const v1254 = null;
          const v1255 = await txn1.getOutput('Contributors_timedOut', 'v1254', ctc0, v1254);
          
          const v1262 = 'timedOut            ';
          null;
          const v2367 = v1046;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1104], secs: v1106, time: v1105, didSend: v608, from: v1103 } = txn1;
  switch (v1104[0]) {
    case 'Contributors_contributed0_478': {
      const v1107 = v1104[1];
      return;
      break;
      }
    case 'Contributors_creating0_478': {
      const v1159 = v1104[1];
      return;
      break;
      }
    case 'Contributors_timedOut0_478': {
      const v1211 = v1104[1];
      undefined /* setApiDetails */;
      ;
      const v1252 = v1211[stdlib.checkedBigNumberify('./index.rsh:267:11:spread', stdlib.UInt_max, '0')];
      const v1253 = v1211[stdlib.checkedBigNumberify('./index.rsh:267:11:spread', stdlib.UInt_max, '1')];
      const v1254 = null;
      const v1255 = await txn1.getOutput('Contributors_timedOut', 'v1254', ctc0, v1254);
      if (v608) {
        stdlib.protect(ctc0, await interact.out(v1211, v1255), {
          at: './index.rsh:267:12:application',
          fs: ['at ./index.rsh:267:12:application call to [unknown function] (defined at: ./index.rsh:267:12:function exp)', 'at ./index.rsh:268:15:application call to "notify" (defined at: ./index.rsh:267:59:function exp)', 'at ./index.rsh:267:59:application call to [unknown function] (defined at: ./index.rsh:267:59:function exp)'],
          msg: 'out',
          who: 'Contributors_timedOut'
          });
        }
      else {
        }
      
      const v1262 = 'timedOut            ';
      null;
      const v2367 = v1046;
      return;
      
      break;
      }
    }
  
  
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc9 = stdlib.T_Object({
    description: ctc6,
    hardCap: ctc3,
    id: ctc3,
    link: ctc7,
    maxContribution: ctc3,
    minContribution: ctc3,
    owner: ctc1,
    privateSaleAmt: ctc3,
    softCap: ctc3,
    title: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc3]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc14 = stdlib.T_Contract;
  const ctc15 = stdlib.T_Struct([['id', ctc3], ['title', ctc8], ['link', ctc7], ['description', ctc6], ['owner', ctc1], ['contractInfo', ctc14]]);
  const ctc16 = stdlib.T_Tuple([ctc15]);
  const ctc17 = stdlib.T_Data({
    Contributors_contributed0_478: ctc13,
    Contributors_creating0_478: ctc16,
    Contributors_timedOut0_478: ctc13
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  
  const v709 = stdlib.protect(ctc9, interact.getProject, 'for Deployer\'s interact field getProject');
  const v720 = stdlib.protect(ctc10, interact.isProject, 'for Deployer\'s interact field isProject');
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:65:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:65:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v723, time: v722, didSend: v49, from: v721 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v723, time: v722, didSend: v49, from: v721 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v721, v720],
    evt_cnt: 1,
    funcNum: 1,
    lct: v722,
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:72:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v727], secs: v729, time: v728, didSend: v58, from: v726 } = txn2;
      
      ;
      if (v727) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v727], secs: v729, time: v728, didSend: v58, from: v726 } = txn2;
  ;
  const v730 = stdlib.addressEq(v721, v726);
  stdlib.assert(v730, {
    at: './index.rsh:72:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  if (v727) {
    const txn3 = await (ctc.sendrecv({
      args: [v721, v709],
      evt_cnt: 1,
      funcNum: 2,
      lct: v728,
      onlyIf: true,
      out_tys: [ctc9],
      pay: [stdlib.checkedBigNumberify('./index.rsh:88:14:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [v734], secs: v736, time: v735, didSend: v67, from: v733 } = txn3;
        
        ;
        const v738 = v734.id;
        const v739 = 'created             ';
        null;
        const v741 = stdlib.add(v735, stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, '20'));
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc9],
      waitIfNotPresent: false
      }));
    const {data: [v734], secs: v736, time: v735, didSend: v67, from: v733 } = txn3;
    ;
    const v737 = stdlib.addressEq(v721, v733);
    stdlib.assert(v737, {
      at: './index.rsh:88:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
      });
    const v738 = v734.id;
    const v739 = 'created             ';
    null;
    const v741 = stdlib.add(v735, stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, '20'));
    const txn4 = await (ctc.sendrecv({
      args: [v721, v734, v735, v738, v741],
      evt_cnt: 0,
      funcNum: 3,
      lct: v735,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:107:14:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [], secs: v744, time: v743, didSend: v76, from: v742 } = txn4;
        
        ;
        const v747 = v734.title;
        const v748 = v734.link;
        const v749 = v734.description;
        const v750 = v734.owner;
        const v751 = await ctc.getContractInfo();
        null;
        const v752 = true;
        const v753 = stdlib.checkedBigNumberify('./index.rsh:113:26:decimal', stdlib.UInt_max, '0');
        const v754 = stdlib.checkedBigNumberify('./index.rsh:113:23:decimal', stdlib.UInt_max, '0');
        const v755 = v721;
        const v756 = v743;
        const v757 = v735;
        const v763 = stdlib.checkedBigNumberify('./index.rsh:64:9:after expr stmt semicolon', stdlib.UInt_max, '0');
        
        if (await (async () => {
          const v768 = stdlib.le(v757, v741);
          const v769 = v768 ? v752 : false;
          
          return v769;})()) {
          sim_r.isHalt = false;
          }
        else {
          const v888 = v734.hardCap;
          const v889 = stdlib.ge(v753, v888);
          const v890 = v889 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v891 = stdlib.eq(v890, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v891) {
            const v893 = 'passed              ';
            null;
            const v895 = stdlib.div(v763, stdlib.checkedBigNumberify('./index.rsh:156:32:decimal', stdlib.UInt_max, '100'));
            const v899 = stdlib.sub(v763, v895);
            sim_r.txns.push({
              kind: 'from',
              to: v721,
              tok: undefined /* Nothing */
              });
            sim_r.isHalt = false;
            }
          else {
            const v917 = v734.softCap;
            const v918 = stdlib.ge(v753, v917);
            if (v918) {
              const v920 = 'passed              ';
              null;
              const v922 = stdlib.div(v763, stdlib.checkedBigNumberify('./index.rsh:186:34:decimal', stdlib.UInt_max, '100'));
              const v926 = stdlib.sub(v763, v922);
              sim_r.txns.push({
                kind: 'from',
                to: v721,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }
            else {
              const v945 = 'failed              ';
              null;
              sim_r.isHalt = false;
              }}}
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc9, ctc3, ctc3, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v744, time: v743, didSend: v76, from: v742 } = txn4;
    ;
    const v745 = stdlib.addressEq(v721, v742);
    stdlib.assert(v745, {
      at: './index.rsh:107:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
      });
    const v747 = v734.title;
    const v748 = v734.link;
    const v749 = v734.description;
    const v750 = v734.owner;
    const v751 = await ctc.getContractInfo();
    null;
    let v752 = true;
    let v753 = stdlib.checkedBigNumberify('./index.rsh:113:26:decimal', stdlib.UInt_max, '0');
    let v754 = stdlib.checkedBigNumberify('./index.rsh:113:23:decimal', stdlib.UInt_max, '0');
    let v755 = v721;
    let v756 = v743;
    let v757 = v735;
    let v763 = stdlib.checkedBigNumberify('./index.rsh:64:9:after expr stmt semicolon', stdlib.UInt_max, '0');
    
    while (await (async () => {
      const v768 = stdlib.le(v757, v741);
      const v769 = v768 ? v752 : false;
      
      return v769;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 10,
        out_tys: [ctc11],
        timeoutAt: ['time', v741],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v721, v734, v738, v741, v750, v752, v753, v754, v755, v756, v763],
          evt_cnt: 0,
          funcNum: 11,
          lct: v756,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:150:20:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v884, time: v883, didSend: v309, from: v882 } = txn6;
            
            ;
            const cv752 = v752;
            const cv753 = v753;
            const cv754 = v754;
            const cv755 = v755;
            const cv756 = v883;
            const cv757 = v756;
            const cv763 = v763;
            
            await (async () => {
              const v752 = cv752;
              const v753 = cv753;
              const v754 = cv754;
              const v755 = cv755;
              const v756 = cv756;
              const v757 = cv757;
              const v763 = cv763;
              
              if (await (async () => {
                const v768 = stdlib.le(v757, v741);
                const v769 = v768 ? v752 : false;
                
                return v769;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v888 = v734.hardCap;
                const v889 = stdlib.ge(v753, v888);
                const v890 = v889 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                const v891 = stdlib.eq(v890, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                if (v891) {
                  const v893 = 'passed              ';
                  null;
                  const v895 = stdlib.div(v763, stdlib.checkedBigNumberify('./index.rsh:156:32:decimal', stdlib.UInt_max, '100'));
                  const v899 = stdlib.sub(v763, v895);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v721,
                    tok: undefined /* Nothing */
                    });
                  sim_r.isHalt = false;
                  }
                else {
                  const v917 = v734.softCap;
                  const v918 = stdlib.ge(v753, v917);
                  if (v918) {
                    const v920 = 'passed              ';
                    null;
                    const v922 = stdlib.div(v763, stdlib.checkedBigNumberify('./index.rsh:186:34:decimal', stdlib.UInt_max, '100'));
                    const v926 = stdlib.sub(v763, v922);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v721,
                      tok: undefined /* Nothing */
                      });
                    sim_r.isHalt = false;
                    }
                  else {
                    const v945 = 'failed              ';
                    null;
                    sim_r.isHalt = false;
                    }}}})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc1, ctc9, ctc3, ctc3, ctc1, ctc10, ctc3, ctc3, ctc1, ctc3, ctc3],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v884, time: v883, didSend: v309, from: v882 } = txn6;
        ;
        const v885 = stdlib.addressEq(v721, v882);
        stdlib.assert(v885, {
          at: './index.rsh:150:20:dot',
          fs: ['at ./index.rsh:149:40:application call to [unknown function] (defined at: ./index.rsh:149:40:function exp)'],
          msg: 'sender correct',
          who: 'Deployer'
          });
        const cv752 = v752;
        const cv753 = v753;
        const cv754 = v754;
        const cv755 = v755;
        const cv756 = v883;
        const cv757 = v756;
        const cv763 = v763;
        
        v752 = cv752;
        v753 = cv753;
        v754 = cv754;
        v755 = cv755;
        v756 = cv756;
        v757 = cv757;
        v763 = cv763;
        
        continue;
        }
      else {
        const {data: [v788], secs: v790, time: v789, didSend: v197, from: v787 } = txn5;
        undefined /* setApiDetails */;
        const v792 = v788[stdlib.checkedBigNumberify('./index.rsh:116:14:spread', stdlib.UInt_max, '0')];
        const v793 = stdlib.gt(v792, stdlib.checkedBigNumberify('./index.rsh:117:23:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v793, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:117:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:116:46:application call to [unknown function] (defined at: ./index.rsh:116:46:function exp)', 'at ./index.rsh:116:46:application call to [unknown function] (defined at: ./index.rsh:116:46:function exp)'],
          msg: 'Contribution too small',
          who: 'Deployer'
          });
        const v796 = stdlib.add(v763, v792);
        ;
        const v801 = v796;
        await txn5.getOutput('Contributors_contribute', 'v801', ctc3, v801);
        const v808 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v787), null);
        let v809;
        switch (v808[0]) {
          case 'None': {
            const v810 = v808[1];
            v809 = false;
            
            break;
            }
          case 'Some': {
            const v811 = v808[1];
            v809 = true;
            
            break;
            }
          }
        if (v809) {
          const v812 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v787), null);
          let v813;
          switch (v812[0]) {
            case 'None': {
              const v814 = v812[1];
              v813 = stdlib.checkedBigNumberify('./index.rsh:122:61:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v815 = v812[1];
              v813 = v815;
              
              break;
              }
            }
          await stdlib.mapSet(map1, v787, v813);
          const v816 = stdlib.add(v754, stdlib.checkedBigNumberify('./index.rsh:125:31:decimal', stdlib.UInt_max, '1'));
          const v817 = v734.hardCap;
          const v818 = stdlib.add(v753, v792);
          const v819 = stdlib.ge(v818, v817);
          const v820 = v819 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v821 = stdlib.eq(v820, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
          const cv752 = v821;
          const cv753 = v753;
          const cv754 = v816;
          const cv755 = v787;
          const cv756 = v789;
          const cv757 = v756;
          const cv763 = v796;
          
          v752 = cv752;
          v753 = cv753;
          v754 = cv754;
          v755 = cv755;
          v756 = cv756;
          v757 = cv757;
          v763 = cv763;
          
          continue;}
        else {
          const v829 = v734.maxContribution;
          const v830 = stdlib.gt(v792, v829);
          if (v830) {
            await stdlib.mapSet(map0, v787, v787);
            await stdlib.mapSet(map2, v787, null);
            await stdlib.mapSet(map1, v787, v829);
            const v834 = stdlib.add(v754, stdlib.checkedBigNumberify('./index.rsh:132:33:decimal', stdlib.UInt_max, '1'));
            const v835 = stdlib.add(v753, v829);
            const v836 = v734.hardCap;
            const v837 = stdlib.add(v753, v792);
            const v838 = stdlib.ge(v837, v836);
            const v839 = v838 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v840 = stdlib.eq(v839, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            const cv752 = v840;
            const cv753 = v835;
            const cv754 = v834;
            const cv755 = v787;
            const cv756 = v789;
            const cv757 = v756;
            const cv763 = v796;
            
            v752 = cv752;
            v753 = cv753;
            v754 = cv754;
            v755 = cv755;
            v756 = cv756;
            v757 = cv757;
            v763 = cv763;
            
            continue;}
          else {
            const v848 = v734.minContribution;
            const v849 = stdlib.lt(v792, v848);
            if (v849) {
              await stdlib.mapSet(map0, v787, v787);
              await stdlib.mapSet(map2, v787, null);
              await stdlib.mapSet(map1, v787, v848);
              const v853 = stdlib.add(v754, stdlib.checkedBigNumberify('./index.rsh:138:33:decimal', stdlib.UInt_max, '1'));
              const v854 = stdlib.add(v753, v848);
              const v855 = v734.hardCap;
              const v856 = stdlib.add(v753, v792);
              const v857 = stdlib.ge(v856, v855);
              const v858 = v857 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              const v859 = stdlib.eq(v858, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
              const cv752 = v859;
              const cv753 = v854;
              const cv754 = v853;
              const cv755 = v787;
              const cv756 = v789;
              const cv757 = v756;
              const cv763 = v796;
              
              v752 = cv752;
              v753 = cv753;
              v754 = cv754;
              v755 = cv755;
              v756 = cv756;
              v757 = cv757;
              v763 = cv763;
              
              continue;}
            else {
              await stdlib.mapSet(map0, v787, v787);
              await stdlib.mapSet(map2, v787, null);
              await stdlib.mapSet(map1, v787, v792);
              const v868 = stdlib.add(v754, stdlib.checkedBigNumberify('./index.rsh:144:33:decimal', stdlib.UInt_max, '1'));
              const v869 = stdlib.add(v753, v792);
              const v870 = v734.hardCap;
              const v872 = stdlib.ge(v869, v870);
              const v873 = v872 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              const v874 = stdlib.eq(v873, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
              const cv752 = v874;
              const cv753 = v869;
              const cv754 = v868;
              const cv755 = v787;
              const cv756 = v789;
              const cv757 = v756;
              const cv763 = v796;
              
              v752 = cv752;
              v753 = cv753;
              v754 = cv754;
              v755 = cv755;
              v756 = cv756;
              v757 = cv757;
              v763 = cv763;
              
              continue;}}}}
      
      }
    const v888 = v734.hardCap;
    const v889 = stdlib.ge(v753, v888);
    const v890 = v889 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    const v891 = stdlib.eq(v890, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    if (v891) {
      const v893 = 'passed              ';
      null;
      const v895 = stdlib.div(v763, stdlib.checkedBigNumberify('./index.rsh:156:32:decimal', stdlib.UInt_max, '100'));
      const v899 = stdlib.sub(v763, v895);
      ;
      const txn5 = await (ctc.sendrecv({
        args: [v721, v750, v899],
        evt_cnt: 0,
        funcNum: 5,
        lct: v756,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:158:16:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          stdlib.simMapDupe(sim_r, 2, map2);
          
          const {data: [], secs: v902, time: v901, didSend: v328, from: v900 } = txn5;
          
          ;
          const v909 = stdlib.sub(v899, v899);
          sim_r.txns.push({
            kind: 'from',
            to: v750,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v721,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc1, ctc1, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v902, time: v901, didSend: v328, from: v900 } = txn5;
      ;
      const v903 = stdlib.addressEq(v721, v900);
      stdlib.assert(v903, {
        at: './index.rsh:158:16:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Deployer'
        });
      const v909 = stdlib.sub(v899, v899);
      ;
      ;
      return;
      
      
      }
    else {
      const v917 = v734.softCap;
      const v918 = stdlib.ge(v753, v917);
      if (v918) {
        const v920 = 'passed              ';
        null;
        const v922 = stdlib.div(v763, stdlib.checkedBigNumberify('./index.rsh:186:34:decimal', stdlib.UInt_max, '100'));
        const v926 = stdlib.sub(v763, v922);
        ;
        const txn5 = await (ctc.sendrecv({
          args: [v721, v750, v926],
          evt_cnt: 0,
          funcNum: 6,
          lct: v756,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:188:18:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v929, time: v928, didSend: v349, from: v927 } = txn5;
            
            ;
            const v936 = stdlib.sub(v926, v926);
            sim_r.txns.push({
              kind: 'from',
              to: v750,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v721,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc1, ctc1, ctc3],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v929, time: v928, didSend: v349, from: v927 } = txn5;
        ;
        const v930 = stdlib.addressEq(v721, v927);
        stdlib.assert(v930, {
          at: './index.rsh:188:18:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        const v936 = stdlib.sub(v926, v926);
        ;
        ;
        return;
        
        
        }
      else {
        const v945 = 'failed              ';
        null;
        const txn5 = await (ctc.sendrecv({
          args: [v721, v738, v754, v755, v763],
          evt_cnt: 0,
          funcNum: 7,
          lct: v756,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:220:18:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v948, time: v947, didSend: v362, from: v946 } = txn5;
            
            ;
            const v951 = v763;
            const v952 = v754;
            const v953 = v947;
            const v960 = v763;
            
            if (await (async () => {
              const v963 = stdlib.gt(v952, stdlib.checkedBigNumberify('./index.rsh:223:29:decimal', stdlib.UInt_max, '0'));
              const v964 = stdlib.gt(v951, stdlib.checkedBigNumberify('./index.rsh:223:51:decimal', stdlib.UInt_max, '0'));
              const v965 = v963 ? v964 : false;
              
              return v965;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v721,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc1, ctc3, ctc3, ctc1, ctc3],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v948, time: v947, didSend: v362, from: v946 } = txn5;
        ;
        const v949 = stdlib.addressEq(v721, v946);
        stdlib.assert(v949, {
          at: './index.rsh:220:18:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        let v951 = v763;
        let v952 = v754;
        let v953 = v947;
        let v960 = v763;
        
        while (await (async () => {
          const v963 = stdlib.gt(v952, stdlib.checkedBigNumberify('./index.rsh:223:29:decimal', stdlib.UInt_max, '0'));
          const v964 = stdlib.gt(v951, stdlib.checkedBigNumberify('./index.rsh:223:51:decimal', stdlib.UInt_max, '0'));
          const v965 = v963 ? v964 : false;
          
          return v965;})()) {
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 9,
            out_tys: [ctc12],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v972], secs: v974, time: v973, didSend: v400, from: v971 } = txn6;
          undefined /* setApiDetails */;
          ;
          const v977 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v971), null);
          let v978;
          switch (v977[0]) {
            case 'None': {
              const v979 = v977[1];
              v978 = stdlib.checkedBigNumberify('./index.rsh:218:55:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v980 = v977[1];
              v978 = v980;
              
              break;
              }
            }
          const v981 = stdlib.ge(v960, v978);
          const v982 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v971), null);
          let v983;
          switch (v982[0]) {
            case 'None': {
              const v984 = v982[1];
              v983 = false;
              
              break;
              }
            case 'Some': {
              const v985 = v982[1];
              v983 = true;
              
              break;
              }
            }
          const v986 = v981 ? v983 : false;
          if (v986) {
            let v988;
            switch (v977[0]) {
              case 'None': {
                const v989 = v977[1];
                v988 = stdlib.checkedBigNumberify('./index.rsh:218:55:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v990 = v977[1];
                v988 = v990;
                
                break;
                }
              }
            const v991 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v971), null);
            let v992;
            switch (v991[0]) {
              case 'None': {
                const v993 = v991[1];
                v992 = v755;
                
                break;
                }
              case 'Some': {
                const v994 = v991[1];
                v992 = v994;
                
                break;
                }
              }
            const v998 = stdlib.sub(v960, v988);
            ;
            await stdlib.mapSet(map2, v971, undefined /* Nothing */);
            const v1001 = 'refundPassed        ';
            null;
            const v1002 = true;
            await txn6.getOutput('Contributors_claimRefund', 'v1002', ctc10, v1002);
            const v1008 = stdlib.sub(v952, stdlib.checkedBigNumberify('./index.rsh:231:34:decimal', stdlib.UInt_max, '1'));
            const cv951 = v998;
            const cv952 = v1008;
            const cv953 = v973;
            const cv960 = v998;
            
            v951 = cv951;
            v952 = cv952;
            v953 = cv953;
            v960 = cv960;
            
            continue;}
          else {
            const v1015 = 'refundFailed        ';
            null;
            const v1016 = false;
            await txn6.getOutput('Contributors_claimRefund', 'v1016', ctc10, v1016);
            const cv951 = v960;
            const cv952 = v952;
            const cv953 = v973;
            const cv960 = v960;
            
            v951 = cv951;
            v952 = cv952;
            v953 = cv953;
            v960 = cv960;
            
            continue;}
          
          }
        ;
        return;
        
        
        }}
    
    
    
    }
  else {
    const txn3 = await (ctc.sendrecv({
      args: [v721],
      evt_cnt: 0,
      funcNum: 12,
      lct: v728,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:242:14:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [], secs: v1036, time: v1035, didSend: v468, from: v1034 } = txn3;
        
        ;
        const v1038 = true;
        const v1039 = v1035;
        const v1046 = stdlib.checkedBigNumberify('./index.rsh:64:9:after expr stmt semicolon', stdlib.UInt_max, '0');
        
        if (await (async () => {
          
          return v1038;})()) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v721,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1036, time: v1035, didSend: v468, from: v1034 } = txn3;
    ;
    const v1037 = stdlib.addressEq(v721, v1034);
    stdlib.assert(v1037, {
      at: './index.rsh:242:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
      });
    let v1038 = true;
    let v1039 = v1035;
    let v1046 = stdlib.checkedBigNumberify('./index.rsh:64:9:after expr stmt semicolon', stdlib.UInt_max, '0');
    
    while (await (async () => {
      
      return v1038;})()) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 14,
        out_tys: [ctc17],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1104], secs: v1106, time: v1105, didSend: v608, from: v1103 } = txn4;
      switch (v1104[0]) {
        case 'Contributors_contributed0_478': {
          const v1107 = v1104[1];
          undefined /* setApiDetails */;
          ;
          const v1115 = v1107[stdlib.checkedBigNumberify('./index.rsh:260:11:spread', stdlib.UInt_max, '0')];
          const v1116 = v1107[stdlib.checkedBigNumberify('./index.rsh:260:11:spread', stdlib.UInt_max, '1')];
          const v1117 = null;
          await txn4.getOutput('Contributors_contributed', 'v1117', ctc0, v1117);
          const v1125 = 'contributed         ';
          null;
          const cv1038 = true;
          const cv1039 = v1105;
          const cv1046 = v1046;
          
          v1038 = cv1038;
          v1039 = cv1039;
          v1046 = cv1046;
          
          continue;
          break;
          }
        case 'Contributors_creating0_478': {
          const v1159 = v1104[1];
          undefined /* setApiDetails */;
          ;
          const v1179 = v1159[stdlib.checkedBigNumberify('./index.rsh:246:11:spread', stdlib.UInt_max, '0')];
          const v1180 = null;
          await txn4.getOutput('Contributors_creating', 'v1180', ctc0, v1180);
          const v1193 = v1179.id;
          const v1194 = v1179.title;
          const v1195 = v1179.link;
          const v1196 = v1179.description;
          const v1197 = v1179.owner;
          const v1198 = v1179.contractInfo;
          null;
          const cv1038 = true;
          const cv1039 = v1105;
          const cv1046 = v1046;
          
          v1038 = cv1038;
          v1039 = cv1039;
          v1046 = cv1046;
          
          continue;
          break;
          }
        case 'Contributors_timedOut0_478': {
          const v1211 = v1104[1];
          undefined /* setApiDetails */;
          ;
          const v1252 = v1211[stdlib.checkedBigNumberify('./index.rsh:267:11:spread', stdlib.UInt_max, '0')];
          const v1253 = v1211[stdlib.checkedBigNumberify('./index.rsh:267:11:spread', stdlib.UInt_max, '1')];
          const v1254 = null;
          await txn4.getOutput('Contributors_timedOut', 'v1254', ctc0, v1254);
          const v1262 = 'timedOut            ';
          null;
          const cv1038 = true;
          const cv1039 = v1105;
          const cv1046 = v1046;
          
          v1038 = cv1038;
          v1039 = cv1039;
          v1046 = cv1046;
          
          continue;
          break;
          }
        }
      
      }
    ;
    return;
    
    
    }
  
  
  
  };
export async function Contributors_claimRefund(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributors_claimRefund expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributors_claimRefund expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 12) {return _Contributors_claimRefund12(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Contributors_contribute(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributors_contribute expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributors_contribute expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 13) {return _Contributors_contribute13(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '13')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Contributors_contributed(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributors_contributed expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributors_contributed expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 17) {return _Contributors_contributed17(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Contributors_creating(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributors_creating expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributors_creating expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 17) {return _Contributors_creating17(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Contributors_timedOut(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributors_timedOut expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributors_timedOut expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 17) {return _Contributors_timedOut17(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Contributors_claimRefund()byte`, `Contributors_contribute(uint64)uint64`, `Contributors_contributed(uint64,uint64)byte[0]`, `Contributors_creating((uint64,byte[20],byte[150],byte[180],address,uint64))byte[0]`, `Contributors_timedOut(uint64,uint64)byte[0]`],
    pure: [],
    sigs: [`Contributors_claimRefund()byte`, `Contributors_contribute(uint64)uint64`, `Contributors_contributed(uint64,uint64)byte[0]`, `Contributors_creating((uint64,byte[20],byte[150],byte[180],address,uint64))byte[0]`, `Contributors_timedOut(uint64,uint64)byte[0]`]
    },
  appApproval: `BiAjAAEgArQBBwwOKgMFDdYDrgPOA94DCQgrvvGmsweM9vbQCZzz040L/gKCnOLlBhH/A4cErwS3BFAGQBT9AmQmBwEAAQEAAQIBAwEEGLUOO3JwYXNzZWQAAAAAAAAAAAAAAAAAACI1ADEYQQu2KmRJIls1ASERWzUCMRkjEkEACjEAKCESr2ZCC4I2GgAXSUEAeCI1BCM1BkkhEwxAAEBJIRQMQAAhSSEVDEAACiEVEkQ2GgFCAmYhFBJENhoBNf8pNP9QQgBwIRMSRDYaATYaAlA1/ys0/1AhFq9QQgBYSSEXDEAAGCEXEkQ2GgE2GgJQNf8oNP9QIRavUEIAOYGWudjPBRJEKkIEnDYaAhc1BDYaAzYaARdJIQUMQAY+SYELDEAB6UkhBgxAAWJJIQcMQAEpIQcSRCEYNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8kWzX+STUFNf2ABJQ87Ck0/VCwNP0iVUkjDEAApUklDEAASSUSRDT9VwEQNfyACAAAAAAAAATmsCo1B4AYUISrsHRpbWVkT3V0AAAAAAAAAAAAAAAANPxXAAhQNPxXCAhQsDT/IzIGNP5CCdtINP0jgY4DWDX8NPw1+4AIAAAAAAAABJywKjUHgAQFrLtHNPtXAAhQNPtXCBRQNPtXHJZQNPtXsrRQNPuB5gIkWFA0+4GGAyERWFCwNP8jMgY0/kIJhUg0/VcBEDX8gAgAAAAAAAAEXbAqNQeAGFCEq7Bjb250cmlidXRlZAAAAAAAAAAAADT8VwAIUDT8VwgIULA0/yMyBjT+Qgk+IQYSRCEHNAESRDQESSISTDQCEhFEKGRJNQM1/4AEyqvON7A0/zEAEkQ0/yMyBiJCCQxIIQs0ARJENARJIhJMNAISEUQoZClkUCtkUCcEZFAnBWRQSTUDSVcAIDX/IQxbNf6ABOPZNjWwMgY0/g9ENP8xABJENP80AyQhDVg0AyEOWzT+NAMhDyRYNAOB/gMjWBc0AyEZWzQDIRpbNAOBjwQkWDIGNAMhG1s0AyEcW0IG10khEAxAA/xJgQoMQAKJSCELNAESRDQESSISTDQCEhFEKGQpZFArZFAnBGRQJwVkUEk1A0lKSkpXACA1/yQhDVg1/iEOWzX9IQxbNfwhDyRYNfshGVs1+iEaWzX5IRtbNfhJNQU194AEN+njIDT3ULAyBjT8DEQ09xdJNfYiDUQ0AyEcWzT2CDX1NPaICLSACAAAAAAAAAMhNPUWULA09RY1BzEAiAiMVyoBSTXzIlVAAAYiNfRCAAYjNfRCAAA09EEAaTEAiAhrVyEJSTXyIlVAAAYiNfNCAAw08iNbSTXxNfNCAAAxACgxAIgIRik08xZQNfJJVwAhNPJQTFcqAVBmNP80/jT9NPw0+yMiNPo09gg0/iEEWw9NIxI0+jT5IwgxADIGNPg09UIFqzT+gdoCWzXzNPY08w1BAG4xACgxAIgH7ykxAFA18lchCjTyTFBmMQAoMQCIB9kjIQhMVmYxACgxAIgHyyk08xZQNfJJVwAhNPJQTFcqAVBmNP80/jT9NPw0+yMiNPo09gg0/iEEWw9NIxI0+jTzCDT5IwgxADIGNPg09UIFLTT+geICWzXyNPY08gxBAG4xACgxAIgHcSkxAFA18VchCjTxTFBmMQAoMQCIB1sjIQhMVmYxACgxAIgHTSk08hZQNfFJVwAhNPFQTFcqAVBmNP80/jT9NPw0+yMiNPo09gg0/iEEWw9NIxI0+jTyCDT5IwgxADIGNPg09UIErzEAKDEAiAcDKTEAUDXxVyEKNPFMUGYxACgxAIgG7SMhCExWZjEAKDEAiAbfKTT2FlA18UlXACE08VBMVyoBUGY0+jT2CDXxNP80/jT9NPw0+yMiNPE0/iEEWw9NIxI08TT5IwgxADIGNPg09UIEQEghBjQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8kWzX+VyggNf2BSFs1/CEdWzX7STUFNfqABIXjoNA0+lCwMQCIBlZXIQlJNfkiVUAABiI1+EIADDT5I1tJNfc1+EIAADEAiAY0VyoBSTX2IlVAAAYiNfdCAAYjNfdCAAA0+zT4DzT3EEEAozT5IlVAAAYiNfZCAAw0+SNbSTX1NfZCAAAxAIgF9FcAIUk19CJVQAAHNP019UIADTT0VwEgSTXzNfVCAAA0+zT2CTX0sSKyATT2sggjshA09bIHszEAKDEAiAW2IiEITFZmgBi1DjtycmVmdW5kUGFzc2VkAAAAAAAAAAA0/hZQsIAJAAAAAAAAA+oBsCk1BzT/NP40/TT0NPwjCTIGNPRCBHeAGLUOO3JyZWZ1bmRGYWlsZWQAAAAAAAAAADT+FlCwgAkAAAAAAAAD+ACwKDUHNP80/jT9NPs0/DIGNPtCBDghBRJEIRA0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yEdWzX+gATiG7OpsDT/MQASRDT/NAMkWzQDVzAgNP40A4EoWzIGNP5CA+1JIQkMQAFMSSEKDEAAtUkhHgxAAFdIIQU0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yEfWzX+gARhtKwMsDT/MQASRLEisgE0/rIII7IQNANXICCyB7OxIrIBNP5JCbIII7IQNP+yB7NCBAtIIQo0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yEfWzX+gATMmZJcsDT/MQASRLEisgE0/rIII7IQNANXICCyB7OxIrIBNP5JCbIII7IQNP+yB7NCA7QhCRJEIQk0ARJENARJIhJMNAISEUQoZClkUCtkUCcEZFBJNQNJSVcAIDX/JCENWDX+IQxbNf2ABKdlxLSwNP8xABJENP6B6gIkWDX8gAQoh2iJNP0WUDT+gZoDISBYUDT+V8SWUDT+VwC0UDT8UDEYFlCwNP80/jT9NAMhD1s0/CMiIjT/MgY0AyEOWyJCATZJIwxAAP1JJQxAAJdIJTQBEkQ0BEkiEkw0AhIRRChkSTUDNf9JNQU1/oAEd6CNQDT+ULA0/zEAEkQ0/oG8AVs1/YAYtQ47cmNyZWF0ZWQAAAAAAAAAAAAAAAAANP0WULAyBiEgCDX8NP80/lAyBhZQNP0WUDT8FlAoSwFXAH9nKUsBV39/ZytLAVf+f2cnBEsBISGBaVhnSCEJNQEyBjUCQgKdSCM0ARJENARJIhJMNAISEUQoZEk1AzX/STUFFzX+gAQPv8Y0NP4WUQcIULA0/zEAEkQ0/kEAFDT/KEsBVwAgZ0glNQEyBjUCQgJSNP8oSwFXACBnSCEHNQEyBjUCQgI9SIGgjQaIApYiNAESRDQESSISTDQCEhFEgARfDav6sDEAKEsBVwAgZ0gjNQEyBjUCQgIKNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NP409w40+RBBAGA09DT1UDT2FlA09xZQNPhQNPkWUQcIUDT6FlA0+xZQNPxQNP0WUDT/FlAoSwFXAH9nKUsBV39/ZytLAVf+f2cnBEsBISGBf1hnJwVLAYH8A4FDWGdIIQs1ATIGNQJCAYcjIjT6NPUhBFsPTSISQQBBJwY09hZQsDT/ISIKNfM0/zTzCTXysSKyATTzsggjshA09LIHszT0NPhQNPIWUChLAVcASGdIIQo1ATIGNQJCATY0+jT1gZIDWw9BAEEnBjT2FlCwNP8hIgo18zT/NPMJNfKxIrIBNPOyCCOyEDT0sgezNPQ0+FA08hZQKEsBVwBIZ0ghBTUBMgY1AkIA6YAYtQ47cmZhaWxlZAAAAAAAAAAAAAAAAAAANPYWULA09DT2FlA0+xZQNPxQNP8WUChLAVcAWGdIIRA1ATIGNQJCAKY1/zX+Nf01/DX7Nfo1+TT9Ig00/CINEEEAJDT5NPoWUDT7UDT9FlA0/xZQKEsBVwBYZ0ghBjUBMgY1AkIAaLEisgE0/7III7IQNPmyB7NCADk1/zX+Nf01/DT9QQAZNPw0/xZQKEsBVwAoZ0ghGDUBMgY1AkIAL7EisgE0/7III7IQNPyyB7NCAAAxGSEKEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIR4xNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAAVIIRKviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 43,
  stateKeys: 5,
  stateSize: 575,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v727",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v788",
                "type": "tuple"
              }
            ],
            "internalType": "struct T30",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T31",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T38",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T35",
                    "name": "_Contributors_contributed0_478",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes20",
                                "name": "elem0",
                                "type": "bytes20"
                              }
                            ],
                            "internalType": "struct T8",
                            "name": "title",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem2",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem3",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes22",
                                "name": "elem4",
                                "type": "bytes22"
                              }
                            ],
                            "internalType": "struct T10",
                            "name": "link",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem2",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem3",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem4",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes20",
                                "name": "elem5",
                                "type": "bytes20"
                              }
                            ],
                            "internalType": "struct T9",
                            "name": "description",
                            "type": "tuple"
                          },
                          {
                            "internalType": "address payable",
                            "name": "owner",
                            "type": "address"
                          },
                          {
                            "internalType": "address payable",
                            "name": "contractInfo",
                            "type": "address"
                          }
                        ],
                        "internalType": "struct T36",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T37",
                    "name": "_Contributors_creating0_478",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T35",
                    "name": "_Contributors_timedOut0_478",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T38",
                "name": "v1104",
                "type": "tuple"
              }
            ],
            "internalType": "struct T39",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T40",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e14",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes20",
                        "name": "elem5",
                        "type": "bytes20"
                      }
                    ],
                    "internalType": "struct T9",
                    "name": "_description",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_hardCap",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes22",
                        "name": "elem4",
                        "type": "bytes22"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_link",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_maxContribution",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_minContribution",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_owner",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_privateSaleAmt",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_softCap",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes20",
                        "name": "elem0",
                        "type": "bytes20"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_title",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v734",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v972",
                "type": "bool"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1002",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1016",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1117",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1180",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1254",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v801",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "bytes20",
            "name": "elem0",
            "type": "bytes20"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "v1",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          },
          {
            "internalType": "bytes22",
            "name": "elem4",
            "type": "bytes22"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "v2",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem4",
            "type": "bytes32"
          },
          {
            "internalType": "bytes20",
            "name": "elem5",
            "type": "bytes20"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "v3",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v4",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v5",
        "type": "address"
      }
    ],
    "name": "create",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "bytes20",
            "name": "elem0",
            "type": "bytes20"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "v1",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          },
          {
            "internalType": "bytes22",
            "name": "elem4",
            "type": "bytes22"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "v2",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem4",
            "type": "bytes32"
          },
          {
            "internalType": "bytes20",
            "name": "elem5",
            "type": "bytes20"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "v3",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v4",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v5",
        "type": "address"
      }
    ],
    "name": "created",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes20",
            "name": "elem0",
            "type": "bytes20"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "v0",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v1",
        "type": "uint256"
      }
    ],
    "name": "log",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes20",
            "name": "elem0",
            "type": "bytes20"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "v0",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v1",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v2",
        "type": "uint256"
      }
    ],
    "name": "that",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Contributors_claimRefund",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Contributors_contribute",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "Contributors_contributed",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes20",
                "name": "elem0",
                "type": "bytes20"
              }
            ],
            "internalType": "struct T8",
            "name": "title",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              },
              {
                "internalType": "bytes22",
                "name": "elem4",
                "type": "bytes22"
              }
            ],
            "internalType": "struct T10",
            "name": "link",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem4",
                "type": "bytes32"
              },
              {
                "internalType": "bytes20",
                "name": "elem5",
                "type": "bytes20"
              }
            ],
            "internalType": "struct T9",
            "name": "description",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "contractInfo",
            "type": "address"
          }
        ],
        "internalType": "struct T36",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "Contributors_creating",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "Contributors_timedOut",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "_Some",
            "type": "address"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap2Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T2",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v727",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v788",
                "type": "tuple"
              }
            ],
            "internalType": "struct T30",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T31",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T38",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T35",
                    "name": "_Contributors_contributed0_478",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes20",
                                "name": "elem0",
                                "type": "bytes20"
                              }
                            ],
                            "internalType": "struct T8",
                            "name": "title",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem2",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem3",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes22",
                                "name": "elem4",
                                "type": "bytes22"
                              }
                            ],
                            "internalType": "struct T10",
                            "name": "link",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem2",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem3",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem4",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes20",
                                "name": "elem5",
                                "type": "bytes20"
                              }
                            ],
                            "internalType": "struct T9",
                            "name": "description",
                            "type": "tuple"
                          },
                          {
                            "internalType": "address payable",
                            "name": "owner",
                            "type": "address"
                          },
                          {
                            "internalType": "address payable",
                            "name": "contractInfo",
                            "type": "address"
                          }
                        ],
                        "internalType": "struct T36",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T37",
                    "name": "_Contributors_creating0_478",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T35",
                    "name": "_Contributors_timedOut0_478",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T38",
                "name": "v1104",
                "type": "tuple"
              }
            ],
            "internalType": "struct T39",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T40",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m14",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes20",
                        "name": "elem5",
                        "type": "bytes20"
                      }
                    ],
                    "internalType": "struct T9",
                    "name": "_description",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_hardCap",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes22",
                        "name": "elem4",
                        "type": "bytes22"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_link",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_maxContribution",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_minContribution",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_owner",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_privateSaleAmt",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_softCap",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes20",
                        "name": "elem0",
                        "type": "bytes20"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_title",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v734",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v972",
                "type": "bool"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162004813380380620048138339810160408190526200002691620001a4565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000d4565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000cb929190620000fe565b5050506200024c565b81620000fa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200010c906200020f565b90600052602060002090601f0160209004810192826200013057600085556200017b565b82601f106200014b57805160ff19168380011785556200017b565b828001600101855582156200017b579182015b828111156200017b5782518255916020019190600101906200015e565b50620001899291506200018d565b5090565b5b808211156200018957600081556001016200018e565b600060408284031215620001b757600080fd5b604080519081016001600160401b0381118282101715620001e857634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200020357600080fd5b60208201529392505050565b600181811c908216806200022457607f821691505b602082108114156200024657634e487b7160e01b600052602260045260246000fd5b50919050565b6145b7806200025c6000396000f3fe60806040526004361061012d5760003560e01c80638b9fadc8116100a5578063ab53f2c61161006c578063ab53f2c6146102b2578063bf2c5b24146102d5578063c5cfa72e146102e8578063c7980037146102fb578063cadc2e7a1461030e578063d13dd7531461033b57005b80638b9fadc8146102535780638d0718b6146102665780638e31476914610279578063972b44481461028c5780639a3e39121461029f57005b80635bc7f724116100f45780635bc7f724146101c05780636172e590146101e35780636d700906146101f657806373b4522c146101fe578063817d57f314610211578063832307571461023e57005b806311faee8c1461013657806318e67cf3146101495780631e93b0f11461015c5780633bc5b7bf1461018057806355887919146101ad57005b3661013457005b005b6101346101443660046134ab565b61034e565b6101346101573660046134ab565b610372565b34801561016857600080fd5b506003545b6040519081526020015b60405180910390f35b34801561018c57600080fd5b506101a061019b3660046134e3565b610392565b6040516101779190613526565b6101346101bb3660046134ab565b6103a9565b6101d36101ce36600461355e565b6103c9565b6040519015158152602001610177565b6101d36101f136600461355e565b61040f565b6101d3610458565b61013461020c3660046134ab565b610484565b34801561021d57600080fd5b5061023161022c3660046134e3565b6104a4565b6040516101779190613580565b34801561024a57600080fd5b5060015461016d565b6101346102613660046134ab565b6104b5565b6101346102743660046135b2565b6104d5565b6101346102873660046134ab565b6104f5565b61016d61029a3660046135c5565b610515565b6101346102ad3660046134ab565b610545565b3480156102be57600080fd5b506102c7610565565b6040516101779291906135de565b6101346102e33660046134ab565b610602565b6101d36102f6366004613935565b610622565b6101346103093660046134ab565b61065d565b34801561031a57600080fd5b5061032e6103293660046134e3565b61067d565b6040516101779190613952565b610134610349366004613982565b61068e565b610356612e55565b61036e610368368490038401846139a3565b826106ae565b5050565b61037a612e55565b61036e61038c36849003840184613a32565b82610843565b61039a612e83565b6103a382610d79565b92915050565b6103b1612e55565b61036e6103c336849003840184613a4e565b82610e40565b60006103d3612ea6565b6020818101805151600090528051518201518690525151810151018390526103f9612e55565b610403828261156d565b60400151949350505050565b6000610419612ea6565b602081810180515160029052805151606090810151879052905151015101839052610442612e55565b61044c828261156d565b60800151949350505050565b6000610462612ec5565b602081015160009052610473612e55565b61047d8282610843565b5192915050565b61048c612e55565b61036e61049e368490038401846139a3565b82611974565b6104ac612e83565b6103a382611b96565b6104bd612e55565b61036e6104cf368490038401846139a3565b82611c4a565b6104dd612e55565b61036e6104ef36849003840184613aa5565b82611e3d565b6104fd612e55565b61036e61050f368490038401846139a3565b8261205d565b600061051f612eef565b602081015151839052610530612e55565b61053a8282610e40565b602001519392505050565b61054d612e55565b61036e61055f36849003840184613a32565b82612231565b60006060600054600280805461057a90613b84565b80601f01602080910402602001604051908101604052809291908181526020018280546105a690613b84565b80156105f35780601f106105c8576101008083540402835291602001916105f3565b820191906000526020600020905b8154815290600101906020018083116105d657829003601f168201915b50505050509050915091509091565b61060a612e55565b61036e61061c368490038401846139a3565b826123f9565b600061062c612ea6565b6020810180515160019052515160400151839052610648612e55565b610652828261156d565b606001519392505050565b610665612e55565b61036e610677368490038401846139a3565b82612590565b610685612e83565b6103a3826126bd565b610696612e55565b61036e6106a836849003840184613be9565b8261156d565b6106be600e60005414602f61276b565b81516106d99015806106d257508251600154145b603061276b565b6000808055600280546106eb90613b84565b80601f016020809104026020016040519081016040528092919081815260200182805461071790613b84565b80156107645780601f1061073957610100808354040283529160200191610764565b820191906000526020600020905b81548152906001019060200180831161074757829003601f168201915b505050505080602001905181019061077c9190613cb1565b90507f72a9411aeeab8125b28db8f535a4d5f35c25515d1a088a10d0ce323245387cbf33846040516107af929190613cdf565b60405180910390a16107c33415602d61276b565b80516107db906001600160a01b03163314602e61276b565b604080516060808201835260008284018181528352835191820184528082526020808301829052828501829052808401928352855184516001600160a01b03909116905282516001905282514391015290519092019190915261083d81612790565b50505050565b610853600c60005414602161276b565b815161086e90158061086757508251600154145b602261276b565b60008080556002805461088090613b84565b80601f01602080910402602001604051908101604052809291908181526020018280546108ac90613b84565b80156108f95780601f106108ce576101008083540402835291602001916108f9565b820191906000526020600020905b8154815290600101906020018083116108dc57829003601f168201915b50505050508060200190518101906109119190613d07565b905061091b612f1c565b7f19623dd1c8e630acb28c50c4139a0e2042f380ee519bb2621ddfa8e7ca13d9b6338560405161094c929190613d68565b60405180910390a16109603415602061276b565b610969336126bd565b81526000815151600181111561098157610981613500565b141561099357600060208201526109c3565b600181515160018111156109a9576109a9613500565b14156109c357805160409081015190820181905260208201525b60006109ce33611b96565b5160018111156109e0576109e0613500565b14156109f25760006060820152610a1d565b60016109fd33611b96565b516001811115610a0f57610a0f613500565b1415610a1d57600160608201525b806020015182608001511015610a34576000610a3a565b80606001515b15610c8b5760008151516001811115610a5557610a55613500565b1415610a675760006080820152610a96565b60018151516001811115610a7d57610a7d613500565b1415610a965780516040015160a0820181905260808201525b6000610aa133610d79565b516001811115610ab357610ab3613500565b1415610ad15760408201516001600160a01b031660c0820152610b17565b6001610adc33610d79565b516001811115610aee57610aee613500565b1415610b1757610afd33610d79565b604001516001600160a01b031660e0820181905260c08201525b80608001518260800151610b2b9190613da8565b61010082015260c081015160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610b71573d6000803e3d6000fd5b5033600090815260066020908152604091829020805462ffffff19169055610120830180516b1c99599d5b9914185cdcd95960a21b90525190840151915160008051602061456283398151915292610bc99291613dbf565b60405180910390a1604051600181527ffe113bca0b10f2fc1c98006add52d248cb8f8c4c74de1c22c6c473ad6a1a52379060200160405180910390a160018352610c11612fb9565b825181516001600160a01b03918216905260208085015183518201526040808601518451931692019190915261010083015190820151526060830151610c5990600190613da8565b6020808301805190910191909152805143604090910152610100830151905160600152610c858161286a565b5061083d565b610140810180516b1c99599d5b9911985a5b195960a21b905251602083015160405160008051602061456283398151915292610cc8929091613dbf565b60405180910390a1604051600081527fe57c1fc081d2c12fcf6d07a2ea8027ed8ea79445d482f4e4c572e2ba4cf909839060200160405180910390a160008352610d10612fb9565b825181516001600160a01b039182169052602080850151835182015260408086015184519316928101929092526080850180518285018051919091526060808801518251909401939093528051439401939093525191510152610d728161286a565b5050505050565b610d81612e83565b60016001600160a01b03831660009081526004602052604090205460ff166001811115610db057610db0613500565b1415610e30576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610df157610df1613500565b6001811115610e0257610e02613500565b81529054610100810460ff16151560208301526201000090046001600160a01b031660409091015292915050565b600080825260208201525b919050565b610e50600d60005414602561276b565b8151610e6b901580610e6457508251600154145b602661276b565b600080805560028054610e7d90613b84565b80601f0160208091040260200160405190810160405280929190818152602001828054610ea990613b84565b8015610ef65780601f10610ecb57610100808354040283529160200191610ef6565b820191906000526020600020905b815481529060010190602001808311610ed957829003601f168201915b5050505050806020019051810190610f0e9190613f54565b9050610f446040518060a00160405280600081526020016000151581526020016000815260200160008152602001600081525090565b610f5582606001514310602761276b565b60408051338152855160208083019190915286015151518183015290517f8ef10ecf82600a0e607d2b4732e42a9011d02a836d5c8900039202caf70fa8f29181900360600190a160208401515151610fb0901515602361276b565b60208401515151610140830151610fc7919061400e565b815260208401515151610fdd903414602461276b565b80516040519081527f5ecacdfac365971c8d6a7048c06655befa2c5feb4ac92f20fd03a050673e22449060200160405180910390a180516020840152600061102433611b96565b51600181111561103657611036613500565b14156110485760006020820152611073565b600161105333611b96565b51600181111561106557611065613500565b141561107357600160208201525b8060200151156111ed576000611088336126bd565b51600181111561109a5761109a613500565b14156110ac57600060408201526110ea565b60016110b7336126bd565b5160018111156110c9576110c9613500565b14156110ea576110d8336126bd565b60409081015160608301819052908201525b3360009081526005602052604090819020805460ff1916600190811782559183015191015561111761300d565b825181516001600160a01b03918216905260208085018051845183015260408087015185519091015260608087015185519091015260808087015185519416930192909252905181015190860151515160c0850151600192916111799161400e565b1015611186576001611189565b60005b602083810180519290931490915260c08501519151015260e08301516111b19060019061400e565b60208201805160400191909152805133606090910152805143608090910152610120840151815160a001528251905160c00152610c85816129a0565b602080830151608001519085015151511115611319573360008181526004602090815260408083208054600161ff01600160b01b031990911662010000909602959095178517905560068252808320805462ff00ff19168517905560058252909120805460ff191683178155908401516080015191015561126c61300d565b825181516001600160a01b03918216905260208085018051845183015260408087015185519091015260608087015185519091015260808087015185519416930192909252905181015190860151515160c0850151600192916112ce9161400e565b10156112db5760016112de565b60005b6020838101519190921490528301516080015160c0840151611300919061400e565b602080830151015260e08301516111b19060019061400e565b60208083015160a00151908501515151101561142c573360008181526004602090815260408083208054600161ff01600160b01b031990911662010000909602959095178517905560068252808320805462ff00ff19168517905560058252909120805460ff1916831781559084015160a0015191015561139861300d565b825181516001600160a01b03918216905260208085018051845183015260408087015185519091015260608087015185519091015260808087015185519416930192909252905181015190860151515160c0850151600192916113fa9161400e565b101561140757600161140a565b60005b60208381015191909214905283015160a0015160c0840151611300919061400e565b3360008181526004602090815260408083208054600161ff01600160b01b031990911662010000909602959095178517905560068252808320805462ff00ff19168517905560058252909120805460ff191683178155908601515151910181905560c083015161149c919061400e565b60808201526114a961300d565b825181516001600160a01b0391821690526020808501805184518301526040808701518551909101526060808701518551909101526080808701518551941693810193909352510151908301516001911115611506576001611509565b60005b602083810180519290931490915260808401519151015260e08301516115319060019061400e565b60208201805160400191909152805133606090910152805143608090910152610120840151815160a001528251905160c00152610d72816129a0565b61157d601160005414603461276b565b815161159890158061159157508251600154145b603561276b565b6000808055600280546115aa90613b84565b80601f01602080910402602001604051908101604052809291908181526020018280546115d690613b84565b80156116235780601f106115f857610100808354040283529160200191611623565b820191906000526020600020905b81548152906001019060200180831161160657829003601f168201915b505050505080602001905181019061163b9190614026565b9050611645613070565b7f22eceeaaff2766f0b2c4af78eb81d3cbb469fd21d73b1fe42c7ed512b01c842f33856040516116769291906140e1565b60405180910390a1600060208501515151600281111561169857611698613500565b14156117c35760208085015151015181526116b53415603161276b565b604051600081527f6f76281ae6fa52d192d0fa1a683ed1ff9b191d2f13ece6218ec0f5cc5661ee589060200160405180910390a16000604084810191909152602082810180516a18dbdb9d1c9a589d5d195960aa1b9052518351805190830151845192516001600160601b031916835292820152918201527ff1c884060460d66449d26e57f74ff1de85244f27bfe31062e8bb08f3f3404cf3906060015b60405180910390a16040805160608082018352600082840181815283528351918201845280825260208083018290529382015291810191909152825181516001600160a01b03909116905260208082018051600190528051439083015290840151905160400152610c8581612790565b60016020850151515160028111156117dd576117dd613500565b141561189357602084015151604090810151908201526117ff3415603261276b565b604051600081527f79e905898287989be27796225f50cfd10aa826bb51649d7c1e900de7a18746a29060200160405180910390a1600060608085019190915260408083015151805160208201518284015194830151608084015160a09094015194517f5a31e291c4809d043f9e9d4219376d8d7ffd40f7d224c6f958ce7758458b194d9661175396949593949093916141b6565b60026020850151515160028111156118ad576118ad613500565b141561083d57602084015151606090810151908201526118cf3415603361276b565b604051600081527f5da08243c25bf74e4f55bb704d6f60ff329b86b295b2567df17cf92672361d7e9060200160405180910390a1600060808481019190915281018051671d1a5b595913dd5d60c21b90525160608083015180516020918201516040805195516001600160601b031916865292850191909152908301527ff1c884060460d66449d26e57f74ff1de85244f27bfe31062e8bb08f3f3404cf39101611753565b611984600360005414601261276b565b815161199f90158061199857508251600154145b601361276b565b6000808055600280546119b190613b84565b80601f01602080910402602001604051908101604052809291908181526020018280546119dd90613b84565b8015611a2a5780601f106119ff57610100808354040283529160200191611a2a565b820191906000526020600020905b815481529060010190602001808311611a0d57829003601f168201915b5050505050806020019051810190611a429190614210565b90507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c63384604051611a75929190613cdf565b60405180910390a1611a893415601061276b565b8051611aa1906001600160a01b03163314601161276b565b606080820151602083015161012081015192810151815160c0909201516040517fd8d5d178d7b3e8cb359428334fdd1811a327db94fe043e010fb363fde503837e95611af49594909392909130906141b6565b60405180910390a1611b0461300d565b815181516001600160a01b03918216905260208084018051845183015260608086015185516040908101919091526080808801518751840152925160c09081015187519087169085015284870180516001905280516000960186905280518301869052885181519716969093019590955281514393019290925290850151815160a00152519091015261083d816129a0565b611b9e612e83565b60016001600160a01b03831660009081526006602052604090205460ff166001811115611bcd57611bcd613500565b1415610e30576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff166001811115611c0e57611c0e613500565b6001811115611c1f57611c1f613500565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b611c5a600d60005414602a61276b565b8151611c75901580611c6e57508251600154145b602b61276b565b600080805560028054611c8790613b84565b80601f0160208091040260200160405190810160405280929190818152602001828054611cb390613b84565b8015611d005780601f10611cd557610100808354040283529160200191611d00565b820191906000526020600020905b815481529060010190602001808311611ce357829003601f168201915b5050505050806020019051810190611d189190613f54565b9050611d2c8160600151431015602c61276b565b7f63bba27b9239a4737471a2862db7b80ba95dfab2aa0da84664e856a1ed63a5503384604051611d5d929190613cdf565b60405180910390a1611d713415602861276b565b8051611d89906001600160a01b03163314602961276b565b611d9161300d565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855182015260808087015186519086169082015260a080880151858801805191151590915260c0808a015182519097019690965260e08901518151909501949094526101008801518451961695909201949094528151439401939093526101208501518151909301929092526101408401519151015261083d816129a0565b611e4d600260005414600e61276b565b8151611e68901580611e6157508251600154145b600f61276b565b600080805560028054611e7a90613b84565b80601f0160208091040260200160405190810160405280929190818152602001828054611ea690613b84565b8015611ef35780601f10611ec857610100808354040283529160200191611ef3565b820191906000526020600020905b815481529060010190602001808311611ed657829003601f168201915b5050505050806020019051810190611f0b9190613cb1565b9050611f2f6040805160608101825260009181018281528152602081019190915290565b7f370c8a753f2f597be9b3cb4d9cc0d405711843a3697968f35120d0024732bbf13385604051611f609291906142fd565b60405180910390a1611f743415600c61276b565b8151611f8c906001600160a01b03163314600d61276b565b80516618dc99585d195960ca1b90528051602085015151604090810151905160008051602061456283398151915292611fc6929091613dbf565b60405180910390a1611fd960144361400e565b6020820152611fe66130c9565b82516001600160a01b0316815260208086018051518284015243604080850182905291515182015160608501528483015160808501526003600055600155516120319183910161432b565b60405160208183030381529060405260029080519060200190612055929190613107565b505050505050565b61206d600560005414601661276b565b815161208890158061208157508251600154145b601761276b565b60008080556002805461209a90613b84565b80601f01602080910402602001604051908101604052809291908181526020018280546120c690613b84565b80156121135780601f106120e857610100808354040283529160200191612113565b820191906000526020600020905b8154815290600101906020018083116120f657829003601f168201915b505050505080602001905181019061212b91906143f3565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338460405161215e929190613cdf565b60405180910390a16121723415601461276b565b805161218a906001600160a01b03163314601561276b565b80602001516001600160a01b03166108fc82604001519081150290604051600060405180830381858888f193505050501580156121cb573d6000803e3d6000fd5b50805160408201516001600160a01b03909116906108fc906121ed9080613da8565b6040518115909202916000818181858888f19350505050158015612215573d6000803e3d6000fd5b506000808055600181905561222c9060029061318b565b505050565b612241600160005414600a61276b565b815161225c90158061225557508251600154145b600b61276b565b60008080556002805461226e90613b84565b80601f016020809104026020016040519081016040528092919081815260200182805461229a90613b84565b80156122e75780601f106122bc576101008083540402835291602001916122e7565b820191906000526020600020905b8154815290600101906020018083116122ca57829003601f168201915b50505050508060200190518101906122ff9190613cb1565b90507fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f49153384604051612332929190613d68565b60405180910390a16123463415600861276b565b805161235e906001600160a01b03163314600961276b565b602083015151156123c15760408051602081019091526000815281516001600160a01b0316808252600260005543600155604080516020810192909252015b60405160208183030381529060405260029080519060200190610d72929190613107565b60408051602081019091526000815281516001600160a01b0316808252600e600055436001556040805160208101929092520161239d565b612409600960005414601e61276b565b815161242490158061241d57508251600154145b601f61276b565b60008080556002805461243690613b84565b80601f016020809104026020016040519081016040528092919081815260200182805461246290613b84565b80156124af5780601f10612484576101008083540402835291602001916124af565b820191906000526020600020905b81548152906001019060200180831161249257829003601f168201915b50505050508060200190518101906124c7919061440f565b90507f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb33846040516124fa929190613cdf565b60405180910390a161250e3415601c61276b565b8051612526906001600160a01b03163314601d61276b565b61252e612fb9565b815181516001600160a01b03918216905260208084015183518201526060808501518451931660409384015260808501805183860180519190915284870151815190940193909352825143940193909352915190519091015261083d8161286a565b6125a0600760005414601a61276b565b81516125bb9015806125b457508251600154145b601b61276b565b6000808055600280546125cd90613b84565b80601f01602080910402602001604051908101604052809291908181526020018280546125f990613b84565b80156126465780601f1061261b57610100808354040283529160200191612646565b820191906000526020600020905b81548152906001019060200180831161262957829003601f168201915b505050505080602001905181019061265e91906143f3565b90507fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3384604051612691929190613cdf565b60405180910390a16126a53415601861276b565b805161218a906001600160a01b03163314601961276b565b6126c5612e83565b60016001600160a01b03831660009081526005602052604090205460ff1660018111156126f4576126f4613500565b1415610e30576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561273557612735613500565b600181111561274657612746613500565b81528154610100900460ff161515602082015260019091015460409091015292915050565b8161036e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b6020810151511561280d57604080518082018252600080825260208083018281528551516001600160a01b0316808552868301518601518252601190935543600155845191820192909252905192810192909252906060015b6040516020818303038152906040526002908051906020019061222c929190613107565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612850573d6000803e3d6000fd5b50600080805560018190556128679060029061318b565b50565b60008160200151602001511161288157600061288a565b60208101515115155b1561295e576128d36040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b0390811680835283516020908101518185019081528551604090810151851681870190815283880180518501516060808a0191825291518201516080808b01918252600c60005543600155855197880198909852945193860193909352905190951694830194909452925191810191909152905160a082015260c0016127e9565b8051516020820151606001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612850573d6000803e3d6000fd5b6129f76040805161010081018252600060e08201818152825260208083018290528284018290528351808201855282815260608401526080830182905260a08301829052835190810190935282529060c082015290565b815160600151602083015160a001511115612a13576000612a1a565b6020820151515b15612aee57612a276131c5565b8251516001600160a01b0390811682528351602090810151818401528451604090810151818501528551606090810151818601528651608090810151851681870152838801805151151560a0880152805185015160c080890191909152815185015160e089015281519093015190951661010087015284510151610120860152925190920151610140840152600d600055436001559051612aca91839101614472565b6040516020818303038152906040526002908051906020019061083d929190613107565b6000826000015160200151602001518360200151602001511015612b13576001612b16565b60005b1415612c23578051651c185cdcd95960d21b905280518251604090810151905160008051602061456283398151915292612b51929091613dbf565b60405180910390a16064826020015160c00151612b6e9190614510565b602080830182905283015160c00151612b879190613da8565b604080830191909152825151602083015191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015612bcc573d6000803e3d6000fd5b5060408051606081018252600080825260208083018281528385018381528751516001600160a01b0390811686528851608001511690915285850151905260059091554360015591519091612aca91839101614532565b816000015160200151610100015182602001516020015110612d4957606081018051651c185cdcd95960d21b9052518251604090810151905160008051602061456283398151915292612c77929091613dbf565b60405180910390a16064826020015160c00151612c949190614510565b60808201819052602083015160c00151612cae9190613da8565b60a082015281515160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612cf1573d6000803e3d6000fd5b5060408051606081018252600080825260208083018281528385018381528751516001600160a01b0390811686528851608001511690915260a0860151905260079091554360015591519091612aca91839101614532565b60c0810180516519985a5b195960d21b9052518251604090810151905160008051602061456283398151915292612d81929091613dbf565b60405180910390a1612dcd6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b8251516001600160a01b0390811680835284516040908101516020808601918252808801805184015184880190815281516060908101518816818a01908152925160c0908101516080808c019182526009600055436001558851968701999099529551968501969096529051908301525190941692840192909252905160a083015201612aca565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b60408051606081019091528060005b815260006020820181905260409091015290565b604051806040016040528060008152602001612ec0613242565b905290565b604051806040016040528060008152602001612ec060405180602001604052806000151581525090565b604051806040016040528060008152602001612ec060408051808201909152600060208201908152815290565b604051806101600160405280612f30612e83565b81526020016000815260200160008152602001600015158152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001612fa1604051806020016040528060006001600160601b03191681525090565b81526040805160208181019092526000815291015290565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001612ec06040518060800160405280600081526020016000815260200160008152602001600081525090565b6040518060400160405280613020613255565b8152602001612ec06040518060e00160405280600015158152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b6040805160e081018252600060a0820181815260c083018290528252825160208082018552918152908201529081016130a761329c565b8152602001612fa1604051806040016040528060008152602001600081525090565b6040518060a0016040528060006001600160a01b031681526020016130ec6132af565b81526020016000815260200160008152602001600081525090565b82805461311390613b84565b90600052602060002090601f016020900481019282613135576000855561317b565b82601f1061314e57805160ff191683800117855561317b565b8280016001018555821561317b579182015b8281111561317b578251825591602001919060010190613160565b50613187929150613385565b5090565b50805461319790613b84565b6000825580601f106131a7575050565b601f0160209004906000526020600020908101906128679190613385565b60405180610160016040528060006001600160a01b031681526020016131e96132af565b8152602001600081526020016000815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b6040518060200160405280612ec061339a565b6040518060a0016040528060006001600160a01b031681526020016132786132af565b8152602001600081526020016000815260200160006001600160a01b031681525090565b6040518060200160405280612ec06133f9565b60408051610200810190915260006101408201818152610160830182905261018083018290526101a083018290526101c083018290526101e08301919091528190815260200160008152602001600081526020016133346040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b8152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001612ec0604051806020016040528060006001600160601b03191681525090565b5b808211156131875760008155600101613386565b604080516080810190915280600081526020016133ca604051806040016040528060008152602001600081525090565b81526020016133d761329c565b8152602001612ec0604051806040016040528060008152602001600081525090565b6040518060c001604052806000815260200161342b604051806020016040528060006001600160601b03191681525090565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526040805160c08101825260008082526020828101829052928201819052606082018190526080820181905260a0820152910190612e92565b6000604082840312156134a557600080fd5b50919050565b6000604082840312156134bd57600080fd5b6134c78383613493565b9392505050565b6001600160a01b038116811461286757600080fd5b6000602082840312156134f557600080fd5b81356134c7816134ce565b634e487b7160e01b600052602160045260246000fd5b6002811061286757612867613500565b8151606082019061353681613516565b82526020838101511515908301526040928301516001600160a01b0316929091019190915290565b6000806040838503121561357157600080fd5b50508035926020909101359150565b8151606082019061359081613516565b8083525060208301511515602083015260408301511515604083015292915050565b600061028082840312156134a557600080fd5b6000602082840312156135d757600080fd5b5035919050565b82815260006020604081840152835180604085015260005b81811015613612578581018301518582016060015282016135f6565b81811115613624576000606083870101525b50601f01601f191692909201606001949350505050565b6040516020810167ffffffffffffffff8111828210171561366c57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a0810167ffffffffffffffff8111828210171561366c57634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561366c57634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561366c57634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561366c57634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff8111828210171561366c57634e487b7160e01b600052604160045260246000fd5b604051610160810167ffffffffffffffff8111828210171561366c57634e487b7160e01b600052604160045260246000fd5b6001600160601b03198116811461286757600080fd5b6000602082840312156137c257600080fd5b6137ca61363b565b905081356137d78161379a565b815292915050565b69ffffffffffffffffffff198116811461286757600080fd5b600060a0828403121561380a57600080fd5b613812613672565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135613844816137df565b608082015292915050565b600060c0828403121561386157600080fd5b6138696136a3565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a08201356138a58161379a565b60a082015292915050565b8035610e3b816134ce565b60006101e082840312156138ce57600080fd5b6138d66136a3565b9050813581526138e983602084016137b0565b60208201526138fb83604084016137f8565b604082015261390d8360e0840161384f565b60608201526101a0820135613921816134ce565b60808201526101c08201356138a5816134ce565b60006101e0828403121561394857600080fd5b6134c783836138bb565b8151606082019061396281613516565b808352506020830151151560208301526040830151604083015292915050565b60006102a082840312156134a557600080fd5b801515811461286757600080fd5b6000604082840312156139b557600080fd5b6139bd6136d4565b8235815260208301356139cf81613995565b60208201529392505050565b600081830360408112156139ee57600080fd5b6139f66136d4565b8335815291506020601f1982011215613a0e57600080fd5b50613a1761363b565b6020830135613a2581613995565b8152602082015292915050565b600060408284031215613a4457600080fd5b6134c783836139db565b60008183036040811215613a6157600080fd5b613a696136d4565b833581526020601f1983011215613a7f57600080fd5b613a8761363b565b9150613a9161363b565b602094850135815282529283015250919050565b6000818303610280811215613ab957600080fd5b613ac16136d4565b8335815261026080601f1984011215613ad957600080fd5b613ae161363b565b9250613aeb613705565b613af8876020880161384f565b815260e08601356020820152610100808701356040830152610120613b1f89828a016137f8565b60608401526101c088013560808401526101e088013560a0840152613b4761020089016138b0565b60c084015261022088013560e084015261024088013582840152613b6d89858a016137b0565b908301525083525060208101919091529392505050565b600181811c90821680613b9857607f821691505b602082108114156134a557634e487b7160e01b600052602260045260246000fd5b600060408284031215613bcb57600080fd5b613bd36136d4565b9050813581526020820135602082015292915050565b60008183036102a0811215613bfd57600080fd5b613c056136d4565b83358152610280601f1983011215613c1c57600080fd5b613c2461363b565b613c2c613737565b602086013560038110613c3e57600080fd5b8152613c4d8760408801613bb9565b60208201526101e0607f1985011215613c6557600080fd5b613c6d61363b565b9350613c7c87608088016138bb565b8452836040820152613c92876102608801613bb9565b606082015281526020820152949350505050565b8051610e3b816134ce565b600060208284031215613cc357600080fd5b613ccb61363b565b8251613cd6816134ce565b81529392505050565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b600060a08284031215613d1957600080fd5b613d21613672565b8251613d2c816134ce565b8152602083810151908201526040830151613d46816134ce565b6040820152606083810151908201526080928301519281019290925250919050565b6001600160a01b0383168152606081016134c7602083018480518252602090810151511515910152565b634e487b7160e01b600052601160045260246000fd5b600082821015613dba57613dba613d92565b500390565b91516001600160601b0319168252602082015260400190565b600060c08284031215613dea57600080fd5b613df26136a3565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a08201516138a58161379a565b600060a08284031215613e4057600080fd5b613e48613672565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151613844816137df565b600060208284031215613e8c57600080fd5b613e9461363b565b905081516137d78161379a565b60006102608284031215613eb457600080fd5b613ebc613705565b9050613ec88383613dd8565b815260c0820151602082015260e08201516040820152610100613eed84828501613e2e565b60608301526101a083015160808301526101c083015160a0830152613f156101e08401613ca6565b60c083015261020083015160e083015261022083015190820152613f3d836102408401613e7a565b61012082015292915050565b8051610e3b81613995565b60006103a08284031215613f6757600080fd5b613f6f613768565b613f7883613ca6565b8152613f878460208501613ea1565b602082015261028083015160408201526102a08301516060820152613faf6102c08401613ca6565b6080820152613fc16102e08401613f49565b60a082015261030083015160c082015261032083015160e0820152613fe96103408401613ca6565b6101008201526103608301516101208201526103809092015161014083015250919050565b6000821982111561402157614021613d92565b500190565b60006040828403121561403857600080fd5b6140406136d4565b825161404b816134ce565b81526020928301519281019290925250919050565b8051825260208101516020830152604081015160408301526060810151606083015269ffffffffffffffffffff1960808201511660808301525050565b80518252602081015160208301526040810151604083015260608101516060830152608081015160808301526001600160601b031960a08201511660a08301525050565b6001600160a01b03838116825282516020808401919091528301515180516102c084019291906003811061411757614117613500565b60408501526020818101518051606087015290810151608086015250604081015151805160a08601526001600160601b03196020820151511660c0860152604081015161416760e0870182614060565b50606081015161417b61018087018261409d565b506080810151831661024086015260a0015190911661026084015260600151805161028084015260208101516102a08401525b509392505050565b86815285516001600160601b03191660208201526101e081016141dc6040830187614060565b6141e960e083018661409d565b6001600160a01b039384166101a0830152919092166101c090920191909152949350505050565b60006102e0828403121561422357600080fd5b61422b613672565b8251614236816134ce565b81526142458460208501613ea1565b602082015261028083015160408201526102a083015160608201526102c090920151608083015250919050565b61427d82825161409d565b602081015160c0830152604081015160e083015260608101516101006142a581850183614060565b60808301516101a085015260a08301516101c085015260c08301516001600160a01b03166101e085015260e0830151610200850152820151610220840152506101200151516001600160601b03191661024090910152565b60006102a08201905060018060a01b03841682528251602083015260208301516141ae604084018251614272565b81516001600160a01b031681526020808301516102e083019161435090840182614272565b50604083015161028083015260608301516102a08301526080909201516102c09091015290565b60006060828403121561438957600080fd5b6040516060810181811067ffffffffffffffff821117156143ba57634e487b7160e01b600052604160045260246000fd5b806040525080915082516143cd816134ce565b815260208301516143dd816134ce565b6020820152604092830151920191909152919050565b60006060828403121561440557600080fd5b6134c78383614377565b600060a0828403121561442157600080fd5b614429613672565b8251614434816134ce565b808252506020830151602082015260408301516040820152606083015161445a816134ce565b60608201526080928301519281019290925250919050565b81516001600160a01b031681526103a0810160208301516144966020840182614272565b50604083015161028083015260608301516102a083015260808301516001600160a01b039081166102c084015260a084015115156102e084015260c084015161030084015260e084015161032084015261010084015116610340830152610120830151610360830152610140909201516103809091015290565b60008261452d57634e487b7160e01b600052601260045260246000fd5b500490565b81516001600160a01b0390811682526020808401519091169082015260408083015190820152606081016103a356fe8e286a9dd4559bb22bf9edddae9f75da581096298fc82a9ac0d63ec73f8c4c4da264697066735822122093a7a1c718178318402e9584f7c80f7d4cc622135794e0bdf1cd19841579ed4264736f6c634300080c0033`,
  BytecodeLen: 18451,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:66:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:84:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:90:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:157:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:284:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:187:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:284:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:219:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:284:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:221:58:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:113:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: './index.rsh:241:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: './index.rsh:284:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:243:37:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Contributors_claimRefund": Contributors_claimRefund,
  "Contributors_contribute": Contributors_contribute,
  "Contributors_contributed": Contributors_contributed,
  "Contributors_creating": Contributors_creating,
  "Contributors_timedOut": Contributors_timedOut,
  "Deployer": Deployer
  };
export const _APIs = {
  Contributors: {
    claimRefund: Contributors_claimRefund,
    contribute: Contributors_contribute,
    contributed: Contributors_contributed,
    creating: Contributors_creating,
    timedOut: Contributors_timedOut
    }
  };
