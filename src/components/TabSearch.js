import './style.css'

const tabs = [
    {
        id: 0,
        tab: 'Animal'
    },
    {
        id:1,
        tab: 'Flowers'
    },
    {
        id: 2,
        tab: 'Cars'
    },
    {
        id: 3,
        tab: 'Technology'
    }
]


const TabSearch = props => {
    const {onUpdateSearchTab} = props
    return (
        <div className="tab-container">
            {
                tabs.map(eachTab => (
                    <div key={eachTab.id}>
                        <button className='tab-btn' onClick={() => onUpdateSearchTab(eachTab.tab) }>{eachTab.tab}</button>
                    </div>
                ))
            }
        </div>
    )
}

export default TabSearch