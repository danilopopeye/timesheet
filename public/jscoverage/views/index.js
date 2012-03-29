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
if (! _$jscoverage['views/index.js']) {
  _$jscoverage['views/index.js'] = [];
  _$jscoverage['views/index.js'][1] = 0;
  _$jscoverage['views/index.js'][4] = 0;
  _$jscoverage['views/index.js'][10] = 0;
  _$jscoverage['views/index.js'][12] = 0;
  _$jscoverage['views/index.js'][14] = 0;
  _$jscoverage['views/index.js'][24] = 0;
  _$jscoverage['views/index.js'][27] = 0;
  _$jscoverage['views/index.js'][28] = 0;
  _$jscoverage['views/index.js'][31] = 0;
  _$jscoverage['views/index.js'][37] = 0;
  _$jscoverage['views/index.js'][42] = 0;
  _$jscoverage['views/index.js'][46] = 0;
  _$jscoverage['views/index.js'][49] = 0;
  _$jscoverage['views/index.js'][55] = 0;
}
_$jscoverage['views/index.js'].source = ["define<span class=\"k\">([</span>","  <span class=\"s\">'backbone'</span><span class=\"k\">,</span> <span class=\"s\">'underscore'</span><span class=\"k\">,</span> <span class=\"s\">'text!../../templates/index.html'</span><span class=\"k\">,</span> <span class=\"s\">'utils'</span>","<span class=\"k\">],</span> <span class=\"k\">function</span><span class=\"k\">(</span>Backbone<span class=\"k\">,</span> _<span class=\"k\">,</span> template<span class=\"k\">,</span> Utils<span class=\"k\">)</span><span class=\"k\">{</span>","  <span class=\"k\">return</span> Backbone<span class=\"k\">.</span>View<span class=\"k\">.</span>extend<span class=\"k\">(</span><span class=\"k\">{</span>","    el<span class=\"k\">:</span> <span class=\"s\">'body'</span><span class=\"k\">,</span>","","    template<span class=\"k\">:</span> template<span class=\"k\">,</span>","","    initialize<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>","      <span class=\"k\">this</span><span class=\"k\">.</span>model<span class=\"k\">.</span>bind<span class=\"k\">(</span><span class=\"s\">'change'</span><span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">.</span>redirect<span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">);</span>","","      <span class=\"k\">this</span><span class=\"k\">.</span>model<span class=\"k\">.</span>bind<span class=\"k\">(</span><span class=\"s\">'error'</span><span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">.</span>error<span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">);</span>","","      <span class=\"k\">this</span><span class=\"k\">.</span>model<span class=\"k\">.</span>fetch<span class=\"k\">(</span><span class=\"k\">{</span>","        error<span class=\"k\">:</span> _<span class=\"k\">.</span>bind<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>render<span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">)</span>","      <span class=\"k\">}</span><span class=\"k\">);</span>","    <span class=\"k\">}</span><span class=\"k\">,</span>","","    events<span class=\"k\">:</span> <span class=\"k\">{</span>","      <span class=\"s\">'blur input'</span><span class=\"k\">:</span> <span class=\"s\">'change'</span>","    <span class=\"k\">}</span><span class=\"k\">,</span>","","    redirect<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>","      <span class=\"k\">var</span> year <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>model<span class=\"k\">.</span>get<span class=\"k\">(</span><span class=\"s\">'year'</span><span class=\"k\">),</span>","        month <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>model<span class=\"k\">.</span>get<span class=\"k\">(</span><span class=\"s\">'month'</span><span class=\"k\">);</span>","","      <span class=\"k\">if</span><span class=\"k\">(</span> <span class=\"k\">!</span> year <span class=\"k\">||</span> <span class=\"k\">!</span> month <span class=\"k\">)</span><span class=\"k\">{</span>","        <span class=\"k\">return</span> <span class=\"k\">this</span><span class=\"k\">.</span>render<span class=\"k\">();</span>","      <span class=\"k\">}</span>","","      <span class=\"k\">this</span><span class=\"k\">.</span>options<span class=\"k\">.</span>router<span class=\"k\">.</span>navigate<span class=\"k\">(</span>","        <span class=\"k\">this</span><span class=\"k\">.</span>findRoute<span class=\"k\">(</span>year<span class=\"k\">,</span> month<span class=\"k\">),</span> <span class=\"k\">true</span>","      <span class=\"k\">);</span>","    <span class=\"k\">}</span><span class=\"k\">,</span>","","    findRoute<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>year<span class=\"k\">,</span> month<span class=\"k\">)</span><span class=\"k\">{</span>","      <span class=\"k\">return</span> Utils<span class=\"k\">.</span>isSameMonth<span class=\"k\">(</span>year<span class=\"k\">,</span> month<span class=\"k\">)</span>","        <span class=\"k\">?</span> <span class=\"s\">'!/today'</span> <span class=\"k\">:</span> <span class=\"s\">'!/'</span><span class=\"k\">+</span> year <span class=\"k\">+</span><span class=\"s\">'/'</span><span class=\"k\">+</span> month <span class=\"k\">+</span> <span class=\"s\">'/1'</span><span class=\"k\">;</span>","    <span class=\"k\">}</span><span class=\"k\">,</span>","","    render<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>","      <span class=\"k\">this</span><span class=\"k\">.</span>$el<span class=\"k\">.</span>html<span class=\"k\">(</span> <span class=\"k\">this</span><span class=\"k\">.</span>template <span class=\"k\">);</span>","    <span class=\"k\">}</span><span class=\"k\">,</span>","","    change<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>e<span class=\"k\">)</span><span class=\"k\">{</span>","      <span class=\"k\">var</span> value <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>$el<span class=\"k\">.</span>find<span class=\"k\">(</span><span class=\"s\">'input'</span><span class=\"k\">).</span>val<span class=\"k\">(),</span>","        date <span class=\"k\">=</span> value<span class=\"k\">.</span>split<span class=\"k\">(</span><span class=\"s\">'-'</span><span class=\"k\">);</span>","","      <span class=\"k\">this</span><span class=\"k\">.</span>model<span class=\"k\">.</span>save<span class=\"k\">(</span><span class=\"k\">{</span>","        year<span class=\"k\">:</span> date<span class=\"k\">[</span><span class=\"s\">0</span><span class=\"k\">],</span> month<span class=\"k\">:</span> parseInt<span class=\"k\">(</span> date<span class=\"k\">[</span><span class=\"s\">1</span><span class=\"k\">],</span> <span class=\"s\">10</span> <span class=\"k\">)</span> <span class=\"k\">-</span> <span class=\"s\">1</span>","      <span class=\"k\">}</span><span class=\"k\">);</span>","    <span class=\"k\">}</span><span class=\"k\">,</span>","","    error<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>model<span class=\"k\">,</span> message<span class=\"k\">)</span><span class=\"k\">{</span>","      <span class=\"k\">this</span><span class=\"k\">.</span>$el<span class=\"k\">.</span>find<span class=\"k\">(</span><span class=\"s\">'#message'</span><span class=\"k\">).</span>text<span class=\"k\">(</span> message <span class=\"k\">);</span>","    <span class=\"k\">}</span>","  <span class=\"k\">}</span><span class=\"k\">);</span>","<span class=\"k\">}</span><span class=\"k\">);</span>"];
_$jscoverage['views/index.js'][1]++;
define(["backbone", "underscore", "text!../../templates/index.html", "utils"], (function (Backbone, _, template, Utils) {
  _$jscoverage['views/index.js'][4]++;
  return Backbone.View.extend({el: "body", template: template, initialize: (function () {
  _$jscoverage['views/index.js'][10]++;
  this.model.bind("change", this.redirect, this);
  _$jscoverage['views/index.js'][12]++;
  this.model.bind("error", this.error, this);
  _$jscoverage['views/index.js'][14]++;
  this.model.fetch({error: _.bind(this.render, this)});
}), events: {"blur input": "change"}, redirect: (function () {
  _$jscoverage['views/index.js'][24]++;
  var year = this.model.get("year"), month = this.model.get("month");
  _$jscoverage['views/index.js'][27]++;
  if (((! year) || (! month))) {
    _$jscoverage['views/index.js'][28]++;
    return this.render();
  }
  _$jscoverage['views/index.js'][31]++;
  this.options.router.navigate(this.findRoute(year, month), true);
}), findRoute: (function (year, month) {
  _$jscoverage['views/index.js'][37]++;
  return (Utils.isSameMonth(year, month)? "!/today": ("!/" + year + "/" + month + "/1"));
}), render: (function () {
  _$jscoverage['views/index.js'][42]++;
  this.$el.html(this.template);
}), change: (function (e) {
  _$jscoverage['views/index.js'][46]++;
  var value = this.$el.find("input").val(), date = value.split("-");
  _$jscoverage['views/index.js'][49]++;
  this.model.save({year: date[0], month: (parseInt(date[1], 10) - 1)});
}), error: (function (model, message) {
  _$jscoverage['views/index.js'][55]++;
  this.$el.find("#message").text(message);
})});
}));