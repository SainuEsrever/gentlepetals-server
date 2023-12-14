const mongoose = require('mongoose');

const Schema = mongoose.Schema

const billingSchema = new Schema({
    orderId: {
        type : Schema.Types.ObjectId,
        ref : 'Order',
        required: true,
    },
    accountId: {
        type : Schema.Types.ObjectId,
        ref : 'Account',
        required: true,
    },
    totalPrice: {
        type: Number,
        defaultValue: 0,
        required: true,
    },
    status : {
        type: String,
        default: 'pending'
    },
},
{
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model('Billing', billingSchema)