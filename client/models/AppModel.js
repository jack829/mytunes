// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    console.log('AppModel- initialize')

    this.set('currentSong', new SongModel());
    console.log('appmodel- set current song to: ' + this.get(JSON.stringify('currentSong'))
    this.set('songQueue', new SongQueue());
    console.log('appmodel- set songQueue to: ' + this.get(JSON.stringify('songQueue'))

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */
        
    params.library.on('play', function(song){
      this.set('currentSong', song);
      console.log('appmodel- params library: ' + this.get('currentSong'))
    }, this);
  }

});