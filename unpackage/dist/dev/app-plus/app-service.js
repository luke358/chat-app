"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!***************************************!*\
  !*** F:/ALL笔记/chart/app - h5/main.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 4));\nvar _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.prototype.$store = _store.default;\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\nuni.$on('openAudio', function (res) {\n  __f__(\"log\", res, \" at main.js:10\");\n});\nvar app = new _vue.default(_objectSpread({\n  store: _store.default },\n_App.default));\n\napp.$mount();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 2)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUFhLGtDQUFrQyxtQkFBTyxDQUFDLFlBQUs7QUFDNUQsa0NBQWtDLG1CQUFPLENBQUMsY0FBTztBQUNqRCxvQ0FBb0MsbUJBQU8sQ0FBQyxpQkFBUyxHQUFHLHNDQUFzQyxzQ0FBc0MsaUJBQWlCLDBDQUEwQywrQkFBK0IsbUNBQW1DLG1EQUFtRCw2REFBNkQsZ0VBQWdFLEVBQUUsZ0NBQWdDLGFBQWEsZ0NBQWdDLGVBQWUsc0JBQXNCLE9BQU8sc0RBQXNELFlBQVksc0RBQXNELDJDQUEyQyxHQUFHLDZDQUE2QywyRUFBMkUsT0FBTyxnREFBZ0Qsa0ZBQWtGLElBQUksZUFBZSwyQ0FBMkMsaUJBQWlCLGlDQUFpQyxxRUFBcUUsR0FBRyxPQUFPLGtCQUFrQjs7QUFFcHFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBLGEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO3ZhciBfdnVlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbnZhciBfQXBwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BcHBcIikpO1xudmFyIF9zdG9yZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3RvcmVcIikpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7cmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07fWZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge3ZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge3ZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO2lmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTt9KTtrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7fXJldHVybiBrZXlzO31mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge2ZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7dmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307aWYgKGkgJSAyKSB7b3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7X2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7fSk7fSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7fSBlbHNlIHtvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTt9KTt9fXJldHVybiB0YXJnZXQ7fWZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtpZiAoa2V5IGluIG9iaikge09iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7fSBlbHNlIHtvYmpba2V5XSA9IHZhbHVlO31yZXR1cm4gb2JqO31cblxuX3Z1ZS5kZWZhdWx0LnByb3RvdHlwZS4kc3RvcmUgPSBfc3RvcmUuZGVmYXVsdDtcbl92dWUuZGVmYXVsdC5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlO1xuXG5fQXBwLmRlZmF1bHQubXBUeXBlID0gJ2FwcCc7XG51bmkuJG9uKCdvcGVuQXVkaW8nLCBmdW5jdGlvbiAocmVzKSB7XG4gIF9fZl9fKFwibG9nXCIsIHJlcywgXCIgYXQgbWFpbi5qczoxMFwiKTtcbn0pO1xudmFyIGFwcCA9IG5ldyBfdnVlLmRlZmF1bHQoX29iamVjdFNwcmVhZCh7XG4gIHN0b3JlOiBfc3RvcmUuZGVmYXVsdCB9LFxuX0FwcC5kZWZhdWx0KSk7XG5cbmFwcC4kbW91bnQoKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 3 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 4 */
/*!***************************************!*\
  !*** F:/ALL笔记/chart/app - h5/App.vue ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 9);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss& */ 7).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss& */ 7).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  \"0973050a\",\n  false,\n  components,\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLG1CQUFPLENBQUMsb0RBQTZDO0FBQ2pHLGFBQWE7QUFDYixpREFBaUQsbUJBQU8sQ0FBQyxvREFBNkM7QUFDdEc7O0FBRUE7O0FBRUE7QUFDMk07QUFDM00sZ0JBQWdCLDhNQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ2UsZ0YiLCJmaWxlIjoiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50c1xudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxc5a6J6KOF55uu5b2VXFxcXEhCdWlsZGVyWC4yLjYuMTEuMjAyMDA0MDkuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiMDk3MzA1MGFcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!****************************************************************!*\
  !*** F:/ALL笔记/chart/app - h5/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 6);\n/* harmony import */ var _D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1oQixDQUFnQiwwaUJBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFzlronoo4Xnm67lvZVcXFxcSEJ1aWxkZXJYLjIuNi4xMS4yMDIwMDQwOS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXOWuieijheebruW9lVxcXFxIQnVpbGRlclguMi42LjExLjIwMjAwNDA5LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFzlronoo4Xnm67lvZVcXFxcSEJ1aWxkZXJYLjIuNi4xMS4yMDIwMDQwOS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxc5a6J6KOF55uu5b2VXFxcXEhCdWlsZGVyWC4yLjYuMTEuMjAyMDA0MDkuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFzlronoo4Xnm67lvZVcXFxcSEJ1aWxkZXJYLjIuNi4xMS4yMDIwMDQwOS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxc5a6J6KOF55uu5b2VXFxcXEhCdWlsZGVyWC4yLjYuMTEuMjAyMDA0MDkuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/ALL笔记/chart/app - h5/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n\n    //公共图标库\n    var domModule = weex.requireModule('dom');\n    domModule.addRule('fontFace', {\n      'fontFamily': \"iconfont\",\n      'src': \"url('https://at.alicdn.com/t/font_1365296_2ijcbdrmsg.ttf')\" });\n\n\n\n    //初始化录音管理器\n    this.$store.commit('initRECORD');\n    __f__(\"log\", 'App Launch', \" at App.vue:15\");\n\n    // 初始化登陆状态\n    this.$store.dispatch('init');\n  },\n  onShow: function onShow() {\n    this.$store.dispatch('reconnect');\n    __f__(\"log\", 'App Show', \" at App.vue:22\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:25\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 2)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFEQTtBQUVBLHlFQUZBOzs7O0FBTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQWpCQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQSxHQXJCQTtBQXNCQTtBQUNBO0FBQ0EsR0F4QkEsRSIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRvbkxhdW5jaDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vICNpZmRlZiBBUFAtUExVUy1OVlVFXHJcblx0XHRcdC8v5YWs5YWx5Zu+5qCH5bqTXHJcblx0XHRcdGNvbnN0IGRvbU1vZHVsZSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJylcclxuXHRcdFx0ZG9tTW9kdWxlLmFkZFJ1bGUoJ2ZvbnRGYWNlJywge1xyXG5cdFx0XHRcdCdmb250RmFtaWx5JzogXCJpY29uZm9udFwiLFxyXG5cdFx0XHRcdCdzcmMnOiBcInVybCgnaHR0cHM6Ly9hdC5hbGljZG4uY29tL3QvZm9udF8xMzY1Mjk2XzJpamNiZHJtc2cudHRmJylcIlxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcclxuXHRcdC8v5Yid5aeL5YyW5b2V6Z+z566h55CG5ZmoXHJcblx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgnaW5pdFJFQ09SRCcpXHJcblx0XHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcclxuXHRcdFx0XHJcblx0XHRcdC8vIOWIneWni+WMlueZu+mZhueKtuaAgVxyXG5cdFx0XHR0aGlzLiRzdG9yZS5kaXNwYXRjaCgnaW5pdCcpXHJcblx0XHR9LFxyXG5cdFx0b25TaG93OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3JlY29ubmVjdCcpXHJcblx0XHRcdGNvbnNvbGUubG9nKCdBcHAgU2hvdycpXHJcblx0XHR9LFxyXG5cdFx0b25IaWRlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0FwcCBIaWRlJylcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcblx0Ly8gQGltcG9ydCB1cmwoJy4vY29tbW9uL2Nzcy9zdHlsZS9zdHlsZS5zY3NzJyk7XHJcblx0Lyrmr4/kuKrpobXpnaLlhazlhbFjc3MgKi9cclxuXHQvLyBAaW1wb3J0IHVybChcIi4vY29tbW9uL2Nzcy9pY29uL2ljb25mb250LmNzc1wiKTtcclxuXHRAaW1wb3J0ICcuL2NvbW1vbi9mcmVlLmNzcyc7XHJcblx0QGltcG9ydCAnLi9jb21tb24vY29tbW9uLmNzcyc7XHJcblx0LyogI2lmbmRlZiBBUFAtUExVUy1OVlVFICovXHJcblx0QGltcG9ydCAnLi9jb21tb24vZnJlZS1pY29uLmNzcyc7XHJcblx0LyogI2VuZGlmICovXHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*************************************************************************!*\
  !*** F:/ALL笔记/chart/app - h5/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss& */ 8);
/* harmony import */ var _D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/ALL笔记/chart/app - h5/App.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "view": {
    "fontSize": "28rpx",
    "lineHeight": 1.8,
    "color": "#0E151D"
  },
  "text": {
    "fontSize": "28rpx",
    "lineHeight": 1.8,
    "color": "#0E151D"
  },
  "w-100": {
    "width": "750rpx"
  },
  "row": {
    "marginRight": "-20rpx",
    "marginLeft": "-20rpx",
    "flexWrap": "wrap",
    "flexDirection": "row"
  },
  "col-1": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "62.5rpx"
  },
  "col-2": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "125rpx"
  },
  "col-3": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "187.5rpx"
  },
  "col-4": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "250rpx"
  },
  "col-5": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "312.5rpx"
  },
  "col-6": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "375rpx"
  },
  "col-7": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "437.5rpx"
  },
  "col-8": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "500rpx"
  },
  "col-9": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "562.5rpx"
  },
  "col-10": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "625rpx"
  },
  "col-11": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "687.5rpx"
  },
  "col-12": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "750rpx"
  },
  "col-offset-12": {
    "width": "750rpx"
  },
  "col-offset-11": {
    "width": "687.5rpx"
  },
  "col-offset-10": {
    "width": "625rpx"
  },
  "col-offset-9": {
    "width": "562.5rpx"
  },
  "col-offset-8": {
    "width": "500rpx"
  },
  "col-offset-7": {
    "width": "437.5rpx"
  },
  "col-offset-6": {
    "width": "375rpx"
  },
  "col-offset-5": {
    "width": "312.5rpx"
  },
  "col-offset-4": {
    "width": "250rpx"
  },
  "col-offset-3": {
    "width": "187.5rpx"
  },
  "col-offset-2": {
    "width": "125rpx"
  },
  "col-offset-1": {
    "width": "62.5rpx"
  },
  "container": {
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx"
  },
  "flex": {
    "display": "flex",
    "flexDirection": "row"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-column": {
    "flexDirection": "column"
  },
  "flex-row-reverse": {
    "flexDirection": "row-reverse"
  },
  "flex-column-reverse": {
    "flexDirection": "column-reverse"
  },
  "flex-wrap": {
    "flexWrap": "wrap"
  },
  "flex-nowrap": {
    "flexWrap": "nowrap"
  },
  "justify-start": {
    "justifyContent": "flex-start"
  },
  "justify-end": {
    "justifyContent": "flex-end"
  },
  "justify-between": {
    "justifyContent": "space-between"
  },
  "justify-center": {
    "justifyContent": "center"
  },
  "align-center": {
    "alignItems": "center"
  },
  "align-stretch": {
    "alignItems": "stretch"
  },
  "align-start": {
    "alignItems": "flex-start"
  },
  "align-end": {
    "alignItems": "flex-end"
  },
  "flex-1": {
    "flex": 1
  },
  "flex-2": {
    "flex": 2
  },
  "flex-3": {
    "flex": 3
  },
  "flex-4": {
    "flex": 4
  },
  "flex-5": {
    "flex": 5
  },
  "m-0": {
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0
  },
  "m-1": {
    "marginTop": "10rpx",
    "marginRight": "10rpx",
    "marginBottom": "10rpx",
    "marginLeft": "10rpx"
  },
  "m-2": {
    "marginTop": "20rpx",
    "marginRight": "20rpx",
    "marginBottom": "20rpx",
    "marginLeft": "20rpx"
  },
  "m-3": {
    "marginTop": "30rpx",
    "marginRight": "30rpx",
    "marginBottom": "30rpx",
    "marginLeft": "30rpx"
  },
  "m-4": {
    "marginTop": "40rpx",
    "marginRight": "40rpx",
    "marginBottom": "40rpx",
    "marginLeft": "40rpx"
  },
  "m-5": {
    "marginTop": "50rpx",
    "marginRight": "50rpx",
    "marginBottom": "50rpx",
    "marginLeft": "50rpx"
  },
  "mt-1": {
    "marginTop": "10rpx"
  },
  "mt-2": {
    "marginTop": "20rpx"
  },
  "mt-3": {
    "marginTop": "30rpx"
  },
  "mt-4": {
    "marginTop": "40rpx"
  },
  "mt-5": {
    "marginTop": "50rpx"
  },
  "mb-1": {
    "marginBottom": "10rpx"
  },
  "mb-2": {
    "marginBottom": "20rpx"
  },
  "mb-3": {
    "marginBottom": "30rpx"
  },
  "mb-4": {
    "marginBottom": "40rpx"
  },
  "mb-5": {
    "marginBottom": "50rpx"
  },
  "mr-1": {
    "marginRight": "10rpx"
  },
  "mr-2": {
    "marginRight": "20rpx"
  },
  "mr-3": {
    "marginRight": "30rpx"
  },
  "mr-4": {
    "marginRight": "40rpx"
  },
  "mr-5": {
    "marginRight": "50rpx"
  },
  "ml-1": {
    "marginLeft": "10rpx"
  },
  "ml-2": {
    "marginLeft": "20rpx"
  },
  "ml-3": {
    "marginLeft": "30rpx"
  },
  "ml-4": {
    "marginLeft": "40rpx"
  },
  "ml-5": {
    "marginLeft": "50rpx"
  },
  "my-1": {
    "marginTop": "10rpx",
    "marginBottom": "10rpx"
  },
  "my-2": {
    "marginTop": "20rpx",
    "marginBottom": "20rpx"
  },
  "my-3": {
    "marginTop": "30rpx",
    "marginBottom": "30rpx"
  },
  "my-4": {
    "marginTop": "40rpx",
    "marginBottom": "40rpx"
  },
  "my-5": {
    "marginTop": "50rpx",
    "marginBottom": "50rpx"
  },
  "mx-1": {
    "marginRight": "10rpx",
    "marginLeft": "10rpx"
  },
  "mx-2": {
    "marginRight": "20rpx",
    "marginLeft": "20rpx"
  },
  "mx-3": {
    "marginRight": "30rpx",
    "marginLeft": "30rpx"
  },
  "mx-4": {
    "marginRight": "40rpx",
    "marginLeft": "40rpx"
  },
  "mx-5": {
    "marginRight": "50rpx",
    "marginLeft": "50rpx"
  },
  "p-0": {
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "p-1": {
    "paddingTop": "10rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "10rpx"
  },
  "p-2": {
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx"
  },
  "p-3": {
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx"
  },
  "p-4": {
    "paddingTop": "40rpx",
    "paddingRight": "40rpx",
    "paddingBottom": "40rpx",
    "paddingLeft": "40rpx"
  },
  "p-5": {
    "paddingTop": "50rpx",
    "paddingRight": "50rpx",
    "paddingBottom": "50rpx",
    "paddingLeft": "50rpx"
  },
  "pt-1": {
    "paddingTop": "10rpx"
  },
  "pt-2": {
    "paddingTop": "20rpx"
  },
  "pt-3": {
    "paddingTop": "30rpx"
  },
  "pt-4": {
    "paddingTop": "40rpx"
  },
  "pt-5": {
    "paddingTop": "50rpx"
  },
  "pb-1": {
    "paddingBottom": "10rpx"
  },
  "pb-2": {
    "paddingBottom": "20rpx"
  },
  "pb-3": {
    "paddingBottom": "30rpx"
  },
  "pb-4": {
    "paddingBottom": "40rpx"
  },
  "pb-5": {
    "paddingBottom": "50rpx"
  },
  "pr-1": {
    "paddingRight": "10rpx"
  },
  "pr-2": {
    "paddingRight": "20rpx"
  },
  "pr-3": {
    "paddingRight": "30rpx"
  },
  "pr-4": {
    "paddingRight": "40rpx"
  },
  "pr-5": {
    "paddingRight": "50rpx"
  },
  "pl-1": {
    "paddingLeft": "10rpx"
  },
  "pl-2": {
    "paddingLeft": "20rpx"
  },
  "pl-3": {
    "paddingLeft": "30rpx"
  },
  "pl-4": {
    "paddingLeft": "40rpx"
  },
  "pl-5": {
    "paddingLeft": "50rpx"
  },
  "py-1": {
    "paddingTop": "10rpx",
    "paddingBottom": "10rpx"
  },
  "py-2": {
    "paddingTop": "20rpx",
    "paddingBottom": "20rpx"
  },
  "py-3": {
    "paddingTop": "30rpx",
    "paddingBottom": "30rpx"
  },
  "py-4": {
    "paddingTop": "40rpx",
    "paddingBottom": "40rpx"
  },
  "py-5": {
    "paddingTop": "50rpx",
    "paddingBottom": "50rpx"
  },
  "px-1": {
    "paddingRight": "10rpx",
    "paddingLeft": "10rpx"
  },
  "px-2": {
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx"
  },
  "px-3": {
    "paddingRight": "30rpx",
    "paddingLeft": "30rpx"
  },
  "px-4": {
    "paddingRight": "40rpx",
    "paddingLeft": "40rpx"
  },
  "px-5": {
    "paddingRight": "50rpx",
    "paddingLeft": "50rpx"
  },
  "font-small": {
    "fontSize": "20rpx"
  },
  "font-sm": {
    "fontSize": "25rpx"
  },
  "font": {
    "fontSize": "30rpx"
  },
  "font-md": {
    "fontSize": "35rpx"
  },
  "font-lg": {
    "fontSize": "40rpx"
  },
  "h1": {
    "fontSize": "80rpx",
    "lineHeight": 1.8
  },
  "h2": {
    "fontSize": "60rpx",
    "lineHeight": 1.8
  },
  "h3": {
    "fontSize": "45rpx",
    "lineHeight": 1.8
  },
  "h4": {
    "fontSize": "32rpx",
    "lineHeight": 1.8
  },
  "h5": {
    "fontSize": "30rpx",
    "lineHeight": 1.8
  },
  "h6": {
    "fontSize": "28rpx",
    "lineHeight": 1.8
  },
  "text-through": {
    "textDecoration": "line-through"
  },
  "text-left": {
    "textAlign": "left"
  },
  "text-right": {
    "textAlign": "right"
  },
  "text-center": {
    "textAlign": "center"
  },
  "font-weight-light": {
    "fontWeight": "300"
  },
  "font-weight-lighter": {
    "fontWeight": "100"
  },
  "font-weight-normal": {
    "fontWeight": "400"
  },
  "font-weight-bold": {
    "fontWeight": "700"
  },
  "font-weight-bolder": {
    "fontWeight": "bold"
  },
  "text-white": {
    "color": "#FFFFFF"
  },
  "text-primary": {
    "color": "#007bff"
  },
  "text-hover-primary": {
    "color": "#0056b3"
  },
  "text-success": {
    "color": "#28a745"
  },
  "text-hover-success": {
    "color": "#19692c"
  },
  "text-info": {
    "color": "#17a2b8"
  },
  "text-hover-info": {
    "color": "#0f6674"
  },
  "text-warning": {
    "color": "#ffc107"
  },
  "text-hover-warning": {
    "color": "#ba8b00"
  },
  "text-danger": {
    "color": "#dc3545"
  },
  "text-hover-danger": {
    "color": "#a71d2a"
  },
  "text-light": {
    "color": "#f8f9fa"
  },
  "text-hover-light": {
    "color": "#cbd3da"
  },
  "text-dark": {
    "color": "#343a40"
  },
  "text-hover-dark": {
    "color": "#121416"
  },
  "text-body": {
    "color": "#212529"
  },
  "text-muted": {
    "color": "#6c757d"
  },
  "text-light-muted": {
    "color": "#a9a5a0"
  },
  "text-light-white": {
    "color": "rgba(255,255,255,0.5)"
  },
  "text-light-black": {
    "color": "rgba(0,0,0,0.5)"
  },
  "text-secondary": {
    "color": "#6c757d"
  },
  "bg-primary": {
    "backgroundColor": "#007bff"
  },
  "bg-hover-primary": {
    "backgroundColor:hover": "#0062cc"
  },
  "bg-secondary": {
    "backgroundColor": "#6c757d"
  },
  "bg-hover-secondary": {
    "backgroundColor:hover": "#545b62"
  },
  "bg-success": {
    "backgroundColor": "#28a745"
  },
  "bg-hover-success": {
    "backgroundColor": "#1e7e34"
  },
  "bg-info": {
    "backgroundColor": "#17a2b8"
  },
  "bg-hover-info": {
    "backgroundColor": "#117a8b"
  },
  "bg-warning": {
    "backgroundColor": "#ffc107"
  },
  "bg-hover-warning": {
    "backgroundColor": "#d39e00"
  },
  "bg-danger": {
    "backgroundColor": "#dc3545"
  },
  "bg-hover-danger": {
    "backgroundColor": "#bd2130"
  },
  "bg-light": {
    "backgroundColor": "#eeeeed"
  },
  "bg-hover-light": {
    "backgroundColor": "#CCCCCC"
  },
  "bg-dark": {
    "backgroundColor": "#343a40"
  },
  "bg-hover-dark": {
    "backgroundColor": "#1d2124"
  },
  "bg-white": {
    "backgroundColor": "#FFFFFF"
  },
  "bg-transparent": {
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "border": {
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#dee2e6"
  },
  "border-top": {
    "borderTopWidth": "1rpx",
    "borderTopStyle": "solid",
    "borderTopColor": "#dee2e6"
  },
  "border-bottom": {
    "borderBottomWidth": "1rpx",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#dee2e6"
  },
  "border-right": {
    "borderRightWidth": "1rpx",
    "borderRightStyle": "solid",
    "borderRightColor": "#dee2e6"
  },
  "border-left": {
    "borderLeftWidth": "1rpx",
    "borderLeftStyle": "solid",
    "borderLeftColor": "#dee2e6"
  },
  "border-0": {
    "borderWidth": 0
  },
  "border-top-0": {
    "borderTopWidth": 0
  },
  "border-right-0": {
    "borderRightWidth": 0
  },
  "border-bottom-0": {
    "borderBottomWidth": 0
  },
  "border-left-0": {
    "borderLeftWidth": 0
  },
  "border-primary": {
    "borderColor": "#007bff"
  },
  "border-secondary": {
    "borderColor": "#6c757d"
  },
  "border-light-secondary": {
    "borderColor": "#E9E8E5"
  },
  "border-success": {
    "borderColor": "#28a745"
  },
  "border-info": {
    "borderColor": "#17a2b8"
  },
  "border-warning": {
    "borderColor": "#ffc107"
  },
  "border-danger": {
    "borderColor": "#dc3545"
  },
  "border-light": {
    "borderColor": "#f8f9fa"
  },
  "border-dark": {
    "borderColor": "#343a40"
  },
  "border-white": {
    "borderColor": "#FFFFFF"
  },
  "rounded": {
    "borderRadius": "8rpx"
  },
  "rounded-top": {
    "borderTopLeftRadius": "8rpx",
    "borderTopRightRadius": "8rpx"
  },
  "rounded-right": {
    "borderTopRightRadius": "8rpx",
    "borderBottomRightRadius": "8rpx"
  },
  "rounded-bottom": {
    "borderBottomLeftRadius": "8rpx",
    "borderBottomRightRadius": "8rpx"
  },
  "rounded-left": {
    "borderTopLeftRadius": "8rpx",
    "borderBottomLeftRadius": "8rpx"
  },
  "rounded-circle": {
    "borderRadius": "100rpx"
  },
  "rounded-0": {
    "borderRadius": 0
  },
  "d-none": {
    "display": "none"
  },
  "d-inline-block": {
    "display": "inline-block"
  },
  "d-block": {
    "display": "block"
  },
  "overflow-hidden": {
    "overflow": "hidden"
  },
  "position-relative": {
    "position": "relative"
  },
  "position-absolute": {
    "position": "absolute"
  },
  "position-fixed": {
    "position": "fixed"
  },
  "fixed-top": {
    "position": "fixed",
    "top": 0,
    "right": 0,
    "left": 0,
    "zIndex": 1030
  },
  "fixed-bottom": {
    "position": "fixed",
    "right": 0,
    "bottom": 0,
    "left": 0,
    "zIndex": 1030
  },
  "top-0": {
    "top": 0
  },
  "left-0": {
    "left": 0
  },
  "right-0": {
    "right": 0
  },
  "bottom-0": {
    "bottom": 0
  },
  "page": {
    "backgroundColor": "#e3e3e3",
    "flex": 1
  },
  "main-bg-hover-color": {
    "backgroundColor": "#08c060"
  },
  "main-bg-color": {
    "backgroundColor": "#08d869"
  },
  "main-text-color": {
    "color": "#08c060"
  },
  "border-main": {
    "borderColor": "#08c060"
  },
  "bg-chat-item": {
    "backgroundColor": "#6bee68"
  },
  "text-chat-item": {
    "color": "#6bee68"
  }
}

/***/ }),
/* 9 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 10 */
/*!**********************************************!*\
  !*** F:/ALL笔记/chart/app - h5/store/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 11));\n\n\n\nvar _audio = _interopRequireDefault(__webpack_require__(/*! @/store/modules/audio.js */ 12));\nvar _user = _interopRequireDefault(__webpack_require__(/*! @/store/modules/user.js */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}_vue.default.use(_vuex.default);var _default =\n\nnew _vuex.default.Store({\n  modules: {\n    audio: _audio.default,\n    user: _user.default } });exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsIlN0b3JlIiwibW9kdWxlcyIsImF1ZGlvIiwidXNlciJdLCJtYXBwaW5ncyI6InVGQUFBO0FBQ0E7Ozs7QUFJQTtBQUNBLDJGLDZGQUhBQSxhQUFJQyxHQUFKLENBQVFDLGFBQVIsRTs7QUFLZSxJQUFJQSxjQUFLQyxLQUFULENBQWU7QUFDN0JDLFNBQU8sRUFBQztBQUNQQyxTQUFLLEVBQUxBLGNBRE87QUFFUEMsUUFBSSxFQUFKQSxhQUZPLEVBRHFCLEVBQWYsQyIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4J1xyXG5cclxuVnVlLnVzZShWdWV4KVxyXG5cclxuaW1wb3J0IGF1ZGlvIGZyb20gJ0Avc3RvcmUvbW9kdWxlcy9hdWRpby5qcydcclxuaW1wb3J0IHVzZXIgZnJvbSAnQC9zdG9yZS9tb2R1bGVzL3VzZXIuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XHJcblx0bW9kdWxlczp7XHJcblx0XHRhdWRpbyxcclxuXHRcdHVzZXJcclxuXHR9XHJcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.install = install;exports.mapState = exports.mapMutations = exports.mapGetters = exports.mapActions = exports.createNamespacedHelpers = exports.Store = exports.default = void 0; /*!
                                                                                                                                                                                                                                                                      * vuex v3.4.0
                                                                                                                                                                                                                                                                      * (c) 2020 Evan You
                                                                                                                                                                                                                                                                      * @license MIT
                                                                                                                                                                                                                                                                      */
function applyMixin(Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if (options === void 0) options = {};

      options.init = options.init ?
      [vuexInit].concat(options.init) :
      vuexInit;
      _init.call(this, options);
    };
  }

  /**
     * Vuex init hook, injected into each instances init hooks list.
     */

  function vuexInit() {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function' ?
      options.store() :
      options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined' ?
window :
typeof global !== 'undefined' ?
global :
{};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin(store) {
  if (!devtoolHook) {return;}

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
   * Get the first item that pass the test
   * by second argument function
   *
   * @param {Array} list
   * @param {Function} f
   * @return {*}
   */

/**
       * forEach for object
       */
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function (key) {return fn(obj[key], key);});
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function isPromise(val) {
  return val && typeof val.then === 'function';
}

function assert(condition, msg) {
  if (!condition) {throw new Error("[vuex] " + msg);}
}

function partial(fn, arg) {
  return function () {
    return fn(arg);
  };
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module(rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};

Module.prototype.addChild = function addChild(key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};

Module.prototype.hasChild = function hasChild(key) {
  return key in this._children;
};

Module.prototype.update = function update(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties(Module.prototype, prototypeAccessors);

var ModuleCollection = function ModuleCollection(rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get(path) {
  return path.reduce(function (module, key) {
    return module.getChild(key);
  }, this.root);
};

ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '');
  }, '');
};

ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1 = this;
  if (runtime === void 0) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) {return;}

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key);
};

