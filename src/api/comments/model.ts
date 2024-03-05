import mongoose, { Schema } from 'mongoose';
import crypto from 'crypto';
import { TComment } from '@/types';

const schema = new Schema<TComment>(
  {
    owner: {
      ip: {
        type: String,
        required: false
      },
      gravatar: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    pageUrl: {
      type: String,
      required: true
    },
    pageId: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    secret: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const model = mongoose.model('Comment', schema);
export default model;
