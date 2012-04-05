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
if (! _$jscoverage['models/options.js']) {
  _$jscoverage['models/options.js'] = [];
  _$jscoverage['models/options.js'][1] = 0;
  _$jscoverage['models/options.js'][2] = 0;
  _$jscoverage['models/options.js'][5] = 0;
  _$jscoverage['models/options.js'][14] = 0;
  _$jscoverage['models/options.js'][17] = 0;
  _$jscoverage['models/options.js'][18] = 0;
}
_$jscoverage['models/options.js'].source = ["define<span class=\"k\">([</span><span class=\"s\">'backbone'</span><span class=\"k\">,</span> <span class=\"s\">'localstorage'</span><span class=\"k\">],</span> <span class=\"k\">function</span><span class=\"k\">(</span>Backbone<span class=\"k\">,</span> Store<span class=\"k\">)</span><span class=\"k\">{</span>","  <span class=\"k\">return</span> Backbone<span class=\"k\">.</span>Model<span class=\"k\">.</span>extend<span class=\"k\">(</span><span class=\"k\">{</span>","    localStorage<span class=\"k\">:</span> <span class=\"k\">new</span> Store<span class=\"k\">(</span><span class=\"s\">'options'</span><span class=\"k\">),</span>","    text<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>","      <span class=\"k\">return</span> <span class=\"k\">[</span> <span class=\"k\">this</span><span class=\"k\">.</span>get<span class=\"k\">(</span><span class=\"s\">'year'</span><span class=\"k\">),</span> <span class=\"k\">this</span><span class=\"k\">.</span>get<span class=\"k\">(</span><span class=\"s\">'month'</span><span class=\"k\">)</span> <span class=\"k\">].</span>join<span class=\"k\">(</span><span class=\"s\">'-'</span><span class=\"k\">);</span>","    <span class=\"k\">}</span><span class=\"k\">,</span>","    defaults<span class=\"k\">:</span> <span class=\"k\">{</span>","      month<span class=\"k\">:</span> <span class=\"k\">null</span><span class=\"k\">,</span>","      year<span class=\"k\">:</span> <span class=\"k\">null</span><span class=\"k\">,</span>","      id<span class=\"k\">:</span> <span class=\"s\">'timesheet-options'</span> <span class=\"c\">// localStorage need a id</span>","    <span class=\"k\">}</span><span class=\"k\">,</span>","","    validate<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>attr<span class=\"k\">,</span> errors<span class=\"k\">)</span><span class=\"k\">{</span>","      <span class=\"k\">var</span> year <span class=\"k\">=</span> parseInt<span class=\"k\">(</span> attr<span class=\"k\">.</span>year<span class=\"k\">,</span> <span class=\"s\">10</span> <span class=\"k\">),</span>","        month <span class=\"k\">=</span> parseInt<span class=\"k\">(</span> attr<span class=\"k\">.</span>month<span class=\"k\">,</span> <span class=\"s\">10</span> <span class=\"k\">);</span>","","      <span class=\"k\">if</span><span class=\"k\">(</span> isNaN<span class=\"k\">(</span> year <span class=\"k\">)</span> <span class=\"k\">||</span> isNaN<span class=\"k\">(</span> month <span class=\"k\">)</span> <span class=\"k\">)</span><span class=\"k\">{</span>","        <span class=\"k\">return</span> <span class=\"s\">\"The month must be YYYY-MM\"</span><span class=\"k\">;</span>","      <span class=\"k\">}</span>","    <span class=\"k\">}</span>","  <span class=\"k\">}</span><span class=\"k\">);</span>","<span class=\"k\">}</span><span class=\"k\">);</span>"];
_$jscoverage['models/options.js'][1]++;
define(["backbone", "localstorage"], (function (Backbone, Store) {
  _$jscoverage['models/options.js'][2]++;
  return Backbone.Model.extend({localStorage: new Store("options"), text: (function () {
  _$jscoverage['models/options.js'][5]++;
  return [this.get("year"), this.get("month")].join("-");
}), defaults: {month: null, year: null, id: "timesheet-options"}, validate: (function (attr, errors) {
  _$jscoverage['models/options.js'][14]++;
  var year = parseInt(attr.year, 10), month = parseInt(attr.month, 10);
  _$jscoverage['models/options.js'][17]++;
  if ((isNaN(year) || isNaN(month))) {
    _$jscoverage['models/options.js'][18]++;
    return "The month must be YYYY-MM";
  }
})});
}));
