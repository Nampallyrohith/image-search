import { Component } from "react";
import {Tooltip} from 'react-tooltip';
import { IoCloseCircle } from "react-icons/io5";

import InputSearch from '../components/InputSearch'
import TabSearch from './TabSearch'
import Pagination from '../components/Pagination'
import './style.css'
import Popup from "reactjs-popup";

class SearchImageContainer extends Component{
    state = {
        imgList : [],
        pageNo: 1, 
        searchInput: 'animal'
    }

    componentDidMount() {
        this.getImageList()
    }

    getImageList = async () => {
        const {pageNo, searchInput} = this.state
        const url = `https://api.unsplash.com/search/photos?page=${pageNo}&query=${searchInput}`
        const options = {
            method: 'GET',
            headers: {
                Authorization: 'Client-ID dV9DoZxpHflWzUeXA8elNrxCWxmqw_jnIkC0bdLMyF8'
            }
        }

        const response = await fetch(url, options)
        if (response.ok) {
            const data = await response.json()
            this.setState({imgList: data.results})
        }else{
            console.log('error')
        }
    }

    onUpdateSearch = input => this.setState({searchInput: input})

    onUpdateSearchTab = input => this.setState({searchInput:input}, this.getImageList)

    onUpdatePrev = () => this.setState(prevState => ({pageNo: prevState.pageNo - 1}), this.getImageList)

    onUpdateNext = () => this.setState(prevState => ({pageNo: prevState.pageNo + 1}), this.getImageList)

    onSearchGo = () => {
        const {searchInput} = this.state
        if (searchInput === '') alert('Oops, Input is empty')
        else this.getImageList()
    }


    render() {
        const {imgList, searchInput, pageNo} = this.state
        return (
            <div className="image-container">
                <h1>Images On Search</h1>
                <InputSearch searchInput={searchInput} onUpdateSearch={this.onUpdateSearch} onSearchGo={this.onSearchGo} />
                <TabSearch onUpdateSearchTab={this.onUpdateSearchTab}  />
                <div className="image-results">
                    <ul>
                        {
                            imgList.map(img => (
                                <li key={img.id}>
                                    <Popup
                                    modal
                                    trigger={
                                        <button type="button" className="img-btn">
                                        <img src={img.links.download} alt={img.alt_description} data-tooltip-id={`img-${img.id}`} />
                                        <Tooltip id={`img-${img.id}`} place="top" effect="solid">
                                            <div>
                                                <p><strong>Description:</strong> {img.alt_description}</p>
                                                <p><strong>Photographer:</strong> {img.user.name}</p>
                                                <p><strong>Likes:</strong> {img.likes}</p>
                                            </div>
                                        </Tooltip>
                                    </button>
                                    }
                                    >
                                    {
                                        close => (
                                            <div className="card">
                                                <button onClick={() => close()} style={{background: 'transparent', borderWidth: '0px'}}>
                                                    <IoCloseCircle style={{width: '30px', height:'30px', position: 'absolute', top: '0', right: '0'}} />
                                                </button>
                                                <div className="div1">
                                                    <img src={img.links.download} alt="full size" />
                                                    <div>
                                                        <p>Description: {img.alt_description}</p>
                                                        <p>No. of likes: {img.likes}</p>
                                                        <h4>Photographer: {img.user.name}</h4>
                                                        <p>Bio: {img.user.bio}</p>
                                                        
                                                    </div>
                                                </div>

                                                
                                            </div>
                                        )
                                    }
                                    </Popup>
                                </li>
                                
                            ))
                        }
                    </ul>
                </div>
                <Pagination pageNo={pageNo} onUpdatePrev={this.onUpdatePrev} onUpdateNext={this.onUpdateNext} />
            </div>
        )
    }
}

export default SearchImageContainer