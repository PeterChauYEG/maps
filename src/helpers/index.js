/**
 * This file contains helper functions
 */

// environment variables
const TRANS_LINK_API_KEY = process.env.REACT_APP_TRANS_LINK_API_KEY

/**
 * checks the status of a network response.
 */
export const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  var error = new Error(response.statusText)
  error.response = response
  throw error
}

/**
 * Parses the response into JSON
 */
export const parseJSON = (response) => {
  return response.json()
}

/**
 * Makes a network call for buses then runs a callback function.
 */
export const getBuses = (cb) => {
  // setup api request
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  const resource = `/rttiapi/v1/buses?apikey=${TRANS_LINK_API_KEY}`

  const busRequest = new Request(resource, options)

  // make api request
  fetch(busRequest)
    .then(checkStatus)
    .then(parseJSON)
    .then(cleanBuses)
    .then(function (data) {
      cb(data)
    }).catch(function (error) {
      console.log('request failed', error)
    })
}

/**
 * Cleans up raw bus data.
 * @param {array} raw bus data from the API.
 * @return {array} cleaned up data!
 */
export const cleanBuses = (raw) => {
  const clean = raw.map((ele) => {
    const {
      VehicleNo,
      Latitude,
      Longitude
    } = ele

    return {
      vehicleNo: VehicleNo,
      longitude: Longitude,
      latitude: Latitude
    }
  })

  return clean
}
