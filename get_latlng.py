import geocoder

def get_lat_lng(address):
    """Return lat lon coordinates for an address"""

    g = geocoder.google(address)
    return g.latlng
