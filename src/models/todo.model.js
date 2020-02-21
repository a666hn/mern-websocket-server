import mongoose from 'mongoose'
import timestamp from '../plugins/timestamp.plugin'

const TodoSchema = new mongoose.Schema({
	name: String,
	body: String,
	isCompleted: Boolean,
	dueDate: Date,
	maxDate: Date,
})

timestamp(TodoSchema)

TodoSchema.pre('save', function(next) {
	this.isCompleted = false
	next()
})

export default mongoose.model('Todo', TodoSchema)
