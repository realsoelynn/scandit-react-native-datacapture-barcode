"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArucoDictionary = exports.ArucoMarker = exports.ArucoDictionaryPreset = exports.Ean13UpcaClassification = exports.Range = exports.CompositeFlag = exports.EncodingRange = exports.Checksum = exports.CompositeType = exports.SymbologySettings = exports.SymbologyDescription = void 0;
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var Symbology_1 = require("./Symbology");
var SymbologyDescription = /** @class */ (function () {
    function SymbologyDescription(symbology) {
        if (!symbology) {
            return;
        }
        return SymbologyDescription.all[SymbologyDescription.all
            .findIndex(function (description) { return description.identifier === symbology; })];
    }
    Object.defineProperty(SymbologyDescription, "all", {
        get: function () {
            return this.defaults().SymbologyDescriptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbologyDescription.prototype, "identifier", {
        get: function () { return this._identifier; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbologyDescription.prototype, "symbology", {
        get: function () { return this.identifier; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbologyDescription.prototype, "readableName", {
        get: function () { return this._readableName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbologyDescription.prototype, "isAvailable", {
        get: function () { return this._isAvailable; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbologyDescription.prototype, "isColorInvertible", {
        get: function () { return this._isColorInvertible; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbologyDescription.prototype, "activeSymbolCountRange", {
        get: function () { return this._activeSymbolCountRange; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbologyDescription.prototype, "defaultSymbolCountRange", {
        get: function () { return this._defaultSymbolCountRange; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbologyDescription.prototype, "supportedExtensions", {
        get: function () { return this._supportedExtensions; },
        enumerable: false,
        configurable: true
    });
    SymbologyDescription.fromJSON = function (json) {
        var symbologyDescription = new SymbologyDescription();
        symbologyDescription._identifier = json.identifier;
        symbologyDescription._readableName = json.readableName;
        symbologyDescription._isAvailable = json.isAvailable;
        symbologyDescription._isColorInvertible = json.isColorInvertible;
        symbologyDescription._activeSymbolCountRange = Range.fromJSON(json.activeSymbolCountRange);
        symbologyDescription._defaultSymbolCountRange = Range.fromJSON(json.defaultSymbolCountRange);
        symbologyDescription._supportedExtensions = json.supportedExtensions;
        return symbologyDescription;
    };
    SymbologyDescription.forIdentifier = function (identifier) {
        var identifierIndex = SymbologyDescription.all
            .findIndex(function (description) { return description.identifier === identifier; });
        if (identifierIndex === -1) {
            return null;
        }
        return new SymbologyDescription(identifier);
    };
    return SymbologyDescription;
}());
exports.SymbologyDescription = SymbologyDescription;
var SymbologySettings = /** @class */ (function (_super) {
    __extends(SymbologySettings, _super);
    function SymbologySettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SymbologySettings.prototype, "symbology", {
        get: function () {
            return this._symbology;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbologySettings.prototype, "enabledExtensions", {
        get: function () {
            return this.extensions;
        },
        enumerable: false,
        configurable: true
    });
    SymbologySettings.fromJSON = function (json) {
        var symbologySettings = new SymbologySettings();
        symbologySettings.extensions = json.extensions;
        symbologySettings.isEnabled = json.enabled;
        symbologySettings.isColorInvertedEnabled = json.colorInvertedEnabled;
        symbologySettings.checksums = json.checksums;
        symbologySettings.activeSymbolCounts = json.activeSymbolCounts;
        return symbologySettings;
    };
    SymbologySettings.prototype.setExtensionEnabled = function (extension, enabled) {
        var included = this.extensions.includes(extension);
        if (enabled && !included) {
            this.extensions.push(extension);
        }
        else if (!enabled && included) {
            this.extensions.splice(this.extensions.indexOf(extension), 1);
        }
    };
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], SymbologySettings.prototype, "_symbology", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('enabled')
    ], SymbologySettings.prototype, "isEnabled", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('colorInvertedEnabled')
    ], SymbologySettings.prototype, "isColorInvertedEnabled", void 0);
    return SymbologySettings;
}(Serializeable_1.DefaultSerializeable));
exports.SymbologySettings = SymbologySettings;
var CompositeType;
(function (CompositeType) {
    CompositeType["A"] = "A";
    CompositeType["B"] = "B";
    CompositeType["C"] = "C";
})(CompositeType || (exports.CompositeType = CompositeType = {}));
var Checksum;
(function (Checksum) {
    Checksum["Mod10"] = "mod10";
    Checksum["Mod11"] = "mod11";
    Checksum["Mod16"] = "mod16";
    Checksum["Mod43"] = "mod43";
    Checksum["Mod47"] = "mod47";
    Checksum["Mod103"] = "mod103";
    Checksum["Mod10AndMod11"] = "mod1110";
    Checksum["Mod10AndMod10"] = "mod1010";
})(Checksum || (exports.Checksum = Checksum = {}));
var EncodingRange = /** @class */ (function () {
    function EncodingRange() {
    }
    Object.defineProperty(EncodingRange.prototype, "ianaName", {
        get: function () { return this._ianaName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EncodingRange.prototype, "startIndex", {
        get: function () { return this._startIndex; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EncodingRange.prototype, "endIndex", {
        get: function () { return this._endIndex; },
        enumerable: false,
        configurable: true
    });
    EncodingRange.fromJSON = function (json) {
        var encodingRange = new EncodingRange();
        encodingRange._ianaName = json.ianaName;
        encodingRange._startIndex = json.startIndex;
        encodingRange._endIndex = json.endIndex;
        return encodingRange;
    };
    return EncodingRange;
}());
exports.EncodingRange = EncodingRange;
var CompositeFlag;
(function (CompositeFlag) {
    CompositeFlag["None"] = "none";
    CompositeFlag["Unknown"] = "unknown";
    CompositeFlag["Linked"] = "linked";
    CompositeFlag["GS1TypeA"] = "gs1TypeA";
    CompositeFlag["GS1TypeB"] = "gs1TypeB";
    CompositeFlag["GS1TypeC"] = "gs1TypeC";
})(CompositeFlag || (exports.CompositeFlag = CompositeFlag = {}));
var Range = /** @class */ (function () {
    function Range() {
    }
    Object.defineProperty(Range.prototype, "minimum", {
        get: function () {
            return this._minimum;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "maximum", {
        get: function () {
            return this._maximum;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "step", {
        get: function () {
            return this._step;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "isFixed", {
        get: function () {
            return this.minimum === this.maximum || this.step <= 0;
        },
        enumerable: false,
        configurable: true
    });
    Range.fromJSON = function (json) {
        var range = new Range();
        range._minimum = json.minimum;
        range._maximum = json.maximum;
        range._step = json.step;
        return range;
    };
    __decorate([
        (0, Serializeable_1.nameForSerialization)('minimum')
    ], Range.prototype, "_minimum", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('maximum')
    ], Range.prototype, "_maximum", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('step')
    ], Range.prototype, "_step", void 0);
    return Range;
}());
exports.Range = Range;
var Ean13UpcaClassification = /** @class */ (function () {
    function Ean13UpcaClassification() {
    }
    Ean13UpcaClassification.isUpca = function (barcode) {
        var _a, _b, _c;
        if (barcode.symbology !== Symbology_1.Symbology.EAN13UPCA) {
            return false;
        }
        return ((_a = barcode.data) === null || _a === void 0 ? void 0 : _a.length) === 12 || (((_b = barcode.data) === null || _b === void 0 ? void 0 : _b.length) === 13 && ((_c = barcode.data) === null || _c === void 0 ? void 0 : _c.charAt(0)) === '0');
    };
    Ean13UpcaClassification.isEan13 = function (barcode) {
        var _a, _b;
        if (barcode.symbology !== Symbology_1.Symbology.EAN13UPCA) {
            return false;
        }
        return ((_a = barcode.data) === null || _a === void 0 ? void 0 : _a.length) === 13 && ((_b = barcode.data) === null || _b === void 0 ? void 0 : _b.charAt(0)) !== '0';
    };
    return Ean13UpcaClassification;
}());
exports.Ean13UpcaClassification = Ean13UpcaClassification;
var ArucoDictionaryPreset;
(function (ArucoDictionaryPreset) {
    ArucoDictionaryPreset["ArucoDictionaryPreset_5X5_50"] = "5X5_50";
    ArucoDictionaryPreset["ArucoDictionaryPreset_5X5_100"] = "5X5_100";
    ArucoDictionaryPreset["ArucoDictionaryPreset_5X5_250"] = "5X5_250";
    ArucoDictionaryPreset["ArucoDictionaryPreset_5X5_1000"] = "5X5_1000";
    ArucoDictionaryPreset["ArucoDictionaryPreset_5X5_1023"] = "5X5_1023";
    ArucoDictionaryPreset["ArucoDictionaryPreset_4X4_250"] = "4X4_250";
    ArucoDictionaryPreset["ArucoDictionaryPreset_6X6_250"] = "6X6_250";
})(ArucoDictionaryPreset || (exports.ArucoDictionaryPreset = ArucoDictionaryPreset = {}));
var ArucoMarker = /** @class */ (function (_super) {
    __extends(ArucoMarker, _super);
    function ArucoMarker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ArucoMarker.prototype, "size", {
        get: function () {
            return this._markerSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArucoMarker.prototype, "data", {
        get: function () {
            return this._markerData;
        },
        enumerable: false,
        configurable: true
    });
    ArucoMarker.create = function (markerSize, markerData) {
        var arucoMarker = new ArucoMarker();
        arucoMarker._markerSize = markerSize || 0;
        arucoMarker._markerData = markerData || '';
        return arucoMarker;
    };
    __decorate([
        (0, Serializeable_1.nameForSerialization)('markerData')
    ], ArucoMarker.prototype, "_markerData", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('markerSize')
    ], ArucoMarker.prototype, "_markerSize", void 0);
    return ArucoMarker;
}(Serializeable_1.DefaultSerializeable));
exports.ArucoMarker = ArucoMarker;
var ArucoDictionary = /** @class */ (function () {
    function ArucoDictionary() {
        this._preset = null;
        this._markers = null;
        this._markerSize = null;
    }
    ArucoDictionary.fromPreset = function (preset) {
        var arucoDictionary = new ArucoDictionary();
        arucoDictionary._preset = preset;
        return arucoDictionary;
    };
    ArucoDictionary.createWithMarkers = function (markerSize, markers) {
        var arucoDictionary = new ArucoDictionary();
        arucoDictionary._markerSize = markerSize;
        arucoDictionary._markers = markers;
        return arucoDictionary;
    };
    __decorate([
        (0, Serializeable_1.nameForSerialization)('preset')
    ], ArucoDictionary.prototype, "_preset", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('markers')
    ], ArucoDictionary.prototype, "_markers", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('markerSize')
    ], ArucoDictionary.prototype, "_markerSize", void 0);
    return ArucoDictionary;
}());
exports.ArucoDictionary = ArucoDictionary;
//# sourceMappingURL=Symbology+Related.js.map