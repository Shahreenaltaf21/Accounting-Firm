import  mongoose,  {Schema} from "mongoose";

const contactSchema = new Schema({
    fname:{
        type: String,
        required: [true, "First Name is required"],
        trim: true,
        minLength: [ 2, "Name must be longer than 2 char"],
        maxLength: [ 50, "Name must be lesser than 50 char"]
    },
    lname:{
        type: String,
        required: [true, "Last Name is required"],
        trim: true,
        minLength: [ 2, "Name must be longer than 2 char"],
        maxLength: [ 50, "Name must be lesser than 50 char"]
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        match: [/^[\w.%+-]+@[\w.-]+[A-Za-z]{2,}$/i,"invalid email"]
    },
    phone : {
        type: String, 
        required:[true, "Phone number is required"]
    },
    message : {
        type: String, 
        required:[true, "Message is required"]
    },
    fileUpload :{
        file: { type: Buffer },
        filename: { type: String},
        mimetype: { type: String}
    }
});
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
export default Contact;