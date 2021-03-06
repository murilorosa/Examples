// Generated by CoffeeScript 1.4.0
/**
Collection of {Phoenix.model.ScenarioItem} models.
*/

Ext.define("Phoenix.store.ScenarioItemStore", {
  extend: "Ext.data.Store",
  alias: "store.scenarioItemStore",
  requires: ["Phoenix.model.ScenarioItem"],
  inject: ["appConfig"],
  config: {
    appConfig: null
  },
  model: "Phoenix.model.ScenarioItem",
  autoLoad: true,
  /**
  	* Constructor.
  */

  constructor: function(cfg) {
    if (cfg == null) {
      cfg = {};
    }
    this.initConfig(cfg);
    Ext.apply(this, {
      proxy: {
        type: "localstorage",
        id: this.getAppConfig().getEndpoint("listScenarioItems").proxyId
      }
    });
    return this.callParent(arguments);
  },
  /**
  	* Returns true the store contains unsynced {Phoenix.model.ScenarioItem} models.
  	* @return {Boolean}
  */

  isSyncNeeded: function() {
    var result;
    result = false;
    if (this.getNewRecords().length || this.getModifiedRecords().length || this.getRemovedRecords().length || this.getUpdatedRecords().length) {
      result = true;
    }
    return result;
  }
});
