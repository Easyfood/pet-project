(function(global, doc) {

  var N = Node.prototype;

  var on = function(eventType, callback) {
    this.addEventListener(eventType, callback, false);
    return this;
  };

  var off = function(eventType, callback) {
    this.removeEventListener(eventType, callback, false);
    return this;
  };

  global.on = global.on || on;
  global.off = global.off || off;

  N.after = function(value) {
    this.insertAdjacentHTML('afterend', value);
  };

  N.findById = N.findById || function(query) {
    return this.getElementById(query);
  };

  N.find = N.find || function(value) {
    return this.querySelector(value);
  };

  N.findAll = N.findAll || function(query) {
      return this.querySelectorAll(query);
  };

  N.addClass = N.addClass || function(className) {
    if (this.classList) {
      this.classList.add(className);
    } else {
      this.className += ' ' + className;
    }

    return this;
  };

  N.removeClass = N.removeClass || function(className) {
    if (this.classList) {
      this.classList.remove(className);
      return;
    }

    this.className = this.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  };

  N.hasClass = N.hasClass || function(className) {
    var classes = this.className.split(' ');
    var index = classes.indexOf(className);

    return index >= 0;
  };

  N.toggleClass = N.toggleClass || function(className) {
    if (this.classList) {
      this.classList.toggle(className);
      return;
    }

    if (this.hasClass(className)) {
      classes.splice(index, 1);
    } else {
      classes.push(className);
    }

    this.className = classes.join(' ');
  };

  N.is = function(value) {
    if ((this || {}).type === value) {
      return true;
    }

    return false;
  };

  N.trigger = function(value) {
    var evt = doc.createEvent("HTMLEvents");
    evt.initEvent(value, false, true);

    this.dispatchEvent(evt);
  };

  N.on = N.on || on;
  N.off = N.off || off;

  N.closest = N.closest || function(callback) {
    var element = this;

    while (element) {
      if (callback(element)) { return element; }
      element = element.parentNode;
    }
  };

  N.attr = N.attr || function(key, value) {
    if (value) {
      this.setAttribute(key, value);
      return;
    }

    return this.getAttribute(key);
  };

  var forEach = function(callback) {
    [].forEach.call(this, callback);
  };

  var filter = function(callback) {
    return [].filter.call(this, callback);
  };

  HTMLCollection.prototype.forEach = HTMLCollection.prototype.forEach || forEach;
  HTMLCollection.prototype.filter = HTMLCollection.prototype.filter || filter;
  NodeList.prototype.forEach = NodeList.prototype.forEach || forEach;
  NodeList.prototype.filter = NodeList.prototype.filter || filter;

  NodeList.prototype.reduce = NodeList.prototype.reduce || function(callback) {
    return [].reduce.call(this, callback);
  };

  NodeList.prototype.map = NodeList.prototype.map || function(callback) {
    return [].map.call(this, callback);
  };

  NodeList.prototype.on = NodeList.prototype.on || function(eventType, callback) {
    this.forEach(function(element) {
      element.on(eventType, callback);
    });
  };

  NodeList.prototype.off = NodeList.prototype.off || function(eventType, callback) {
    this.forEach(function(element) {
      element.off(eventType, callback);
    });
  };

}(window, document));
