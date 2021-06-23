import React from 'react'
import Badge from '../../components/Badge'

const Menu = ({ section, setSection }: any) => {
    return (
        <div className="overflow-x-auto">
            <div className="flex flex-row space-x-2 text-xs whitespace-nowrap lg:text-base lg:flex-col lg:space-y-2 lg:space-x-0">
                <div
                    className={`cursor-pointer navbar-bg-green-thick-to-thin rounded flex items-center px-4 py-6 border border-transparent ${section ===
                        'portfolio' && 'border-gradient-menu'}`}
                    onClick={() => {
                        return setSection('portfolio')
                    }}
                >
                    Your Staked Farms
                </div>
                <div
                    className={`cursor-pointer navbar-bg-green-thick-to-thin rounded flex items-center px-4 py-6 border border-transparent ${section ===
                        'all' && 'border-gradient-menu'}`}
                    onClick={() => {
                        return setSection('all')
                    }}
                >
                    All Yield Farms
                </div>
                <div
                    className={`cursor-pointer navbar-bg-green-thick-to-thin rounded flex items-center px-4 py-6 border border-transparent ${section ===
                        'kmp' && 'border-gradient-menu'}`}
                    onClick={() => {
                        return setSection('kmp')
                    }}
                >
                    Lending Yield Farms
                </div>
                <div
                    className={`cursor-pointer navbar-bg-green-thick-to-thin rounded flex items-center px-4 py-6 border border-transparent ${section ===
                        'slp' && 'border-gradient-menu'}`}
                    onClick={() => {
                        return setSection('slp')
                    }}
                >
                    Liquidity Yield Farms
                </div>
                <div
                    className={`cursor-pointer navbar-bg-green-thick-to-thin rounded flex justify-between items-center px-4 py-6 border border-transparent ${section ===
                        'mcv2' && 'border-gradient-menu'}`}
                    onClick={() => {
                        return setSection('mcv2')
                    }}
                >
                    Double Yield Farms
                    <Badge color="blue">New</Badge>
                </div>
                {/* <Card
                className="h-full bg-dark-900"
                backgroundImage={DepositGraphic}
                title={'Create a new Kashi Market'}
                description={
                    'If you want to supply to a market that is not listed yet, you can use this tool to create a new pair.'
                }
            /> */}
            </div>
        </div>
    )
}

export default Menu
