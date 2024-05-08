import React from 'react'

export const visitorItem = [
    {
        visitorId: 1,
        name: 'Tabe Lilian',
        tag: 'IDCMR115750950',
        address: 'Small Soppo, Buea',
        visit: 'Visit for sight seeing',
        time: '26/03/2024 - 8:00 AM'
    },
    {
        visitorId: 2,
        name: 'Maurice Sam',
        tag: 'IDCMR115750950',
        address: 'Small Soppo, Buea',
        visit: 'Visit for sight seeing',
        time: '26/03/2024 - 8:00 AM'
    },
    {
        visitorId: 3,
        name: 'Martin Ngwa',
        tag: 'IDCMR115750950',
        address: 'Small Soppo, Buea',
        visit: 'Visit for sight seeing',
        time: '26/03/2024 - 8:00 AM'
    },
    {
        visitorId: 4,
        name: 'Tabe Lilian',
        tag: 'IDCMR115750950',
        address: 'Small Soppo, Buea',
        visit: 'Visit for sight seeing',
        time: '26/03/2024 - 8:00 AM'
    }
]

export default function VisitorList() {
    return (
        <div className="visItems">
            {visitorItem.map(visitor => (
                <div className="visItem" key={visitor.id}>
                    <div className="user">
                        <div className="icon">
                            <img src="images/usericon.png" alt="" />
                        </div>
                        <div className="text">
                            <p>{visitor.name}</p>
                            <span>{visitor.tag}</span>
                        </div>
                    </div>

                    <div className="extra">
                        {visitor.address}
                    </div>

                    <div className="extra">
                        {visitor.visit}
                    </div>

                    <div className="extra">
                        {visitor.time}
                    </div>
                </div>
            ))}


        </div>
    )
}
