const Pagination = props => {
    const {onUpdatePrev, onUpdateNext, pageNo} = props

    if (pageNo > 1){
        return (
            <div className="pagination">
                <button className="btn" onClick={() => onUpdatePrev()}>Prev</button>
                <p>{pageNo}</p>
                <button className="btn" onClick={() => onUpdateNext()}>Next</button>
            </div>
        )
    }
    return (
        <div className="pagination">
            <p>{pageNo}</p>
            <button className="btn" onClick={onUpdateNext}>Next</button>
        </div>
    )
}

export default Pagination