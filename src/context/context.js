'use client'
import { createContext, useContext, useState } from "react";


export const secretContext = createContext({});

export const SecretContextProvider = ({children}) => {
    const [isBridgeIn, setIsBridgeIn] = useState(true);
    const [keplrAddress, setKeplrAddress] = useState('');
    const [inSenderChain,setInSenderChain] = useState('Sepolia');
    const [OutReceiverChain,setOutReceiverChain] = useState('Sepolia');
    const [isGenerated, setIsGenerated] = useState(false);
    const [genratedAddress, setGeneratedAddress] = useState('');
    const [genratedAddressK, setGeneratedAddressK] = useState('');
    const [isGeneratedK, setIsGeneratedK] = useState(false);
    const [tokenName,setTokenName] = useState('aUSDC');
    const [tokenType,setTokenType] = useState('ERC20');
    const [tokenBalance,setTokenBalance] = useState(0);
    const [tokenAddress,setTokenAddress] = useState('0x254d06f33bDc5b8ee05b2ea472107E300226659A');
    const [chainId, setChainId] = useState(11155111)
    const [isList, setIsList] = useState(false)
    const [isTokenList, setIsTokenList] = useState(false)
    const [address, setAddress] = useState('');
    const [bridgeAmount, setBridgeAmount] = useState(0)
    const [balanceSCRT, setBalanceSCRT] = useState(100)
    const [bridgeFeeAmount, setBridgeFeeAmount] = useState(0.15)
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
        isGenerated,
        genratedAddress, 
        genratedAddressK,
        isGeneratedK, 
        setIsGeneratedK,
        setGeneratedAddressK,
        setGeneratedAddress,
        setIsGenerated,
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