# graylog-api

Node.js module for Graylog2 API.

All methods of this module compatitible with Graylog API v1.1.4 (59783f6).
Search syntax look here: [The search query language](http://docs.graylog.org/en/latest/pages/queries.html).
For more detail you can look Graylog REST API browser: [localhost:12900/api-browser](http://localhost:12900/api-browser).

## Quick examples

```javascript
var graylog = require('graylog-api');
var api = graylog.connect({
  basicAuth: {
    username: 'admin',
    password: 'secret'
  }, // Optional. Default: null. Basic access authentication
  protocol: 'https', // Optional. Default: 'http'. Connection protocol
  host: 'example.com', // Optional. Default: 'localhost'. API hostname
  port: '12900' // Optional. Default: '12900'. API port
});

api.searchAbsolute({ // parameters
  query: 'source:apache',
  from: '2015-07-24T00:00:00.000Z',
  to: '2015-07-25T00:00:00.000Z',
  limit: '10',
  fields: 'message,timestamp',
  sort: 'asc'
}, function(err, data) { // callback
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

updateUserPassword({ // parameters
  old_password: 'secret',
  password: 'qwerty123'
}, { // path
  username: 'admin'
}, function (err, data) { // callback
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

api.getSystem(function(err, data) {  // only callback
  if (!err) {
    console.log(data);
  }
});
```

## Download

The source is available for download from
[GitHub](https://github.com/kolomiichenko/graylog-api).
Alternatively, you can install using Node Package Manager (`npm`):

```bash
  npm install async
```

## Documentation

API object expression has the same this syntax:

```javascript
api.[methodName]([parameters][, path][, callback]);
```

* `methodName` - The method name
* `parameters` - Object of method to be passed to the API server
* `path` - Optional object of method to be replace path variables
* `callback` - Optional function to be call it after receive api data. First argument is object of error (`null` if no errors), second - data

## Methods

### AlarmCallbacks: Manage stream alarm callbacks
* [`getAlarmCallbacks`](#getAlarmCallbacks)
* [`createAlarmCallback`](#createAlarmCallback)
* [`getAlarmCallbacksAvailable`](#getAlarmCallbacksAvailable)
* [`getAlarmCallback`](#getAlarmCallback)
* [`updateAlarmCallback`](#updateAlarmCallback)
* [`removeAlarmCallback`](#removeAlarmCallback)

### AlertConditions: Manage stream alert conditions
* [`createAlertCondition`](#createAlertCondition)
* [`getAlertConditions`](#getAlertConditions)
* [`updateAlertCondition`](#updateAlertCondition)
* [`removeAlertCondition`](#removeAlertCondition)

### AlertReceivers: Manage stream alert receivers
* [`getAlerts`](#getAlerts)
* [`getAlertsCheck`](#getAlertsCheck)
* [`createAlertReceiver`](#createAlertReceiver)
* [`removeAlertReceiver`](#removeAlertReceiver)
* [`testAlertSendDummy`](#testAlertSendDummy)

### Alerts: Manage stream alerts
* [`getAlerts`](#getAlerts)
* [`getAlertsCheck`](#getAlertsCheck)
* [`createAlertReceiver`](#createAlertReceiver)
* [`removeAlertReceiver`](#removeAlertReceiver)
* [`testAlertSendDummy`](#testAlertSendDummy)

### Counts: Message counts
* [`getCountTotal`](#getCountTotal)

### Dashboards: Manage dashboards
* [`createDashboard`](#createDashboard)
* [`getDashboards`](#getDashboards)
* [`getDashboard`](#getDashboard)
* [`updateDashboard`](#updateDashboard)
* [`removeDashboard`](#removeDashboard)
* [`updateDashboardPositions`](#updateDashboardPositions)
* [`createDashboardWidget`](#createDashboardWidget)
* [`updateDashboardWidget`](#updateDashboardWidget)
* [`removeDashboardWidget`](#removeDashboardWidget)
* [`updateDashboardWidgetCacheTime`](#updateDashboardWidgetCacheTime)
* [`updateDashboardWidgetDescription`](#updateDashboardWidgetDescription)
* [`getDashboardWidgetValue`](#getDashboardWidgetValue)

### Extractors: Extractors of an input
* [`createInputExtractor`](#createInputExtractor)
* [`getInputExtractors`](#getInputExtractors)
* [`updateInputExtractorOrder`](#updateInputExtractorOrder)
* [`updateInputExtractor`](#updateInputExtractor)
* [`removeInputExtractor`](#removeInputExtractor)
* [`getInputExtractor`](#getInputExtractor)

### Filters: Message blacklist filters
* [`createBlacklistFilter`](#createBlacklistFilter)
* [`getBlacklistFilters`](#getBlacklistFilters)
* [`getBlacklistFilter`](#getBlacklistFilter)
* [`updateBlacklistFilter`](#updateBlacklistFilter)
* [`removeBlacklistFilter`](#removeBlacklistFilter)

### Indexer/Cluster: Indexer cluster information
* [`getClusterHealth`](#getClusterHealth)
* [`getClusterName`](#getClusterName)

### Indexer/Failures: Indexer failures
* [`getSystemFailures`](#getSystemFailures)
* [`getFailuresCount`](#getFailuresCount)

### Indexer/Indices: Index information
* [`getIndicesClosed`](#getIndicesClosed)
* [`getIndicesReopened`](#getIndicesReopened)
* [`removeIndex`](#removeIndex)
* [`getIndices`](#getIndices)
* [`closeIndex`](#closeIndex)
* [`reopenIndex`](#reopenIndex)

### Messages: Single messages
* [`analyzeMessage`](#analyzeMessage)
* [`getMessage`](#getMessage)

### Search/Absolute: Message search
* [`searchAbsolute`](#searchAbsolute)
* [`searchAbsoluteFieldHistogram`](#searchAbsoluteFieldHistogram)
* [`searchAbsoluteHistogram`](#searchAbsoluteHistogram)
* [`searchAbsoluteStats`](#searchAbsoluteStats)
* [`searchAbsoluteTerms`](#searchAbsoluteTerms)
* [`searchAbsoluteTermsStats`](#searchAbsoluteTermsStats)

### Search/Keyword: Message search
* [`searchKeyword`](#searchKeyword)
* [`searchKeywordFieldHistogram`](#searchKeywordFieldHistogram)
* [`searchKeywordHistogram`](#searchKeywordHistogram)
* [`searchKeywordStats`](#searchKeywordStats)
* [`searchKeywordTerms`](#searchKeywordTerms)
* [`searchKeywordTermsStats`](#searchKeywordTermsStats)

### Search/Relative: Message search
* [`searchRelative`](#searchRelative)
* [`searchRelativeFieldHistogram`](#searchRelativeFieldHistogram)
* [`searchRelativeHistogram`](#searchRelativeHistogram)
* [`searchRelativeStats`](#searchRelativeStats)
* [`searchRelativeTerms`](#searchRelativeTerms)
* [`searchRelativeTermsStats`](#searchRelativeTermsStats)

### Search/Saved: Saved searches
* [`createSearchSaved`](#createSearchSaved)
* [`getSearchSavedAll`](#getSearchSavedAll)
* [`getSearchSaved`](#getSearchSaved)
* [`updateSearchSaved`](#updateSearchSaved)
* [`removeSearchSaved`](#removeSearchSaved)

### Sources: Listing message sources (e.g. hosts sending logs)
* [`getSources`](#getSources)

### StaticFields: Static fields of an input
* [`createInputStaticField`](#createInputStaticField)
* [`removeInputStaticField`](#removeInputStaticField)

### StreamOutputs: Manage stream outputs for a given stream
* [`createStreamOutput`](#createStreamOutput)
* [`getStreamOutputs`](#getStreamOutputs)
* [`getStreamOutput`](#getStreamOutput)
* [`removeStreamOutput`](#removeStreamOutput)

### StreamRules: Manage stream rules
* [`getStreamRules`](#getStreamRules)
* [`getStreamRule`](#getStreamRule)
* [`createStreamRule`](#createStreamRule)
* [`updateStreamRule`](#updateStreamRule)
* [`removeStreamRule`](#removeStreamRule)


### Streams: Manage streams
* [`getStreams`](#getStreams)
* [`createStream`](#createStream)
* [`getStreamsEnabled`](#getStreamsEnabled)
* [`getStreamThroughput`](#getStreamThroughput)
* [`getStreamAllThroughput`](#getStreamAllThroughput)
* [`getStream`](#getStream)
* [`updateStream`](#updateStream)
* [`removeStream`](#removeStream)
* [`cloneStream`](#cloneStream)
* [`pauseStream`](#pauseStream)
* [`resumeStream`](#resumeStream)
* [`testMatchStream`](#testMatchStream)

### System: System information of this node
* [`getSystem`](#getSystem)
* [`getJVM`](#getJVM)
* [`getThreadDump`](#getThreadDump)

### System/Buffers: Buffer information of this node.
* [`getBuffers`](#getBuffers)
* [`getBuffersClasses`](#getBuffersClasses)

### System/Bundles: Content packs
* [`createBundle`](#createBundle)
* [`getBundles`](#getBundles)
* [`exportBundles`](#exportBundles)
* [`getBundle`](#getBundle)
* [`updateBundle`](#updateBundle)
* [`removeBundle`](#removeBundle)
* [`applyBundle`](#applyBundle)

### System/Cluster: Node discovery
* [`getNodeThis`](#getNodeThis)
* [`getNodes`](#getNodes)
* [`getNode`](#getNode)

### System/ClusterStats: Cluster stats
* [`getClusterStats`](#getClusterStats)
* [`getClusterStatsElasticsearch`](#getClusterStatsElasticsearch)
* [`getClusterStatsMongo`](#getClusterStatsMongo)

### System/Collectors: Management of Graylog Collectors
* [`getSystemCollectors`](#getSystemCollectors)
* [`getSystemCollector`](#getSystemCollector)

### System/Collectors/Registration: Registration resource for Graylog Collector nodes
* [`changeCollector`](#changeCollector)

### System/Debug/Events: For debugging local and cluster events.
* [`createDebugEventsCluster`](#createDebugEventsCluster)
* [`getDebugEventsCluster`](#getDebugEventsCluster)
* [`createDebugEventsLocal`](#createDebugEventsLocal)
* [`getDebugEventsLocal`](#getDebugEventsLocal)

### System/Deflector: Index deflector management
* [`getDeflector`](#getDeflector)
* [`getDeflectorConfig`](#getDeflectorConfig)
* [`nextDeflectorCycle`](#nextDeflectorCycle)


### System/Fields: Get list of message fields that exist.
* [`getFields`](#getFields)

### System/Grok: Manage grok patterns
* [`getGroks`](#getGroks)
* [`getGrok`](#getGrok)
* [`createGrok`](#createGrok)
* [`createGroks`](#createGroks)
* [`updateGrok`](#updateGrok)
* [`removeGrok`](#removeGrok)

### System/IndexRanges: Index timeranges
* [`getIndicesRanges`](#getIndicesRanges)
* [`rebuildIndicesRanges`](#rebuildIndicesRanges)

### System/Inputs: Message inputs of this node
* [`createInput`](#createInput)
* [`getInput`](#getInput)
* [`getInputs`](#getInputs)
* [`updateInput`](#updateInput)
* [`removeInput`](#removeInput)
* [`launchInput`](#launchInput)
* [`restartInput`](#restartInput)
* [`stopInput`](#stopInput)

### System/Inputs/Types: Message input types of this node
* [`getInputsType`](#getInputsType)
* [`getInputsTypes`](#getInputsTypes)

### System/Jobs: System Jobs
* [`createJob`](#createJob)
* [`getJobs`](#getJobs)
* [`getJob`](#getJob)

### System/Journal: Message journal information of this node.
* [`getJournal`](#getJournal)

### System/LDAP: LDAP settings
* [`getLDAPSettings`](#getLDAPSettings)
* [`updateLDAPSettings`](#updateLDAPSettings)
* [`removeLDAPSettings`](#removeLDAPSettings)
* [`testLDAPSettings`](#testLDAPSettings)

### System/LoadBalancers: Status propagation for load balancers
* [`getLoadBalancerStatus`](#getLoadBalancerStatus)
* [`updateLoadBalancerStatusOverride`](#updateLoadBalancerStatusOverride)

### System/Loggers: Internal Graylog loggers
* [`getLoggers`](#getLoggers)
* [`getLoggersSubsystems`](#getLoggersSubsystems)
* [`setLoggersSubsystemsLevel`](#setLoggersSubsystemsLevel)
* [`setLoggersLevel`](#setLoggersLevel)

### System/Messages: Internal Graylog messages
* [`getSystemMessages`](#getSystemMessages)

### System/Metrics: Internal Graylog2 metrics
* [`getMetric`](#getMetric)
* [`getMetrics`](#getMetrics)
* [`getMetricsMultiple`](#getMetricsMultiple)
* [`getMetricsNames`](#getMetricsNames)
* [`getMetricsNamespace`](#getMetricsNamespace)

### System/Metrics/History: Get history of metrics
* [`getMetricsHistory`](#getMetricsHistory)

### System/Notifications: Notifications generated by the system
* [`getNotifications`](#getNotifications)
* [`removeNotification`](#removeNotification)

### System/Outputs: Manage outputs
* [`getOutput`](#getOutput)
* [`getOutputs`](#getOutputs)
* [`createOutput`](#createOutput)
* [`getOutputsAvailable`](#getOutputsAvailable)
* [`updateOutput`](#updateOutput)
* [`removeOutput`](#removeOutput)

### System/Permissions: Retrieval of system permissions
* [`getPermissions`](#getPermissions)
* [`getPermissionsReader`](#getPermissionsReader)

### System/Plugin: Plugin information
* [`getSystemPlugins`](#getSystemPlugins)

### System/Processing: System processing status control
* [`pauseSystemProcessing`](#pauseSystemProcessing)
* [`resumeSystemProcessing`](#resumeSystemProcessing)

### System/Radios: Management of graylog2-radio nodes
* [`getRadio`](#getRadio)
* [`getRadios`](#getRadios)
* [`createRadioInput`](#createRadioInput)
* [`getRadioInputs`](#getRadioInputs)
* [`removeRadioInput`](#removeRadioInput)
* [`pingRadio`](#pingRadio)

### System/ServiceManager: ServiceManager Status
* [`getServiceManager`](#getServiceManager)

### System/Sessions: Login for interactive user sessions
* [`createSession`](#createSession)
* [`removeSession`](#removeSession)

### System/Shutdown: Shutdown this node gracefully
* [`shutdownNode`](#shutdownNode)

### System/Stats: Node system stats
* [`getStats`](#getStats)
* [`getStatsFs`](#getStatsFs)
* [`getStatsJvm`](#getStatsJvm)
* [`getStatsNetwork`](#getStatsNetwork)
* [`getStatsOs`](#getStatsOs)
* [`getStatsProcess`](#getStatsProcess)

### System/Throughput: Message throughput of this node
* [`getThroughput`](#getThroughput)

### Users: User accounts
* [`getUser`](#getUser)
* [`getUsers`](#getUsers)
* [`createUser`](#createUser)
* [`updateUser`](#updateUser)
* [`removeUser`](#removeUser)
* [`updateUserPassword`](#updateUserPassword)
* [`updateUserPermissions`](#updateUserPermissions)
* [`removeUserPermissions`](#removeUserPermissions)
* [`updateUserPreferences`](#updateUserPreferences)
* [`getUserTokens`](#getUserTokens)
* [`createUserToken`](#createUserToken)
* [`removeUserToken`](#removeUserToken)

## AlarmCallbacks: Manage stream alarm callbacks

<a name="getAlarmCallbacks">
### getAlarmCallbacks(parameters[, path][, callback])

Get a list of all alarm callbacks for this stream

__Arguments__

```javascript
path.streamid {String} The id of the stream whose alarm callbacks we want
```

<a name="createAlarmCallback">
### createAlarmCallback(parameters[, path][, callback])

Create an alarm callback

__Arguments__

```javascript
path.streamid {String} The stream id this new alarm callback belongs to
parameters.[JSON body] {CreateAlarmCallbackRequest}  
```

<a name="getAlarmCallbacksAvailable">
### getAlarmCallbacksAvailable(parameters[, path][, callback])

Get a list of all alarm callback types

__Arguments__

```javascript
path.streamid {String} The id of the stream whose alarm callbacks we want
```

<a name="getAlarmCallback">
### getAlarmCallback(parameters[, path][, callback])

Get a single specified alarm callback for this stream

__Arguments__

```javascript
path.streamid {String} The id of the stream whose alarm callbacks we want
path.alarmCallbackId {String} The alarm callback id we are getting
```

<a name="updateAlarmCallback">
### updateAlarmCallback(parameters[, path][, callback])

Update an alarm callback

__Arguments__

```javascript
path.streamid {String} The stream id this alarm callback belongs to
path.alarmCallbackId {String}  
parameters.[JSON body] {Map}  
```

<a name="removeAlarmCallback">
### removeAlarmCallback(parameters[, path][, callback])

Delete an alarm callback

__Arguments__

```javascript
path.streamid {String} The stream id this alarm callback belongs to
path.alarmCallbackId {String}  
```

## AlertConditions: Manage stream alert conditions

<a name="createAlertCondition">
### createAlertCondition(parameters[, path][, callback])

Create an alert condition

__Arguments__

```javascript
path.streamId {String} The stream id this new alert condition belongs to
parameters.[JSON body] {CreateConditionRequest}  
```

<a name="getAlertConditions">
### getAlertConditions(parameters[, path][, callback])

Get all alert conditions of this stream

__Arguments__

```javascript
path.streamId {String} The stream id this new alert condition belongs to
```

<a name="updateAlertCondition">
### updateAlertCondition(parameters[, path][, callback])

Modify an alert condition

__Arguments__

```javascript
path.streamId {String} The stream id the alert condition belongs to
path.conditionId {String} The alert condition id
parameters.[JSON body] {CreateConditionRequest}  
```

<a name="removeAlertCondition">
### removeAlertCondition(parameters[, path][, callback])

Delete an alert condition

__Arguments__

```javascript
path.streamId {String} The stream id this new alert condition belongs to
path.conditionId {String} The stream id this new alert condition belongs to
```

## AlertReceivers: Manage stream alert receivers

<a name="getAlerts">
### getAlerts(parameters[, path][, callback])

Get the 300 most recent alarms of this stream

__Arguments__

```javascript
path.streamId {String} The stream id this new alert condition belongs to
parameters.since {Integer} Optional. Optional parameter to define a lower date boundary. (UNIX timestamp)
```

<a name="getAlertsCheck">
### getAlertsCheck(parameters[, path][, callback])

Check for triggered alert conditions of this streams. Results cached for 30 seconds

__Arguments__

```javascript
path.streamId {String} The ID of the stream to check
```

<a name="createAlertReceiver">
### createAlertReceiver(parameters[, path][, callback])

Add an alert receiver

__Arguments__

```javascript
path.streamId {String} The stream id this new alert condition belongs to
parameters.entity {String} Name/ID of user or email address to add as alert receiver
parameters.type {String} Type: users or emails
```

<a name="removeAlertReceiver">
### removeAlertReceiver(parameters[, path][, callback])

Remove an alert receiver

__Arguments__

```javascript
path.streamId {String} The stream id this new alert condition belongs to
parameters.entity {String} Name/ID of user or email address to remove from alert receivers
parameters.type {String} Type: users or emails
```

<a name="testAlertSendDummy">
### testAlertSendDummy(parameters[, path][, callback])

Send a test mail for a given stream

__Arguments__

```javascript
path.streamId {String} The stream id this new alert condition belongs to
```

## Alerts: Manage stream alerts

<a name="getAlerts">
### getAlerts(parameters[, path][, callback])

Get the 300 most recent alarms of this stream

__Arguments__

```javascript
path.streamId {String} The stream id this new alert condition belongs to
parameters.since {Integer} Optional. Optional parameter to define a lower date boundary. (UNIX timestamp)
```

<a name="getAlertsCheck">
### getAlertsCheck(parameters[, path][, callback])

Check for triggered alert conditions of this streams. Results cached for 30 seconds

__Arguments__

```javascript
path.streamId {String} The ID of the stream to check
```

<a name="createAlertReceiver">
### createAlertReceiver(parameters[, path][, callback])

Add an alert receiver

__Arguments__

```javascript
path.streamId {String} The stream id this new alert condition belongs to
parameters.entity {String} Name/ID of user or email address to add as alert receiver
parameters.type {String} Type: users or emails
```

<a name="removeAlertReceiver">
### removeAlertReceiver(parameters[, path][, callback])

Remove an alert receiver

__Arguments__

```javascript
path.streamId {String} The stream id this new alert condition belongs to
parameters.entity {String} Name/ID of user or email address to remove from alert receivers
parameters.type {String} Type: users or emails
```

<a name="testAlertSendDummy">
### testAlertSendDummy(parameters[, path][, callback])

Send a test mail for a given stream

__Arguments__

```javascript
path.streamId {String} The stream id this new alert condition belongs to
```

## Counts: Message counts

<a name="getCountTotal">
### getCountTotal([callback])

Total number of messages in all your indices

## Dashboards: Manage dashboards

<a name="createDashboard">
### createDashboard(parameters[, path][, callback])

Create a dashboard

__Arguments__

```javascript
parameters.[JSON body] {CreateDashboardRequest}  
```

<a name="getDashboards">
### getDashboards([callback])

Get a list of all dashboards and all configurations of their widgets

<a name="getDashboard">
### getDashboard(parameters[, path][, callback])

Get a single dashboards and all configurations of its widgets

__Arguments__

```javascript
path.dashboardId {String}  
```

<a name="updateDashboard">
### updateDashboard(parameters[, path][, callback])

Update the settings of a dashboard

__Arguments__

```javascript
path.dashboardId {String}  
parameters.[JSON body] {UpdateDashboardRequest}  
```

<a name="removeDashboard">
### removeDashboard(parameters[, path][, callback])

Delete a dashboard and all its widgets

__Arguments__

```javascript
path.dashboardId {String}  
```

<a name="updateDashboardPositions">
### updateDashboardPositions(parameters[, path][, callback])

Update/set the positions of dashboard widgets

__Arguments__

```javascript
path.dashboardId {String}  
parameters.[JSON body] {WidgetPositionsRequest}  
```

<a name="createDashboardWidget">
### createDashboardWidget(parameters[, path][, callback])

Add a widget to a dashboard

__Arguments__

```javascript
path.dashboardId {String}  
parameters.[JSON body] {AddWidgetRequest}  
```

<a name="updateDashboardWidget">
### updateDashboardWidget(parameters[, path][, callback])

Update a widget

__Arguments__

```javascript
path.dashboardId {String}  
path.widgetId {String}  
parameters.[JSON body] {AddWidgetRequest}  
```

<a name="removeDashboardWidget">
### removeDashboardWidget(parameters[, path][, callback])

Delete a widget

__Arguments__

```javascript
path.dashboardId {String}  
path.widgetId {String}  
```

<a name="updateDashboardWidgetCacheTime">
### updateDashboardWidgetCacheTime(parameters[, path][, callback])

Update cache time of a widget

__Arguments__

```javascript
path.dashboardId {String}  
path.widgetId {String}  
parameters.[JSON body] {UpdateWidgetRequest}  
```

<a name="updateDashboardWidgetDescription">
### updateDashboardWidgetDescription(parameters[, path][, callback])

Update description of a widget

__Arguments__

```javascript
path.dashboardId {String}  
path.widgetId {String}  
parameters.[JSON body] {UpdateWidgetRequest}  
```

<a name="getDashboardWidgetValue">
### getDashboardWidgetValue(parameters[, path][, callback])

Get a single widget value

__Arguments__

```javascript
path.dashboardId {String}  
path.widgetId {String}  
```

## Extractors: Extractors of an input

<a name="createInputExtractor">
### createInputExtractor(parameters[, path][, callback])

Add an extractor to an input

__Arguments__

```javascript
path.inputId {String}  
parameters.[JSON body] {CreateExtractorRequest}  
```

<a name="getInputExtractors">
### getInputExtractors(parameters[, path][, callback])

List all extractors of an input

__Arguments__

```javascript
path.inputId {String}  
```

<a name="updateInputExtractorOrder">
### updateInputExtractorOrder(parameters[, path][, callback])

Update extractor order of an input

__Arguments__

```javascript
path.inputId {String} Persist ID (!) of input
parameters.[JSON body] {OrderExtractorsRequest}  
```

<a name="updateInputExtractor">
### updateInputExtractor(parameters[, path][, callback])

Update an extractor

__Arguments__

```javascript
path.inputId {String}  
path.extractorId {String}  
parameters.[JSON body] {CreateExtractorRequest}  
```

<a name="removeInputExtractor">
### removeInputExtractor(parameters[, path][, callback])

Delete an extractor

__Arguments__

```javascript
path.inputId {String}  
path.extractorId {String}  
```

<a name="getInputExtractor">
### getInputExtractor(parameters[, path][, callback])

Get information of a single extractor of an input

__Arguments__

```javascript
path.inputId {String}  
path.extractorId {String}  
```

## Filters: Message blacklist filters

<a name="createBlacklistFilter">
### createBlacklistFilter(parameters[, path][, callback])

Create a blacklist filter

It can take up to a second until the change is applied

__Arguments__

```javascript
parameters.filterEntry {FilterDescription}  
```

<a name="getBlacklistFilters">
### getBlacklistFilters([callback])

Get all blacklist filters

<a name="getBlacklistFilter">
### getBlacklistFilter(parameters[, path][, callback])

Get the existing blacklist filter

__Arguments__

```javascript
path.filterId {String}  
```

<a name="updateBlacklistFilter">
### updateBlacklistFilter(parameters[, path][, callback])

Update an existing blacklist filter

It can take up to a second until the change is applied

__Arguments__

```javascript
path.filterId {String}  
parameters.filterEntry {FilterDescription}  
```

<a name="removeBlacklistFilter">
### removeBlacklistFilter(parameters[, path][, callback])

Remove the existing blacklist filter

It can take up to a second until the change is applied

__Arguments__

```javascript
path.filterId {String}  
```

## Indexer/Cluster: Indexer cluster information

<a name="getClusterHealth">
### getClusterHealth([callback])

Get cluster and shard health overview

<a name="getClusterName">
### getClusterName([callback])

Get the cluster name

## Indexer/Failures: Indexer failures

<a name="getSystemFailures">
### getSystemFailures(parameters[, path][, callback])

Get a list of failed index operations

__Arguments__

```javascript
parameters.limit {Integer} Limit
parameters.offset {Integer} Offset
```

<a name="getFailuresCount">
### getFailuresCount(parameters[, path][, callback])

Total count of failed index operations since the given date

__Arguments__

```javascript
parameters.since {String} ISO8601 date
```

## Indexer/Indices: Index information

<a name="getIndicesClosed">
### getIndicesClosed([callback])

Get a list of closed indices that can be reopened

<a name="getIndicesReopened">
### getIndicesReopened([callback])

Get a list of reopened indices, which will not be cleaned by retention cleaning

<a name="removeIndex">
### removeIndex(parameters[, path][, callback])

Delete an index. This will also trigger an index ranges rebuild job

__Arguments__

```javascript
path.index {String} Optional.  
```

<a name="getIndices">
### getIndices(parameters[, path][, callback])

Get information of an index and its shards

__Arguments__

```javascript
path.index {String} Optional.  
```

<a name="closeIndex">
### closeIndex(parameters[, path][, callback])

Close an index. This will also trigger an index ranges rebuild job

__Arguments__

```javascript
path.index {String} Optional.  
```

<a name="reopenIndex">
### reopenIndex(parameters[, path][, callback])

Reopen a closed index. This will also trigger an index ranges rebuild job

__Arguments__

```javascript
path.index {String} Optional.  
```

## Messages: Single messages

<a name="analyzeMessage">
### analyzeMessage(parameters[, path][, callback])

Analyze a message string

Returns what tokens/terms a message string (message or full_message) is split to

__Arguments__

```javascript
path.index {String} The index the message containing the string is stored in
parameters.string {String} The string to analyze
```

<a name="getMessage">
### getMessage(parameters[, path][, callback])

Get a single message

__Arguments__

```javascript
path.index {String} The index this message is stored in
path.messageId {String}  
```

## Search/Absolute: Message search

<a name="searchAbsolute">
### searchAbsolute(parameters[, path][, callback])

Message search with absolute timerange

Search for messages using an absolute timerange, specified as from/to with format yyyy-MM-ddTHH:mm:ss.SSSZ (e.g. 2014-01-23T15:34:49.000Z) or yyyy-MM-dd HH:mm:ss

__Arguments__

```javascript
parameters.query {String} Query (Lucene syntax)
parameters.from {String} Timerange start. See description for date format
parameters.to {String} Timerange end. See description for date format
parameters.limit {Integer} Optional. Maximum number of messages to return
parameters.offset {Integer} Optional. Offset
parameters.filter {String} Optional. Filter
parameters.fields {String} Comma separated list of fields to return
```

<a name="searchAbsoluteFieldHistogram">
### searchAbsoluteFieldHistogram(parameters[, path][, callback])

Field value histogram of a query using an absolute timerange

__Arguments__

```javascript
parameters.query {String} Query (Lucene syntax)
parameters.field {String} Field of whose values to get the histogram of
parameters.interval {String} Histogram interval / bucket size. (year, quarter, month, week, day, hour or minute)
parameters.from {String} Timerange start. See search method description for date format
parameters.to {String} Timerange end. See search method description for date format
parameters.filter {String} Optional. Filter
```

<a name="searchAbsoluteHistogram">
### searchAbsoluteHistogram(parameters[, path][, callback])

Datetime histogram of a query using an absolute timerange

__Arguments__

```javascript
parameters.query {String} Query (Lucene syntax)
parameters.interval {String} Histogram interval / bucket size. (year, quarter, month, week, day, hour or minute)
parameters.from {String} Timerange start. See search method description for date format
parameters.to {String} Timerange end. See search method description for date format
parameters.filter {String} Optional. Filter
```

<a name="searchAbsoluteStats">
### searchAbsoluteStats(parameters[, path][, callback])

Field statistics for a query using an absolute timerange

Returns statistics like min/max or standard deviation of numeric fields over the whole query result set

__Arguments__

```javascript
parameters.field {String} Message field of numeric type to return statistics for
parameters.query {String} Query (Lucene syntax)
parameters.from {String} Timerange start. See search method description for date format
parameters.to {String} Timerange end. See search method description for date format
parameters.filter {String} Optional. Filter
```

<a name="searchAbsoluteTerms">
### searchAbsoluteTerms(parameters[, path][, callback])

Most common field terms of a query using an absolute timerange

__Arguments__

```javascript
parameters.field {String} Message field of to return terms of
parameters.query {String} Query (Lucene syntax)
parameters.size {Integer} Optional. Maximum number of terms to return
parameters.from {String} Timerange start. See search method description for date format
parameters.to {String} Timerange end. See search method description for date format
parameters.filter {String} Optional. Filter
```

<a name="searchAbsoluteTermsStats">
### searchAbsoluteTermsStats(parameters[, path][, callback])

Ordered field terms of a query computed on another field using an absolute timerange

__Arguments__

```javascript
parameters.key_field {String} Message field of to return terms of
parameters.value_field {String} Value field used for computation
parameters.order {String} What to order on (Allowed values: TERM, REVERSE_TERM, COUNT, REVERSE_COUNT, TOTAL, REVERSE_TOTAL, MIN, REVERSE_MIN, MAX, REVERSE_MAX, MEAN, REVERSE_MEAN)
parameters.query {String} Query (Lucene syntax)
parameters.size {Integer} Optional. Maximum number of terms to return
parameters.from {String} Timerange start. See search method description for date format
parameters.to {String} Timerange end. See search method description for date format
parameters.filter {String} Optional. Filter
```

## Search/Keyword: Message search

<a name="searchKeyword">
### searchKeyword(parameters[, path][, callback])

Message search with keyword as timerange

Search for messages in a timerange defined by a keyword like "yesterday" or "2 weeks ago to wednesday"

__Arguments__

```javascript
parameters.query {String} Query (Lucene syntax)
parameters.keyword {String} Range keyword
parameters.limit {Integer} Optional. Maximum number of messages to return
parameters.offset {Integer} Optional. Offset
parameters.filter {String} Optional. Filter
parameters.fields {String} Optional. Comma separated list of fields to return
parameters.sort {String} Optional. Sorting (field:asc / field:desc)
```

<a name="searchKeywordFieldHistogram">
### searchKeywordFieldHistogram(parameters[, path][, callback])

Datetime histogram of a query using keyword timerange

__Arguments__

```javascript
parameters.query {String} Query (Lucene syntax)
parameters.field {String} Field of whose values to get the histogram of
parameters.interval {String} Histogram interval / bucket size. (year, quarter, month, week, day, hour or minute)
parameters.keyword {String} Range keyword
parameters.filter {String} Optional. Filter
```

<a name="searchKeywordHistogram">
### searchKeywordHistogram(parameters[, path][, callback])

Datetime histogram of a query using keyword timerange

__Arguments__

```javascript
parameters.query {String} Query (Lucene syntax)
parameters.interval {String} Histogram interval / bucket size. (year, quarter, month, week, day, hour or minute)
parameters.keyword {String} Range keyword
parameters.filter {String} Optional. Filter
```

<a name="searchKeywordStats">
### searchKeywordStats(parameters[, path][, callback])

Field statistics for a query using a keyword timerange

Returns statistics like min/max or standard deviation of numeric fields over the whole query result set

__Arguments__

```javascript
parameters.field {String} Message field of numeric type to return statistics for
parameters.query {String} Query (Lucene syntax)
parameters.keyword {String} Range keyword
parameters.filter {String} Optional. Filter
```

<a name="searchKeywordTerms">
### searchKeywordTerms(parameters[, path][, callback])

Most common field terms of a query using a keyword timerange

__Arguments__

```javascript
parameters.field {String} Message field of to return terms of
parameters.query {String} Query (Lucene syntax)
parameters.size {Integer} Optional. Maximum number of terms to return
parameters.keyword {String} Range keyword
parameters.filter {String} Optional. Filter
```

<a name="searchKeywordTermsStats">
### searchKeywordTermsStats(parameters[, path][, callback])

Ordered field terms of a query computed on another field using a keyword timerange

__Arguments__

```javascript
parameters.key_field {String} Message field of to return terms of
parameters.value_field {String} Value field used for computation
parameters.order {String} What to order on (Allowed values: TERM, REVERSE_TERM, COUNT, REVERSE_COUNT, TOTAL, REVERSE_TOTAL, MIN, REVERSE_MIN, MAX, REVERSE_MAX, MEAN, REVERSE_MEAN)
parameters.query {String} Query (Lucene syntax)
parameters.size {Integer} Optional. Maximum number of terms to return
parameters.keyword {String} Keyword timeframe
parameters.filter {String} Optional. Filter
```

## Search/Relative: Message search

<a name="searchRelative">
### searchRelative(parameters[, path][, callback])

Message search with relative timerange

Search for messages in a relative timerange, specified as seconds from now. Example: 300 means search from 5 minutes ago to now

__Arguments__

```javascript
parameters.query {String} Query (Lucene syntax)
parameters.range {Integer} Relative timeframe to search in. See method description
parameters.limit {Integer} Optional. Maximum number of messages to return
parameters.offset {Integer} Optional. Offset
parameters.filter {String} Optional. Filter
parameters.fields {String} Comma separated list of fields to return
```

<a name="searchRelativeFieldHistogram">
### searchRelativeFieldHistogram(parameters[, path][, callback])

Field value histogram of a query using a relative timerange

__Arguments__

```javascript
parameters.query {String} Query (Lucene syntax)
parameters.field {String} Field of whose values to get the histogram of
parameters.interval {String} Histogram interval / bucket size. (year, quarter, month, week, day, hour or minute)
parameters.range {Integer} Relative timeframe to search in. See search method description
parameters.filter {String} Optional. Filter
```

<a name="searchRelativeHistogram">
### searchRelativeHistogram(parameters[, path][, callback])

Datetime histogram of a query using a relative timerange

__Arguments__

```javascript
parameters.query {String} Query (Lucene syntax)
parameters.interval {String} Histogram interval / bucket size. (year, quarter, month, week, day, hour or minute)
parameters.range {Integer} Relative timeframe to search in. See search method description
parameters.filter {String} Optional. Filter
```

<a name="searchRelativeStats">
### searchRelativeStats(parameters[, path][, callback])

Field statistics for a query using a relative timerange

Returns statistics like min/max or standard deviation of numeric fields over the whole query result set

__Arguments__

```javascript
parameters.field {String} Message field of numeric type to return statistics for
parameters.query {String} Query (Lucene syntax)
parameters.range {Integer} Relative timeframe to search in. See search method description
parameters.filter {String} Optional. Filter
```

<a name="searchRelativeTerms">
### searchRelativeTerms(parameters[, path][, callback])

Most common field terms of a query using a relative timerange

__Arguments__

```javascript
parameters.field {String} Message field of to return terms of
parameters.query {String} Query (Lucene syntax)
parameters.size {Integer} Optional. Maximum number of terms to return
parameters.range {Integer} Relative timeframe to search in. See search method description
parameters.filter {String} Optional. Filter
```

<a name="searchRelativeTermsStats">
### searchRelativeTermsStats(parameters[, path][, callback])

Ordered field terms of a query computed on another field using a relative timerange

__Arguments__

```javascript
parameters.key_field {String} Message field of to return terms of
parameters.value_field {String} Value field used for computation
parameters.order {String} What to order on (Allowed values: TERM, REVERSE_TERM, COUNT, REVERSE_COUNT, TOTAL, REVERSE_TOTAL, MIN, REVERSE_MIN, MAX, REVERSE_MAX, MEAN, REVERSE_MEAN)
parameters.query {String} Query (Lucene syntax)
parameters.size {Integer} Optional. Maximum number of terms to return
parameters.range {Integer} Relative timeframe to search in. See search method description
parameters.filter {String} Optional. Filter
```

## Search/Saved: Saved searches

<a name="createSearchSaved">
### createSearchSaved(parameters[, path][, callback])

Create a new saved search

__Arguments__

```javascript
parameters.[JSON body] {CreateSavedSearchRequest}  
```

<a name="getSearchSavedAll">
### getSearchSavedAll([callback])

Get a list of all saved searches

<a name="getSearchSaved">
### getSearchSaved(parameters[, path][, callback])

Get a single saved search

__Arguments__

```javascript
path.searchId {String}  
```

<a name="updateSearchSaved">
### updateSearchSaved(parameters[, path][, callback])

Update a saved search

__Arguments__

```javascript
path.searchId {String}  
parameters.[JSON body] {CreateSavedSearchRequest}  
```

<a name="removeSearchSaved">
### removeSearchSaved(parameters[, path][, callback])

Delete a saved search

__Arguments__

```javascript
path.searchId {String}  
```

## Sources: Listing message sources (e.g. hosts sending logs)

<a name="getSources">
### getSources(parameters[, path][, callback])

Get a list of all sources (not more than 5000) that have messages in the current indices. The result is cached for 10 seconds

Range: The parameter is in seconds relative to the current time. 86400 means "in the last day", 0 is special and means "across all indices"

__Arguments__

```javascript
parameters.range {Integer} Relative timeframe to search in. See method description
```

## StaticFields: Static fields of an input

<a name="createInputStaticField">
### createInputStaticField(parameters[, path][, callback])

Add a static field to an input

__Arguments__

```javascript
path.inputId {String}  
parameters.[JSON body] {CreateStaticFieldRequest}  
```

<a name="removeInputStaticField">
### removeInputStaticField(parameters[, path][, callback])

Remove static field of an input

__Arguments__

```javascript
path.Key {String}  
path.inputId {String}  
```

## StreamOutputs: Manage stream outputs for a given stream

<a name="createStreamOutput">
### createStreamOutput(parameters[, path][, callback])

Associate outputs with a stream

__Arguments__

```javascript
path.streamid {String} The id of the stream whose outputs we want
parameters.[JSON body] {AddOutputRequest}  
```

<a name="getStreamOutputs">
### getStreamOutputs(parameters[, path][, callback])

Associate outputs with a stream

__Arguments__

```javascript
path.streamid {String} The id of the stream whose outputs we want
```

<a name="getStreamOutput">
### getStreamOutput(parameters[, path][, callback])

Get specific output of a stream

__Arguments__

```javascript
path.streamid {String} The id of the stream whose outputs we want
```

<a name="removeStreamOutput">
### removeStreamOutput(parameters[, path][, callback])

Delete output of a stream

__Arguments__

```javascript
path.streamid {String} The id of the stream whose outputs we want
path.outputId {String} The id of the output that should be deleted
```

## StreamRules: Manage stream rules

<a name="getStreamRules">
### getStreamRules(parameters[, path][, callback])

Get a list of all stream rules

__Arguments__

```javascript
path.streamid {String} The id of the stream whose stream rule we want
```

<a name="getStreamRule">
### getStreamRule(parameters[, path][, callback])

Get a single stream rules

__Arguments__

```javascript
path.streamid {String} The id of the stream whose stream rule we want
path.streamRuleId {String} The stream rule id we are getting
```

<a name="createStreamRule">
### createStreamRule(parameters[, path][, callback])

Create a stream rule

__Arguments__

```javascript
path.streamid {String} The stream id this new rule belongs to
parameters.[JSON body] {CreateStreamRuleRequest}  
```

<a name="updateStreamRule">
### updateStreamRule(parameters[, path][, callback])

Update a stream rule

__Arguments__

```javascript
path.streamid {String} The stream id this rule belongs to
path.streamRuleId {String} The stream rule id we are updating
parameters.[JSON body] {CreateStreamRuleRequest}  
```

<a name="removeStreamRule">
### removeStreamRule(parameters[, path][, callback])

Delete a stream rule

__Arguments__

```javascript
path.streamid {String} The stream id this new rule belongs to
path.streamRuleId {String}  
```

## Streams: Manage streams

<a name="getStreams">
### getStreams([callback])

Get a list of all streams

<a name="createStream">
### createStream(parameters[, path][, callback])

Create a stream

__Arguments__

```javascript
parameters.[JSON body] {CreateStreamRequest}  
```

<a name="getStreamsEnabled">
### getStreamsEnabled([callback])

Get a list of all enabled streams

<a name="getStreamThroughput">
### getStreamThroughput(parameters[, path][, callback])

Current throughput of this stream on this node in messages per second

__Arguments__

```javascript
path.streamId {String}  
```

<a name="getStreamAllThroughput">
### getStreamAllThroughput([callback])

Current throughput of all visible streams on this node in messages per second

<a name="getStream">
### getStream(parameters[, path][, callback])

Get a single stream

__Arguments__

```javascript
path.streamId {String}  
```

<a name="updateStream">
### updateStream(parameters[, path][, callback])

Update a stream

__Arguments__

```javascript
path.streamId {String}  
parameters.[JSON body] {UpdateStreamRequest}  
```

<a name="removeStream">
### removeStream(parameters[, path][, callback])

Delete a stream

__Arguments__

```javascript
path.streamId {String}  
```

<a name="cloneStream">
### cloneStream(parameters[, path][, callback])

Clone a stream

__Arguments__

```javascript
path.streamId {String}  
parameters.[JSON body] {CloneStreamRequest}  
```

<a name="pauseStream">
### pauseStream(parameters[, path][, callback])

Pause a stream

__Arguments__

```javascript
path.streamId {String}  
```

<a name="resumeStream">
### resumeStream(parameters[, path][, callback])

Resume a stream

__Arguments__

```javascript
path.streamId {String}  
```

<a name="testMatchStream">
### testMatchStream(parameters[, path][, callback])

Test matching of a stream against a supplied message

__Arguments__

```javascript
path.streamId {String}  
parameters.[JSON body] {Map}  
```

## System: System information of this node

<a name="getSystem">
### getSystem([callback])

Get system overview

<a name="getJVM">
### getJVM([callback])

Get JVM information

<a name="getThreadDump">
### getThreadDump([callback])

Get a thread dump

## System/Buffers: Buffer information of this node.

<a name="getBuffers">
### getBuffers([callback])

Get current utilization of buffers and caches of this node

<a name="getBuffersClasses">
### getBuffersClasses([callback])

Get classnames of current buffer implementations

## System/Bundles: Content packs

<a name="createBundle">
### createBundle(parameters[, path][, callback])

Upload a content pack

__Arguments__

```javascript
parameters.Request body {ConfigurationBundle} Content pack
```

<a name="getBundles">
### getBundles([callback])

List available content packs

<a name="exportBundles">
### exportBundles(parameters[, path][, callback])

Export entities as a content pack

__Arguments__

```javascript
parameters.exportBundle {ExportBundle} Export content pack
```

<a name="getBundle">
### getBundle(parameters[, path][, callback])

Show content pack

__Arguments__

```javascript
path.bundleId {String} Content pack ID
```

<a name="updateBundle">
### updateBundle(parameters[, path][, callback])

Update content pack

__Arguments__

```javascript
path.bundleId {String} Content pack ID
parameters.Request body {ConfigurationBundle} Content pack
```

<a name="removeBundle">
### removeBundle(parameters[, path][, callback])

Delete content pack

__Arguments__

```javascript
path.bundleId {String} Content pack ID
```

<a name="applyBundle">
### applyBundle(parameters[, path][, callback])

Set up entities described by content pack

__Arguments__

```javascript
path.bundleId {String} Content pack ID
```

## System/Cluster: Node discovery

<a name="getNodeThis">
### getNodeThis(parameters[, path][, callback])

Information about this node

This  de itself to get system information

<a name="getNodes">
### getNodes(parameters[, path][, callback])

List all active nodes in this cluster

__Arguments__

```javascript
path.nodeId {String}  
```

<a name="getNode">
### getNode(parameters[, path][, callback])

Information about a node

This is returning information of a node in context to its state in the cluster. Use the system API of the node itself to get system information

__Arguments__

```javascript
path.nodeId {String}  
```

## System/ClusterStats: Cluster stats

<a name="getClusterStats">
### getClusterStats(parameters[, path][, callback])

Cluster snformation

This resource returns information about the Graylog cluster

<a name="getClusterStatsElasticsearch">
### getClusterStatsElasticsearch(parameters[, path][, callback])

Elasticsearciormation

This resource returns information about the Elasticsearch Cluster

<a name="getClusterStatsMongo">
### getClusterStatsMongo(parameters[, path][, callback])

MongoDB information

This aut MongoDB


## System/Collectors: Management of Graylog Collectors

<a name="getSystemCollectors">
### getSystemCollectors([callback])

Lists all existing collector registrations

<a name="getSystemCollector">
### getSystemCollector(parameters[, path][, callback])

Returns at most one collector summary for the specified collector id

__Arguments__

```javascript
path.collectorId {String}  
```

## System/Collectors/Registration: Registration resource for Graylog Collector nodes

<a name="changeCollector">
### changeCollector(parameters[, path][, callback])

Create/update an collector registration

This is a stateless method which upserts a collector registration

__Arguments__

```javascript
path.collectorId {String} The collector id this collector is registering as
parameters.[JSON body] {CollectorRegistrationRequest}  
```

## System/Debug/Events: For debugging local and cluster events.

<a name="createDebugEventsCluster">
### createDebugEventsCluster(parameters[, path][, callback])

Create and send a cluster debug event

__Arguments__

```javascript
parameters.text {String} Optional.  
```

<a name="getDebugEventsCluster">
### getDebugEventsCluster([callback])

Show last received cluster debug event

<a name="createDebugEventsLocal">
### createDebugEventsLocal(parameters[, path][, callback])

Create and send a local debug event

__Arguments__

```javascript
parameters.text {String} Optional.  
```

<a name="getDebugEventsLocal">
### getDebugEventsLocal([callback])

Show last received local debug event

## System/Deflector: Index deflector management

<a name="getDeflector">
### getDeflector([callback])

Get current deflector status

<a name="getDeflectorConfig">
### getDeflectorConfig([callback])

Get deflector configuration. Only available on master nodes

<a name="nextDeflectorCycle">
### nextDeflectorCycle([callback])

Cycle deflector to new/next index

## System/Fields: Get list of message fields that exist.

<a name="getFields">
### getFields(parameters[, path][, callback])

Get list of message fields that exist

This operation is comparably fast because it reads directly from the indexer mapping

__Arguments__

```javascript
parameters.limit {Integer} Optional. Maximum number of fields to return. Set to 0 for all fields
```

## System/Grok: Manage grok patterns

<a name="getGroks">
### getGroks([callback])

Get all existing grok patterns

<a name="getGrok">
### getGrok(parameters[, path][, callback])

Get the existing grok pattern

__Arguments__

```javascript
path.patternId {String}  
```

<a name="createGrok">
### createGrok(parameters[, path][, callback])

Add a new named pattern

__Arguments__

```javascript
parameters.pattern {GrokPatternSummary}  
```

<a name="createGroks">
### createGroks(parameters[, path][, callback])

Update an existing pattern

__Arguments__

```javascript
parameters.patterns {Array}  
```

<a name="updateGrok">
### updateGrok(parameters[, path][, callback])

Update an existing pattern

__Arguments__

```javascript
path.patternId {String}  
parameters.pattern {GrokPatternSummary}  
```

<a name="removeGrok">
### removeGrok([callback])

Remove an existing pattern by id

## System/IndexRanges: Index timeranges

<a name="getIndicesRanges">
### getIndicesRanges([callback])

Get a list of all index ranges

<a name="rebuildIndicesRanges">
### rebuildIndicesRanges(parameters[, path][, callback])

Rebuild/sync index range information

This as in what timeranges. It atomically overwrites already existing meta information

## System/Inputs: Message inputs of this node

<a name="createInput">
### createInput(parameters[, path][, callback])

Launch input on this node

__Arguments__

```javascript
parameters.[JSON body] {InputLaunchRequest}  
```

<a name="getInput">
### getInput(null, path[, callback])

Get information of a single input on this node

__Arguments__

```javascript
path.inputId {String}  
```

<a name="getInputs">
### getInputs([callback])

Get all inputs of this node

<a name="updateInput">
### updateInput(parameters[, path][, callback])

Update input on this node

__Arguments__

```javascript
parameters.[JSON body] {InputLaunchRequest}  
path.inputId {String}  
```

<a name="removeInput">
### removeInput(parameters[, path][, callback])

Terminate input on this node

__Arguments__

```javascript
path.inputId {String}  
```

<a name="launchInput">
### launchInput(parameters[, path][, callback])

Launch existing input on this node

__Arguments__

```javascript
path.inputId {String}  
```

<a name="restartInput">
### restartInput(parameters[, path][, callback])

Restart existing input on this node

__Arguments__

```javascript
path.inputId {String}  
```

<a name="stopInput">
### stopInput(parameters[, path][, callback])

Stop existing input on this node

__Arguments__

```javascript
path.inputId {String}  
```

## System/Inputs/Types: Message input types of this node

<a name="getInputsType">
### getInputsType(parameters[, path][, callback])

Get information about a single input type

__Arguments__

```javascript
path.inputType {String}  
```

<a name="getInputsTypes">
### getInputsTypes([callback])

Get all available input types of this node

## System/Jobs: System Jobs

<a name="createJob">
### createJob(parameters[, path][, callback])

Trigger new job

__Arguments__

```javascript
parameters.[JSON body] {TriggerRequest}  
```

<a name="getJobs">
### getJobs([callback])

List currently running jobs

<a name="getJob">
### getJob(parameters[, path][, callback])

Get information of a specific currently running job

__Arguments__

```javascript
path.jobId {String}  
```

## System/Journal: Message journal information of this node.

<a name="getJournal">
### getJournal([callback])

Get current state of the journal on this node

## System/LDAP: LDAP settings

<a name="getLDAPSettings">
### getLDAPSettings([callback])

Get the LDAP configuration if it is configured

<a name="updateLDAPSettings">
### updateLDAPSettings(parameters[, path][, callback])

Update the LDAP configuration

__Arguments__

```javascript
parameters.[JSON body] {LdapSettingsRequest}  
```

<a name="removeLDAPSettings">
### removeLDAPSettings([callback])

Remove the LDAP configuration

<a name="testLDAPSettings">
### testLDAPSettings(parameters[, path][, callback])

Test LDAP Configuration

__Arguments__

```javascript
parameters.Configuration to test {LdapTestConfigRequest}  
```

## System/LoadBalancers: Status propagation for load balancers

<a name="getLoadBalancerStatus">
### getLoadBalancerStatus([callback])

Get status of this graylog2-server node for load balancers. Returns either ALIVE with HTTP 200 or DEAD with HTTP 503

<a name="updateLoadBalancerStatusOverride">
### updateLoadBalancerStatusOverride(parameters[, path][, callback])

Override load balancer status of this graylog2-server node. Next lifecycle change will override it again to its default. Set to ALIVE or DEAD

__Arguments__

```javascript
path.status {String} Optional.  
```

## System/Loggers: Internal Graylog loggers

<a name="getLoggers">
### getLoggers([callback])

List all loggers and their current levels

<a name="getLoggersSubsystems">
### getLoggersSubsystems([callback])

List all logger subsystems and their current levels

<a name="setLoggersSubsystemsLevel">
### setLoggersSubsystemsLevel(parameters[, path][, callback])

Set the loglevel of a whole subsystem

Provided level is falling back to DEBUG if it does not exist

__Arguments__

```javascript
path.subsystem {String}  
path.level {String}  
```

<a name="setLoggersLevel">
### setLoggersLevel(parameters[, path][, callback])

Set the loglevel of a single logger

Provided level is falling back to DEBUG if it does not exist

__Arguments__

```javascript
path.loggerName {String}  
path.level {String}  
```
## System/Messages: Internal Graylog messages

<a name="getSystemMessages">
### getSystemMessages(parameters[, path][, callback])

Get internal Graylog system messages

__Arguments__

```javascript
parameters.page {Integer} Optional. Page
```

## System/Metrics: Internal Graylog2 metrics

<a name="getMetric">
### getMetric(parameters[, path][, callback])

Get a single metric

__Arguments__

```javascript
path.metricName {String}  
```

<a name="getMetrics">
### getMetrics([callback])

Get all metrics

<a name="getMetricsMultiple">
### getMetricsMultiple(parameters[, path][, callback])

Get the values of multiple metrics at once

__Arguments__

```javascript
parameters.Requested metrics {MetricsReadRequest}  
```

<a name="getMetricsNames">
### getMetricsNames([callback])

Get all metrics keys/names

<a name="getMetricsNamespace">
### getMetricsNamespace(parameters[, path][, callback])

Get all metrics of a namespace

__Arguments__

```javascript
path.namespace {String}  
```

## System/Metrics/History: Get history of metrics

<a name="getMetricsHistory">
### getMetricsHistory(parameters[, path][, callback])

Get history of a single metric
The maximum retention time is currently only 5 minutes

__Arguments__

```javascript
path.metricName {String}  
parameters.after {Long} Optional. Only values for after this UTC timestamp (1970 epoch)
```

## System/Notifications: Notifications generated by the system

<a name="getNotifications">
### getNotifications([callback])

Get all active notifications

<a name="removeNotification">
### removeNotification(parameters[, path][, callback])

Delete a notification

__Arguments__

```javascript
path.notificationType {String} Optional.  
```

## System/Outputs: Manage outputs

<a name="getOutput">
### getOutput(parameters[, path][, callback])

Get specific output

__Arguments__

```javascript
path.outputId {String} The id of the output we want
```

<a name="getOutputs">
### getOutputs([callback])

Get a list of all outputs

<a name="createOutput">
### createOutput(parameters[, path][, callback])

Create an output

__Arguments__

```javascript
parameters.[JSON body] {CreateOutputRequest}  
```

<a name="getOutputsAvailable">
### getOutputsAvailable([callback])

Get all available output modules

<a name="updateOutput">
### updateOutput(parameters[, path][, callback])

Update output

__Arguments__

```javascript
path.outputId {String} The id of the output that should be deleted
parameters.[JSON body] {Map}  
```

<a name="removeOutput">
### removeOutput(parameters[, path][, callback])

Delete output

__Arguments__

```javascript
path.outputId {String} The id of the output that should be deleted
```

## System/Permissions: Retrieval of system permissions

<a name="getPermissions">
### getPermissions([callback])

Get all available user permissions

<a name="getPermissionsReader">
### getPermissionsReader(parameters[, path][, callback])

Get the initial permissions assigned to a reader account

__Arguments__

```javascript
path.username {String}  
```

## System/Plugin: Plugin information

<a name="getSystemPlugins">
### getSystemPlugins([callback])

List all installed plugins on this node

## System/Processing: System processing status control

<a name="pauseSystemProcessing">
### pauseSystemProcessing([callback])

Pauses message processing

<a name="resumeSystemProcessing">
### resumeSystemProcessing([callback])

Resume message processing

## System/Radios: Management of graylog2-radio nodes

<a name="getRadio">
### getRadio(parameters[, path][, callback])

Information about a radio

This is returning information of a radio in context to its state in the cluster. Use the system API of the node itself to get system information

__Arguments__

```javascript
path.radioId {String}  
```

<a name="getRadios">
### getRadios([callback])

List all active radios in this cluster

<a name="createRadioInput">
### createRadioInput(parameters[, path][, callback])

Register input of a radio

Radio inputs register their own inputs here for persistence after they successfully launched it

__Arguments__

```javascript
path.radioId {String}  
parameters.[JSON body] {RegisterInputRequest}  
```

<a name="getRadioInputs">
### getRadioInputs(parameters[, path][, callback])

Persisted inputs of a radio

This is returning the configured persisted inputs of a radio node. This is *not* returning the actually running inputs on a radio node. Radio nodes use this resource to get their configured inputs on startup

__Arguments__

```javascript
path.radioId {String}  
```

<a name="removeRadioInput">
### removeRadioInput(parameters[, path][, callback])

Unregister input of a radio

Radios unregister their inputs when they are stopped/terminated on the radio

__Arguments__

```javascript
path.radioId {String}  
path.inputId {String}  
```

<a name="pingRadio">
### pingRadio(parameters[, path][, callback])

Ping - Accepts pings of graylog2-radio nodes

Every graylog2-radio node is regularly pinging to announce that it is active

__Arguments__

```javascript
path.radioId {String}  
parameters.[JSON body] {PingRequest}  
```

## System/ServiceManager: ServiceManager Status

<a name="getServiceManager">
### getServiceManager([callback])

List current status of ServiceManager

## System/Sessions: Login for interactive user sessions

<a name="createSession">
### createSession(parameters[, path][, callback])

This request creates a new session for a user or reactivates an existing session: the equivalent of logging in

__Arguments__

```javascript
parameters.Login request {SessionCreateRequest} Username and credentials
```

<a name="removeSession">
### removeSession(parameters[, path][, callback])

Terminate an existing session

Destroys the session with the given ID: the equivalent of logging out

__Arguments__

```javascript
path.sessionId {String}  
```

## System/Shutdown: Shutdown this node gracefully

<a name="shutdownNode">
### shutdownNode(parameters[, path][, callback])

Shutdown this node gracefully

Attempts  at no new messages are accepted

## System/Stats: Node system stats

<a name="getStats">
### getStats(parameters[, path][, callback])

System o this node

This resource returns information about the system this node is running on

<a name="getStatsFs">
### getStatsFs(parameters[, path][, callback])

Filesystem o this node

This resource returns information about the filesystems of this node

<a name="getStatsJvm">
### getStatsJvm(parameters[, path][, callback])

JVM information o this node

This resource returns information about the Java Virtual Machine of this node

<a name="getStatsNetwork">
### getStatsNetwork(parameters[, path][, callback])

Networking o this node

This resource returns information about the networking system this node is running with

<a name="getStatsOs">
### getStatsOs(parameters[, path][, callback])

OS information o this node

This resource returns information about the operating system this node is running on


<a name="getStatsProcess">
### getStatsProcess(parameters[, path][, callback])

Process information about this node

This irunning as


## System/Throughput: Message throughput of this node

<a name="getThroughput">
### getThroughput([callback])

Current throughput of this node in messages per second

## Users: User accounts

<a name="getUser">
### getUser(parameters[, path][, callback])

Get user details

The user's permissions are only included if a user asks for his own account or for users with the necessary permissions to edit permissions

__Arguments__

```javascript
path.username {String} The username to return information for
```

<a name="getUsers">
### getUsers(parameters[, path][, callback])

Lurs

The permissions assigned to the users are always included

<a name="createUser">
### createUser(parameters[, path][, callback])

Create a new user account

__Arguments__

```javascript
parameters.[JSON body] {CreateUserRequest} Must contain username, full_name, email, password and a list of permissionsteUserRequest'
```

<a name="updateUser">
### updateUser(parameters[, path][, callback])

Modify user details

__Arguments__

```javascript
path.username {String} The name of the user to modify
parameters.[JSON body] {ChangeUserRequest} Updated user information
```

<a name="removeUser">
### removeUser(parameters[, path][, callback])

Removes a user account

__Arguments__

```javascript
path.username {String} The name of the user to delete
```

<a name="updateUserPassword">
### updateUserPassword(parameters[, path][, callback])

Update the password for a user

__Arguments__

```javascript
path.username {String} The name of the user whose password to change
parameters.[JSON body] {ChangePasswordRequest} The old and new passwords
```

<a name="updateUserPermissions">
### updateUserPermissions(parameters[, path][, callback])

Update a user's permission set

__Arguments__

```javascript
path.username {String} The name of the user to modify
parameters.[JSON body] {PermissionEditRequest} The list of permissions to assign to the user
```

<a name="removeUserPermissions">
### removeUserPermissions(parameters[, path][, callback])

Revoke all permissions for a user without deleting the account

__Arguments__

```javascript
path.username {String} The name of the user to modify
```

<a name="updateUserPreferences">
### updateUserPreferences(parameters[, path][, callback])

Update a user's preferences set

__Arguments__

```javascript
path.username {String} The name of the user to modify
parameters.[JSON body] {UpdateUserPreferences} The map of preferences to assign to the user
```

<a name="getUserTokens">
### getUserTokens(parameters[, path][, callback])

Retrieves the list of access tokens for a user

__Arguments__

```javascript
path.username {String}  
```

<a name="createUserToken">
### createUserToken(parameters[, path][, callback])

Generates a new access token for a user

__Arguments__

```javascript
path.username {String}  
path.name {String} Descriptive name for this token (e.g. "cronjob")
```

<a name="removeUserToken">
### removeUserToken(parameters[, path][, callback])

Removes a token for a user

__Arguments__

```javascript
path.username {String}  
path.access token {String}  
```

## License

The MIT License (MIT)

Copyright (c) 2015 Andrii Kolomiichenko (bboywilld@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