function update(path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
          'manual reload is needed');

        }
        return;
      }
      update(
      path.concat(key),
      targetModule.getChild(key),
      newModule.modules[key]);

    }
  }
}

var functionAssert = {
  assert: function assert(value) {return typeof value === 'function';},
  expected: 'function' };


var objectAssert = {
  assert: function assert(value) {return typeof value === 'function' ||
    typeof value === 'object' && typeof value.handler === 'function';},
  expected: 'function or object with "handler" function' };


var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert };


function assertRawModule(path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) {return;}

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
      assertOptions.assert(value),
      makeAssertionMessage(path, key, type, value, assertOptions.expected));

    });
  });
}

function makeAssertionMessage(path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + path.join('.') + "\"";
  }
  buf += " is " + JSON.stringify(value) + ".";
  return buf;
}

var Vue; // bind on install

var Store = function Store(options) {
  var this$1 = this;
  if (options === void 0) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins;if (plugins === void 0) plugins = [];
  var strict = options.strict;if (strict === void 0) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch(type, payload) {
    return dispatch.call(store, type, payload);
  };
  this.commit = function boundCommit(type, payload, options) {
    return commit.call(store, type, payload, options);
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) {return plugin(this$1);});

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};exports.Store = Store;

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state;
};

prototypeAccessors$1.state.set = function (v) {
  if (true) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
  var type = ref.type;
  var payload = ref.payload;
  var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown mutation type: " + type);
    }
    return;
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });

  this._subscribers.
  slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
  .forEach(function (sub) {return sub(mutation, this$1.state);});

  if (
   true &&
  options && options.silent)
  {
    console.warn(
    "[vuex] mutation type: " + type + ". Silent option has been removed. " +
    'Use the filter functionality in the vue-devtools');

  }
};

Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
  var type = ref.type;
  var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown action type: " + type);
    }
    return;
  }

  try {
    this._actionSubscribers.
    slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .filter(function (sub) {return sub.before;}).
    forEach(function (sub) {return sub.before(action, this$1.state);});
  } catch (e) {
    if (true) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1 ?
  Promise.all(entry.map(function (handler) {return handler(payload);})) :
  entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers.
        filter(function (sub) {return sub.after;}).
        forEach(function (sub) {return sub.after(action, this$1.state);});
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers.
        filter(function (sub) {return sub.error;}).
        forEach(function (sub) {return sub.error(action, this$1.state, error);});
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  });
};

Store.prototype.subscribe = function subscribe(fn, options) {
  return genericSubscribe(fn, this._subscribers, options);
};

Store.prototype.subscribeAction = function subscribeAction(fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options);
};

Store.prototype.watch = function watch(getter, cb, options) {
  var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () {return getter(this$1.state, this$1.getters);}, cb, options);
};

Store.prototype.replaceState = function replaceState(state) {
  var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0) options = {};

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1 = this;

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule(path) {
  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path);
};

Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties(Store.prototype, prototypeAccessors$1);

function genericSubscribe(fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend ?
    subs.unshift(fn) :
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}

function resetStore(store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM(store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function get() {return store._vm[key];},
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state },

    computed: computed });

  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () {return oldVm.$destroy();});
  }
}

function installModule(store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && "development" !== 'production') {
      console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join('/'));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if (true) {
        if (moduleName in parentState) {
          console.warn(
          "[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + path.join('.') + "\"");

        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
   * make localized dispatch, commit, getters and state
   * if there is no namespace, just use root ones
   */
function makeLocalContext(store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
          return;
        }
      }

      return store.dispatch(type, payload);
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
          return;
        }
      }

      store.commit(type, payload, options);
    } };


  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ?
      function () {return store.getters;} :
      function () {return makeLocalGetters(store, namespace);} },

    state: {
      get: function get() {return getNestedState(store.state, path);} } });



  return local;
}

function makeLocalGetters(store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) {return;}

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function get() {return store.getters[type];},
        enumerable: true });

    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace];
}

function registerMutation(store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction(store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler(payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state },
    payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err;
      });
    } else {
      return res;
    }
  });
}

function registerGetter(store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error("[vuex] duplicate getter key: " + type);
    }
    return;
  }
  store._wrappedGetters[type] = function wrappedGetter(store) {
    return rawGetter(
    local.state, // local state
    local.getters, // local getters
    store.state, // root state
    store.getters // root getters
    );
  };
}

