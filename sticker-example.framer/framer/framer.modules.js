require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Sticker":[function(require,module,exports){
var StickerScrollComponent, StickerSection,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

StickerSection = (function(superClass) {
  extend(StickerSection, superClass);

  function StickerSection(options) {
    var lastSectionItem, ref;
    if (options == null) {
      options = {};
    }
    if (options.backgroundColor == null) {
      options.backgroundColor = null;
    }
    if (options.parent == null) {
      options.parent = options.superLayer;
    }
    if (options.width == null) {
      options.width = options.parent.width;
    }
    if (options.height == null) {
      options.height = options.header.height + options.content.height;
    }
    if (!options.y) {
      ref = options.parent.children, lastSectionItem = ref[ref.length - 1];
      options.y = lastSectionItem ? lastSectionItem.y + lastSectionItem.height : 0;
    }
    StickerSection.__super__.constructor.call(this, options);
    this.content = options.content;
    this.content.parent = this;
    this.header = options.header;
    this.header.parent = this;
    this.layout();
  }

  StickerSection.prototype.layout = function() {
    return this.content.y = this.header.height;
  };

  StickerSection.prototype.totalHeight = function() {
    return this.content.height + this.header.height;
  };

  return StickerSection;

})(Layer);

StickerScrollComponent = (function(superClass) {
  extend(StickerScrollComponent, superClass);

  function StickerScrollComponent(options) {
    if (options == null) {
      options = {};
    }
    if (options.scrollHorizontal == null) {
      options.scrollHorizontal = false;
    }
    if (options.width == null) {
      options.width = Screen.width;
    }
    if (options.height == null) {
      options.height = Screen.height;
    }
    StickerScrollComponent.__super__.constructor.call(this, options);
    this.content.on("change:y", (function(_this) {
      return function() {
        return _this.layout();
      };
    })(this));
  }

  StickerScrollComponent.prototype.add = function(header, content) {
    return new StickerSection({
      header: header,
      content: content,
      parent: this.content
    });
  };

  StickerScrollComponent.prototype.topChild = function() {
    var contentY, first, i, ref, section, sectionScreenFrame;
    first = null;
    ref = this.content.children;
    for (i = ref.length - 1; i >= 0; i += -1) {
      section = ref[i];
      if (!section.header) {
        continue;
      }
      first = section;
      section.header.y = 0;
      sectionScreenFrame = section.screenFrame;
      contentY = sectionScreenFrame.y - this.y;
      if (contentY < 0 && (contentY + sectionScreenFrame.height) > 0) {
        return section;
      }
    }
    return first;
  };

  StickerScrollComponent.prototype.layout = function() {
    var contentY, section;
    if (this.content.children.count === 0) {
      return;
    }
    section = this.topChild();
    contentY = section.screenFrame.y - this.y;
    return section.header.y = Math.max(Math.min(-contentY, section.height - section.header.height), 0);
  };

  return StickerScrollComponent;

})(ScrollComponent);

