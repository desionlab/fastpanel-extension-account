/**
 * EmailAddress.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */

import Mongoose from 'mongoose';
import { IUser } from './User';
import { ILabel } from './Label';

export interface IEmailAddress extends Mongoose.Document {
  /**
   * The owner of the record.
   */
  user: IUser;
  
  /**
   * 
   */
  label: ILabel;
  
  /**
   * 
   */
  value: string;
  
  /**
   * Specifies the email as primary.
   */
  primary: boolean,

  /* ----------------------------------------------------------------------- */

  /**
   * Any parameters in any form but preferably an object.
   */
  attrs?: any,

  /**
   * Status of the enabled record.
   */
  enabled?: boolean;

  /* ----------------------------------------------------------------------- */

  /**
   * 
   */
  createdAt?: Date;

  /**
   * 
   */
  updatedAt?: Date;

  /**
   * Current version of the record.
   */
  version?: number;
};

export const EmailAddressSchema = new Mongoose.Schema({
  /**
   * The owner of the token.
   */
  user: {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Account.User'
  },

  /**
   * 
   */
  label: {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Account.Label'
  },
  
  /**
   * 
   */
  value: {
    type: Mongoose.Schema.Types.String,
    required: true,
    sparse: true,
    unique: true,
    uniqueCaseInsensitive: true
  },
  
  /**
   * Specifies the email as primary.
   */
  primary: {
    type: Mongoose.Schema.Types.Boolean,
    default: false
  },

  /**
   * Any parameters in any form but preferably an object.
   */
  attrs: {
    type: Mongoose.Schema.Types.Mixed,
    default: {}
  },

  /**
   * Status of the enabled record.
   */
  enabled: {
    type: Mongoose.Schema.Types.Boolean,
    default: true
  }
}, {
  /* Set (collection) table name. */
  collection: 'accountEmailAddress',
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

EmailAddressSchema.plugin(require('mongoose-autopopulate'));
EmailAddressSchema.plugin(require('mongoose-hidden')(), {
  hidden: {
    version: false
  }
});

export const EmailAddressModel = Mongoose.model<IEmailAddress>('Account.EmailAddress', EmailAddressSchema);

/* End of file EmailAddress.ts */