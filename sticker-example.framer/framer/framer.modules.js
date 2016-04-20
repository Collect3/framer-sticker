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
    this.content.y = this.header.height;
    this.content.centerX();
    return this.header.width = this.width;
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
    var first, i, ref, section, sectionScreenFrame;
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
      if (sectionScreenFrame.y < 0 && (sectionScreenFrame.y + sectionScreenFrame.height) > 0) {
        return section;
      }
    }
    return first;
  };

  StickerScrollComponent.prototype.layout = function() {
    var section;
    if (this.content.children.count === 0) {
      return;
    }
    section = this.topChild();
    return section.header.y = Math.max(Math.min(-section.screenFrame.y, section.height - section.header.height), 0);
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGpmdW1iZXJnZXIvRG9jdW1lbnRzL1Byb2plY3RzL0ZyYW1lci9mcmFtZXItc3RpY2tlci9zdGlja2VyLWV4YW1wbGUuZnJhbWVyL21vZHVsZXMvU3RpY2tlci5jb2ZmZWUiLCIvVXNlcnMvZGpmdW1iZXJnZXIvRG9jdW1lbnRzL1Byb2plY3RzL0ZyYW1lci9mcmFtZXItc3RpY2tlci9zdGlja2VyLWV4YW1wbGUuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQSxzQ0FBQTtFQUFBOzs7QUFBTTs7O0VBQ1Esd0JBQUMsT0FBRDtBQUNaLFFBQUE7O01BQUEsVUFBVzs7O01BQ1gsT0FBTyxDQUFDLGtCQUFtQjs7O01BQzNCLE9BQU8sQ0FBQyxTQUFVLE9BQU8sQ0FBQzs7O01BQzFCLE9BQU8sQ0FBQyxRQUFTLE9BQU8sQ0FBQyxNQUFNLENBQUM7OztNQUNoQyxPQUFPLENBQUMsU0FBUyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQWYsR0FBd0IsT0FBTyxDQUFDLE9BQU8sQ0FBQzs7SUFDekQsSUFBRyxDQUFJLE9BQU8sQ0FBQyxDQUFmO01BQ0MsTUFBeUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUF4QyxFQUFNO01BQ04sT0FBTyxDQUFDLENBQVIsR0FBZSxlQUFILEdBQXlCLGVBQWUsQ0FBQyxDQUFoQixHQUFvQixlQUFlLENBQUMsTUFBN0QsR0FBMEUsRUFGdkY7O0lBR0EsZ0RBQU0sT0FBTjtJQUNBLElBQUMsQ0FBQyxPQUFGLEdBQVksT0FBTyxDQUFDO0lBQ3BCLElBQUMsQ0FBQyxPQUFPLENBQUMsTUFBVixHQUFtQjtJQUNuQixJQUFDLENBQUMsTUFBRixHQUFXLE9BQU8sQ0FBQztJQUNuQixJQUFDLENBQUMsTUFBTSxDQUFDLE1BQVQsR0FBa0I7SUFDbEIsSUFBQyxDQUFDLE1BQUYsQ0FBQTtFQWRZOzsyQkFlYixNQUFBLEdBQU8sU0FBQTtJQUNOLElBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBVixHQUFjLElBQUMsQ0FBQyxNQUFNLENBQUM7SUFDdkIsSUFBQyxDQUFDLE9BQU8sQ0FBQyxPQUFWLENBQUE7V0FDQSxJQUFDLENBQUMsTUFBTSxDQUFDLEtBQVQsR0FBa0IsSUFBQyxDQUFDO0VBSGQ7OzJCQUlQLFdBQUEsR0FBWSxTQUFBO0FBQ1gsV0FBTyxJQUFDLENBQUMsT0FBTyxDQUFDLE1BQVYsR0FBbUIsSUFBQyxDQUFDLE1BQU0sQ0FBQztFQUR4Qjs7OztHQXBCZ0I7O0FBdUJ2Qjs7O0VBQ1EsZ0NBQUMsT0FBRDs7TUFDWixVQUFXOzs7TUFDWCxPQUFPLENBQUMsbUJBQW9COzs7TUFDNUIsT0FBTyxDQUFDLFFBQVUsTUFBTSxDQUFDOzs7TUFDekIsT0FBTyxDQUFDLFNBQVUsTUFBTSxDQUFDOztJQUN6Qix3REFBTSxPQUFOO0lBQ0EsSUFBQyxDQUFDLE9BQU8sQ0FBQyxFQUFWLENBQWEsVUFBYixFQUF5QixDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUE7ZUFBRyxLQUFDLENBQUMsTUFBRixDQUFBO01BQUg7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXpCO0VBTlk7O21DQVNiLEdBQUEsR0FBSSxTQUFDLE1BQUQsRUFBUyxPQUFUO0FBQ0gsV0FBVyxJQUFBLGNBQUEsQ0FDUjtNQUFBLE1BQUEsRUFBUSxNQUFSO01BQ0EsT0FBQSxFQUFTLE9BRFQ7TUFFQSxNQUFBLEVBQVEsSUFBQyxDQUFDLE9BRlY7S0FEUTtFQURSOzttQ0FLSixRQUFBLEdBQVMsU0FBQTtBQUNSLFFBQUE7SUFBQSxLQUFBLEdBQVE7QUFDUjtBQUFBLFNBQUEsbUNBQUE7O01BQ0MsSUFBWSxDQUFJLE9BQU8sQ0FBQyxNQUF4QjtBQUFBLGlCQUFBOztNQUNBLEtBQUEsR0FBUTtNQUVSLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBZixHQUFtQjtNQUVuQixrQkFBQSxHQUFxQixPQUFPLENBQUM7TUFDN0IsSUFBa0Isa0JBQWtCLENBQUMsQ0FBbkIsR0FBdUIsQ0FBdkIsSUFBNEIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFuQixHQUF1QixrQkFBa0IsQ0FBQyxNQUEzQyxDQUFBLEdBQXFELENBQW5HO0FBQUEsZUFBTyxRQUFQOztBQVBEO0FBUUEsV0FBTztFQVZDOzttQ0FZVCxNQUFBLEdBQU8sU0FBQTtBQUNOLFFBQUE7SUFBQSxJQUFVLElBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQW5CLEtBQTRCLENBQXRDO0FBQUEsYUFBQTs7SUFDQSxPQUFBLEdBQVUsSUFBQyxDQUFDLFFBQUYsQ0FBQTtXQUVWLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBZixHQUFtQixJQUFJLENBQUMsR0FBTCxDQUFTLElBQUksQ0FBQyxHQUFMLENBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQTlCLEVBQWlDLE9BQU8sQ0FBQyxNQUFSLEdBQWlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBakUsQ0FBVCxFQUFtRixDQUFuRjtFQUpiOzs7O0dBM0I2Qjs7QUFpQ3JDLE1BQU0sQ0FBQyxPQUFQLEdBQWlCO0VBQ2hCLHNCQUFBLEVBQXdCLHNCQURSO0VBRWhCLGNBQUEsRUFBZ0IsY0FGQTs7Ozs7QUNwRGpCLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUVoQixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTjtBQURvQjs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgU3RpY2tlclNlY3Rpb24gZXh0ZW5kcyBMYXllclxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnMpIC0+XG5cdFx0b3B0aW9ucyA/PSB7fVxuXHRcdG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID89IG51bGxcblx0XHRvcHRpb25zLnBhcmVudCA/PSBvcHRpb25zLnN1cGVyTGF5ZXJcblx0XHRvcHRpb25zLndpZHRoID89IG9wdGlvbnMucGFyZW50LndpZHRoXG5cdFx0b3B0aW9ucy5oZWlnaHQ/PSBvcHRpb25zLmhlYWRlci5oZWlnaHQgKyBvcHRpb25zLmNvbnRlbnQuaGVpZ2h0XG5cdFx0aWYgbm90IG9wdGlvbnMueVxuXHRcdFx0Wy4uLiwgbGFzdFNlY3Rpb25JdGVtXSA9IG9wdGlvbnMucGFyZW50LmNoaWxkcmVuXG5cdFx0XHRvcHRpb25zLnkgPSBpZiBsYXN0U2VjdGlvbkl0ZW0gdGhlbiAobGFzdFNlY3Rpb25JdGVtLnkgKyBsYXN0U2VjdGlvbkl0ZW0uaGVpZ2h0KSBlbHNlIDBcdFx0XHRcblx0XHRzdXBlciBvcHRpb25zXG5cdFx0QC5jb250ZW50ID0gb3B0aW9ucy5jb250ZW50XHRcdFxuXHRcdEAuY29udGVudC5wYXJlbnQgPSBAXG5cdFx0QC5oZWFkZXIgPSBvcHRpb25zLmhlYWRlclxuXHRcdEAuaGVhZGVyLnBhcmVudCA9IEBcblx0XHRALmxheW91dCgpXG5cdGxheW91dDooKSAtPlxuXHRcdEAuY29udGVudC55ID0gQC5oZWFkZXIuaGVpZ2h0XG5cdFx0QC5jb250ZW50LmNlbnRlclgoKVxuXHRcdEAuaGVhZGVyLndpZHRoICA9IEAud2lkdGhcblx0dG90YWxIZWlnaHQ6KCkgLT5cblx0XHRyZXR1cm4gQC5jb250ZW50LmhlaWdodCArIEAuaGVhZGVyLmhlaWdodFxuXG5jbGFzcyBTdGlja2VyU2Nyb2xsQ29tcG9uZW50IGV4dGVuZHMgU2Nyb2xsQ29tcG9uZW50XG5cdGNvbnN0cnVjdG9yOiAob3B0aW9ucykgLT5cblx0XHRvcHRpb25zID89IHt9XG5cdFx0b3B0aW9ucy5zY3JvbGxIb3Jpem9udGFsID89IGZhbHNlXG5cdFx0b3B0aW9ucy53aWR0aCAgPz0gU2NyZWVuLndpZHRoXG5cdFx0b3B0aW9ucy5oZWlnaHQgPz0gU2NyZWVuLmhlaWdodFxuXHRcdHN1cGVyIG9wdGlvbnNcblx0XHRALmNvbnRlbnQub24gXCJjaGFuZ2U6eVwiLCA9PiBALmxheW91dCgpXG5cdFx0XG5cdCMgQ29udmVuaWVuY2UgZnVuY3Rpb24gdG8gYWRkIGEgc2VjdGlvbiBpbiBcblx0YWRkOihoZWFkZXIsIGNvbnRlbnQpIC0+XG5cdFx0cmV0dXJuIG5ldyBTdGlja2VyU2VjdGlvblxuXHRcdFx0XHRcdGhlYWRlcjogaGVhZGVyXG5cdFx0XHRcdFx0Y29udGVudDogY29udGVudFxuXHRcdFx0XHRcdHBhcmVudDogQC5jb250ZW50XG5cdHRvcENoaWxkOigpIC0+XG5cdFx0Zmlyc3QgPSBudWxsXG5cdFx0Zm9yIHNlY3Rpb24gaW4gQC5jb250ZW50LmNoaWxkcmVuIGJ5IC0xXG5cdFx0XHRjb250aW51ZSBpZiBub3Qgc2VjdGlvbi5oZWFkZXJcblx0XHRcdGZpcnN0ID0gc2VjdGlvblxuXHRcdFx0IyBFbnN1cmUgaGVhZGVyIGlzIHJlc2V0XG5cdFx0XHRzZWN0aW9uLmhlYWRlci55ID0gMFxuXHRcdFx0XG5cdFx0XHRzZWN0aW9uU2NyZWVuRnJhbWUgPSBzZWN0aW9uLnNjcmVlbkZyYW1lXG5cdFx0XHRyZXR1cm4gc2VjdGlvbiBpZiBzZWN0aW9uU2NyZWVuRnJhbWUueSA8IDAgJiYgKHNlY3Rpb25TY3JlZW5GcmFtZS55ICsgc2VjdGlvblNjcmVlbkZyYW1lLmhlaWdodCkgPiAwXG5cdFx0cmV0dXJuIGZpcnN0XG5cdFx0XG5cdGxheW91dDooKSAtPlxuXHRcdHJldHVybiBpZiBALmNvbnRlbnQuY2hpbGRyZW4uY291bnQgPT0gMFxuXHRcdHNlY3Rpb24gPSBALnRvcENoaWxkKClcblx0XHQjIFNoaWZ0IHRoZSBoZWFkZXIgYmFzZWQgb24gaG93IG11Y2ggaXQncyBvZmZzZXRcblx0XHRzZWN0aW9uLmhlYWRlci55ID0gTWF0aC5tYXgoTWF0aC5taW4oLXNlY3Rpb24uc2NyZWVuRnJhbWUueSwgc2VjdGlvbi5oZWlnaHQgLSBzZWN0aW9uLmhlYWRlci5oZWlnaHQpLCAwKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0U3RpY2tlclNjcm9sbENvbXBvbmVudDogU3RpY2tlclNjcm9sbENvbXBvbmVudCxcblx0U3RpY2tlclNlY3Rpb246IFN0aWNrZXJTZWN0aW9uXG59IiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSJdfQ==