module.exports = {
  StickerScrollComponent: StickerScrollComponent,
  StickerSection: StickerSection
};


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGpmdW1iZXJnZXIvRG9jdW1lbnRzL1Byb2plY3RzL0ZyYW1lci9mcmFtZXItc3RpY2tlci9zdGlja2VyLWV4YW1wbGUuZnJhbWVyL21vZHVsZXMvU3RpY2tlci5jb2ZmZWUiLCIvVXNlcnMvZGpmdW1iZXJnZXIvRG9jdW1lbnRzL1Byb2plY3RzL0ZyYW1lci9mcmFtZXItc3RpY2tlci9zdGlja2VyLWV4YW1wbGUuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQSxzQ0FBQTtFQUFBOzs7QUFBTTs7O0VBQ1Esd0JBQUMsT0FBRDtBQUNaLFFBQUE7O01BQUEsVUFBVzs7O01BQ1gsT0FBTyxDQUFDLGtCQUFtQjs7O01BQzNCLE9BQU8sQ0FBQyxTQUFVLE9BQU8sQ0FBQzs7O01BQzFCLE9BQU8sQ0FBQyxRQUFTLE9BQU8sQ0FBQyxNQUFNLENBQUM7OztNQUNoQyxPQUFPLENBQUMsU0FBUyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQWYsR0FBd0IsT0FBTyxDQUFDLE9BQU8sQ0FBQzs7SUFDekQsSUFBRyxDQUFJLE9BQU8sQ0FBQyxDQUFmO01BQ0MsTUFBeUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUF4QyxFQUFNO01BQ04sT0FBTyxDQUFDLENBQVIsR0FBZSxlQUFILEdBQXlCLGVBQWUsQ0FBQyxDQUFoQixHQUFvQixlQUFlLENBQUMsTUFBN0QsR0FBMEUsRUFGdkY7O0lBR0EsZ0RBQU0sT0FBTjtJQUNBLElBQUMsQ0FBQyxPQUFGLEdBQVksT0FBTyxDQUFDO0lBQ3BCLElBQUMsQ0FBQyxPQUFPLENBQUMsTUFBVixHQUFtQjtJQUNuQixJQUFDLENBQUMsTUFBRixHQUFXLE9BQU8sQ0FBQztJQUNuQixJQUFDLENBQUMsTUFBTSxDQUFDLE1BQVQsR0FBa0I7SUFDbEIsSUFBQyxDQUFDLE1BQUYsQ0FBQTtFQWRZOzsyQkFlYixNQUFBLEdBQU8sU0FBQTtXQUNOLElBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBVixHQUFjLElBQUMsQ0FBQyxNQUFNLENBQUM7RUFEakI7OzJCQUVQLFdBQUEsR0FBWSxTQUFBO0FBQ1gsV0FBTyxJQUFDLENBQUMsT0FBTyxDQUFDLE1BQVYsR0FBbUIsSUFBQyxDQUFDLE1BQU0sQ0FBQztFQUR4Qjs7OztHQWxCZ0I7O0FBcUJ2Qjs7O0VBQ1EsZ0NBQUMsT0FBRDs7TUFDWixVQUFXOzs7TUFDWCxPQUFPLENBQUMsbUJBQW9COzs7TUFDNUIsT0FBTyxDQUFDLFFBQVUsTUFBTSxDQUFDOzs7TUFDekIsT0FBTyxDQUFDLFNBQVUsTUFBTSxDQUFDOztJQUN6Qix3REFBTSxPQUFOO0lBQ0EsSUFBQyxDQUFDLE9BQU8sQ0FBQyxFQUFWLENBQWEsVUFBYixFQUF5QixDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUE7ZUFBRyxLQUFDLENBQUMsTUFBRixDQUFBO01BQUg7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXpCO0VBTlk7O21DQVNiLEdBQUEsR0FBSSxTQUFDLE1BQUQsRUFBUyxPQUFUO0FBQ0gsV0FBVyxJQUFBLGNBQUEsQ0FDUjtNQUFBLE1BQUEsRUFBUSxNQUFSO01BQ0EsT0FBQSxFQUFTLE9BRFQ7TUFFQSxNQUFBLEVBQVEsSUFBQyxDQUFDLE9BRlY7S0FEUTtFQURSOzttQ0FLSixRQUFBLEdBQVMsU0FBQTtBQUNSLFFBQUE7SUFBQSxLQUFBLEdBQVE7QUFDUjtBQUFBLFNBQUEsbUNBQUE7O01BQ0MsSUFBWSxDQUFJLE9BQU8sQ0FBQyxNQUF4QjtBQUFBLGlCQUFBOztNQUNBLEtBQUEsR0FBUTtNQUVSLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBZixHQUFtQjtNQUVuQixrQkFBQSxHQUFxQixPQUFPLENBQUM7TUFDN0IsUUFBQSxHQUFZLGtCQUFrQixDQUFDLENBQW5CLEdBQXVCLElBQUMsQ0FBQztNQUNyQyxJQUFrQixRQUFBLEdBQVcsQ0FBWCxJQUFnQixDQUFDLFFBQUEsR0FBVyxrQkFBa0IsQ0FBQyxNQUEvQixDQUFBLEdBQXlDLENBQTNFO0FBQUEsZUFBTyxRQUFQOztBQVJEO0FBU0EsV0FBTztFQVhDOzttQ0FhVCxNQUFBLEdBQU8sU0FBQTtBQUNOLFFBQUE7SUFBQSxJQUFVLElBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQW5CLEtBQTRCLENBQXRDO0FBQUEsYUFBQTs7SUFDQSxPQUFBLEdBQVUsSUFBQyxDQUFDLFFBQUYsQ0FBQTtJQUVWLFFBQUEsR0FBWSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQXBCLEdBQXdCLElBQUMsQ0FBQztXQUN0QyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQWYsR0FBbUIsSUFBSSxDQUFDLEdBQUwsQ0FBUyxJQUFJLENBQUMsR0FBTCxDQUFTLENBQUMsUUFBVixFQUFvQixPQUFPLENBQUMsTUFBUixHQUFpQixPQUFPLENBQUMsTUFBTSxDQUFDLE1BQXBELENBQVQsRUFBc0UsQ0FBdEU7RUFMYjs7OztHQTVCNkI7O0FBbUNyQyxNQUFNLENBQUMsT0FBUCxHQUFpQjtFQUNoQixzQkFBQSxFQUF3QixzQkFEUjtFQUVoQixjQUFBLEVBQWdCLGNBRkE7Ozs7O0FDcERqQixPQUFPLENBQUMsS0FBUixHQUFnQjs7QUFFaEIsT0FBTyxDQUFDLFVBQVIsR0FBcUIsU0FBQTtTQUNwQixLQUFBLENBQU0sdUJBQU47QUFEb0I7O0FBR3JCLE9BQU8sQ0FBQyxPQUFSLEdBQWtCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNsYXNzIFN0aWNrZXJTZWN0aW9uIGV4dGVuZHMgTGF5ZXJcblx0Y29uc3RydWN0b3I6IChvcHRpb25zKSAtPlxuXHRcdG9wdGlvbnMgPz0ge31cblx0XHRvcHRpb25zLmJhY2tncm91bmRDb2xvciA/PSBudWxsXG5cdFx0b3B0aW9ucy5wYXJlbnQgPz0gb3B0aW9ucy5zdXBlckxheWVyXG5cdFx0b3B0aW9ucy53aWR0aCA/PSBvcHRpb25zLnBhcmVudC53aWR0aFxuXHRcdG9wdGlvbnMuaGVpZ2h0Pz0gb3B0aW9ucy5oZWFkZXIuaGVpZ2h0ICsgb3B0aW9ucy5jb250ZW50LmhlaWdodFxuXHRcdGlmIG5vdCBvcHRpb25zLnlcblx0XHRcdFsuLi4sIGxhc3RTZWN0aW9uSXRlbV0gPSBvcHRpb25zLnBhcmVudC5jaGlsZHJlblxuXHRcdFx0b3B0aW9ucy55ID0gaWYgbGFzdFNlY3Rpb25JdGVtIHRoZW4gKGxhc3RTZWN0aW9uSXRlbS55ICsgbGFzdFNlY3Rpb25JdGVtLmhlaWdodCkgZWxzZSAwXHRcdFx0XG5cdFx0c3VwZXIgb3B0aW9uc1xuXHRcdEAuY29udGVudCA9IG9wdGlvbnMuY29udGVudFx0XHRcblx0XHRALmNvbnRlbnQucGFyZW50ID0gQFxuXHRcdEAuaGVhZGVyID0gb3B0aW9ucy5oZWFkZXJcblx0XHRALmhlYWRlci5wYXJlbnQgPSBAXG5cdFx0QC5sYXlvdXQoKVxuXHRsYXlvdXQ6KCkgLT5cblx0XHRALmNvbnRlbnQueSA9IEAuaGVhZGVyLmhlaWdodFxuXHR0b3RhbEhlaWdodDooKSAtPlxuXHRcdHJldHVybiBALmNvbnRlbnQuaGVpZ2h0ICsgQC5oZWFkZXIuaGVpZ2h0XG5cbmNsYXNzIFN0aWNrZXJTY3JvbGxDb21wb25lbnQgZXh0ZW5kcyBTY3JvbGxDb21wb25lbnRcblx0Y29uc3RydWN0b3I6IChvcHRpb25zKSAtPlxuXHRcdG9wdGlvbnMgPz0ge31cblx0XHRvcHRpb25zLnNjcm9sbEhvcml6b250YWwgPz0gZmFsc2Vcblx0XHRvcHRpb25zLndpZHRoICA/PSBTY3JlZW4ud2lkdGhcblx0XHRvcHRpb25zLmhlaWdodCA/PSBTY3JlZW4uaGVpZ2h0XG5cdFx0c3VwZXIgb3B0aW9uc1xuXHRcdEAuY29udGVudC5vbiBcImNoYW5nZTp5XCIsID0+IEAubGF5b3V0KClcblx0XHRcblx0IyBDb252ZW5pZW5jZSBmdW5jdGlvbiB0byBhZGQgYSBzZWN0aW9uIGluIFxuXHRhZGQ6KGhlYWRlciwgY29udGVudCkgLT5cblx0XHRyZXR1cm4gbmV3IFN0aWNrZXJTZWN0aW9uXG5cdFx0XHRcdFx0aGVhZGVyOiBoZWFkZXJcblx0XHRcdFx0XHRjb250ZW50OiBjb250ZW50XG5cdFx0XHRcdFx0cGFyZW50OiBALmNvbnRlbnRcblx0dG9wQ2hpbGQ6KCkgLT5cblx0XHRmaXJzdCA9IG51bGxcblx0XHRmb3Igc2VjdGlvbiBpbiBALmNvbnRlbnQuY2hpbGRyZW4gYnkgLTFcblx0XHRcdGNvbnRpbnVlIGlmIG5vdCBzZWN0aW9uLmhlYWRlclxuXHRcdFx0Zmlyc3QgPSBzZWN0aW9uXG5cdFx0XHQjIEVuc3VyZSBoZWFkZXIgaXMgcmVzZXRcblx0XHRcdHNlY3Rpb24uaGVhZGVyLnkgPSAwXG5cdFx0XHRcblx0XHRcdHNlY3Rpb25TY3JlZW5GcmFtZSA9IHNlY3Rpb24uc2NyZWVuRnJhbWVcblx0XHRcdGNvbnRlbnRZID0gKHNlY3Rpb25TY3JlZW5GcmFtZS55IC0gQC55KVxuXHRcdFx0cmV0dXJuIHNlY3Rpb24gaWYgY29udGVudFkgPCAwICYmIChjb250ZW50WSArIHNlY3Rpb25TY3JlZW5GcmFtZS5oZWlnaHQpID4gMFxuXHRcdHJldHVybiBmaXJzdFxuXHRcdFxuXHRsYXlvdXQ6KCkgLT5cblx0XHRyZXR1cm4gaWYgQC5jb250ZW50LmNoaWxkcmVuLmNvdW50ID09IDBcblx0XHRzZWN0aW9uID0gQC50b3BDaGlsZCgpXG5cdFx0IyBTaGlmdCB0aGUgaGVhZGVyIGJhc2VkIG9uIGhvdyBtdWNoIGl0J3Mgb2Zmc2V0XG5cdFx0Y29udGVudFkgPSAoc2VjdGlvbi5zY3JlZW5GcmFtZS55IC0gQC55KVx0XHRcblx0XHRzZWN0aW9uLmhlYWRlci55ID0gTWF0aC5tYXgoTWF0aC5taW4oLWNvbnRlbnRZLCBzZWN0aW9uLmhlaWdodCAtIHNlY3Rpb24uaGVhZGVyLmhlaWdodCksIDApXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRTdGlja2VyU2Nyb2xsQ29tcG9uZW50OiBTdGlja2VyU2Nyb2xsQ29tcG9uZW50LFxuXHRTdGlja2VyU2VjdGlvbjogU3RpY2tlclNlY3Rpb25cbn0iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIl19
