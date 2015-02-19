// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    console.log('SongQueueView - initialize')
  },

  render: function() {
    console.log('SongQueueView - render, this.$el:  ' + this.$el)

    return this.$el;
  }

});
