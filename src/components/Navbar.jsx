import React, { Component } from 'react';

class Navbar extends React.Component {
    state = {
        query: '',
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }
    render() {
        return (
            <header>
                <nav className="navbar">
                    <ul className="navbar-container">
                        <li><a>About</a></li>
                        <li><a>About</a></li>
                        <li><a>About</a></li>
                        <li className="search-input"><form>
                            <input
                                placeholder="Search for..."
                            />
                            <p>{this.state.query}</p>
                        </form></li>
                    </ul>
                </nav>

            </header>
        );
    }
}


export default Navbar