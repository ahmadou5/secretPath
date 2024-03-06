'use client'
import { createContext, useContext, useState } from "react";


export const secretContext = createContext({});

export const SecretContextProvider = ({children}) => {
    const [isBridgeIn, setIsBridgeIn] = useState(true);
    const [keplrAddress, setKeplrAddress] = useState('');
    const [inSenderChain,setInSenderChain] = useState('BNB');
    const [OutReceiverChain,setOutReceiverChain] = useState('BNB');
    const [tokenName,setTokenName] = useState('SCRT');
    const [tokenType,setTokenType] = useState('ERC20');
    const [tokenBalance,setTokenBalance] = useState(0);
    const [tokenAddress,setTokenAddress] = useState('0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05');
    const [chainId, setChainId] = useState(97)
    const [isList, setIsList] = useState(false)
    const [isTokenList, setIsTokenList] = useState(false)
    const [address, setAddress] = useState('');
    const [bridgeAmount, setBridgeAmount] = useState(0)
    const [balanceSCRT, setBalanceSCRT] = useState(100)
    const [bridgeFeeAmount, setBridgeFeeAmount] = useState(1.5)
    const value = {
        isBridgeIn,
        keplrAddress,
        address,
        bridgeAmount,
        bridgeFeeAmount,
        balanceSCRT,
        isList,
        isTokenList,
        inSenderChain,
        OutReceiverChain,
        tokenName,
        chainId,
        tokenType,
        tokenBalance,
        tokenAddress,
        setTokenAddress,
        setTokenBalance,
        setTokenType,
        setChainId,
        setTokenName,
        setOutReceiverChain,
        setInSenderChain,
        setIsTokenList,
        setIsList,
        setBalanceSCRT,
        setAddress,
        setBridgeFeeAmount,
        setBridgeAmount,
        setKeplrAddress,
        setIsBridgeIn
    }
    return(
    <secretContext.Provider value={value}>
       {children}
    </secretContext.Provider>)
}


export const GlobalContext = () => useContext(secretContext)