"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CodePen = /*#__PURE__*/function (_React$Component) {
  _inherits(CodePen, _React$Component);

  var _super = _createSuper(CodePen);

  function CodePen(props) {
    var _this;

    _classCallCheck(this, CodePen);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }
  /**
   * when type is embed, load embed/ei.js first.
   */


  _createClass(CodePen, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.type === 'embed') {
        var EMBED_JS = 'https://static.codepen.io/assets/embed/ei.js';

        var loadEmbed = function loadEmbed() {
          var script = document.createElement('script');
          script.src = EMBED_JS;
          script.async = 1;
          document.body.appendChild(script);
        };

        loadEmbed();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var UserLink = "https://codepen.io/".concat(this.props.user);
      var CodeSrc = "https://codepen.io/".concat(this.props.user, "/embed/").concat(this.props.hash, "?theme-id=").concat(this.props.theme, "&editable=").concat(this.props.editable, "&height=").concat(this.props.height, "&default-tab=").concat(this.props.tab, "&user=").concat(this.props.user, "&slug-hash=").concat(this.props.hash, "&pen-title=").concat(this.props.title || '');
      var PenLink = "".concat(UserLink, "/pen/").concat(this.props.hash);

      if (this.props.type === 'iframe') {
        return /*#__PURE__*/_react["default"].createElement("iframe", {
          width: this.props.width,
          height: this.props.height,
          style: {
            width: this.props.width,
            height: this.props.height
          },
          title: this.props.title || '',
          src: CodeSrc,
          allowFullScreen: true,
          scrolling: "no",
          frameBorder: "no",
          loading: "lazy",
          allowtransparency: "true"
        }, "See the Pen ", /*#__PURE__*/_react["default"].createElement("a", {
          href: PenLink
        }, this.props.title || ''), " by Leedom (", /*#__PURE__*/_react["default"].createElement("a", {
          href: UserLink
        }, "@", this.props.user), ") on ", /*#__PURE__*/_react["default"].createElement("a", {
          href: "https://codepen.io"
        }, "CodePen"), ".");
      }

      return /*#__PURE__*/_react["default"].createElement("p", {
        className: "codepen",
        "data-height": this.props.height,
        "data-theme-id": this.props.theme,
        "data-default-tab": this.props.tab,
        "data-user": this.props.user,
        "data-slug-hash": this.props.hash,
        "data-editable": this.props.editable,
        style: {
          width: this.props.width
        }
      }, "See the Pen ", /*#__PURE__*/_react["default"].createElement("a", {
        href: PenLink
      }, this.props.title || ''), " by Leedom (", /*#__PURE__*/_react["default"].createElement("a", {
        href: UserLink
      }, "@", this.props.user), ") on ", /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://codepen.io"
      }, "CodePen"), ".");
    }
  }]);

  return CodePen;
}(_react["default"].Component);

CodePen.propTypes = {
  type: _propTypes["default"].oneOf(['iframe', 'embed']),
  user: _propTypes["default"].string.isRequired,
  hash: _propTypes["default"].string.isRequired,
  width: _propTypes["default"].string,
  height: _propTypes["default"].string,
  title: _propTypes["default"].string,
  theme: _propTypes["default"].string,
  editable: _propTypes["default"].bool,
  tab: _propTypes["default"].oneOf(['html,result', 'css,result', 'js,result', 'result'])
};
CodePen.defaultProps = {
  type: 'iframe',
  width: '100%',
  height: '400',
  theme: 'light',
  editable: true,
  tab: 'result'
};
var _default = CodePen;
exports["default"] = _default;