function enableStrictMode(store) {
  store._vm.$watch(function () {return this._data.$$state;}, function () {
    if (true) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState(state, path) {
  return path.reduce(function (state, key) {return state[key];}, state);
}

function unifyObjectStyle(type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', "expects string as the type, but found " + typeof type + ".");
  }

  return { type: type, payload: payload, options: options };
}

function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
      '[vuex] already installed. Vue.use(Vuex) should be called only once.');

    }
    return;
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
   * Reduce the code which written in Vue.js for getting the state.
   * @param {String} [namespace] - Module's namespace
   * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
   * @param {Object}
   */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if ( true && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState() {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return;
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function' ?
      val.call(this, state, getters) :
      state[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for committing the mutation
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
     * @return {Object}
     */exports.mapState = mapState;
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if ( true && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return;
        }
        commit = module.context.commit;
      }
      return typeof val === 'function' ?
      val.apply(this, [commit].concat(args)) :
      commit.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for getting the getters
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} getters
     * @return {Object}
     */exports.mapMutations = mapMutations;
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if ( true && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter() {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return;
      }
      if ( true && !(val in this.$store.getters)) {
        console.error("[vuex] unknown getter: " + val);
        return;
      }
      return this.$store.getters[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for dispatch the action
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
     * @return {Object}
     */exports.mapGetters = mapGetters;
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if ( true && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return;
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function' ?
      val.apply(this, [dispatch].concat(args)) :
      dispatch.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
     * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
     * @param {String} namespace
     * @return {Object}
     */exports.mapActions = mapActions;
var createNamespacedHelpers = function createNamespacedHelpers(namespace) {return {
    mapState: mapState.bind(null, namespace),
    mapGetters: mapGetters.bind(null, namespace),
    mapMutations: mapMutations.bind(null, namespace),
    mapActions: mapActions.bind(null, namespace) };
};

/**
    * Normalize the map
    * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
    * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
    * @param {Array|Object} map
    * @return {Object}
    */exports.createNamespacedHelpers = createNamespacedHelpers;
function normalizeMap(map) {
  if (!isValidMap(map)) {
    return [];
  }
  return Array.isArray(map) ?
  map.map(function (key) {return { key: key, val: key };}) :
  Object.keys(map).map(function (key) {return { key: key, val: map[key] };});
}

/**
   * Validate whether given map is valid or not
   * @param {*} map
   * @return {Boolean}
   */
function isValidMap(map) {
  return Array.isArray(map) || isObject(map);
}

/**
   * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
   * @param {Function} fn
   * @return {Function}
   */
function normalizeNamespace(fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map);
  };
}

/**
   * Search a special module from store by namespace. if module not exist, print error message.
   * @param {Object} store
   * @param {String} helper
   * @param {String} namespace
   * @return {Object}
   */
function getModuleByNamespace(store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
  }
  return module;
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers };var _default =


index;exports.default = _default;

/***/ }),
/* 12 */
/*!******************************************************!*\
  !*** F:/ALL笔记/chart/app - h5/store/modules/audio.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default = {\n  state: {\n    //存放全局事件\n    events: [],\n    //获取全局音频管理器\n    RECORD: null,\n    RecordTime: 0,\n    RECORDTIMER: null,\n    sendVoice: null },\n\n  mutations: {\n    //初始化音频管理器\n    initRECORD: function initRECORD(state) {\n      state.RECORD = uni.getRecorderManager();\n      //监听\n      state.RECORD.onStart(function () {\n        state.RecordTime = 0;\n        state.RECORDTIMER = setInterval(function () {\n          state.RecordTime++;\n        }, 1000);\n      });\n\n      //监听录音结束\n      state.RECORD.onStop(function (e) {\n        if (state.RECORDTIMER) {\n          clearInterval(state.RECORDTIMER);\n          state.RECORDTIMER = null;\n        }\n        //发送\n        if (typeof state.sendVoice === 'function') {\n          state.sendVoice(e.tempFilePath);\n        }\n        // if(!state.unRecord){\n        // \t//发送\n        // \tstate.send('audio',e.tempFilePath,{\n        // \t\ttime:state.RecordTime\n        // \t})\n        // }\n      });\n    },\n    //注册音频发送事件\n    regSendVioceEvent: function regSendVioceEvent(state, event) {\n      state.sendVoice = event;\n    },\n    //注册全局事件\n    regEvent: function regEvent(state, event) {\n      // console.log('注册事件')\n      state.events.push(event);\n    },\n    //执行全局事件方法\n    doEvent: function doEvent(state, params) {\n      // console.log('执行事件'+state.events.length)\n      state.events.forEach(function (event) {\n        event(params);\n      });\n    },\n    //注销事件\n    removeEvent: function removeEvent(state, event) {\n      // console.log('注销事件')\n      var index = state.events.findIndex(function (item) {\n        return item === event;\n      });\n      if (index !== -1) {\n        state.events.splice(index, 1);\n      }\n    } },\n\n  actions: {\n    //分发注册全局事件\n    audioOn: function audioOn(_ref,\n\n    event) {var commit = _ref.commit;\n      commit('regEvent', event);\n    },\n    //分发执行全局事件\n    audioEmit: function audioEmit(_ref2,\n\n    params) {var commit = _ref2.commit;\n      commit('doEvent', params);\n    },\n    //分发注销全局事件\n    audioOff: function audioOff(_ref3,\n\n    event) {var commit = _ref3.commit;\n      commit('removeEvent', event);\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvbW9kdWxlcy9hdWRpby5qcyJdLCJuYW1lcyI6WyJzdGF0ZSIsImV2ZW50cyIsIlJFQ09SRCIsIlJlY29yZFRpbWUiLCJSRUNPUkRUSU1FUiIsInNlbmRWb2ljZSIsIm11dGF0aW9ucyIsImluaXRSRUNPUkQiLCJ1bmkiLCJnZXRSZWNvcmRlck1hbmFnZXIiLCJvblN0YXJ0Iiwic2V0SW50ZXJ2YWwiLCJvblN0b3AiLCJlIiwiY2xlYXJJbnRlcnZhbCIsInRlbXBGaWxlUGF0aCIsInJlZ1NlbmRWaW9jZUV2ZW50IiwiZXZlbnQiLCJyZWdFdmVudCIsInB1c2giLCJkb0V2ZW50IiwicGFyYW1zIiwiZm9yRWFjaCIsInJlbW92ZUV2ZW50IiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwic3BsaWNlIiwiYWN0aW9ucyIsImF1ZGlvT24iLCJjb21taXQiLCJhdWRpb0VtaXQiLCJhdWRpb09mZiJdLCJtYXBwaW5ncyI6InNHQUFlO0FBQ2RBLE9BQUssRUFBRTtBQUNOO0FBQ0FDLFVBQU0sRUFBRSxFQUZGO0FBR047QUFDQUMsVUFBTSxFQUFFLElBSkY7QUFLTkMsY0FBVSxFQUFFLENBTE47QUFNTkMsZUFBVyxFQUFFLElBTlA7QUFPTkMsYUFBUyxFQUFFLElBUEwsRUFETzs7QUFVZEMsV0FBUyxFQUFFO0FBQ1Y7QUFDQUMsY0FGVSxzQkFFQ1AsS0FGRCxFQUVRO0FBQ2pCQSxXQUFLLENBQUNFLE1BQU4sR0FBZU0sR0FBRyxDQUFDQyxrQkFBSixFQUFmO0FBQ0E7QUFDQVQsV0FBSyxDQUFDRSxNQUFOLENBQWFRLE9BQWIsQ0FBcUIsWUFBTTtBQUMxQlYsYUFBSyxDQUFDRyxVQUFOLEdBQW1CLENBQW5CO0FBQ0FILGFBQUssQ0FBQ0ksV0FBTixHQUFvQk8sV0FBVyxDQUFDLFlBQU07QUFDckNYLGVBQUssQ0FBQ0csVUFBTjtBQUNBLFNBRjhCLEVBRTVCLElBRjRCLENBQS9CO0FBR0EsT0FMRDs7QUFPQTtBQUNBSCxXQUFLLENBQUNFLE1BQU4sQ0FBYVUsTUFBYixDQUFvQixVQUFDQyxDQUFELEVBQU87QUFDMUIsWUFBSWIsS0FBSyxDQUFDSSxXQUFWLEVBQXVCO0FBQ3RCVSx1QkFBYSxDQUFDZCxLQUFLLENBQUNJLFdBQVAsQ0FBYjtBQUNBSixlQUFLLENBQUNJLFdBQU4sR0FBb0IsSUFBcEI7QUFDQTtBQUNEO0FBQ0EsWUFBSSxPQUFPSixLQUFLLENBQUNLLFNBQWIsS0FBMkIsVUFBL0IsRUFBMkM7QUFDMUNMLGVBQUssQ0FBQ0ssU0FBTixDQUFnQlEsQ0FBQyxDQUFDRSxZQUFsQjtBQUNBO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FmRDtBQWdCQSxLQTdCUztBQThCVjtBQUNBQyxxQkEvQlUsNkJBK0JRaEIsS0EvQlIsRUErQmVpQixLQS9CZixFQStCc0I7QUFDL0JqQixXQUFLLENBQUNLLFNBQU4sR0FBa0JZLEtBQWxCO0FBQ0EsS0FqQ1M7QUFrQ1Y7QUFDQUMsWUFuQ1Usb0JBbUNEbEIsS0FuQ0MsRUFtQ01pQixLQW5DTixFQW1DYTtBQUN0QjtBQUNBakIsV0FBSyxDQUFDQyxNQUFOLENBQWFrQixJQUFiLENBQWtCRixLQUFsQjtBQUNBLEtBdENTO0FBdUNWO0FBQ0FHLFdBeENVLG1CQXdDRnBCLEtBeENFLEVBd0NLcUIsTUF4Q0wsRUF3Q2E7QUFDdEI7QUFDQXJCLFdBQUssQ0FBQ0MsTUFBTixDQUFhcUIsT0FBYixDQUFxQixVQUFBTCxLQUFLLEVBQUk7QUFDN0JBLGFBQUssQ0FBQ0ksTUFBRCxDQUFMO0FBQ0EsT0FGRDtBQUdBLEtBN0NTO0FBOENWO0FBQ0FFLGVBL0NVLHVCQStDRXZCLEtBL0NGLEVBK0NTaUIsS0EvQ1QsRUErQ2dCO0FBQ3pCO0FBQ0EsVUFBSU8sS0FBSyxHQUFHeEIsS0FBSyxDQUFDQyxNQUFOLENBQWF3QixTQUFiLENBQXVCLFVBQUFDLElBQUksRUFBSTtBQUMxQyxlQUFPQSxJQUFJLEtBQUtULEtBQWhCO0FBQ0EsT0FGVyxDQUFaO0FBR0EsVUFBSU8sS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNqQnhCLGFBQUssQ0FBQ0MsTUFBTixDQUFhMEIsTUFBYixDQUFvQkgsS0FBcEIsRUFBMkIsQ0FBM0I7QUFDQTtBQUNELEtBdkRTLEVBVkc7O0FBbUVkSSxTQUFPLEVBQUU7QUFDUjtBQUNBQyxXQUZROztBQUlMWixTQUpLLEVBSUUsS0FEVGEsTUFDUyxRQURUQSxNQUNTO0FBQ1RBLFlBQU0sQ0FBQyxVQUFELEVBQWFiLEtBQWIsQ0FBTjtBQUNBLEtBTk87QUFPUjtBQUNBYyxhQVJROztBQVVMVixVQVZLLEVBVUcsS0FEVlMsTUFDVSxTQURWQSxNQUNVO0FBQ1ZBLFlBQU0sQ0FBQyxTQUFELEVBQVlULE1BQVosQ0FBTjtBQUNBLEtBWk87QUFhUjtBQUNBVyxZQWRROztBQWdCTGYsU0FoQkssRUFnQkUsS0FEVGEsTUFDUyxTQURUQSxNQUNTO0FBQ1RBLFlBQU0sQ0FBQyxhQUFELEVBQWdCYixLQUFoQixDQUFOO0FBQ0EsS0FsQk8sRUFuRUssRSIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuXHRzdGF0ZToge1xyXG5cdFx0Ly/lrZjmlL7lhajlsYDkuovku7ZcclxuXHRcdGV2ZW50czogW10sXHJcblx0XHQvL+iOt+WPluWFqOWxgOmfs+mikeeuoeeQhuWZqFxyXG5cdFx0UkVDT1JEOiBudWxsLFxyXG5cdFx0UmVjb3JkVGltZTogMCxcclxuXHRcdFJFQ09SRFRJTUVSOiBudWxsLFxyXG5cdFx0c2VuZFZvaWNlOiBudWxsXHJcblx0fSxcclxuXHRtdXRhdGlvbnM6IHtcclxuXHRcdC8v5Yid5aeL5YyW6Z+z6aKR566h55CG5ZmoXHJcblx0XHRpbml0UkVDT1JEKHN0YXRlKSB7XHJcblx0XHRcdHN0YXRlLlJFQ09SRCA9IHVuaS5nZXRSZWNvcmRlck1hbmFnZXIoKVxyXG5cdFx0XHQvL+ebkeWQrFxyXG5cdFx0XHRzdGF0ZS5SRUNPUkQub25TdGFydCgoKSA9PiB7XHJcblx0XHRcdFx0c3RhdGUuUmVjb3JkVGltZSA9IDBcclxuXHRcdFx0XHRzdGF0ZS5SRUNPUkRUSU1FUiA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0XHRcdHN0YXRlLlJlY29yZFRpbWUrK1xyXG5cdFx0XHRcdH0sIDEwMDApXHJcblx0XHRcdH0pXHJcblxyXG5cdFx0XHQvL+ebkeWQrOW9lemfs+e7k+adn1xyXG5cdFx0XHRzdGF0ZS5SRUNPUkQub25TdG9wKChlKSA9PiB7XHJcblx0XHRcdFx0aWYgKHN0YXRlLlJFQ09SRFRJTUVSKSB7XHJcblx0XHRcdFx0XHRjbGVhckludGVydmFsKHN0YXRlLlJFQ09SRFRJTUVSKVxyXG5cdFx0XHRcdFx0c3RhdGUuUkVDT1JEVElNRVIgPSBudWxsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8v5Y+R6YCBXHJcblx0XHRcdFx0aWYgKHR5cGVvZiBzdGF0ZS5zZW5kVm9pY2UgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0XHRcdHN0YXRlLnNlbmRWb2ljZShlLnRlbXBGaWxlUGF0aClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gaWYoIXN0YXRlLnVuUmVjb3JkKXtcclxuXHRcdFx0XHQvLyBcdC8v5Y+R6YCBXHJcblx0XHRcdFx0Ly8gXHRzdGF0ZS5zZW5kKCdhdWRpbycsZS50ZW1wRmlsZVBhdGgse1xyXG5cdFx0XHRcdC8vIFx0XHR0aW1lOnN0YXRlLlJlY29yZFRpbWVcclxuXHRcdFx0XHQvLyBcdH0pXHJcblx0XHRcdFx0Ly8gfVxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdC8v5rOo5YaM6Z+z6aKR5Y+R6YCB5LqL5Lu2XHJcblx0XHRyZWdTZW5kVmlvY2VFdmVudChzdGF0ZSwgZXZlbnQpIHtcclxuXHRcdFx0c3RhdGUuc2VuZFZvaWNlID0gZXZlbnRcclxuXHRcdH0sXHJcblx0XHQvL+azqOWGjOWFqOWxgOS6i+S7tlxyXG5cdFx0cmVnRXZlbnQoc3RhdGUsIGV2ZW50KSB7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCfms6jlhozkuovku7YnKVxyXG5cdFx0XHRzdGF0ZS5ldmVudHMucHVzaChldmVudClcclxuXHRcdH0sXHJcblx0XHQvL+aJp+ihjOWFqOWxgOS6i+S7tuaWueazlVxyXG5cdFx0ZG9FdmVudChzdGF0ZSwgcGFyYW1zKSB7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCfmiafooYzkuovku7YnK3N0YXRlLmV2ZW50cy5sZW5ndGgpXHJcblx0XHRcdHN0YXRlLmV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcclxuXHRcdFx0XHRldmVudChwYXJhbXMpXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0Ly/ms6jplIDkuovku7ZcclxuXHRcdHJlbW92ZUV2ZW50KHN0YXRlLCBldmVudCkge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZygn5rOo6ZSA5LqL5Lu2JylcclxuXHRcdFx0bGV0IGluZGV4ID0gc3RhdGUuZXZlbnRzLmZpbmRJbmRleChpdGVtID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gaXRlbSA9PT0gZXZlbnRcclxuXHRcdFx0fSlcclxuXHRcdFx0aWYgKGluZGV4ICE9PSAtMSkge1xyXG5cdFx0XHRcdHN0YXRlLmV2ZW50cy5zcGxpY2UoaW5kZXgsIDEpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdGFjdGlvbnM6IHtcclxuXHRcdC8v5YiG5Y+R5rOo5YaM5YWo5bGA5LqL5Lu2XHJcblx0XHRhdWRpb09uKHtcclxuXHRcdFx0Y29tbWl0XHJcblx0XHR9LCBldmVudCkge1xyXG5cdFx0XHRjb21taXQoJ3JlZ0V2ZW50JywgZXZlbnQpXHJcblx0XHR9LFxyXG5cdFx0Ly/liIblj5HmiafooYzlhajlsYDkuovku7ZcclxuXHRcdGF1ZGlvRW1pdCh7XHJcblx0XHRcdGNvbW1pdFxyXG5cdFx0fSwgcGFyYW1zKSB7XHJcblx0XHRcdGNvbW1pdCgnZG9FdmVudCcsIHBhcmFtcylcclxuXHRcdH0sXHJcblx0XHQvL+WIhuWPkeazqOmUgOWFqOWxgOS6i+S7tlxyXG5cdFx0YXVkaW9PZmYoe1xyXG5cdFx0XHRjb21taXRcclxuXHRcdH0sIGV2ZW50KSB7XHJcblx0XHRcdGNvbW1pdCgncmVtb3ZlRXZlbnQnLCBldmVudClcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!*****************************************************!*\
  !*** F:/ALL笔记/chart/app - h5/store/modules/user.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _utils = _interopRequireDefault(__webpack_require__(/*! @/common/free-lib/utils.js */ 14));\nvar _request = _interopRequireDefault(__webpack_require__(/*! @/common/free-lib/request.js */ 16));\nvar _chat = _interopRequireDefault(__webpack_require__(/*! @/common/free-lib/chat.js */ 17));\nvar _config = _interopRequireDefault(__webpack_require__(/*! @/common/free-lib/config.js */ 15));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =\n\n{\n  state: {\n    user: false,\n    apply: {\n      rows: [],\n      count: 0 },\n\n    mailList: [],\n    chat: null,\n\n    //会话列表\n    chatList: [],\n\n    // 总未读数\n    totalNoreadnum: 0 },\n\n  mutations: {\n    updateUser: function updateUser(state, _ref) {var k = _ref.k,v = _ref.v;\n      if (state.user) {\n        state.user[k] = v;\n        _utils.default.setStorage('user', JSON.stringify(state.user));\n      }\n    } },\n\n  actions: {\n    // 登陆后处理\n    login: function login(_ref2, user) {var state = _ref2.state,dispatch = _ref2.dispatch;\n      // 存到状态中\n      state.user = user;\n      // 存储到本地存储\n      _utils.default.setStorage('token', user.token);\n      _utils.default.setStorage('user', JSON.stringify(user));\n      _utils.default.setStorage('user_id', user.id);\n\n      // 获取好友申请\n      dispatch('getApply');\n\n      //连接socket\n      state.chat = new _chat.default({ url: _config.default.socketUrl });\n      // 获取会话列表\n      dispatch('getChatList');\n      // 初始化总未读数角标\n      dispatch('updateBadge');\n    },\n    // 退出登陆\n    logout: function logout(_ref3) {var state = _ref3.state;\n      // 清除登陆状态\n      state.user = false;\n      _utils.default.removeStorage('token');\n      _utils.default.removeStorage('user');\n      _utils.default.removeStorage('user_id');\n      // 关闭socket连接\n      state.chat.close();\n      state.chat = null;\n      // 路由跳转\n      uni.reLaunch({\n        url: '/pages/common/login/login' });\n\n    },\n    // 初始化登陆状态\n    init: function init(_ref4) {var state = _ref4.state,dispatch = _ref4.dispatch;\n      // 拿到存储的数据\n      var user = _utils.default.getStorage('user');\n      if (user) {\n        // 初始化登陆状态\n        state.user = JSON.parse(user);\n        // 连接socket\n        state.chat = new _chat.default({ url: _config.default.socketUrl });\n        // 获取会话列表\n        dispatch('getChatList');\n        // 获取好友申请\n        dispatch('getApply');\n        // 初始化总未读数角标\n        dispatch('updateBadge');\n      }\n    },\n    // 获取好友申请列表\n    getApply: function getApply(_ref5) {var state = _ref5.state,dispatch = _ref5.dispatch;var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n      _request.default.get('/apply/' + page + '?limit=' + page * 10).then(function (res) {\n        state.apply = res;\n        // console.log(state.apply.count)\n        // 更新通讯录角标提示\n        dispatch('updataMailBadge');\n      });\n    },\n    // 更新通讯录角标\n    updataMailBadge: function updataMailBadge(_ref6) {var state = _ref6.state;\n      if (state.apply.count > 0) {\n        var count = state.apply.count > 99 ? '99+' : state.apply.count.toString();\n        return uni.setTabBarBadge({\n          index: 1,\n          text: count });\n\n      }\n      uni.removeTabBarBadge({\n        index: 1 });\n\n    },\n    // 获取通讯录列表\n    getMailList: function getMailList(_ref7) {var state = _ref7.state,dispatch = _ref7.dispatch;\n      _request.default.get('/friend/list').then(function (res) {\n        state.mailList = res.rows.newList;\n      });\n    },\n    // 获取会话列表\n    getChatList: function getChatList(_ref8) {var state = _ref8.state;\n      state.chatList = state.chat.getChatList();\n      __f__(\"log\", '获取会话列表', state.chatList, \" at store/modules/user.js:113\");\n      // 监听会话列表变化\n      uni.$on('onUpdateChatList', function (list) {\n        state.chatList = list;\n      });\n    },\n    // 初始化总未读数角标\n    updateBadge: function updateBadge(_ref9) {var state = _ref9.state;\n      // 开启监听总未读数变化\n      uni.$on('totalNoreadnum', function (num) {\n        state.totalNoreadnum = num;\n      });\n      state.chat.updateBadge();\n    },\n    // 断线重连\n    reconnect: function reconnect(_ref10) {var state = _ref10.state;\n      if (state.user && state.chat) {\n        state.chat.reconnect();\n      }\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 2)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvbW9kdWxlcy91c2VyLmpzIl0sIm5hbWVzIjpbInN0YXRlIiwidXNlciIsImFwcGx5Iiwicm93cyIsImNvdW50IiwibWFpbExpc3QiLCJjaGF0IiwiY2hhdExpc3QiLCJ0b3RhbE5vcmVhZG51bSIsIm11dGF0aW9ucyIsInVwZGF0ZVVzZXIiLCJrIiwidiIsIiRVIiwic2V0U3RvcmFnZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhY3Rpb25zIiwibG9naW4iLCJkaXNwYXRjaCIsInRva2VuIiwiaWQiLCJDaGF0IiwidXJsIiwiJEMiLCJzb2NrZXRVcmwiLCJsb2dvdXQiLCJyZW1vdmVTdG9yYWdlIiwiY2xvc2UiLCJ1bmkiLCJyZUxhdW5jaCIsImluaXQiLCJnZXRTdG9yYWdlIiwicGFyc2UiLCJnZXRBcHBseSIsInBhZ2UiLCIkSCIsImdldCIsInRoZW4iLCJyZXMiLCJ1cGRhdGFNYWlsQmFkZ2UiLCJ0b1N0cmluZyIsInNldFRhYkJhckJhZGdlIiwiaW5kZXgiLCJ0ZXh0IiwicmVtb3ZlVGFiQmFyQmFkZ2UiLCJnZXRNYWlsTGlzdCIsIm5ld0xpc3QiLCJnZXRDaGF0TGlzdCIsIiRvbiIsImxpc3QiLCJ1cGRhdGVCYWRnZSIsIm51bSIsInJlY29ubmVjdCJdLCJtYXBwaW5ncyI6Im9JQUFBO0FBQ0E7QUFDQTtBQUNBLGlHOztBQUVlO0FBQ2RBLE9BQUssRUFBQztBQUNMQyxRQUFJLEVBQUMsS0FEQTtBQUVMQyxTQUFLLEVBQUM7QUFDTEMsVUFBSSxFQUFDLEVBREE7QUFFTEMsV0FBSyxFQUFDLENBRkQsRUFGRDs7QUFNTEMsWUFBUSxFQUFDLEVBTko7QUFPTEMsUUFBSSxFQUFDLElBUEE7O0FBU0w7QUFDQUMsWUFBUSxFQUFDLEVBVko7O0FBWUw7QUFDQUMsa0JBQWMsRUFBQyxDQWJWLEVBRFE7O0FBZ0JkQyxXQUFTLEVBQUM7QUFDVEMsY0FEUyxzQkFDRVYsS0FERixRQUNpQixLQUFOVyxDQUFNLFFBQU5BLENBQU0sQ0FBSkMs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QUFPLFNBQVBBLEtBQU87QUFDbkI7QUFDQTZCLFNBQUcsQ0FBQ29CLEdBQUosQ0FBUSxnQkFBUixFQUF5QixVQUFDRyxHQUFELEVBQVM7QUFDakNwRCxhQUFLLENBQUNRLGNBQU4sR0FBdUI0QyxHQUF2QjtBQUNBLE9BRkQ7QUFHQXBELFdBQUssQ0FBQ00sSUFBTixDQUFXNkMsV0FBWDtBQUNBLEtBaEdNO0FBaUdQO0FBQ0FFLGFBbEdPLDZCQWtHYSxLQUFSckQsS0FBUSxVQUFSQSxLQUFRO0FBQ25CLFVBQUdBLEtBQUssQ0FBQ0MsSUFBTixJQUFjRCxLQUFLLENBQUNNLElBQXZCLEVBQTRCO0FBQzNCTixhQUFLLENBQUNNLElBQU4sQ0FBVytDLFNBQVg7QUFDQTtBQUNELEtBdEdNLEVBeEJNLEUiLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJFUgZnJvbSAnQC9jb21tb24vZnJlZS1saWIvdXRpbHMuanMnXHJcbmltcG9ydCAkSCBmcm9tICdAL2NvbW1vbi9mcmVlLWxpYi9yZXF1ZXN0LmpzJ1xyXG5pbXBvcnQgQ2hhdCBmcm9tICdAL2NvbW1vbi9mcmVlLWxpYi9jaGF0LmpzJ1xyXG5pbXBvcnQgJEMgZnJvbSAnQC9jb21tb24vZnJlZS1saWIvY29uZmlnLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHN0YXRlOntcclxuXHRcdHVzZXI6ZmFsc2UsXHJcblx0XHRhcHBseTp7XHJcblx0XHRcdHJvd3M6W10sXHJcblx0XHRcdGNvdW50OjBcclxuXHRcdH0sXHJcblx0XHRtYWlsTGlzdDpbXSxcclxuXHRcdGNoYXQ6bnVsbCxcclxuXHRcdFxyXG5cdFx0Ly/kvJror53liJfooahcclxuXHRcdGNoYXRMaXN0OltdLFxyXG5cdFx0XHJcblx0XHQvLyDmgLvmnKror7vmlbBcclxuXHRcdHRvdGFsTm9yZWFkbnVtOjAsXHJcblx0fSxcclxuXHRtdXRhdGlvbnM6e1xyXG5cdFx0dXBkYXRlVXNlcihzdGF0ZSwgeyBrLHYgfSl7XHJcblx0XHRcdGlmKHN0YXRlLnVzZXIpe1xyXG5cdFx0XHRcdHN0YXRlLnVzZXJba10gPSB2XHJcblx0XHRcdFx0JFUuc2V0U3RvcmFnZSgndXNlcicsSlNPTi5zdHJpbmdpZnkoc3RhdGUudXNlcikpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdGFjdGlvbnM6e1xyXG5cdFx0Ly8g55m76ZmG5ZCO5aSE55CGXHJcblx0XHRsb2dpbih7IHN0YXRlLGRpc3BhdGNoIH0sdXNlcil7XHJcblx0XHRcdC8vIOWtmOWIsOeKtuaAgeS4rVxyXG5cdFx0XHRzdGF0ZS51c2VyID0gdXNlclxyXG5cdFx0XHQvLyDlrZjlgqjliLDmnKzlnLDlrZjlgqhcclxuXHRcdFx0JFUuc2V0U3RvcmFnZSgndG9rZW4nLHVzZXIudG9rZW4pXHJcblx0XHRcdCRVLnNldFN0b3JhZ2UoJ3VzZXInLEpTT04uc3RyaW5naWZ5KHVzZXIpKVxyXG5cdFx0XHQkVS5zZXRTdG9yYWdlKCd1c2VyX2lkJyx1c2VyLmlkKVxyXG5cdFx0XHRcclxuXHRcdFx0Ly8g6I635Y+W5aW95Y+L55Sz6K+3XHJcblx0XHRcdGRpc3BhdGNoKCdnZXRBcHBseScpXHJcblx0XHRcdFxyXG5cdFx0XHQvL+i/nuaOpXNvY2tldFxyXG5cdFx0XHRzdGF0ZS5jaGF0ID0gbmV3IENoYXQoe3VybDokQy5zb2NrZXRVcmx9KVxyXG5cdFx0XHQvLyDojrflj5bkvJror53liJfooahcclxuXHRcdFx0ZGlzcGF0Y2goJ2dldENoYXRMaXN0JylcclxuXHRcdFx0Ly8g5Yid5aeL5YyW5oC75pyq6K+75pWw6KeS5qCHXHJcblx0XHRcdGRpc3BhdGNoKCd1cGRhdGVCYWRnZScpXHJcblx0XHR9LFxyXG5cdFx0Ly8g6YCA5Ye655m76ZmGXHJcblx0XHRsb2dvdXQoe3N0YXRlfSl7XHJcblx0XHRcdC8vIOa4hemZpOeZu+mZhueKtuaAgVxyXG5cdFx0XHRzdGF0ZS51c2VyID0gZmFsc2VcclxuXHRcdFx0JFUucmVtb3ZlU3RvcmFnZSgndG9rZW4nKVxyXG5cdFx0XHQkVS5yZW1vdmVTdG9yYWdlKCd1c2VyJylcclxuXHRcdFx0JFUucmVtb3ZlU3RvcmFnZSgndXNlcl9pZCcpXHJcblx0XHRcdC8vIOWFs+mXrXNvY2tldOi/nuaOpVxyXG5cdFx0XHRzdGF0ZS5jaGF0LmNsb3NlKClcclxuXHRcdFx0c3RhdGUuY2hhdCA9IG51bGxcclxuXHRcdFx0Ly8g6Lev55Sx6Lez6L2sXHJcblx0XHRcdHVuaS5yZUxhdW5jaCh7XHJcblx0XHRcdFx0dXJsOicvcGFnZXMvY29tbW9uL2xvZ2luL2xvZ2luJ1xyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdC8vIOWIneWni+WMlueZu+mZhueKtuaAgVxyXG5cdFx0aW5pdCh7c3RhdGUsZGlzcGF0Y2h9KXtcclxuXHRcdFx0Ly8g5ou/5Yiw5a2Y5YKo55qE5pWw5o2uXHJcblx0XHRcdGxldCB1c2VyID0gJFUuZ2V0U3RvcmFnZSgndXNlcicpXHJcblx0XHRcdGlmKHVzZXIpe1xyXG5cdFx0XHRcdC8vIOWIneWni+WMlueZu+mZhueKtuaAgVxyXG5cdFx0XHRcdHN0YXRlLnVzZXIgPSBKU09OLnBhcnNlKHVzZXIpXHJcblx0XHRcdFx0Ly8g6L+e5o6lc29ja2V0XHJcblx0XHRcdFx0c3RhdGUuY2hhdCA9IG5ldyBDaGF0KHt1cmw6JEMuc29ja2V0VXJsfSlcclxuXHRcdFx0XHQvLyDojrflj5bkvJror53liJfooahcclxuXHRcdFx0XHRkaXNwYXRjaCgnZ2V0Q2hhdExpc3QnKVxyXG5cdFx0XHRcdC8vIOiOt+WPluWlveWPi+eUs+ivt1xyXG5cdFx0XHRcdGRpc3BhdGNoKCdnZXRBcHBseScpXHJcblx0XHRcdFx0Ly8g5Yid5aeL5YyW5oC75pyq6K+75pWw6KeS5qCHXHJcblx0XHRcdFx0ZGlzcGF0Y2goJ3VwZGF0ZUJhZGdlJylcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8vIOiOt+WPluWlveWPi+eUs+ivt+WIl+ihqFxyXG5cdFx0Z2V0QXBwbHkoe3N0YXRlLGRpc3BhdGNofSxwYWdlID0gMSl7XHJcblx0XHRcdCRILmdldCgnL2FwcGx5LycrcGFnZSArICc/bGltaXQ9JytwYWdlKjEwKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0c3RhdGUuYXBwbHkgPSByZXNcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhzdGF0ZS5hcHBseS5jb3VudClcclxuXHRcdFx0XHQvLyDmm7TmlrDpgJrorq/lvZXop5LmoIfmj5DnpLpcclxuXHRcdFx0XHRkaXNwYXRjaCgndXBkYXRhTWFpbEJhZGdlJylcclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHQvLyDmm7TmlrDpgJrorq/lvZXop5LmoIdcclxuXHRcdHVwZGF0YU1haWxCYWRnZSh7c3RhdGV9KXtcclxuXHRcdFx0aWYoc3RhdGUuYXBwbHkuY291bnQgPiAwKXtcclxuXHRcdFx0XHRsZXQgY291bnQgPSAgc3RhdGUuYXBwbHkuY291bnQgPiA5OSA/ICAnOTkrJyA6IHN0YXRlLmFwcGx5LmNvdW50LnRvU3RyaW5nKClcclxuXHRcdFx0XHRyZXR1cm4gdW5pLnNldFRhYkJhckJhZGdlKHtcclxuXHRcdFx0XHRcdGluZGV4OjEsXHJcblx0XHRcdFx0XHR0ZXh0OmNvdW50XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0XHR1bmkucmVtb3ZlVGFiQmFyQmFkZ2Uoe1xyXG5cdFx0XHRcdGluZGV4OjFcclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHQvLyDojrflj5bpgJrorq/lvZXliJfooahcclxuXHRcdGdldE1haWxMaXN0KHtzdGF0ZSxkaXNwYXRjaH0pIHtcclxuXHRcdFx0JEguZ2V0KCcvZnJpZW5kL2xpc3QnKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0c3RhdGUubWFpbExpc3QgPSByZXMucm93cy5uZXdMaXN0XHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0Ly8g6I635Y+W5Lya6K+d5YiX6KGoXHJcblx0XHRnZXRDaGF0TGlzdCh7IHN0YXRlIH0pe1xyXG5cdFx0XHRzdGF0ZS5jaGF0TGlzdCA9IHN0YXRlLmNoYXQuZ2V0Q2hhdExpc3QoKVxyXG5cdFx0XHRjb25zb2xlLmxvZygn6I635Y+W5Lya6K+d5YiX6KGoJyxzdGF0ZS5jaGF0TGlzdClcclxuXHRcdFx0Ly8g55uR5ZCs5Lya6K+d5YiX6KGo5Y+Y5YyWXHJcblx0XHRcdHVuaS4kb24oJ29uVXBkYXRlQ2hhdExpc3QnLChsaXN0KSA9PiB7XHJcblx0XHRcdFx0c3RhdGUuY2hhdExpc3QgPSBsaXN0XHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0Ly8g5Yid5aeL5YyW5oC75pyq6K+75pWw6KeS5qCHXHJcblx0XHR1cGRhdGVCYWRnZSh7c3RhdGV9KXtcclxuXHRcdFx0Ly8g5byA5ZCv55uR5ZCs5oC75pyq6K+75pWw5Y+Y5YyWXHJcblx0XHRcdHVuaS4kb24oJ3RvdGFsTm9yZWFkbnVtJywobnVtKSA9PiB7XHJcblx0XHRcdFx0c3RhdGUudG90YWxOb3JlYWRudW0gPSBudW1cclxuXHRcdFx0fSlcclxuXHRcdFx0c3RhdGUuY2hhdC51cGRhdGVCYWRnZSgpXHJcblx0XHR9LFxyXG5cdFx0Ly8g5pat57q/6YeN6L+eXHJcblx0XHRyZWNvbm5lY3QoeyBzdGF0ZSB9KXtcclxuXHRcdFx0aWYoc3RhdGUudXNlciAmJiBzdGF0ZS5jaGF0KXtcclxuXHRcdFx0XHRzdGF0ZS5jaGF0LnJlY29ubmVjdCgpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!********************************************************!*\
  !*** F:/ALL笔记/chart/app - h5/common/free-lib/utils.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _config = _interopRequireDefault(__webpack_require__(/*! ./config.js */ 15));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =\n{\n  // 获取存储列表数据\n  getStorage: function getStorage(key) {\n    var data = null;\n    if (_config.default.env === 'dev') {\n      data = window.sessionStorage.getItem(key);\n    } else {\n      data = uni.getStorageSync(key);\n    }\n    return data;\n  },\n  // 设置存储\n  setStorage: function setStorage(key, data) {\n    if (_config.default.env === 'dev') {\n      return window.sessionStorage.setItem(key, data);\n    } else {\n      return uni.setStorageSync(key, data);\n    }\n  },\n  // 删除存储\n  removeStorage: function removeStorage(key) {\n    if (_config.default.env === 'dev') {\n      return window.sessionStorage.removeItem(key);\n    } else {\n      return uni.removeStorageSync(key);\n    }\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2ZyZWUtbGliL3V0aWxzLmpzIl0sIm5hbWVzIjpbImdldFN0b3JhZ2UiLCJrZXkiLCJkYXRhIiwiJEMiLCJlbnYiLCJ3aW5kb3ciLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJ1bmkiLCJnZXRTdG9yYWdlU3luYyIsInNldFN0b3JhZ2UiLCJzZXRJdGVtIiwic2V0U3RvcmFnZVN5bmMiLCJyZW1vdmVTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInJlbW92ZVN0b3JhZ2VTeW5jIl0sIm1hcHBpbmdzIjoidUZBQUEsaUY7QUFDZTtBQUNYO0FBQ0FBLFlBRlcsc0JBRUFDLEdBRkEsRUFFSTtBQUNYLFFBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0EsUUFBR0MsZ0JBQUdDLEdBQUgsS0FBVyxLQUFkLEVBQW9CO0FBQ2hCRixVQUFJLEdBQUdHLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsQ0FBOEJOLEdBQTlCLENBQVA7QUFDSCxLQUZELE1BRU87QUFDSEMsVUFBSSxHQUFHTSxHQUFHLENBQUNDLGNBQUosQ0FBbUJSLEdBQW5CLENBQVA7QUFDSDtBQUNELFdBQU9DLElBQVA7QUFDSCxHQVZVO0FBV1g7QUFDQVEsWUFaVyxzQkFZQVQsR0FaQSxFQVlJQyxJQVpKLEVBWVM7QUFDaEIsUUFBR0MsZ0JBQUdDLEdBQUgsS0FBVyxLQUFkLEVBQW9CO0FBQ2hCLGFBQU9DLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkssT0FBdEIsQ0FBOEJWLEdBQTlCLEVBQWtDQyxJQUFsQyxDQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsYUFBT00sR0FBRyxDQUFDSSxjQUFKLENBQW1CWCxHQUFuQixFQUF1QkMsSUFBdkIsQ0FBUDtBQUNIO0FBQ0osR0FsQlU7QUFtQlg7QUFDQVcsZUFwQlcseUJBb0JHWixHQXBCSCxFQW9CTztBQUNkLFFBQUdFLGdCQUFHQyxHQUFILEtBQVcsS0FBZCxFQUFvQjtBQUNoQixhQUFPQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JRLFVBQXRCLENBQWlDYixHQUFqQyxDQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsYUFBT08sR0FBRyxDQUFDTyxpQkFBSixDQUFzQmQsR0FBdEIsQ0FBUDtBQUNIO0FBQ0osR0ExQlUsRSIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkQyBmcm9tICcuL2NvbmZpZy5qcydcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAvLyDojrflj5blrZjlgqjliJfooajmlbDmja5cbiAgICBnZXRTdG9yYWdlKGtleSl7XG4gICAgICAgIGxldCBkYXRhID0gbnVsbDtcbiAgICAgICAgaWYoJEMuZW52ID09PSAnZGV2Jyl7XG4gICAgICAgICAgICBkYXRhID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YSA9IHVuaS5nZXRTdG9yYWdlU3luYyhrZXkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICB9LFxuICAgIC8vIOiuvue9ruWtmOWCqFxuICAgIHNldFN0b3JhZ2Uoa2V5LGRhdGEpe1xuICAgICAgICBpZigkQy5lbnYgPT09ICdkZXYnKXtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksZGF0YSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1bmkuc2V0U3RvcmFnZVN5bmMoa2V5LGRhdGEpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOWIoOmZpOWtmOWCqFxuICAgIHJlbW92ZVN0b3JhZ2Uoa2V5KXtcbiAgICAgICAgaWYoJEMuZW52ID09PSAnZGV2Jyl7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoa2V5KVxuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!*********************************************************!*\
  !*** F:/ALL笔记/chart/app - h5/common/free-lib/config.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default = {\n\n  baseUrl: \"http://127.0.0.1:7001\",\n\n\n\n\n  socketUrl: \"ws://127.0.0.1:7001/ws\",\n  env: \"dev\",\n\n  codeUrl: 'http://127.0.0.1:7001' };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2ZyZWUtbGliL2NvbmZpZy5qcyJdLCJuYW1lcyI6WyJiYXNlVXJsIiwic29ja2V0VXJsIiwiZW52IiwiY29kZVVybCJdLCJtYXBwaW5ncyI6InNHQUFlOztBQUVYQSxTQUFPLEVBQUMsdUJBRkc7Ozs7O0FBT1hDLFdBQVMsRUFBQyx3QkFQQztBQVFYQyxLQUFHLEVBQUMsS0FSTzs7QUFVZEMsU0FBTyxFQUFDLHVCQVZNLEUiLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gICAgYmFzZVVybDpcImh0dHA6Ly8xMjcuMC4wLjE6NzAwMVwiLFxyXG5cclxuXHJcblxyXG5cclxuICAgIHNvY2tldFVybDpcIndzOi8vMTI3LjAuMC4xOjcwMDEvd3NcIixcclxuICAgIGVudjpcImRldlwiLFxyXG5cdFxyXG5cdGNvZGVVcmw6J2h0dHA6Ly8xMjcuMC4wLjE6NzAwMSdcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!**********************************************************!*\
  !*** F:/ALL笔记/chart/app - h5/common/free-lib/request.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _config = _interopRequireDefault(__webpack_require__(/*! ./config.js */ 15));\nvar _utils = _interopRequireDefault(__webpack_require__(/*! ./utils.js */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =\n\n{\n  // 全局配置\n  common: {\n    baseUrl: _config.default.baseUrl,\n    header: {\n      'Content-Type': 'application/json;charset=UTF-8' },\n\n    data: {},\n    method: 'GET',\n    dataType: 'json',\n    token: true },\n\n  // 请求 返回promise\n  request: function request() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    // 组织参数\n    options.url = this.common.baseUrl + options.url;\n    options.header = options.header || this.common.header;\n    options.data = options.data || this.common.data;\n    options.method = options.method || this.common.method;\n    options.dataType = options.dataType || this.common.dataType;\n    options.token = options.token === false ? false : this.common.token;\n\n    // 请求之前验证...\n    // token验证\n    if (options.token) {\n      var token = _utils.default.getStorage('token');\n      // 二次验证\n      if (!token) {\n        uni.showToast({ title: '请先登录', icon: 'none' });\n        // token不存在时跳转\n        return uni.reLaunch({\n          url: '/pages/common/login/login' });\n\n      }\n      // 往header头中添加token\n      options.header.token = token;\n    }\n\n    // 请求\n    return new Promise(function (res, rej) {\n      // 请求中...\n      uni.request(_objectSpread(_objectSpread({},\n      options), {}, {\n        success: function success(result) {\n          // 返回原始数据\n          if (options.native) {\n            return res(result);\n          }\n          // 服务端失败\n          if (result.statusCode !== 200) {\n            if (options.toast !== false) {\n              uni.showToast({\n                title: result.data.data || '服务端失败',\n                icon: 'none' });\n\n            }\n            return rej(result.data);\n          }\n          // 其他验证...\n          // 成功\n          var data = result.data.data;\n          res(data);\n        },\n        fail: function fail(error) {\n          uni.showToast({ title: error.errMsg || '请求失败', icon: 'none' });\n          return rej(error);\n        } }));\n\n    });\n  },\n  // get请求\n  get: function get(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n    options.url = url;\n    options.data = data;\n    options.method = 'GET';\n    return this.request(options);\n  },\n  // post请求\n  post: function post(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n    options.url = url;\n    options.data = data;\n    options.method = 'POST';\n    return this.request(options);\n  },\n  // delete请求\n  del: function del(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n    options.url = url;\n    options.data = data;\n    options.method = 'DELETE';\n    return this.request(options);\n  },\n  // 上传文件\n  upload: function upload(url, data) {var _this = this;var onPregress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n    return new Promise(function (resolve, reject) {\n      var token = _utils.default.getStorage('token');\n      if (!token) {\n        uni.showToast({\n          title: '请先登陆', icon: 'none' });\n\n        return uni.reLaunch({\n          url: '/pages/common/login/login' });\n\n      }\n      // 上传\n      var uploadTask = uni.uploadFile({\n        url: _this.common.baseUrl + url,\n        filePath: data.filePath,\n        name: data.name || 'files',\n        header: {\n          token: token },\n\n        success: function success(res) {\n          __f__(\"log\", res, \" at common/free-lib/request.js:116\");\n          if (res.statusCode !== 200) return uni.showToast({\n            title: '上传失败',\n            icon: 'none' });\n\n          var message = JSON.parse(res.data);\n\n          resolve(message.data);\n        },\n        fail: function fail(err) {\n          __f__(\"log\", err, \" at common/free-lib/request.js:126\");\n          reject(err);\n        } });\n\n      uploadTask.onProgressUpdate(function (res) {\n        __f__(\"log\", '上传进度', res.progress, \" at common/free-lib/request.js:131\");\n        if (typeof onPregress === 'function') {\n          onPregress(res.progress);\n        }\n      });\n    });\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 2)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2ZyZWUtbGliL3JlcXVlc3QuanMiXSwibmFtZXMiOlsiY29tbW9uIiwiYmFzZVVybCIsIiRDIiwiaGVhZGVyIiwiZGF0YSIsIm1ldGhvZCIsImRhdGFUeXBlIiwidG9rZW4iLCJyZXF1ZXN0Iiwib3B0aW9ucyIsInVybCIsIiRVIiwiZ2V0U3RvcmFnZSIsInVuaSIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsInJlTGF1bmNoIiwiUHJvbWlzZSIsInJlcyIsInJlaiIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJuYXRpdmUiLCJzdGF0dXNDb2RlIiwidG9hc3QiLCJmYWlsIiwiZXJyb3IiLCJlcnJNc2ciLCJnZXQiLCJwb3N0IiwiZGVsIiwidXBsb2FkIiwib25QcmVncmVzcyIsInJlc29sdmUiLCJyZWplY3QiLCJ1cGxvYWRUYXNrIiwidXBsb2FkRmlsZSIsImZpbGVQYXRoIiwibmFtZSIsIm1lc3NhZ2UiLCJKU09OIiwicGFyc2UiLCJlcnIiLCJvblByb2dyZXNzVXBkYXRlIiwicHJvZ3Jlc3MiXSwibWFwcGluZ3MiOiJvSUFBQTtBQUNBLCtFOztBQUVlO0FBQ1g7QUFDQUEsUUFBTSxFQUFDO0FBQ0hDLFdBQU8sRUFBQ0MsZ0JBQUdELE9BRFI7QUFFSEUsVUFBTSxFQUFDO0FBQ0gsc0JBQWUsZ0NBRFosRUFGSjs7QUFLSEMsUUFBSSxFQUFDLEVBTEY7QUFNSEMsVUFBTSxFQUFDLEtBTko7QUFPSEMsWUFBUSxFQUFDLE1BUE47QUFRSEMsU0FBSyxFQUFDLElBUkgsRUFGSTs7QUFZWDtBQUNBQyxTQWJXLHFCQWFVLEtBQWJDLE9BQWEsdUVBQUgsRUFBRztBQUNqQjtBQUNBQSxXQUFPLENBQUNDLEdBQVIsR0FBYyxLQUFLVixNQUFMLENBQVlDLE9BQVosR0FBc0JRLE9BQU8sQ0FBQ0MsR0FBNUM7QUFDQUQsV0FBTyxDQUFDTixNQUFSLEdBQWlCTSxPQUFPLENBQUNOLE1BQVIsSUFBa0IsS0FBS0gsTUFBTCxDQUFZRyxNQUEvQztBQUNBTSxXQUFPLENBQUNMLElBQVIsR0FBZUssT0FBTyxDQUFDTCxJQUFSLElBQWdCLEtBQUtKLE1BQUwsQ0FBWUksSUFBM0M7QUFDQUssV0FBTyxDQUFDSixNQUFSLEdBQWlCSSxPQUFPLENBQUNKLE1BQVIsSUFBa0IsS0FBS0wsTUFBTCxDQUFZSyxNQUEvQztBQUNBSSxXQUFPLENBQUNILFFBQVIsR0FBbUJHLE9BQU8sQ0FBQ0gsUUFBUixJQUFvQixLQUFLTixNQUFMLENBQVlNLFFBQW5EO0FBQ0FHLFdBQU8sQ0FBQ0YsS0FBUixHQUFnQkUsT0FBTyxDQUFDRixLQUFSLEtBQWtCLEtBQWxCLEdBQTJCLEtBQTNCLEdBQW1DLEtBQUtQLE1BQUwsQ0FBWU8sS0FBL0Q7O0FBRUE7QUFDQTtBQUNBLFFBQUlFLE9BQU8sQ0FBQ0YsS0FBWixFQUFtQjtBQUNmLFVBQUlBLEtBQUssR0FBR0ksZUFBR0MsVUFBSCxDQUFjLE9BQWQsQ0FBWjtBQUNBO0FBQ0EsVUFBSSxDQUFDTCxLQUFMLEVBQVk7QUFDUk0sV0FBRyxDQUFDQyxTQUFKLENBQWMsRUFBRUMsS0FBSyxFQUFFLE1BQVQsRUFBaUJDLElBQUksRUFBRSxNQUF2QixFQUFkO0FBQ0E7QUFDQSxlQUFPSCxHQUFHLENBQUNJLFFBQUosQ0FBYTtBQUNoQlAsYUFBRyxFQUFFLDJCQURXLEVBQWIsQ0FBUDs7QUFHSDtBQUNEO0FBQ0FELGFBQU8sQ0FBQ04sTUFBUixDQUFlSSxLQUFmLEdBQXVCQSxLQUF2QjtBQUNIOztBQUVEO0FBQ0EsV0FBTyxJQUFJVyxPQUFKLENBQVksVUFBQ0MsR0FBRCxFQUFLQyxHQUFMLEVBQVc7QUFDMUI7QUFDQVAsU0FBRyxDQUFDTCxPQUFKO0FBQ09DLGFBRFA7QUFFSVksZUFBTyxFQUFFLGlCQUFDQyxNQUFELEVBQVk7QUFDakI7QUFDQSxjQUFHYixPQUFPLENBQUNjLE1BQVgsRUFBa0I7QUFDZCxtQkFBT0osR0FBRyxDQUFDRyxNQUFELENBQVY7QUFDSDtBQUNEO0FBQ0EsY0FBR0EsTUFBTSxDQUFDRSxVQUFQLEtBQXNCLEdBQXpCLEVBQTZCO0FBQ3pCLGdCQUFJZixPQUFPLENBQUNnQixLQUFSLEtBQWtCLEtBQXRCLEVBQTZCO0FBQ3pCWixpQkFBRyxDQUFDQyxTQUFKLENBQWM7QUFDVkMscUJBQUssRUFBRU8sTUFBTSxDQUFDbEIsSUFBUCxDQUFZQSxJQUFaLElBQW9CLE9BRGpCO0FBRVZZLG9CQUFJLEVBQUUsTUFGSSxFQUFkOztBQUlIO0FBQ0QsbUJBQU9JLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDbEIsSUFBUixDQUFWO0FBQ0g7QUFDRDtBQUNBO0FBQ0EsY0FBSUEsSUFBSSxHQUFHa0IsTUFBTSxDQUFDbEIsSUFBUCxDQUFZQSxJQUF2QjtBQUNBZSxhQUFHLENBQUNmLElBQUQsQ0FBSDtBQUNILFNBckJMO0FBc0JJc0IsWUFBSSxFQUFFLGNBQUNDLEtBQUQsRUFBVztBQUNiZCxhQUFHLENBQUNDLFNBQUosQ0FBYyxFQUFFQyxLQUFLLEVBQUVZLEtBQUssQ0FBQ0MsTUFBTixJQUFnQixNQUF6QixFQUFpQ1osSUFBSSxFQUFFLE1BQXZDLEVBQWQ7QUFDQSxpQkFBT0ksR0FBRyxDQUFDTyxLQUFELENBQVY7QUFDSCxTQXpCTDs7QUEyQkgsS0E3Qk0sQ0FBUDtBQThCSCxHQXJFVTtBQXNFWDtBQUNBRSxLQXZFVyxlQXVFUG5CLEdBdkVPLEVBdUVvQixLQUF2Qk4sSUFBdUIsdUVBQWhCLEVBQWdCLEtBQWJLLE9BQWEsdUVBQUgsRUFBRztBQUMzQkEsV0FBTyxDQUFDQyxHQUFSLEdBQWNBLEdBQWQ7QUFDQUQsV0FBTyxDQUFDTCxJQUFSLEdBQWVBLElBQWY7QUFDQUssV0FBTyxDQUFDSixNQUFSLEdBQWlCLEtBQWpCO0FBQ0EsV0FBTyxLQUFLRyxPQUFMLENBQWFDLE9BQWIsQ0FBUDtBQUNILEdBNUVVO0FBNkVYO0FBQ0FxQixNQTlFVyxnQkE4RU5wQixHQTlFTSxFQThFcUIsS0FBdkJOLElBQXVCLHVFQUFoQixFQUFnQixLQUFiSyxPQUFhLHVFQUFILEVBQUc7QUFDNUJBLFdBQU8sQ0FBQ0MsR0FBUixHQUFjQSxHQUFkO0FBQ0FELFdBQU8sQ0FBQ0wsSUFBUixHQUFlQSxJQUFmO0FBQ0FLLFdBQU8sQ0FBQ0osTUFBUixHQUFpQixNQUFqQjtBQUNBLFdBQU8sS0FBS0csT0FBTCxDQUFhQyxPQUFiLENBQVA7QUFDSCxHQW5GVTtBQW9GWDtBQUNBc0IsS0FyRlcsZUFxRlByQixHQXJGTyxFQXFGb0IsS0FBdkJOLElBQXVCLHVFQUFoQixFQUFnQixLQUFiSyxPQUFhLHVFQUFILEVBQUc7QUFDM0JBLFdBQU8sQ0FBQ0MsR0FBUixHQUFjQSxHQUFkO0FBQ0FELFdBQU8sQ0FBQ0wsSUFBUixHQUFlQSxJQUFmO0FBQ0FLLFdBQU8sQ0FBQ0osTUFBUixHQUFpQixRQUFqQjtBQUNBLFdBQU8sS0FBS0csT0FBTCxDQUFhQyxPQUFiLENBQVA7QUFDSCxHQTFGVTtBQTJGZDtBQUNBdUIsUUE1RmMsa0JBNEZQdEIsR0E1Rk8sRUE0RkhOLElBNUZHLEVBNEZxQixzQkFBbkI2QixVQUFtQix1RUFBTixLQUFNO0FBQ2xDLFdBQU8sSUFBSWYsT0FBSixDQUFZLFVBQUNnQixPQUFELEVBQVNDLE1BQVQsRUFBb0I7QUFDdEMsVUFBTTVCLEtBQUssR0FBR0ksZUFBR0MsVUFBSCxDQUFjLE9BQWQsQ0FBZDtBQUNBLFVBQUcsQ0FBQ0wsS0FBSixFQUFVO0FBQ1RNLFdBQUcsQ0FBQ0MsU0FBSixDQUFjO0FBQ2JDLGVBQUssRUFBQyxNQURPLEVBQ0FDLElBQUksRUFBQyxNQURMLEVBQWQ7O0FBR0EsZUFBT0gsR0FBRyxDQUFDSSxRQUFKLENBQWE7QUFDbkJQLGFBQUcsRUFBQywyQkFEZSxFQUFiLENBQVA7O0FBR0E7QUFDRDtBQUNBLFVBQU0wQixVQUFVLEdBQUd2QixHQUFHLENBQUN3QixVQUFKLENBQWU7QUFDakMzQixXQUFHLEVBQUMsS0FBSSxDQUFDVixNQUFMLENBQVlDLE9BQVosR0FBc0JTLEdBRE87QUFFakM0QixnQkFBUSxFQUFDbEMsSUFBSSxDQUFDa0MsUUFGbUI7QUFHakNDLFlBQUksRUFBQ25DLElBQUksQ0FBQ21DLElBQUwsSUFBYSxPQUhlO0FBSWpDcEMsY0FBTSxFQUFDO0FBQ05JLGVBQUssRUFBTEEsS0FETSxFQUowQjs7QUFPakNjLGVBQU8sRUFBQyxpQkFBQUYsR0FBRyxFQUFJO0FBQ2QsdUJBQVlBLEdBQVo7QUFDQSxjQUFHQSxHQUFHLENBQUNLLFVBQUosS0FBbUIsR0FBdEIsRUFBMkIsT0FBT1gsR0FBRyxDQUFDQyxTQUFKLENBQWM7QUFDL0NDLGlCQUFLLEVBQUMsTUFEeUM7QUFFL0NDLGdCQUFJLEVBQUMsTUFGMEMsRUFBZCxDQUFQOztBQUkzQixjQUFJd0IsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV3ZCLEdBQUcsQ0FBQ2YsSUFBZixDQUFkOztBQUVBOEIsaUJBQU8sQ0FBQ00sT0FBTyxDQUFDcEMsSUFBVCxDQUFQO0FBQ0EsU0FoQmdDO0FBaUJqQ3NCLFlBQUksRUFBQyxjQUFBaUIsR0FBRyxFQUFHO0FBQ1YsdUJBQVlBLEdBQVo7QUFDQVIsZ0JBQU0sQ0FBQ1EsR0FBRCxDQUFOO0FBQ0EsU0FwQmdDLEVBQWYsQ0FBbkI7O0FBc0JBUCxnQkFBVSxDQUFDUSxnQkFBWCxDQUE0QixVQUFBekIsR0FBRyxFQUFHO0FBQ2pDLHFCQUFZLE1BQVosRUFBbUJBLEdBQUcsQ0FBQzBCLFFBQXZCO0FBQ0EsWUFBRyxPQUFPWixVQUFQLEtBQXNCLFVBQXpCLEVBQW9DO0FBQ25DQSxvQkFBVSxDQUFDZCxHQUFHLENBQUMwQixRQUFMLENBQVY7QUFDQTtBQUNELE9BTEQ7QUFNQSxLQXZDTSxDQUFQO0FBd0NBLEdBcklhLEUiLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJEMgZnJvbSAnLi9jb25maWcuanMnXHJcbmltcG9ydCAkVSBmcm9tICcuL3V0aWxzLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLy8g5YWo5bGA6YWN572uXHJcbiAgICBjb21tb246e1xyXG4gICAgICAgIGJhc2VVcmw6JEMuYmFzZVVybCxcclxuICAgICAgICBoZWFkZXI6e1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6e30sXHJcbiAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgIGRhdGFUeXBlOidqc29uJyxcclxuICAgICAgICB0b2tlbjp0cnVlXHJcbiAgICB9LFxyXG4gICAgLy8g6K+35rGCIOi/lOWbnnByb21pc2VcclxuICAgIHJlcXVlc3Qob3B0aW9ucyA9IHt9KXtcclxuICAgICAgICAvLyDnu4Tnu4flj4LmlbBcclxuICAgICAgICBvcHRpb25zLnVybCA9IHRoaXMuY29tbW9uLmJhc2VVcmwgKyBvcHRpb25zLnVybFxyXG4gICAgICAgIG9wdGlvbnMuaGVhZGVyID0gb3B0aW9ucy5oZWFkZXIgfHwgdGhpcy5jb21tb24uaGVhZGVyXHJcbiAgICAgICAgb3B0aW9ucy5kYXRhID0gb3B0aW9ucy5kYXRhIHx8IHRoaXMuY29tbW9uLmRhdGFcclxuICAgICAgICBvcHRpb25zLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8IHRoaXMuY29tbW9uLm1ldGhvZFxyXG4gICAgICAgIG9wdGlvbnMuZGF0YVR5cGUgPSBvcHRpb25zLmRhdGFUeXBlIHx8IHRoaXMuY29tbW9uLmRhdGFUeXBlXHJcbiAgICAgICAgb3B0aW9ucy50b2tlbiA9IG9wdGlvbnMudG9rZW4gPT09IGZhbHNlID8gIGZhbHNlIDogdGhpcy5jb21tb24udG9rZW5cclxuXHJcbiAgICAgICAgLy8g6K+35rGC5LmL5YmN6aqM6K+BLi4uXHJcbiAgICAgICAgLy8gdG9rZW7pqozor4FcclxuICAgICAgICBpZiAob3B0aW9ucy50b2tlbikge1xyXG4gICAgICAgICAgICBsZXQgdG9rZW4gPSAkVS5nZXRTdG9yYWdlKCd0b2tlbicpXHJcbiAgICAgICAgICAgIC8vIOS6jOasoemqjOivgVxyXG4gICAgICAgICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICfor7flhYjnmbvlvZUnLCBpY29uOiAnbm9uZScgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0b2tlbuS4jeWtmOWcqOaXtui3s+i9rFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuaS5yZUxhdW5jaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9sb2dpbi9sb2dpbicsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDlvoBoZWFkZXLlpLTkuK3mt7vliqB0b2tlblxyXG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlci50b2tlbiA9IHRva2VuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDor7fmsYJcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcyxyZWopPT57XHJcbiAgICAgICAgICAgIC8vIOivt+axguS4rS4uLlxyXG4gICAgICAgICAgICB1bmkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOi/lOWbnuWOn+Wni+aVsOaNrlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMubmF0aXZlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcyhyZXN1bHQpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOacjeWKoeerr+Wksei0pVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5zdGF0dXNDb2RlICE9PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy50b2FzdCAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXN1bHQuZGF0YS5kYXRhIHx8ICfmnI3liqHnq6/lpLHotKUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlaihyZXN1bHQuZGF0YSkgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWFtuS7lumqjOivgS4uLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaIkOWKn1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzdWx0LmRhdGEuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogZXJyb3IuZXJyTXNnIHx8ICfor7fmsYLlpLHotKUnLCBpY29uOiAnbm9uZScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlaihlcnJvcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvLyBnZXTor7fmsYJcclxuICAgIGdldCh1cmwsZGF0YSA9IHt9LG9wdGlvbnMgPSB7fSl7XHJcbiAgICAgICAgb3B0aW9ucy51cmwgPSB1cmxcclxuICAgICAgICBvcHRpb25zLmRhdGEgPSBkYXRhXHJcbiAgICAgICAgb3B0aW9ucy5tZXRob2QgPSAnR0VUJ1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qob3B0aW9ucylcclxuICAgIH0sXHJcbiAgICAvLyBwb3N06K+35rGCXHJcbiAgICBwb3N0KHVybCxkYXRhID0ge30sb3B0aW9ucyA9IHt9KXtcclxuICAgICAgICBvcHRpb25zLnVybCA9IHVybFxyXG4gICAgICAgIG9wdGlvbnMuZGF0YSA9IGRhdGFcclxuICAgICAgICBvcHRpb25zLm1ldGhvZCA9ICdQT1NUJ1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qob3B0aW9ucylcclxuICAgIH0sXHJcbiAgICAvLyBkZWxldGXor7fmsYJcclxuICAgIGRlbCh1cmwsZGF0YSA9IHt9LG9wdGlvbnMgPSB7fSl7XHJcbiAgICAgICAgb3B0aW9ucy51cmwgPSB1cmxcclxuICAgICAgICBvcHRpb25zLmRhdGEgPSBkYXRhXHJcbiAgICAgICAgb3B0aW9ucy5tZXRob2QgPSAnREVMRVRFJ1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qob3B0aW9ucylcclxuICAgIH0sXHJcblx0Ly8g5LiK5Lyg5paH5Lu2XHJcblx0dXBsb2FkKHVybCxkYXRhLG9uUHJlZ3Jlc3MgPSBmYWxzZSl7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KSA9PiB7XHJcblx0XHRcdGNvbnN0IHRva2VuID0gJFUuZ2V0U3RvcmFnZSgndG9rZW4nKVxyXG5cdFx0XHRpZighdG9rZW4pe1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6J+ivt+WFiOeZu+mZhicsaWNvbjonbm9uZSdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHJldHVybiB1bmkucmVMYXVuY2goe1xyXG5cdFx0XHRcdFx0dXJsOicvcGFnZXMvY29tbW9uL2xvZ2luL2xvZ2luJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdFx0Ly8g5LiK5LygXHJcblx0XHRcdGNvbnN0IHVwbG9hZFRhc2sgPSB1bmkudXBsb2FkRmlsZSh7XHJcblx0XHRcdFx0dXJsOnRoaXMuY29tbW9uLmJhc2VVcmwgKyB1cmwsXHJcblx0XHRcdFx0ZmlsZVBhdGg6ZGF0YS5maWxlUGF0aCxcclxuXHRcdFx0XHRuYW1lOmRhdGEubmFtZSB8fCAnZmlsZXMnLFxyXG5cdFx0XHRcdGhlYWRlcjp7XHJcblx0XHRcdFx0XHR0b2tlbixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHN1Y2Nlc3M6cmVzID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRcdGlmKHJlcy5zdGF0dXNDb2RlICE9PSAyMDApIHJldHVybiB1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6J+S4iuS8oOWksei0pScsXHJcblx0XHRcdFx0XHRcdGljb246J25vbmUnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0bGV0IG1lc3NhZ2UgPSBKU09OLnBhcnNlKHJlcy5kYXRhKVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRyZXNvbHZlKG1lc3NhZ2UuZGF0YSlcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZhaWw6ZXJyPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyKVxyXG5cdFx0XHRcdFx0cmVqZWN0KGVycilcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdHVwbG9hZFRhc2sub25Qcm9ncmVzc1VwZGF0ZShyZXM9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ+S4iuS8oOi/m+W6picscmVzLnByb2dyZXNzKVxyXG5cdFx0XHRcdGlmKHR5cGVvZiBvblByZWdyZXNzID09PSAnZnVuY3Rpb24nKXtcclxuXHRcdFx0XHRcdG9uUHJlZ3Jlc3MocmVzLnByb2dyZXNzKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!*******************************************************!*\
  !*** F:/ALL笔记/chart/app - h5/common/free-lib/chat.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 18));var _utils = _interopRequireDefault(__webpack_require__(/*! ./utils.js */ 14));\nvar _request = _interopRequireDefault(__webpack_require__(/*! ./request.js */ 16));\nvar _index = _interopRequireDefault(__webpack_require__(/*! @/store/index.js */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var\n\n\nchat = /*#__PURE__*/function () {\n  function chat(arg) {_classCallCheck(this, chat);\n    this.url = arg.url;\n    this.isOnline = false;\n    this.socket = null;\n    this.reconnectTime = 0;\n    this.isOpenReconnect = true;\n    // 当前用户id\n    this.user_id = _utils.default.getStorage('user_id');\n    var user = _utils.default.getStorage('user');\n    this.user = user ? JSON.parse(user) : {};\n    // 初始化对象\n    this.TO = false;\n    // 连接和监听\n    if (this.user.token) {\n      this.connectSocket();\n    }\n  }\n  // 断线重连\n  _createClass(chat, [{ key: \"reconnect\", value: function reconnect() {var _this = this;\n      if (this.isOnline) return;\n      __f__(\"log\", '开始重连', \" at common/free-lib/chat.js:27\");\n      if (this.reconnectTime >= 3) {\n        return this.reconnectConfirm();\n      }\n      setTimeout(function () {\n        _this.connectSocket();\n        _this.reconnectTime += 1;\n      }, this.reconnectTime * 500);\n    }\n    // 连接socket \n  }, { key: \"connectSocket\", value: function connectSocket() {var _this2 = this;\n      // 连接socket\n      this.socket = uni.connectSocket({\n        url: this.url + '?token=' + this.user.token,\n        complete: function complete() {} });\n\n      // 监听连接成功\n      this.socket.onOpen(function () {return _this2.onOpen();});\n      // 监听接收信息\n      this.socket.onMessage(function (res) {return _this2.onMessage(res);});\n      // 监听断开\n      this.socket.onClose(function () {return _this2.onClose();});\n      // 监听错误\n      this.socket.onError(function () {return _this2.onError();});\n      // 离线信息\n    }\n    // 监听连接\n  }, { key: \"onOpen\", value: function onOpen() {\n      // 用户上线\n      this.isOnline = true;\n      __f__(\"log\", 'socket连接成功', \" at common/free-lib/chat.js:57\");\n      this.reconnectTime = 0;\n      this.isOpenReconnect = true;\n      // 获取用户离线消息\n      this.getMessage();\n    }\n    // 获取离线消息\n  }, { key: \"getMessage\", value: function getMessage() {\n      _request.default.post('/chat/getmessage');\n    }\n    // 监听断开连接\n  }, { key: \"onClose\", value: function onClose() {\n      // 用户下线\n      this.isOnline = false;\n      this.socket = null;\n      this.isOpenReconnect && this.reconnect();\n      __f__(\"log\", 'socket连接关闭', \" at common/free-lib/chat.js:73\");\n    }\n    // 监听错误\n  }, { key: \"onError\", value: function onError() {\n      __f__(\"log\", 'socket连接错误', \" at common/free-lib/chat.js:77\");\n    }\n    // 监听接收消息\n  }, { key: \"onMessage\", value: function onMessage(data) {\n      var res = JSON.parse(data.data);\n      __f__(\"log\", '监听接收消息', res, \" at common/free-lib/chat.js:82\");\n      // 错误\n      switch (res.msg) {\n        case 'fail':\n          return uni.showToast({\n            title: res.data,\n            icon: 'none' });\n\n          break;\n        case 'recall': //撤回消息\n          this.handleOnRecall(res.data);\n          break;\n        case 'updateApplyList': //新的好友申请\n          _index.default.dispatch('getApply');\n          break;\n        default:\n          // 处理消息\n          this.handleOnMessage(res.data);\n          break;}\n\n    }\n    // 监听撤回消息处理\n  }, { key: \"handleOnRecall\", value: function () {var _handleOnRecall = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(message) {var id, key, list, index;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                // 通知聊天页撤回\n                uni.$emit('onMessage', _objectSpread(_objectSpread({},\n                message), {}, {\n                  isremove: 1 }));\n\n                // 修改聊天记录\n                id = message.chat_type === 'group' ? message.to_id : message.from_id;\n                key = \"chatDetail_\".concat(this.user.id, \"_\").concat(message.chat_type, \"_\").concat(id);\n                // 获取原来的聊天记录\n                list = this.getChatDetail(key);\n                // 根据k查找对应聊天记录\n                index = list.findIndex(function (item) {return item.id === message.id;});if (!(\n                index === -1)) {_context.next = 7;break;}return _context.abrupt(\"return\");case 7:\n                list[index].isremove = 1;\n                // 存储\n                this.setStorage(key, list);\n                // 会话最后一条消息显示\n                this.updateChatItem({\n                  id: id,\n                  chat_type: message.chat_type },\n                function (item) {\n                  item.data = '对方撤回了一条消息';\n                  item.update_time = new Date().getTime();\n                  return item;\n                });case 10:case \"end\":return _context.stop();}}}, _callee, this);}));function handleOnRecall(_x) {return _handleOnRecall.apply(this, arguments);}return handleOnRecall;}()\n\n\n    // 处理消息\n  }, { key: \"handleOnMessage\", value: function () {var _handleOnMessage = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(message) {var _this$addChatDetail, data;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n                // 添加消息记录到本地存储\n                _this$addChatDetail = this.addChatDetail(message, false), data = _this$addChatDetail.data;\n                // 更新消息列表\n                this.updateChatList(message, false);\n                // 全局通知\n                uni.$emit('onMessage', data);case 3:case \"end\":return _context2.stop();}}}, _callee2, this);}));function handleOnMessage(_x2) {return _handleOnMessage.apply(this, arguments);}return handleOnMessage;}()\n\n    // 关闭连接\n  }, { key: \"close\", value: function close() {\n      this.socket.close();\n      this.isOpenReconnect = false;\n    }\n    // 注册聊天对象\n  }, { key: \"createChatObject\", value: function createChatObject(detail) {\n      __f__(\"log\", '创建聊天对象', detail, \" at common/free-lib/chat.js:148\");\n      this.TO = detail;\n    }\n    // 注销聊天对象\n  }, { key: \"destroyChatObject\", value: function destroyChatObject() {\n      __f__(\"log\", '销毁聊天对象', \" at common/free-lib/chat.js:153\");\n      this.TO = false;\n    }\n    // 断线重连\n  }, { key: \"reconnectConfirm\", value: function reconnectConfirm() {var _this3 = this;\n      uni.showModal({\n        content: '你已经掉线,是否重连',\n        confirmText: '重新连接',\n        success: function success(res) {\n          if (res.confirm) {\n            _this3.connectSocket();\n          }\n        } });\n\n\n    }\n    // 验证是否上线\n  }, { key: \"checkOnline\", value: function checkOnline() {\n      if (!this.isOnline) {\n        // 断线重连\n        this.reconnectConfirm();\n        return false;\n      }\n      return true;\n    }\n    // 格式化发送信息数据\n  }, { key: \"formatSendData\", value: function formatSendData(params) {\n      return {\n        id: 0, //唯—id，后端生成唯一id, 用户撤回指定消息\n        from_avatar: this.user.avatar, //·发送者头像\n        from_name: this.user.nickname || this.user.username, // 发送者昵称\n        from_id: this.user.id, // 发送者id\n        to_id: params.to_id || this.TO.id, // 接收人/群id\n        to_name: params.to_name || this.TO.name, // 接收人/群名称\n        to_avatar: params.to_avatar || this.TO.avatar, // 接收人/群头像\n        chat_type: params.chat_type || this.TO.chat_type, // 接收类型\n        type: params.type, // 消息类型\n        data: params.data, // 消息内容\n        options: params.options ? params.options : {}, // 其他参数\n        create_time: new Date().getTime(), // 创建时间\n        isremove: 0, //·是否撤回\n        sendStatus: params.sendStatus ? params.sendStatus : \"pending\" // 发送状态, success  发送成功  fail 发送失败  pending 发送中\n      };\n    }\n    // 撤回消息\n  }, { key: \"recall\", value: function recall(message) {var _this4 = this;\n      return new Promise(function (resolve, reject) {\n        _request.default.post('/chat/recall', {\n          to_id: message.to_id,\n          chat_type: message.chat_type,\n          id: message.id }).\n        then(function (res) {\n          var key = \"chatDetail_\".concat(_this4.user.id, \"_\").concat(message.chat_type, \"_\").concat(message.to_id);\n          // 获取原来的聊天记录\n          var list = _this4.getChatDetail(key);\n          // 根据k查找对应聊天记录\n          var index = list.findIndex(function (item) {return item.id === message.id;});\n          if (index === -1) return;\n          list[index].isremove = 1;\n          // 存储\n          _this4.setStorage(key, list);\n          resolve(res);\n          // 更新会话最后一条消息显示\n          _this4.updateChatItem({\n            id: message.to_id,\n            chat_type: message.chat_type },\n          function (item) {\n            item.data = '你撤回了一条消息';\n            item.update_time = new Date().getTime();\n            return item;\n          });\n        }).catch(function (err) {\n          reject(err);\n        });\n      });\n    }\n    // 发送消息\n  }, { key: \"send\", value: function send(message) {var _this5 = this;var onProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      return new Promise( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(resolve, reject) {var _this5$addChatDetail, k, isUpload, uploadResult, data;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:\n                  // 添加消息历史记录\n                  _this5$addChatDetail = _this5.addChatDetail(message), k = _this5$addChatDetail.k;\n                  // 更新会话列表\n                  _this5.updateChatList(message);\n                  //验证是否上线\n                  if (_this5.checkOnline()) {_context3.next = 4;break;}return _context3.abrupt(\"return\", reject('未上线'));case 4:\n                  // 上传文件\n                  isUpload = message.type !== 'text' && message.type !== 'emoticon' && message.type !== 'card' && !message.data.startsWith('http');\n                  uploadResult = '';if (!\n                  isUpload) {_context3.next = 10;break;}_context3.next = 9;return (\n                    _request.default.upload('/upload', {\n                      filePath: message.data },\n                    onProgress));case 9:uploadResult = _context3.sent;case 10:\n\n                  // 提交到后端\n                  data = isUpload ? uploadResult : message.data;\n                  _request.default.post('/chat/send', {\n                    to_id: message.to_id || _this5.TO.id,\n                    chat_type: message.chat_type || _this5.TO.chat_type,\n                    type: message.type,\n                    data: data }).\n                  then(function (res) {\n                    // 发送成功\n                    message.id = res.id;\n                    message.sendStatus = 'success';\n\n                    if (message.type === 'video') {\n                      __f__(\"log\", res.options, \" at common/free-lib/chat.js:259\");\n                      message.options = res.options;\n                    }\n                    // 更新指定历史记录\n                    _this5.updateChatDetail(message, k);\n                    resolve(res);\n                  }).catch(function (err) {\n                    // 发送失败\n                    message.sendStatus = 'fail';\n                    // 更新指定历史记录\n                    _this5.updateChatDetail(message, k);\n                    // 断线重连提示\n                    reject(err);\n                  });case 12:case \"end\":return _context3.stop();}}}, _callee3);}));return function (_x3, _x4) {return _ref.apply(this, arguments);};}());\n\n    }\n    // 添加聊天记录\n  }, { key: \"addChatDetail\", value: function addChatDetail(message) {var isSend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      __f__(\"log\", '添加聊天记录', \" at common/free-lib/chat.js:277\");\n      // 获取对方id\n      var id = message.chat_type === 'user' ? isSend ? message.to_id : message.from_id : message.to_id;\n      var key = \"chatDetail_\".concat(this.user.id, \"_\").concat(message.chat_type, \"_\").concat(id);\n      // 获取原来的聊天记录\n      var list = this.getChatDetail(key);\n      __f__(\"log\", '获取原来的聊天记录', list, \" at common/free-lib/chat.js:283\");\n      // 标识\n      message.k = 'k' + list.length;\n      list.push(message);\n      // 加入缓存\n      __f__(\"log\", '加入缓存', key, \" at common/free-lib/chat.js:288\");\n      this.setStorage(key, list);\n      __f__(\"log\", '加入缓存', list, \" at common/free-lib/chat.js:290\");\n      return {\n        data: message,\n        k: message.k };\n\n    }\n    // 删除指定聊天记录功能\n  }, { key: \"deleteChatDetailItem\", value: function () {var _deleteChatDetailItem = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(message) {var isSend,id,key,list,index,_args4 = arguments;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:isSend = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : true;\n                // 获取对方id\n                id = message.chat_type === 'user' ? isSend ? message.to_id : message.from_id : message.to_id;\n                key = \"chatDetail_\".concat(this.user.id, \"_\").concat(message.chat_type, \"_\").concat(id);\n                // 获取原来的聊天记录\n                list = this.getChatDetail(key);\n                // 根据k查找对应聊天记录\n                index = list.findIndex(function (item) {return item.k === message.k || item.id === message.id;});if (!(\n                index === -1)) {_context4.next = 7;break;}return _context4.abrupt(\"return\");case 7:\n                list.splice(index, 1);\n                // 存储\n                this.setStorage(key, list);case 9:case \"end\":return _context4.stop();}}}, _callee4, this);}));function deleteChatDetailItem(_x5) {return _deleteChatDetailItem.apply(this, arguments);}return deleteChatDetailItem;}()\n\n    // 更新历史记录\n  }, { key: \"updateChatDetail\", value: function () {var _updateChatDetail = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(message, k) {var isSend,id,key,list,index,_args5 = arguments;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:isSend = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : true;\n                // 获取对方id\n                id = message.chat_type === 'user' ? isSend ? message.to_id : message.from_id : message.to_id;\n                key = \"chatDetail_\".concat(this.user.id, \"_\").concat(message.chat_type, \"_\").concat(id);\n                // 获取原来的聊天记录\n                list = this.getChatDetail(key);\n                // 根据k查找对应聊天记录\n                index = list.findIndex(function (item) {return item.k === k;});if (!(\n                index === -1)) {_context5.next = 7;break;}return _context5.abrupt(\"return\");case 7:\n                list[index] = message;\n                // 存储\n                this.setStorage(key, list);case 9:case \"end\":return _context5.stop();}}}, _callee5, this);}));function updateChatDetail(_x6, _x7) {return _updateChatDetail.apply(this, arguments);}return updateChatDetail;}()\n\n    // 获取聊天记录\n  }, { key: \"getChatDetail\", value: function getChatDetail() {var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      key = key ? key : \"chatDetail_\".concat(this.user.id, \"_\").concat(this.TO.chat_type, \"_\").concat(this.TO.id);\n      return this.getStorage(key);\n    }\n    // 格式化最后一条消息\n  }, { key: \"formatChatItemData\", value: function formatChatItemData(message, isSend) {\n      var data = message.data;\n      switch (message.type) {\n        case 'emoticon':\n          data = '[表情]';\n          break;\n        case 'video':\n          data = '[视频]';\n          break;\n        case 'image':\n          data = '[图片]';\n          break;\n        case 'audio':\n          data = '[语音]';\n          break;\n        case 'card':\n          data = '[名片]';\n          break;}\n\n      if (message.chat_type === 'group') {\n        data = \"\".concat(message.from_name, \": \").concat(data);\n        return data;\n      }\n      // data = isSend ? data : `${message.from_name}: ${data}`\n      return data;\n    }\n    // 更新会话列表\n  }, { key: \"updateChatList\", value: function updateChatList(message) {var isSend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      // 获取本地会话列表\n      var list = this.getChatList();\n      // 是否处于聊天中\n      var isCurrentChat = false;\n      // 接收id\n      var id = 0;\n      var avatar = '';\n      var name = '';\n\n      // 判断私聊或群聊\n      if (message.chat_type === 'user') {// 私聊\n        // 聊天对象是否存在\n        isCurrentChat = this.TO ? isSend ? this.TO.id === message.to_id : this.TO.id === message.from_id : false;\n        id = isSend ? message.to_id : message.from_id;\n        avatar = isSend ? message.to_avatar : message.from_avatar;\n        name = isSend ? message.to_name : message.from_name;\n      } else {// 群聊\n        isCurrentChat = this.TO && this.TO.id === message.to_id;\n        id = message.to_id;\n        avatar = message.to_avatar;\n        name = message.to_name;\n      }\n      // 会话是否存在\n      var index = list.findIndex(function (item) {\n        return item.chat_type === message.chat_type && item.id === id;\n      });\n      // 最后一条消息展现形式\n      // let data = isSend ? message.data : `${message.from_name}:${message.data}`\n      var data = this.formatChatItemData(message, isSend);\n      // let data = message.data.length > 18 ? message.data.slice(0,16) + '...' : message.data;\n      // data = isSend ? data : `${message.from_name}:${data}`\n      // 会话不存在，创建会话\n      // 未读数\n      var noreadnum = isSend || isCurrentChat ? 0 : 1;\n      if (index === -1) {\n        var chatItem = {\n          id: id, //接收人/群id\n          chat_type: message.chat_type, //接收类型user单聊 group群聊一贪源,\n          avatar: avatar, //接收人/群头像\n          name: name, //接收人/群昵称\n          update_time: new Date().getTime(), //最后一条消息的时间戳\n          data: data, //最后一条消息内容\n          type: message.type, //最后一条消息类型\n          noreadnum: noreadnum, //未读数\n          istop: false, //是否置顶\n          shownickname: false, //是否显示昵称\n          nowarn: false, //消息免打扰\n          strongwarn: false //是否开启强提醒\n        };\n        // 群聊\n        if (message.chat_type === 'group' && message.group) {\n          chatItem.shownickname = true;\n          chatItem.name = message.to_name;\n          chatItem = _objectSpread(_objectSpread({},\n          chatItem), {}, {\n            user_id: message.group.user_id, // 群管理员id\n            remark: \"\", // 群公告\n            invite_confirm: 1 //邀请确认\n          });\n        }\n        list.unshift(chatItem);\n      } else {//更新会话\n        // 拿到当前会话\n        var item = list[index];\n        // 更新最后一条消息\n        item.update_time = new Date().getTime();\n        // console.log('to——name',message.to_name)\n        item.name = name;\n        item.data = data;\n        item.type = message.type;\n        // 未读数更新\n        item.noreadnum += noreadnum;\n        // 置顶会话\n        list = this.listToFirst(list, index);\n      }\n      // 存储\n      var key = \"chatlist_\".concat(this.user.id);\n      this.setStorage(key, list);\n      //更新未读数\n      this.updateBadge(list);\n      // 通知更新vuex中的聊天会话列表\n      uni.$emit('onUpdateChatList', list);\n      return list;\n    }\n    // 更新未读数\n  }, { key: \"updateBadge\", value: function () {var _updateBadge = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var list,total,_args6 = arguments;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:list = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : false;\n                // 获取所有会话列表\n                list = list ? list : this.getChatList();\n                // 统计所有未读数\n                total = 0;\n                list.forEach(function (item) {\n                  total += item.noreadnum;\n                });\n                // 设置底部导航栏角标\n                if (total > 0) {\n                  uni.setTabBarBadge({\n                    index: 0,\n                    text: total <= 99 ? total.toString() : '99+' });\n\n                } else {\n                  uni.removeTabBarBadge({\n                    index: 0 });\n\n                }\n                uni.$emit('totalNoreadnum', total);case 6:case \"end\":return _context6.stop();}}}, _callee6, this);}));function updateBadge() {return _updateBadge.apply(this, arguments);}return updateBadge;}()\n\n    // 更新指定会话\n  }, { key: \"updateChatItem\", value: function () {var _updateChatItem = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(where, data) {var list, index, key;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:\n                // 获取所有会话列表\n                list = this.getChatList();\n                // 找到当前会话\n                index = list.findIndex(function (item) {return item.id === where.id && item.chat_type === where.chat_type;});if (!(\n                index === -1)) {_context7.next = 4;break;}return _context7.abrupt(\"return\");case 4:\n                // 更新数据\n                if (typeof data === 'function') {\n                  list[index] = data(list[index]);\n                } else {\n                  list[index] = data;\n                }\n\n                key = \"chatlist_\".concat(this.user.id);\n                this.setStorage(key, list);\n                // 通知更新vuex中的聊天会话列表\n                uni.$emit('onUpdateChatList', list);case 8:case \"end\":return _context7.stop();}}}, _callee7, this);}));function updateChatItem(_x8, _x9) {return _updateChatItem.apply(this, arguments);}return updateChatItem;}()\n\n    // 读取会话\n  }, { key: \"readChatItem\", value: function () {var _readChatItem = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(id, chat_type) {var list, index, key;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:\n                // 获取所有会话列表\n                list = this.getChatList();\n                // 找到当前会话\n                index = list.findIndex(function (item) {return item.id && item.chat_type === chat_type;});\n                if (index !== -1) {\n                  list[index].noreadnum = 0;\n                  key = \"chatlist_\".concat(this.user.id);\n                  this.setStorage(key, list);\n                  // 重新获取总未读数\n                  this.updateBadge();\n                  // 通知更新vuex中的聊天会话列表\n                  uni.$emit('onUpdateChatList', list);\n                }case 3:case \"end\":return _context8.stop();}}}, _callee8, this);}));function readChatItem(_x10, _x11) {return _readChatItem.apply(this, arguments);}return readChatItem;}()\n\n    // 删除指定会话\n  }, { key: \"removeChatItem\", value: function () {var _removeChatItem = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9(id, chat_type) {var list, index, key;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:\n                // 获取所有会话列表\n                list = this.getChatList();\n                // 找到当前会话\n                index = list.findIndex(function (item) {return item.id === id && item.chat_type === chat_type;});\n                if (index !== -1) {\n                  list.splice(index, 1);\n                  key = \"chatlist_\".concat(this.user.id);\n                  this.setStorage(key, list);\n                  // 重新获取总未读数\n                  this.updateBadge();\n                  // 通知更新vuex中的聊天会话列表\n                  uni.$emit('onUpdateChatList', list);\n                }case 3:case \"end\":return _context9.stop();}}}, _callee9, this);}));function removeChatItem(_x12, _x13) {return _removeChatItem.apply(this, arguments);}return removeChatItem;}()\n\n    // 清空聊天记录\n  }, { key: \"clearChatDetail\", value: function () {var _clearChatDetail = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10(id, chat_type) {var key, list, index, _key;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:\n                key = \"chatDetail_\".concat(this.user.id, \"_\").concat(chat_type, \"_\").concat(id);\n                _utils.default.removeStorage(key);\n\n                // 获取所有会话列表\n                list = this.getChatList();\n                // 找到当前会话\n                index = list.findIndex(function (item) {return item.id === id && item.chat_type === chat_type;});\n                if (index !== -1) {\n                  list[index].data = '';\n                  _key = \"chatlist_\".concat(this.user.id);\n                  this.setStorage(_key, list);\n                  // 通知更新vuex中的聊天会话列表\n                  uni.$emit('onUpdateChatList', list);\n                }case 5:case \"end\":return _context10.stop();}}}, _callee10, this);}));function clearChatDetail(_x14, _x15) {return _clearChatDetail.apply(this, arguments);}return clearChatDetail;}()\n\n\n    // 获取本地会话列表\n  }, { key: \"getChatList\", value: function getChatList() {\n      var key = \"chatlist_\".concat(this.user.id);\n      return this.getStorage(key);\n    } }, { key: \"getChatListItem\", value: function getChatListItem(\n    id, chat_type) {\n      // 获取所有会话列表\n      var list = this.getChatList();\n      // 找到当前会话\n      var index = list.findIndex(function (item) {return item.id && item.chat_type === chat_type;});\n      if (index !== -1) {\n        return list[index];\n      }\n      return false;\n    }\n    // 获取存储\n  }, { key: \"getStorage\", value: function getStorage(key) {\n      var list = _utils.default.getStorage(key);\n      return list ? JSON.parse(list) : [];\n    }\n    // 设置存储\n  }, { key: \"setStorage\", value: function setStorage(key, value) {\n      return _utils.default.setStorage(key, JSON.stringify(value));\n    }\n    // 数组置顶\n  }, { key: \"listToFirst\", value: function listToFirst(arr, index) {\n      if (index != 0) {\n        arr.unshift(arr.splice(index, 1)[0]);\n      }\n      return arr;\n    } }]);return chat;}();var _default =\n\n\nchat;exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 2)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2ZyZWUtbGliL2NoYXQuanMiXSwibmFtZXMiOlsiY2hhdCIsImFyZyIsInVybCIsImlzT25saW5lIiwic29ja2V0IiwicmVjb25uZWN0VGltZSIsImlzT3BlblJlY29ubmVjdCIsInVzZXJfaWQiLCIkVSIsImdldFN0b3JhZ2UiLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwiVE8iLCJ0b2tlbiIsImNvbm5lY3RTb2NrZXQiLCJyZWNvbm5lY3RDb25maXJtIiwic2V0VGltZW91dCIsInVuaSIsImNvbXBsZXRlIiwib25PcGVuIiwib25NZXNzYWdlIiwicmVzIiwib25DbG9zZSIsIm9uRXJyb3IiLCJnZXRNZXNzYWdlIiwiJEgiLCJwb3N0IiwicmVjb25uZWN0IiwiZGF0YSIsIm1zZyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImhhbmRsZU9uUmVjYWxsIiwiJHN0b3JlIiwiZGlzcGF0Y2giLCJoYW5kbGVPbk1lc3NhZ2UiLCJtZXNzYWdlIiwiJGVtaXQiLCJpc3JlbW92ZSIsImlkIiwiY2hhdF90eXBlIiwidG9faWQiLCJmcm9tX2lkIiwia2V5IiwibGlzdCIsImdldENoYXREZXRhaWwiLCJpbmRleCIsImZpbmRJbmRleCIsIml0ZW0iLCJzZXRTdG9yYWdlIiwidXBkYXRlQ2hhdEl0ZW0iLCJ1cGRhdGVfdGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiYWRkQ2hhdERldGFpbCIsInVwZGF0ZUNoYXRMaXN0IiwiY2xvc2UiLCJkZXRhaWwiLCJzaG93TW9kYWwiLCJjb250ZW50IiwiY29uZmlybVRleHQiLCJzdWNjZXNzIiwiY29uZmlybSIsInBhcmFtcyIsImZyb21fYXZhdGFyIiwiYXZhdGFyIiwiZnJvbV9uYW1lIiwibmlja25hbWUiLCJ1c2VybmFtZSIsInRvX25hbWUiLCJuYW1lIiwidG9fYXZhdGFyIiwidHlwZSIsIm9wdGlvbnMiLCJjcmVhdGVfdGltZSIsInNlbmRTdGF0dXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCJjYXRjaCIsImVyciIsIm9uUHJvZ3Jlc3MiLCJrIiwiY2hlY2tPbmxpbmUiLCJpc1VwbG9hZCIsInN0YXJ0c1dpdGgiLCJ1cGxvYWRSZXN1bHQiLCJ1cGxvYWQiLCJmaWxlUGF0aCIsInVwZGF0ZUNoYXREZXRhaWwiLCJpc1NlbmQiLCJsZW5ndGgiLCJwdXNoIiwic3BsaWNlIiwiZ2V0Q2hhdExpc3QiLCJpc0N1cnJlbnRDaGF0IiwiZm9ybWF0Q2hhdEl0ZW1EYXRhIiwibm9yZWFkbnVtIiwiY2hhdEl0ZW0iLCJpc3RvcCIsInNob3duaWNrbmFtZSIsIm5vd2FybiIsInN0cm9uZ3dhcm4iLCJncm91cCIsInJlbWFyayIsImludml0ZV9jb25maXJtIiwidW5zaGlmdCIsImxpc3RUb0ZpcnN0IiwidXBkYXRlQmFkZ2UiLCJ0b3RhbCIsImZvckVhY2giLCJzZXRUYWJCYXJCYWRnZSIsInRleHQiLCJ0b1N0cmluZyIsInJlbW92ZVRhYkJhckJhZGdlIiwid2hlcmUiLCJyZW1vdmVTdG9yYWdlIiwidmFsdWUiLCJzdHJpbmdpZnkiLCJhcnIiXSwibWFwcGluZ3MiOiJ3UEFBQTtBQUNBO0FBQ0EscUY7OztBQUdNQSxJO0FBQ0wsZ0JBQVlDLEdBQVosRUFBaUI7QUFDaEIsU0FBS0MsR0FBTCxHQUFXRCxHQUFHLENBQUNDLEdBQWY7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElBQWQ7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLENBQXJCO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QixJQUF2QjtBQUNBO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQyxlQUFHQyxVQUFILENBQWMsU0FBZCxDQUFmO0FBQ0EsUUFBSUMsSUFBSSxHQUFHRixlQUFHQyxVQUFILENBQWMsTUFBZCxDQUFYO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixJQUFYLENBQUgsR0FBc0IsRUFBdEM7QUFDQTtBQUNBLFNBQUtHLEVBQUwsR0FB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SSxHQUFHdEMsZUFBR0MsVUFBSCxDQUFjb0MsR0FBZCxDQUFYO0FBQ0EsYUFBT0MsSUFBSSxHQUFHbkMsSUFBSSxDQUFDQyxLQUFMLENBQVdrQyxJQUFYLENBQUgsR0FBc0IsRUFBakM7QUFDQTtBQUNEO3FEQUNXRCxHLEVBQUsyRSxLLEVBQU87QUFDdEIsYUFBT2hILGVBQUcyQyxVQUFILENBQWNOLEdBQWQsRUFBbUJsQyxJQUFJLENBQUM4RyxTQUFMLENBQWVELEtBQWYsQ0FBbkIsQ0FBUDtBQUNBO0FBQ0Q7dURBQ1lFLEcsRUFBSTFFLEssRUFBTTtBQUNyQixVQUFHQSxLQUFLLElBQUcsQ0FBWCxFQUFjO0FBQ2IwRSxXQUFHLENBQUNiLE9BQUosQ0FBWWEsR0FBRyxDQUFDMUIsTUFBSixDQUFXaEQsS0FBWCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixDQUFaO0FBQ0E7QUFDRCxhQUFPMEUsR0FBUDtBQUNBLEs7OztBQUdhMUgsSSIsImZpbGUiOiIxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkVSBmcm9tICcuL3V0aWxzLmpzJztcclxuaW1wb3J0ICRIIGZyb20gJy4vcmVxdWVzdC5qcyc7XHJcbmltcG9ydCAkc3RvcmUgZnJvbSAnQC9zdG9yZS9pbmRleC5qcyc7XHJcblxyXG5cclxuY2xhc3MgY2hhdCB7XHJcblx0Y29uc3RydWN0b3IoYXJnKSB7XHJcblx0XHR0aGlzLnVybCA9IGFyZy51cmw7XHJcblx0XHR0aGlzLmlzT25saW5lID0gZmFsc2U7XHJcblx0XHR0aGlzLnNvY2tldCA9IG51bGw7XHJcblx0XHR0aGlzLnJlY29ubmVjdFRpbWUgPSAwXHJcblx0XHR0aGlzLmlzT3BlblJlY29ubmVjdCA9IHRydWVcclxuXHRcdC8vIOW9k+WJjeeUqOaIt2lkXHJcblx0XHR0aGlzLnVzZXJfaWQgPSAkVS5nZXRTdG9yYWdlKCd1c2VyX2lkJylcclxuXHRcdGxldCB1c2VyID0gJFUuZ2V0U3RvcmFnZSgndXNlcicpXHJcblx0XHR0aGlzLnVzZXIgPSB1c2VyID8gSlNPTi5wYXJzZSh1c2VyKSA6IHt9XHJcblx0XHQvLyDliJ3lp4vljJblr7nosaFcclxuXHRcdHRoaXMuVE8gPSBmYWxzZVxyXG5cdFx0Ly8g6L+e5o6l5ZKM55uR5ZCsXHJcblx0XHRpZiAodGhpcy51c2VyLnRva2VuKSB7XHJcblx0XHRcdHRoaXMuY29ubmVjdFNvY2tldCgpXHJcblx0XHR9XHJcblx0fVxyXG5cdC8vIOaWree6v+mHjei/nlxyXG5cdHJlY29ubmVjdCgpe1xyXG5cdFx0aWYodGhpcy5pc09ubGluZSkgcmV0dXJuO1xyXG5cdFx0Y29uc29sZS5sb2coJ+W8gOWni+mHjei/nicpXHJcblx0XHRpZih0aGlzLnJlY29ubmVjdFRpbWUgPj0gMyl7XHJcblx0XHRcdHJldHVybiB0aGlzLnJlY29ubmVjdENvbmZpcm0oKVxyXG5cdFx0fVxyXG5cdFx0c2V0VGltZW91dCgoKT0+IHtcclxuXHRcdFx0dGhpcy5jb25uZWN0U29ja2V0KClcclxuXHRcdFx0dGhpcy5yZWNvbm5lY3RUaW1lICs9IDFcclxuXHRcdH0sdGhpcy5yZWNvbm5lY3RUaW1lICogNTAwKVxyXG5cdH1cclxuXHQvLyDov57mjqVzb2NrZXQgXHJcblx0Y29ubmVjdFNvY2tldCgpIHtcclxuXHRcdC8vIOi/nuaOpXNvY2tldFxyXG5cdFx0dGhpcy5zb2NrZXQgPSB1bmkuY29ubmVjdFNvY2tldCh7XHJcblx0XHRcdHVybDogdGhpcy51cmwgKyAnP3Rva2VuPScgKyB0aGlzLnVzZXIudG9rZW4sXHJcblx0XHRcdGNvbXBsZXRlOiAoKSA9PiB7fVxyXG5cdFx0fSlcclxuXHRcdC8vIOebkeWQrOi/nuaOpeaIkOWKn1xyXG5cdFx0dGhpcy5zb2NrZXQub25PcGVuKCgpID0+IHRoaXMub25PcGVuKCkpXHJcblx0XHQvLyDnm5HlkKzmjqXmlLbkv6Hmga9cclxuXHRcdHRoaXMuc29ja2V0Lm9uTWVzc2FnZSgocmVzKSA9PiB0aGlzLm9uTWVzc2FnZShyZXMpKVxyXG5cdFx0Ly8g55uR5ZCs5pat5byAXHJcblx0XHR0aGlzLnNvY2tldC5vbkNsb3NlKCgpID0+IHRoaXMub25DbG9zZSgpKVxyXG5cdFx0Ly8g55uR5ZCs6ZSZ6K+vXHJcblx0XHR0aGlzLnNvY2tldC5vbkVycm9yKCgpID0+IHRoaXMub25FcnJvcigpKVxyXG5cdFx0Ly8g56a757q/5L+h5oGvXHJcblx0fVxyXG5cdC8vIOebkeWQrOi/nuaOpVxyXG5cdG9uT3BlbigpIHtcclxuXHRcdC8vIOeUqOaIt+S4iue6v1xyXG5cdFx0dGhpcy5pc09ubGluZSA9IHRydWU7XHJcblx0XHRjb25zb2xlLmxvZygnc29ja2V06L+e5o6l5oiQ5YqfJylcclxuXHRcdHRoaXMucmVjb25uZWN0VGltZSA9IDA7XHJcblx0XHR0aGlzLmlzT3BlblJlY29ubmVjdCA9IHRydWVcclxuXHRcdC8vIOiOt+WPlueUqOaIt+emu+e6v+a2iOaBr1xyXG5cdFx0dGhpcy5nZXRNZXNzYWdlKClcclxuXHR9XHJcblx0Ly8g6I635Y+W56a757q/5raI5oGvXHJcblx0Z2V0TWVzc2FnZSgpe1xyXG5cdFx0JEgucG9zdCgnL2NoYXQvZ2V0bWVzc2FnZScpXHJcblx0fVxyXG5cdC8vIOebkeWQrOaWreW8gOi/nuaOpVxyXG5cdG9uQ2xvc2UoKSB7XHJcblx0XHQvLyDnlKjmiLfkuIvnur9cclxuXHRcdHRoaXMuaXNPbmxpbmUgPSBmYWxzZTtcclxuXHRcdHRoaXMuc29ja2V0ID0gbnVsbDtcclxuXHRcdHRoaXMuaXNPcGVuUmVjb25uZWN0ICYmIHRoaXMucmVjb25uZWN0KClcclxuXHRcdGNvbnNvbGUubG9nKCdzb2NrZXTov57mjqXlhbPpl60nKVxyXG5cdH1cclxuXHQvLyDnm5HlkKzplJnor69cclxuXHRvbkVycm9yKCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ3NvY2tldOi/nuaOpemUmeivrycpXHJcblx0fVxyXG5cdC8vIOebkeWQrOaOpeaUtua2iOaBr1xyXG5cdG9uTWVzc2FnZShkYXRhKSB7XHJcblx0XHRsZXQgcmVzID0gSlNPTi5wYXJzZShkYXRhLmRhdGEpXHJcblx0XHRjb25zb2xlLmxvZygn55uR5ZCs5o6l5pS25raI5oGvJywgcmVzKVxyXG5cdFx0Ly8g6ZSZ6K+vXHJcblx0XHRzd2l0Y2ggKHJlcy5tc2cpe1xyXG5cdFx0XHRjYXNlICdmYWlsJzpcclxuXHRcdFx0cmV0dXJuIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdHRpdGxlOiByZXMuZGF0YSxcclxuXHRcdFx0XHRpY29uOidub25lJ1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAncmVjYWxsJzogXHQvL+aSpOWbnua2iOaBr1xyXG5cdFx0XHR0aGlzLmhhbmRsZU9uUmVjYWxsKHJlcy5kYXRhKVxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdGNhc2UgJ3VwZGF0ZUFwcGx5TGlzdCc6IFx0Ly/mlrDnmoTlpb3lj4vnlLPor7dcclxuXHRcdFx0XHQkc3RvcmUuZGlzcGF0Y2goJ2dldEFwcGx5JylcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0Ly8g5aSE55CG5raI5oGvXHJcblx0XHRcdHRoaXMuaGFuZGxlT25NZXNzYWdlKHJlcy5kYXRhKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvLyDnm5HlkKzmkqTlm57mtojmga/lpITnkIZcclxuXHRhc3luYyBoYW5kbGVPblJlY2FsbChtZXNzYWdlKXtcclxuXHRcdC8vIOmAmuefpeiBiuWkqemhteaSpOWbnlxyXG5cdFx0dW5pLiRlbWl0KCdvbk1lc3NhZ2UnLHtcclxuXHRcdFx0Li4ubWVzc2FnZSxcclxuXHRcdFx0aXNyZW1vdmU6MVxyXG5cdFx0fSlcclxuXHRcdC8vIOS/ruaUueiBiuWkqeiusOW9lVxyXG5cdFx0bGV0IGlkID0gbWVzc2FnZS5jaGF0X3R5cGUgPT09ICdncm91cCcgPyBtZXNzYWdlLnRvX2lkIDogbWVzc2FnZS5mcm9tX2lkXHJcblx0XHRsZXQga2V5ID0gYGNoYXREZXRhaWxfJHt0aGlzLnVzZXIuaWR9XyR7bWVzc2FnZS5jaGF0X3R5cGV9XyR7aWR9YFxyXG5cdFx0Ly8g6I635Y+W5Y6f5p2l55qE6IGK5aSp6K6w5b2VXHJcblx0XHRsZXQgbGlzdCA9IHRoaXMuZ2V0Q2hhdERldGFpbChrZXkpXHJcblx0XHQvLyDmoLnmja5r5p+l5om+5a+55bqU6IGK5aSp6K6w5b2VXHJcblx0XHRsZXQgaW5kZXggPSBsaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IG1lc3NhZ2UuaWQpXHJcblx0XHRpZiAoaW5kZXggPT09IC0xKSByZXR1cm47XHJcblx0XHRsaXN0W2luZGV4XS5pc3JlbW92ZSA9IDFcclxuXHRcdC8vIOWtmOWCqFxyXG5cdFx0dGhpcy5zZXRTdG9yYWdlKGtleSwgbGlzdClcclxuXHRcdC8vIOS8muivneacgOWQjuS4gOadoea2iOaBr+aYvuekulxyXG5cdFx0dGhpcy51cGRhdGVDaGF0SXRlbSh7XHJcblx0XHRcdGlkLFxyXG5cdFx0XHRjaGF0X3R5cGU6bWVzc2FnZS5jaGF0X3R5cGVcclxuXHRcdH0sKGl0ZW0pID0+IHtcclxuXHRcdFx0aXRlbS5kYXRhID0gJ+WvueaWueaSpOWbnuS6huS4gOadoea2iOaBrydcclxuXHRcdFx0aXRlbS51cGRhdGVfdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcblx0XHRcdHJldHVybiBpdGVtXHJcblx0XHR9KVxyXG5cdFx0XHJcblx0fVxyXG5cdC8vIOWkhOeQhua2iOaBr1xyXG5cdGFzeW5jIGhhbmRsZU9uTWVzc2FnZShtZXNzYWdlKXtcclxuXHRcdC8vIOa3u+WKoOa2iOaBr+iusOW9leWIsOacrOWcsOWtmOWCqFxyXG5cdFx0bGV0IHsgZGF0YSB9ID0gdGhpcy5hZGRDaGF0RGV0YWlsKG1lc3NhZ2UsZmFsc2UpXHJcblx0XHQvLyDmm7TmlrDmtojmga/liJfooahcclxuXHRcdHRoaXMudXBkYXRlQ2hhdExpc3QobWVzc2FnZSxmYWxzZSlcclxuXHRcdC8vIOWFqOWxgOmAmuefpVxyXG5cdFx0dW5pLiRlbWl0KCdvbk1lc3NhZ2UnLGRhdGEpXHJcblx0fVxyXG5cdC8vIOWFs+mXrei/nuaOpVxyXG5cdGNsb3NlKCkge1xyXG5cdFx0dGhpcy5zb2NrZXQuY2xvc2UoKVxyXG5cdFx0dGhpcy5pc09wZW5SZWNvbm5lY3QgPSBmYWxzZVxyXG5cdH1cclxuXHQvLyDms6jlhozogYrlpKnlr7nosaFcclxuXHRjcmVhdGVDaGF0T2JqZWN0KGRldGFpbCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ+WIm+W7uuiBiuWkqeWvueixoScsIGRldGFpbClcclxuXHRcdHRoaXMuVE8gPSBkZXRhaWxcclxuXHR9XHJcblx0Ly8g5rOo6ZSA6IGK5aSp5a+56LGhXHJcblx0ZGVzdHJveUNoYXRPYmplY3QoKSB7XHJcblx0XHRjb25zb2xlLmxvZygn6ZSA5q+B6IGK5aSp5a+56LGhJylcclxuXHRcdHRoaXMuVE8gPSBmYWxzZVxyXG5cdH1cclxuXHQvLyDmlq3nur/ph43ov55cclxuXHRyZWNvbm5lY3RDb25maXJtKCl7XHJcblx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0Y29udGVudDon5L2g5bey57uP5o6J57q/LOaYr+WQpumHjei/nicsXHJcblx0XHRcdGNvbmZpcm1UZXh0Oifph43mlrDov57mjqUnLFxyXG5cdFx0XHRzdWNjZXNzOnJlcyA9PiB7XHJcblx0XHRcdFx0aWYocmVzLmNvbmZpcm0pe1xyXG5cdFx0XHRcdFx0dGhpcy5jb25uZWN0U29ja2V0KClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9KVxyXG5cdH1cclxuXHQvLyDpqozor4HmmK/lkKbkuIrnur9cclxuXHRjaGVja09ubGluZSgpe1xyXG5cdFx0aWYoIXRoaXMuaXNPbmxpbmUpe1xyXG5cdFx0XHQvLyDmlq3nur/ph43ov55cclxuXHRcdFx0dGhpcy5yZWNvbm5lY3RDb25maXJtKClcclxuXHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZVxyXG5cdH1cclxuXHQvLyDmoLzlvI/ljJblj5HpgIHkv6Hmga/mlbDmja5cclxuXHRmb3JtYXRTZW5kRGF0YShwYXJhbXMpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGlkOiAwLCAvL+WUr+KAlGlk77yM5ZCO56uv55Sf5oiQ5ZSv5LiAaWQsIOeUqOaIt+aSpOWbnuaMh+Wumua2iOaBr1xyXG5cdFx0XHRmcm9tX2F2YXRhcjogdGhpcy51c2VyLmF2YXRhciwgLy/Ct+WPkemAgeiAheWktOWDj1xyXG5cdFx0XHRmcm9tX25hbWU6IHRoaXMudXNlci5uaWNrbmFtZSB8fCB0aGlzLnVzZXIudXNlcm5hbWUsIC8vIOWPkemAgeiAheaYteensFxyXG5cdFx0XHRmcm9tX2lkOiB0aGlzLnVzZXIuaWQsIC8vIOWPkemAgeiAhWlkXHJcblx0XHRcdHRvX2lkOiBwYXJhbXMudG9faWQgfHwgdGhpcy5UTy5pZCwgLy8g5o6l5pS25Lq6L+e+pGlkXHJcblx0XHRcdHRvX25hbWU6IHBhcmFtcy50b19uYW1lIHx8IHRoaXMuVE8ubmFtZSwgLy8g5o6l5pS25Lq6L+e+pOWQjeensFxyXG5cdFx0XHR0b19hdmF0YXI6IHBhcmFtcy50b19hdmF0YXIgfHwgdGhpcy5UTy5hdmF0YXIsIC8vIOaOpeaUtuS6ui/nvqTlpLTlg49cclxuXHRcdFx0Y2hhdF90eXBlOiBwYXJhbXMuY2hhdF90eXBlIHx8IHRoaXMuVE8uY2hhdF90eXBlLCAvLyDmjqXmlLbnsbvlnotcclxuXHRcdFx0dHlwZTogcGFyYW1zLnR5cGUsIC8vIOa2iOaBr+exu+Wei1xyXG5cdFx0XHRkYXRhOiBwYXJhbXMuZGF0YSwgLy8g5raI5oGv5YaF5a65XHJcblx0XHRcdG9wdGlvbnM6IHBhcmFtcy5vcHRpb25zID8gcGFyYW1zLm9wdGlvbnMgOiB7fSwgLy8g5YW25LuW5Y+C5pWwXHJcblx0XHRcdGNyZWF0ZV90aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpLCAvLyDliJvlu7rml7bpl7RcclxuXHRcdFx0aXNyZW1vdmU6IDAsIC8vwrfmmK/lkKbmkqTlm55cclxuXHRcdFx0c2VuZFN0YXR1czogcGFyYW1zLnNlbmRTdGF0dXMgPyBwYXJhbXMuc2VuZFN0YXR1cyA6IFwicGVuZGluZ1wiIC8vIOWPkemAgeeKtuaAgSwgc3VjY2VzcyAg5Y+R6YCB5oiQ5YqfICBmYWlsIOWPkemAgeWksei0pSAgcGVuZGluZyDlj5HpgIHkuK1cclxuXHRcdH1cclxuXHR9XHJcblx0Ly8g5pKk5Zue5raI5oGvXHJcblx0cmVjYWxsKG1lc3NhZ2Upe1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCkgPT4ge1xyXG5cdFx0XHQkSC5wb3N0KCcvY2hhdC9yZWNhbGwnLHtcclxuXHRcdFx0XHR0b19pZDptZXNzYWdlLnRvX2lkLFxyXG5cdFx0XHRcdGNoYXRfdHlwZTptZXNzYWdlLmNoYXRfdHlwZSxcclxuXHRcdFx0XHRpZDptZXNzYWdlLmlkXHJcblx0XHRcdH0pLnRoZW4ocmVzPT4ge1xyXG5cdFx0XHRcdGxldCBrZXkgPSBgY2hhdERldGFpbF8ke3RoaXMudXNlci5pZH1fJHttZXNzYWdlLmNoYXRfdHlwZX1fJHttZXNzYWdlLnRvX2lkfWBcclxuXHRcdFx0XHQvLyDojrflj5bljp/mnaXnmoTogYrlpKnorrDlvZVcclxuXHRcdFx0XHRsZXQgbGlzdCA9IHRoaXMuZ2V0Q2hhdERldGFpbChrZXkpXHJcblx0XHRcdFx0Ly8g5qC55o2ua+afpeaJvuWvueW6lOiBiuWkqeiusOW9lVxyXG5cdFx0XHRcdGxldCBpbmRleCA9IGxpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pZCA9PT0gbWVzc2FnZS5pZClcclxuXHRcdFx0XHRpZiAoaW5kZXggPT09IC0xKSByZXR1cm47XHJcblx0XHRcdFx0bGlzdFtpbmRleF0uaXNyZW1vdmUgPSAxXHJcblx0XHRcdFx0Ly8g5a2Y5YKoXHJcblx0XHRcdFx0dGhpcy5zZXRTdG9yYWdlKGtleSwgbGlzdClcclxuXHRcdFx0XHRyZXNvbHZlKHJlcylcclxuXHRcdFx0XHQvLyDmm7TmlrDkvJror53mnIDlkI7kuIDmnaHmtojmga/mmL7npLpcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZUNoYXRJdGVtKHtcclxuXHRcdFx0XHRcdGlkOm1lc3NhZ2UudG9faWQsXHJcblx0XHRcdFx0XHRjaGF0X3R5cGU6bWVzc2FnZS5jaGF0X3R5cGVcclxuXHRcdFx0XHR9LGl0ZW0gPT4ge1xyXG5cdFx0XHRcdFx0aXRlbS5kYXRhID0gJ+S9oOaSpOWbnuS6huS4gOadoea2iOaBrydcclxuXHRcdFx0XHRcdGl0ZW0udXBkYXRlX3RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG5cdFx0XHRcdFx0cmV0dXJuIGl0ZW1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KS5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdHJlamVjdChlcnIpXHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG5cdH1cclxuXHQvLyDlj5HpgIHmtojmga9cclxuXHRzZW5kKG1lc3NhZ2Usb25Qcm9ncmVzcyA9IGZhbHNlKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHQvLyDmt7vliqDmtojmga/ljoblj7LorrDlvZVcclxuXHRcdFx0bGV0IHsgayB9ID0gdGhpcy5hZGRDaGF0RGV0YWlsKG1lc3NhZ2UpXHJcblx0XHRcdC8vIOabtOaWsOS8muivneWIl+ihqFxyXG5cdFx0XHR0aGlzLnVwZGF0ZUNoYXRMaXN0KG1lc3NhZ2UpXHJcblx0XHRcdC8v6aqM6K+B5piv5ZCm5LiK57q/XHJcblx0XHRcdGlmKCF0aGlzLmNoZWNrT25saW5lKCkpIHJldHVybiByZWplY3QoJ+acquS4iue6vycpXHJcblx0XHRcdC8vIOS4iuS8oOaWh+S7tlxyXG5cdFx0XHRjb25zdCBpc1VwbG9hZCA9IG1lc3NhZ2UudHlwZSAhPT0gJ3RleHQnICYmIG1lc3NhZ2UudHlwZSAhPT0gJ2Vtb3RpY29uJyAmJiBtZXNzYWdlLnR5cGUgIT09ICdjYXJkJyAmJiAhbWVzc2FnZS5kYXRhLnN0YXJ0c1dpdGgoJ2h0dHAnKVxyXG5cdFx0XHRsZXQgdXBsb2FkUmVzdWx0ID0gJydcclxuXHRcdFx0aWYoaXNVcGxvYWQpe1xyXG5cdFx0XHRcdHVwbG9hZFJlc3VsdCA9IGF3YWl0ICRILnVwbG9hZCgnL3VwbG9hZCcse1xyXG5cdFx0XHRcdFx0ZmlsZVBhdGg6bWVzc2FnZS5kYXRhLFxyXG5cdFx0XHRcdH0sb25Qcm9ncmVzcylcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyDmj5DkuqTliLDlkI7nq69cclxuXHRcdFx0bGV0IGRhdGEgPSBpc1VwbG9hZCA/IHVwbG9hZFJlc3VsdCA6IG1lc3NhZ2UuZGF0YVxyXG5cdFx0XHQkSC5wb3N0KCcvY2hhdC9zZW5kJywge1xyXG5cdFx0XHRcdHRvX2lkOiBtZXNzYWdlLnRvX2lkIHx8IHRoaXMuVE8uaWQsXHJcblx0XHRcdFx0Y2hhdF90eXBlOiBtZXNzYWdlLmNoYXRfdHlwZSB8fCB0aGlzLlRPLmNoYXRfdHlwZSxcclxuXHRcdFx0XHR0eXBlOiBtZXNzYWdlLnR5cGUsXHJcblx0XHRcdFx0ZGF0YSxcclxuXHRcdFx0fSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdC8vIOWPkemAgeaIkOWKn1xyXG5cdFx0XHRcdG1lc3NhZ2UuaWQgPSByZXMuaWRcclxuXHRcdFx0XHRtZXNzYWdlLnNlbmRTdGF0dXMgPSAnc3VjY2VzcydcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZihtZXNzYWdlLnR5cGUgPT09ICd2aWRlbycpe1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzLm9wdGlvbnMpXHJcblx0XHRcdFx0XHRtZXNzYWdlLm9wdGlvbnMgPSByZXMub3B0aW9uc1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyDmm7TmlrDmjIflrprljoblj7LorrDlvZVcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZUNoYXREZXRhaWwobWVzc2FnZSwgaylcclxuXHRcdFx0XHRyZXNvbHZlKHJlcylcclxuXHRcdFx0fSkuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHQvLyDlj5HpgIHlpLHotKVcclxuXHRcdFx0XHRtZXNzYWdlLnNlbmRTdGF0dXMgPSAnZmFpbCdcclxuXHRcdFx0XHQvLyDmm7TmlrDmjIflrprljoblj7LorrDlvZVcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZUNoYXREZXRhaWwobWVzc2FnZSwgaylcclxuXHRcdFx0XHQvLyDmlq3nur/ph43ov57mj5DnpLpcclxuXHRcdFx0XHRyZWplY3QoZXJyKVxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHR9XHJcblx0Ly8g5re75Yqg6IGK5aSp6K6w5b2VXHJcblx0YWRkQ2hhdERldGFpbChtZXNzYWdlLCBpc1NlbmQgPSB0cnVlKSB7XHJcblx0XHRjb25zb2xlLmxvZygn5re75Yqg6IGK5aSp6K6w5b2VJylcclxuXHRcdC8vIOiOt+WPluWvueaWuWlkXHJcblx0XHRsZXQgaWQgPSBtZXNzYWdlLmNoYXRfdHlwZSA9PT0gJ3VzZXInID8gKGlzU2VuZCA/IG1lc3NhZ2UudG9faWQgOiBtZXNzYWdlLmZyb21faWQpIDogbWVzc2FnZS50b19pZFxyXG5cdFx0bGV0IGtleSA9IGBjaGF0RGV0YWlsXyR7dGhpcy51c2VyLmlkfV8ke21lc3NhZ2UuY2hhdF90eXBlfV8ke2lkfWBcclxuXHRcdC8vIOiOt+WPluWOn+adpeeahOiBiuWkqeiusOW9lVxyXG5cdFx0bGV0IGxpc3QgPSB0aGlzLmdldENoYXREZXRhaWwoa2V5KVxyXG5cdFx0Y29uc29sZS5sb2coJ+iOt+WPluWOn+adpeeahOiBiuWkqeiusOW9lScsIGxpc3QpXHJcblx0XHQvLyDmoIfor4ZcclxuXHRcdG1lc3NhZ2UuayA9ICdrJyArIGxpc3QubGVuZ3RoXHJcblx0XHRsaXN0LnB1c2gobWVzc2FnZSlcclxuXHRcdC8vIOWKoOWFpee8k+WtmFxyXG5cdFx0Y29uc29sZS5sb2coJ+WKoOWFpee8k+WtmCcsIGtleSlcclxuXHRcdHRoaXMuc2V0U3RvcmFnZShrZXksIGxpc3QpXHJcblx0XHRjb25zb2xlLmxvZygn5Yqg5YWl57yT5a2YJywgbGlzdClcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGRhdGE6IG1lc3NhZ2UsXHJcblx0XHRcdGs6IG1lc3NhZ2Uua1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvLyDliKDpmaTmjIflrprogYrlpKnorrDlvZXlip/og71cclxuXHRhc3luYyBkZWxldGVDaGF0RGV0YWlsSXRlbShtZXNzYWdlLGlzU2VuZCA9IHRydWUpe1xyXG5cdFx0Ly8g6I635Y+W5a+55pa5aWRcclxuXHRcdGxldCBpZCA9IG1lc3NhZ2UuY2hhdF90eXBlID09PSAndXNlcicgPyAoaXNTZW5kID8gbWVzc2FnZS50b19pZCA6IG1lc3NhZ2UuZnJvbV9pZCkgOiBtZXNzYWdlLnRvX2lkXHJcblx0XHRsZXQga2V5ID0gYGNoYXREZXRhaWxfJHt0aGlzLnVzZXIuaWR9XyR7bWVzc2FnZS5jaGF0X3R5cGV9XyR7aWR9YFxyXG5cdFx0Ly8g6I635Y+W5Y6f5p2l55qE6IGK5aSp6K6w5b2VXHJcblx0XHRsZXQgbGlzdCA9IHRoaXMuZ2V0Q2hhdERldGFpbChrZXkpXHJcblx0XHQvLyDmoLnmja5r5p+l5om+5a+55bqU6IGK5aSp6K6w5b2VXHJcblx0XHRsZXQgaW5kZXggPSBsaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0uayA9PT0gbWVzc2FnZS5rIHx8IGl0ZW0uaWQgPT09IG1lc3NhZ2UuaWQpXHJcblx0XHRpZiAoaW5kZXggPT09IC0xKSByZXR1cm5cclxuXHRcdGxpc3Quc3BsaWNlKGluZGV4LDEpXHJcblx0XHQvLyDlrZjlgqhcclxuXHRcdHRoaXMuc2V0U3RvcmFnZShrZXksIGxpc3QpXHJcblx0fVxyXG5cdC8vIOabtOaWsOWOhuWPsuiusOW9lVxyXG5cdGFzeW5jIHVwZGF0ZUNoYXREZXRhaWwobWVzc2FnZSwgaywgaXNTZW5kID0gdHJ1ZSkge1xyXG5cdFx0Ly8g6I635Y+W5a+55pa5aWRcclxuXHRcdGxldCBpZCA9IG1lc3NhZ2UuY2hhdF90eXBlID09PSAndXNlcicgPyAoaXNTZW5kID8gbWVzc2FnZS50b19pZCA6IG1lc3NhZ2UuZnJvbV9pZCkgOiBtZXNzYWdlLnRvX2lkXHJcblx0XHRsZXQga2V5ID0gYGNoYXREZXRhaWxfJHt0aGlzLnVzZXIuaWR9XyR7bWVzc2FnZS5jaGF0X3R5cGV9XyR7aWR9YFxyXG5cdFx0Ly8g6I635Y+W5Y6f5p2l55qE6IGK5aSp6K6w5b2VXHJcblx0XHRsZXQgbGlzdCA9IHRoaXMuZ2V0Q2hhdERldGFpbChrZXkpXHJcblx0XHQvLyDmoLnmja5r5p+l5om+5a+55bqU6IGK5aSp6K6w5b2VXHJcblx0XHRsZXQgaW5kZXggPSBsaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0uayA9PT0gaylcclxuXHRcdGlmIChpbmRleCA9PT0gLTEpIHJldHVyblxyXG5cdFx0bGlzdFtpbmRleF0gPSBtZXNzYWdlXHJcblx0XHQvLyDlrZjlgqhcclxuXHRcdHRoaXMuc2V0U3RvcmFnZShrZXksIGxpc3QpXHJcblx0fVxyXG5cdC8vIOiOt+WPluiBiuWkqeiusOW9lVxyXG5cdGdldENoYXREZXRhaWwoa2V5ID0gZmFsc2UpIHtcclxuXHRcdGtleSA9IGtleSA/IGtleSA6IGBjaGF0RGV0YWlsXyR7dGhpcy51c2VyLmlkfV8ke3RoaXMuVE8uY2hhdF90eXBlfV8ke3RoaXMuVE8uaWR9YFxyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0U3RvcmFnZShrZXkpXHJcblx0fVxyXG5cdC8vIOagvOW8j+WMluacgOWQjuS4gOadoea2iOaBr1xyXG5cdGZvcm1hdENoYXRJdGVtRGF0YShtZXNzYWdlLGlzU2VuZCl7XHJcblx0XHRsZXQgZGF0YSA9IG1lc3NhZ2UuZGF0YVxyXG5cdFx0c3dpdGNoIChtZXNzYWdlLnR5cGUpe1xyXG5cdFx0XHRjYXNlICdlbW90aWNvbic6XHJcblx0XHRcdFx0ZGF0YSA9ICdb6KGo5oOFXSdcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAndmlkZW8nOlxyXG5cdFx0XHRcdGRhdGEgPSAnW+inhumikV0nXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2ltYWdlJzpcclxuXHRcdFx0XHRkYXRhID0gJ1vlm77niYddJ1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdhdWRpbyc6XHJcblx0XHRcdFx0ZGF0YSA9ICdb6K+t6Z+zXSdcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnY2FyZCc6XHJcblx0XHRcdFx0ZGF0YSA9ICdb5ZCN54mHXSdcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGlmKG1lc3NhZ2UuY2hhdF90eXBlID09PSAnZ3JvdXAnKXtcclxuXHRcdFx0ZGF0YSA9YCR7bWVzc2FnZS5mcm9tX25hbWV9OiAke2RhdGF9YFxyXG5cdFx0XHRyZXR1cm4gZGF0YVxyXG5cdFx0fSBcclxuXHRcdC8vIGRhdGEgPSBpc1NlbmQgPyBkYXRhIDogYCR7bWVzc2FnZS5mcm9tX25hbWV9OiAke2RhdGF9YFxyXG5cdFx0cmV0dXJuIGRhdGFcclxuXHR9XHJcblx0Ly8g5pu05paw5Lya6K+d5YiX6KGoXHJcblx0dXBkYXRlQ2hhdExpc3QobWVzc2FnZSwgaXNTZW5kID0gdHJ1ZSkge1xyXG5cdFx0Ly8g6I635Y+W5pys5Zyw5Lya6K+d5YiX6KGoXHJcblx0XHRsZXQgbGlzdCA9IHRoaXMuZ2V0Q2hhdExpc3QoKVxyXG5cdFx0Ly8g5piv5ZCm5aSE5LqO6IGK5aSp5LitXHJcblx0XHRsZXQgaXNDdXJyZW50Q2hhdCA9IGZhbHNlXHJcblx0XHQvLyDmjqXmlLZpZFxyXG5cdFx0bGV0IGlkID0gMFxyXG5cdFx0bGV0IGF2YXRhciA9ICcnXHJcblx0XHRsZXQgbmFtZSA9ICcnXHJcblxyXG5cdFx0Ly8g5Yik5pat56eB6IGK5oiW576k6IGKXHJcblx0XHRpZiAobWVzc2FnZS5jaGF0X3R5cGUgPT09ICd1c2VyJykgeyAvLyDnp4HogYpcclxuXHRcdFx0Ly8g6IGK5aSp5a+56LGh5piv5ZCm5a2Y5ZyoXHJcblx0XHRcdGlzQ3VycmVudENoYXQgPSB0aGlzLlRPID8gKGlzU2VuZCA/IHRoaXMuVE8uaWQgPT09IG1lc3NhZ2UudG9faWQgOiB0aGlzLlRPLmlkID09PSBtZXNzYWdlLmZyb21faWQpIDogZmFsc2VcclxuXHRcdFx0aWQgPSBpc1NlbmQgPyBtZXNzYWdlLnRvX2lkIDogbWVzc2FnZS5mcm9tX2lkXHJcblx0XHRcdGF2YXRhciA9IGlzU2VuZCA/IG1lc3NhZ2UudG9fYXZhdGFyIDogbWVzc2FnZS5mcm9tX2F2YXRhclxyXG5cdFx0XHRuYW1lID0gaXNTZW5kID8gbWVzc2FnZS50b19uYW1lIDogbWVzc2FnZS5mcm9tX25hbWVcclxuXHRcdH0gZWxzZSB7IC8vIOe+pOiBilxyXG5cdFx0XHRpc0N1cnJlbnRDaGF0ID0gdGhpcy5UTyAmJiB0aGlzLlRPLmlkID09PSBtZXNzYWdlLnRvX2lkXHJcblx0XHRcdGlkID0gbWVzc2FnZS50b19pZFxyXG5cdFx0XHRhdmF0YXIgPSBtZXNzYWdlLnRvX2F2YXRhclxyXG5cdFx0XHRuYW1lID0gbWVzc2FnZS50b19uYW1lXHJcblx0XHR9XHJcblx0XHQvLyDkvJror53mmK/lkKblrZjlnKhcclxuXHRcdGxldCBpbmRleCA9IGxpc3QuZmluZEluZGV4KGl0ZW0gPT4ge1xyXG5cdFx0XHRyZXR1cm4gaXRlbS5jaGF0X3R5cGUgPT09IG1lc3NhZ2UuY2hhdF90eXBlICYmIGl0ZW0uaWQgPT09IGlkXHJcblx0XHR9KVxyXG5cdFx0Ly8g5pyA5ZCO5LiA5p2h5raI5oGv5bGV546w5b2i5byPXHJcblx0XHQvLyBsZXQgZGF0YSA9IGlzU2VuZCA/IG1lc3NhZ2UuZGF0YSA6IGAke21lc3NhZ2UuZnJvbV9uYW1lfToke21lc3NhZ2UuZGF0YX1gXHJcblx0XHRsZXQgZGF0YSA9IHRoaXMuZm9ybWF0Q2hhdEl0ZW1EYXRhKG1lc3NhZ2UsaXNTZW5kKVxyXG5cdFx0Ly8gbGV0IGRhdGEgPSBtZXNzYWdlLmRhdGEubGVuZ3RoID4gMTggPyBtZXNzYWdlLmRhdGEuc2xpY2UoMCwxNikgKyAnLi4uJyA6IG1lc3NhZ2UuZGF0YTtcclxuXHRcdC8vIGRhdGEgPSBpc1NlbmQgPyBkYXRhIDogYCR7bWVzc2FnZS5mcm9tX25hbWV9OiR7ZGF0YX1gXHJcblx0XHQvLyDkvJror53kuI3lrZjlnKjvvIzliJvlu7rkvJror51cclxuXHRcdC8vIOacquivu+aVsFxyXG5cdFx0bGV0IG5vcmVhZG51bSA9IChpc1NlbmQgfHwgaXNDdXJyZW50Q2hhdCkgPyAwIDogMVxyXG5cdFx0aWYgKGluZGV4ID09PSAtMSkge1xyXG5cdFx0XHRsZXQgY2hhdEl0ZW0gPSB7XHJcblx0XHRcdFx0aWQsIC8v5o6l5pS25Lq6L+e+pGlkXHJcblx0XHRcdFx0Y2hhdF90eXBlOiBtZXNzYWdlLmNoYXRfdHlwZSwgIC8v5o6l5pS257G75Z6LdXNlcuWNleiBiiBncm91cOe+pOiBiuS4gOi0qua6kCxcclxuXHRcdFx0XHRhdmF0YXIsIC8v5o6l5pS25Lq6L+e+pOWktOWDj1xyXG5cdFx0XHRcdG5hbWUsIC8v5o6l5pS25Lq6L+e+pOaYteensFxyXG5cdFx0XHRcdHVwZGF0ZV90aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpLCAvL+acgOWQjuS4gOadoea2iOaBr+eahOaXtumXtOaIs1xyXG5cdFx0XHRcdGRhdGEsLy/mnIDlkI7kuIDmnaHmtojmga/lhoXlrrlcclxuXHRcdFx0XHR0eXBlOiBtZXNzYWdlLnR5cGUsIC8v5pyA5ZCO5LiA5p2h5raI5oGv57G75Z6LXHJcblx0XHRcdFx0bm9yZWFkbnVtLCAvL+acquivu+aVsFxyXG5cdFx0XHRcdGlzdG9wOiBmYWxzZSwgLy/mmK/lkKbnva7pobZcclxuXHRcdFx0XHRzaG93bmlja25hbWU6IGZhbHNlLCAvL+aYr+WQpuaYvuekuuaYteensFxyXG5cdFx0XHRcdG5vd2FybjogZmFsc2UsIC8v5raI5oGv5YWN5omT5omwXHJcblx0XHRcdFx0c3Ryb25nd2FybjogZmFsc2UsIC8v5piv5ZCm5byA5ZCv5by65o+Q6YaSXHJcblx0XHRcdH1cclxuXHRcdFx0Ly8g576k6IGKXHJcblx0XHRcdGlmKG1lc3NhZ2UuY2hhdF90eXBlID09PSAnZ3JvdXAnICYmIG1lc3NhZ2UuZ3JvdXApe1xyXG5cdFx0XHRcdGNoYXRJdGVtLnNob3duaWNrbmFtZSA9IHRydWVcclxuXHRcdFx0XHRjaGF0SXRlbS5uYW1lID0gbWVzc2FnZS50b19uYW1lXHJcblx0XHRcdFx0Y2hhdEl0ZW0gPSB7XHJcblx0XHRcdFx0XHQuLi5jaGF0SXRlbSxcclxuXHRcdFx0XHRcdHVzZXJfaWQ6bWVzc2FnZS5ncm91cC51c2VyX2lkLFx0Ly8g576k566h55CG5ZGYaWRcclxuXHRcdFx0XHRcdHJlbWFyazpcIlwiLFx0Ly8g576k5YWs5ZGKXHJcblx0XHRcdFx0XHRpbnZpdGVfY29uZmlybToxXHQvL+mCgOivt+ehruiupFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRsaXN0LnVuc2hpZnQoY2hhdEl0ZW0pXHJcblx0XHR9IGVsc2UgeyAvL+abtOaWsOS8muivnVxyXG5cdFx0XHQvLyDmi7/liLDlvZPliY3kvJror51cclxuXHRcdFx0bGV0IGl0ZW0gPSBsaXN0W2luZGV4XVxyXG5cdFx0XHQvLyDmm7TmlrDmnIDlkI7kuIDmnaHmtojmga9cclxuXHRcdFx0aXRlbS51cGRhdGVfdGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ3Rv4oCU4oCUbmFtZScsbWVzc2FnZS50b19uYW1lKVxyXG5cdFx0XHRpdGVtLm5hbWUgPSBuYW1lXHJcblx0XHRcdGl0ZW0uZGF0YSA9IGRhdGFcclxuXHRcdFx0aXRlbS50eXBlID0gbWVzc2FnZS50eXBlXHJcblx0XHRcdC8vIOacquivu+aVsOabtOaWsFxyXG5cdFx0XHRpdGVtLm5vcmVhZG51bSArPSBub3JlYWRudW1cclxuXHRcdFx0Ly8g572u6aG25Lya6K+dXHJcblx0XHRcdGxpc3QgPSB0aGlzLmxpc3RUb0ZpcnN0KGxpc3QsaW5kZXgpXHJcblx0XHR9XHJcblx0XHQvLyDlrZjlgqhcclxuXHRcdGxldCBrZXkgPSBgY2hhdGxpc3RfJHt0aGlzLnVzZXIuaWR9YFxyXG5cdFx0dGhpcy5zZXRTdG9yYWdlKGtleSxsaXN0KVxyXG5cdFx0Ly/mm7TmlrDmnKror7vmlbBcclxuXHRcdHRoaXMudXBkYXRlQmFkZ2UobGlzdClcclxuXHRcdC8vIOmAmuefpeabtOaWsHZ1ZXjkuK3nmoTogYrlpKnkvJror53liJfooahcclxuXHRcdHVuaS4kZW1pdCgnb25VcGRhdGVDaGF0TGlzdCcsbGlzdClcclxuXHRcdHJldHVybiBsaXN0XHJcblx0fVxyXG5cdC8vIOabtOaWsOacquivu+aVsFxyXG5cdGFzeW5jIHVwZGF0ZUJhZGdlKGxpc3QgPSBmYWxzZSl7XHJcblx0XHQvLyDojrflj5bmiYDmnInkvJror53liJfooahcclxuXHRcdGxpc3QgPSBsaXN0ID8gbGlzdCA6IHRoaXMuZ2V0Q2hhdExpc3QoKVxyXG5cdFx0Ly8g57uf6K6h5omA5pyJ5pyq6K+75pWwXHJcblx0XHRsZXQgdG90YWwgPSAwXHJcblx0XHRsaXN0LmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRcdHRvdGFsICs9IGl0ZW0ubm9yZWFkbnVtXHJcblx0XHR9KVxyXG5cdFx0Ly8g6K6+572u5bqV6YOo5a+86Iiq5qCP6KeS5qCHXHJcblx0XHRpZih0b3RhbCA+IDApe1xyXG5cdFx0XHR1bmkuc2V0VGFiQmFyQmFkZ2Uoe1xyXG5cdFx0XHRcdGluZGV4OjAsXHJcblx0XHRcdFx0dGV4dDp0b3RhbCA8PSA5OSA/IHRvdGFsLnRvU3RyaW5nKCkgOiAnOTkrJ1xyXG5cdFx0XHR9KVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dW5pLnJlbW92ZVRhYkJhckJhZGdlKHtcclxuXHRcdFx0XHRpbmRleDowXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0XHR1bmkuJGVtaXQoJ3RvdGFsTm9yZWFkbnVtJyx0b3RhbClcclxuXHR9XHJcblx0Ly8g5pu05paw5oyH5a6a5Lya6K+dXHJcblx0YXN5bmMgdXBkYXRlQ2hhdEl0ZW0od2hlcmUsZGF0YSl7XHJcblx0XHQvLyDojrflj5bmiYDmnInkvJror53liJfooahcclxuXHRcdGxldCBsaXN0ID0gdGhpcy5nZXRDaGF0TGlzdCgpXHJcblx0XHQvLyDmib7liLDlvZPliY3kvJror51cclxuXHRcdGxldCBpbmRleCA9IGxpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pZCA9PT0gd2hlcmUuaWQgJiYgaXRlbS5jaGF0X3R5cGUgPT09IHdoZXJlLmNoYXRfdHlwZSlcclxuXHRcdGlmKGluZGV4ID09PSAtMSlyZXR1cm5cclxuXHRcdC8vIOabtOaWsOaVsOaNrlxyXG5cdFx0aWYodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpe1xyXG5cdFx0XHRsaXN0W2luZGV4XSAgPSBkYXRhKGxpc3RbaW5kZXhdKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bGlzdFtpbmRleF0gPSBkYXRhXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGxldCBrZXkgPSBgY2hhdGxpc3RfJHt0aGlzLnVzZXIuaWR9YFxyXG5cdFx0dGhpcy5zZXRTdG9yYWdlKGtleSxsaXN0KVxyXG5cdFx0Ly8g6YCa55+l5pu05pawdnVleOS4reeahOiBiuWkqeS8muivneWIl+ihqFxyXG5cdFx0dW5pLiRlbWl0KCdvblVwZGF0ZUNoYXRMaXN0JyxsaXN0KVxyXG5cdH1cclxuXHQvLyDor7vlj5bkvJror51cclxuXHRhc3luYyByZWFkQ2hhdEl0ZW0oaWQsY2hhdF90eXBlKXtcclxuXHRcdC8vIOiOt+WPluaJgOacieS8muivneWIl+ihqFxyXG5cdFx0bGV0IGxpc3QgPSB0aGlzLmdldENoYXRMaXN0KClcclxuXHRcdC8vIOaJvuWIsOW9k+WJjeS8muivnVxyXG5cdFx0bGV0IGluZGV4ID0gbGlzdC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkICYmIGl0ZW0uY2hhdF90eXBlID09PSBjaGF0X3R5cGUpXHJcblx0XHRpZihpbmRleCAhPT0gLTEpe1xyXG5cdFx0XHRsaXN0W2luZGV4XS5ub3JlYWRudW0gPSAwXHJcblx0XHRcdGxldCBrZXkgPSBgY2hhdGxpc3RfJHt0aGlzLnVzZXIuaWR9YFxyXG5cdFx0XHR0aGlzLnNldFN0b3JhZ2Uoa2V5LGxpc3QpXHJcblx0XHRcdC8vIOmHjeaWsOiOt+WPluaAu+acquivu+aVsFxyXG5cdFx0XHR0aGlzLnVwZGF0ZUJhZGdlKClcclxuXHRcdFx0Ly8g6YCa55+l5pu05pawdnVleOS4reeahOiBiuWkqeS8muivneWIl+ihqFxyXG5cdFx0XHR1bmkuJGVtaXQoJ29uVXBkYXRlQ2hhdExpc3QnLGxpc3QpXHJcblx0XHR9XHJcblx0fVxyXG5cdC8vIOWIoOmZpOaMh+WumuS8muivnVxyXG5cdGFzeW5jIHJlbW92ZUNoYXRJdGVtKGlkLGNoYXRfdHlwZSl7XHJcblx0XHQvLyDojrflj5bmiYDmnInkvJror53liJfooahcclxuXHRcdGxldCBsaXN0ID0gdGhpcy5nZXRDaGF0TGlzdCgpXHJcblx0XHQvLyDmib7liLDlvZPliY3kvJror51cclxuXHRcdGxldCBpbmRleCA9IGxpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQgJiYgaXRlbS5jaGF0X3R5cGUgPT09IGNoYXRfdHlwZSlcclxuXHRcdGlmKGluZGV4ICE9PSAtMSl7XHJcblx0XHRcdGxpc3Quc3BsaWNlKGluZGV4LDEpXHJcblx0XHRcdGxldCBrZXkgPSBgY2hhdGxpc3RfJHt0aGlzLnVzZXIuaWR9YFxyXG5cdFx0XHR0aGlzLnNldFN0b3JhZ2Uoa2V5LGxpc3QpXHJcblx0XHRcdC8vIOmHjeaWsOiOt+WPluaAu+acquivu+aVsFxyXG5cdFx0XHR0aGlzLnVwZGF0ZUJhZGdlKClcclxuXHRcdFx0Ly8g6YCa55+l5pu05pawdnVleOS4reeahOiBiuWkqeS8muivneWIl+ihqFxyXG5cdFx0XHR1bmkuJGVtaXQoJ29uVXBkYXRlQ2hhdExpc3QnLGxpc3QpXHJcblx0XHR9XHJcblx0fVxyXG5cdC8vIOa4heepuuiBiuWkqeiusOW9lVxyXG5cdGFzeW5jIGNsZWFyQ2hhdERldGFpbChpZCxjaGF0X3R5cGUpe1xyXG5cdFx0bGV0IGtleSA9IGBjaGF0RGV0YWlsXyR7dGhpcy51c2VyLmlkfV8ke2NoYXRfdHlwZX1fJHtpZH1gXHJcblx0XHQkVS5yZW1vdmVTdG9yYWdlKGtleSlcclxuXHRcdFxyXG5cdFx0Ly8g6I635Y+W5omA5pyJ5Lya6K+d5YiX6KGoXHJcblx0XHRsZXQgbGlzdCA9IHRoaXMuZ2V0Q2hhdExpc3QoKVxyXG5cdFx0Ly8g5om+5Yiw5b2T5YmN5Lya6K+dXHJcblx0XHRsZXQgaW5kZXggPSBsaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IGlkICYmIGl0ZW0uY2hhdF90eXBlID09PSBjaGF0X3R5cGUpXHJcblx0XHRpZihpbmRleCAhPT0gLTEpe1xyXG5cdFx0XHRsaXN0W2luZGV4XS5kYXRhID0gJycgXHJcblx0XHRcdGxldCBrZXkgPSBgY2hhdGxpc3RfJHt0aGlzLnVzZXIuaWR9YFxyXG5cdFx0XHR0aGlzLnNldFN0b3JhZ2Uoa2V5LGxpc3QpXHJcblx0XHRcdC8vIOmAmuefpeabtOaWsHZ1ZXjkuK3nmoTogYrlpKnkvJror53liJfooahcclxuXHRcdFx0dW5pLiRlbWl0KCdvblVwZGF0ZUNoYXRMaXN0JyxsaXN0KVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cdC8vIOiOt+WPluacrOWcsOS8muivneWIl+ihqFxyXG5cdGdldENoYXRMaXN0KCkge1xyXG5cdFx0bGV0IGtleSA9IGBjaGF0bGlzdF8ke3RoaXMudXNlci5pZH1gXHJcblx0XHRyZXR1cm4gdGhpcy5nZXRTdG9yYWdlKGtleSlcclxuXHR9XHJcblx0Z2V0Q2hhdExpc3RJdGVtKGlkLGNoYXRfdHlwZSl7XHJcblx0XHQvLyDojrflj5bmiYDmnInkvJror53liJfooahcclxuXHRcdGxldCBsaXN0ID0gdGhpcy5nZXRDaGF0TGlzdCgpXHJcblx0XHQvLyDmib7liLDlvZPliY3kvJror51cclxuXHRcdGxldCBpbmRleCA9IGxpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pZCAmJiBpdGVtLmNoYXRfdHlwZSA9PT0gY2hhdF90eXBlKVxyXG5cdFx0aWYoaW5kZXggIT09IC0xKXtcclxuXHRcdFx0cmV0dXJuIGxpc3RbaW5kZXhdXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2VcclxuXHR9XHJcblx0Ly8g6I635Y+W5a2Y5YKoXHJcblx0Z2V0U3RvcmFnZShrZXkpIHtcclxuXHRcdGxldCBsaXN0ID0gJFUuZ2V0U3RvcmFnZShrZXkpXHJcblx0XHRyZXR1cm4gbGlzdCA/IEpTT04ucGFyc2UobGlzdCkgOiBbXVxyXG5cdH1cclxuXHQvLyDorr7nva7lrZjlgqhcclxuXHRzZXRTdG9yYWdlKGtleSwgdmFsdWUpIHtcclxuXHRcdHJldHVybiAkVS5zZXRTdG9yYWdlKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKVxyXG5cdH1cclxuXHQvLyDmlbDnu4Tnva7pobZcclxuXHRsaXN0VG9GaXJzdChhcnIsaW5kZXgpe1xyXG5cdFx0aWYoaW5kZXggIT0wICl7XHJcblx0XHRcdGFyci51bnNoaWZ0KGFyci5zcGxpY2UoaW5kZXgsMSlbMF0pXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYXJyXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGF0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 19);

/***/ }),
/* 19 */
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true });

    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
  NativeIteratorPrototype !== Op &&
  hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
  Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
  GeneratorFunctionPrototype,
  toStringTagSymbol,
  "GeneratorFunction");


  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ?
    ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" :
    false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
        typeof value === "object" &&
        hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(
      callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) :
      callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
    wrap(innerFn, outerFn, self, tryLocsList),
    PromiseImpl);


    return exports.isGeneratorFunction(outerFn) ?
    iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ?
          GenStateCompleted :
          GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done };


        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
        "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
          hasOwn.call(this, name) &&
          !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
        hasOwn.call(entry, "finallyLoc") &&
        this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (
      type === "break" ||
      type === "continue") &&
      finallyEntry.tryLoc <= arg &&
      arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
      record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc };


      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    } };


  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);


try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ })
/******/ ]);