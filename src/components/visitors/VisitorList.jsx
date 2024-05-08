import React from 'react'

import { visitorItem } from '../../data/VisitorsData'

export default function VisitorList() {
    return (
        <div className="visItems">
            {visitorItem.map(visitor => (
                <div className="visItem" key={visitor.visitorId}>
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
