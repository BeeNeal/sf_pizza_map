from mapbox import Geocoder
import requests

access_token = 'pk.eyJ1IjoiYmVlbmVhbCIsImEiOiJjamRqdXdkd3UxMzB2MndvNmkwbGIzZmllIn0.xVy7VGtquOc7rUUpRz-KaQ';

def string_url_formatter(string):
    """Takes in string, returns string with spaces replaced by '%20' """

    formatted = string.replace(" ", '%20')
    c_formatted = formatted.replace(",", '%2')

    return c_formatted + '.json'

def geocode(address):
    """Send a GET request to mapbox API which returns geocoded address."""

    host_path = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
    search_address = string_url_formatter(address)
    credentials_path = '?access_token=' + access_token
    url = host_path + search_address + credentials_path
    response = requests.request('GET', url)

    return response.json()['features'][0]['geometry']['coordinates']

print geocode("2240 Polk St, San Francisco, CA 94109")