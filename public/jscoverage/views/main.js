/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['views/main.js']) {
  _$jscoverage['views/main.js'] = [];
  _$jscoverage['views/main.js'][1] = 0;
  _$jscoverage['views/main.js'][5] = 0;
  _$jscoverage['views/main.js'][17] = 0;
  _$jscoverage['views/main.js'][19] = 0;
  _$jscoverage['views/main.js'][23] = 0;
  _$jscoverage['views/main.js'][25] = 0;
  _$jscoverage['views/main.js'][27] = 0;
  _$jscoverage['views/main.js'][29] = 0;
  _$jscoverage['views/main.js'][31] = 0;
  _$jscoverage['views/main.js'][35] = 0;
  _$jscoverage['views/main.js'][36] = 0;
  _$jscoverage['views/main.js'][46] = 0;
  _$jscoverage['views/main.js'][54] = 0;
  _$jscoverage['views/main.js'][58] = 0;
  _$jscoverage['views/main.js'][64] = 0;
  _$jscoverage['views/main.js'][68] = 0;
  _$jscoverage['views/main.js'][74] = 0;
  _$jscoverage['views/main.js'][76] = 0;
  _$jscoverage['views/main.js'][79] = 0;
  _$jscoverage['views/main.js'][80] = 0;
  _$jscoverage['views/main.js'][83] = 0;
  _$jscoverage['views/main.js'][85] = 0;
  _$jscoverage['views/main.js'][90] = 0;
  _$jscoverage['views/main.js'][98] = 0;
  _$jscoverage['views/main.js'][104] = 0;
  _$jscoverage['views/main.js'][106] = 0;
  _$jscoverage['views/main.js'][108] = 0;
  _$jscoverage['views/main.js'][110] = 0;
  _$jscoverage['views/main.js'][116] = 0;
  _$jscoverage['views/main.js'][120] = 0;
  _$jscoverage['views/main.js'][122] = 0;
  _$jscoverage['views/main.js'][124] = 0;
  _$jscoverage['views/main.js'][128] = 0;
}
_$jscoverage['views/main.js'].source = ["define<span class=\"k\">([</span>","  <span class=\"s\">'backbone'</span><span class=\"k\">,</span> <span class=\"s\">'underscore'</span><span class=\"k\">,</span> <span class=\"s\">'jquery'</span><span class=\"k\">,</span> <span class=\"s\">'utils'</span><span class=\"k\">,</span>","  <span class=\"s\">'collections/month'</span><span class=\"k\">,</span>  <span class=\"s\">'text!../../templates/main.html'</span>","<span class=\"k\">],</span> <span class=\"k\">function</span><span class=\"k\">(</span>Backbone<span class=\"k\">,</span> _<span class=\"k\">,</span> $<span class=\"k\">,</span> Utils<span class=\"k\">,</span> month<span class=\"k\">,</span> template<span class=\"k\">)</span><span class=\"k\">{</span>","  <span class=\"k\">return</span> Backbone<span class=\"k\">.</span>View<span class=\"k\">.</span>extend<span class=\"k\">(</span><span class=\"k\">{</span>","    el<span class=\"k\">:</span> <span class=\"s\">'#timesheet'</span><span class=\"k\">,</span>","","    template<span class=\"k\">:</span> _<span class=\"k\">.</span>template<span class=\"k\">(</span> template <span class=\"k\">),</span>","","    events<span class=\"k\">:</span> <span class=\"k\">{</span>","      <span class=\"s\">'click #calendar li'</span><span class=\"k\">:</span> <span class=\"s\">'dayClick'</span><span class=\"k\">,</span>","      <span class=\"s\">'blur #entrance, #exit'</span><span class=\"k\">:</span> <span class=\"s\">'change'</span><span class=\"k\">,</span>","      <span class=\"s\">'click #reset'</span><span class=\"k\">:</span> <span class=\"s\">'reset'</span>","    <span class=\"k\">}</span><span class=\"k\">,</span>","","    initialize<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>","      <span class=\"k\">var</span> o <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>options<span class=\"k\">;</span>","","      <span class=\"k\">this</span><span class=\"k\">.</span>collection <span class=\"k\">=</span> <span class=\"k\">new</span> <span class=\"k\">(</span> month<span class=\"k\">(</span>","        o<span class=\"k\">.</span>year<span class=\"k\">,</span> o<span class=\"k\">.</span>month","      <span class=\"k\">)</span> <span class=\"k\">);</span>","","      <span class=\"k\">this</span><span class=\"k\">.</span>collection<span class=\"k\">.</span>populate<span class=\"k\">();</span>","","      <span class=\"k\">this</span><span class=\"k\">.</span>model <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>getModel<span class=\"k\">();</span>","","      <span class=\"k\">this</span><span class=\"k\">.</span>model<span class=\"k\">.</span>bind<span class=\"k\">(</span><span class=\"s\">'error'</span><span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">.</span>error<span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">);</span>","","      <span class=\"k\">this</span><span class=\"k\">.</span>model<span class=\"k\">.</span>bind<span class=\"k\">(</span><span class=\"s\">'change'</span><span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">.</span>render<span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">);</span>","","      <span class=\"k\">this</span><span class=\"k\">.</span>model<span class=\"k\">.</span>trigger<span class=\"k\">(</span><span class=\"s\">'change'</span><span class=\"k\">);</span>","    <span class=\"k\">}</span><span class=\"k\">,</span>","","    render<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>","      <span class=\"k\">function</span> klass<span class=\"k\">(</span>model<span class=\"k\">)</span><span class=\"k\">{</span>","        <span class=\"k\">return</span> <span class=\"k\">[</span>","          <span class=\"s\">'class=\"'</span><span class=\"k\">,</span>","          model<span class=\"k\">.</span>today<span class=\"k\">()</span> <span class=\"k\">?</span> <span class=\"s\">'today'</span> <span class=\"k\">:</span> <span class=\"s\">''</span><span class=\"k\">,</span>","          Utils<span class=\"k\">.</span>isSameDay<span class=\"k\">(</span>","            model<span class=\"k\">.</span>get<span class=\"k\">(</span><span class=\"s\">'date'</span><span class=\"k\">),</span> <span class=\"k\">this</span><span class=\"k\">.</span>get<span class=\"k\">(</span><span class=\"s\">'date'</span><span class=\"k\">)</span>","          <span class=\"k\">)</span> <span class=\"k\">?</span> <span class=\"s\">'active'</span> <span class=\"k\">:</span> <span class=\"s\">''</span><span class=\"k\">,</span>","          <span class=\"s\">'\"'</span>","        <span class=\"k\">].</span>join<span class=\"k\">(</span><span class=\"s\">' '</span><span class=\"k\">);</span>","      <span class=\"k\">}</span>","","      <span class=\"k\">this</span><span class=\"k\">.</span>$el<span class=\"k\">.</span>html<span class=\"k\">(</span> <span class=\"k\">this</span><span class=\"k\">.</span>template<span class=\"k\">(</span> _<span class=\"k\">.</span>extend<span class=\"k\">(</span><span class=\"k\">{</span>","        active<span class=\"k\">:</span> <span class=\"k\">this</span><span class=\"k\">.</span>model<span class=\"k\">.</span>attributes<span class=\"k\">,</span>","        models<span class=\"k\">:</span> <span class=\"k\">this</span><span class=\"k\">.</span>collection<span class=\"k\">.</span>models<span class=\"k\">,</span>","        abbr<span class=\"k\">:</span> _<span class=\"k\">.</span>bind<span class=\"k\">(</span>Utils<span class=\"k\">.</span>getDayAbbr<span class=\"k\">,</span> Utils<span class=\"k\">),</span>","        name<span class=\"k\">:</span> _<span class=\"k\">.</span>bind<span class=\"k\">(</span>Utils<span class=\"k\">.</span>getMonthName<span class=\"k\">,</span> Utils<span class=\"k\">),</span>","        makeClass<span class=\"k\">:</span> _<span class=\"k\">.</span>bind<span class=\"k\">(</span>klass<span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">.</span>model<span class=\"k\">)</span>","      <span class=\"k\">}</span><span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">.</span>options <span class=\"k\">)</span> <span class=\"k\">)</span> <span class=\"k\">);</span>","","      <span class=\"k\">this</span><span class=\"k\">.</span>centralize<span class=\"k\">();</span>","    <span class=\"k\">}</span><span class=\"k\">,</span>","","    centralize<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>e<span class=\"k\">)</span><span class=\"k\">{</span>","      <span class=\"k\">var</span> calendar <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>$el<span class=\"k\">.</span>find<span class=\"k\">(</span><span class=\"s\">'#calendar'</span><span class=\"k\">),</span>","        size <span class=\"k\">=</span> calendar<span class=\"k\">.</span>width<span class=\"k\">(),</span>","        active <span class=\"k\">=</span> parseInt<span class=\"k\">(</span> calendar<span class=\"k\">.</span>find<span class=\"k\">(</span><span class=\"s\">'.active strong'</span><span class=\"k\">).</span>html<span class=\"k\">(),</span> <span class=\"s\">10</span> <span class=\"k\">),</span>","        left <span class=\"k\">=</span> <span class=\"k\">(</span> <span class=\"k\">(</span> active <span class=\"k\">-</span> <span class=\"s\">1</span> <span class=\"k\">)</span> <span class=\"k\">*</span> <span class=\"s\">60</span> <span class=\"k\">)</span> <span class=\"k\">+</span> <span class=\"s\">30</span><span class=\"k\">,</span>","        scroll <span class=\"k\">=</span> left <span class=\"k\">-</span> <span class=\"k\">(</span> size <span class=\"k\">/</span> <span class=\"s\">2</span> <span class=\"k\">);</span>","","      calendar<span class=\"k\">.</span>scrollLeft<span class=\"k\">(</span> scroll <span class=\"k\">);</span>","    <span class=\"k\">}</span><span class=\"k\">,</span>","","    getModel<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>","      <span class=\"k\">return</span> <span class=\"k\">this</span><span class=\"k\">.</span>options<span class=\"k\">.</span>day <span class=\"k\">===</span> <span class=\"s\">'today'</span>","        <span class=\"k\">?</span> <span class=\"k\">this</span><span class=\"k\">.</span>collection<span class=\"k\">.</span>today<span class=\"k\">()</span>","        <span class=\"k\">:</span> <span class=\"k\">this</span><span class=\"k\">.</span>getDay<span class=\"k\">(</span> <span class=\"k\">this</span><span class=\"k\">.</span>options<span class=\"k\">.</span>day <span class=\"k\">)</span>","    <span class=\"k\">}</span><span class=\"k\">,</span>","","    dayClick<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>e<span class=\"k\">)</span><span class=\"k\">{</span>","      e<span class=\"k\">.</span>preventDefault<span class=\"k\">();</span>","","      <span class=\"k\">var</span> day<span class=\"k\">,</span> o <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>options<span class=\"k\">,</span>","        el <span class=\"k\">=</span> $<span class=\"k\">(</span> e<span class=\"k\">.</span>currentTarget <span class=\"k\">);</span>","","      <span class=\"k\">if</span><span class=\"k\">(</span> el<span class=\"k\">.</span>hasClass<span class=\"k\">(</span><span class=\"s\">'active'</span><span class=\"k\">)</span> <span class=\"k\">)</span><span class=\"k\">{</span>","        <span class=\"k\">return</span> <span class=\"k\">false</span><span class=\"k\">;</span>","      <span class=\"k\">}</span>","","      day <span class=\"k\">=</span> el<span class=\"k\">.</span>find<span class=\"k\">(</span><span class=\"s\">'strong'</span><span class=\"k\">).</span>text<span class=\"k\">();</span>","","      el","        <span class=\"k\">.</span>siblings<span class=\"k\">(</span><span class=\"s\">'.active'</span><span class=\"k\">).</span>removeClass<span class=\"k\">(</span><span class=\"s\">'active'</span><span class=\"k\">)</span>","      <span class=\"k\">.</span>end<span class=\"k\">()</span>","        <span class=\"k\">.</span>addClass<span class=\"k\">(</span><span class=\"s\">'active'</span><span class=\"k\">);</span>","","      Backbone<span class=\"k\">.</span>history<span class=\"k\">.</span>navigate<span class=\"k\">(</span>","        <span class=\"k\">[</span> <span class=\"s\">'!'</span><span class=\"k\">,</span> o<span class=\"k\">.</span>year<span class=\"k\">,</span> o<span class=\"k\">.</span>month <span class=\"k\">+</span> <span class=\"s\">1</span><span class=\"k\">,</span> day <span class=\"k\">].</span>join<span class=\"k\">(</span><span class=\"s\">'/'</span><span class=\"k\">),</span> <span class=\"k\">{</span>","          trigger<span class=\"k\">:</span> <span class=\"k\">true</span>","        <span class=\"k\">}</span>","      <span class=\"k\">);</span>","    <span class=\"k\">}</span><span class=\"k\">,</span>","","    getDay<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>day<span class=\"k\">)</span><span class=\"k\">{</span>","      <span class=\"k\">return</span> <span class=\"k\">this</span><span class=\"k\">.</span>collection<span class=\"k\">.</span>at<span class=\"k\">(</span>","        parseInt<span class=\"k\">(</span> day<span class=\"k\">,</span> <span class=\"s\">10</span> <span class=\"k\">)</span> <span class=\"k\">-</span> <span class=\"s\">1</span>","      <span class=\"k\">);</span>","    <span class=\"k\">}</span><span class=\"k\">,</span>","","    change<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>e<span class=\"k\">)</span><span class=\"k\">{</span>","      e<span class=\"k\">.</span>preventDefault<span class=\"k\">();</span>","","      <span class=\"k\">var</span> el <span class=\"k\">=</span> $<span class=\"k\">(</span>e<span class=\"k\">.</span>currentTarget<span class=\"k\">);</span>","","      <span class=\"k\">this</span><span class=\"k\">.</span>model<span class=\"k\">.</span>save<span class=\"k\">(</span> el<span class=\"k\">.</span>attr<span class=\"k\">(</span><span class=\"s\">'id'</span><span class=\"k\">),</span> el<span class=\"k\">.</span>val<span class=\"k\">(),</span> <span class=\"k\">{</span>","        success<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>","          $<span class=\"k\">(</span><span class=\"s\">'#footer'</span><span class=\"k\">).</span>text<span class=\"k\">(</span><span class=\"s\">''</span><span class=\"k\">);</span>","        <span class=\"k\">}</span>","      <span class=\"k\">}</span> <span class=\"k\">);</span>","    <span class=\"k\">}</span><span class=\"k\">,</span>","","    error<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>model<span class=\"k\">,</span> message<span class=\"k\">)</span><span class=\"k\">{</span>","      $<span class=\"k\">(</span><span class=\"s\">'#footer'</span><span class=\"k\">).</span>text<span class=\"k\">(</span> message <span class=\"k\">);</span>","    <span class=\"k\">}</span><span class=\"k\">,</span>","","    reset<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>e<span class=\"k\">)</span><span class=\"k\">{</span>","      e<span class=\"k\">.</span>preventDefault<span class=\"k\">();</span>","","      localStorage<span class=\"k\">.</span>clear<span class=\"k\">();</span>","","      <span class=\"k\">this</span><span class=\"k\">.</span>collection<span class=\"k\">.</span>reset<span class=\"k\">([],</span> <span class=\"k\">{</span>","        silent<span class=\"k\">:</span> <span class=\"k\">true</span>","      <span class=\"k\">}</span><span class=\"k\">);</span>","","      Backbone<span class=\"k\">.</span>history<span class=\"k\">.</span>navigate<span class=\"k\">(</span><span class=\"s\">'!/clear'</span><span class=\"k\">,</span> <span class=\"k\">true</span><span class=\"k\">);</span>","    <span class=\"k\">}</span>","  <span class=\"k\">}</span><span class=\"k\">);</span>","<span class=\"k\">}</span><span class=\"k\">);</span>"];
_$jscoverage['views/main.js'][1]++;
define(["backbone", "underscore", "jquery", "utils", "collections/month", "text!../../templates/main.html"], (function (Backbone, _, $, Utils, month, template) {
  _$jscoverage['views/main.js'][5]++;
  return Backbone.View.extend({el: "#timesheet", template: _.template(template), events: {"click #calendar li": "dayClick", "blur #entrance, #exit": "change", "click #reset": "reset"}, initialize: (function () {
  _$jscoverage['views/main.js'][17]++;
  var o = this.options;
  _$jscoverage['views/main.js'][19]++;
  this.collection = new (month(o.year, o.month))();
  _$jscoverage['views/main.js'][23]++;
  this.collection.populate();
  _$jscoverage['views/main.js'][25]++;
  this.model = this.getModel();
  _$jscoverage['views/main.js'][27]++;
  this.model.bind("error", this.error, this);
  _$jscoverage['views/main.js'][29]++;
  this.model.bind("change", this.render, this);
  _$jscoverage['views/main.js'][31]++;
  this.model.trigger("change");
}), render: (function () {
  _$jscoverage['views/main.js'][35]++;
  function klass(model) {
    _$jscoverage['views/main.js'][36]++;
    return ["class=\"", (model.today()? "today": ""), (Utils.isSameDay(model.get("date"), this.get("date"))? "active": ""), "\""].join(" ");
}
  _$jscoverage['views/main.js'][46]++;
  this.$el.html(this.template(_.extend({active: this.model.attributes, models: this.collection.models, abbr: _.bind(Utils.getDayAbbr, Utils), name: _.bind(Utils.getMonthName, Utils), makeClass: _.bind(klass, this.model)}, this.options)));
  _$jscoverage['views/main.js'][54]++;
  this.centralize();
}), centralize: (function (e) {
  _$jscoverage['views/main.js'][58]++;
  var calendar = this.$el.find("#calendar"), size = calendar.width(), active = parseInt(calendar.find(".active strong").html(), 10), left = (((active - 1) * 60) + 30), scroll = (left - (size / 2));
  _$jscoverage['views/main.js'][64]++;
  calendar.scrollLeft(scroll);
}), getModel: (function () {
  _$jscoverage['views/main.js'][68]++;
  return ((this.options.day === "today")? this.collection.today(): this.getDay(this.options.day));
}), dayClick: (function (e) {
  _$jscoverage['views/main.js'][74]++;
  e.preventDefault();
  _$jscoverage['views/main.js'][76]++;
  var day, o = this.options, el = $(e.currentTarget);
  _$jscoverage['views/main.js'][79]++;
  if (el.hasClass("active")) {
    _$jscoverage['views/main.js'][80]++;
    return false;
  }
  _$jscoverage['views/main.js'][83]++;
  day = el.find("strong").text();
  _$jscoverage['views/main.js'][85]++;
  el.siblings(".active").removeClass("active").end().addClass("active");
  _$jscoverage['views/main.js'][90]++;
  Backbone.history.navigate(["!", o.year, (o.month + 1), day].join("/"), {trigger: true});
}), getDay: (function (day) {
  _$jscoverage['views/main.js'][98]++;
  return this.collection.at((parseInt(day, 10) - 1));
}), change: (function (e) {
  _$jscoverage['views/main.js'][104]++;
  e.preventDefault();
  _$jscoverage['views/main.js'][106]++;
  var el = $(e.currentTarget);
  _$jscoverage['views/main.js'][108]++;
  this.model.save(el.attr("id"), el.val(), {success: (function () {
  _$jscoverage['views/main.js'][110]++;
  $("#footer").text("");
})});
}), error: (function (model, message) {
  _$jscoverage['views/main.js'][116]++;
  $("#footer").text(message);
}), reset: (function (e) {
  _$jscoverage['views/main.js'][120]++;
  e.preventDefault();
  _$jscoverage['views/main.js'][122]++;
  localStorage.clear();
  _$jscoverage['views/main.js'][124]++;
  this.collection.reset([], {silent: true});
  _$jscoverage['views/main.js'][128]++;
  Backbone.history.navigate("!/clear", true);
})});
}));
