# Code Challenge
The challenge calls for a web app which ingests data from an API, then renders
the it onto an interactive map.

## Requirements
- It should be a React web app
- It connect to the Translink API
- Bus locations should be rendered onto a map
- The map should be interactive
- Bus locations should be live and updated continuously
- Code quality should be high
- The latest JavaScript syntax and best practices should be used
- Project should be well documented
- App should be functional and performant
- App should be easy to deploy

## Addressing Requirements
The requirements suggests that the following methodology could be acceptable:
- Lint code with [StandardJS](https://standardjs.com/). Standard provides a
standard JS style and helps to enforce it.
- Unit Test code with [Jest](https://facebook.github.io/jest/). Snapshot testing
for components should be fine.
- Although I would normally use esdoc to generate documentation, it may not be
appropriate for this exercise. Instead, I will use inline comments and docblocks.
- Enable modern JS with a pre-configured environment for our purposes.
[Create-React-App](https://github.com/facebookincubator/create-react-app)
should work fine. Additionally, it includes Jest and React configuration, and
minification /bundling of production builds. Finally, it provides several pathways
for deployment.
- I'll use fetch for network calls rather than superagent to reduce dependancies.
- I'll use Redux to management the web app's state. Although we could persist the
redux store with the service worker bundled in by Create-react-app, we are going
to skip it for this exercise.
- I'll use Redux-Saga to help implement live and continuous updates of bus locations
- I'll use react-map-gl for mapping. I've never used it, but have been interested
since it's announcement by Uber. This is an excellent opportunity to experiment
with it. It should allow for interactive mapping.

## Test Cases
- The user should see a map, centered on Vancouver
- The map should show bus locations
- The bus locations should be live and continuously updated
- If there is an error in pulling data from the API, should the last valid version
of the data

## Exploration of the API
The Translink Open API offers data about Metro Vancouver's transit data. We are
interested in 'Bus Locations'. To me, this means the current location of a bus.

The Real-Time Transit Information API offers a max of 1000 requests per day, and
offers data on Stops, Buses, stop Estimates, and Route details. This may be the
right source for me.

```
/* API Requests Rate Limiting */
24 hours / day * 60 mins / hour = 1440 mins / day

(1440 mins / day) / 1000 requests = 1.44 mins / request
```

Lets rate limit to 5 mins for now. We can adjust this for better responsiveness later.

An API key is required for every request. I'll set it as environmental variable (API_KEY)

The data comes in XML or JSON. I like JSON so lets make sure to request that format.
This can be done by giving a header of content-type or accept as 'application/JSON'

## Exploration of the data
The API reference says that we can retrive data on all active buses by calling:
```
http://api.translink.ca/rttiapi/v1/buses?apikey=[APIKey]
```

Here's what the data looks like via browser:
```
10089132934620NORTHBRIDGEPORT STN VIA LADNER EXCHNB149.108717-123.05343310:29:29 amhttp://nb.translink.ca/geodata/620.kmz
10099118721620NORTHBRIDGEPORT STN VIA LADNER EXCHNB149.187550-123.11181710:30:53 amhttp://nb.translink.ca/geodata/620.kmz
...
```

Here's what the data looks like via postman as JSON:
```
[
    {
        "VehicleNo": "1008",
        "TripId": 9132934,
        "RouteNo": "620",
        "Direction": "NORTH",
        "Destination": "BRIDGEPORT STN VIA LADNER EXCH",
        "Pattern": "NB1",
        "Latitude": 49.189017,
        "Longitude": -123.112633,
        "RecordedTime": "10:39:11 am",
        "RouteMap": {
            "Href": "http://nb.translink.ca/geodata/620.kmz"
        }
    },
    {
        "VehicleNo": "1009",
        "TripId": 9118751,
        "RouteNo": "620",
        "Direction": "SOUTH",
        "Destination": "TSAWW. FERRY VIA LADNER EXCH",
        "Pattern": "SB1",
        "Latitude": 49.195633,
        "Longitude": -123.126967,
        "RecordedTime": "10:36:09 am",
        "RouteMap": {
            "Href": "http://nb.translink.ca/geodata/620.kmz"
        }
    },
    ...
]
```

It looks like we can use the VehicleNo as
an ID. The associated Latitude and Longitude will be used to render the bus on
the map. RecordedTime would be fantastic for future optimizations.

So we want our data to look like this:
```
[
    {
        "vehicleNo": "1008",
        "latitude": 49.189017,
        "longitude": -123.112633,
    },
    {
        "vehicleNo": "1009",
        "latitude": 49.195633,
        "longitude": -123.126967,
    },
    ...
]
```

## Game Plan
Now that I have a grasp of the data, api, and requirements, I will start to
implement a solution. I will do this by:

1. Setup a development environment
  - Create-React-App
  - Linter
  - Jest
  - Redux
  - Redux-saga (lets try without this.)
  - react-map-gl
2. Implement a map
3. Connect to the API
4. Transform the responses into the format we want
5. Render it onto the map
6. Implement continuous updating of bus locations

## Setup
1. Clone this git repo with:
```
git clone https://github.com/PeterChauYEG/maps.git
```

2. Install dependancies with:
```
npm install
```

3. Setup environment variables in `.env`. Use the provided templete file `.env.template`. Edit it with a TransLink API key:
```
{
  "API_KEY": "xxxxxxxxxxxxxxxxxxx"
}
```

4. Run development server with:
```
npm start
```

5. Run linter and unit test runner with:
```
npm test
```

6. Check test coverage with:
```
npm run test:coverage
```

A note on test coverage: Although 100% would be nice, I prefer to focus on functions and classes. Lets skip configuration and boilerplate code for this exercise.
