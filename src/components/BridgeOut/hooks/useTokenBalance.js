import { useBalance, useToken } from 'wagmi'
import { useState, useEffect } from 'react'
import { GlobalContext } from '@/context/context'


const useGetTokenData = () => {
    const { setTokenBalance, tokenAddress, tokenBalance, chainId,  address  } = GlobalContext()
    const [newBalance,setNewBalance] = useState(0)
     
    const { balance }  = useBalance({
        address: address ,
        token: tokenAddress,
        chainId: chainId
    })
    useEffect(() => {
      setNewBalance(balance?.formatted);
      setTokenBalance(balance?.formatted);
    },[setNewBalance])

    return { tokenBalance }
    

}

export default useGetTokenData