# Segment Service for Node JS

Send events to Segment from your Node JS backend. This package is built on top of the offical [analytics-node](https://github.com/segmentio/analytics-node) package. It gives you TypeScript type definitions for all exported functions and will validate the incoming data so it complies with the rules of the Segment API.

## Quickstart

```shell
  yarn add segment-service-js
```

#### Basic Usage
Basic usage involves adding the `AnalyticsService` to your setup. **IMPORTANT** You need to fetch your Write Key from your Segment destination and feed it to `AnalyticsService` (as seen below).

```js
import { AnalyticsService } from 'segment-service-js'

const segmentWriteKey = 'your_segment_write_key'
// Initialize the AnalyticsService
const analytics = new AnalyticsService({
  writeKey: segmentWriteKey,
})
// ways down in your code ...
analytics.identify({
  userId: userId,
  traits: {
    id: userId,
    username: user.name,
    email: user.email,
    createdAt: new Date(user.createdAt),
  },
})
analytics.track({
  userId: userId,
  event: 'user_logged_in',
  properties: {
    name: user.name,
    email: user.email,
  },
})
```