'use client'
import { GlobalContext } from "@/context/context"
import { Chainselect } from "./components/ChainSelect"
import { Receiver } from "./components/Receiver"
import { Tokenselect } from "./components/TokenSelect"
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { FiArrowDownLeft } from "react-icons/fi";
import { SecretNetworkClient } from "secretjs"
import { formatAddress } from "@/config/format"
import { useAccount } from "wagmi"
import { useEffect } from "react"
import { Chainlist3 } from "./components/Chainlist3"
import { TokenList } from "../BridgeOut/components/TokenList"
export const BridgeIn = () => {
    const {isBridgeIn, setIsBridgeIn, setAddress, isList, isTokenList, keplrAddress, setKeplrAddress} = GlobalContext()
    const { address:userAddress } = useAccount()
    const handleAdd = () => {
      if(userAddress) {
        setAddress(userAddress);
      } else {
        console.log('not connceted to shit')
      }
    }
    const handleKeplr = async  () => {
        if(!window.keplr) {
            alert('keplr not install you need that shit')
        } try {
            let chainId = 'pulsar-3'
            await window.keplr.enable(chainId);

            const OfflineSigner = window.getOfflineSigner(chainId);

            const enigmaUtils = window.getEnigmaUtils(chainId);

            const account = await OfflineSigner.getAccounts()
           
            setKeplrAddress(account[0].address)
            console.log('add',account[0])

            const secretjs = new SecretNetworkClient({
                chainId: "pulsar-3",
                url: "https://api.pulsar3.scrttestnet.com",
                wallet: account[0],
                walletAddress: account[0].address,
                enigmaUtils: enigmaUtils,
              });
        } catch (error) {
            console.log('error', error)
        }
    }
    useEffect(() => {
      handleKeplr()
      handleAdd()
    },[])
    return(
    <div>
        <div className=" w-full flex items-center flex-col h-16">
        <div className="relative mt-[0px] flex place-items-center ml-auto mr-auto before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-black before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-[#0141ff] after:via-[#0146ff] after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff]  after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
           <div className="flex space-x-6">
            
            <div className="w-auto flex text-xl ml-auto mr-auto py-1.5 px-6 text-center bg-blue-600/50 h-10 drop-shadow-glow  rounded-3xl"> 
            
            <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button onClick={() => {
                    openConnectModal();
                    }} type="button">
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                      className="w-auto h-auto xl:w-7 xl:h-7"
                        style={{
                          background: chain.iconBackground,
                          width: 19,
                          height: 19,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            className="w-auto h-auto xl:w-7 xl:h-7"
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 5, height: 5 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>

                  <button onClick={openAccountModal} type="button">
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
            </div>
           </div>
        </div>
        <div className=" w-[100%] h-auto">
            <div>
                <div className="h-[900px] w-[90%] lg:w-[50%] py-3 px-3 mb-20 mt-20 drop-shadow-glow2 bg-black/90 rounded-3xl ml-auto mr-auto">
                    <div className="py-2 px-2 w-[80%] mt-4 ml-auto mr-auto flex">
                       <p className="ml-auto mr-1 text-xl font-bold">Bridge In</p>
                       <FiArrowDownLeft className="ml-2 mr-auto text-xl font-bold mt-1" />
                    </div>
                    <div className="w-[95%] ml-auto rounded-2xl mr-auto mt-[40px] drop-shadow-lg h-[155px]">
                       <Chainselect />
                    </div>
                    <div className="w-[95%] ml-auto rounded-2xl mr-auto mt-[80px] drop-shadow-lg h-[155px]">
                       <Tokenselect />
                    </div>
                    <div className="w-[95%] ml-auto rounded-2xl mr-auto mt-[30px] drop-shadow-lg h-[215px]">
                       <Receiver />
                    </div>
                    <div className="w-[95%] ml-auto  flex rounded-2xl mr-auto mt-[60px] drop-shadow-lg h-[215px]">
                      <button className="w-[370px] text-xl ml-auto mr-auto bg-blue-600/50 h-10 drop-shadow-glow2  rounded-3xl">Bridge</button>
                    </div>
                </div>
            </div>
            <div className="relative mt-[0px] flex place-items-center ml-auto mr-auto before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-black before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-[#0141ff] after:via-[#0146ff] after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff]  after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
        </div>
        {isList && <Chainlist3 />}
        {isTokenList && <TokenList />}
    </div>
    )
}