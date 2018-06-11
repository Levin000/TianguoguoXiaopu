const ALL_EVENT = '__all__';

const EventProxy = function () {
  if (!(this instanceof EventProxy)) {
    return new EventProxy();
  }
  this._callbacks = {};
  this._fired = {};
};

EventProxy.prototype.emit = function (eventname, data) {
  var list, ev, callback, i, l;
  var both = 2;
  var calls = this._callbacks;
  while (both--) {
    ev = both ? eventname : ALL_EVENT;
    list = calls[ev];
    if (list) {
      for (i = 0, l = list.length; i < l; i++) {
        callback = list[i];
        if (!callback) {
          list.splice(i, 1);
          i--;
          l--;
        } else {
          var args = [];
          var start = both ? 1 : 0;
          for (var j = start; j < arguments.length; j++) {
            args.push(arguments[j]);
          }
          callback.apply(this, args);
        }
      }
    }
  }
  return this;
};

EventProxy.prototype.on = function (ev, callback) {
  // console.log('Add listener for %s', ev);
  this._callbacks[ev] = this._callbacks[ev] || [];
  this._callbacks[ev].push(callback);
  return this;
};

EventProxy.prototype.removeListener = function (eventname, callback) {
  var calls = this._callbacks;
  if (!eventname) {
    // debug('Remove all listeners');
    this._callbacks = {};
  } else {
    if (!callback) {
      // debug('Remove all listeners of %s', eventname);
      calls[eventname] = [];
    } else {
      var list = calls[eventname];
      if (list) {
        var l = list.length;
        for (var i = 0; i < l; i++) {
          if (callback === list[i]) {
            // debug('Remove a listener of %s', eventname);
            list[i] = null;
          }
        }
      }
    }
  }
  return this;
};

const ep = new EventProxy();

export default ep;