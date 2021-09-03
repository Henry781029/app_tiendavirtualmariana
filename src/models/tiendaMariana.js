import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const tiendaMariana = new Schema({
    name :{type: String, require: true},
    email:{type: String, require: true},
    country:{type:String, require:true}
});

/*const store = mongoose.model('storeMariana',tiendaMariana);
export default store;*/
module.exports = mongoose.model('storeMariana', tiendaMariana);