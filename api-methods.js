/*
 * Graylog API Methods
 * Compatitible with Graylog API v1.1.4 (59783f6)
 */

module.exports = {
  getAlarmCallbacks: {
    path: '/streams/{streamid}/alarmcallbacks',
    summary: 'Get a list of all alarm callbacks for this stream',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'streamid',
        description: 'The id of the stream whose alarm callbacks we want.',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  createAlarmCallback: {
    path: '/streams/{streamid}/alarmcallbacks',
    summary: 'Create an alarm callback',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'streamid',
        description: 'The stream id this new alarm callback belongs to.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'CreateAlarmCallbackRequest'
      }
    ]
  },
  getAlarmCallbacksAvailable: {
    path: '/streams/{streamid}/alarmcallbacks/available',
    summary: 'Get a list of all alarm callback types',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'streamid',
        description: 'The id of the stream whose alarm callbacks we want.',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getAlarmCallback: {
    path: '/streams/{streamid}/alarmcallbacks/{alarmCallbackId}',
    summary: 'Get a single specified alarm callback for this stream',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'streamid',
        description: 'The id of the stream whose alarm callbacks we want.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'alarmCallbackId',
        description: 'The alarm callback id we are getting',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  updateAlarmCallback: {
    path: '/streams/{streamid}/alarmcallbacks/{alarmCallbackId}',
    summary: 'Update an alarm callback',
    notes: '',
    method: 'PUT',
    parameters: [
      {
        name: 'streamid',
        description: 'The stream id this alarm callback belongs to.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'alarmCallbackId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'Map'
      }
    ]
  },
  removeAlarmCallback: {
    path: '/streams/{streamid}/alarmcallbacks/{alarmCallbackId}',
    summary: 'Delete an alarm callback',
    notes: '',
    method: 'DELETE',
    parameters: [
      {
        name: 'streamid',
        description: 'The stream id this alarm callback belongs to.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'alarmCallbackId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  createBlacklistFilter: {
    path: '/filters/blacklist',
    summary: 'Create a blacklist filter',
    notes: 'It can take up to a second until the change is applied',
    method: 'POST',
    parameters: [
      {
        name: 'filterEntry',
        description: '',
        required: true,
        paramType: 'body',
        type: 'FilterDescription'
      }
    ]
  },
  getBlacklistFilters: {
    path: '/filters/blacklist',
    summary: 'Get all blacklist filters',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getBlacklistFilter: {
    path: '/filters/blacklist/{filterId}',
    summary: 'Get the existing blacklist filter',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'filterId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  updateBlacklistFilter: {
    path: '/filters/blacklist/{filterId}',
    summary: 'Update an existing blacklist filter',
    notes: 'It can take up to a second until the change is applied',
    method: 'PUT',
    parameters: [
      {
        name: 'filterId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'filterEntry',
        description: '',
        required: true,
        paramType: 'body',
        type: 'FilterDescription'
      }
    ]
  },
  removeBlacklistFilter: {
    path: '/filters/blacklist/{filterId}',
    summary: 'Remove the existing blacklist filter',
    notes: 'It can take up to a second until the change is applied',
    method: 'DELETE',
    parameters: [
      {
        name: 'filterId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  createDashboard: {
    path: '/dashboards',
    summary: 'Create a dashboard',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'CreateDashboardRequest'
      }
    ]
  },
  getDashboards: {
    path: '/dashboards',
    summary: 'Get a list of all dashboards and all configurations of their widgets.',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getDashboard: {
    path: '/dashboards/{dashboardId}',
    summary: 'Get a single dashboards and all configurations of its widgets.',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'dashboardId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  updateDashboard: {
    path: '/dashboards/{dashboardId}',
    summary: 'Update the settings of a dashboard.',
    notes: '',
    method: 'PUT',
    parameters: [
      {
        name: 'dashboardId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'UpdateDashboardRequest'
      }
    ]
  },
  removeDashboard: {
    path: '/dashboards/{dashboardId}',
    summary: 'Delete a dashboard and all its widgets',
    notes: '',
    method: 'DELETE',
    parameters: [
      {
        name: 'dashboardId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  updateDashboardPositions: {
    path: '/dashboards/{dashboardId}/positions',
    summary: 'Update/set the positions of dashboard widgets.',
    notes: '',
    method: 'PUT',
    parameters: [
      {
        name: 'dashboardId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'WidgetPositionsRequest'
      }
    ]
  },
  createDashboardWidget: {
    path: '/dashboards/{dashboardId}/widgets',
    summary: 'Add a widget to a dashboard',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'dashboardId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'AddWidgetRequest'
      }
    ]
  },
  updateDashboardWidget: {
    path: '/dashboards/{dashboardId}/widgets/{widgetId}',
    summary: 'Update a widget',
    notes: '',
    method: 'PUT',
    parameters: [
      {
        name: 'dashboardId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'widgetId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'AddWidgetRequest'
      }
    ]
  },
  removeDashboardWidget: {
    path: '/dashboards/{dashboardId}/widgets/{widgetId}',
    summary: 'Delete a widget',
    notes: '',
    method: 'DELETE',
    parameters: [
      {
        name: 'dashboardId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'widgetId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  updateDashboardWidgetCacheTime: {
    path: '/dashboards/{dashboardId}/widgets/{widgetId}/cachetime',
    summary: 'Update cache time of a widget',
    notes: '',
    method: 'PUT',
    parameters: [
      {
        name: 'dashboardId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'widgetId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'UpdateWidgetRequest'
      }
    ]
  },
  updateDashboardWidgetDescription: {
    path: '/dashboards/{dashboardId}/widgets/{widgetId}/description',
    summary: 'Update description of a widget',
    notes: '',
    method: 'PUT',
    parameters: [
      {
        name: 'dashboardId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'widgetId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'UpdateWidgetRequest'
      }
    ]
  },
  getDashboardWidgetValue: {
    path: '/dashboards/{dashboardId}/widgets/{widgetId}/value',
    summary: 'Get a single widget value.',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'dashboardId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'widgetId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getCountTotal: {
    path: '/count/total',
    summary: 'Total number of messages in all your indices.',
    notes: '',
    method: 'GET',
    parameters: []
  },
  createInputExtractor: {
    path: '/system/inputs/{inputId}/extractors',
    summary: 'Add an extractor to an input',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'inputId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'CreateExtractorRequest'
      }
    ]
  },
  getInputExtractors: {
    path: '/system/inputs/{inputId}/extractors',
    summary: 'List all extractors of an input',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'inputId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getInputExtractor: {
    path: '/system/inputs/{inputId}/extractors/{extractorId}',
    summary: 'Get information of a single extractor of an input',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'inputId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'extractorId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  updateInputExtractorOrder: {
    path: '/system/inputs/{inputId}/extractors/order',
    summary: 'Update extractor order of an input',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'inputId',
        description: 'Persist ID (!) of input.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'OrderExtractorsRequest'
      }
    ]
  },
  updateInputExtractor: {
    path: '/system/inputs/{inputId}/extractors/{extractorId}',
    summary: 'Update an extractor',
    notes: '',
    method: 'PUT',
    parameters: [
      {
        name: 'inputId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'extractorId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'CreateExtractorRequest'
      }
    ]
  },
  removeInputExtractor: {
    path: '/system/inputs/{inputId}/extractors/{extractorId}',
    summary: 'Delete an extractor',
    notes: '',
    method: 'DELETE',
    parameters: [
      {
        name: 'inputId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'extractorId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getAlerts: {
    path: '/streams/{streamId}/alerts',
    summary: 'Get the 300 most recent alarms of this stream.',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'streamId',
        description: 'The stream id this new alert condition belongs to.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'since',
        description: 'Optional parameter to define a lower date boundary. (UNIX timestamp)',
        required: false,
        paramType: 'query',
        type: 'Integer'
      }
    ]
  },
  getAlertsCheck: {
    path: '/streams/{streamId}/alerts/check',
    summary: 'Check for triggered alert conditions of this streams. Results cached for 30 seconds.',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'streamId',
        description: 'The ID of the stream to check.',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  createAlertReceiver: {
    path: '/streams/{streamId}/alerts/receivers',
    summary: 'Add an alert receiver',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'streamId',
        description: 'The stream id this new alert condition belongs to.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'entity',
        description: 'Name/ID of user or email address to add as alert receiver.',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'type',
        description: 'Type: users or emails',
        required: true,
        paramType: 'query',
        type: 'String'
      }
    ]
  },
  removeAlertReceiver: {
    path: '/streams/{streamId}/alerts/receivers',
    summary: 'Remove an alert receiver',
    notes: '',
    method: 'DELETE',
    parameters: [
      {
        name: 'streamId',
        description: 'The stream id this new alert condition belongs to.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'entity',
        description: 'Name/ID of user or email address to remove from alert receivers.',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'type',
        description: 'Type: users or emails',
        required: true,
        paramType: 'query',
        type: 'String'
      }
    ]
  },
  testAlertSendDummy: {
    path: '/streams/{streamId}/alerts/sendDummyAlert',
    summary: 'Send a test mail for a given stream',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'streamId',
        description: 'The stream id this new alert condition belongs to.',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  createAlertCondition: {
    path: '/streams/{streamId}/alerts/conditions',
    summary: 'Create an alert condition',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'streamId',
        description: 'The stream id this new alert condition belongs to.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'CreateConditionRequest'
      }
    ]
  },
  getAlertConditions: {
    path: '/streams/{streamId}/alerts/conditions',
    summary: 'Get all alert conditions of this stream',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'streamId',
        description: 'The stream id this new alert condition belongs to.',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  updateAlertCondition: {
    path: '/streams/{streamId}/alerts/conditions/{conditionId}',
    summary: 'Modify an alert condition',
    notes: '',
    method: 'PUT',
    parameters: [
      {
        name: 'streamId',
        description: 'The stream id the alert condition belongs to.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'conditionId',
        description: 'The alert condition id.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'CreateConditionRequest'
      }
    ]
  },
  removeAlertCondition: {
    path: '/streams/{streamId}/alerts/conditions/{conditionId}',
    summary: 'Delete an alert condition',
    notes: '',
    method: 'DELETE',
    parameters: [
      {
        name: 'streamId',
        description: 'The stream id this new alert condition belongs to.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'conditionId',
        description: 'The stream id this new alert condition belongs to.',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getSystemFailures: {
    path: '/system/indexer/failures',
    summary: 'Get a list of failed index operations.',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'limit',
        description: 'Limit',
        required: true,
        paramType: 'query',
        type: 'Integer'
      },
      {
        name: 'offset',
        description: 'Offset',
        required: true,
        paramType: 'query',
        type: 'Integer'
      }
    ]
  },
  getFailuresCount: {
    path: '/system/indexer/failures/count',
    summary: 'Total count of failed index operations since the given date.',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'since',
        description: 'ISO8601 date',
        required: true,
        paramType: 'query',
        type: 'String'
      }
    ]
  },
  getClusterHealth: {
    path: '/system/indexer/cluster/health',
    summary: 'Get cluster and shard health overview',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getClusterName: {
    path: '/system/indexer/cluster/name',
    summary: 'Get the cluster name',
    notes: '',
    method: 'GET',
    parameters: []
  },
  analyzeMessage: {
    path: '/messages/{index}/analyze',
    summary: 'Analyze a message string',
    notes: 'Returns what tokens/terms a message string (message or full_message) is split to.',
    method: 'GET',
    parameters: [
      {
        name: 'index',
        description: 'The index the message containing the string is stored in.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'string',
        description: 'The string to analyze.',
        required: true,
        paramType: 'query',
        type: 'String'
      }
    ]
  },
  getMessage: {
    path: '/messages/{index}/{messageId}',
    summary: 'Get a single message.',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'index',
        description: 'The index this message is stored in.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'messageId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getIndicesClosed: {
    path: '/system/indexer/indices/closed',
    summary: 'Get a list of closed indices that can be reopened.',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getIndicesReopened: {
    path: '/system/indexer/indices/reopened',
    summary: 'Get a list of reopened indices, which will not be cleaned by retention cleaning',
    notes: '',
    method: 'GET',
    parameters: []
  },
  removeIndex: {
    path: '/system/indexer/indices/{index}',
    summary: 'Delete an index. This will also trigger an index ranges rebuild job.',
    notes: '',
    method: 'DELETE',
    parameters: [
      {
        name: 'index',
        description: '',
        required: false,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getIndices: {
    path: '/system/indexer/indices/{index}',
    summary: 'Get information of an index and its shards.',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'index',
        description: '',
        required: false,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  closeIndex: {
    path: '/system/indexer/indices/{index}/close',
    summary: 'Close an index. This will also trigger an index ranges rebuild job.',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'index',
        description: '',
        required: false,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  reopenIndex: {
    path: '/system/indexer/indices/{index}/reopen',
    summary: 'Reopen a closed index. This will also trigger an index ranges rebuild job.',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'index',
        description: '',
        required: false,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  searchKeyword: {
    path: '/search/universal/keyword',
    summary: 'Message search with keyword as timerange.',
    notes: 'Search for messages in a timerange defined by a keyword like "yesterday" or "2 weeks ago to wednesday".',
    method: 'GET',
    parameters: [
      {
        name: 'query',
        description: 'Query (Lucene syntax)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'keyword',
        description: 'Range keyword',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'limit',
        description: 'Maximum number of messages to return.',
        required: false,
        paramType: 'query',
        type: 'Integer'
      },
      {
        name: 'offset',
        description: 'Offset',
        required: false,
        paramType: 'query',
        type: 'Integer'
      },
      {
        name: 'filter',
        description: 'Filter',
        required: false,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'fields',
        description: 'Comma separated list of fields to return',
        required: false,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'sort',
        description: 'Sorting (field:asc / field:desc)',
        required: false,
        paramType: 'query',
        type: 'String'
      }
    ]
  },
  searchKeywordFieldHistogram: {
    path: '/search/universal/keyword/fieldhistogram',
    summary: 'Datetime histogram of a query using keyword timerange.',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'query',
        description: 'Query (Lucene syntax)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'field',
        description: 'Field of whose values to get the histogram of',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'interval',
        description: 'Histogram interval / bucket size. (year, quarter, month, week, day, hour or minute)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'keyword',
        description: 'Range keyword',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'filter',
        description: 'Filter',
        required: false,
        paramType: 'query',
        type: 'String'
      }
    ]
  },
  searchKeywordHistogram: {
    path: '/search/universal/keyword/histogram',
    summary: 'Datetime histogram of a query using keyword timerange.',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'query',
        description: 'Query (Lucene syntax)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'interval',
        description: 'Histogram interval / bucket size. (year, quarter, month, week, day, hour or minute)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'keyword',
        description: 'Range keyword',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'filter',
        description: 'Filter',
        required: false,
        paramType: 'query',
        type: 'String'
      }
    ]
  },
  searchKeywordStats: {
    path: '/search/universal/keyword/stats',
    summary: 'Field statistics for a query using a keyword timerange.',
    notes: 'Returns statistics like min/max or standard deviation of numeric fields over the whole query result set.',
    method: 'GET',
    parameters: [
      {
        name: 'field',
        description: 'Message field of numeric type to return statistics for',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'query',
        description: 'Query (Lucene syntax)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'keyword',
        description: 'Range keyword',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'filter',
        description: 'Filter',
        required: false,
        paramType: 'query',
        type: 'String'
      }
    ]
  },
  searchKeywordTerms: {
    path: '/search/universal/keyword/terms',
    summary: 'Most common field terms of a query using a keyword timerange.',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'field',
        description: 'Message field of to return terms of',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'query',
        description: 'Query (Lucene syntax)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'size',
        description: 'Maximum number of terms to return',
        required: false,
        paramType: 'query',
        type: 'Integer'
      },
      {
        name: 'keyword',
        description: 'Range keyword',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'filter',
        description: 'Filter',
        required: false,
        paramType: 'query',
        type: 'String'
      }
    ]
  },
  searchKeywordTermsStats: {
    path: '/search/universal/keyword/termsstats',
    summary: 'Ordered field terms of a query computed on another field using a keyword timerange.',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'key_field',
        description: 'Message field of to return terms of',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'value_field',
        description: 'Value field used for computation',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'order',
        description: 'What to order on (Allowed values: TERM, REVERSE_TERM, COUNT, REVERSE_COUNT, TOTAL, REVERSE_TOTAL, MIN, REVERSE_MIN, MAX, REVERSE_MAX, MEAN, REVERSE_MEAN)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'query',
        description: 'Query (Lucene syntax)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'size',
        description: 'Maximum number of terms to return',
        required: false,
        paramType: 'query',
        type: 'Integer'
      },
      {
        name: 'keyword',
        description: 'Keyword timeframe',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'filter',
        description: 'Filter',
        required: false,
        paramType: 'query',
        type: 'String'
      }
    ]
  },
  searchAbsolute: {
    path: '/search/universal/absolute',
    summary: 'Message search with absolute timerange.',
    notes: 'Search for messages using an absolute timerange, specified as from/to with format yyyy-MM-ddTHH:mm:ss.SSSZ (e.g. 2014-01-23T15:34:49.000Z) or yyyy-MM-dd HH:mm:ss.',
    method: 'GET',
    parameters: [
      {
        name: 'query',
        description: 'Query (Lucene syntax)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'from',
        description: 'Timerange start. See description for date format',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'to',
        description: 'Timerange end. See description for date format',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'limit',
        description: 'Maximum number of messages to return.',
        required: false,
        paramType: 'query',
        type: 'Integer'
      },
      {
        name: 'offset',
        description: 'Offset',
        required: false,
        paramType: 'query',
        type: 'Integer'
      },
      {
        name: 'filter',
        description: 'Filter',
        required: false,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'fields',
        description: 'Comma separated list of fields to return',
        required: true,
        paramType: 'query',
        type: 'String'
      }
    ]
  },
  searchAbsoluteFieldHistogram: {
    path: '/search/universal/absolute/fieldhistogram',
    summary: 'Field value histogram of a query using an absolute timerange.',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'query',
        description: 'Query (Lucene syntax)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'field',
        description: 'Field of whose values to get the histogram of',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'interval',
        description: 'Histogram interval / bucket size. (year, quarter, month, week, day, hour or minute)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'from',
        description: 'Timerange start. See search method description for date format',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'to',
        description: 'Timerange end. See search method description for date format',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'filter',
        description: 'Filter',
        required: false,
        paramType: 'query',
        type: 'String'
      }
    ]
  },
  searchAbsoluteHistogram: {
    path: '/search/universal/absolute/histogram',
    summary: 'Datetime histogram of a query using an absolute timerange.',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'query',
        description: 'Query (Lucene syntax)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'interval',
        description: 'Histogram interval / bucket size. (year, quarter, month, week, day, hour or minute)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'from',
        description: 'Timerange start. See search method description for date format',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'to',
        description: 'Timerange end. See search method description for date format',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'filter',
        description: 'Filter',
        required: false,
        paramType: 'query',
        type: 'String'
      }
    ]
  },
  searchAbsoluteStats: {
    path: '/search/universal/absolute/stats',
    summary: 'Field statistics for a query using an absolute timerange.',
    notes: 'Returns statistics like min/max or standard deviation of numeric fields over the whole query result set.',
    method: 'GET',
    parameters: [
      {
        name: 'field',
        description: 'Message field of numeric type to return statistics for',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'query',
        description: 'Query (Lucene syntax)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'from',
        description: 'Timerange start. See search method description for date format',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'to',
        description: 'Timerange end. See search method description for date format',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'filter',
        description: 'Filter',
        required: false,
        paramType: 'query',
        type: 'String'
      }
    ]
  },
  searchAbsoluteTerms: {
    path: '/search/universal/absolute/terms',
    summary: 'Most common field terms of a query using an absolute timerange.',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'field',
        description: 'Message field of to return terms of',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'query',
        description: 'Query (Lucene syntax)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'size',
        description: 'Maximum number of terms to return',
        required: false,
        paramType: 'query',
        type: 'Integer'
      },
      {
        name: 'from',
        description: 'Timerange start. See search method description for date format',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'to',
        description: 'Timerange end. See search method description for date format',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'filter',
        description: 'Filter',
        required: false,
        paramType: 'query',
        type: 'String'
      }
    ]
  },
  searchAbsoluteTermsStats: {
    path: '/search/universal/absolute/termsstats',
    summary: 'Ordered field terms of a query computed on another field using an absolute timerange.',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'key_field',
        description: 'Message field of to return terms of',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'value_field',
        description: 'Value field used for computation',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'order',
        description: 'What to order on (Allowed values: TERM, REVERSE_TERM, COUNT, REVERSE_COUNT, TOTAL, REVERSE_TOTAL, MIN, REVERSE_MIN, MAX, REVERSE_MAX, MEAN, REVERSE_MEAN)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'query',
        description: 'Query (Lucene syntax)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'size',
        description: 'Maximum number of terms to return',
        required: false,
        paramType: 'query',
        type: 'Integer'
      },
      {
        name: 'from',
        description: 'Timerange start. See search method description for date format',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'to',
        description: 'Timerange end. See search method description for date format',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'filter',
        description: 'Filter',
        required: false,
        paramType: 'query',
        type: 'String'
      }
    ]
  },
  searchRelative: {
    path: '/search/universal/relative',
    summary: 'Message search with relative timerange.',
    notes: 'Search for messages in a relative timerange, specified as seconds from now. Example: 300 means search from 5 minutes ago to now.',
    method: 'GET',
    parameters: [
      {
        name: 'query',
        description: 'Query (Lucene syntax)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'range',
        description: 'Relative timeframe to search in. See method description.',
        required: true,
        paramType: 'query',
        type: 'Integer'
      },
      {
        name: 'limit',
        description: 'Maximum number of messages to return.',
        required: false,
        paramType: 'query',
        type: 'Integer'
      },
      {
        name: 'offset',
        description: 'Offset',
        required: false,
        paramType: 'query',
        type: 'Integer'
      },
      {
        name: 'filter',
        description: 'Filter',
        required: false,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'fields',
        description: 'Comma separated list of fields to return',
        required: true,
        paramType: 'query',
        type: 'String'
      }
    ]
  },
  searchRelativeFieldHistogram: {
    path: '/search/universal/relative/fieldhistogram',
    summary: 'Field value histogram of a query using a relative timerange.',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'query',
        description: 'Query (Lucene syntax)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'field',
        description: 'Field of whose values to get the histogram of',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'interval',
        description: 'Histogram interval / bucket size. (year, quarter, month, week, day, hour or minute)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'range',
        description: 'Relative timeframe to search in. See search method description.',
        required: true,
        paramType: 'query',
        type: 'Integer'
      },
      {
        name: 'filter',
        description: 'Filter',
        required: false,
        paramType: 'query',
        type: 'String'
      }
    ]
  },
  searchRelativeHistogram: {
    path: '/search/universal/relative/histogram',
    summary: 'Datetime histogram of a query using a relative timerange.',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'query',
        description: 'Query (Lucene syntax)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'interval',
        description: 'Histogram interval / bucket size. (year, quarter, month, week, day, hour or minute)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'range',
        description: 'Relative timeframe to search in. See search method description.',
        required: true,
        paramType: 'query',
        type: 'Integer'
      },
      {
        name: 'filter',
        description: 'Filter',
        required: false,
        paramType: 'query',
        type: 'String'
      }
    ]
  },
  searchRelativeStats: {
    path: '/search/universal/relative/stats',
    summary: 'Field statistics for a query using a relative timerange.',
    notes: 'Returns statistics like min/max or standard deviation of numeric fields over the whole query result set.',
    method: 'GET',
    parameters: [
      {
        name: 'field',
        description: 'Message field of numeric type to return statistics for',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'query',
        description: 'Query (Lucene syntax)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'range',
        description: 'Relative timeframe to search in. See search method description.',
        required: true,
        paramType: 'query',
        type: 'Integer'
      },
      {
        name: 'filter',
        description: 'Filter',
        required: false,
        paramType: 'query',
        type: 'String'
      }
    ]
  },
  searchRelativeTerms: {
    path: '/search/universal/relative/terms',
    summary: 'Most common field terms of a query using a relative timerange.',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'field',
        description: 'Message field of to return terms of',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'query',
        description: 'Query (Lucene syntax)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'size',
        description: 'Maximum number of terms to return',
        required: false,
        paramType: 'query',
        type: 'Integer'
      },
      {
        name: 'range',
        description: 'Relative timeframe to search in. See search method description.',
        required: true,
        paramType: 'query',
        type: 'Integer'
      },
      {
        name: 'filter',
        description: 'Filter',
        required: false,
        paramType: 'query',
        type: 'String'
      }
    ]
  },
  searchRelativeTermsStats: {
    path: '/search/universal/relative/termsstats',
    summary: 'Ordered field terms of a query computed on another field using a relative timerange.',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'key_field',
        description: 'Message field of to return terms of',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'value_field',
        description: 'Value field used for computation',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'order',
        description: 'What to order on (Allowed values: TERM, REVERSE_TERM, COUNT, REVERSE_COUNT, TOTAL, REVERSE_TOTAL, MIN, REVERSE_MIN, MAX, REVERSE_MAX, MEAN, REVERSE_MEAN)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'query',
        description: 'Query (Lucene syntax)',
        required: true,
        paramType: 'query',
        type: 'String'
      },
      {
        name: 'size',
        description: 'Maximum number of terms to return',
        required: false,
        paramType: 'query',
        type: 'Integer'
      },
      {
        name: 'range',
        description: 'Relative timeframe to search in. See search method description.',
        required: true,
        paramType: 'query',
        type: 'Integer'
      },
      {
        name: 'filter',
        description: 'Filter',
        required: false,
        paramType: 'query',
        type: 'String'
      }
    ]
  },
  getSources: {
    path: '/sources',
    summary: 'Get a list of all sources (not more than 5000) that have messages in the current indices. The result is cached for 10 seconds.',
    notes: 'Range: The parameter is in seconds relative to the current time. 86400 means "in the last day", 0 is special and means "across all indices"',
    method: 'GET',
    parameters: [
      {
        name: 'range',
        description: 'Relative timeframe to search in. See method description.',
        required: true,
        paramType: 'query',
        type: 'Integer'
      }
    ]
  },
  createStreamOutput: {
    path: '/streams/{streamid}/outputs',
    summary: 'Associate outputs with a stream',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'streamid',
        description: 'The id of the stream whose outputs we want.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'AddOutputRequest'
      }
    ]
  },
  getStreamOutputs: {
    path: '/streams/{streamid}/outputs',
    summary: 'Associate outputs with a stream',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'streamid',
        description: 'The id of the stream whose outputs we want.',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getStreamOutput: {
    path: '/streams/{streamid}/outputs/{outputId}',
    summary: 'Get specific output of a stream',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'streamid',
        description: 'The id of the stream whose outputs we want.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'outputId',
        description: 'The id of the output we want.',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  removeStreamOutput: {
    path: '/streams/{streamid}/outputs/{outputId}',
    summary: 'Delete output of a stream',
    notes: '',
    method: 'DELETE',
    parameters: [
      {
        name: 'streamid',
        description: 'The id of the stream whose outputs we want.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'outputId',
        description: 'The id of the output that should be deleted',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getSystem: {
    path: '/system',
    summary: 'Get system overview',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getJVM: {
    path: '/system/jvm',
    summary: 'Get JVM information',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getThreadDump: {
    path: '/system/threaddump',
    summary: 'Get a thread dump',
    notes: '',
    method: 'GET',
    parameters: []
  },
  changeCollector: {
    path: '/system/collectors/{collectorId}',
    summary: 'Create/update an collector registration',
    notes: 'This is a stateless method which upserts a collector registration',
    method: 'PUT',
    parameters: [
      {
        name: 'collectorId',
        description: 'The collector id this collector is registering as.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'CollectorRegistrationRequest'
      }
    ]
  },
  getNodeThis: {
    path: '/system/cluster/node',
    summary: 'Information about this node.',
    notes: 'This is returning information of this node in context to its state in the cluster. Use the system API of the node itself to get system information.',
    method: 'GET',
    parameters: []
  },
  getNodes: {
    path: '/system/cluster/nodes',
    summary: 'List all active nodes in this cluster.',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'nodeId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getNode: {
    path: '/system/cluster/nodes/{nodeId}',
    summary: 'Information about a node.',
    notes: 'This is returning information of a node in context to its state in the cluster. Use the system API of the node itself to get system information.',
    method: 'GET',
    parameters: [
      {
        name: 'nodeId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  createBundle: {
    path: '/system/bundles',
    summary: 'Upload a content pack',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'Request body',
        description: 'Content pack',
        required: true,
        paramType: 'body',
        type: 'ConfigurationBundle'
      }
    ]
  },
  getBundles: {
    path: '/system/bundles',
    summary: 'List available content packs',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getBundle: {
    path: '/system/bundles/{bundleId}',
    summary: 'Show content pack',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'bundleId',
        description: 'Content pack ID',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  exportBundles: {
    path: '/system/bundles/export',
    summary: 'Export entities as a content pack',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'exportBundle',
        description: 'Export content pack',
        required: true,
        paramType: 'body',
        type: 'ExportBundle'
      }
    ]
  },
  updateBundle: {
    path: '/system/bundles/{bundleId}',
    summary: 'Update content pack',
    notes: '',
    method: 'PUT',
    parameters: [
      {
        name: 'bundleId',
        description: 'Content pack ID',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'Request body',
        description: 'Content pack',
        required: true,
        paramType: 'body',
        type: 'ConfigurationBundle'
      }
    ]
  },
  removeBundle: {
    path: '/system/bundles/{bundleId}',
    summary: 'Delete content pack',
    notes: '',
    method: 'DELETE',
    parameters: [
      {
        name: 'bundleId',
        description: 'Content pack ID',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  applyBundle: {
    path: '/system/bundles/{bundleId}/apply',
    summary: 'Set up entities described by content pack',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'bundleId',
        description: 'Content pack ID',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getFields: {
    path: '/system/fields',
    summary: 'Get list of message fields that exist',
    notes: 'This operation is comparably fast because it reads directly from the indexer mapping.',
    method: 'GET',
    parameters: [
      {
        name: 'limit',
        description: 'Maximum number of fields to return. Set to 0 for all fields.',
        required: false,
        paramType: 'query',
        type: 'Integer'
      }
    ]
  },
  createJob: {
    path: '/system/jobs',
    summary: 'Trigger new job',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'TriggerRequest'
      }
    ]
  },
  getJobs: {
    path: '/system/jobs',
    summary: 'List currently running jobs',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getJob: {
    path: '/system/jobs/{jobId}',
    summary: 'Get information of a specific currently running job',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'jobId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getMetrics: {
    path: '/system/metrics',
    summary: 'Get all metrics',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getMetric: {
    path: '/system/metrics/{metricName}',
    summary: 'Get a single metric',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'metricName',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getMetricsMultiple: {
    path: '/system/metrics/multiple',
    summary: 'Get the values of multiple metrics at once',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'Requested metrics',
        description: '',
        required: true,
        paramType: 'body',
        type: 'MetricsReadRequest'
      }
    ]
  },
  getMetricsNames: {
    path: '/system/metrics/names',
    summary: 'Get all metrics keys/names',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getMetricsNamespace: {
    path: '/system/metrics/namespace/{namespace}',
    summary: 'Get all metrics of a namespace',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'namespace',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getMetricsHistory: {
    path: '/system/metrics/{metricName}/history',
    summary: 'Get history of a single metric',
    notes: 'The maximum retention time is currently only 5 minutes.',
    method: 'GET',
    parameters: [
      {
        name: 'metricName',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'after',
        description: 'Only values for after this UTC timestamp (1970 epoch)',
        required: false,
        paramType: 'query',
        type: 'Long'
      }
    ]
  },
  getPermissions: {
    path: '/system/permissions',
    summary: 'Get all available user permissions.',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getPermissionsReader: {
    path: '/system/permissions/reader/{username}',
    summary: 'Get the initial permissions assigned to a reader account',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'username',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  shutdownNode: {
    path: '/system/shutdown/shutdown',
    summary: 'Shutdown this node gracefully.',
    notes: 'Attempts to process all buffered and cached messages before exiting, shuts down inputs first to make sure that no new messages are accepted.',
    method: 'POST',
    parameters: []
  },
  createSession: {
    path: '/system/sessions',
    summary: 'Create a new session',
    notes: 'This request creates a new session for a user or reactivates an existing session: the equivalent of logging in.',
    method: 'POST',
    parameters: [
      {
        name: 'Login request',
        description: 'Username and credentials',
        required: true,
        paramType: 'body',
        type: 'SessionCreateRequest'
      }
    ]
  },
  removeSession: {
    path: '/system/sessions/{sessionId}',
    summary: 'Terminate an existing session',
    notes: 'Destroys the session with the given ID: the equivalent of logging out.',
    method: 'DELETE',
    parameters: [
      {
        name: 'sessionId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getServiceManager: {
    path: '/system/serviceManager',
    summary: 'List current status of ServiceManager',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getRadios: {
    path: '/system/radios',
    summary: 'List all active radios in this cluster.',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getRadio: {
    path: '/system/radios/{radioId}',
    summary: 'Information about a radio.',
    notes: 'This is returning information of a radio in context to its state in the cluster. Use the system API of the node itself to get system information.',
    method: 'GET',
    parameters: [
      {
        name: 'radioId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  createRadioInput: {
    path: '/system/radios/{radioId}/inputs',
    summary: 'Register input of a radio.',
    notes: 'Radio inputs register their own inputs here for persistence after they successfully launched it.',
    method: 'POST',
    parameters: [
      {
        name: 'radioId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'RegisterInputRequest'
      }
    ]
  },
  getRadioInputs: {
    path: '/system/radios/{radioId}/inputs',
    summary: 'Persisted inputs of a radio.',
    notes: 'This is returning the configured persisted inputs of a radio node. This is *not* returning the actually running inputs on a radio node. Radio nodes use this resource to get their configured inputs on startup.',
    method: 'GET',
    parameters: [
      {
        name: 'radioId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  removeRadioInput: {
    path: '/system/radios/{radioId}/inputs/{inputId}',
    summary: 'Unregister input of a radio.',
    notes: 'Radios unregister their inputs when they are stopped/terminated on the radio.',
    method: 'DELETE',
    parameters: [
      {
        name: 'radioId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'inputId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  pingRadio: {
    path: '/system/radios/{radioId}/ping',
    summary: 'Ping - Accepts pings of graylog2-radio nodes.',
    notes: 'Every graylog2-radio node is regularly pinging to announce that it is active.',
    method: 'PUT',
    parameters: [
      {
        name: 'radioId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'PingRequest'
      }
    ]
  },
  createInputStaticField: {
    path: '/system/inputs/{inputId}/staticfields',
    summary: 'Add a static field to an input',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'inputId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'CreateStaticFieldRequest'
      }
    ]
  },
  removeInputStaticField: {
    path: '/system/inputs/{inputId}/staticfields/{key}',
    summary: 'Remove static field of an input',
    notes: '',
    method: 'DELETE',
    parameters: [
      {
        name: 'Key',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'inputId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getStreams: {
    path: '/streams',
    summary: 'Get a list of all streams',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getStream: {
    path: '/streams/{streamId}',
    summary: 'Get a single stream',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'streamId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  createStream: {
    path: '/streams',
    summary: 'Create a stream',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'CreateStreamRequest'
      }
    ]
  },
  getStreamsEnabled: {
    path: '/streams/enabled',
    summary: 'Get a list of all enabled streams',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getStreamAllThroughput: {
    path: '/stream/throughput',
    summary: 'Current throughput of all visible streams on this node in messages per second',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getStreamThroughput: {
    path: '/streams/{streamId}/throughput',
    summary: 'Current throughput of this stream on this node in messages per second',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'streamId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  updateStream: {
    path: '/streams/{streamId}',
    summary: 'Update a stream',
    notes: '',
    method: 'PUT',
    parameters: [
      {
        name: 'streamId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'UpdateStreamRequest'
      }
    ]
  },
  removeStream: {
    path: '/streams/{streamId}',
    summary: 'Delete a stream',
    notes: '',
    method: 'DELETE',
    parameters: [
      {
        name: 'streamId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  cloneStream: {
    path: '/streams/{streamId}/clone',
    summary: 'Clone a stream',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'streamId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'CloneStreamRequest'
      }
    ]
  },
  pauseStream: {
    path: '/streams/{streamId}/pause',
    summary: 'Pause a stream',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'streamId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  resumeStream: {
    path: '/streams/{streamId}/resume',
    summary: 'Resume a stream',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'streamId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  testMatchStream: {
    path: '/streams/{streamId}/testMatch',
    summary: 'Test matching of a stream against a supplied message',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'streamId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'Map'
      }
    ]
  },
  getClusterStats: {
    path: '/system/cluster/stats',
    summary: 'Cluster status information.',
    notes: 'This resource returns information about the Graylog cluster.',
    method: 'GET',
    parameters: []
  },
  getClusterStatsElasticsearch: {
    path: '/system/cluster/stats/elasticsearch',
    summary: 'Elasticsearch information.',
    notes: 'This resource returns information about the Elasticsearch Cluster.',
    method: 'GET',
    parameters: []
  },
  getClusterStatsMongo: {
    path: '/system/cluster/stats/mongo',
    summary: 'MongoDB information.',
    notes: 'This resource returns information about MongoDB.',
    method: 'GET',
    parameters: []
  },
  getBuffers: {
    path: '/system/buffers',
    summary: 'Get current utilization of buffers and caches of this node.',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getBuffersClasses: {
    path: '/system/buffers/classes',
    summary: 'Get classnames of current buffer implementations.',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getGroks: {
    path: '/system/grok',
    summary: 'Get all existing grok patterns',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getGrok: {
    path: '/system/grok/{patternId}',
    summary: 'Get the existing grok pattern',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'patternId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  createGrok: {
    path: '/system/grok',
    summary: 'Add a new named pattern',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'pattern',
        description: '',
        required: true,
        paramType: 'body',
        type: 'GrokPatternSummary'
      }
    ]
  },
  createGroks: {
    path: '/system/grok',
    summary: 'Update an existing pattern',
    notes: '',
    method: 'PUT',
    parameters: [
      {
        name: 'patterns',
        description: '',
        required: true,
        paramType: 'body',
        type: 'Array'
      }
    ]
  },
  updateGrok: {
    path: '/system/grok/{patternId}',
    summary: 'Update an existing pattern',
    notes: '',
    method: 'PUT',
    parameters: [
      {
        name: 'patternId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'pattern',
        description: '',
        required: true,
        paramType: 'body',
        type: 'GrokPatternSummary'
      }
    ]
  },
  removeGrok: {
    path: '/system/grok/{patternId}',
    summary: 'Remove an existing pattern by id',
    notes: '',
    method: 'DELETE',
    parameters: []
  },
  getLDAPSettings: {
    path: '/system/ldap/settings',
    summary: 'Get the LDAP configuration if it is configured',
    notes: '',
    method: 'GET',
    parameters: []
  },
  updateLDAPSettings: {
    path: '/system/ldap/settings',
    summary: 'Update the LDAP configuration',
    notes: '',
    method: 'PUT',
    parameters: [
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'LdapSettingsRequest'
      }
    ]
  },
  removeLDAPSettings: {
    path: '/system/ldap/settings',
    summary: 'Remove the LDAP configuration',
    notes: '',
    method: 'DELETE',
    parameters: []
  },
  testLDAPSettings: {
    path: '/system/ldap/test',
    summary: 'Test LDAP Configuration',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'Configuration to test',
        description: '',
        required: true,
        paramType: 'body',
        type: 'LdapTestConfigRequest'
      }
    ]
  },
  getLoggers: {
    path: '/system/loggers',
    summary: 'List all loggers and their current levels',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getLoggersSubsystems: {
    path: '/system/loggers/subsystems',
    summary: 'List all logger subsystems and their current levels',
    notes: '',
    method: 'GET',
    parameters: []
  },
  setLoggersSubsystemsLevel: {
    path: '/system/loggers/subsystems/{subsystem}/level/{level}',
    summary: 'Set the loglevel of a whole subsystem',
    notes: 'Provided level is falling back to DEBUG if it does not exist',
    method: 'PUT',
    parameters: [
      {
        name: 'subsystem',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'level',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  setLoggersLevel: {
    path: '/system/loggers/{loggerName}/level/{level}',
    summary: 'Set the loglevel of a single logger',
    notes: 'Provided level is falling back to DEBUG if it does not exist',
    method: 'PUT',
    parameters: [
      {
        name: 'loggerName',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'level',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getJournal: {
    path: '/system/journal',
    summary: 'Get current state of the journal on this node.',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getIndicesRanges: {
    path: '/system/indices/ranges',
    summary: 'Get a list of all index ranges',
    notes: '',
    method: 'GET',
    parameters: []
  },
  rebuildIndicesRanges: {
    path: '/system/indices/ranges/rebuild',
    summary: 'Rebuild/sync index range information.',
    notes: 'This triggers a systemjob that scans every index and stores meta information about what indices contain messages in what timeranges. It atomically overwrites already existing meta information.',
    method: 'POST',
    parameters: []
  },
  createInput: {
    path: '/system/inputs',
    summary: 'Launch input on this node',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'InputLaunchRequest'
      }
    ]
  },
  getInputs: {
    path: '/system/inputs',
    summary: 'Get all inputs of this node',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getInput: {
    path: '/system/inputs/{inputId}',
    summary: 'Get information of a single input on this node',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'inputId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  updateInput: {
    path: '/system/inputs/{inputId}',
    summary: 'Update input on this node',
    notes: '',
    method: 'PUT',
    parameters: [
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'InputLaunchRequest'
      },
      {
        name: 'inputId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  removeInput: {
    path: '/system/inputs/{inputId}',
    summary: 'Terminate input on this node',
    notes: '',
    method: 'DELETE',
    parameters: [
      {
        name: 'inputId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  launchInput: {
    path: '/system/inputs/{inputId}/launch',
    summary: 'Launch existing input on this node',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'inputId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  restartInput: {
    path: '/system/inputs/{inputId}/restart',
    summary: 'Restart existing input on this node',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'inputId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  stopInput: {
    path: '/system/inputs/{inputId}/stop',
    summary: 'Stop existing input on this node',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'inputId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getNotifications: {
    path: '/system/notifications',
    summary: 'Get all active notifications',
    notes: '',
    method: 'GET',
    parameters: []
  },
  removeNotification: {
    path: '/system/notifications/{notificationType}',
    summary: 'Delete a notification',
    notes: '',
    method: 'DELETE',
    parameters: [
      {
        name: 'notificationType',
        description: '',
        required: false,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getOutputs: {
    path: '/system/outputs',
    summary: 'Get a list of all outputs',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getOutput: {
    path: '/system/outputs/{outputId}',
    summary: 'Get specific output',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'outputId',
        description: 'The id of the output we want.',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  createOutput: {
    path: '/system/outputs',
    summary: 'Create an output',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'CreateOutputRequest'
      }
    ]
  },
  getOutputsAvailable: {
    path: '/system/outputs/available',
    summary: 'Get all available output modules',
    notes: '',
    method: 'GET',
    parameters: []
  },
  updateOutput: {
    path: '/system/outputs/{outputId}',
    summary: 'Update output',
    notes: '',
    method: 'PUT',
    parameters: [
      {
        name: 'outputId',
        description: 'The id of the output that should be deleted',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'Map'
      }
    ]
  },
  removeOutput: {
    path: '/system/outputs/{outputId}',
    summary: 'Delete output',
    notes: '',
    method: 'DELETE',
    parameters: [
      {
        name: 'outputId',
        description: 'The id of the output that should be deleted',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getUsers: {
    path: '/users',
    summary: 'List all users',
    notes: 'The permissions assigned to the users are always included.',
    method: 'GET',
    parameters: []
  },
  getUser: {
    path: '/users/{username}',
    summary: 'Get user details',
    notes: 'The user\'s permissions are only included if a user asks for his own account or for users with the necessary permissions to edit permissions.',
    method: 'GET',
    parameters: [
      {
        name: 'username',
        description: 'The username to return information for.',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  createUser: {
    path: '/users',
    summary: 'Create a new user account.',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'JSON body',
        description: 'Must contain username, full_name, email, password and a list of permissions.',
        required: true,
        paramType: 'body',
        type: 'CreateUserRequest'
      }
    ]
  },
  updateUser: {
    path: '/users/{username}',
    summary: 'Modify user details.',
    notes: '',
    method: 'PUT',
    parameters: [
      {
        name: 'username',
        description: 'The name of the user to modify.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: 'Updated user information.',
        required: true,
        paramType: 'body',
        type: 'ChangeUserRequest'
      }
    ]
  },
  removeUser: {
    path: '/users/{username}',
    summary: 'Removes a user account.',
    notes: '',
    method: 'DELETE',
    parameters: [
      {
        name: 'username',
        description: 'The name of the user to delete.',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  updateUserPassword: {
    path: '/users/{username}/password',
    summary: 'Update the password for a user.',
    notes: '',
    method: 'PUT',
    parameters: [
      {
        name: 'username',
        description: 'The name of the user whose password to change.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: 'The old and new passwords.',
        required: true,
        paramType: 'body',
        type: 'ChangePasswordRequest'
      }
    ]
  },
  updateUserPermissions: {
    path: '/users/{username}/permissions',
    summary: 'Update a user\'s permission set.',
    notes: '',
    method: 'PUT',
    parameters: [
      {
        name: 'username',
        description: 'The name of the user to modify.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: 'The list of permissions to assign to the user.',
        required: true,
        paramType: 'body',
        type: 'PermissionEditRequest'
      }
    ]
  },
  removeUserPermissions: {
    path: '/users/{username}/permissions',
    summary: 'Revoke all permissions for a user without deleting the account.',
    notes: '',
    method: 'DELETE',
    parameters: [
      {
        name: 'username',
        description: 'The name of the user to modify.',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  updateUserPreferences: {
    path: '/users/{username}/preferences',
    summary: 'Update a user\'s preferences set.',
    notes: '',
    method: 'PUT',
    parameters: [
      {
        name: 'username',
        description: 'The name of the user to modify.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: 'The map of preferences to assign to the user.',
        required: true,
        paramType: 'body',
        type: 'UpdateUserPreferences'
      }
    ]
  },
  getUserTokens: {
    path: '/users/{username}/tokens',
    summary: 'Retrieves the list of access tokens for a user',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'username',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  createUserToken: {
    path: '/users/{username}/tokens/{name}',
    summary: 'Generates a new access token for a user',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'username',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'name',
        description: 'Descriptive name for this token (e.g. "cronjob") ',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  removeUserToken: {
    path: '/users/{username}/tokens/{token}',
    summary: 'Removes a token for a user',
    notes: '',
    method: 'DELETE',
    parameters: [
      {
        name: 'username',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'access token',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getStats: {
    path: '/system/stats',
    summary: 'System information about this node.',
    notes: 'This resource returns information about the system this node is running on.',
    method: 'GET',
    parameters: []
  },
  getStatsFs: {
    path: '/system/stats/fs',
    summary: 'Filesystem information about this node.',
    notes: 'This resource returns information about the filesystems of this node.',
    method: 'GET',
    parameters: []
  },
  getStatsJvm: {
    path: '/system/stats/jvm',
    summary: 'JVM information about this node.',
    notes: 'This resource returns information about the Java Virtual Machine of this node.',
    method: 'GET',
    parameters: []
  },
  getStatsNetwork: {
    path: '/system/stats/network',
    summary: 'Networking information about this node.',
    notes: 'This resource returns information about the networking system this node is running with.',
    method: 'GET',
    parameters: []
  },
  getStatsOs: {
    path: '/system/stats/os',
    summary: 'OS information about this node.',
    notes: 'This resource returns information about the operating system this node is running on.',
    method: 'GET',
    parameters: []
  },
  getStatsProcess: {
    path: '/system/stats/process',
    summary: 'Process information about this node.',
    notes: 'This resource returns information about the process this node is running as.',
    method: 'GET',
    parameters: []
  },
  createSearchSaved: {
    path: '/search/saved',
    summary: 'Create a new saved search',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'CreateSavedSearchRequest'
      }
    ]
  },
  getSearchSavedAll: {
    path: '/search/saved',
    summary: 'Get a list of all saved searches',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getSearchSaved: {
    path: '/search/saved/{searchId}',
    summary: 'Get a single saved search',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'searchId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  updateSearchSaved: {
    path: '/search/saved/{searchId}',
    summary: 'Update a saved search',
    notes: '',
    method: 'PUT',
    parameters: [
      {
        name: 'searchId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'CreateSavedSearchRequest'
      }
    ]
  },
  removeSearchSaved: {
    path: '/search/saved/{searchId}',
    summary: 'Delete a saved search',
    notes: '',
    method: 'DELETE',
    parameters: [
      {
        name: 'searchId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getStreamRules: {
    path: '/streams/{streamid}/rules',
    summary: 'Get a list of all stream rules',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'streamid',
        description: 'The id of the stream whose stream rule we want.',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getStreamRule: {
    path: '/streams/{streamid}/rules/{streamRuleId}',
    summary: 'Get a single stream rules',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'streamid',
        description: 'The id of the stream whose stream rule we want.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'streamRuleId',
        description: 'The stream rule id we are getting',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  createStreamRule: {
    path: '/streams/{streamid}/rules',
    summary: 'Create a stream rule',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'streamid',
        description: 'The stream id this new rule belongs to.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'CreateStreamRuleRequest'
      }
    ]
  },
  updateStreamRule: {
    path: '/streams/{streamid}/rules/{streamRuleId}',
    summary: 'Update a stream rule',
    notes: '',
    method: 'PUT',
    parameters: [
      {
        name: 'streamid',
        description: 'The stream id this rule belongs to.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'streamRuleId',
        description: 'The stream rule id we are updating',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'CreateStreamRuleRequest'
      }
    ]
  },
  removeStreamRule: {
    path: '/streams/{streamid}/rules/{streamRuleId}',
    summary: 'Delete a stream rule',
    notes: '',
    method: 'DELETE',
    parameters: [
      {
        name: 'streamid',
        description: 'The stream id this new rule belongs to.',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'streamRuleId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getSystemCollectors: {
    path: '/system/collectors',
    summary: 'Lists all existing collector registrations',
    notes: '',
    method: 'GET',
    parameters: []
  },

  getSystemCollector: {
    path: '/system/collectors/{collectorId}',
    summary: 'Returns at most one collector summary for the specified collector id',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'collectorId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getInputsTypes: {
    path: '/system/inputs/types',
    summary: 'Get all available input types of this node',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getInputsType: {
    path: '/system/inputs/types/{inputType}',
    summary: 'Get information about a single input type',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'inputType',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getDeflector: {
    path: '/system/deflector',
    summary: 'Get current deflector status',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getDeflectorConfig: {
    path: '/system/deflector/config',
    summary: 'Get deflector configuration. Only available on master nodes',
    notes: '',
    method: 'GET',
    parameters: []
  },
  nextDeflectorCycle: {
    path: '/system/deflector/cycle',
    summary: 'Cycle deflector to new/next index',
    notes: '',
    method: 'POST',
    parameters: []
  },
  getLoadBalancerStatus: {
    path: '/system/lbstatus',
    summary: 'Get status of this graylog2-server node for load balancers. Returns either ALIVE with HTTP 200 or DEAD with HTTP 503',
    notes: '',
    method: 'GET',
    parameters: []
  },
  updateLoadBalancerStatusOverride: {
    path: '/system/lbstatus/override/{status}',
    summary: 'Override load balancer status of this graylog2-server node. Next lifecycle change will override it again to its default. Set to ALIVE or DEAD',
    notes: '',
    method: 'PUT',
    parameters: [
      {
        name: 'status',
        description: '',
        required: false,
        paramType: 'path',
        type: 'String'
      }
    ]
  },
  getSystemPlugins: {
    path: '/system/plugins',
    summary: 'List all installed plugins on this node',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getSystemMessages: {
    path: '/system/messages',
    summary: 'Get internal Graylog system messages',
    notes: '',
    method: 'GET',
    parameters: [
      {
        name: 'page',
        description: 'Page',
        required: false,
        paramType: 'query',
        type: 'Integer'
      }
    ]
  },
  pauseSystemProcessing: {
    path: '/system/processing/pause',
    summary: 'Pauses message processing',
    notes: '',
    method: 'PUT',
    parameters: []
  },
  resumeSystemProcessing: {
    path: '/system/processing/resume',
    summary: 'Resume message processing',
    notes: '',
    method: 'PUT',
    parameters: []
  },
  getThroughput: {
    path: '/system/throughput',
    summary: 'Current throughput of this node in messages per second',
    notes: '',
    method: 'GET',
    parameters: []
  },
  createDebugEventsCluster: {
    path: '/system/debug/events/cluster',
    summary: 'Create and send a cluster debug event',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'text',
        description: '',
        required: false,
        paramType: 'body',
        type: 'String'
      }
    ]
  },
  getDebugEventsCluster: {
    path: '/system/debug/events/cluster',
    summary: 'Show last received cluster debug event',
    notes: '',
    method: 'GET',
    parameters: []
  },
  createDebugEventsLocal: {
    path: '/system/debug/events/local',
    summary: 'Create and send a local debug event',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'text',
        description: '',
        required: false,
        paramType: 'body',
        type: 'String'
      }
    ]
  },
  getDebugEventsLocal: {
    path: '/system/debug/events/local',
    summary: 'Show last received local debug event',
    notes: '',
    method: 'GET',
    parameters: []
  },
  getSystemIndicesIndex_sets: {
    path: '/system/indices/index_sets',
    summary: 'Get a list of all index sets',
    notes: '',
    method: 'GET',
    parameters: []
  },
  updateSystemIndicesIndex_sets: {
    path: '/system/indices/index_sets/{indexdId}',
    summary: 'Update index set.',
    notes: '',
    method: 'PUT',
    parameters: [
     {
        name: 'indexdId',
        description: '',
        required: true,
        paramType: 'path',
        type: 'String'
      },
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'IndexSetUpdateRequest'
      }
    ]
  },
  createSystemIndicesIndex_sets: {
    path: '/system/indices/index_sets',
    summary: 'Create index set',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'IndexSetSummary'
      }
    ]
  },
  updateLDAPGroupMappings: {
    path: '/system/ldap/settings/groups',
    summary: 'Update the LDAP group to Graylog role mapping',
    notes: '',
    method: 'PUT',
    parameters: [
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'LdapGroupSettingsRequest'
      }
    ]
  },
  createRole: {
    path: '/roles',
    summary: 'Create a role',
    notes: '',
    method: 'POST',
    parameters: [
      {
        name: 'JSON body',
        description: '',
        required: true,
        paramType: 'body',
        type: 'RoleResponse'
      }
    ]
  }
};
