import React from 'react';
import Select from 'react-select';

class MainContent extends React.Component {

    render() {
        const options = [
            { value: 'Shawarma', label: 'Shawarma' },
            { value: 'Pizza', label: 'Pizza' },
            { value: 'Burgers', label: 'Burgers' },
            { value: 'Pasta', label: 'Pasta' },
            { value: 'Pancakes', label: 'Pancakes' },
            { value: 'Sushi', label: 'Sushi' }
        ]
        return (
            <div className="main">
                <div className="main-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
        </div>

                <span className="choose">Choose Eat</span>

                <Select options={options}
                    onChange={this.props.onChange} className="dropdown" />
            </div   >

        );

    }

}

export default MainContent