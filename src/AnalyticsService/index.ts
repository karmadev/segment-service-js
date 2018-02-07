import * as Analytics from 'analytics-node'
import { IIncomingProps, ITrackObject, IIdentifyObject, IGroupObject } from './types'

export default class AnalyticsService {
  private analytics
  constructor({ writeKey, MockEffect }: IIncomingProps) {
    this.analytics = MockEffect ? MockEffect(writeKey) : new Analytics(writeKey)
  }

  /**
   * Send a track event.
   */
  public track(payload: ITrackObject): void {
    try {
      const { analytics } = this
      if ((payload.userId || payload.anonymousId) && payload.event) {
        analytics.track(payload)
      } else {
        console.error(
          'AnalyticsService :: You must pass either an "anonymousId" or a "userId" and an "event" name.'
        )
      }
    } catch (error) {
      console.error('AnalyticsService :: Error occurred when sending track-event to Segment')
      console.error('---->>--AnalyticsService--error----')
      console.error(error)
      console.error('----<<--AnalyticsService--error----')
    }
  }

  /**
   * Send an identify event.
   */
  public identify(payload: IIdentifyObject): void {
    try {
      const { analytics } = this
      if (payload.userId || payload.anonymousId) {
        analytics.identify(payload)
      } else {
        console.error('AnalyticsService :: You must pass either an "anonymousId" or a "userId".')
      }
    } catch (error) {
      console.error('AnalyticsService :: Error occurred when sending identify-event to Segment')
      console.error('---->>--AnalyticsService--error----')
      console.error(error)
      console.error('----<<--AnalyticsService--error----')
    }
  }

  /**
   * Send a group event.
   */
  public group(payload: IGroupObject): void {
    try {
      const { analytics } = this
      if ((payload.userId || payload.anonymousId) && payload.groupId) {
        analytics.group(payload)
      } else {
        console.error(
          'AnalyticsService :: You must pass either an "anonymousId" or a "userId" and a "groupId".'
        )
      }
    } catch (error) {
      console.error('AnalyticsService :: Error occurred when sending group-event to Segment')
      console.error('---->>--AnalyticsService--error----')
      console.error(error)
      console.error('----<<--AnalyticsService--error----')
    }
  }
}
