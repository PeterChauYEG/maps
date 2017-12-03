/**
 * This file contains data fixtures for testing
 */
export const initial = []

export const populated = [
  {
    'vehicleNo': '1008',
    'latitude': 49.189017,
    'longitude': -123.112633
  },
  {
    'vehicleNo': '1009',
    'latitude': 49.195633,
    'longitude': -123.126967
  }
]

export const raw = [
  {
    'VehicleNo': '1008',
    'TripId': 9132934,
    'RouteNo': '620',
    'Direction': 'NORTH',
    'Destination': 'BRIDGEPORT STN VIA LADNER EXCH',
    'Pattern': 'NB1',
    'Latitude': 49.189017,
    'Longitude': -123.112633,
    'RecordedTime': '10:39:11 am',
    'RouteMap': {
      'Href': 'http://nb.translink.ca/geodata/620.kmz'
    }
  },
  {
    'VehicleNo': '1009',
    'TripId': 9118751,
    'RouteNo': '620',
    'Direction': 'SOUTH',
    'Destination': 'TSAWW. FERRY VIA LADNER EXCH',
    'Pattern': 'SB1',
    'Latitude': 49.195633,
    'Longitude': -123.126967,
    'RecordedTime': '10:36:09 am',
    'RouteMap': {
      'Href': 'http://nb.translink.ca/geodata/620.kmz'
    }
  }
]
