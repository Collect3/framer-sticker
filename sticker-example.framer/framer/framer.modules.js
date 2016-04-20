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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGpmdW1iZXJnZXIvRG9jdW1lbnRzL1Byb2plY3RzL0ZyYW1lci9mcmFtZXItc3RpY2tlci9zdGlja2VyLWV4YW1wbGUuZnJhbWVyL21vZHVsZXMvU3RpY2tlci5jb2ZmZWUiLCIvVXNlcnMvZGpmdW1iZXJnZXIvRG9jdW1lbnRzL1Byb2plY3RzL0ZyYW1lci9mcmFtZXItc3RpY2tlci9zdGlja2VyLWV4YW1wbGUuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQSxzQ0FBQTtFQUFBOzs7QUFBTTs7O0VBQ1Esd0JBQUMsT0FBRDtBQUNaLFFBQUE7O01BQUEsVUFBVzs7O01BQ1gsT0FBTyxDQUFDLGtCQUFtQjs7O01BQzNCLE9BQU8sQ0FBQyxTQUFVLE9BQU8sQ0FBQzs7O01BQzFCLE9BQU8sQ0FBQyxRQUFTLE9BQU8sQ0FBQyxNQUFNLENBQUM7OztNQUNoQyxPQUFPLENBQUMsU0FBUyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQWYsR0FBd0IsT0FBTyxDQUFDLE9BQU8sQ0FBQzs7SUFDekQsSUFBRyxDQUFJLE9BQU8sQ0FBQyxDQUFmO01BQ0MsTUFBeUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUF4QyxFQUFNO01BQ04sT0FBTyxDQUFDLENBQVIsR0FBZSxlQUFILEdBQXlCLGVBQWUsQ0FBQyxDQUFoQixHQUFvQixlQUFlLENBQUMsTUFBN0QsR0FBMEUsRUFGdkY7O0lBR0EsZ0RBQU0sT0FBTjtJQUNBLElBQUMsQ0FBQyxPQUFGLEdBQVksT0FBTyxDQUFDO0lBQ3BCLElBQUMsQ0FBQyxPQUFPLENBQUMsTUFBVixHQUFtQjtJQUNuQixJQUFDLENBQUMsTUFBRixHQUFXLE9BQU8sQ0FBQztJQUNuQixJQUFDLENBQUMsTUFBTSxDQUFDLE1BQVQsR0FBa0I7SUFDbEIsSUFBQyxDQUFDLE1BQUYsQ0FBQTtFQWRZOzsyQkFlYixNQUFBLEdBQU8sU0FBQTtJQUNOLElBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBVixHQUFjLElBQUMsQ0FBQyxNQUFNLENBQUM7SUFDdkIsSUFBQyxDQUFDLE9BQU8sQ0FBQyxPQUFWLENBQUE7V0FDQSxJQUFDLENBQUMsTUFBTSxDQUFDLEtBQVQsR0FBa0IsSUFBQyxDQUFDO0VBSGQ7OzJCQUlQLFdBQUEsR0FBWSxTQUFBO0FBQ1gsV0FBTyxJQUFDLENBQUMsT0FBTyxDQUFDLE1BQVYsR0FBbUIsSUFBQyxDQUFDLE1BQU0sQ0FBQztFQUR4Qjs7OztHQXBCZ0I7O0FBdUJ2Qjs7O0VBQ1EsZ0NBQUMsT0FBRDs7TUFDWixVQUFXOzs7TUFDWCxPQUFPLENBQUMsbUJBQW9COzs7TUFDNUIsT0FBTyxDQUFDLFFBQVUsTUFBTSxDQUFDOzs7TUFDekIsT0FBTyxDQUFDLFNBQVUsTUFBTSxDQUFDOztJQUN6Qix3REFBTSxPQUFOO0lBQ0EsSUFBQyxDQUFDLE9BQU8sQ0FBQyxFQUFWLENBQWEsVUFBYixFQUF5QixDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUE7ZUFBRyxLQUFDLENBQUMsTUFBRixDQUFBO01BQUg7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXpCO0VBTlk7O21DQVNiLEdBQUEsR0FBSSxTQUFDLE1BQUQsRUFBUyxPQUFUO0FBQ0gsV0FBVyxJQUFBLGNBQUEsQ0FDUjtNQUFBLE1BQUEsRUFBUSxNQUFSO01BQ0EsT0FBQSxFQUFTLE9BRFQ7TUFFQSxNQUFBLEVBQVEsSUFBQyxDQUFDLE9BRlY7S0FEUTtFQURSOzttQ0FLSixRQUFBLEdBQVMsU0FBQTtBQUNSLFFBQUE7SUFBQSxLQUFBLEdBQVE7QUFDUjtBQUFBLFNBQUEsbUNBQUE7O01BQ0MsSUFBWSxDQUFJLE9BQU8sQ0FBQyxNQUF4QjtBQUFBLGlCQUFBOztNQUNBLEtBQUEsR0FBUTtNQUVSLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBZixHQUFtQjtNQUVuQixrQkFBQSxHQUFxQixPQUFPLENBQUM7TUFDN0IsUUFBQSxHQUFZLGtCQUFrQixDQUFDLENBQW5CLEdBQXVCLElBQUMsQ0FBQztNQUNyQyxJQUFrQixRQUFBLEdBQVcsQ0FBWCxJQUFnQixDQUFDLFFBQUEsR0FBVyxrQkFBa0IsQ0FBQyxNQUEvQixDQUFBLEdBQXlDLENBQTNFO0FBQUEsZUFBTyxRQUFQOztBQVJEO0FBU0EsV0FBTztFQVhDOzttQ0FhVCxNQUFBLEdBQU8sU0FBQTtBQUNOLFFBQUE7SUFBQSxJQUFVLElBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQW5CLEtBQTRCLENBQXRDO0FBQUEsYUFBQTs7SUFDQSxPQUFBLEdBQVUsSUFBQyxDQUFDLFFBQUYsQ0FBQTtJQUVWLFFBQUEsR0FBWSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQXBCLEdBQXdCLElBQUMsQ0FBQztXQUN0QyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQWYsR0FBbUIsSUFBSSxDQUFDLEdBQUwsQ0FBUyxJQUFJLENBQUMsR0FBTCxDQUFTLENBQUMsUUFBVixFQUFvQixPQUFPLENBQUMsTUFBUixHQUFpQixPQUFPLENBQUMsTUFBTSxDQUFDLE1BQXBELENBQVQsRUFBc0UsQ0FBdEU7RUFMYjs7OztHQTVCNkI7O0FBbUNyQyxNQUFNLENBQUMsT0FBUCxHQUFpQjtFQUNoQixzQkFBQSxFQUF3QixzQkFEUjtFQUVoQixjQUFBLEVBQWdCLGNBRkE7Ozs7O0FDdERqQixPQUFPLENBQUMsS0FBUixHQUFnQjs7QUFFaEIsT0FBTyxDQUFDLFVBQVIsR0FBcUIsU0FBQTtTQUNwQixLQUFBLENBQU0sdUJBQU47QUFEb0I7O0FBR3JCLE9BQU8sQ0FBQyxPQUFSLEdBQWtCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNsYXNzIFN0aWNrZXJTZWN0aW9uIGV4dGVuZHMgTGF5ZXJcblx0Y29uc3RydWN0b3I6IChvcHRpb25zKSAtPlxuXHRcdG9wdGlvbnMgPz0ge31cblx0XHRvcHRpb25zLmJhY2tncm91bmRDb2xvciA/PSBudWxsXG5cdFx0b3B0aW9ucy5wYXJlbnQgPz0gb3B0aW9ucy5zdXBlckxheWVyXG5cdFx0b3B0aW9ucy53aWR0aCA/PSBvcHRpb25zLnBhcmVudC53aWR0aFxuXHRcdG9wdGlvbnMuaGVpZ2h0Pz0gb3B0aW9ucy5oZWFkZXIuaGVpZ2h0ICsgb3B0aW9ucy5jb250ZW50LmhlaWdodFxuXHRcdGlmIG5vdCBvcHRpb25zLnlcblx0XHRcdFsuLi4sIGxhc3RTZWN0aW9uSXRlbV0gPSBvcHRpb25zLnBhcmVudC5jaGlsZHJlblxuXHRcdFx0b3B0aW9ucy55ID0gaWYgbGFzdFNlY3Rpb25JdGVtIHRoZW4gKGxhc3RTZWN0aW9uSXRlbS55ICsgbGFzdFNlY3Rpb25JdGVtLmhlaWdodCkgZWxzZSAwXHRcdFx0XG5cdFx0c3VwZXIgb3B0aW9uc1xuXHRcdEAuY29udGVudCA9IG9wdGlvbnMuY29udGVudFx0XHRcblx0XHRALmNvbnRlbnQucGFyZW50ID0gQFxuXHRcdEAuaGVhZGVyID0gb3B0aW9ucy5oZWFkZXJcblx0XHRALmhlYWRlci5wYXJlbnQgPSBAXG5cdFx0QC5sYXlvdXQoKVxuXHRsYXlvdXQ6KCkgLT5cblx0XHRALmNvbnRlbnQueSA9IEAuaGVhZGVyLmhlaWdodFxuXHRcdEAuY29udGVudC5jZW50ZXJYKClcblx0XHRALmhlYWRlci53aWR0aCAgPSBALndpZHRoXG5cdHRvdGFsSGVpZ2h0OigpIC0+XG5cdFx0cmV0dXJuIEAuY29udGVudC5oZWlnaHQgKyBALmhlYWRlci5oZWlnaHRcblxuY2xhc3MgU3RpY2tlclNjcm9sbENvbXBvbmVudCBleHRlbmRzIFNjcm9sbENvbXBvbmVudFxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnMpIC0+XG5cdFx0b3B0aW9ucyA/PSB7fVxuXHRcdG9wdGlvbnMuc2Nyb2xsSG9yaXpvbnRhbCA/PSBmYWxzZVxuXHRcdG9wdGlvbnMud2lkdGggID89IFNjcmVlbi53aWR0aFxuXHRcdG9wdGlvbnMuaGVpZ2h0ID89IFNjcmVlbi5oZWlnaHRcblx0XHRzdXBlciBvcHRpb25zXG5cdFx0QC5jb250ZW50Lm9uIFwiY2hhbmdlOnlcIiwgPT4gQC5sYXlvdXQoKVxuXHRcdFxuXHQjIENvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIGFkZCBhIHNlY3Rpb24gaW4gXG5cdGFkZDooaGVhZGVyLCBjb250ZW50KSAtPlxuXHRcdHJldHVybiBuZXcgU3RpY2tlclNlY3Rpb25cblx0XHRcdFx0XHRoZWFkZXI6IGhlYWRlclxuXHRcdFx0XHRcdGNvbnRlbnQ6IGNvbnRlbnRcblx0XHRcdFx0XHRwYXJlbnQ6IEAuY29udGVudFxuXHR0b3BDaGlsZDooKSAtPlxuXHRcdGZpcnN0ID0gbnVsbFxuXHRcdGZvciBzZWN0aW9uIGluIEAuY29udGVudC5jaGlsZHJlbiBieSAtMVxuXHRcdFx0Y29udGludWUgaWYgbm90IHNlY3Rpb24uaGVhZGVyXG5cdFx0XHRmaXJzdCA9IHNlY3Rpb25cblx0XHRcdCMgRW5zdXJlIGhlYWRlciBpcyByZXNldFxuXHRcdFx0c2VjdGlvbi5oZWFkZXIueSA9IDBcblx0XHRcdFxuXHRcdFx0c2VjdGlvblNjcmVlbkZyYW1lID0gc2VjdGlvbi5zY3JlZW5GcmFtZVxuXHRcdFx0Y29udGVudFkgPSAoc2VjdGlvblNjcmVlbkZyYW1lLnkgLSBALnkpXG5cdFx0XHRyZXR1cm4gc2VjdGlvbiBpZiBjb250ZW50WSA8IDAgJiYgKGNvbnRlbnRZICsgc2VjdGlvblNjcmVlbkZyYW1lLmhlaWdodCkgPiAwXG5cdFx0cmV0dXJuIGZpcnN0XG5cdFx0XG5cdGxheW91dDooKSAtPlxuXHRcdHJldHVybiBpZiBALmNvbnRlbnQuY2hpbGRyZW4uY291bnQgPT0gMFxuXHRcdHNlY3Rpb24gPSBALnRvcENoaWxkKClcblx0XHQjIFNoaWZ0IHRoZSBoZWFkZXIgYmFzZWQgb24gaG93IG11Y2ggaXQncyBvZmZzZXRcblx0XHRjb250ZW50WSA9IChzZWN0aW9uLnNjcmVlbkZyYW1lLnkgLSBALnkpXHRcdFxuXHRcdHNlY3Rpb24uaGVhZGVyLnkgPSBNYXRoLm1heChNYXRoLm1pbigtY29udGVudFksIHNlY3Rpb24uaGVpZ2h0IC0gc2VjdGlvbi5oZWFkZXIuaGVpZ2h0KSwgMClcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFN0aWNrZXJTY3JvbGxDb21wb25lbnQ6IFN0aWNrZXJTY3JvbGxDb21wb25lbnQsXG5cdFN0aWNrZXJTZWN0aW9uOiBTdGlja2VyU2VjdGlvblxufSIsIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iXX0=
