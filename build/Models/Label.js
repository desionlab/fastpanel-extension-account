"use strict";
/**
 * Label.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
/**
 * A set of label target definitions.
 */
var LabelTarget;
(function (LabelTarget) {
    LabelTarget[LabelTarget["PHONE"] = 0] = "PHONE";
    LabelTarget[LabelTarget["EMAIL"] = 1] = "EMAIL";
    LabelTarget[LabelTarget["POSTAL"] = 2] = "POSTAL";
    LabelTarget[LabelTarget["URL"] = 3] = "URL";
})(LabelTarget = exports.LabelTarget || (exports.LabelTarget = {}));
;
;
exports.LabelSchema = new mongoose_1.default.Schema({
    /**
     *
     */
    alias: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
        sparse: true,
        unique: true,
        uniqueCaseInsensitive: true
    },
    /**
     *
     */
    title: {
        type: mongoose_1.default.Schema.Types.String,
        default: ''
    },
    /**
     *
     */
    target: {
        type: [mongoose_1.default.Schema.Types.String],
    },
    /**
     * Status of the enabled record.
     */
    enabled: {
        type: mongoose_1.default.Schema.Types.Boolean,
        default: true
    }
}, {
    /* Set (collection) table name. */
    collection: 'accountLabel',
    /* Logger date. */
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    },
    /* Current version of the record. */
    versionKey: 'version',
    /* Converts the mongoose document into a plain javascript object. */
    toObject: {
        getters: true,
        virtuals: true
    },
    toJSON: {
        getters: true,
        virtuals: true
    }
});
exports.LabelSchema.plugin(require('mongoose-autopopulate'));
exports.LabelSchema.plugin(require('mongoose-hidden')(), {
    hidden: {
        version: false
    }
});
exports.LabelModel = mongoose_1.default.model('Account.Label', exports.LabelSchema);
/* End of file Label.ts */ 
