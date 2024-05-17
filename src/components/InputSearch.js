import './style.css'

const InputSearch = props => {
    const {searchInput, onUpdateSearch, onSearchGo} = props
    const onChangeInput = event => {
        const input = event.target.value
        onUpdateSearch(input)
    }
    return (
        <div className='input-container'>
            <input type="search" value={searchInput} placeholder="Enter what you search..." required onChange={onChangeInput} />
            <button type='button' onClick={onSearchGo} >Search</button>
        </div>
    )
}

export default InputSearch