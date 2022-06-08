import React from 'react'
import { VscServerProcess } from 'react-icons/vsc'
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import './About.css'
const Card = () => {
    const Data = [

        {
            icon: SiHiveBlockchain,
            title: 'Reliable, tamper-proof network',
            desc: 'Use decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract.'
        },
        {
            icon: SiStrapi,
            title: 'Seamless connection to any API',
            desc: 'Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.'
        },
        {
            icon: SiFsecure,
            title: 'Proven, ready-made solutions',
            desc: 'Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.'
        },
        {
            icon: VscServerProcess,
            title: 'Secure off-chain computation',
            desc: 'Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.'
        },


    ]

    return (
        <>
            {
                Data.map((d, index)=>(
                <div key={index} className="card">
                    <div className='card_icon'>
                        <d.icon size={30} />
                    </div>
                    <h3 className='card_title'>{d.title}</h3>
                    <p className='card_text'>{d.desc}</p>
                </div>
                ))
            }
        </>
    )
}

export default Card