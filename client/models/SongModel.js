// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    console.log('SongModel- this trigger play: ' + this.get('play'))

    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger
  }

});
