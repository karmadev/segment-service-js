export interface ITrackObject {
  event: string
  userId?: string
  properties?: object
  timestamp?: string
  context?: object
  anonymousId?: string
}

export interface IIdentifyObject {
  userId?: string
  traits?: object
  timestamp?: string
  context?: object
  anonymousId?: string
}

export interface IGroupObject {
  userId?: string
  groupId?: string
  traits?: object
  timestamp?: string
  context?: object
  anonymousId?: string
}

export interface IIncomingProps {
  writeKey: string
  MockEffect?: any
}
