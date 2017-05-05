//= require core/dom

(function(global, doc) {

  var M = global.EasyFood = global.EasyFood || {};

  M.Modal = function(selector) {
    this.keyEsc = 27;
    this.elements = {};
    this.elements.modal = null;
    this.elements.btClose = null;
    this.elements.links = doc.findAll(selector || '*[data-modal]');
    this.elements.overall = doc.find('.overall_modal');
    this.opts = { closable: true };
  };

  M.Modal.prototype = {
    start: function() {
      var that = this;

      this.elements.links.on('click', function(e) {
        e.preventDefault();

        if(this.className.indexOf("no_closable") !== -1){
          that.opts.closable = false;
        }

        var modal = doc.find(this.attr('data-modal'));
        that._open.call(that, modal);
      });

      if (this.elements.overall) {
        this.elements.overall.on('click', this._close.bind(this));
      }

      doc.on('keyup', this._onKeyup.bind(this));

      this.elements.links.forEach( function(e){
        if( e.className.indexOf("auto_open") !== -1 ){
          e.click();
        }
      });
    },

    _onKeyup: function(e) {
      if (e.keyCode === this.keyEsc && this.elements.modal) {
        this._close(e);
      }
    },

    _open: function(modal) {
      this.elements.modal = modal;
      var btClose = this.elements.btClose = modal.find('.bt_close');

      this._alignCenter(modal);

      modal.addClass('on');
      this.elements.overall.addClass('on');

      btClose.onclick = this._close.bind(this);
    },

    _close: function(e) {
      e.preventDefault();

      if( this.opts.closable ){
        this.elements.overall.removeClass('on');
        doc.find('.modal.on').removeClass('on');

        this.elements.modal = null;
      }
    },

    _alignCenter: function(e) {
      if ( !('transform' in e.style) ) {
        setTimeout(function() {
          var width   = e.offsetWidth;
          var height  = e.offsetHeight;

          e.style.marginLeft = -(width  / 2) + "px";
          e.style.marginTop  = -(height / 2) + "px";

        }, 100);
      }
    }
  };

}(window, document));
