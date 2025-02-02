import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },

     email: {
        type: String,
        required: true,
        unique: true

     },
     
     password: {
        type: String,
        required: true,
        minlength: 8,
     },

     role: {
      type: String,
      enum: ['user', 'organizer'],
      default: 'user'
  },

  // Organizer-specific fields
  organizationName: {
      type: String,
      required: function() { return this.role === 'organizer'; }
  },
  organizationContact: {
      type: String,
      required: function() { return this.role === 'organizer'; }
  },
  
  eventsOrganized: [{
    type: Schema.Types.ObjectId,
    ref: 'Event'
}]

}, {timestamps: true});

userSchema.plugin(toJSON);

const User = model ('User', userSchema);

export default User;