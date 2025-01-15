/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.novels = (function() {

    /**
     * Namespace novels.
     * @exports novels
     * @namespace
     */
    var novels = {};

    novels.Novel = (function() {

        /**
         * Properties of a Novel.
         * @memberof novels
         * @interface INovel
         * @property {number|null} [novelId] Novel novelId
         * @property {string|null} [title] Novel title
         * @property {string|null} [imageUrl] Novel imageUrl
         */

        /**
         * Constructs a new Novel.
         * @memberof novels
         * @classdesc Represents a Novel.
         * @implements INovel
         * @constructor
         * @param {novels.INovel=} [properties] Properties to set
         */
        function Novel(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Novel novelId.
         * @member {number} novelId
         * @memberof novels.Novel
         * @instance
         */
        Novel.prototype.novelId = 0;

        /**
         * Novel title.
         * @member {string} title
         * @memberof novels.Novel
         * @instance
         */
        Novel.prototype.title = "";

        /**
         * Novel imageUrl.
         * @member {string} imageUrl
         * @memberof novels.Novel
         * @instance
         */
        Novel.prototype.imageUrl = "";

        /**
         * Creates a new Novel instance using the specified properties.
         * @function create
         * @memberof novels.Novel
         * @static
         * @param {novels.INovel=} [properties] Properties to set
         * @returns {novels.Novel} Novel instance
         */
        Novel.create = function create(properties) {
            return new Novel(properties);
        };

        /**
         * Encodes the specified Novel message. Does not implicitly {@link novels.Novel.verify|verify} messages.
         * @function encode
         * @memberof novels.Novel
         * @static
         * @param {novels.INovel} message Novel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Novel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.novelId != null && Object.hasOwnProperty.call(message, "novelId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.novelId);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            if (message.imageUrl != null && Object.hasOwnProperty.call(message, "imageUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.imageUrl);
            return writer;
        };

        /**
         * Encodes the specified Novel message, length delimited. Does not implicitly {@link novels.Novel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof novels.Novel
         * @static
         * @param {novels.INovel} message Novel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Novel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Novel message from the specified reader or buffer.
         * @function decode
         * @memberof novels.Novel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {novels.Novel} Novel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Novel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.novels.Novel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.novelId = reader.int32();
                        break;
                    }
                case 2: {
                        message.title = reader.string();
                        break;
                    }
                case 3: {
                        message.imageUrl = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Novel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof novels.Novel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {novels.Novel} Novel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Novel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Novel message.
         * @function verify
         * @memberof novels.Novel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Novel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.novelId != null && message.hasOwnProperty("novelId"))
                if (!$util.isInteger(message.novelId))
                    return "novelId: integer expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                if (!$util.isString(message.imageUrl))
                    return "imageUrl: string expected";
            return null;
        };

        /**
         * Creates a Novel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof novels.Novel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {novels.Novel} Novel
         */
        Novel.fromObject = function fromObject(object) {
            if (object instanceof $root.novels.Novel)
                return object;
            var message = new $root.novels.Novel();
            if (object.novelId != null)
                message.novelId = object.novelId | 0;
            if (object.title != null)
                message.title = String(object.title);
            if (object.imageUrl != null)
                message.imageUrl = String(object.imageUrl);
            return message;
        };

        /**
         * Creates a plain object from a Novel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof novels.Novel
         * @static
         * @param {novels.Novel} message Novel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Novel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.novelId = 0;
                object.title = "";
                object.imageUrl = "";
            }
            if (message.novelId != null && message.hasOwnProperty("novelId"))
                object.novelId = message.novelId;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                object.imageUrl = message.imageUrl;
            return object;
        };

        /**
         * Converts this Novel to JSON.
         * @function toJSON
         * @memberof novels.Novel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Novel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Novel
         * @function getTypeUrl
         * @memberof novels.Novel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Novel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/novels.Novel";
        };

        return Novel;
    })();

    novels.NovelList = (function() {

        /**
         * Properties of a NovelList.
         * @memberof novels
         * @interface INovelList
         * @property {Array.<novels.INovel>|null} [novels] NovelList novels
         * @property {number|null} [totalPages] NovelList totalPages
         * @property {number|null} [currentPage] NovelList currentPage
         */

        /**
         * Constructs a new NovelList.
         * @memberof novels
         * @classdesc Represents a NovelList.
         * @implements INovelList
         * @constructor
         * @param {novels.INovelList=} [properties] Properties to set
         */
        function NovelList(properties) {
            this.novels = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NovelList novels.
         * @member {Array.<novels.INovel>} novels
         * @memberof novels.NovelList
         * @instance
         */
        NovelList.prototype.novels = $util.emptyArray;

        /**
         * NovelList totalPages.
         * @member {number} totalPages
         * @memberof novels.NovelList
         * @instance
         */
        NovelList.prototype.totalPages = 0;

        /**
         * NovelList currentPage.
         * @member {number} currentPage
         * @memberof novels.NovelList
         * @instance
         */
        NovelList.prototype.currentPage = 0;

        /**
         * Creates a new NovelList instance using the specified properties.
         * @function create
         * @memberof novels.NovelList
         * @static
         * @param {novels.INovelList=} [properties] Properties to set
         * @returns {novels.NovelList} NovelList instance
         */
        NovelList.create = function create(properties) {
            return new NovelList(properties);
        };

        /**
         * Encodes the specified NovelList message. Does not implicitly {@link novels.NovelList.verify|verify} messages.
         * @function encode
         * @memberof novels.NovelList
         * @static
         * @param {novels.INovelList} message NovelList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NovelList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.novels != null && message.novels.length)
                for (var i = 0; i < message.novels.length; ++i)
                    $root.novels.Novel.encode(message.novels[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.totalPages != null && Object.hasOwnProperty.call(message, "totalPages"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.totalPages);
            if (message.currentPage != null && Object.hasOwnProperty.call(message, "currentPage"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.currentPage);
            return writer;
        };

        /**
         * Encodes the specified NovelList message, length delimited. Does not implicitly {@link novels.NovelList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof novels.NovelList
         * @static
         * @param {novels.INovelList} message NovelList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NovelList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NovelList message from the specified reader or buffer.
         * @function decode
         * @memberof novels.NovelList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {novels.NovelList} NovelList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NovelList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.novels.NovelList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.novels && message.novels.length))
                            message.novels = [];
                        message.novels.push($root.novels.Novel.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.totalPages = reader.int32();
                        break;
                    }
                case 3: {
                        message.currentPage = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NovelList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof novels.NovelList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {novels.NovelList} NovelList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NovelList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NovelList message.
         * @function verify
         * @memberof novels.NovelList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NovelList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.novels != null && message.hasOwnProperty("novels")) {
                if (!Array.isArray(message.novels))
                    return "novels: array expected";
                for (var i = 0; i < message.novels.length; ++i) {
                    var error = $root.novels.Novel.verify(message.novels[i]);
                    if (error)
                        return "novels." + error;
                }
            }
            if (message.totalPages != null && message.hasOwnProperty("totalPages"))
                if (!$util.isInteger(message.totalPages))
                    return "totalPages: integer expected";
            if (message.currentPage != null && message.hasOwnProperty("currentPage"))
                if (!$util.isInteger(message.currentPage))
                    return "currentPage: integer expected";
            return null;
        };

        /**
         * Creates a NovelList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof novels.NovelList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {novels.NovelList} NovelList
         */
        NovelList.fromObject = function fromObject(object) {
            if (object instanceof $root.novels.NovelList)
                return object;
            var message = new $root.novels.NovelList();
            if (object.novels) {
                if (!Array.isArray(object.novels))
                    throw TypeError(".novels.NovelList.novels: array expected");
                message.novels = [];
                for (var i = 0; i < object.novels.length; ++i) {
                    if (typeof object.novels[i] !== "object")
                        throw TypeError(".novels.NovelList.novels: object expected");
                    message.novels[i] = $root.novels.Novel.fromObject(object.novels[i]);
                }
            }
            if (object.totalPages != null)
                message.totalPages = object.totalPages | 0;
            if (object.currentPage != null)
                message.currentPage = object.currentPage | 0;
            return message;
        };

        /**
         * Creates a plain object from a NovelList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof novels.NovelList
         * @static
         * @param {novels.NovelList} message NovelList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NovelList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.novels = [];
            if (options.defaults) {
                object.totalPages = 0;
                object.currentPage = 0;
            }
            if (message.novels && message.novels.length) {
                object.novels = [];
                for (var j = 0; j < message.novels.length; ++j)
                    object.novels[j] = $root.novels.Novel.toObject(message.novels[j], options);
            }
            if (message.totalPages != null && message.hasOwnProperty("totalPages"))
                object.totalPages = message.totalPages;
            if (message.currentPage != null && message.hasOwnProperty("currentPage"))
                object.currentPage = message.currentPage;
            return object;
        };

        /**
         * Converts this NovelList to JSON.
         * @function toJSON
         * @memberof novels.NovelList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NovelList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NovelList
         * @function getTypeUrl
         * @memberof novels.NovelList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NovelList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/novels.NovelList";
        };

        return NovelList;
    })();

    return novels;
})();

module.exports = $root;
