import React from 'react';
import { classnames } from './helpers';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
      errorMessage: '',
      latitude: null,
      longitude: null,
      isGeocoding: false,
    }
}


handleChange = address => {
    this.setState({
      address,
      latitude: null,
      longitude: null,
      errorMessage: '',
    });
  };

  handleSelect = selected => {
    this.setState({ isGeocoding: true, address: selected });
    geocodeByAddress(selected)
      .then(res => getLatLng(res[0]))
      .then(({ lat, lng }) => {
        this.setState({
          latitude: lat,
          longitude: lng,
          isGeocoding: false,
        });
      })
      .catch(error => {
        this.setState({ isGeocoding: false });
        console.log('error', error); // eslint-disable-line no-console
      });
  };

  handleCloseClick = () => {
    this.setState({
      address: '',
      latitude: null,
      longitude: null,
    });
  };

  handleError = (status, clearSuggestions) => {
    console.log('Error from Google Maps API', status); // eslint-disable-line no-console
    this.setState({ errorMessage: status }, () => {
      clearSuggestions();
    });
  };


render() {const {
    address,
    errorMessage,
    latitude,
    longitude,
    isGeocoding,
  } = this.state;
        return (
            <header>
                <nav className="navbar">
                    <ul className="navbar-container">
                        <li><a href="#">About</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">About</a></li>
                        <li><div>
        <PlacesAutocomplete
          onChange={this.handleChange}
          value={address}
          onSelect={this.handleSelect}
          onError={this.handleError}
          shouldFetchSuggestions={address.length > 2}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps }) => {
            return (    
              <div className="search-bar-container">
                <div className="search-input-container">
                  <input
                    {...getInputProps({
                      placeholder: 'Search Places...',
                      className: 'search-input',
                    })}
                  />
                  {this.state.address.length > 0 && (
                    <button
                      className="clear-button"
                      onClick={this.handleCloseClick}
                    >
                      x
                    </button>
                  )}
                </div>
                {suggestions.length > 0 && (
                  <div className="autocomplete-container">
                    {suggestions.map(suggestion => {
                      const className = classnames('suggestion-item', {
                        'suggestion-item--active': suggestion.active,
                      });

                      return (
                        /* eslint-disable react/jsx-key */
                        <div
                          {...getSuggestionItemProps(suggestion, { className })}
                        >
                          <strong>
                            {suggestion.formattedSuggestion.mainText}
                          </strong>{' '}
                          <small>
                            {suggestion.formattedSuggestion.secondaryText}
                          </small>
                        </div>
                      );
                      /* eslint-enable react/jsx-key */
                    })}
                    <div className="dropdown-footer">
                      <div>
                    
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          }}
        </PlacesAutocomplete>
        {errorMessage.length > 0 && (
          <div className="error-message">{this.state.errorMessage}</div>
        )}

        {((latitude && longitude) || isGeocoding) && (
          <div>
            <h3 className="geocode-result-header">Geocode result</h3>
            {isGeocoding ? (
              <div>
                <i className="fa fa-spinner fa-pulse fa-3x fa-fw spinner" />
              </div>
            ) : (
              <div>
                <div className="geocode-result-item--lat">
                  <label>Latitude:</label>
                  <span>{latitude}</span>
                </div>
                <div className="geocode-result-item--lng">
                  <label>Longitude:</label>
                  <span>{longitude}</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
              </li>
                    </ul>
                </nav>

                    </header>
        );
    }
}

export default Navbar