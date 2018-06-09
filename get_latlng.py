import geocoder

def get_lat_lng(address):
    """Return lat lon coordinates for an address"""

    g = geocoder.google(address)
    return g.latlng

def get_lat_lng_batched(addresses):
    """Takes in list of addresses, returns geojson of those addresses"""

    batched_coordinates = []
    g = geocoder.google(addresses, method='batch')
    for coordinates in g:
        batched_coordinates.append(tuple(coordinates.address, coordinates.latlng))
