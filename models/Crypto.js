const { Schema, model, Types } = require(`mongoose`)

const URL_PATTERN = /https?:\/\/./i;

const cryptoSchema = new Schema ({
    name: {type: String, required: true, minlegth: [2, `Name must be at least 2 characters long`]},
    price:{type: Number, required: true, min: [0.01, `Price must be a positive number` ] },
    imageUrl: {
        type: String, validate: {
            validator: (value) => {URL_PATTERN.test },
            message: `Invalid URL`
        }
    },
    description: { type: String, required: true, minlegth: [10, `Description must be at least 10 characters long`]},
    paymentMethod: {type:String, required: true, enum:["crypto-wallet", "credit-card","debit-card", "paypal" ]},
    creator: { type: Types.ObjectId, ref: `User`},
    owners: {type: [Types.ObjectId], ref:`User`, default:[]}
})

cryptoSchema.index({name: 1}, {
    collation: {
        locale: `en`,
        strength: 2
    }
})

const Crypto = model(`Crypto`, cryptoSchema)

module.exports = {Crypto}